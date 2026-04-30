"""Generate BOERJIA Lubricant Product Catalog PDF"""
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.units import mm, cm
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, Table,
                                 TableStyle, PageBreak, Image as RLImage, KeepTogether)
from reportlab.pdfgen import canvas
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.graphics.shapes import Drawing, Rect, String, Line
from reportlab.graphics import renderPDF
import os

# Colors
PRIMARY = HexColor('#0066cc')
SECONDARY = HexColor('#92bddd')
DARK = HexColor('#1a1a2e')
LIGHT_BG = HexColor('#f5f9fa')
ACCENT = HexColor('#003366')
WHITE = white

OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_FILE = os.path.join(OUTPUT_DIR, 'BOERJIA_Product_Catalog_2026.pdf')

# Page setup
PAGE_W, PAGE_H = A4
MARGIN = 2 * cm

# Styles
styles = getSampleStyleSheet()

title_style = ParagraphStyle('Title2', parent=styles['Title'],
    fontSize=32, leading=38, textColor=WHITE, alignment=TA_CENTER,
    fontName='Helvetica-Bold', spaceAfter=6*mm)

subtitle_style = ParagraphStyle('Subtitle2', parent=styles['Normal'],
    fontSize=14, leading=18, textColor=HexColor('#c0d8ef'), alignment=TA_CENTER,
    fontName='Helvetica')

section_title = ParagraphStyle('SectionTitle', parent=styles['Heading1'],
    fontSize=18, leading=22, textColor=PRIMARY, fontName='Helvetica-Bold',
    spaceBefore=8*mm, spaceAfter=4*mm, borderPadding=(0, 0, 2*mm, 0))

product_name = ParagraphStyle('ProductName', parent=styles['Heading2'],
    fontSize=13, leading=16, textColor=DARK, fontName='Helvetica-Bold',
    spaceAfter=2*mm)

body_text = ParagraphStyle('Body2', parent=styles['Normal'],
    fontSize=10, leading=14, textColor=HexColor('#444444'), fontName='Helvetica')

small_text = ParagraphStyle('Small2', parent=styles['Normal'],
    fontSize=9, leading=12, textColor=HexColor('#666666'), fontName='Helvetica')

footer_style = ParagraphStyle('Footer', parent=styles['Normal'],
    fontSize=8, leading=10, textColor=HexColor('#999999'), alignment=TA_CENTER,
    fontName='Helvetica')

header_style = ParagraphStyle('TableHeader', parent=styles['Normal'],
    fontSize=9, leading=12, textColor=WHITE, fontName='Helvetica-Bold',
    alignment=TA_CENTER)

cell_style = ParagraphStyle('TableCell', parent=styles['Normal'],
    fontSize=9, leading=12, textColor=DARK, fontName='Helvetica')

cell_center = ParagraphStyle('CellCenter', parent=cell_style, alignment=TA_CENTER)

# Product data
PRODUCTS = {
    'Engine Oil': [
        {'name': 'SP 5W-40 Full Synthetic Engine Oil', 'specs': [
            ('Viscosity Grade', 'SAE 5W-40'), ('API Level', 'SP'),
            ('Base Oil', 'Full Synthetic (PAO+ ester)'), ('Packing', '1L / 4L / 200L'),
            ('Application', 'Passenger cars, SUV, Luxury vehicles'),
            ('Features', 'Excellent low-temp start, outstanding oxidation stability')
        ]},
        {'name': 'SP GF-6 5W-30 Motor Oil', 'specs': [
            ('Viscosity Grade', 'SAE 5W-30'), ('API Level', 'SP'),
            ('ILSAC', 'GF-6A'), ('Packing', '1L / 4L / 200L'),
            ('Application', 'Asian & American passenger vehicles'),
            ('Features', 'Fuel economy, LSPI protection, timing chain wear prevention')
        ]},
        {'name': 'S6 5W-30 Fully Synthetic', 'specs': [
            ('Viscosity Grade', 'SAE 5W-30'), ('API Level', 'SP'),
            ('Base Oil', 'Full Synthetic'), ('Packing', '1L / 4L / 200L'),
            ('Application', 'Modern gasoline engines with GDI'),
            ('Features', 'Superior cleaning, turbocharger protection')
        ]},
        {'name': 'QN-F6 SL/CF 5W-30', 'specs': [
            ('Viscosity Grade', 'SAE 5W-30'), ('API Level', 'SL/CF'),
            ('Standard', 'GB 11121'), ('Packing', '1L / 4L / 200L'),
            ('Application', 'Domestic market passenger vehicles'),
            ('Features', 'China market specific formulation, excellent value')
        ]},
    ],
    'Diesel Engine Oil': [
        {'name': 'CJ-4/SN+ 10W-40 Diesel Engine Oil', 'specs': [
            ('Viscosity Grade', 'SAE 10W-40'), ('API Level', 'CJ-4 / SN+'),
            ('Base Oil', 'Synthetic Blend'), ('Packing', '4L / 18L / 200L'),
            ('Application', 'Heavy-duty diesel, trucks, commercial vehicles'),
            ('Features', 'DPF compatible, high TBN, soot handling')
        ]},
        {'name': 'HX6000 CF-4 Diesel 20W-50', 'specs': [
            ('Viscosity Grade', 'SAE 20W-50'), ('API Level', 'CF-4'),
            ('Base Oil', 'Mineral'), ('Packing', '4L / 18L / 200L'),
            ('Application', 'Older diesel engines, construction equipment'),
            ('Features', 'High viscosity, excellent film strength, cost-effective')
        ]},
    ],
    'Motorcycle Oil': [
        {'name': '5000 Synthetic 4T Motorcycle Oil', 'specs': [
            ('Viscosity Grade', 'SAE 10W-40 / 15W-50'), ('API Level', 'SM'),
            ('Base Oil', 'Semi-synthetic'), ('Packing', '1L / 4L'),
            ('Application', '4-stroke motorcycles, scooters'),
            ('Features', 'Wet clutch compatible, good gear protection')
        ]},
        {'name': 'PAO 4T Motorcycle SP 5W-40', 'specs': [
            ('Viscosity Grade', 'SAE 5W-40'), ('API Level', 'SP'),
            ('Base Oil', 'Full Synthetic PAO'), ('Packing', '1L / 4L'),
            ('Application', 'High-performance 4T motorcycles'),
            ('Features', 'Maximum power output, extreme temperature range')
        ]},
        {'name': 'SM 10W-40 4T Motorcycle Oil', 'specs': [
            ('Viscosity Grade', 'SAE 10W-40'), ('API Level', 'SM'),
            ('Base Oil', 'Semi-synthetic'), ('Packing', '1L / 4L'),
            ('Application', 'Daily commuter 4T motorcycles'),
            ('Features', 'Reliable protection, affordable price')
        ]},
    ],
    'Transmission Fluid': [
        {'name': 'ATF-6HP 6-Speed Auto Transmission', 'specs': [
            ('Type', 'ATF'), ('Standard', 'ZF 6HP / GM Dexron VI'),
            ('Packing', '1L / 4L / 20L'), ('Application', '6-speed automatic transmissions'),
            ('Features', 'Smooth shifting, extended drain interval')
        ]},
    ],
    'Hydraulic Oil': [
        {'name': 'L-HM Hydraulic Oil 46#', 'specs': [
            ('ISO VG', '46'), ('Grade', 'L-HM (Anti-wear)'),
            ('Flash Point', '>= 180 C'), ('Pour Point', '<= -15 C'),
            ('Packing', '18L / 200L'), ('Application', 'Industrial hydraulic systems')
        ]},
        {'name': 'L-HM Hydraulic Oil 68#', 'specs': [
            ('ISO VG', '68'), ('Grade', 'L-HM (Anti-wear)'),
            ('Flash Point', '>= 190 C'), ('Pour Point', '<= -12 C'),
            ('Packing', '18L / 200L'), ('Application', 'Heavy-duty hydraulic systems')
        ]},
        {'name': 'L-HV Low Temperature Hydraulic 46#', 'specs': [
            ('ISO VG', '46'), ('Grade', 'L-HV (Low temp)'),
            ('Flash Point', '>= 160 C'), ('Pour Point', '<= -36 C'),
            ('Packing', '18L / 200L'), ('Application', 'Cold climate hydraulic equipment')
        ]},
    ],
    'Gear Oil': [
        {'name': 'Industrial Gear Oil EP 150', 'specs': [
            ('ISO VG', '150'), ('Grade', 'EP (Extreme Pressure)'),
            ('4EP Load', 'Grade 2'), ('Packing', '18L / 200L'),
            ('Application', 'Industrial gearboxes, bearings')
        ]},
        {'name': 'Industrial Gear Oil EP 220', 'specs': [
            ('ISO VG', '220'), ('Grade', 'EP (Extreme Pressure)'),
            ('4EP Load', 'Grade 2'), ('Packing', '18L / 200L'),
            ('Application', 'Heavy-duty gearboxes, worm gears')
        ]},
    ],
    'Lubricating Grease': [
        {'name': 'Lithium Base Lubricating Grease', 'specs': [
            ('NLGI Grade', '2 / 3'), ('Thickener', 'Lithium 12-Hydroxystearate'),
            ('Dropping Point', '>= 180 C'), ('Packing', '1kg / 15kg / 180kg'),
            ('Application', 'Bearings, chassis, universal joints')
        ]},
        {'name': 'Molybdenum Disulfide Grease', 'specs': [
            ('NLGI Grade', '2'), ('Thickener', 'Lithium Complex + MoS2'),
            ('Dropping Point', '>= 200 C'), ('Packing', '1kg / 15kg / 180kg'),
            ('Application', 'High-load, shock-load applications')
        ]},
        {'name': 'Complex Calcium Sulfonate Grease', 'specs': [
            ('NLGI Grade', '2'), ('Thickener', 'Complex Calcium Sulfonate'),
            ('Dropping Point', '>= 300 C'), ('Packing', '15kg / 180kg'),
            ('Application', 'Marine, high-temp, water-resistant')
        ]},
        {'name': 'Polyurea Grease', 'specs': [
            ('NLGI Grade', '2'), ('Thickener', 'Polyurea'),
            ('Dropping Point', '>= 250 C'), ('Packing', '15kg / 180kg'),
            ('Application', 'Electric motor bearings, long-life applications')
        ]},
        {'name': 'Bentonite Grease', 'specs': [
            ('NLGI Grade', '2'), ('Thickener', 'Bentonite (Clay)'),
            ('Dropping Point', 'No drop point'), ('Packing', '15kg / 180kg'),
            ('Application', 'High-temperature bearings, oven conveyors')
        ]},
        {'name': 'Aluminum Complex Grease', 'specs': [
            ('NLGI Grade', '2'), ('Thickener', 'Aluminum Complex'),
            ('Dropping Point', '>= 260 C'), ('Packing', '15kg / 180kg'),
            ('Application', 'Food-grade compatible, water-resistant')
        ]},
    ],
    'Brake Fluid': [
        {'name': 'DOT 4 Brake Fluid', 'specs': [
            ('Standard', 'DOT 4 / FMVSS 116'), ('Dry Boiling Point', '>= 230 C'),
            ('Wet Boiling Point', '>= 155 C'), ('Color', 'Light Yellow'),
            ('Packing', '0.5L / 1L / 4L')
        ]},
        {'name': 'DOT 3 Brake Fluid', 'specs': [
            ('Standard', 'DOT 3 / FMVSS 116'), ('Dry Boiling Point', '>= 205 C'),
            ('Wet Boiling Point', '>= 140 C'), ('Color', 'Light Yellow'),
            ('Packing', '0.5L / 1L / 4L')
        ]},
    ],
    'Marine Oil': [
        {'name': 'Marine Lubricating Oil', 'specs': [
            ('Type', 'Marine Engine Oil'), ('Application', 'Marine diesel engines'),
            ('Packing', '18L / 200L'), ('Features', 'Corrosion resistant, salt-water protection')
        ]},
    ],
    'Fuel Oil': [
        {'name': 'Industrial Fuel Oil No.4', 'specs': [
            ('Type', 'Industrial Fuel Oil'), ('Application', 'Industrial boilers, furnaces'),
            ('Packing', '200L / Bulk'), ('Features', 'Consistent quality, reliable combustion')
        ]},
    ],
}


def add_page_number(canvas_obj, doc):
    """Add page numbers and footer to each page"""
    canvas_obj.saveState()
    # Page number
    canvas_obj.setFont('Helvetica', 8)
    canvas_obj.setFillColor(HexColor('#999999'))
    canvas_obj.drawCentredString(PAGE_W / 2, 15 * mm,
        f"BOERJIA Lubricants - Product Catalog 2026  |  Page {doc.page}")
    # Bottom line
    canvas_obj.setStrokeColor(SECONDARY)
    canvas_obj.setLineWidth(0.5)
    canvas_obj.line(MARGIN, 20 * mm, PAGE_W - MARGIN, 20 * mm)
    canvas_obj.restoreState()


def create_cover(c, doc):
    """Draw the cover page"""
    w, h = PAGE_W, PAGE_H
    # Dark background
    c.setFillColor(DARK)
    c.rect(0, 0, w, h, fill=1, stroke=0)
    # Accent strip
    c.setFillColor(PRIMARY)
    c.rect(0, h * 0.35, w, 4 * mm, fill=1, stroke=0)
    # Title
    c.setFillColor(WHITE)
    c.setFont('Helvetica-Bold', 42)
    c.drawCentredString(w / 2, h * 0.62, 'BOERJIA')
    c.setFont('Helvetica', 18)
    c.drawCentredString(w / 2, h * 0.55, 'LUBRICANTS')
    # Subtitle
    c.setFont('Helvetica', 12)
    c.setFillColor(HexColor('#92bddd'))
    c.drawCentredString(w / 2, h * 0.46, 'Professional Lubricant Manufacturer Since 2007')
    # Company info
    c.setFont('Helvetica', 10)
    c.setFillColor(HexColor('#8899aa'))
    c.drawCentredString(w / 2, h * 0.28, 'Shandong Boerjia Petrochemical Technology Co., Ltd.')
    c.drawCentredString(w / 2, h * 0.25, 'Product Catalog 2026')
    # Contact
    c.setFont('Helvetica', 9)
    c.drawCentredString(w / 2, h * 0.15, 'WhatsApp: +852 6193 7889  |  www.boerjia-oil.com')
    c.drawCentredString(w / 2, h * 0.12, 'Email: bailuguang@gmail.com')


def make_product_table(product):
    """Create a spec table for one product"""
    data = [[Paragraph('Specification', header_style), Paragraph('Details', header_style)]]
    for key, val in product['specs']:
        data.append([Paragraph(key, cell_style), Paragraph(val, cell_style)])
    
    col_widths = [5 * cm, 11.5 * cm]
    table = Table(data, colWidths=col_widths, repeatRows=1)
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), PRIMARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), WHITE),
        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('BACKGROUND', (0, 1), (-1, -1), HexColor('#f8fafb')),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [HexColor('#f8fafb'), WHITE]),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#ddeeff')),
        ('BOX', (0, 0), (-1, -1), 1, SECONDARY),
    ]))
    return table


def build_catalog():
    """Build the complete product catalog PDF"""
    doc = SimpleDocTemplate(
        OUTPUT_FILE,
        pagesize=A4,
        leftMargin=MARGIN,
        rightMargin=MARGIN,
        topMargin=MARGIN,
        bottomMargin=25 * mm,
        title='BOERJIA Lubricants Product Catalog 2026',
        author='Shandong Boerjia Petrochemical Technology Co., Ltd.',
    )
    
    story = []
    
    # ---- Cover page (built via onFirstPage, add empty spacer) ----
    story.append(Spacer(1, 200 * mm))
    story.append(PageBreak())
    
    # ---- Company Profile page ----
    story.append(Paragraph('About BOERJIA', section_title))
    story.append(Spacer(1, 3 * mm))
    
    story.append(Paragraph(
        '<b>Shandong Boerjia Petrochemical Technology Co., Ltd.</b> is a professional lubricant '
        'manufacturer established in 2007, specializing in R&D, production, and distribution of '
        'high-quality lubricating oils, hydraulic oils, brake fluids, gear oils, greases, and '
        'marine lubricants.', body_text))
    story.append(Spacer(1, 3 * mm))
    
    story.append(Paragraph('<b>Key Facts:</b>', body_text))
    facts = [
        ['Established', '2007 (18+ years of experience)'],
        ['Location', 'Shandong Province, China'],
        ['Production Capacity', '50,000+ metric tons per year'],
        ['Certifications', 'ISO 9001:2015, ISO 14001, API Certified'],
        ['Markets', 'Southeast Asia, Middle East, Africa, South America'],
        ['Services', 'OEM / ODM / Private Label Available'],
        ['MOQ', 'Flexible MOQ for trial orders'],
        ['Delivery', '15-25 days after order confirmation'],
    ]
    fact_data = [[Paragraph(h, header_style), Paragraph(v, header_style)] for h, v in [['Item', 'Detail']]]
    for item, detail in facts:
        fact_data.append([Paragraph(item, cell_style), Paragraph(detail, cell_style)])
    
    fact_table = Table(fact_data, colWidths=[4 * cm, 12.5 * cm])
    fact_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), PRIMARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), WHITE),
        ('BACKGROUND', (0, 1), (-1, -1), HexColor('#f8fafb')),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [HexColor('#f8fafb'), WHITE]),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#ddeeff')),
        ('BOX', (0, 0), (-1, -1), 1, SECONDARY),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
        ('TOPPADDING', (0, 0), (-1, -1), 5),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(fact_table)
    
    story.append(PageBreak())
    
    # ---- Product pages ----
    for category, products in PRODUCTS.items():
        story.append(Paragraph(category, section_title))
        
        # Category description line
        story.append(Paragraph(f'Total {len(products)} product(s) in this category', small_text))
        story.append(Spacer(1, 4 * mm))
        
        for prod in products:
            elements = []
            elements.append(Paragraph(prod['name'], product_name))
            elements.append(make_product_table(prod))
            story.append(KeepTogether(elements))
            story.append(Spacer(1, 6 * mm))
        
        story.append(PageBreak())
    
    # ---- Contact page ----
    story.append(Paragraph('Contact Us', section_title))
    story.append(Spacer(1, 5 * mm))
    
    story.append(Paragraph(
        'For inquiries, OEM/ODM requests, or quotation, please contact us:', body_text))
    story.append(Spacer(1, 5 * mm))
    
    contact_data = [
        [Paragraph('Contact Method', header_style), Paragraph('Details', header_style)],
        [Paragraph('Company', cell_style), Paragraph('Shandong Boerjia Petrochemical Technology Co., Ltd.', cell_style)],
        [Paragraph('WhatsApp', cell_style), Paragraph('+852 6193 7889', cell_style)],
        [Paragraph('WeChat', cell_style), Paragraph('+86 13731735051', cell_style)],
        [Paragraph('Email', cell_style), Paragraph('bailuguang@gmail.com', cell_style)],
        [Paragraph('Website', cell_style), Paragraph('www.boerjia-oil.com', cell_style)],
        [Paragraph('Address', cell_style), Paragraph('Shandong Province, China', cell_style)],
    ]
    
    contact_table = Table(contact_data, colWidths=[4 * cm, 12.5 * cm])
    contact_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), PRIMARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), WHITE),
        ('BACKGROUND', (0, 1), (-1, -1), HexColor('#f8fafb')),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [HexColor('#f8fafb'), WHITE]),
        ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#ddeeff')),
        ('BOX', (0, 0), (-1, -1), 1, SECONDARY),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    story.append(contact_table)
    story.append(Spacer(1, 10 * mm))
    
    story.append(Paragraph(
        '<i>We offer OEM/ODM services with flexible MOQ. Custom formulations and private label '
        'packaging available. Contact us today for a free quotation!</i>', small_text))
    
    # Build with cover
    doc.build(story, onFirstPage=create_cover, onLaterPages=add_page_number)
    print(f"Catalog generated: {OUTPUT_FILE}")


if __name__ == '__main__':
    build_catalog()

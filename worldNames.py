# Mapping from ISO-3166 alpha3 to alpha2
iso_alpha3_to_alpha2 = {
    "AFG": "AF", "ALA": "AX", "ALB": "AL", "DZA": "DZ", "ASM": "AS", "AND": "AD", "AGO": "AO", "AIA": "AI",
    "ATA": "AQ", "ATG": "AG", "ARG": "AR", "ARM": "AM", "ABW": "AW", "AUS": "AU", "AUT": "AT", "AZE": "AZ",
    "BHS": "BS", "BHR": "BH", "BGD": "BD", "BRB": "BB", "BLR": "BY", "BEL": "BE", "BLZ": "BZ", "BEN": "BJ",
    "BMU": "BM", "BTN": "BT", "BOL": "BO", "BES": "BQ", "BIH": "BA", "BWA": "BW", "BVT": "BV", "BRA": "BR",
    "VGB": "VG", "IOT": "IO", "BRN": "BN", "BGR": "BG", "BFA": "BF", "BDI": "BI", "KHM": "KH", "CMR": "CM",
    "CAN": "CA", "CPV": "CV", "CYM": "KY", "CAF": "CF", "TCD": "TD", "CHL": "CL", "CHN": "CN", "HKG": "HK",
    "MAC": "MO", "CXR": "CX", "CCK": "CC", "COL": "CO", "COM": "KM", "COG": "CG", "COD": "CD", "COK": "CK",
    "CRI": "CR", "CIV": "CI", "HRV": "HR", "CUB": "CU", "CUW": "CW", "CYP": "CY", "CZE": "CZ", "DNK": "DK",
    "DJI": "DJ", "DMA": "DM", "DOM": "DO", "ECU": "EC", "EGY": "EG", "SLV": "SV", "GNQ": "GQ", "ERI": "ER",
    "EST": "EE", "ETH": "ET", "FLK": "FK", "FRO": "FO", "FJI": "FJ", "FIN": "FI", "FRA": "FR", "GUF": "GF",
    "PYF": "PF", "ATF": "TF", "GAB": "GA", "GMB": "GM", "GEO": "GE", "DEU": "DE", "GHA": "GH", "GIB": "GI",
    "GRC": "GR", "GRL": "GL", "GRD": "GD", "GLP": "GP", "GUM": "GU", "GTM": "GT", "GGY": "GG", "GIN": "GN",
    "GNB": "GW", "GUY": "GY", "HTI": "HT", "HMD": "HM", "VAT": "VA", "HND": "HN", "HUN": "HU", "ISL": "IS",
    "IND": "IN", "IDN": "ID", "IRN": "IR", "IRQ": "IQ", "IRL": "IE", "IMN": "IM", "ISR": "IL", "ITA": "IT",
    "JAM": "JM", "JPN": "JP", "JEY": "JE", "JOR": "JO", "KAZ": "KZ", "KEN": "KE", "KIR": "KI", "PRK": "KP",
    "KOR": "KR", "KWT": "KW", "KGZ": "KG", "LAO": "LA", "LVA": "LV", "LBN": "LB", "LSO": "LS", "LBR": "LR",
    "LBY": "LY", "LIE": "LI", "LTU": "LT", "LUX": "LU", "MKD": "MK", "MDG": "MG", "MWI": "MW", "MYS": "MY",
    "MDV": "MV", "MLI": "ML", "MLT": "MT", "MHL": "MH", "MTQ": "MQ", "MRT": "MR", "MUS": "MU", "MYT": "YT",
    "MEX": "MX", "FSM": "FM", "MDA": "MD", "MCO": "MC", "MNG": "MN", "MNE": "ME", "MSR": "MS", "MAR": "MA",
    "MOZ": "MZ", "MMR": "MM", "NAM": "NA", "NRU": "NR", "NPL": "NP", "NLD": "NL", "ANT": "AN", "NCL": "NC",
    "NZL": "NZ", "NIC": "NI", "NER": "NE", "NGA": "NG", "NIU": "NU", "NFK": "NF", "MNP": "MP", "NOR": "NO",
    "OMN": "OM", "PAK": "PK", "PLW": "PW", "PSE": "PS", "PAN": "PA", "PNG": "PG", "PRY": "PY", "PER": "PE",
    "PHL": "PH", "PCN": "PN", "POL": "PL", "PRT": "PT", "PRI": "PR", "QAT": "QA", "REU": "RE", "ROU": "RO",
    "RUS": "RU", "RWA": "RW", "BLM": "BL", "SHN": "SH", "KNA": "KN", "LCA": "LC", "MAF": "MF", "SPM": "PM",
    "VCT": "VC", "WSM": "WS", "SMR": "SM", "STP": "ST", "SAU": "SA", "SEN": "SN", "SRB": "RS", "SYC": "SC",
    "SLE": "SL", "SGP": "SG", "SXM": "SX", "SVK": "SK", "SVN": "SI", "SLB": "SB", "SOM": "SO", "ZAF": "ZA",
    "SGS": "GS", "SSD": "SS", "ESP": "ES", "LKA": "LK", "SDN": "SD", "SUR": "SR", "SJM": "SJ", "SWZ": "SZ",
    "SWE": "SE", "CHE": "CH", "SYR": "SY", "TWN": "TW", "TJK": "TJ", "TZA": "TZ", "THA": "TH", "TLS": "TL",
    "TGO": "TG", "TKL": "TK", "TON": "TO", "TTO": "TT", "TUN": "TN", "TUR": "TR", "TKM": "TM", "TCA": "TC",
    "TUV": "TV", "UGA": "UG", "UKR": "UA", "ARE": "AE", "GBR": "GB", "USA": "US", "UMI": "UM", "URY": "UY",
    "UZB": "UZ", "VUT": "VU", "VEN": "VE", "VNM": "VN", "VIR": "VI", "WLF": "WF", "ESH": "EH", "YEM": "YE",
    "ZMB": "ZM", "ZWE": "ZW", "XKX": "XK"
}

# Reverse the mapping to get alpha2 to alpha3
iso_alpha2_to_alpha3 = {v: k for k, v in iso_alpha3_to_alpha2.items()}

def convert_alpha2_to_alpha3(alpha2_code):
    """
    Convert ISO-3166 alpha2 code to ISO-3166 alpha3 code.
    
    Parameters:
    alpha2_code (str): The ISO-3166 alpha2 code.
    
    Returns:
    str: The corresponding ISO-3166 alpha3 code.
    """
    return iso_alpha2_to_alpha3.get(alpha2_code, None)

# Example usage
alpha2_code = "US"
alpha3_code = convert_alpha2_to_alpha3(alpha2_code)
print(f"The ISO-3166 alpha3 code for {alpha2_code} is {alpha3_code}")
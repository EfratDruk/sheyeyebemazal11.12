enum StatusAdjustment {
    new = "חדש",
    processes = "בטיפול",
    null = "null",
}
enum Type {
    man = "MAN",
    woman = "WOMAN",
    matchmaker = "MATCHMAKER"
}

enum StatusMan {
    yeshiva = "בן_ישיבה",
    avrech = "אברך",
    student = "לומד_מקצוע",
    work = "עובד",
    combines = "משלב",
}

enum Beard {
    yes = "מזוקן",
    no = "מגולח",
    sometimes = "קצוץ",
}
enum Smoking {
    yes = "YES",
    no = "NO",
    sometimes = "SOMETIMES"
}

enum Studies {
    yeshiva = "ישיבה",
    sem = "סמינר",
    boys = "חיידר",
    girls = "בית_יעקב",
    highSchool = "תיכון",
    college = "מכללה",
    university = "אוניברסיטה",
    work = "עבודה"
}

enum Cover {
    wig = "פאה",
    kerchief = "מטפחת",
    flex = "גמיש",
    partial = "חלקי",
    non = "ללא_כיסוי",
}

enum Gender {
    male = "MAN",
    female = "WOMAN"
}
enum License {
    yes = "YES",
    no = "NO",
    NIIS = "Not_interested_in_specifying",
}
enum Status {
    single = "SINGLE",
    WWK = "WIDOW_WITH_KIDS",
    WNK = "WIODW_NO_KIDS",
    DNK = "DIVORCEE_NO_KIDS",
    DWK = "DIVORCEE_WITH_KIDS",
    married = "MARRIED"
}
enum Residence {
        WP = "WITH_PARENTS",
    ALONE = "ALONE",
    //SINGLES,
    DORMITORY = "DORITORY",
    BATCHELOR_APARTMENT = "BATCHELOR_APARTMENT"
}
enum Sector {
    chasidish = "חסידי",
    //  ליטאי, ספרדי, תימני,חבד, חצי_חצי, אחר
}
enum Language {
    english = "ENGLISH",
    Hebrew = "HEBREW"
    // , FRENCH, SPANISH, GERMAN
}
enum Type_phon {
    kosher = "כשר",
    BOTH = "שני_טלפונים",
    SUPPORT = "תומך_כשר",
    PROTECTED = "מכשיר_מוגן",
    SMART = "סמארטפון"
}
enum Land {
        israel = "ישראל",
    FRANCH = "צרפת",
    UK = "אנגליה",
    RUSSIA = "רוסיה"
    // ,,,,מרוקו,בלגיה,תימן
}
enum City {
    jerusalem = "ירושלים",
    TLV = "תל_אביב",
    BB = "בני_ברק",
    RG = "רמת_גן",
    PT = "פתח_תקוה",
    BEITAR = "ביתר",
    ASHDOD = "אשדוד",
    CHAIFA = "חיפה"
}

export { StatusAdjustment, Type, StatusMan, Beard, Smoking, Studies, Cover, License, Gender, Status, Residence, Sector, Language, Type_phon, Land, City }





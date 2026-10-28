// name | what they do | phone | website
const raw = `
Claude's Fine Jewelry|Custom design, repairs, diamond sales|(613) 299-9612|claudesfine.jewelershowcase.com
Greek On Wheels (Cobden & Iris)|Greek takeout|(613) 297-2696|greekonwheels.ca
Custom Creations by Myriam|Custom occasion items|(514) 928-0882|
Fancy Sox|Socks, hosiery, tights|(613) 724-1897|fancysox.ca
Jessica Anbara Real Estate|Real estate & investment|(613) 790-0227|
Pitch Partners Football Management|Soccer training|(613) 724-0454|pitchpartners.ca
Baghdan Cleaning & Servicing|Cleaning|(819) 208-3444|
AlkhouriX Digital Marketing|Web design & branding|(613) 869-4224|alkhourix.com
Vision Bookkeeping & Financial Services|Accountant|(613) 733-3833|
Assaly Group|Home renovations|(613) 866-3124|assalygroup.ca
Noura's Jewellery|Jeweller|(613) 884-8820|nouras.ca
The Rock Enterprise|Online business mentor|(613) 324-4150|solangeelkhoury.com
NHB Mobile Mechanic|Mechanic|(873) 455-5443|
Reno, Tile & Beyond|Renovation, tiling, flooring|(613) 262-6765|
The Medicine Shoppe Pharmacy|Pharmacy|(613) 263-6313|
CERC Engineering & Real Estate Consulting|Structural design, permits|(613) 400-7176|charlotte-cerc.com
SGA Signs and Trophies|Signs & trophies|(613) 820-5888|sgasigns.com
Nour Designs Homes|Interior decorating|(613) 867-5158|
Penta Wealth|Wealth management|(613) 324-0158|pentawealth.ca
Jason Anbara Mortgages|Mortgage broker|(613) 404-4845|jasonanbara.com
Mosaic Coatings|Coatings|(819) 576-5255|
Legacy Path Shotokan Karate|Karate|(613) 709-9122|
FA Solutions|Accounting & tax|(613) 817-6185|fastaccountingtax.com
Nass & Co. Design Studio|Interior design|(613) 794-4440|nassandco.com
Geocache Services Inc.|Accountant|(873) 688-6025|geocacheservices.com
Ezi Services|Home cleaning & lawn care|(613) 366-6990|ezi.services
PurEssence Soins Esthétiques|Esthetician|(819) 962-0041|puressenceesthetiques.com
SkyExpress Travel|Travel agency|(613) 878-1390|skyexpresstravel.ca
Halloul Construction|Construction & landscaping|(613) 794-4556|
Health Smart Pharmacy|Pharmacy|(613) 695-5561|healthsmartpharmacy.ca
Kelly Santini LLP|Lawyer, business & real estate|(613) 829-7171|kellysantini.com
WebRise|Digital marketing & web design|(819) 318-2188|webrise.ca
Doherty & Associates|Investment management|(613) 696-1409|doherty.ca
Khalil Alsoueiti|Electrician|(613) 793-2024|
Saba Music Studio|Piano lessons|(819) 955-1602|
Premier Roads Driving School|Driver training|(343) 322-2302|premier-roads.com
Batter and Blooms|Cakes & cupcakes|(613) 805-9889|batterandblooms.com
Elias Naddour Drivers Training|Driver training|(613) 796-5445|
River Pizza|Pizza, subs, donairs|(613) 841-4999|riverpizza.ca
Fares Said Tutoring|Science tutoring|(613) 875-1206|
Englobe Corp.|Civil engineering|(613) 697-7450|englobecorp.com
Luis Cortorreal|Web design & development|(343) 558-9943|luiscortorreal.com
Laviolette Flowers & Decor|Florist & event decor|(613) 859-1964|lavioletteflowers.ca
PMP-IT Consulting|IT project management|(343) 204-6050|pmp-it.ca
Eliane El Haber|French & Arabic teacher|(613) 762-6507|
Laurier Optical|Optometry|(819) 485-2222|opto-plateau.com
College Pro|Exterior house cleaning|(613) 219-9692|
Revelation Studio|Photography & videography|(613) 262-6769|revelationstudio.ca
Revelation Marketing|Marketing agency|(613) 262-6769|revelationmarketing.ca
MortgageForces.ca|Mortgage broker|(613) 566-7022|mortgageforces.ca
Khalil Swaiti|Electrical work|(613) 793-2024|
Comfort Line HVAC|Heating & cooling|(613) 501-4990|comfortlinehvac.com
Najwa Esthetics|Esthetician & electrologist|(613) 296-6082|
Boula Photography|Photography|(613) 888-2311|
PrimeAir Mechanical|Heating & cooling|(613) 266-1463|
Scentsy (Shelly McConnery)|Fragrance products|(613) 266-4468|shellymcconnery.scentsy.ca
Maid On Call|Cleaning services|(613) 618-0969|maidoncall.ca
Tayar Real Estate|Real estate agent|(613) 447-5824|
Ottawa Hospital (Cancer Centre)|Pharmacy technician|(613) 697-2024|
Desjardins (Nabil Al Jarash)|Life insurance advisor|(613) 276-7366|
Milad's Flooring|Flooring|(613) 261-4591|
AMG Haddad Painting & Handyman|Painting & renovation|(613) 890-8772|
Jaouhara Mikhael|Personal trainer|(613) 715-3305|
AJ Platinum Capital|Mortgage broker|(613) 295-7272|ajplatinumcapital.com
ChessMate with Francois|Chess coach|(613) 261-4020|
Bite Bar|Snack cart & catering|(819) 329-1698|
SCENE-Studio|Graphic & product design||scenestudioworks.etsy.com
Atelier Megalo|Resin art & gifts|(343) 996-3382|
Remon Rezk|Graphic designer|(613) 355-0466|rezk.org
Mortgage Architects (Platinum Mortgages)|Mortgage broker|(613) 794-1124|mortgagearchitects.ca
Maram Graphic|Graphic designer|(343) 777-9459|
Noura Events|Baptism, engagement & wedding services|(613) 297-9003|
Dounia & Co.|Event day-of coordinator|(613) 852-6748|
MonAmi Candle Collective|Candle making|(613) 301-2559|
Christine Lunn – Desjardins|Insurance|(613) 820-0021|christinelunn.ca
Otto's Subaru|Car sales|(613) 265-8088|
CESOC|Free newcomer services|(613) 699-1347|cesoc.ca
Cafe Latte Cino|Café / restaurant|(613) 824-2466|cafelattecino.com
L.S Notary Public Services|Notary public|(613) 261-2399|lssnotary.com
Megalo Flowers|Florist|(343) 996-3382|
Alexis Daoud Jewelry|Jeweller|(613) 400-6023|alexisdaoudjewelry.com
Ted Langstaff Realtor|Real estate|(613) 884-1870|tedlangstaff.com
ProtecTechca|Security & cameras|(819) 635-6525|
Six Pack Movers|Moving & junk removal|(613) 261-0069|sixpackmovers.ca
Solange Wellness Coach|Wellness coaching|(873) 456-2264|
Kodiak Security Systems|Security installation & monitoring|(613) 737-4553|kodiaksecurity.ca
WicWac|Software|(613) 327-4545|wicwac.com
Danya Daccash, MSW, RSW|Counselling & psychotherapy|(613) 488-9714|danyadaccash.com
Nat's Home Inspection|Home inspection|(613) 276-6286|
Dr. Justin Thomas|Optometrist|(613) 720-6479|
Chez Dodo|Fattoush spice mix & marinade|(613) 290-2090|chezdodokitchen.ca
Bavaria Auto Care|Mechanic|(514) 885-0717|
National Capital Vein Institute|Vascular surgery||ncvi.ca
Make up by Maria Bchara|Makeup artist|(613) 797-5876|
`;

export const businesses = raw
  .trim()
  .split("\n")
  .map((line) => {
    const [name, what, phone, site] = line.split("|");
    return { name, what, phone, site };
  });

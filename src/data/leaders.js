const L = (name, role, img, bio) => ({ name, role, img: `/img/leaders/${img}`, bio });

export const hierarchs = [
  L("His Beatitude Patriarch John X", "Patriarch of Antioch and All the East", "patriarch.jpg",
    "Born in Latakia, Syria, he pursued theological studies and a doctorate in Greece, and has a background in church music."),
  L("His Eminence Metropolitan Saba", "Archbishop of New York and Metropolitan of North America", "saba.png",
    "Elected in 2023, he leads the Antiochian Orthodox Christian Archdiocese of North America from Englewood, New Jersey."),
  L("His Grace Bishop Alexander", "Bishop of Ottawa, Eastern Canada, and Upstate New York", "alexander.jpg",
    "Consecrated in 2004 and enthroned at St. Elias Cathedral in 2005."),
];

export const clergy = [
  L("Very Rev. Fr. Nektarios Najjar", "Pastor and Dean of the Cathedral", "nektarios.jpg",
    "Appointed in 2019 and elevated to Archpriest in 2025."),
  L("Rev. Fr. Ephram Al-Hajj", "Assistant Priest", "ephram.jpg",
    "Has served in several Antiochian archdioceses."),
  L("Rev. Fr. Yakoub Daoura", "Assistant Priest", "yakoub.png",
    "Ordained to the priesthood in 2024."),
  L("Very Rev. Fr. Ghattas Hajal", "Pastor Emeritus", "ghattas.png",
    "Served as Pastor and Dean from 1992 until his retirement in 2019."),
  L("Rev. Fr. Deacon Konstantine Stavrianeas", "Deacon", "kosta.png",
    "Ordained in April 2026 and assigned to St. Elias in Ottawa."),
  L("Subdeacon George Saikali", "Subdeacon", "george.jpg", ""),
];

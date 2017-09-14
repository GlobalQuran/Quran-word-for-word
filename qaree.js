var qaree = {
  1: "Mohammed Siddiq Al-Menshawi",
  5: "Mohammed Ayoub",
  7: "Ibrahim Green",
  8: "Abdullah Basfar",
  9: "Ali Abdul Rahman Al-Huthifi",
  101: "Mohammed Tablawi",
  102: "Abdul Basit Abdul Samad",
  103: "Mahmoud Khalil Al-Hosary",
  104: "Quran",

  // 105: "Mahmoud Khalil Al-Hosary",
  // 106: "Yasser Salama ",
  // 107: "Mahmoud Siddiq Al-Menshawi",
  // 108: "Meshary Rashid Al-Aallasi",

  201: "Saud Al-Shuraim",
  202: "Al-Menshawi Majoud"
}

var qaree_audio_format = function(qaree_id) {
  return qaree_id <= 200
    ? "mp3"
    : "ogg"
}

var qaree_sura_aya_sep = function(qaree_id) {
  return qaree_id <= 200
    ? "-"
    : ""
}

var qaree_audio_base_url = function(qaree_id) {
  var rewaya_id = 1 // for now only Hafss!
  if (qaree_id <= 200)
    return "http://audio.elmohafez.com/" + rewaya_id + "-" + qaree_id + "/"
  else {
    var names = {
      201: "Shuraym",
      202: "Minshawi/Mujawwad"
    }
    return "http://verses.quran.com/" + names[qaree_id] + "/ogg/"
  }
}

var qaree_zip_url = function(qaree_id) {
  if (qaree_audio_is_secure(qaree_id))
    return "https://s3-us-west-2.amazonaws.com/hammadypublic/quran-audio/" + qaree_id + ".zip"
  else if (qaree_id <= 200) {
    var names = {
      101: "Mohammad_al_Tablaway_128kbps",
      102: "Abdul_Basit_Murattal_64kbps",
      103: "Husary_64kbps",
      104: "Husary_Muallim_128kbps"
    }
    return "http://www.everyayah.com/data/" + names[qaree_id] + "/000_versebyverse.zip"
  } else {
    var names = {
      201: "shuraym",
      202: "minshawi_mujawwad"
    }
    return "http://makkah-dl.quranicaudio.com/quran/vbv/" + names[qaree_id] + ".zip"
  }
}

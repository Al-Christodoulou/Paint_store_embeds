const Products = [
	/*==============
	    Durostick
	================*/
	{
		name: "D-20",
		description: "Ακρυλική ρητίνη, η οποία όταν προ­στίθεται σε κάθε τύπο τσιμεντοκονιαμάτων και ασβεστοκονιαμάτων, βελτιώνει σημαντικά τις ιδιότητές τους. Ως πρόσμικτο μάζας, αυξάνει την πρόσφυση, τη στεγανότητα, την ελαστικότητα και την ανθεκτικότητα των κονιαμάτων, μειώνει τη συρρίκνωση και εκμηδενίζει τη δημιουργία ρωγμών. Ως υλικό επάλειψης ή ψεκαζόμενο, σταθεροποιεί τις σαθρές ορυκτές επιφάνειες και τις ελαφροβαρείς επιστρώσεις δαπέδων (γεμίσματα) και δημιουργεί το κατάλληλο υπόστρωμα, προκειμένου να επικολληθούν διακοσμητικά τούβλα, πέτρες, κεραμικά πλακίδια, μονωτικά υλικά κ.ά.",
		category: "Βελτιωτικό Κονιαμάτων",
		amount: "1L",
		image: "https://i.imgur.com/Snw3pa7.png",
	},
	{
		name: "Rust Free Powder",
		description: "Επαλειφόμενος τσιμεντοειδής αναστολέας διάβρωσης οπλισμού σκυροδέματος. Mε ισχυρά αντιδιαβρωτικά στη σύνθεσή του, προστατεύει τον οπλισμό του σκυροδέματος από την προσβολή του από σκουριά που δημιουργείται από την εισχώρηση υγρασίας ή νερού (*). Λόγω της υψηλής συγκολλητικής του ικανότητας λειτουργε και ως υπόστρωμα μεταξύ νέου και παλαιού σκυροδέματος ή κονιάματος. Κατατάσσεται ως προϊόν προστασίας έναντι διάβρωσης του οπλισμού κατά ΕΝ 1504-7.",
		category: "Επισκευαστικά Σκυροδέματος",
		amount: "1kg, 5kg",
		image: "https://i.imgur.com/ct9b03O.png",
	},
	{
		name: "Easyfix",
		description: "Επισκευαστικό, ινοπλισμένο τσιμεντοκονίαμα, ελεγχόμενης συρρίκνωσης. Έχει ισχυρή πρόσφυση στο υπόστρωμα και αναπτύσσει πρώιμες μηχανικές αντοχές. Παρέχει εξαιρετική εργασιμότητα, υψηλή θιξοτροπία, δεν ‘κρεμάει’ σε πάχη έως 7cm και συνδυάζει επισκευή και φινίρισμα. Ιδανικό για επισκευή και εξομάλυνση στοιχείων σκυροδέματος τόσο σε οριζόντιες όσο και σε κάθετες επιφάνειες. Κατάλληλο για πλήρωση κατασκευαστικών ατελειών σε δάπεδα, τοιχοποιίες και οροφές από σκυρόδεμα, κατασκευή λουκιών κ.ά.",
		category: "Επισκευαστικά Σκυροδέματος",
		amount: "25kg",
		image: "https://i.imgur.com/Jucseau.png",
	},
	{
		name: "D-55",
		description: "Επισκευαστικό τσιμεντοκονίαμα υψηλών μηχανικών αντοχών, για λεπτές επικαλύψεις, από 2-20mm/στρώση. Περιέχει αναστολέα διάβρωσης που προστατεύει από την οξείδωση των ράβδων οπλισμού σκυροδέματος. Έχει ισχυρή πρόσφυση και αντοχή στην υγρασία και τον παγετό. Είναι ιδανικό για επισκευή ρηγματώσεων σε δάπεδα και τοιχία, καθώς και για την κάλυψη κατασκευαστικών ατελειών που δημιουργούνται μετά τη χύτευση του μπετόν. Αποκαθιστά βλάβες του σκυροδέματος σε προσόψεις μπαλκονιών, γωνίες υποστυλωμάτων, δοκών κ.ά. Χρησιμοποιείται για δημιουργία λουκιών πριν από την εφαρμογή στεγανοποιητικών υλικών, για την κάλυψη αποσαθρωμένων σημείων περιμετρικά σε κάσες ή μαρμαροποδιές.",
		category: "Επισκευαστικά Σκυροδέματος",
		amount: "5kg, 25kg",
		image: "https://i.imgur.com/tkJtWUD.png",
	},
	{
		name: "D-11 Super Fast",
		description: "Ταχύπηκτο τσιμεντοκονίαμα υψηλών αντοχών, γκρι χρώματος, με χρόνο πήξης 7 λεπτά. Απαραίτητο σε υδραυλικές και ηλεκτρολογικές εγκαταστάσεις. Δουλεύεται εύκολα και αντικαθιστά τα ‘μερεμέτια’ από γύψο, λόγω της υψηλής αντοχής του σε κρούσεις και υγρασία. Είναι κατάλληλο για επισκευές και στηρίξεις σε μπετόν και σοβά. Στερεώνει πλέγματα σοβάδων εσωτερικά και εξωτερικά. Αποτελεσματικό στη σφράγιση οπών και την τοποθέτηση γωνιόκρανων.",
		category: "Επισκευαστικά Ειδικών Εφαρμογών",
		amount: "5kg, 25kg",
		image: "https://i.imgur.com/vyRcjtD.png",
	},
	{
		name: "Antifreeze Powder",
		description: "Επιταχυντής σκλήρυνσης σε μορφή πούδρας που προστίθεται σε τυποποιημένα ή παραδοσιακά τσιμεντοκονιάματα (κανονικού χρόνου ωρίμανσης), επιταχύνοντας την ανάπτυξη των μηχανικών αντοχών σε χαμηλές θερμοκρασίες. Η προσθήκη του επιταχύνει την ενεργοποίηση του τσιμέντου που εμπεριέχεται στα τσιμεντοκονιάματα, βοηθά την γρήγορη ενυδάτωσή του, μειώνει τον χρόνο πήξης και σκλήρυνσής του, αποτρέποντας την παγοπληξία κατά τη διάρκεια της ωρίμανσής του, καθώς και τεχνικές αστοχίες λόγω θερμοκρασιακών μεταβολών.",
		category: "Αντιπαγετικό Πρόσθετο Τσιμεντοκονιαμάτων",
		amount: "500gr",
		image: "https://i.imgur.com/j8TmVr4.png",
	},
	{
		name: "DS-247",
		description: "Ρητινούχο, ινοπλισμένο, τσιμεντοειδές σφραγιστικό και συγκολλητικό κονίαμα πολλαπλών εφαρμογών. Περιέχει αναστολέα διάβρωσης που προστατεύει από την οξείδωση των ράβδων οπλισμού σκυροδέματος. Έχει ισχυρή πρόσφυση και αντοχή στην υγρασία και τον παγετό. Iδανικό για ‘υψηλών απαιτήσεων’ επισκευές στοιχείων σκυροδέματος σε γρήγορους χρόνους (κολόνες, δοκοί, πλάκες, άκρες μπαλκονιών, πισίνες, δεξαμενές, τοιχία κ.ά.). Σφραγίζει κενά, φωλιές και κάθε ατέλεια σε γωνίες και ακμές. Αποκαθιστά φθορές και σφραγίζει ρωγμές σε βιομηχανικά δάπεδα σε εσωτερικούς χώρους, αλλά και σε ράμπες φόρτωσης. Αντικαθιστά στις περισσότερες εφαρμογές τις σφραγίσεις με εποξειδικούς στόκους.",
		category: "Επικευαστικό Κονίαμα",
		amount: "1kg",
		image: "https://i.imgur.com/oQDiWyA.png",
	},
	/*============
	    Isomat
	==============*/
	{
		name: "Adiplast",
		description: "Βελτιώνει την πρόσφυση και την ελαστικότητα, μειώνει τη συρρίκνωση πήξης, αυξάνει κατά πολύ την αντοχή σε τριβές και σε χημικές επιδράσεις, ενισχύει τη στεγανότητα κτλ. Ιδανικό για τη δημιουργία συγκολλητικής στρώσης μεταξύ παλιού και νέου σκυροδέματος ή κονιάματος.",
		category: "Βελτιωτικό Κονιαμάτων",
		amount: "1kg",
		image: "https://i.imgur.com/BX6p7NZ.png",
	},
	{
		name: "Unicret",
		description: "Ιδανικό για μερεμέτια. Χαρακτηρίζεται από πολύ καλή εργασιμότητα και πρόσφυση στο υπόστρωμα. Εφαρμόζεται εσωτερικά και εξωτερικά.",
		category: "Επικευαστικό Κονίαμα",
		amount: "25kg",
		image: "https://i.imgur.com/pw1LdDh.png",
	},
	{
		name: "Unicret Fast",
		description: "Ιδανικός για γρήγορες επιδιορθώσεις σοβάδων σε παλιές και νέες κατασκευές. Αντικαθιστά τις αντίστοιχες χρήσεις του γύψου στην οικοδομή. Χαρακτηρίζεται από πολύ καλή εργασιμότητα και πρόσφυση στο υπόστρωμα. Επιταχύνει την εφαρμογή. Εφαρμόζεται εσωτερικά και εξωτερικά.",
		category: "Επικευαστικό Κονίαμα",
		amount: "5kg, 25kg",
		image: "https://i.imgur.com/LJWUuPG.png",
	},
	{
		name: "Aquafix",
		description: "Τσιμεντοκονίαμα. υπερταχείας πήξης. Η αντίδραση της πήξης αρχίζει αμέσως μετά την προσθήκη του νερού. Το AQUAFIX χρησιμοποιείται για ακαριαίο σφράγισμα σημειακών ή επιφανειακών διαρροών νερού και για γρήγορες στερεώσεις ή επισκευές.",
		category: "Ταχύπηκτο Σφραγιστικό Τσιμεντοκονίαμα",
		amount: "1kg",
		image: "https://i.imgur.com/w9vIET1.png",
	},
	/*============
	    Neotex
	==============*/
	{
		name: "Revinex",
		description: "Συμπολυμερές βελτιωτικό γαλάκτωμα που, χάρη στη συμβατότητα του με τα τσιμέντα της ελληνικής αγοράς και με τα αδρανή, προσφέρει απαράμιλλη στεγανότητα, ελαστικότητα και πρόσφυση σε πλήθος οικοδομικών και επισκευαστικών χρήσεων (π.χ. τσιμεντοκονίες, ενίσχυση τσιμεντοειδών, αρμολογήσεις, σοβάδες, λούκια, κόλλες πλακιδίων, κ.ά.). Προσφέρει απόλυτη στεγανότητα, εξαιρετική πρόσφυση σε πληθώρα υποστρωμάτων, καθώς και ελαστικότητα, και ενισχύει την αντοχή στην τριβή και αποτρέπει τη δημιουργία σκόνης.",
		category: "Βελτιωτικό Κονιαμάτων",
		amount: "1kg, 5kg",
		image: "https://i.imgur.com/oWYFG59.png",
	},
	/*===========
	   Evochem
	=============*/
	{
		name: "Epoxite Resin 95 Injection",
		description: "Η ΕPOXITE RESIN 95 INJECTION είναι ενέσιμη εποξειδική ρητίνη δύο συστατικών, για την σφράγιση ρωγμών σε σκυρόδεμα. Είναι λεπτόρρευστη και εισχωρεί σε πολύ λεπτές ρωγμές. Είναι ιδανική για συγκολλήσεις όμοιων και ανόμοιων οικοδομικών υλικών χωρίς να συρρικνώνεται. Έχει πολύ μεγάλη αντοχή στις τριβές, στον παγετό, στα οξέα-αλκάλια, στη διάβρωση, στους διαλύτες και τη θερμοκρασία. Έχει εξαιρετικά ισχυρή συγκόλληση, κολλάει ανομοιογενείς επιφάνειες, είναι λεπτόρρευστη για εύκολη διείσδυση και έχει εξαιρετική αντοχή στην υγρασία.",
		category: "Επισκευαστικά Σκυροδέματος",
		amount: "1kg",
		image: "https://i.imgur.com/umqb2LK.png",
	},
	/*=============
	   Vivechrom
	===============*/
	{
		name: "Vivecryl Top Acrylic",
		description: "Το προϊόν VIVECRYL TOP ACRYLIC της Vivechrom είναι νέος ακρυλικός παστώδης σοβάς κορυφαίας ποιότητας, με άριστη πρόσφυση και μεγάλη ευκολία εφαρμογής, έτοιμος προς χρήση. Μπορεί να χρησιμοποιηθεί ως τελικό προστατευτικό και διακοσμητικό επίχρισμα σε εξωτερικές και εσωτερικές επιφάνειες, όπως σκυρόδεμα, σοβά και σε συστήματα εξωτερικής θερμομόνωσης ETICS. Παρουσιάζει εξαιρετική αντοχή στις καιρικές συνθήκες και στις μηχανικές καταπονήσεις, και μεγάλη αντοχή στην UV ακτινοβολία. Εμποδίζει να εμφανιστούν μούχλα και άλγη.",
		category: "Ακρυλικός Σοβάς",
		amount: "1kg, 5kg",
		image: "https://i.imgur.com/HEHubJX.png",
	},
]
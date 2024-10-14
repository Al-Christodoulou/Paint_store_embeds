const Products = [
	/*
	=============
	  Vivechrom
	=============
	*/
	{
		name: "Aquachrom Primer Eco",
		description: "Το AQUACHROM PRIMER ECO είναι οικολογική βελατούρα νερού ιδανική για εσωτερικές ξύλινες επιφάνειες. Είναι πιστοποιημένο οικολογικό χρώμα και πληροί τα κριτήρια του Συμβουλίου Απονομής Οικολογικών Σημάτων της Ευρωπαϊκής Ένωσης. Παρουσιάζει εξαιρετική πρόσφυση σε παλαιά βερνικοχρώματα διαλύτου (ριπολίνες ή λαδομπογιές). Χάρη στην ειδική του σύνθεση προστατεύει το χρήστη και δε ρυπαίνει το περιβάλλον. Εξασφαλίζει την τέλεια πρόσφυση του τελικού χρώματος.",
		category: "Βελατούρα",
		amount: "750ml, 2.5L",
		image: "https://i.imgur.com/3d188cl.png",
	},
	{
		name: "Aquaxyl Varnish",
		description: "To AQUAXYL VARNISH είναι βερνίκι εμποτισμού ξύλου βάσεως νερού, εσωτερικής και εξωτερικής χρήσης. Δημιουργεί ένα όμορφο γυαλιστερό ή σατινέ φινίρισμα, αναδεικνύοντας τη φυσική ομορφιά του ξύλου. Εφαρμόζεται σε πόρτες, παράθυρα, κουφώματα, ξυλεπενδύσεις και κάθε ξύλινη επιφάνεια. Είναι άοσμο και βάφεται εύκολα. Έχει μεγάλη ελαστικότητα και δεν ξεφλουδίζει, φουσκώνει ή σπάει. Περιέχει φίλτρα UV για αποτελεσματική προστασία από την υπεριώδη ηλιακή ακτινοβολία.",
		category: "Βερνίκι Ξύλου",
		amount: "740ml",
		image: "https://i.imgur.com/7AGbx0z.png",
	},
	{
		name: "Aquaxyl Plus",
		description: "Το AQUAXYL PLUS είναι άοσμο συντηρητικό εμποτισμού ξύλου βάσεως νερού εξωτερικής χρήσης. Προστατεύει το ξύλο και αφήνει να φαίνονται τα νερά του αναδεικνύοντας τη φυσική ομορφιά του. Είναι απαραίτητο για κάθε καινούργια ή άβαφη ξύλινη επιφάνεια όπως πόρτες, παράθυρα, κουφώματα, ταβάνια, ξυλεπενδύσεις, υπόστεγα, πέργκολες, περιφράξεις. Διεισδύει βαθιά στο ξύλο, προστατεύοντάς το από τους μύκητες που προκαλούν σήψη και αποχρωματισμό στο ξύλο. Προσφέρει αποτελεσματική προστασία από την υπεριώδη ηλιακή ακτινοβολία. Είναι υδατοαπωθητικό και δεν ξεφλουδίζει, φουσκώνει ή σπάει.",
		category: "Βερνίκι Ξύλου",
		amount: "750ml",
		image: "https://i.imgur.com/0dP1zmq.png",
	},
	{
		name: "Αστάρι Αλουμινίου & Γαλβανιζέ",
		description: "Το ΑΣΤΑΡΙ ΑΛΟΥΜΙΝΙΟΥ & ΓΑΛΒΑΝΙΖΕ είναι ειδικό, με πολύ καλή πρόσφυση σε μη σιδηρές επιφάνειες όπως αλουμίνιο και γαλβανιζέ λαμαρίνες. Είναι επίσης κατάλληλο για επιφάνειες από ανοξείδωτο χάλυβα και χαλκό. Παρέχει αντισκωριακή προστασία, στεγνώνει γρήγορα, έχει μεγάλη ελαστικότητα και εμφανίζει πολύ καλό άπλωμα.",
		category: "Αστάρι Αλουμινίου Γαλβανιζέ",
		amount: "750ml",
		image: "https://i.imgur.com/IWS9W7l.png",
	},
	{
		name: "Αστάρι Γυψοσανίδων",
		description: "Το ΑΣΤΑΡΙ ΓΥΨΟΣΑΝΙΔΩΝ ECO είναι υψηλής ποιότητας οικολογικό ακρυλικό υδατοδιαλυτό αστάρι εσωτερικής χρήσης, κατάλληλο για γυψοσανίδες και άλλες απορροφητικές επιφάνειες από σοβά, σπατουλαριστά κ.ά. Έχει εξαιρετική γεμιστική ικανότητα, χάρη στην οποία εξομαλύνει ατέλειες και επιφανειακές ανομοιομορφίες της γυψοσανίδας. Παράλληλα, εξισορροπεί άριστα την απορροφητικότητα ανάμεσα στη στοκαρισμένη επιφάνεια και στη γυψοσανίδα, εξασφαλίζοντας ένα αψεγάδιαστο τελικό αποτέλεσμα μετά την επαναβαφή του με πλαστικό χρώμα.",
		category: "Αστάρι Γυψοσανίδων",
		amount: "1L, 3L, 10L",
		image: "https://i.imgur.com/tcW8lYD.png",
	},
	{
		name: "Αστάρι Μετάλλων",
		description: "Το ΑΣΤΑΡΙ ΜΕΤΑΛΛΩΝ είναι υψηλής ποιότητας ταχυστέγνωτο υπόστρωμα βερνικοχρωμάτων κατάλληλο για μεταλλικές επιφάνειες. Δουλεύεται μαλακά, έχει μεγάλη πρόσφυση και καλυπτικότητα και τρίβεται εύκολα. Διατίθεται σε λευκό και γκρί-καφέ.",
		category: "Αστάρι Μετάλλων",
		amount: "750ml, 2.5L",
		image: "https://i.imgur.com/dtKUvXm.png",
	},
	{
		name: "Αστάρι Πλαστικών",
		description: "Το ΑΣΤΑΡΙ ΠΛΑΣΤΙΚΩΝ είναι υπόστρωμα νερού για πλαστικά χρώματα. Έχει πολύ καλή πρόσφυση, σκληρότητα και ελαστικότητα καθώς και μεγάλη αντοχή σε αλκαλικές επιφάνειες. Εξασφαλίζει ομοιόμορφη ματ επιφάνεια στο τελικό χρώμα.",
		category: "Αστάρι Πλαστικών",
		amount: "750ml",
		image: "https://i.imgur.com/h7czTnI.png",
	},
	{
		name: "Αστάρι Vivedur Νερού",
		description: "Το ΑΣΤΑΡΙ VIVEDUR ΝΕΡΟΥ είναι διαφανές ακρυλικό αστάρι νερού για τοίχους, με ισχυρή πρόσφυση και μεγάλη διεισδυτικότητα . Είναι άοσμο, φιλικό για το περιβάλλον και τον χρήστη και για αυτό συνιστάται για το αστάρωμα εσωτερικών χώρων και ιδιαίτερα για κλειστούς χώρους που κατοικούνται. Το ΑΣΤΑΡΙ VIVEDUR ΝΕΡΟΥ είναι κατάλληλο για την προετοιμασία καινούργιων επιφανειών που βάφονται με πλαστικά χρώματα, όπως σοβάς, μπετόν, τούβλα, σπατουλαριστοί τοίχοι.",
		category: "Αστάρι Νερού",
		amount: "750ml",
		image: "https://i.imgur.com/nQOb2tK.png",
	},
	{
		name: "Αστάρι Vivedur",
		description: "To ΑΣΤΑΡΙ VIVEDUR είναι υψηλής ποιότητας αδιάβροχο ακρυλικό αστάρι διαλύτη και είναι ιδανικό για τοίχους και ταράτσες. Έχει ισχυρή πρόσφυση και μεγάλη διεισδυτικότητα για επιφάνειες που βάφονται με πλαστικά και ακρυλικά χρώματα. Επιτυγχάνει το δέσιμο και τη σταθεροποίηση της επιφάνειας ενισχύοντας έτσι την καλύτερη πρόσφυση του τελικού χρώματος.",
		category: "Αστάρι Διαλύτη",
		amount: "750ml",
		image: "https://i.imgur.com/Jg1PrRL.png",
	},
	{
		name: "Neopal Primer Eco",
		description: "Το NEOPAL PRIMER ECO είναι οικολογικό μικρονιζέ ακρυλικό αστάρι νερού για τοίχους, με ισχυρή πρόσφυση και μεγάλη διεισδυτικότητα. Είναι άοσμο και συνιστάται για εσωτερικούς χώρους και ιδιαίτερα για κλειστούς χώρους που κατοικούνται. Επιπλέον, είναι ελαφρώς χρωματισμένο μπλε για να φαίνεται που έχετε ασταρώσει και καλύπτεται τέλεια όταν επαναβάφεται. Είναι κατάλληλο για την προετοιμασία καινούργιων επιφανειών που βάφονται με πλαστικά χρώματα, όπως σοβάς, μπετόν, τούβλα, σπατουλαριστοί τοίχοι.",
		category: "Αστάρι Νερού",
		amount: "1L, 5L",
		image: "https://i.imgur.com/3vqdkBF.png",
	},
	{
		name: "Vivecryl Primer",
		description: "Το VIVECRYL PRIMER είναι σιλικονούχο ακρυλικό μικρονιζέ αστάρι νερού που αδιαβροχοποιεί την επιφάνεια, έχοντας παράλληλα υψηλή διαπνοή. Συμβάλλει σημαντικά στον περιορισμό της μετανάστευσης αλάτων από τον τοίχο στην επιφάνεια του τελικού χρώματος, ενώ ταυτόχρονα περιορίζει το φαινόμενο της ανερχόμενης υγρασίας από το έδαφος. Έχει ισχυρή πρόσφυση, μεγάλη διεισδυτικότητα και αντοχές σε αλκαλικά υποστρώματα. Συνιστάται ιδιαίτερα για το αστάρωμα εξωτερικών επιφανειών που βάφονται με σιλικονούχα, ελαστομερή και 100% ακρυλικά χρώματα, καθώς και με στεγανωτικά, τσιμεντοχρώματα, πλαστικά χρώματα και RELIEF.",
		category: "Αστάρι Νερού",
		amount: "1L, 5L",
		image: "https://i.imgur.com/NITVm8m.png",
	},
	{
		name: "Rust Primer",
		description: "Το RUST PRIMER είναι ταχυστέγνωτο ισχυρότατο αντισκωριακό αστάρι που περιέχει μη τοξικά αντισκωριακά πιγμέντα. Είναι απαραίτητο για την προστασία μεταλλικών επιφανειών όπως αμαξώματα, γεωργικά μηχανήματα, κάγκελα και γενικά σιδηρές κατασκευές. Έχει μεγάλη ελαστικότητα και ισχυρή πρόσφυση. Διατίθεται σε γκρι και καφέ στις συσκευασίες των 750ml, 2,5lt & 5lt.",
		category: "Αντισκωριακό Αστάρι",
		amount: "750ml, 2.5L, 5L",
		image: "https://i.imgur.com/LtH0nFH.png",
	},
	{
		name: "Strong Grip Primer",
		description: "Το STRONG GRIP PRIMER της Vivechrom είναι χαλαζιακό αστάρι ισχυρής πρόσφυσης βάσεως νερού, κατάλληλο για αστάρωμα λείων και χαμηλής απορροφητικότητας επιφανειών, όπως εμφανές σκυρόδεμα, βαμμένες λείες επιφάνειες, πλακάκια, μάρμαρα, μωσαϊκό, μέταλλο, γυαλί, γυψοσανίδες, τσιμεντοσανίδες, θερμομονωτικές πλάκες πολυστερίνης. Δημιουργεί μια αδρή επιφάνεια και εγγυάται μια ισχυρή πρόσφυση για την επικάλυψη που ακολουθεί όπως τσιμεντοκονιάματα, κόλλες πλακιδίων.",
		category: "Χαλαζιακό Αστάρι",
		amount: "3L, 10L",
		image: "https://i.imgur.com/KXMsT4k.png",
	},
	{
		name: "Teak Oil",
		description: "Το TEAK OIL της Vivechrom είναι ένα ειδικό μείγμα από έλαια, το οποίο χρησιμοποιείται για τη συντήρηση και το φρεσκάρισμα σκληρών κυρίως ξύλων όπως τίκ, μαόνι, ιρόκο αλλά και κάθε γυμνό ξύλο. Απορροφάται από το ξύλο γεμίζοντας τους πόρους του χωρίς να σχηματίζει φιλμ και εμποδίζει την διείσδυση του νερού. Ζωντανεύει και τονίζει τη φυσική απόχρωση και την υφή του ξύλου, η οποία έχει ξεθωριάσει με τον καιρό ή τη χρήση. Ιδανικό για έπιπλα κήπου, βεράντας, και για έπιπλα εσωτερικού χώρου.",
		category: "Αστάρι Ξύλου",
		amount: "750ml",
		image: "https://i.imgur.com/3EpiYq9.png",
	},
	{
		name: "Velatura",
		description: "Η VELATURA είναι υπόστρωμα βερνικοχρωμάτων με νέα σύνθεση που τρίβεται πολύ εύκολα. Είναι κατάλληλη για εσωτερικές και εξωτερικές ξύλινες επιφάνειες. Έχει υψηλή καλυπτικότητα και λευκότητα, δουλεύεται μαλακά και απλώνει θαυμάσια. Επαναβάφεται με την κορυφαία ριπολίνη εξαιρετικής καλυπτικότητας VIVEWOOD της Vivechrom.",
		category: "Βελατούρα",
		amount: "750ml",
		image: "https://i.imgur.com/4qW5t9p.png",
	},
	{
		name: "Vivedur Multiprimer Eco",
		description: "Το VIVEDUR MULTIPRIMER ECO είναι σιλικονούχο ακρυλικό αστάρι Νανοτεχνολογίας, βάσεως νερού, για εξωτερικούς και εσωτερικούς τοίχους. Είναι μικρονιζέ και γι’αυτό έχει μεγαλύτερη διείσδυση και ισχυρότερη πρόσφυση προσφέροντας εξαιρετική συνδετικότητα, ισχυροποιώντας πορώδεις επιφάνειες όπως σοβά, μπετό, γυψοσανίδες, τσιμεντοσανίδες, στόκο σπατουλαρίσματος, υδρόχρωμα. Είναι υδρόφοβο, αδιαβροχοποιεί τις επιφάνειες και αναπνέει και έχει πολύ καλές αντοχές στα αλκάλια. Εμποδίζει τη μετανάστευση αλάτων από τον τοίχο στην επιφάνεια του τελικού χρώματος.",
		category: "Αστάρι Νερού",
		amount: "1L, 3L, 10L",
		image: "https://i.imgur.com/0XirCC7.png",
	},
	{
		name: "Vive Primer",
		description: "Το VIVE PRIMER 100% Ακρυλικό Αστάρι Πλαστικών είναι ημιδιάφανο αστάρι νερού για πλαστικά & ακρυλικά χρώματα. Εφαρμόζεται σε εσωτερικές και εξωτερικές επιφάνειες από σοβά, τσιμέντο και σπατουλαριστές επιφάνειες. Έχει πολύ καλή πρόσφυση και διεισδυτικότητα, μεγάλη ελαστικότητα και αντοχή σε αλκαλικές επιφάνειες, επιτυγχάνοντας πολύ καλό δέσιμο του υποστρώματος. Εφαρμόζεται εύκολα και έχει υψηλή απόδοση. Διευκολύνει το άπλωμα και εξασφαλίζει ομοιόμορφη επιφάνεια στο τελικό χρώμα. Είναι διαθέσιμο σε συσκευασίες των 750ml, 3lt και 10lt.",
		category: "Αστάρι Νερού",
		amount: "1L, 3L, 10L",
		image: "https://i.imgur.com/kFo37Me.png",
	},
	{
		name: "Vivelack",
		description: "To VIVELACK είναι έγχρωμο διακοσμητικό και προστατευτικό βερνίκι ξύλου εσωτερικής και εξωτερικής χρήσης. Εφαρμόζεται σε πόρτες, παράθυρα, κουφώματα, κουπαστές, ξυλεπενδύσεις και γενικά σε κάθε ξύλινη επιφάνεια. Βάφεται εύκολα και απλώνει θαυμάσια. Έχει μεγάλη ελαστικότητα και σκληρότητα και εξασφαλίζει στο ξύλο προστασία και ωραία εμφάνιση.",
		category: "Βερνίκι Ξύλου",
		amount: "200ml, 750ml",
		image: "https://i.imgur.com/uSInLeb.png",
	},
	{
		name: "Vivelux",
		description: "Το VIVELUX είναι διαφανές βερνίκι θαλάσσης εξωτερικής χρήσης, που προσφέρει μακροχρόνια προστασία και τονίζει την φυσική ομορφιά του ξύλου. Εφαρμόζεται σε μαλακά και σκληρά ξύλα και συνιστάται ιδιαίτερα για σκάφη και κάθε είδους ξύλινες κατασκευές όπως πόρτες, παράθυρα, κουφώματα. Περιέχει φίλτρα UV για προστασία από την επίδραση των υπεριωδών ακτίνων του ήλιου. Εφαρμόζεται εύκολα χωρίς να τρέχει και σχηματίζει μία σκληρή και ελαστική μεμβράνη, ανθεκτική στις δυσμενείς καιρικές συνθήκες.",
		category: "Βερνίκι Θαλάσσης",
		amount: "750ml, 2.5L",
		image: "https://i.imgur.com/Y6Ordct.png",
	},
	{
		name: "Vivestone",
		description: "Το VIVESTONE είναι διαφανές γυαλιστερό ακρυλικό βερνίκι πέτρας και τεχνητών δομικών υλικών. Είναι κατάλληλο για την προστασία και διακόσμηση τοίχων, τζακιών, πεζουλιών κλπ, που είναι κατασκευασμένα από φυσικά δομικά υλικά όπως πέτρες, μάρμαρα, πλάκες Καρύστου, πλάκες τύπου Μάλτας, πορόλιθους ή τεχνητά δομικά υλικά όπως τούβλα, κεραμίδια, πλακίδια, διακοσμητικά στοιχεία από γύψο, μπετόν. Έχει μεγάλη πρόσφυση, στιλπνότητα, σκληρότητα και αντοχή στα κτυπήματα και την τριβή. Παρουσιάζει εξαιρετική στεγανωτική ικανότητα, μεγάλη αντοχή στις καιρικές επιδράσεις, την έντονη ηλιοφάνεια λόγω των UV φίλτρων που περιέχει, εξαιρετική αντοχή σε αλκαλικές επιφάνειες και προστατεύει από τη ρύπανση της ατμόσφαιρας.",
		category: "Βερνίκι Πέτρας",
		amount: "750ml, 2.25L",
		image: "https://i.imgur.com/tPu1aWU.png",
	},
	/*
	===============
	  Cosmochrome
	===============
	*/
	{
		name: "Βερνίκι Πέτρας",
		description: "Το βερνίκι πέτρας της COSMOCHROME είναι ακρυλικής βάσεως και απόλυτα διαφανές. Έχει μεγάλη σκληρότητα, πρόσφυση και αντοχή σε όλες τις καιρικές συνθήκες. Δεν κιτρινίζει, προστατεύει από την υγρασία και τονίζει το φυσικό χρωματισμό της πέτρας. Κατάλληλο για πλάκες Πηλίου, Καρύστου, διακοσμητικά τούβλα, πορόλιθους, πυρότουβλα, κεραμίδια και γενικά για κάθε είδους απορροφητική πέτρα. Στεγνώνει σε 2 ώρες. Αποδίδει 6-7m²/lt.",
		category: "Βερνίκι Πέτρας",
		amount: "750ml",
		image: "https://i.imgur.com/2az5kxQ.png",
	},
	{
		name: "Βερνίκι Θαλάσσης",
		description: "Διαφανές βερνίκι με βάση ειδικές συνθετικές ρητίνες για εσωτερικές και εξωτερικές επιφάνειες. Προσφέρει μακροχρόνια προστασία από την υγρασία την βροχή και την θάλασσα και τις δύσκολες καιρικές συνθήκες.",
		category: "Βερνίκι Θαλάσσης",
		amount: "750ml, 2.5L",
		image: "https://i.imgur.com/lRnrgr9.png",
	},
	{
		name: "Προστατευτικό βερνίκι εμποτισμού ξύλου",
		description: "Υδατοδιάλυτο συντηρητικό ξύλου εμποτισμού εσωτερικής και εξωτερικής χρήσης. Προστατεύει αποτελεσματικά τις ξύλινες επιφάνειες από το σαράκι, τους μύκητες και τις μπλε κηλίδες. Είναι ΑΟΣΜΟ. Διατίθεται σε άχρωμο.",
		category: "Βερνίκι Εμποτισμού Ξύλου",
		amount: "750ml",
		image: "https://i.imgur.com/2ZqBQVT.png",
	},
	/*
	===========
	  Berling
	===========
	*/
	{
		name: "ILMA",
		description: "Υβριδικό υδατοδιάλυτο βερνίκι ξύλινων επιφανειών ενός συστατικού για κάθε εσωτερική και εξωτερική επιφάνεια .Η Σύνθεση του με ακρυλικές και πολυουρεθανικές ρητίνες νέας υβριδικής τεχνολογίας του προσδίδει αυξημένη αντοχή τόσο σε μηχανικές καταπονήσεις όσο και στους εξωτερικούς παράγοντες (UV ραδιενέργεια and υγρασία). Προτείνεται για: Ξύλινα δάπεδα, επενδύσεις τοίχων, τραπέζια, ξύλινα έπιπλα",
		category: "Βερνίκι Ξύλου",
		amount: "750ml, 3L",
		image: "https://i.imgur.com/qU2e42y.png",
	},
	{
		name: "GEL",
		description: "Υδατοαπωθητικό - αναπνέον θιξοτροπικό διάφανο βερνίκι εμποτισμού ξύλου υψηλής ποιότητας, για ξύλα υπό μορφή ζελέ. Βασικό χαρακτηριστικό του είναι ότι δεν τρέχει, αλλά ρευστοποιείται όταν επιστρώνεται επί του ξύλου με πινέλο ή ρολό, με αποτέλεσμα την καλή διείσδυση και επίστρωση σε αυτό. Περιέχει ειδικά πρόσθετα τα οποία του δίνουν υδροαπωθητικές ιδιότητες, έτσι ώστε να προστατεύει σε βάθος το ξύλο από την υγρασία και τις δυσμενείς καιρικές συνθήκες καθώς επίσης επιτρέπει στο ξύλο να αναπνέει και το αποτρέπει από το ξεφλούδισμα. Κατάλληλο για εξωτερική και εσωτερική χρήση, δίνει μια ελαφρώς σατινέ επιφάνεια. Χρησιμοποιείται σε ξύλινα σπίτια, ξύλινους σκελετούς οροφής, δοκάρια, παραθυρόφυλλα, σκάλες, επενδύσεις τοίχων, έπιπλα κλπ.",
		category: "Βερνίκι Εμποτισμού Ξύλου",
		amount: "750ml",
		image: "https://i.imgur.com/IAupkpE.png",
	},
	{
		name: "Duty - Αντισκωριακό",
		description: "Πολύ καλής ποιότητας αντισκωριακό υπόστρωμα βερνικοχρωμάτων",
		category: "Αντισκωριακό Αστάρι",
		amount: "750ml",
		image: "https://i.imgur.com/YO1JOPS.png",
	},
	/*
	=======
	  V33
	=======
	*/
	{
		name: "Βερνίκι Εμποτισμού Classic",
		description: "Κατάλληλο για κάθε ξύλινη κατασκευή εσωτερική και εξωτερική, όπως πατζούρια, παράθυρα, στέγαστρα, κατασκευές κήπου κλπ. Ευρωπαϊκά και εξωτικά ξύλα, νέα ή παλαιά για επαναβαφή πάνω απο βερνίκι εμποτισμού νερού ή διαλύτου.",
		category: "Βερνίκι Εμποτισμού Ξύλου",
		amount: "750ml",
		image: "https://i.imgur.com/BzG4XOq.png",
	},
	{
		name: "Pur Protect",
		description: "Άχρωμο γυαλιστερό βερνίκι δαπέδου, έτοιμο προς χρήση. Συνιστάται για την διακόσμηση και την προστασία ξυλείας εσωτερικού χώρου όπως έπιπλα, διακοσμητικά, πόρτες κλπ. Είναι κατάλληλο για όλους τους τύπους ξυλείας, ευρωπαϊκής και εξωτικής. Δίνει πλούσιο χρώμα και κομψό, μεταξένιο σατινέ/γυαλιστερό φινίρισμα.",
		category: "Βερνίκι Δαπέδων",
		amount: "750ml",
		image: "https://i.imgur.com/jukWzeY.png",
	},
	{
		name: "Βερνίκι Πέτρας",
		description: "Βερνίκι πέτρας σε σατινέ φινίρισμα, για εσωτερική, εξωτερική χρήση. Χαρακτηριστικά: Προστατεύει και διακοσμεί πορώδη φυσικά υλικά, όπως πέτρες φυσικές, πέτρες τεχνητές, τούβλα διακοσμητικά, πυρότουβλα, κεραμίδια, πορόλιθους, τσιμέντο. Αποτρέπει την ανάπτυξη μούχλας, προσφέρει υψηλή προστασία και αντοχή στις αλλαγές των καιρικών συνθηκών και το κιτρίνισμα. Απόδοση: 12 m²/L Χρόνος στεγνώματος ανάμεσα στο ένα χέρι και στο άλλο: έως 120 λεπτά.",
		category: "Βερνίκι Πέτρας",
		amount: "750ml",
		image: "https://i.imgur.com/U1AUtBg.png",
	},
	/*
	===========
	  Evochem
	===========
	*/
	{
		name: "Decor Xylofarm Aqua",
		description: "Το DECOR XYLOFARM AQUA είναι ρητινούχο προστατευτικό βερνίκι για ξύλα, νέας υβριδικής τεχνολογίας πολυουρεθανικών και ακρυλικών ρητινών υδατικής βάσης, φιλικότερο προς το περιβάλλον και τον χρήστη. Η ειδική του σύνθεση με μείγμα κεριών και ειδικών ρητινών νέας τεχνολογίας επιτρέπουν την διείσδυση του βαθιά στο ξύλο για εξαιρετική προστασία από προσβολές του περιβάλλοντος. Περιέχει φίλτρα UV για αποτελεσματική προστασία από την ηλιακή ακτινοβολία. Είναι υδροαπωθητικό, αποτρέπει το μαύρισμα και την αποσάθρωση του ξύλου. Δεν ξεφλουδίζει, δεν σπάει και δεν φουσκώνει χάρη στη μεγάλη του ελαστικότητα που ακολουθεί τις συστολές και διαστολές του ξύλου.",
		category: "Βερνίκι Εμποτισμού Ξύλου",
		amount: "750ml",
		image: "https://i.imgur.com/HioLFe4.png",
	},
	{
		name: "Xylofarm Aqua Killer",
		description: "Το XYLOFARM AQUA KILLER είναι ένα συμπυκνωμένο συντηρητικό ξύλου μικρομοριακής τεχνολογίας, ειδικά σχεδιασμένο για την εξάλειψη των εντόμων και τερμιτών που προσβάλουν τα ξύλα. Το XYLOFARM AQUA KILLER προσφέρει πρόληψη και θεραπεία των ξύλων και της δομικής ξυλείας. Η καινοτόμος σύνθεση του XYLOFARM AQUA KILLER με ενεργή διείσδυση επιτρέπει στα δραστικά συστατικά να συνεχίσουν να διεισδύσουν μέσα στο ξύλο, ακόμη και μετά την πλήρη εξάτμιση του νερού.",
		category: "Συντηρητικό Ξύλου",
		amount: "20ml, 750ml",
		image: "https://i.imgur.com/Shv3s42.png",
	},
	{
		name: "Wood Varnish Aqua",
		description: "Το WOOD VARNISH είναι διαφανές ακρυλικό βερνίκι ξύλου υδατικής βάσης εσωτερικής και εξωτερικής χρήσης. Είναι κατάλληλο για κάθε ξύλινη επιφάνεια. Είναι άοσμο, απλώνει εύκολα και δημιουργεί ένα όμορφο γυαλιστερό ή σατινέ φινίρισμα, αναδεικνύοντας τη φυσική ομορφιά του ξύλου. Έχει μεγάλη ελαστικότητα, δεν ξεφλουδίζει, δεν σπάει και περιέχει φίλτρα UV για προστασία από την υπεριώδη ηλιακή ακτινοβολία. Είναι υδατοαπωθητικό και έχει εξαιρετική αντοχή στη γήρανση.",
		category: "Βερνίκι Ξύλου",
		amount: "750ml, 2.5L",
		image: "https://i.imgur.com/wRJav8F.png",
	},
	{
		name: "Stone Care",
		description: "Κατάλληλο για εξωτερική χρήση σε φυσικές ή τεχνητές πέτρες, τούβλα, μάρμαρα, γρανίτη. Τονίζει το φυσικό χρώμα της επιφάνειας. Παρέχει υψηλή προστασία, αντοχή στη UV ακτινοβολία, εξαιρετική σκληρότητα, προστατεύει από την απορρόφηση λεκέδων και έχει εξαιρετική πρόσφυση.",
		category: "Βερνίκι Πέτρας",
		amount: "750ml",
		image: "https://i.imgur.com/JAvHZ08.png",
	},
	{
		name: "Porodur Aqua UVA",
		description: "Το PORODUR AQUA UVA είναι υψηλής ποιότητας διαφανές ακρυλικό βερνίκι πέτρας νερού, νανομοριακής τεχνολογίας, ενισχυμένο με σιλικόνη. Έχει μεγάλη διεισδυτικότητα και υψηλή αντοχή στις καιρικές επιδράσεις και στην υπεριώδη ηλιακή ακτινοβολία λόγω των UV φίλτρων που περιέχει. Προστατεύει την επιφάνεια που εφαρμόζεται από τα χτυπήματα, την τριβή, την υγρασία και την απορρόφηση λεκέδων. Διακοσμεί την επιφάνεια αναδεικνύοντας τους φυσικούς χρωματισμούς των υλικών που εφαρμόζεται. Είναι κατάλληλο για εσωτερική και εξωτερική χρήση.",
		category: "Βερνίκι Πέτρας",
		amount: "750ml",
		image: "https://i.imgur.com/nSVpLZN.png",
	},
	{
		name: "Concrete Sealer",
		description: "Το CONCRETE SEALER είναι υψηλής ποιότητας διαφανές βερνίκι-σφραγιστικό, αντιτριβικό και ισχυροποιητικό σταμπωτών δαπέδων και τεχνητών δομικών υλικών, καθαρής ακρυλικής βάσης, οργανικών διαλυτών ενισχυμένο με σιλικόνη. Έχει μεγάλη διεισδυτικότητα και υψηλή αντοχή στην υπεριώδη ηλιακή ακτινοβολία λόγω των UV φίλτρων που περιέχει. Ισχυροποιεί και προστατεύει την επιφάνεια που εφαρμόζεται από την τριβή, την υγρασία και την απορρόφηση λεκέδων. Διακοσμεί την επιφάνεια αναδεικνύοντας τους φυσικούς χρωματισμούς των υλικών που εφαρμόζεται. Προσφέρεται για εσωτερική και εξωτερική χρήση.",
		category: "Βερνίκι Δαπέδων",
		amount: "5L",
		image: "https://i.imgur.com/HymfQ13.png",
	},
	{
		name: "Liquid Glass Crystal",
		description: "Το LIQUID GLASS CRYSTAL είναι ισχυρή, υπερ-διάφανη εποξειδική ρητίνη υγρού γυαλιού, δύο συστατικών, εξαιρετικής μηχανικής αντοχής και πρόσφυσης, με πολύ μεγάλη αντοχή στην υγρασία, διαλύτες και θερμοκρασία. Είναι ιδανικό για εμβαπτισμό και καλούπωμα όμοιων και ανόμοιων υλικών, με πολύ χαμηλή συρρίκνωση. Χρησιμοποιείται για την κατασκευή ειδικών διακοσμητικών εφαρμογών με ανάγλυφα αντικείμενα γεμίζοντας τα κενά και τους πόρους και σχηματίζοντας μία τελική επιφάνεια σαν γυαλί. Είναι περισσότερο γρήγορο υλικό από το απλό LIQUID GLASS.",
		category: "Εποξειδική ρητίνη",
		amount: "1kg",
		image: "https://i.imgur.com/pR5nV9Q.png",
	},
	{
		name: "Premium Floor Varnish",
		description: "Το PREMIUM FLOOR VARNISH είναι διαφανές βερνίκι ακρυλικής πολυουρεθάνης 2 συστατικών που παρέχει μακροχρόνια προστασία σε δάπεδα εξωτερικών και εσωτερικών χώρων από ξύλο, τσιμέντο, μέταλλο και πέτρα. Περιέχει φίλτρα UV για αποτελεσματική προστασία από την ηλιακή ακτινοβολία. Η ειδική πολυουρεθανική του σύνθεση προσφέρει ανθεκτικό φινίρισμα που εξασφαλίζει εξαιρετική αντοχή στην κυκλοφορία πεζών, στην υγρασία, στη μηχανική καταπόνηση, στους διαλύτες και στις ακραίες περιβαλλοντικές συνθήκες. Ο εξαιρετικός συνδυασμός σκληρότητας και ελαστικότητας το καθιστούν το ιδανικό βερνίκι πατωμάτων.",
		category: "Βερνίκι Δαπέδων",
		amount: "3L",
		image: "https://i.imgur.com/FaJMF9p.png",
	},
	{
		name: "Stain Block M22",
		description: "Το STAIN BLOCK M22 είναι διαφανές, σιλικονούχο αδιαβροχοποιητικό και ελαιοαπωθητικό διαλύτου, κατάλληλο για μακροχρόνια προστασία επιφανειών χωρίς να επηρεάζει την αισθητική τους εμφάνιση.",
		category: "Αδιαβροχοποιητικό/Ελαιοαπωθητικό",
		amount: "1L",
		image: "https://i.imgur.com/S8PD4cL.png",
	},
	{
		name: "Zinc Sheen",
		description: "Το ZINC SHEEN είναι αστάρι και χρώμα, πλούσιο σε σκόνη ψευδαργύρου. Παρέχει υψηλή και μακροχρόνια αντισκωριακή προστασία - ψυχρό γαλβάνισμα. Είναι σχεδιασμένο για την επισκευή επιφανειών από γαλβανισμένο χάλυβα και την καθοδική προστασία μετάλλων. Ιδανικό για χρήση στην βιομηχανική παραγωγή και εργασίες συντήρησης. Προσφέρει αποτελεσματική προστασία ακόμα και σε έντονα όξινες ή αλκαλικές συνθήκες και υγρασία.",
		category: "Αντισκωριακό Αστάρι",
		amount: "750ml",
		image: "https://i.imgur.com/8zf4Wuy.png",
	},
	{
		name: "Clear Lack Acrylic",
		description: "Το CLEAR LACK ACRYLIC είναι καθαρό ακρυλικό βερνίκι. Εφαρμόζεται εύκολα, στεγνώνει γρήγορα, δίνοντας στην επιφάνεια που εφαρμόζεται ένα διαυγές, ανθεκτικό τελείωμα. Έχει πολλές εφαρμογές στη δουλειά, στο σπίτι, στο εργαστήριο, στα χόμπυ. Είναι κατάλληλο για τις περισσότερες επιφάνειες όπως ξύλα, μέταλλα, πέτρες, χαρτί, πλαστικά, κεραμικά κ.λ.π.",
		category: "Ακρυλικό Βερνίκι",
		amount: "180ml",
		image: "https://i.imgur.com/62EbZYq.png",
	},
	{
		name: "Isomix Beton Primer",
		description: "Το ISOMIX BETONPRIMER είναι ένα εξαιρετικό χαλαζιακό αστάρι πρόσφυσης, μείγμα ειδικών ακρυλικών ρητινών και διαβαθμισμένης χαλαζιακής άμμου. Εφαρμόζεται κυρίως σε λείες και χαμηλής απορροφητικότητας επιφάνειες. Έχει υψηλή αντοχή σε αλκαλικό περιβάλλον.",
		category: "Χαλαζιακό Αστάρι",
		amount: "15kg",
		image: "https://i.imgur.com/nw7xpcU.png",
	},
	/*
	===========
	  Palesse
	===========
	*/
	{
		name: "Finitura Varnish",
		description: "Άοσμο βερνίκι νερού, satine ή mat, για χρώμα κιμωλίας, εσωτερικής χρήσης, για ξύλινα έπιπλα και επιφάνειες, καθώς και ως προστατευτική επίστρωση πάνω από χρώμα κιμωλίας.",
		category: "Βερνίκι Χρώματος Κιμωλίας",
		amount: "5L",
		image: "https://i.imgur.com/t85Igt8.png",
	},
	/*
	=========
	  Other
	=========
	*/
	{
		name: "AP-103",
		description: "Αδιαβροχοποίηση για μάρμαρα, γρανίτες, καθώς και όλα τα φυσικά και τεχνητά πορώδη πετρώματα. Προϊόν εμποτισμού που προστατεύει από λάδια, νερό, λεκέδες μουστάρδας, καφέ κ.α. ενώ τονίζει τις φυσικές αποχρώσεις των πετρωμάτων. Μηδενίζει την απορροφητικότητα της επιφάνειας στο νερό και το λάδι, ενώ παράλληλα δίνει την όψη της βρεγμένης επιφάνειας χωρις να εμποδίζει την διαπνοή της επιφάνειας. Έχει μεγάλη αντοχή στον χρόνο και τις ακραίες καιρικές συνθήκες. Είναι κατάλληλο για εσωτερικούς και εξωτερικούς χώρους. Δεν δημιουργεί φιλμ και δεν κιτρινίζει.",
		category: "Αδιαβροχοποιητικό Πετρωμάτων",
		amount: "750ml",
		image: "https://i.imgur.com/UsAiejL.png",
	},
	{
		name: "Faux Wood Primer",
		description: "Το PGP FAUX WOOD PRIMER είναι υπόστρωμα που προετοιμάζει την επιφάνεια και δίνει το φόντο για την εφαρμογή της τεχνοτροπίας απομίμησης ξύλου PGP FAUX WOOD FINISH. Έχει εξαιρετική πρόσφυση, καλυπτικότητα και προσφέρει αντισκωριακή προστασία. Χρησιμοποιείται σε κάθε είδους σκληρή επιφάνεια. Προσφέρεται σε 3 αποχρώσεις που συνδυάζονται με τις 6 αποχρώσεις PGP FAUX WOOD FINISH για να προσδώσουν στην επιφάνεια εφαρμογής την όψη του ξύλου. Έχει εύκολη εφαρμογή, εξαιρετική πρόσφυση, εφαρμόζεται σε κάθε επιφάνεια και διατίθεται σε 3 αποχρώσεις.",
		category: "",
		amount: "750ml",
		image: "https://i.imgur.com/spOd0Aw.png",
	},
	{
		name: "Wash Primer",
		description: "Υψηλής ποιότητας αντισκωριακό υπόστρωμα δύο συστατικών. Παρουσιάζει εξαιρετική πρόσφυση σε γυαλιστερές επιφάνειες όπως αλουμίνιο, γαλβανιζέ, λαμαρίνες, πολυεστέρα, γυαλί και ανοξείδωτα μέταλλα. Ιδανικό για αλουμίνιο, γαλβανιζέ λαμαρίνες, πολυεστέρα, γυαλί και ανοξείδωτα μέταλλα Άψογη πρόσφυση σε γυαλιστερές επιφάνειες. Διατίθεται σε ανοιχτή κίτρινη απόχρωση.",
		category: "Αντισκωριακό Αστάρι",
		amount: "1kg",
		image: "https://i.imgur.com/Yei0twH.png",
	},
	{
		name: "Chameleon",
		description: "Το Chameleon είναι αστάρι πολλαπλών επιφανειών, σχεδιασμένο για εξαιρετική πρόσφυση σε πολλά διαφορετικά υποστρώματα: μέταλλο, γαλβανιζέ, πλαστικό, κεραμικό πλακάκι, ξύλο, γυαλί κ.λ.π., και λειτουργεί και ως καλυπτικό λεκέδων για γράσο, καπνιά, μελάνι, λεκέδες υγρασίας , νικοτίνη, καφές κ.λ.π. Επίσης μπορεί να χρησιμοποιηθεί και ως αναστολέας σκουριάς σε μεταλλικές επιφάνειες, με ανθεκτικότητα στην θερμοκρασία έως 100°C. Λειτουργεί χωρίς διαλύτες (είναι βάσεως νερού) και η επιφάνεια του είναι λευκή ημι-ματ.",
		category: "Αστάρι Πολλαπλών Επιφανειών",
		amount: "750ml, 2,5L",
		image: "https://i.imgur.com/JF6uQq5.png",
	},
	{
		name: "Syntilor Βερνίκι Πέτρας",
		description: "Βερνίκι πέτρας με μεγάλη διεισδυτική δύναμη και μαργαριταρένιο αποτέλεσμα. Προστατεύει τις πέτρες από τις πιο αντίξοες καιρικές συνθήκες ενώ αφήνει σατινέ φινίρισμα.",
		category: "Βερνίκι Πέτρας",
		amount: "750ml",
		image: "https://i.imgur.com/j0BQ07c.png",
	},
	{
		name: "Syntilor Vernis",
		description: "Βερνικι πετρας νερού με σατινέ όψη. Ιδανικό για εξωτερική χρήση σε πέτρες, τούβλα, πλακόστρωτα, αγάλματα κλπ. Προστατεύει από ρύπους και κηλίδες από λάδια μηχανών, λίπη ψησταριών ή από κάπνα. Παρέχει μια διακριτική και κομψή πατίνα και διακρίνεται για τη μακροζωϊα του.",
		category: "Βερνίκι Πέτρας",
		amount: "1L",
		image: "https://i.imgur.com/BmMt1wf.png",
	},
	{
		name: "Syntilor Vernis Antirouille",
		description: "Το Syntilor Αντιοξειδωτικό Βερνίκι προστατεύει αποτελεσματικά όλα τα μέταλλα εξωτερικών χώρων (έπιπλα κήπου, γκρίλ, λάμπα δαπέδου) και εσωτερικών χώρων. Το διαφανές άχρωμο φιλμ ενισχύει ελαφρώς τα μέταλλα διατηρώντας την αρχική τους εμφάνιση (ακατέργαστη, πατινοβολημένη ή σκουριασμένη).",
		category: "Βερνίκι Πέτρας",
		amount: "500ml",
		image: "https://i.imgur.com/PuWEGy5.png",
	},
	{
		name: "Stainshield",
		description: "Το StainShield είναι διεισδυτικό βερνίκι ξύλου που προσφέρει ένα διαρκές, ανθεκτικό φινίρισμα με εξαιρετική διατήρηση του χρώματος. Αναδεικνύει τη φυσική ομορφιά του ξύλου, εμποδίζει την υπεριώδη ακτινοβολία και τον αποχρωματισμό του ξύλου.",
		category: "Βερνίκι Ξύλου",
		amount: "750ml",
		image: "https://i.imgur.com/WXAshQr.png",
	},
	{
		name: "Isomix Quartz Glass Primer",
		description: "Το ISOMIX BETONPRIMER είναι ένα εξαιρετικό χαλαζιακό αστάρι πρόσφυσης, μείγμα ειδικών ακρυλικών ρητινών και διαβαθμισμένης χαλαζιακής άμμου. Εφαρμόζεται κυρίως σε λείες και χαμηλής απορροφητικότητας επιφάνειες, και έχει υψηλή αντοχή σε αλκαλικό περιβάλλον.",
		category: "Χαλαζιακό Αστάρι",
		amount: "3L",
		image: "https://i.imgur.com/jwynmFh.png",
	},
	{
		name: "Λινέλαιο Ωμό",
		description: "100% ωμό λινέλαιο, κατάλληλο για λαδώματα εσωτερικής & εξωτερικής τοιχοποιίας, λαδώματα ξύλινων επιφανειών και για στόκους.",
		category: "Χαλαζιακό Αστάρι",
		amount: "750ml",
		image: "https://i.imgur.com/oZbMpv0.png",
	},
	{
		name: "AP-K2",
		description: "Προϊόν κρυσταλλοποίησης για μάρμαρα και μωσαϊκά. Εφαρμόζεται με ατσαλόμαλλο και μηχανή κρυσταλλοποίησης. Γυαλίζει τα μάρμαρα χωρίς να δημιουργεί φιλμ και επιστρώσεις. Με την κρυσταλλοποίηση αυξάνεται η επιφανειακή σκληρότητα των μαρμάρινων δαπέδων καθώς και η αντοχή τους στα οξέα. Μπορεί να χρησιμοποιηθεί και για την συντήρηση δαπέδων που έχουν κρυσταλλοποιηθεί στο παρελθόν.",
		category: "Γυαλιστικό",
		amount: "750ml",
		image: "https://i.imgur.com/A2imYtc.png",
	},
	{
		name: "AP-K3",
		description: "Σύνθετο γυαλιστικό κερί για χρήση σε συνδυασμό με το υγρό κρυσταλλοποίησησς AP-K2. Τονίζει και αναδεικνύει τους χρωματισμούς των μαρμάρων ενώ παράλληλα προστατεύει και γυαλίζει.",
		category: "Γυαλιστικό",
		amount: "750ml",
		image: "https://i.imgur.com/kRMahHi.png",
	},
	{
		name: "Super Mar Apollon",
		description: "Το Super Mar Apollon Abrasives είναι υγρό μείγμα από κεριά για το γυάλισμα οποιουδήποτε τύπου της πέτρας. Μπορεί να χρησιμοποιηθεί με το χέρι ή με αυτόματες μηχανές γυαλίσματος.",
		category: "Γυαλιστικό",
		amount: "750ml",
		image: "https://i.imgur.com/JgTPLuj.png",
	},
];
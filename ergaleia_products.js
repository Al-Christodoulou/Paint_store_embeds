const Products = [
	/*=========
	   Morris
	===========*/
	{
		name: "Χαρτοταινία Morris",
		description: "Ιδανική για βάψιμο. Διαστάσεις: από 19mm x 40m έως 50mm x 40m.",
		category: "Χαρτοταινία",
		amount: "",
		image: "https://i.imgur.com/44o3YAT.png",
	},
	{
		name: "Ταινία Συσκευασίας Morris",
		description: "Σε διαφανή ή καφέ, χαμηλού θορύβου, σε διαστάσεις 48mm x 60m",
		category: "Ταινία Συσκευασίας",
		amount: "",
		image: "https://i.imgur.com/JRKVkP5.png",
	},
	{
		name: "Αυτοκόλλητη Υφασμάτινη Morris DT11 Ταινία Λευκή 48mmx20m",
		description: "Αυτοκόλλητη υφασμάτινη ταινία βαρέως τύπου. Είναι κατάλληλη για επισκευές σε αεραγωγούς. Ανθεκτική στην τριβή με ενισχυμένη επίστρωση υλικού.",
		category: "Ταινία Υφασμάτινη",
		amount: "",
		image: "https://i.imgur.com/aphQzJW.png",
	},
	{
		name: "Morris Μονωτική Ταινία S13758 Μαύρη",
		description: "Συνολικό πάχος 0,18mm.",
		category: "Μονωτική Ταινία",
		amount: "",
		image: "https://i.imgur.com/aGTj9rB.png",
	},
	{
		name: "Morris 26047 Αυτοκόλλητη Ταινία Διπλής Όψης 38mmx10m",
		description: "Δυνατή κολλητική ταινία διπλής όψεως. Κατάλληλη για χρήση σε χαλιά, PVC δάπεδα και μοκέτες.",
		category: "Ταινία Διπλής Όψης",
		amount: "",
		image: "https://i.imgur.com/aC7kG1S.png",
	},
	/*======
	   MGI
	========*/
	{
		name: "MGI Ασημί Αυτοκόλλητη Ταινία Αλουμινίου 48mmx5m",
		description: "Ταινία αλουμινίου με ακρυλική κόλλα. Κατάλληλη για τη σωστή, εύκολη και γρήγορη επιδιόρθωση και κάλυψη μπουριών σόμπας και σωληνώσεων μεταφοράς αέρος. Η ακρυλική κόλλα που διαθέτει τη καθιστά κατάλληλη για μόνωση και εφαρμογή. Με αντοχή στη θερμότητα από -30°C έως και +85°C.",
		category: "Αλουμινοταινία",
		amount: "",
		image: "https://i.imgur.com/uR4TX7w.png",
	},
	{
		name: "MGI Αυτοκόλλητη Ταινία Διπλής Όψης",
		description: "Η ταινία διπλής όψης της εταιρείας MGI είναι ιδανική για την στερέωση αντικειμένων. Διαθέτει ισχυρή κόλλα, χάρη στην οποία μπορείτε να την εφαρμόσετε σε διαφορετικές επιφάνειες. Είναι ισχυρή, ανθεκτική και εύκολη στη χρήση, αφαιρέστε το προστατευτικό χαρτί και εφαρμόστε. Δεν αφήνει υπολείμματα. Προσφέρεται σε διαστάσεις 19mm x 15m, 19mm x 10m, 19mm x 5m, και 50mm x 25m.",
		category: "Ταινία Διπλής Όψεως",
		amount: "",
		image: "https://i.imgur.com/J946IM3.png",
	},
	/*=======
	   Ceys
	=========*/
	{
		name: "Ceys Montack Total Grip Ταινία Διπλής Όψεως 19mm x 2.5m",
		description: "Ταινία διπλής όψης με πλέγμα ειδική για LED ταινίες. 300kg / ρολό. Η ταινία στερέωσης Ceys Montack είναι μια ταινία διπλής όψης που κολλάει άμεσα. Ισχυρή αντοχή μεγάλης διάρκειας. Κολλάει εύκολα, καθαρά και άμεσα σε κάθε είδους πορώδη και μη υλικά, σε λείες και ελαφρώς ανώμαλες επιφάνειες. Για εσωτερική και εξωτερική χρήση. Διάφανες με πλέξη. Συνολική αντοχή (8kg/25mm). Αντοχή στην υγρασία και σε θερμοκρασία ( από -10ºC εώς και +75ºC).",
		category: "Ταινία Διπλής Όψεως",
		amount: "",
		image: "https://i.imgur.com/Oiv0MtC.png",
	},
	/*=========
	   Benman
	===========*/
	{
		name: "Benman Πλαγιοκόφτης Ηλεκτρολόγου Powergrip Μήκους 145mm",
		description: "Διαθέσιμος σε μήκος των 145mm και 160mm.",
		category: "Πλαγιοκόφτης",
		amount: "",
		image: "https://i.imgur.com/z2wJtmN.png",
	},
	{
		name: "Benman Πένσα Ίσια",
		description: "Διαθέσιμα μήκη: 160mm, 180mm, 200mm.",
		category: "Πένσα",
		amount: "",
		image: "https://i.imgur.com/QngDOTR.png",
	},
	{
		name: "Benman Τανάλια Μήκους 200mm",
		description: "Μαλακό σύρμα 220 Ν/mm²: 4,50mm. Συσκευή νυχιών Ø750 Ν/mm²: 4,00mm. Σκληρό σύρμα Ø1800 Ν/mm²: 3,50mm",
		category: "Τανάλια",
		amount: "",
		image: "https://i.imgur.com/w7MN5Mh.png",
	},
	{
		name: "Benman Ποτηροπρίονο",
		description: "Ποτηροπρίονο της εταιρείας Benman για την ευκολότερη δημιουργία στρογγυλών οπών σε επιφάνειες εργασίας. Είναι κατάλληλο για διάτρηση σε ξύλο και μέταλλο. Από 33 έως 108mm.",
		category: "Ποτηροπρίονο",
		amount: "",
		image: "https://i.imgur.com/yArLwyS.png",
	},
	{
		name: "Μετροταινία BENMAN 71018",
		description: "",
		category: "Μέτρο",
		amount: "",
		image: "https://i.imgur.com/eHsWb6t.png",
	},
	{
		name: "Benman Μυστρί",
		description: "Μυστρί σοβατζήδων λοξό με ξύλινη λαβή και μεταλλική λάμα.",
		category: "Μυστρί",
		amount: "",
		image: "https://i.imgur.com/mlKaXWj.png",
	},
	{
		name: "Benman Ξύστρα Πολλαπλών Χρήσεων 63mm",
		description: "",
		category: "Ξύστρα",
		amount: "",
		image: "https://i.imgur.com/hbivYQa.png",
	},
	{
		name: "Benman Σπάτουλα με Inox Λάμα 140mm",
		description: "Φαρδιά σπάτουλα Inox με ξύλινη λαβή, ιδανική για ελαιοχρωματιστικές εργασίες.",
		category: "Σπάτουλα",
		amount: "",
		image: "https://i.imgur.com/ColQSe5.png",
	},
	{
		name: "Benman Σπάτουλα Στοκαδόρος",
		description: "Σπάτουλα για στοκάρισμα κατασκευασμένη απο υψηλής ποιότητας ατσάλι με ξύλινη λαβή. Για επαγγελματίες και ερασιτέχνες. Διαθέσιμη από 20mm έως 50mm.",
		category: "Σπάτουλα",
		amount: "",
		image: "https://i.imgur.com/dmrnoqr.png",
	},
	{
		name: "Benman Σπάτουλα Ξύστρα",
		description: "Σπάτουλα-ξύστρα από υψηλής ποιότητας μέταλλο Ιαπωνίας και ξύλινη λαβή. Ιδανική για επαγγελματική χρήση. Συνολικό μήκος: 19.5cm. Πλάτος: διαθέσιμη από 60mm έως 80mm.",
		category: "Σπάτουλα",
		amount: "",
		image: "https://i.imgur.com/MiGH8dL.png",
	},
	{
		name: "Benman Σπάτουλα Πλακιδίων",
		description: "",
		category: "Σπάτουλα Πλακιδίων",
		amount: "",
		image: "https://i.imgur.com/mEOQU1g.png",
	},
	{
		name: "Benman - Σπάτουλα με Μακριά Λάμα 120mm",
		description: "",
		category: "Σπάτουλα Πλακιδίων",
		amount: "",
		image: "https://i.imgur.com/EXxjSCx.png",
	},
	{
		name: "Δίσκος Κοπής Μετάλλου Benman",
		description: "Διάμετρος: 115 mm & 125 mm",
		category: "Δίσκος Κοπής Μετάλλου",
		amount: "",
		image: "https://s6.imgcdn.dev/JTuxO.webp",
	},
	/*===========
	   FF Group
	=============*/
	{
		name: "Φαλτσέτα FF Group",
		description: "Πλάτος Λάμας: 18mm, περιλαμβάνει 3 λάμες.",
		category: "Φαλτσέτα",
		amount: "",
		image: "https://i.imgur.com/BQlZdoL.png",
	},
	{
		name: "FF Group Λεπίδες Φαλτσέτας 10 τμχ.",
		description: "Σπαστές ανταλλακτικές λάμες 18mm, διαιρούνται σε εφτά κομμάτια με πάχος λάμας 0.55mm.",
		category: "Λάμες Φαλτσέτας",
		amount: "",
		image: "https://i.imgur.com/ay8Xlm0.png",
	},
	{
		name: "FF Group Πένσα Ίσια Ηλεκτρολόγου",
		description: "Πένσα επαγγελματικής χρήσης κατασκευασμένη από ατσάλι χρωμίου-βαναδίου με κοπτικές ακμές μεγάλου μήκους. Οι εργονομικές λαβές της διαθέτουν επένδυση πλαστικού δύο υλικών. Παρέχει προστασία VDE 1000 V και είναι ιδανική για ηλεκτρολόγους. Παρέχεται σε μήκη των 180mm και 200mm.",
		category: "Πένσα",
		amount: "",
		image: "https://i.imgur.com/hZjxuQK.png",
	},
	{
		name: "FF Group Πλαγιοκόφτης Ηλεκτρολόγου 160mm",
		description: "Πλαγιοκόφτης με εργονομική λαβή για άνετη χρήση και νικελομένη κεφαλή για αντοχή στη διάβρωση. Από υψηλής ποιότητας χρωμοβανάδιο, σφυρήλατο, ολικά σκληρυμένο με θερμική επεξεργασία.",
		category: "Πλαγιοκόφτης",
		amount: "",
		image: "https://i.imgur.com/zbguLDy.png",
	},
	{
		name: "FF Group Γαλλικό Κλειδί",
		description: "Το γαλλικό κλειδί της εταιρείας F.F. Group διαθέτει μήκος 300mm και είναι κατάλληλο για χρήση σε μηχανουργικές, υδραυλικές εργασίες και άλλα μαστορέματα. Διαθέτει ανθεκτικό σχεδιασμό και εργονομική λαβή για σύσφιξη ή χαλάρωση βιδών και παξιμαδιών έως 37mm.",
		category: "Γαλλικό Κλειδί",
		amount: "",
		image: "https://i.imgur.com/HPbx8Dg.png",
	},
	{
		name: "Ανταλλακτικές Λάμες FF GROUP",
		description: "Περιλαμβάνει 10 λάμες εξαιρετικά κοφτερές SK5 Blades. Κόβει με ευκολία μοκέτες, χαρτοκιβώτια, πλαστικά κ.α. Πολύ κοφτερές λεπίδες για μεγάλη διάρκεια χρήσης",
		category: "Λάμες Φαλτσέτας",
		amount: "",
		image: "https://i.imgur.com/YWj1L8c.png",
	},
	{
		name: "FF GROUP Μετροταινία",
		description: "Μέτροταινία ρολό με σύστημα power lock, ελαστική επένδυση και λάμα 16 mm, μήκους 3 μέτρων. Διαθέτει κλιπ ζώνης. Είναι με Αυτόματη Επαναφορά και Μαγνήτη 16mm x 3m.",
		category: "Μέτρο",
		amount: "",
		image: "https://i.imgur.com/mnQoh7M.png",
	},
	{
		name: "Συρματόβουρτσα Χειρός FF Group",
		description: "",
		category: "Συρματόβουρτσα",
		amount: "",
		image: "https://i.imgur.com/H2spwO3.png",
	},
	{
		name: "FF Group Συρματόβουρτσα Καμπάνα",
		description: "Για Γωνιακό Τροχό 150mm με Πάσο Μ14.",
		category: "Συρματόβουρτσα",
		amount: "",
		image: "https://i.imgur.com/CmxWKcg.png",
	},
	{
		name: "Δίσκος Κοπής Μετάλλου Inox FF Group",
		description: "Φ125x1.0",
		category: "Δίσκος Κοπής Μετάλλου",
		amount: "",
		image: "https://s6.imgcdn.dev/JT4Hn.webp",
	},
	{
		name: "F.F. Group Μαγνητικό Κατσαβίδι Σταυρός",
		description: "Κατσαβίδι σταυρός της εταιρείας F.F. Group, με μέγεθος μύτης PH0 και μήκος 60 χιλιοστά. Διαθέτει μαγνητική μύτη ώστε να κρατάει τις βίδες πριν την τοποθέτησή τους.",
		category: "Κατσαβίδι",
		amount: "",
		image: "https://s6.imgcdn.dev/JTlIT.webp",
	},
	/*========
	   Other
	==========*/
	{
		name: "Κίτρινη Μονωτική Ταινία PVC 0.13 x 19 x 20Y",
		description: "",
		category: "Μονωτική Ταινία",
		amount: "",
		image: "https://i.imgur.com/eXq14N5.png",
	},
	{
		name: "Morgan Μονωτική Ταινία 48mm x 18m MAR-04745 Λευκό",
		description: "",
		category: "Μονωτική Ταινία",
		amount: "",
		image: "https://i.imgur.com/9K7ZuJR.png",
	},
	{
		name: "Sidirela Ταινία Συσκευασίας Εύθραυστο 50mm x 60m",
		description: "Διαστάσεις: 50mm x 60m",
		category: "Ταινία Εύθραυστο",
		amount: "",
		image: "https://i.imgur.com/mrvJz70.png",
	},
	{
		name: "Ταινία Στεγανοποίησης 38mm x 1.5m Forsza Sigillante Saratoga",
		description: "Ταινία στεγανοποίησης της Saratoga. Συγκρατεί μόνιμα σκισίματα, ρωγμές ακόμα και σε ανώμαλες επιφάνειες. Απορροφά τις δονήσεις και αντέχει σε συστολή ή διαστολή. Για χρήση σε τσιμέντο ή σοβά συνιστάται να περαστεί με ένα ή περισσότερα χέρια αστάρι. Ανθεκτική στις ακτίνες UV, στις καιρικές συνθήκες και στην τριβή. Διαθέτει ειδική σύνθεση από ακρυλικό αφρώδες υλικό υψηλής ποιότητας. Μπορεί να εφαρμοστεί σε πλαστικά. μέταλλα, γυαλί και βαμμένο ξύλο. Μπορεί να βαφτεί με χρώματα νερού ή διαλύτη. Να μην χρησιμοποιείται σε επιφάνειες που τρίβονται εύκολα ή γίνονται σκόνη.",
		category: "Ταινία Στεγανοποίησης",
		amount: "",
		image: "https://i.imgur.com/zwsCdoL.png",
	},
	{
		name: "Interfilm Ταινία διπλής όψης αφρώδες μαύρη 12mm x 5m",
		description: "Aφρώδης μαύρη αυτοκόλλητη ταινία διπλής όψεως με ισχυρή συγκόλληση. Κατάλληλη για εσωτερική και εξωτερική χρήση. Ανθεκτική στη ζέστη και στο ψύχος. Πεδία εφαρμογής : Trim αυτοκινήτων, εξωτερικές μεταλλικές ταμπέλες, επικόλληση αντικειμένων μέσα σε αυτοκίνητα και σκάφη θαλάσσης.",
		category: "Ταινία Διπλής Όψεως",
		amount: "",
		image: "https://i.imgur.com/SXIqWu8.png",
	},
	{
		name: "Mammoth Powerful Grip Tape",
		description: "Η \"Powerful Grip Tape\" αποτελεί έναν νέο τύπο ινοπλισμένης ταινίας διπλής όψεως που διαθέτει απίστευτα ισχυρή και άμεση συγκόλληση. Προσφύεται σχεδόν σε οποιοδήποτε υλικό, σε εσωτερικές ή εξωτερικές εφαρμογές, συμπεριλαμβανομένων κεραμικών, τούβλων, ξυλείας, μέταλλων, πλαστικών και PVC. Είναι ανθεκτική στην υγρασία και την υπεριώδη ακτινοβολία. Είναι ιδανική για οικιακή, βιομηχανική, κατασκευαστική χρήση Μπορεί να εφαρμοστεί και ως αντικατάστατο για καρφιά και βίδες. Διατίθεται σε διαστάσεις 50mm x 2.5m, 25mm x 2.5m και 12mm x 2.5m.",
		category: "Ταινία Διπλής Όψεως",
		amount: "",
		image: "https://i.imgur.com/hUcyerP.png",
	},
	{
		name: "Everbuild Ταινία Επισκευής Σιλικόνης Αυτοβουλκανιζόμενη",
		description: "Η ταινία Silweld είναι η απίστευτη νέα ταινία που μπορείτε να χρησιμοποιήσετε για να επισκευάσετε σχεδόν οτιδήποτε, όπως σωλήνα νερού ή αέρα και να μονώσετε ηλεκτρικά καλώδια ή συνδέσεις. Δημιουργεί μια στεγανή, υδατοστεγή σφράγιση σε δευτερόλεπτα χωρίς να χρειάζεται κόλλα και λειτουργεί ακόμη και κάτω από το νερό! Το Silweld είναι ένας εξαιρετικός ηλεκτρικός μονωτήρας μέχρι 8.000 βολτ, αντέχει σε ακραίες θερμοκρασίες από -65 έως 260?C και αντέχει ακόμη και σε πίεση 700psi. Η Silweld αντιστέκεται επίσης στη βενζίνη, τα έλαια, τα οξέα, τους διαλύτες, το αλμυρό νερό και τις ακτίνες UV.  Silweld είναι τόσο διαφορετικό ώστε να μπορεί να χρησιμοποιηθεί για συνεχείς ή προσωρινές επισκευές σχεδόν σε οτιδήποτε: U bends, όλοι οι σωλήνες και εύκαμπτοι σωλήνες, μόνωση και στεγανοποίηση ηλεκτρικών καλωδίων και συνδέσμων, ένωση άκρων σχοινιών, αντιδιαβρωτική προστασία και πολλές άλλες χρήσεις.",
		category: "Ταινία Επισκευής",
		amount: "",
		image: "https://i.imgur.com/UD2Cyr5.png",
	},
	{
		name: "Φαλτσέτα Tech Boss",
		description: "",
		category: "Φαλτσέτα",
		amount: "",
		image: "https://i.imgur.com/n8769n6.png",
	},
	{
		name: "Vorel Φαλτσέτα 9mm",
		description: "Μεταλλική κατασκευή.",
		category: "Φαλτσέτα",
		amount: "",
		image: "https://i.imgur.com/CUMBJJw.png",
	},
	{
		name: "Φαλτσέτα Luna",
		description: "Οικονομική φαλτσέτα.",
		category: "Φαλτσέτα",
		amount: "",
		image: "https://i.imgur.com/936jGvB.png",
	},
	{
		name: "YATO Φαλτσέτα 25mm",
		description: "Με κουμπί αυτόματου κλειδώματος, αντέχει δύναμη 30 kg.",
		category: "Φαλτσέτα",
		amount: "",
		image: "https://i.imgur.com/BllzANL.png",
	},
	{
		name: "Ανταλλακτικά Φαλτσέτας Tajima",
		description: "10 τεμαχίων.",
		category: "Λάμες Φαλτσέτας",
		amount: "",
		image: "https://i.imgur.com/P5HmAnP.png",
	},
	{
		name: "Μαύρα Ανταλλακτικά Φαλτσέτας Tajima",
		description: "10 τεμαχίων.",
		category: "Λάμες Φαλτσέτας",
		amount: "",
		image: "https://i.imgur.com/fapuSQQ.png",
	},
	{
		name: "Finder Σετ 9 Κλειδιά Torx",
		description: "Σετ κλειδιά τύπου Torx - Standard 9τμχ.",
		category: "Κλειδιά",
		amount: "",
		image: "https://i.imgur.com/y5sQuHo.png",
	},
	{
		name: "Ρυθμιζόμενο Κλειδί Wokin 12\"",
		description: "Μαύρο φινίρισμα. Μέγιστο άνοιγμα 36mm 1,42\"",
		category: "Κλειδιά",
		amount: "",
		image: "https://i.imgur.com/XnC5GnA.png",
	},
	{
		name: "Maco Ποτηροτρύπανo HSS",
		description: "Της εταιρείας Maco για την ευκολότερη δημιουργία στρογγυλών οπών σε επιφάνειες εργασίας. Είναι από υλικό ενισχυμένου χάλυβα που εξασφαλίζει αντοχή και το καθιστά ανθεκτικό στις υψηλές θερμοκρασίες. Είναι κατάλληλο για διάτρηση σε ξύλο, μέταλλο και πλαστικό.",
		category: "Ποτηροπρίονο",
		amount: "",
		image: "https://i.imgur.com/l7bT1QC.png",
	},
	{
		name: "Τρυπάνι CYL-3",
		description: "Για περιστροφικά δράπανα/δραπανοκατσάβιδα, για κρουστικά δράπανα/δραπανοκατσάβιδα. Υψηλή αντοχή στη φθορά χάρη στο ανθεκτικό μείγμα καρβιδίου, σχεδιασμένο και κατασκευασμένο από τη Bosch. Αποτελεσματική διπλή ελίκωση σε σχήμα U, για καλή απομάκρυνση της σκόνης, μείωση τριβής και μεγάλη διάρκεια ζωής.",
		category: "Ποτηροπρίονο",
		amount: "",
		image: "https://i.imgur.com/U6eAV38.png",
	},
	{
		name: "Μέτρο Ρολό Giant Megalock KDS",
		description: "Παραδοσιακό μοντέλο βαρέως τύπου για επαγγελματίες. Το κουμπί on-off, διακόπτης κλειδώματος κλειδώνει την ταινία σε οποιαδήποτε θέση και σε οποιοδήποτε σημείο. Ακρυλική επίστρωση. Ταινία μονής όψης. Άγκιστρο άκρου με 2 πριτσίνια.",
		category: "Μέτρο",
		amount: "",
		image: "https://i.imgur.com/OpELcJd.png",
	},
	{
		name: "L' Outil Parfait Ξύστρα Rigid Κοντή 65mm",
		description: "Ξύστρα με ξύλινη λαβή, εξαιρετικής αντοχής από υψηλής ποιότητας μέταλλο.",
		category: "Ξύστρα",
		amount: "",
		image: "https://i.imgur.com/mBTXk7w.png",
	},
	{
		name: "Yato Ψαλίδι Χάρτου",
		description: "",
		category: "Ψαλίδι",
		amount: "",
		image: "https://i.imgur.com/KdevXVp.png",
	},
	{
		name: "Bellota Ψαλίδι Γενικής Χρήσης Μήκους 180mm",
		description: "",
		category: "Ψαλίδι",
		amount: "",
		image: "https://i.imgur.com/Z9uLnRL.png",
	},
	{
		name: "Kraft & Dele Αυτόματος Απογυμνωτής Καλωδίων",
		description: "Ο απογυμνωτής καλωδίων, από την εταιρία Kraft&Dele, είναι κατάλληλος για την αφαίρεση μόνωσης από μονόπλευρα και πολυπύρηνα καλώδια (επιπλέον μονωμένα). Έχει σκληρυμένες λεπίδες, αντιολισθητική λαβή από καουτσούκ και προσαρμόζεται αυτόματα στη διατομή του επεξεργασμένου αγωγού κατά τη διαδικασία απογύμνωσης.",
		category: "Απογυμνωτής Καλωδίων",
		amount: "",
		image: "https://i.imgur.com/Q3n3RpL.png",
	},
	{
		name: "Inter Ψαλίδι Κλαδέματος Μήκους 23cm",
		description: "Kλαδευτήρι INTER εξαιρετικής ποιότητας. Λεπίδα επιχρωμιωμένη εξαιρετικής κοπτικής αιχμής. Με ανατομικές λαβές. Με ελατήριο. Η συσκευασία περιλαμβάνει και μια ανταλλακτική λεπίδα και ελατήριο.",
		category: "Ψαλίδι",
		amount: "",
		image: "https://i.imgur.com/LdAkvtb.png",
	},
	{
		name: "Ankor Ψαλίδι Τρύγου Μήκους 20cm",
		description: "Κλαδευτήρι χειρός 20εκ. μεγάλης αντοχής, για γενικές εργασίες κλαδέματος, ειδικά σχεδιασμένο για λαχανόκηπους, καλλιεργητές και κηπουρούς. Διαθέτει: Εργονομική λαβή για άνετο και ξεκούραστο πιάσιμο, δυνατό και εύκαμπτο ελατήριο και μηχανισμό κλειδώματος στα άκρα.",
		category: "Ψαλίδι",
		amount: "",
		image: "https://i.imgur.com/WdOegf9.png",
	},
	{
		name: "SIT Συρματόβουρτσα Χειρός με Πλαστική Λαβή",
		description: "Συρματόβουρτσα για την αφαίρεση σκουριάς, χρωμάτων και βρωμιών από επιφάνειες. Διαθέτει σύρμα από χάλυβα 0.30mm και έχει συνολικό μήκος 245mm.",
		category: "Συρματόβουρτσα",
		amount: "",
		image: "https://i.imgur.com/vlivOZM.png",
	},
	{
		name: "Helix - Ταινία Επισκευής Σίτας",
		description: "5cm x 2m.",
		category: "Ταινία Επισκευής Σίτας",
		amount: "",
		image: "https://i.imgur.com/vbBFpQK.png",
	},
	{
		name: "Mentor Set Σπάτουλα \& Ξύστρα Σιλικόνης",
		description: "",
		category: "Ξύστρα Σιλικόνης",
		amount: "",
		image: "https://i.imgur.com/8GEuAOK.png",
	},
	{
		name: "Αντιολισθητική Αυτοκόλλητη Ταινία",
		description: "25mm x 20m.",
		category: "Αντιολισθητική Ταινία",
		amount: "",
		image: "https://i.imgur.com/3IL1lTW.png",
	},
	{
		name: "Varta Αλκαλική Mπαταρία 23A 12V",
		description: "",
		category: "Μπαταρία",
		amount: "",
		image: "https://s6.imgcdn.dev/JTICg.webp",
	},
	{
		name: "Toshiba High Power Μπαταρίες - ΑΑΑ",
		description: "Toshiba AAA High Power Αλκαλικές Μπαταρίες. Η τεχνολογία που ενσωματώνεται στις μπαταρίες Toshiba AAA έχει σχεδιαστεί για να διαρκούν και να διαρκούν και να διαρκούν. Αποτελούν αξιόπιστες πηγές ενέργειας. Είναι συμβατές με όλες τις ψηφιακές συσκευές που δέχονται μπαταρίες τύπου AAA.",
		category: "Μπαταρία",
		amount: "",
		image: "https://s6.imgcdn.dev/JTN7v.webp",
	},
	{
		name: "Μπαταρία Varta Longlife Extra AAA",
		description: "Αλκαλικές μπαταρίες Varta LongLife Extra, 1,5 Volt μέγεθος AAA, συσκευασία 4 τεμαχίων.Κατάλληλες για χρήση σε τηλεχειριστήρια τηλεοράσεων & Hi-Fi, φακούς και ρολόγια.",
		category: "Μπαταρία",
		amount: "",
		image: "https://s6.imgcdn.dev/JTQLN.webp",
	},
	{
		name: "Vorel Πιστόλι Σιλικόνης",
		description: "Ελαφρύ πιστόλι σιλικόνης από σίδηρο που ταιριάζει στα τυπικά φυσίγγια 300 ml μήκους 230 mm με σιλικόνη ή κόλλα. Για τη συμπίεση πυκνών μαζών / κόλλας / σιλικόνων / στεγανωτικών, που χρησιμοποιούνται για εργασίες ανακαίνισης και φινιρίσματος. Χωρητικότητα σωλήνα 300 ml.",
		category: "Μπιστόλι Σιλικόνης",
		amount: "",
		image: "https://s6.imgcdn.dev/JTkwq.webp",
	},
	{
		name: "Tajima Πιστόλι Σιλικόνης",
		description: "Διαθέτει σύστημα διανομής διπλής ώθησης και αυτόματη διακοπή ροής, δίνοντάς το πλεονέκτημα της αναλογίας 12:1.",
		category: "Μπιστόλι Σιλικόνης",
		amount: "",
		image: "https://s6.imgcdn.dev/JTnUB.webp",
	},
	{
		name: "OnSite Σετ Κατσαβίδια Ακριβείας",
		description: "OnSite Κατσαβίδια ακριβείας ωρολογοποιών",
		category: "Κατσαβίδι",
		amount: "",
		image: "https://s6.imgcdn.dev/JTsVu.webp",
	},
	{
		name: "Varta Μπαταρία Λιθίου 3V",
		description: "Η premium μπαταρία Varta έχει σχεδιαστεί για να παρέχει αξιόπιστη ισχύ για μικρές ηλεκτρονικές συσκευές. Οι μπαταρίες προσφέρουν την υψηλότερη απόδοση για εφαρμογές παλμικής και συνεχούς εκφόρτισης. Όλα τα κουμπιά λιθίου Varta είναι συσκευασμένα για παιδιά και πληρούν τα υψηλότερα πρότυπα ασφαλείας. Εγγυημένη η καλύτερη ποιότητα και διάρκεια.",
		category: "Μπαταρία",
		amount: "",
		image: "https://s6.imgcdn.dev/JTyoL.webp",
	},
	{
		name: "Varta LongLife Power Αλκαλικές Μπαταρίες",
		description: "",
		category: "Μπαταρία",
		amount: "",
		image: "https://s6.imgcdn.dev/JTKsa.webp",
	},
	{
		name: "TOSHIBA SUPER Αλκαλική Μπαταρία 9V",
		description: "",
		category: "Μπαταρία",
		amount: "",
		image: "https://s6.imgcdn.dev/JTP2w.webp",
	},
	{
		name: "Toshiba Αλκαλικές Μπαταρίες Ρολογιών 1.5V 10τμχ",
		description: "Σετ 10 μπαταριών για μικρές συσκευές όπως κομπιουτεράκια, ρολόγια, κλειδιά αυτοκινήτων και άλλα.",
		category: "Μπαταρία",
		amount: "",
		image: "https://s6.imgcdn.dev/JTTHt.webp",
	},
	{
		name: "Sola PTM5 Πλαστικό Αλφάδι",
		description: "Αλφάδι μίνι μαγνητικό κατασκευασμένο από συμπαγές πλαστικό ABS. Περιέχει φιαλίδια ακρυλικού σωλήνα που είναι ανθεκτικά στη θραύση. Το αλφάδι έχει μαγνητική λωρίδα για δυνατό κράτημα σε μεταλλικές επιφάνειες. Είναι ανθεκτικό στο νερό, στην θερμότητα και στο κρύο. Μπορεί να εφαρμοστεί σε οριζόντια, κάθετη ακόμα και σε γωνία με κλίση 45°.",
		category: "Αλφάδι",
		amount: "",
		image: "https://s6.imgcdn.dev/JSAZv.webp",
	},
]
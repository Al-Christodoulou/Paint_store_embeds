const Products = [
	/*==============
	    Durostick
	================*/
	{
		name: "Gold",
		description: "Τσιμεντοειδής, ιδιαίτερα εύκαμπτη κόλλα πλακιδίων και γρανιτών, ενισχυμένη με ακρυλικές ρητίνες. Διακρίνεται για την ισχυρή πρόσφυση και τη μηδενική κατακόρυφη ολίσθηση. Η υψηλή της θιξοτροπία επιτρέπει επιστρώσεις σε πάχη έως 15mm χωρίς να ‘κάθεται’, ενώ έχει και παρατεταμένο ανοιχτό χρόνο επικόλλησης. Είναι  κατάλληλη για την επικόλληση πλακιδίων χαμηλής και μη απορροφητικότητας, όπως γρανιτών, υαλοψηφίδων, cotto, klinker, porcellanato, porcellanato smaltato και διακοσμητικών τούβλων, σε εσωτερικούς και εξωτερικούς χώρους. Αντέχει στην υγρασία, τον παγετό, τις έντονες συστολοδιαστολές των επιφανειών και ενδείκνυται για  ενδοδαπέδια θέρμανση, πισίνες, κολυμβητήρια, ταράτσες, βεράντες, χώρους βαριάς κυκλοφορίας κ.ά.",
		category: "Κόλλα Πλακιδίων",
		amount: "5kg, 25kg",
		image: "https://i.imgur.com/kMN7gGR.png",
	},	
	{
		name: "D-90",
		description: "Πολυουρεθανική υπερκόλλα ενός συστατικού, με άριστη συγκολλητική ικανότητα, χωρίς διαλύτες. Έτοιμη προς χρήση, κολλάει ομοιογενή και ανομοιογενή υλικά (πλην πολυαιθυλενίου και teflon), αντέχει στην υγρασία και είναι κατάλληλη για εξωτερική ή και εσωτερική χρήση. Είναι απαραίτητη σε ναυπηγικές, μεταλλικές, οικοδομικές και ξυλουργικές κατασκευές. Επίσης, είναι κατάλληλη για μικροεπισκευές σε εξωτερικούς χώρους που εκτίθενται ακόμη και σε δυσμενείς καιρικές συνθήκες. Ιδανική για συγκολλήσεις πιθαριών και γλαστρών. Αυξάνει εντυπωσιακά τη δύναμη αγκύρωσης των upat, καθώς διογκώνεται ελαφρά. Απαραίτητη για συγκόλληση γωνιών κουφωμάτων αλουμινίου, συναρμολόγηση ξύλινων κουφωμάτων, στερέωση ξύλινων σοβατεπί σε τοίχο, διακοσμητικά από πέτρα, κεραμικό, σίδερο σε σοβά, μπετόν κ.ά.",
		category: "Πολυουρεθανική Υπερκόλλα",
		amount: "290ml",
		image: "https://i.imgur.com/jFxVCFL.png",
	},
	{
		name: "DS Polymer",
		description: "Ελαστικό σφραγιστικό και συγκολλητικό υλικό νέας τεχνολογίας. Άοσμο, χωρίς διαλύτες, σε 22 επιλεγμένες αποχρώσεις. Διαθέτει υψηλή συγκολλητική δύναμη και ελαστικότητα, αντοχή στην UV ακτινοβολία, την υγρασία, το όξινο και αλκαλικό περιβάλλον. Δεν κιτρινίζει, παραμένει ελαστικό σε βάθος χρόνου και προσφύεται σε πορώδεις επιφάνειες χωρίς αστάρι. Ιδανικό για στεγανοποίηση αρμών σε έπιπλα κουζίνας και αλουμινοκατασκευές (σφράγιση περιμετρικά σε κουφώματα από σίδερο, αλουμίνιο και ξύλο), καθώς και για αρμολόγηση της συμβολής σοβατεπί με πλακάκι δαπέδου. Κατάλληλο για σφράγιση αρμών σε τοίχους από γυψοσανίδα, τσιμεντοσανίδα, σοβά, πολυκαρμπονικά φύλλα, αλλά και για τη δημιουργία εκθετηρίων με πάνελ από νοβοπάν. Εξαιρετική, ασφαλής συγκόλληση καθρεπτών σε μπάνια. ",
		category: "Πολυουρεθανική Υπερκόλλα",
		amount: "340gr",
		image: "https://i.imgur.com/ZKhsTPn.png",
	},
	{
		name: "D-3",
		description: "Ακρυλική, τσιμεντοειδής, λευκή κόλλα υψηλών αντοχών, κατάλληλη για συγκόλληση και αρμολόγηση υαλότουβλων, σε εσωτερικούς και εξωτερικούς χώρους. Διακρίνεται για την άριστη εργασιμότητά της, την ισχυρή πρόσφυση και την υψηλή αντοχή στην τριβή, την υγρασία και τον παγετό. Δεν ‘κρεμάει’ στις κάθετες επιφάνειες και δεν συρρικνώνεται. Οι αρμολογημένες επιφάνειες προστατεύονται από την εμφάνιση τριχοειδών ρωγμών και παραμένουν σταθερές και αναλλοίωτες στον χρόνο.",
		category: "Κόλλα Υαλότουβλων",
		amount: "5kg",
		image: "https://i.imgur.com/5dJAVR0.png",
	},
	{
		name: "Κόλλα Γενικής Χρήσης",
		description: "Οικονομική, λευκή κόλλα γενικής χρήσης, βινυλικής βάσης. Προσφύεται και κολλάει μεταξύ τους μαλακά ξύλα όπως νοβοπάν, MDF, αλλά και φελλό, γυψοσανίδα, φελιζόλ, χαρτόνι κ.ά. Είναι ιδανική για συγκόλληση μεγάλων επιφανειών, όπως πρεσαριστά κουφώματα, φορμάικες με νοβοπάν, πλάκες από φελιζόλ ή φελλό και νοβοπάν επενδυμένο με μελαμίνη. Είναι αποτελεσματική στην προετοιμασία συγκόλλησης των άνω και κάτω πλευρών χαρτοκιβωτίων για συσκευασία προϊόντων κ.ά.",
		category: "Κόλλα Γενικής Χρήσης",
		amount: "180g",
		image: "https://i.imgur.com/YJau8gg.png",
	},
	{
		name: "Δερματόκολλα N69",
		description: "Ισχυρή βενζινόκολλα διπλής επάλειψης, κατάλληλη για βιομηχανίες σαλονιών,υποδηματοποιίας και εφαρμογές σε εγκαταστάσεις κλιματιστικών, βιομηχανίες πλαστικών σκαφών κ.ά. Παρέχει ελαστική συγκόλληση σε υλικά και επιφάνειες που υπόκεινται σε σταθερές ή παραμορφωτικές τάσεις. Κολλά δέρμα, δερματίνη, αφρώδες πλαστικό, λάστιχο, φελλό, μοκέτα, χαρτόνι κ.ά. μεταξύ τους ή επάνω σε ξύλινες, μεταλλικές και άλλες επιφάνειες. Σε μία ώρα αποκτά το 75% της δύναμής της και σε 24 ώρες τις τελικές της αντοχές. Aπαραίτητη για επισκευές στο σπίτι, το αυτοκίνητο και το σκάφος, σε πρακτική συσκευασία των 70ml",
		category: "Βενζινόκολλα",
		amount: "70ml",
		image: "https://i.imgur.com/yFPJ9cN.png",
	},
	{
		name: "Εποξειδική Κόλλα 20'",
		description: "Ισχυρή εποξειδική κόλλα - στόκος με μορφή πλαστελίνης, σε εύχρηστη συσκευασία. Ιδανική για κολλήσεις και σφραγίσεις, όμοιων και ανόμοιων υλικών. Eύκολα και γρήγορα, κόβεις, πλάθεις και κολλάς, δίνοντας άμεσα λύσεις σε διαρροές νερού σε ψυγεία αυτοκινήτων, καλοριφέρ, μεταλλικούς σωλήνες κ.ά. Απαραίτητη σε υδραυλικούς, ψυκτικούς, φανοποιούς αλλά και σε κάθε σπίτι, αυτοκίνητο ή σκάφος. Αντέχει σε θερμοκρασίες από -30°C έως +115°C, λιμάρεται και βάφεται.",
		category: "Εποξειδική Κόλλα",
		amount: "56gr",
		image: "https://i.imgur.com/IiU5izo.png",
	},
	/*===========
	    Isomat
	=============*/
	{
		name: "AK-9",
		description: "Κόλληση κεραμικών πλακιδίων, τοίχου ή δαπέδου, σε επιφάνειες από σκυρόδεμα, πλινθοδομή, σοβά κτλ. Για εσωτερικούς και εξωτερικούς χώρους.",
		category: "Κόλλα Πλακιδίων",
		amount: "25kg",
		image: "https://i.imgur.com/1lqbkbY.png",
	},	
	{
		name: "AK-10",
		description: "Κόλληση κεραμικών πλακιδίων, τοίχου ή δαπέδου, σε επιφάνειες από σκυρόδεμα, πλινθοδομή, σοβά κτλ. Για εσωτερικούς και εξωτερικούς χώρους.",
		category: "Κόλλα Πλακιδίων",
		amount: "5kg, 25kg",
		image: "https://i.imgur.com/rG59ZvN.png",
	},	
	{
		name: "AK-20",
		description: "Κόλληση παντός τύπου πλακιδίων, τοίχου ή δαπέδου, σε επιφάνειες με υψηλές απαιτήσεις σε πρόσφυση, ευκαμψία και αντοχή στην υγρασία. Για εσωτερικούς και εξωτερικούς χώρους. Έχει μηδενική ολίσθηση και μεγάλο ανοιχτό χρόνο επικόλλησης.",
		category: "Κόλλα Πλακιδίων",
		amount: "5kg, 25kg",
		image: "https://i.imgur.com/QQD4kGf.png",
	},
	{
		name: "AK-Rapid",
		description: "Ιδανική όπου πρέπει να γίνει γρήγορη χρήση του δαπέδου, όπως σε επαγγελματικούς χώρους, καταστήματα, ξενοδοχεία, χώρους διασκέδασης κτλ. Κόλληση πλακιδίων απορροφητικών και μη απορροφητικών, τοίχου ή δαπέδου, σε επιφάνειες από σκυρόδεμα, σοβά, πλινθοδομή κτλ. Για εσωτερικούς και εξωτερικούς χώρους. Έχει μηδενική ολίσθηση.",
		category: "Κόλλα Πλακιδίων",
		amount: "25kg",
		image: "https://i.imgur.com/uHwNKJO.png",
	},
	{
		name: "AK-Glass",
		description: "Ρητινούχα, τσιμεντοειδής κόλλα για κόλληση και αρμολόγηση υαλότουβλων.",
		category: "Κόλλα Υαλότουβλων",
		amount: "5kg",
		image: "https://i.imgur.com/tviJUIA.png",
	},
	{
		name: "AK-T35",
		description: "Κατάλληλη για επικόλληση θερμομονωτικών πλακών πολυστερίνης σε τσιμεντοειδείς επιφάνειες. Οπλισμένη με υαλόπλεγμα, χρησιμοποιείται και για την επικάλυψη των θερμομονωτικών πλακών, αποτελώντας ιδανικό υπόστρωμα για τον σοβά που θα ακολουθήσει.",
		category: "Κόλλα Θερμομονωτικών Πλακών",
		amount: "25kg",
		image: "https://i.imgur.com/CciVMcJ.png",
	},
	{
		name: "Multifill Smalto",
		description: "Το Multifill Smalto είναι υδαταπωθητικός, έγχρωμος, ρητινούχος, τσιμεντοειδής αρμόστοκος. Χαρακτηρίζεται από μεγάλη υδαταπωθητικότητα, υψηλές μηχανικές αντοχές και χρωματική σταθερότητα. Επιπλέον, περιέχει ειδικά βακτηριοστατικά συστατικά, τα οποία δεν επιτρέπουν την ανάπτυξη βακτηριδίων στον αρμό. Δίνει λεία και γυαλιστερή τελική επιφάνεια. Κατάλληλος για πλάτος αρμών από 1 έως 8 mm. Διαθέσιμος σε 34 αποχρώσεις!",
		category: "Αρμόστοκος",
		amount: "4kg",
		image: "https://i.imgur.com/532LpWo.png",
	},
	/*==============
	   Cosmochrome
	================*/
	{
		name: "Wood Adhesive C-65",
		description: "Η WOOD C-65 είναι ξυλόκολλα κρυσταλλιζέ, ταχείας πήξης, ιδανική για χρήση στην επιπλοποιία και τις ξυλουργικές εργασίες. Είναι διάφανη, παχύρευστη και εφαρμόζεται σε εσωτερικές ξύλινες επιφάνειες, κάθετες ή οριζόντιες, χωρίς να λεκιάζει ή να προκαλεί στίγματα. Στεγνώνει γρήγορα, έχει ισχυρή συγκολλητική δύναμη και διακρίνεται για τις αντοχές της στους κραδασμούς, τα κτυπήματα, την παλαίωση και τον εφελκυσμό.",
		category: "Κόλλα Ξύλου",
		amount: "200gr, 500gr, 1kg",
		image: "https://i.imgur.com/iGI2owH.png",
	},
	/*==========
	   Evochem
	============*/
	{
		name: "Tempo",
		description: "Η TEMPO είναι υδατοδιαλυτή λευκή κόλλα ξύλων, βάσεως PVAC κατάλληλη για συγκολλήσεις υψηλών απαιτήσεων. Προσφέρει γρήγορη και δυνατή συγκόλληση με πολύ μεγάλη αντοχή στη θερμοκρασία και στην υγρασία. Γίνεται διαφανής μετά το στέγνωμα (κρυσταλλιζέ). Κατάλληλη για εφαρμογές εσωτερικής χρήσης και εξωτερικές μη βρεχόμενες κατασκευές. Έχει πολύ ισχυρή συγκόλληση, αντοχή στην υγρασία και στην θερμοκρασία.",
		category: "Κόλλα Ξύλου",
		amount: "200gr, 750gr, 1kg",
		image: "https://i.imgur.com/R114lED.png",
	},
	{
		name: "Tempo WB 500",
		description: "Η TEMPO WB 500 είναι υδατοδιαλυτή λευκή κόλλα ξύλων, βάσεως PVAC κατάλληλη για συγκολλήσεις υψηλών απαιτήσεων. Προσφέρει γρήγορη και δυνατή συγκόλληση, με εξαιρετική αντοχή στην υγρασία. Είναι ιδιαίτερα κατάλληλη για εξωτερικές χρήσεις. Γίνεται διαφανής μετά το στέγνωμα (κρυσταλλιζέ). Υπερκαλύπτει τις προδιαγραφές EN 203/D3. Έχει πολύ ισχυρή συγκόλληση, εξαιρετική αντοχή στην υγρασία προδιαγραφών D3 και είναι κατάλληλη για εξωτερική χρήση",
		category: "Κόλλα Ξύλου",
		amount: "1kg, 5kg",
		image: "https://i.imgur.com/eLNpOCP.png",
	},
	{
		name: "Contact Adhesive C113",
		description: "Η CONTACT C113 είναι ισχυρή βενζινόκολλα γενικής χρήσης με βάση το συνθετικό καουτσούκ, συνθετικές ρητίνες και διαλύτες. Έχει εξαιρετική αντοχή στη θερμοκρασία, στην υγρασία, στα έλαια και στα οξέα. Έχει εξαιρετική συγκόλληση στις περισσότερες επιφάνειες, γρήγορη ταχύτητα συγκόλλησης και ικανοποιητικό ανοικτό χρόνο.",
		category: "Βενζινόκολλα",
		amount: "200ml, 500ml, 1L",
		image: "https://i.imgur.com/aPun4mg.png",
	},
	{
		name: "Bondflex",
		description: "Η BONDFLEX 390FC είναι μαστίχη πολυουρεθάνης (λαστιχόκολλα), ενός συστατικού, υψηλών προδιαγραφών κατάλληλη για συγκόλληση, στεγάνωση και μόνωση σε οικοδομικές, ναυπηγικές και γενικές κατασκευές. Έχει εξαιρετική δύναμη συγκόλλησης και διατηρεί την ελαστικότητα της.",
		category: "Σφραγιστικό Σαλάμι Πολυουρεθάνης",
		amount: "600ml",
		image: "https://i.imgur.com/W894SIF.png",
	},
	{
		name: "Slip Oil",
		description: "Λιπαντικό ρευστό λάδι γενικής χρήσης κατάλληλο για προστασία και λίπανση σε κινούμενα μέρη. Προσφέρει προστασία από την σκουριά και την υγρασία σε κάθε μεταλλική επιφάνεια. Το ειδικό του στόμιο επιτρέπει την εφαρμογή του λιπαντικού σταγόνα – σταγόνα ακριβώς στο σημείο όπου χρειάζεται. Έχει εξαιρετική λιπαντική ικανότητα και εξαιρετική διείσδυση, χωρίς να περιέχει διαλύτες.",
		category: "Λιπαντικό Αντισκωριακό",
		amount: "80ml",
		image: "https://i.imgur.com/swJadvG.png",
	},
	{
		name: "White Lithium Grease",
		description: "Το MINOS WHITE LITHIUM GREASE είναι υψηλής ποιότητας λευκό γράσο λιθίου που χρησιμοποιείται για προστασία και λίπανση. Είναι ιδανικό για λίπανση σε κινούμενα μεταλλικά ή πλαστικά μηχανικά μέρη. Είναι υδροαπωθητικό και προσφέρει προστασία σε όλες τις καιρικές συνθήκες. Έχει υψηλή αντοχή σε θερμοκρασίες 10ºC -150ºC.Είναι επίσης κατάλληλο για εφαρμογές όπου απαιτείται γράσο ανοιχτού χρώματος για οπτικούς λόγους. Έχει εξαιρετική μηχανική σταθερότητα, προλαμβάνει τη φθορά από την τριβή και αντέχει στις καιρικές συνθήκες.",
		category: "Γράσο Λιθίου",
		amount: "80ml",
		image: "https://i.imgur.com/mkjlDI1.png",
	},
	/*========
	   Ceys
	==========*/
	{
		name: "Total Tech Διαφανή & Λευκή",
		description: "Η Ceys Total Tech είναι μια σφραγιστική κόλλα που κολλάει, σφραγίζει και επιδιορθώνει οποιοδήποτε υλικό σε εσωτερικούς και εξωτερικούς χώρους, ακόμη και κάτω από το νερό, με άμεσο αποτέλεσμα και αντοχή ακόμα και στις πιο αντίξοες συνθήκες.",
		category: "Σφραγιστική Κόλλα",
		amount: "290ml",
		image: "https://i.imgur.com/tcS9j0J.png",
	},
	{
		name: "Plásticos",
		description: "Κόλλα για τη συγκόλληση σκληρών και άκαμπτων πλαστικών των 30ml της εταιρίας Ceys. Έχει γεμιστηκές ιδιότητες και είναι ανθεκτική στο νερό.",
		category: "Σφραγιστική Κόλλα",
		amount: "30ml",
		image: "https://i.imgur.com/YeEzcDT.png",
	},
	{
		name: "Κόλλα Μικροεπισκευών Διαφανή Gel",
		description: "Κόλλα μικροεπισκευών διαφανή σε μορφή gel των 20gr της εταιρίας Ceys. Βασισμένη στο MS POLYMER. Κατάλληλη για κάθε τύπου υλικό. Είναι πολύ ισχυρή 300kg / 10cm². Σφραγίζει κάθε τύπου ένωσης, είναι εξαιρετικά ελαστική.",
		category: "Κόλλα Μικροεπισκευών",
		amount: "20g",
		image: "https://i.imgur.com/rOIrilq.png",
	},
	{
		name: "Κατασκευαστική Κόλλα Total Grip",
		description: "Κόλλα συναρμολόγησης υψηλής αντοχής. Κατάλληλη για τη στερέωση όλων των τύπων υλικών σε διάφορα υποστρώματα. Ιδανική για εσωτερικούς και εξωτερικούς χώρους.",
		category: "Κόλλα Υψηλής Αντοχής",
		amount: "100ml",
		image: "https://i.imgur.com/LQ81v5n.png",
	},
	/*============
	   Elastotet
	==============*/
	{
		name: "Super White 10",
		description: "Η Super White 10 είναι όξινη σιλικόνη υψηλής ποιότητας με ενσωματωμένη τεχνολογία αντιβακτηριδιακής προστασίας FUNGIBAN®. Η αντιβακτηριδιακή προστασία FUNGIBAN® προσφέρει ενεργή πρόληψη κατά της ανάπτυξης μυκήτων, που λεκιάζουν την επιφάνεια της σιλικόνης, σε περιοχές εκτεθειμένες σε υγρασία.",
		category: "Σφραγιστική Κόλλα",
		amount: "280ml",
		image: "https://i.imgur.com/ZOg547Q.png",
	},
	{
		name: "S-400",
		description: "Η S-400 είναι ανθεκτική στην εμφάνιση μούχλας ακετοξική σιλικόνη για γενική χρήση. Έχει πολύ καλή πρόσφυση, χωρίς αστάρι, σε πληθώρα υποστρωμάτων. Παρουσιάζει υψηλή ελαστικότητα καθώς και υψηλή αντοχή στις καιρικές συνθήκες.",
		category: "Αντιμυκητιακή Σιλικόνη",
		amount: "Σωληνάρια 80ml, Φύσιγγες 280ml",
		image: "https://i.imgur.com/7TNkBgZ.png",
	},
	{
		name: "Elastoseal PU 50 FC",
		description: "Ελαστομερές σφραγιστικό και συγκολλητικό υλικό πολυουρεθανικής βάσης, με υψηλή μηχανική αντοχή και μεγάλη ταχύτητα πολυμερισμού. Είναι κατάλληλο για ελαστικές συγκολλήσεις και για αρμούς μικρής - μέτριας κινητικότητας. Βάφεται με τα συνήθη οικοδομικά χρώματα.",
		category: "Σφραγιστική Πολυουρεθάνη",
		amount: "Σωληνάρια 80ml, Φύσιγγες 280ml",
		image: "https://i.imgur.com/Ubqd50e.png",
	},
	{
		name: "Elastoseal PU 25 LM Μαστίχη Πολυουρεθάνης [Λευκή]",
		description: "Σφραγιστικό σαλάμι πολυουρεθάνης με ισχυρή πρόσφυση, εφαρμογή και σε υγρές επιφάνειες, δεν απαιτεί αστάρι για την εφαρμογή, και βάφεται μετά τη σκληρυνση.",
		category: "Σφραγιστικό Σαλάμι Πολυουρεθάνης",
		amount: "600ml",
		image: "https://i.imgur.com/p6SBToA.png",
	},
	{
		name: "Lastofoam Adapter",
		description: "Αφρός πολυουρεθάνης χειρός για πλήρωση κενών, ρωγμών και οπών. Έχει εξαιρετική πρόσφυση σε όλα τα υποστρώματα εκτός από πολυαιθυλένιο, πολυπροπυλένιο και τεφλόν. Είναι ανθεκτικός στο νερό και τη γήρανση αλλά ευαίσθητος στην ακτινοβολία UV. Προσφέρει εξαιρετική μόνωση. Ελεύθερη διόγκωση μέχρι 40 λίτρα άνα φιάλη. Μετά την σκλήρυνση δεν συρρικνώνεται.",
		category: "Αφρός Πολυουρεθάνης",
		amount: "750ml",
		image: "https://i.imgur.com/lOWGTvY.png",
	},
	{
		name: "Lastofoam Low Expansion",
		description: "Αφρός πολυουρεθάνης για πλήρωση κένων, ρωγμών και οπών. Παρουσιάζει χαμηλή δευτερογενή διόγκωση, επιτρέποντας την εύκολη τοποθέτηση πορτών και παραθύρων, χωρίς να προκαλεί παραμόρφωση της κάσας. Έχει εξαιρετική πρόσφυση σε όλα τα υποστρώματα εκτός από πολυαιθυλένιο, πολυπροπυλένιο και τεφλόν. Είναι ανθεκτικός στο νερό και τη γήρανση αλλά ευαίσθητος στην ακτινοβολία UV. Προσφέρει εξαιρετική μόνωση. Ελεύθερη διόγκωση μέχρι 45 λίτρα άνα φιάλή. Μετά την σκλήρυνση δεν συρρικνώνεται.",
		category: "Αφρός Πολυουρεθάνης",
		amount: "750ml",
		image: "https://i.imgur.com/MAd7MA8.png",
	},
	{
		name: "Montage Stick",
		description: "Το Montage Stick είναι κόλλα μοντάζ ακρυλικής βάσης (νερού), χωρίς διαλύτες. Κολλά άριστα σε όλα τα υποστρώματα όπως ξύλο, πλαστικά, μάρμαρο, πλακάκια, γύψο, σοβά. Είναι ιδανική για κάθετες επιφάνειες. Προσφέρει ελαστική συγκόλληση καταργώντας τη μηχανική στερέωση, και βάφεται.",
		category: "Μονταζόκολλα",
		amount: "280ml",
		image: "https://i.imgur.com/F32J7Xe.png",
	},
	{
		name: "S-Hi Temp",
		description: "Η S-Hi Temp είναι επαγγελματική σιλικόνη υψηλών θερμοκρασιών από –40°C έως +260°C, ενώ για περιορισμένο χρονικό διάστημα αντέχει έως και τους +300°C. Δεν σκάει και δεν συρρικνώνεται. Αντέχει σε λάδια, γράσο, νερό, αντιψυκτικό και βαλβολίνες. Μετά τον πολυμερισμό παραμένει ελαστική.",
		category: "Σιλικόνη Υψηλών Θερμοκρασιών",
		amount: "Σωληνάρια 80 ml, Φύσιγγα 280 ml",
		image: "https://i.imgur.com/3IinIxM.png",
	},
	{
		name: "Fireseal W",
		description: "Το Fireseal W είναι σφραγιστικό ενός συστατικού, κατάλληλο για αρμούς που βρίσκονται εκτεθειμένοι σε πολύ υψηλές θερμοκρασίες (μέχρι 1200°C). Το προϊόν στεγνώνει με φυσική εξάτμιση.",
		category: "Σφραγιστικό Υψηλών Θερμοκρασιών",
		amount: "280ml",
		image: "https://i.imgur.com/Y98ZmR2.png",
	},
	{
		name: "S-100",
		description: "Η S-100 είναι ακετοξική σιλικόνη υψηλής μηχανικής αντοχής και εξαιρετικής συγκολλητικότητας σε μη πορώδη υποστρώματα. Επιδεικνύει εξαιρετική αντοχή στη γήρανση, εφόσον διατηρεί τις ιδιότητες της για πάνω από 15 έτη, ακόμη και σε δύσκολες εξωτερικές συνθήκες, όπως έκθεση σε ηλιακή ακτινοβολία, βροχή και παγετό.",
		category: "Σιλικόνη Υψηλής Αντοχής",
		amount: "280ml",
		image: "https://i.imgur.com/BtJCeet.png",
	},
	{
		name: "Montage-S",
		description: "Το Montage-S είναι κόλλα μονταρίσματος ενός συστατικού με βάση το συνθετικό καουτσούκ σε διασπορά διαλύτου.",
		category: "Μονταζόκολλα",
		amount: "Σωληνάρια 80 ml",
		image: "https://i.imgur.com/JRgjPc2.png",
	},
	{
		name: "Windshield PU 230",
		description: "Ισχυρό συγκολλητικό ενός συστατικού με βάση την πολυουρεθάνη, κατάλληλο για συγκολλήσεις παρμπρίζ.",
		category: "Συγκολλητικό Παρμπρίζ",
		amount: "310ml",
		image: "https://i.imgur.com/YovYqak.png",
	},
	/*==========
	   Benman
	============*/
	{
		name: "Benman A335",
		description: "Εφαρμόζεται σε Ξυλεία συναρμολόγησης, PVC, σίδερο και αλουμίνιο. Αρμούς σε πέτρα, ξύλο, σκυρόδεμα, σοβά, τούβλα κ.λπ. Σφράγιση κουφώματών παραθύρου και πόρτας σε τοίχο. Ενός συστατικού με πολύ εύκολη εφαρμογή. Σχηματίζει ένα μόνιμα υδατοαπωθητικό στρώμα μετά τη σκλήρυνση. Ανθεκτικός στις καιρικές συνθήκες, δεν επηρεάζει την επιφάνεια εφαρμογής, βάφεται.  Παραμένει εύκαμπτος για μεγάλο χρονικό διάστημα μετά τη σκλήρυνση. Ανθεκτικός στο νερό, τον αέρα και την υγρασία σε κουφώματα και παράθυρα από αλουμίνιο, ξύλο και PVC.",
		category: "Ακρυλικός Αρμόστοκος",
		amount: "280ml",
		image: "https://i.imgur.com/D23My3n.png",
	},
	{
		name: "Benman Αρμόκολλα Πολυουρεθάνης PU 40FC [Γκρί]",
		description: "Σφραγιστικό πολυουρεθάνης υψηλής αντοχής που έχει εξαιρετική πρόσφυση σε όλα τα τυπικά δομικά υλικά, λαμαρίνες, αλουμίνιο, ανοξείδωτο χάλυβα, μόλυβδο, χαλκό, κεραμικό, γυαλί, ξύλο και διάφορα πλαστικά υλικά.",
		category: "Σφραγιστικό Σαλάμι Πολυουρεθάνης",
		amount: "600ml",
		image: "https://i.imgur.com/dtMGIga.png",
	},
	{
		name: "Benman PU 20",
		description: "Ένας αφρός πολυουρεθάνης πολλαπλών χρήσεων με πρόσφυση σε τυπικά κατασκευαστικά υλικά, όπως: τούβλα, σκυρόδεμα, γύψο, ξύλο, μέταλλα, φελιζόλ, σκληρό PVC και άκαμπτο PUR. Έχει εξαιρετική ικανότητα πρόσφυσης και πλήρωσης με υψηλή θερμομονωτική και ηχομονωτική ικανότητα. Είναι ικανός για την πλήρωση μεγάλων κενών εξαιτίας του υψηλού βαθμού διαστολής. Έχει οικονομία στην κατανάλωση χάρη στην ακριβή εφαρμογή, και υψηλή απόδοση έως 16 λίτρα ανάλογα με τις συνθήκες θερμοκρασίας και υγρασίας. Επίσης είναι ανθεκτικός στη μούχλα, είναι αδιάβροχος και βάφεται.",
		category: "Αφρός Πολυουρεθάνης",
		amount: "300ml",
		image: "https://i.imgur.com/MtRmTlQ.png",
	},
	/*=========
	   Pattex
	===========*/
	{
		name: "Pattex Repair Extreme",
		description: "Κόλλα γενικής χρήσης Pattex Repair Exteme 8gr. Ελαστική, για γέμισμα διάκενων. Είναι ανθεκτική  σε θερμοκρασίες έως 120 °C.",
		category: "Κόλλα Γενικής Χρήσης",
		amount: "8g",
		image: "https://i.imgur.com/eZg7BOQ.png",
	},
	{
		name: "Κόλλα Click & Fix",
		description: "Διατίθεται σε απλικατέρ για εύκολη εφαρμογή με μετρητή για τις υπολειπόμενες δόσεις πάνω στην λαβή της συσκευής. Πολύ εύκολο στην χρήση, καθώς χρησιμοποιείται με το ένα χέρι. Ανθεκτική στην υπεριώδη ακτινοβολία, στις υψηλές θερμοκρασίας έως και 80C° και στο νερό. Με μια δόση μπορεί να συγκρατήσει έως 1kg άμεσα και 20 kg μετά από 24 ώρες. Ιδανική για τα περισσότερα υλικά όπως, τούβλο, ξύλο, κεραμικά, γυαλί, MDF, πέτρα κ.α. Κατάλληλο για χρήση σε εσωτερικούς ή εξωτερικούς χώρους.",
		category: "Μονταζόκολλα",
		amount: "30gr",
		image: "https://i.imgur.com/U14Sbro.png",
	},
	{
		name: "Pattex Power Epoxy Universal",
		description: "Η Pattex Power Epoxy Universal 5 Minutes σε σύριγγα προσφέρει ισχυρό κράτημα για όλα σχεδόν τα υλικά και τις επισκευές. Στεγνώνει πολύ γρήγορα, γίνεται διάφανη, δεν απλώνει και δεν συρρικνώνεται. Ανθεκτική στο νερό, το λάδι και τους κοινούς διαλύτες, η Pattex Power Epoxy Instant Mix είναι κατάλληλη για εξωτερική και εσωτερική χρήση, ενώ μετά την εφαρμογή μπορείτε να βάψετε, να τρίψετε, να γυαλίσετε, ακόμη και να τρυπήσετε τις επιφάνειες! Η Pattex Power Epoxy Universal 5 Minutes σε σύριγγα διατίθεται και σε μίνι σύριγγα!",
		category: "Κόλλα Δύο Συστατικών",
		amount: "25ml",
		image: "https://i.imgur.com/sVPVqvv.png",
	},
	{
		name: "Pattex Power Epoxy Metal",
		description: "Η Pattex Power Epoxy Metal σε σωληνάριο προσφέρει πολύ ισχυρό κράτημα για όλα σχεδόν τα υλικά. Εκτός του ότι γίνεται διάφανη όταν στεγνώνει, δεν απλώνει ούτε συρρικνώνεται. Ανθεκτική στο νερό, το λάδι και τους κοινούς διαλύτες, η Pattex Power Epoxy Metal σε σωληνάριο είναι κατάλληλη για εξωτερική και εσωτερική χρήση, ενώ μετά την εφαρμογή μπορείτε να βάψετε, να τρίψετε, να γυαλίσετε, ακόμη και να τρυπήσετε τις επιφάνειες! Η Power Epoxy Metal σε σωληνάριο διατίθεται σε έκδοση που στεγνώνει σε 5 λεπτά για γρήγορο και ισχυρό κράτημα, και σε έκδοση που στεγνώνει σε 60 λεπτά για να διορθώσετε και την παραμικρή ατέλεια.",
		category: "Κόλλα Δύο Συστατικών",
		amount: "22ml",
		image: "https://i.imgur.com/KaKauS4.png",
	},
	{
		name: "Pattex Renew",
		description: "Έτοιμη προς χρήση σιλικόνη Pattex Renew ενός συστατικού με βάση το νερό, κατάλληλη για επαναβαφή και ανακαίνιση όλων των εφαρμογών υγιεινής με εξαιρετική αντοχή στη μούχλα. Το πακέτο έχει επανακυκλοφορήσει με τεχνικές καινοτομίες που βελτιώνουν την εμπειρία του χρήστη και κάνουν την εφαρμογή του προϊόντος πολύ πιο απλή και ευκολότερη. Το προϊόν εφαρμόζεται ως επίστρωση πάνω από γωνιακά στεγανοποιητικά για να βελτιώσει την εμφάνισή τους (για να καλύψει σημάδια μούχλας και ρωγμές σε υπάρχουσες σφραγίδες κ.λπ.). Λειτουργεί σε θερμοκρασίες περιβάλλοντος, σχηματίζοντας μια επίστρωση σιλικόνης που διαρκεί.",
		category: "Σιλικόνη",
		amount: "80ml",
		image: "https://i.imgur.com/uvFOqRn.png",
	},
	{
		name: "SP101 [Λευκή-Διάφανη-Γκρί-Καφέ]",
		description: "Ιδανικό για τη σφράγιση οροφών, φεγγιτών, υδρορροών, σκέπαστρων, δομικών στοιχείων, αρμών στους οποίους επιτρέπεται η διέλευση και αρμών γενικά με μετακίνηση έως+/- 25%. Ελαστική κόλληση πάνελ, επενδύσεων γενικά, σοβατεπί και πλακών. Το Flextec είναι μια αποκλειστική τεχνολογία της Henkel η οποία προσφέρει κορυφαία ποιότητα σφράγισης και κόλλησης για κάθε τύπο εφαρμογών, υλικών και περιπτώσεων συγκόλλησης.",
		category: "Σιλικόνη Ξύλου",
		amount: "280ml",
		image: "https://i.imgur.com/IzA8c6H.png",
	},
	{
		name: "Pattex Renew",
		description: "Ουδέτερη, 100% σιλικόνη με βάση το νερό. Άοσμη, με ειδική σπάτουλα για τέλειο φινίρισμα. Εξαιρετική πρόσφυση στη παλιά σιλικόνη- δεν χρειάζεται να αφαιρεθεί. Χρήση σε εσωτερικούς και εξωτερικούς χώρους. Τα υπολείμματα καθαρίζονται εύκολα με νερό. Αντοχή σε θερμοκρασία από –50°C έως +120°C. Τριπλό σύστημα κατά της μούχλας.",
		category: "Σιλικόνη",
		amount: "280ml",
		image: "https://i.imgur.com/gendkmq.png",
	},
	{
		name: "SP101 Sanitary",
		description: "Ιδανικό για τη σφράγιση οροφών, φεγγιτών, υδρορροών, σκέπαστρων, δομικών στοιχείων, αρμών στους οποίους επιτρέπεται η διέλευση και αρμών γενικά με μετακίνηση έως+/- 25%. Ελαστική κόλληση πάνελ, επενδύσεων γενικά, σοβατεπί και πλακών. Το Flextec είναι μια αποκλειστική τεχνολογία της Henkel η οποία προσφέρει κορυφαία ποιότητα ΣΦΡΑΓΙΣΗΣ και ΚΟΛΛΗΣΗΣ για κάθε τύπο εφαρμογών, υλικών και περιπτώσεων συγκόλλησης. Εξαιρετική πρόσφυση σε διαφορετικά υπόβαθρα, χωρίς να απαιτείται αστάρωμα. Μυκητοκτόνος δράση. Αποτρέπει την ανάπτυξη μούχλας.",
		category: "Υπερσφραγιστικό - Αντιμουχλικό",
		amount: "400g",
		image: "https://i.imgur.com/MWZu9GB.png",
	},
	{
		name: "Pattex Mille Chiodi",
		description: "Ακρυλική μονταζόκολλα PATTEX για όλα τα υλικά, μέταλλο, ξύλο, PVC, πέτρα, κεραμικά. Ιδανική για ισχυρή στερέωση / συγκόλληση σε εσωτερικούς τοίχους, κόλληση διαφορετικών υλικών, επισκευή, μεγάλες επιφάνειες, μικροεπισκευές, γέμισμα χαραμάδων, συναρμολόγηση. Ανθεκτική σε εξωτερικούς τοίχους, ταχεία κόλληση, επανασύνθεση των τμημάτων που λείπουν, καλύπτει ρωγμές και εξομαλύνει ανομοιομορφίες υλικών. Ενδείκνυται για εσωτερική χρήση και αντέχει σε θερμοκρασίες έως 80°C.",
		category: "Μονταζόκολλα",
		amount: "450g",
		image: "https://i.imgur.com/enjSElr.png",
	},
	/*========
	   Other
	==========*/
	{
		name: "Neostick 588",
		description: "Η κόλλα Neostick® 588 είναι μια παχύρευστη βενζινόκολλα υψηλών προδιαγραφών, με μεγάλη αντοχή στις υψηλές θερμοκρασίες (έως 80 °C) και στην υγρασία. Ιδανική εφαρμογή σε συγκολλήσεις αμαξωμάτων (“ουρανοί”, ταπετσαρίες), συγκολλήσεις επίπλων (φύλλα φορμάικας σε επιφάνειες από ξύλο, μέταλλο, μοριοσανίδα, mdf), κάθετες συγκολλήσεις μοκετών και επενδύσεις σκαφών.",
		category: "Βενζινόκολλα",
		amount: "410gr, 860gr",
		image: "https://i.imgur.com/N3cRbK5.png",
	},
	{
		name: "Atlacoll Atlastick No330",
		description: "Βενζινόκολλα υψηλών προδιαγραφών για ισχυρές συγκολλήσεις με μεγάλο ανοιχτό χρόνο παραμονής. Ιδανική για δέρμα, καουτσούκ, μέταλλο, ξύλο, πλαστικό, πέτρα, φελλό κ.α.",
		category: "Βενζινόκολλα",
		amount: "200ml, 440ml",
		image: "https://i.imgur.com/vQefLCR.png",
	},
	{
		name: "Sikasil",
		description: "Το Sikasil® E είναι ελαστικό σφραγιστικό 1-συστατικού για σφράγιση υαλοστασίων. Έχει μακροπρόθεσμη αντοχή σε μύκητες και άλγη, καλή αντοχή σε υπεριώδη ακτινοβολία και καιρικές επιδράσεις και πολύ καλή πρόσφυση στα περισσότερα μη πορώδη υποστρώματα.",
		category: "Σιλικόνη",
		amount: "300ml",
		image: "https://i.imgur.com/Vc0pU3w.png",
	},
	{
		name: "Σιλικόνη Γενικής Χρήσης",
		description: "Για κουφώµατα και τζάµια και γενικά στεγανοποιήσεις σε µη  πορώδεις επιφάνειες. Σιλικονούχο οξεικό στεγανωτικό ενός συστατικού, για γενική χρήση σε  µη πορώδη  υλικά:  γυαλί,  κεραµικό, αλουµίνιο, βαµµένο µέταλλο και ξύλο και µερικά πλαστικά (εξαιρούνται τα PE, PP, PTFE). Αποφύγετε την επαφή µε τα µάτια και το δέρµα. Χρησιµοποιείστε µόνο σε καλά αεριζόµενα µέρη. Κρατείστε το προϊόν µακριά από παιδιά.",
		category: "Σιλικόνη",
		amount: "280ml",
		image: "https://i.imgur.com/X2Dq8Pp.png",
	},
	{
		name: "Κόλλα Gel Super Attak",
		description: "Χρησιμοποίησε την κόλλα στιγμής Super Attack σε μορφή gel της Loctite και μείνε ήσυχος ότι τα υλικά σου, όχι μόνο θα παραμείνουν κολλημένα για πάντα, αλλά θα διατηρήσουν και την ελαστικότητά τους!",
		category: "Κόλλα Στιγμής",
		amount: "3g",
		image: "https://i.imgur.com/Yu2Y82q.png",
	},
	{
		name: "Κόλλα Gel Στιγμής Stick 2 Superglue",
		description: "Κόλλα στιγμής από την Everbuild σε μορφή gel για εύκολη εφαρμογή. Έχει ισχυρή δράση σε άμεσο χρονικό διάστημα. Για την εφαρμογή της, οι επιφάνειες πρέπει να είναι καθαρές και στεγνές. Απλώνεται στην μία μόνο επιφάνεια και στη συνέχεια εφαρμόζουμε πίεση για 10 έως 30 δευτερόλεπτα μέχρι να στεγνώσει. Είναι κατάλληλη για μεγάλο εύρος εφαρμογών. Κολλάει ξύλο, υλικά με βάση το ξύλο, πλαστικό, μέταλλο, γυαλί, πορσελάνη, κεραμικό, δέρμα, καουτσούκ, τσόχα, φελλό, υφάσματα, χαρτόνι, χαρτί και πολλά άλλα.",
		category: "Κόλλα Στιγμής",
		amount: "3g",
		image: "https://i.imgur.com/D3McAa9.png",
	},
	{
		name: "Κόλλα Στιγμής 60sec",
		description: "Κυανοακρυλική παχύρευστη υπερ- κόλλα στιγμής, για άμεσες εφαρμογές μέσα σε 60 δευτερόλεπτα. Με μεγάλη αντοχή, ακρίβεια στις συκολλήσεις, χωρίς να στάζει στις κάθετες κολλήσεις. Διαθέτει την ικανοτήτα σε περίπτωση λάθους να επανατοποθετηθεί. Κολλάει εξαιρετικά πορώδεις επιφάνειες άμεσα και γρήγορα. Μπορεί να συγκολλήσει μεγάλες επιφάνειες μέσα σε πολύ λίγο χρόνο. Ιδανική λύση για επιδιορθώσεις μέσα στο σπίτι. Κατάλληλη για παντός είδους υλικά.",
		category: "Κόλλα Στιγμής",
		amount: "20g",
		image: "https://i.imgur.com/ll1uV6Y.png",
	},
	{
		name: "Κόλλα PVC",
		description: "Κόλλα βαρέως τύπου, για χρήση σε σωληνώσεις και προσαρμογές PVC (πολυβινυλιοχλωριδίου). H κόλλα DB PVC GLUE είναι κατάλληλη για ισχυρή συγκόλληση και σφράγιση σωληνώσεων αποχέτευσης. Διαθέτει μεγάλη αντοχή στο ζεστό και κρύο νερό, τις πιέσεις και τα χημικά. Είναι ιδανική για δίκτυα από σωλήνες PVC σε αποχετεύσεις, μπάνια, νιπτήρες, υδρορροές κ.λπ.",
		category: "Κόλλα PVC",
		amount: "125ml",
		image: "https://i.imgur.com/aUIMM1G.png",
	},
	{
		name: "Super Glue Κόλλα Στιγμής",
		description: "Διάφανη κόλλα στιγμής που πραγματοποιεί πολύ δυνατή κόλληση. Συγκολλά σε δευτερόλεπτα και είναι ελαστική, ιδανική για τα περισσότερα υλικά όπως είναι το μέταλλο, το ξύλο, το γυαλί, η πορσελάνη, το χαρτόνι, το πλαστικό κ.α.",
		category: "Κόλλα Στιγμής",
		amount: "25g",
		image: "https://i.imgur.com/vZVmMeq.png",
	},
	{
		name: "Super Glue Bison 3gr+3gr",
		description: "Κόλλα στιγμής Υγρή Bison σε συσκευασία 3gr με άλλη 1 ίδια κόλλα δώρο για γερό κόλλημα σε μέταλλα, πλαστικά κεραμικά πορσελάνες, ξύλο, λάστιχο, δέρμα, βινύλιο, οικοδομικά υλικά και για οποιαδήποτε άγρια ή λεία επιφάνεια. Η κόλλα είναι Υγρή και ευκολόρευστη και αρκούν 10 εως 60 δευτερόλεπτα πίεσης στην πρώτη συγκόλληση. Μετά την χρήση καθαρίστε αμέσως το ακροστόμιο με ένα πανί. Στην συσκευασία αυτή υπάρχει δώρο άλλη μια κόλλα 3gr κόλλα στιγμής υγρή για κόλλημα σε λείες επιφάνειες.",
		category: "Κόλλα Στιγμής",
		amount: "3g",
		image: "https://i.imgur.com/9xjOWof.png",
	},
	{
		name: "Everbuild Rapid Syringe",
		description: "Εποξική διαφανής κόλλα μετάλλων 2 συστατικών. Έχει εύκολη ανάμιξη, μπορεί να τρυπηθεί, να τριφτεί, να επεξεργαστεί και να βαφτεί μόλις ωριμάσει πλήρως. Κατάλληλη για βιομηχανική και οικιακή χρήση.",
		category: "Κόλλα Δύο Συστατικών",
		amount: "24ml",
		image: "https://i.imgur.com/2D9sVl1.png",
	},
	{
		name: "Boro Metal",
		description: "Εποξική Κόλλα Μετάλλων 2 Συστατικών, με αντοχή έως 260ºC. Γεμίζει και κολλάει σε 3 λεπτά χαλκό, αλουμίνιο, μπρούτζο, ατσάλι, χρυσό, ασήμι, τσιμέντο, πέτρα, σκληρά πλαστικά.",
		category: "Κόλλα Μετάλλων",
		amount: "28g",
		image: "https://i.imgur.com/FGVl96S.png",
	},
]
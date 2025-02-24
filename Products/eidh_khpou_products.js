const Products = [
	{
		name: "Silver Flex 1/2\"",
		description: "Εύκαμπτο λάστιχο που είναι κατάλληλο για πότισμα κήπου και μεταφορά νερού. Έχει ενισχυμένη σύνθεση που το καθιστά ανθεκτικό στην κακοκαιρία και στις καταπονήσεις. Έχει διάμετρο 1/2\" με αντοχή σε πίεση έως 50bar που μπορεί να καλύψει τις ανάγκες επαγγελματικής και ερασιτεχνικής χρήσης.",
		category: "Λάστιχο Ποτίσματος",
		amount: "",
		image: "https://s6.imgcdn.dev/YYcxLK.webp",
	},
	{
		name: "Hobby Line 1/2\"",
		description: "Οικονομικό λάστιχο ποτίσματος.",
		category: "Λάστιχο Ποτίσματος",
		amount: "",
		image: "https://s6.imgcdn.dev/YYcOUO.webp",
	},
	{
		name: "TechnoFlex 1/2\"",
		description: "",
		category: "Λάστιχο Ποτίσματος",
		amount: "",
		image: "https://s6.imgcdn.dev/YYcVsv.webp",
	},
	{
		name: "TetraFlex 1/2\"",
		description: "Λάστιχο ποτίσματος TETRA FLEX της BENMAN. Αντοχή σε πίεση έως 40bar Αντοχή σε θερμοκρασία από -20 έως +65°C Ελαφρύ και εύχρηστο Σύμφωνο με τον κανονισμό REACH Κατασκευάζεται από μη τοξικό πλαστικό με διχτυωτή υφασμάτινη επένδυση και διαθέτει ενισχυτικές ραβδώσεις από πολυεστέρα για αντοχή στις ακτίνες UV. Η ενδιάμεση στρώση από μαλακό PVC το καθιστά εύκαμπτο και ανθεκτικό στις πιέσεις. Δεν τσακίζει και είναι ιδανικό για πότισμα μικρών και μεγάλων κήπων, χώρων πρασίνου, καρποφόρων δέντρων, φυτών, καθώς και για γενικές εργασίες καθαρισμού που επιβάλουν χρήση νερού. Οικολογικό λάστιχο νερού τεσσάρων στρώσεων Ιταλικής κατασκευής.",
		category: "Λάστιχο Ποτίσματος",
		amount: "",
		image: "https://s6.imgcdn.dev/YYc9og.webp",
	},
	{
		name: "GrecoFlex 1/2\"",
		description: "Λάστιχο Ποτίσματος GRECO FLEX 1/2\". Αντοχής, εύκαμπτος και σταθερός σωλήνας άρδευσης που δεν τσακίζει.",
		category: "Λάστιχο Ποτίσματος",
		amount: "",
		image: "https://s6.imgcdn.dev/YYcZVn.webp",
	},
	{
		name: "Κουβάς Σφουγγαρίσματος",
		description: "",
		category: "Κουβάς Σφουγγαρίσματος",
		amount: "",
		image: "https://s6.imgcdn.dev/YYcf2N.webp",
	},
	{
		name: "Λεκάνη Στρογγυλή",
		description: "Στρογγυλή λεκάνη χωρητικότητας 3.2 λίτρων, κατάλληλη για να πλένετε ρούχα, να βάζετε την μπουγάδα σας ή ακόμα και για να κάνετε ποδόλουτρο. Λιτή και πρακτική, δίνει λύσεις σε κάθε νοικοκυριό! Διαθέτει λαβές, οι οποίες καθιστούν την μεταφορά της πολύ εύκολη. Μήκος: 28cm, Πλάτος: 28cm, Υψος: 10cm.",
		category: "Λεκάνη",
		amount: "",
		image: "https://s6.imgcdn.dev/YYcmlw.webp",
	},
	{
		name: "Κουβάς Νερού Πλαστικός 9L",
		description: "",
		category: "Κουβάς",
		amount: "",
		image: "https://s6.imgcdn.dev/YYctHq.webp",
	},
	{
		name: "Maco General Γάντια Εργασίας Νιτριλίου",
		description: "Γάντι εργασίας νιτριλίου της Maco από ύφασμα αναπνεόμενο, με αποτέλεσμα να μην ιδρώνει το χέρι στις δύσκολες εργασίες. Διαθέτει επικάλυψη νιτριλίου, για μεγάλη αντοχή σε κοψίματα από μαχαίρι, γυαλί, πέτρα κλπ. Επιπλέον διαθέτει λεπτή κατασκευή για καλύτερη αίσθηση στο κράτημα. Κατάλληλα και για ξυλουργικές ή σιδηρουργικές εργασίες, DIY, με αντοχή σε κοψίματα από μαχαίρι, γυαλί, πέτρα.",
		category: "Γάντια",
		amount: "",
		image: "https://s6.imgcdn.dev/YYcLLL.webp",
	},
	{
		name: "Maco Αδιάβροχα Γάντια Εργασίας Νιτριλίου",
		description: "Γάντια εργασίας από νάυλον ύφανσης 15 gauge με επικάλυψη νιτριλίου στα 3/4 της επιφάνειας του γαντιού. Αδιαβροχοποιημένο ύφασμα, αντιολισθητική επιφάνεια στην παλάμη για καλύτερο κράτημα και αντοχή στο κόψιμο. Ύφανση με επικάλυψη micro foam στην παλάμη που επιτρέπει την αναπνοή του χεριού. Κατάλληλο για βιομηχανική χρήση και πιο βαριές εργασίες.",
		category: "Γάντια",
		amount: "",
		image: "https://s6.imgcdn.dev/YYce6a.webp",
	},
]
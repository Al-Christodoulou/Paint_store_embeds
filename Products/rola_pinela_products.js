const Products = [
	/* Ρολά */
	{
		name: "Ρολό Morris Classic",
		description: "Δερμάτινο ρολό Morris Classic 3 αστέρων για όλες τις χρήσεις. Ειδικό για όλα τα υδροδιαλυτά χρώματα, λαδομπογιές, βερνίκια, κόλλες κ.λ.π.",
		category: "Ρολό",
		amount: "",
		image: "https://s6.imgcdn.dev/pKEWd.webp",
	},
	{
		name: "Ρολό βαφής Rollex Promax",
		description: "Ρολό ιδανικό για όλα τα χρώματα νερού και ασβέστη.",
		category: "Ρολό",
		amount: "",
		image: "https://s6.imgcdn.dev/pfqun.webp",
	},
	{
		name: "Rollex Rodan Ρολό",
		description: "",
		category: "Ρολό",
		amount: "",
		image: "https://s6.imgcdn.dev/pfFag.webp",
	},
	{
		name: "Rollex Texture Economy Σπατουλαριστό Ρολό",
		description: "Rollex texture economy σπατουλαριστό. Ρολό βαφής κατάλληλο για χρώματα νερού και λαδιού για σπατουλαριστές επιφάνειες λείες ή ελαφρώς άγριες. Διάμετρος σωλήνα Ø50, ύψος πέλους 1cm και μήκος πέλους 18cm. Εύκολο στη χρήση και στο καθάρισμα με εκπληκτική αντοχή. Κατάλληλο για επαγγελματίες.",
		category: "Ρολό",
		amount: "",
		image: "https://s6.imgcdn.dev/pfHWv.webp",
	},
	{
		name: "Ρολό Mohair Benman",
		description: "Ρολό Mohair κατασκευασμένο από 100% φυσικό μαλλί. Προσφέρει άριστο φινίρισμα και είναι κατάλληλο για ριπολίνες, βερνίκια/λάκες και ντουκοχρώματα.",
		category: "Ρολό",
		amount: "",
		image: "https://s6.imgcdn.dev/pfghN.webp",
	},
	{
		name: "Rollex Ρολό Ακούρευτο",
		description: "Μία ιδανική επιλογή για άγριες, ανομοιόμορφες επιφάνειες (αστοκάριστοι άγριοι τοίχοι, μάνδρες, δάπεδα από πέτρα κλπ). Ιδανικό για επαγγελματίες. Εγγυημένο για βαφή 3.000τμ. Φυσική γούνα Merinos, πυκνότητα γούνας 55-58 microns, περιλαμβάνεται χειρολαβή.",
		category: "Ρολό",
		amount: "",
		image: "https://s6.imgcdn.dev/pqTiN.webp",
	},
	{
		name: "Ρολό Rollex 24 cm",
		description: "Ρολό βαφής με σύνθεση από πολυεστέρας. ενδείκνυται για βάψιμο σε μεγάλες επιφάνειες και είναι ιδανικό για χρήση σε εφέ, εσωτερικούς τοίχους, μέτρια υφή, εξωτερικούς τοίχους.",
		category: "Ρολό",
		amount: "",
		image: "https://s6.imgcdn.dev/pq5Og.webp",
	},
	/* Πινέλα */
	{
		name: "Πινέλο Α114 Benman",
		description: "Οικονομικό πινέλο, ημίδιπλο και με συνδυασμό φυσικής και συνθετικής τρίχας. Πλαστική λαβή που δεν επηρεάζεται από διαλύτες. Εποξική κόλλα στο στροφείο. Κατάλληλο για υδατοδιαλυτά χρώματα (πλαστικά, ακρυλικά, ριπολίνες και βερνίκια νερού)",
		category: "Πινέλα",
		amount: "",
		image: "https://s6.imgcdn.dev/pfEKq.webp",
	},
	{
		name: "Morris Πινέλο Βαψίματος A15",
		description: "Το πινέλο βαψίματος Morris A15 με πλάτος 12mm είναι ένα αξιόπιστο εργαλείο για τις βαφές σου. Προσφέρει ακρίβεια και ομοιόμορφη κάλυψη σε διάφορες επιφάνειες. Είναι κατάλληλο για επαγγελματίες και ερασιτέχνες, εξασφαλίζοντας ποιοτικό αποτέλεσμα στις εργασίες σου.",
		category: "Πινέλα",
		amount: "",
		image: "https://s6.imgcdn.dev/pfJ8u.webp",
	},
	{
		name: "Morris Μπατανόβουρτσα Βαψίματος",
		description: "",
		category: "Βούρτσα",
		amount: "",
		image: "https://s6.imgcdn.dev/ptDra.webp",
	},
	{
		name: "Morris Πινέλο Βαφής Κονταριού",
		description: "Με φυσική τρίχα πολύ καλής ποιότητας και 10% νάιλον για αξεπέραστη αντοχή.",
		category: "Πινέλο Κονταριού",
		amount: "",
		image: "https://s6.imgcdn.dev/pqyKn.webp",
	},
	{
		name: "Πατρόγκα Morris A55",
		description: "Πατρόγκα A55 30x70mm.",
		category: "Πατρόγκα",
		amount: "",
		image: "https://s6.imgcdn.dev/pqKEv.webp",
	},
	{
		name: "Ωμέγα Κονταροπίνελο",
		description: "",
		category: "Πινέλο Κονταριού",
		amount: "",
		image: "https://s6.imgcdn.dev/YDii0l.webp",
	},
	{
		name: "Ωμέγα Υπέρδιπλο Μαύρο Πινέλο",
		description: "Άριστης ποιότητας υπέρδιπλο πινέλο Ωμέγα.",
		category: "Πινέλο",
		amount: "",
		image: "https://s6.imgcdn.dev/YDik3h.webp",
	},
	{
		name: "Ωμέγα Υπέρδιπλο Άσπρο Πινέλο",
		description: "Άριστης ποιότητας υπέρδιπλο πινέλο Ωμέγα.",
		category: "Πινέλο",
		amount: "",
		image: "https://s6.imgcdn.dev/YDisjV.webp",
	},
	{
		name: "Ωμέγα Ερασιτεχνικό Άσπρο Πινέλο",
		description: "Άριστης ποιότητας ερασιτεχνικό πινέλο Ωμέγα.",
		category: "Πινέλο",
		amount: "",
		image: "https://s6.imgcdn.dev/YDiyTK.webp",
	},
	{
		name: "Ωμέγα Πλαστικό \"Νέον\" Πινέλο",
		description: "",
		category: "Πινέλο",
		amount: "",
		image: "https://s6.imgcdn.dev/YDi59o.webp",
	},
	{
		name: "Ωμέγα Στρογγυλό Άσπρο Πινέλο",
		description: "",
		category: "Πινέλο",
		amount: "",
		image: "https://s6.imgcdn.dev/YDiKJO.webp",
	},
]

require 'open-uri'
Product.destroy_all
User.destroy_all 
Review.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!("products")
ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("reviews")


demouser = User.create(
    name: 'Demo User',
    email: 'demouser@gmail.com',
    password: 'password'
)

user1 = User.create(
    name: 'Jackson Dooley',
    email: 'jacksondooley@hotmail.com',
    password: 'password'
)

user1 = User.create(
    name: 'Gilfoyle Li',
    email: 'gilfoyle@hotmail.com',
    password: 'password'
)

user1 = User.create(
    name: 'Jim Nardi',
    email: 'jim@hotmail.com',
    password: 'password'
)

user1 = User.create(
    name: 'Kyle Ginzburg',
    email: 'kyle@hotmail.com',
    password: 'password'
)

user1 = User.create(
    name: 'Amin Babar',
    email: 'amin@hotmail.com',
    password: 'password'
)


bookProduct1 = Product.create(
    {name: 'Project Hail Mary: A Novel',
    description: "Written by: Andy Weir
    
    Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish.

    Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it.
    
    All he knows is that he's been asleep for a very, very long time. And he's just been awakened to find himself millions of miles from home, with nothing but two corpses for company.
    
    His crewmates dead, his memories fuzzily returning, Ryland realizes that an impossible task now confronts him. Hurtling through space on this tiny ship, it's up to him to puzzle out an impossible scientific mystery—and conquer an extinction-level threat to our species.
    
    And with the clock ticking down and the nearest human being light-years away, he's got to do it all alone.
    
    Or does he?
    
    An irresistible interstellar adventure as only Andy Weir could deliver, Project Hail Mary is a tale of discovery, speculation, and survival to rival The Martian—while taking us to places it never dreamed of going.",
    category: 'books',
    price: 18.99,
    rating: 3.5})

file = open('https://jamazon-seeds.s3.amazonaws.com/books/hailMary.jpg')
bookProduct1.photo.attach(io: file, filename: 'hailMary.jpg')

bookProduct2 = Product.create(
    {name: 'Thus Spoke Zarathustra',
    description: "Written by: Friedrich Nietzsche

    Nietzsche was one of the most revolutionary and subversive thinkers in Western philosophy, and Thus Spoke Zarathustra remains his most famous and influential work. It describes how the ancient Persian prophet Zarathustra descends from his solitude in the mountains to tell the world that God is dead and that the Superman, the human embodiment of divinity, is his successor. Nietzsche's utterance 'God is dead', his insistence that the meaning of life is to be found in purely human terms, and his doctrine of the Superman and the will to power were all later seized upon and unrecognisably twisted by, among others, Nazi intellectuals. With blazing intensity and poetic brilliance, Nietzsche argues that the meaning of existence is not to be found in religious pieties or meek submission to authority, but in an all-powerful life force: passionate, chaotic and free. 

    For more than seventy years, Penguin has been the leading publisher of classic literature in the English-speaking world. With more than 1,700 titles, Penguin Classics represents a global bookshelf of the best works throughout history and across genres and disciplines. Readers trust the series to provide authoritative texts enhanced by introductions and notes by distinguished scholars and contemporary authors, as well as up-to-date translations by award-winning translators.",
    category: 'books',
    price: 8.99,
    rating: 4.7})

file = open('https://jamazon-seeds.s3.amazonaws.com/books/thus_spoke_zarathustra.jpg')
bookProduct2.photo.attach(io: file, filename: 'thus_spoke_zarathustra.jpg')

bookProduct3 = Product.create(
    {name: 'Zero to One: Notes on Startups, or How to Build the Future',
    description: "Written by: Peter Thiel and Blake Masters
    
    The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. In Zero to One, legendary entrepreneur and investor Peter Thiel shows how we can find singular ways to create those new things.

    Thiel begins with the contrarian premise that we live in an age of technological stagnation, even if we're too distracted by shiny mobile devices to notice. Information technology has improved rapidly, but there is no reason why progress should be limited to computers or Silicon Valley. Progress can be achieved in any industry or area of business. It comes from the most important skill that every leader must master: learning to think for yourself.
    
    Doing what someone else already knows how to do takes the world from 1 to n, adding more of something familiar. But when you do something new, you go from 0 to 1. The next Bill Gates will not build an operating system. The next Larry Page or Sergey Brin won't make a search engine. Tomorrow's champions will not win by competing ruthlessly in today's marketplace. They will escape competition altogether, because their businesses will be unique.
    
    Zero to One presents at once an optimistic view of the future of progress in America and a new way of thinking about innovation: it starts by learning to ask the questions that lead you to find value in unexpected places.",
    category: 'books',
    price: 17.99,
    rating: 4.9})

file = open('https://jamazon-seeds.s3.amazonaws.com/books/zero_to_one.jpg')
bookProduct3.photo.attach(io: file, filename: 'zero_to_one.jpg')

bookProduct4 = Product.create(
    {name: 'The Algorithm Design Manual',
    description: "Written by: Steven S. Skiena
    
    'My absolute favorite for this kind of interview preparation is Steven Skiena's The Algorithm Design Manual. More than any other book it helped me understand just how astonishingly commonplace … graph problems are -- they should be part of every working programmer's toolkit. The book also covers basic data structures and sorting algorithms, which is a nice bonus. … every 1 - pager has a simple picture, making it easy to remember. This is a great way to learn how to identify hundreds of problem types.' (Steve Yegge, Get that Job at Google)

    'Steven Skiena's Algorithm Design Manual retains its title as the best and most comprehensive practical algorithm guide to help identify and solve problems. … Every programmer should read this book, and anyone working in the field should keep it close to hand. … This is the best investment … a programmer or aspiring programmer can make.' (Harold Thimbleby, Times Higher Education)

    'It is wonderful to open to a random spot and discover an interesting algorithm. This is the only textbook I felt compelled to bring with me out of my student days.... The color really adds a lot of energy to the new edition of the book!' (Cory Bart, University of Delaware)

    'The is the most approachable book on algorithms I have.'  (Megan Squire, Elon University)

    ---

    This newly expanded and updated third edition of the best-selling classic continues to take the 'mystery' out of designing algorithms, and analyzing their efficiency.  It serves as the primary textbook of choice for algorithm design courses and interview self-study, while maintaining its status as the premier practical reference guide to algorithms for programmers, researchers, and students.

    

    The reader-friendly Algorithm Design Manual provides straightforward access to combinatorial algorithms technology, stressing design over analysis.  The first part, Practical Algorithm Design, provides accessible instruction on methods for designing and analyzing computer algorithms.  The second part, the Hitchhiker's Guide to Algorithms, is intended for browsing and reference, and comprises the catalog of algorithmic resources, implementations, and an extensive bibliography. ",
    category: 'books',
    price: 79.99,
    rating: 3.8})

file = open('https://jamazon-seeds.s3.amazonaws.com/books/alogrithm_design_manual.jpg')
bookProduct4.photo.attach(io: file, filename: 'alogrithm_design_manual.jpg')

bookProduct5 = Product.create(
    {name: 'Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets',
    description: "Written by: Nassim Nicholas Taleb
    
    Fooled by Randomness is the word-of-mouth sensation that will change the way you think about business and the world. Nassim Nicholas Taleb-veteran trader, renowned risk expert, polymathic scholar, erudite raconteur, and New York Times bestselling author of The Black Swan-has written a modern classic that turns on its head what we believe about luck and skill.

    This book is about luck-or more precisely, about how we perceive and deal with luck in life and business. Set against the backdrop of the most conspicuous forum in which luck is mistaken for skill-the world of trading-Fooled by Randomness provides captivating insight into one of the least understood factors in all our lives. Writing in an entertaining narrative style, the author tackles major intellectual issues related to the underestimation of the influence of happenstance on our lives.

    The book is populated with an array of characters, some of whom have grasped, in their own way, the significance of chance: the baseball legend Yogi Berra; the philosopher of knowledge Karl Popper; the ancient world's wisest man, Solon; the modern financier George Soros; and the Greek voyager Odysseus. We also meet the fictional Nero, who seems to understand the role of randomness in his professional life but falls victim to his own superstitious foolishness.

    However, the most recognizable character of all remains unnamed-the lucky fool who happens to be in the right place at the right time-he embodies the “survival of the least fit.” Such individuals attract devoted followers who believe in their guru's insights and methods. But no one can replicate what is obtained by chance.

    Are we capable of distinguishing the fortunate charlatan from the genuine visionary? Must we always try to uncover nonexistent messages in random events? It may be impossible to guard ourselves against the vagaries of the goddess Fortuna, but after reading Fooled by Randomness we can be a little better prepared.",
    category: 'books',
    price: 18.99,
    rating: 4.9})

file = open('https://jamazon-seeds.s3.amazonaws.com/books/fooled_by_randomness.jpg')
bookProduct5.photo.attach(io: file, filename: 'fooled_by_randomness.jpg')

bookProduct6 = Product.create(
    {name: 'Cryptonomicon',
    description: "Written by: Neal Stephenson
    
    In 1942, Lawrence Pritchard Waterhouse—mathematical genius and young Captain in the U.S. Navy—is assigned to detachment 2702. It is an outfit so secret that only a handful of people know it exists, and some of those people have names like Churchill and Roosevelt. The mission of Waterhouse and Detachment 2702—commanded by Marine Raider Bobby Shaftoe-is to keep the Nazis ignorant of the fact that Allied Intelligence has cracked the enemy's fabled Enigma code. It is a game, a cryptographic chess match between Waterhouse and his German counterpart, translated into action by the gung-ho Shaftoe and his forces.

    Fast-forward to the present, where Waterhouse's crypto-hacker grandson, Randy, is attempting to create a 'data haven' in Southeast Asia—a place where encrypted data can be stored and exchanged free of repression and scrutiny. As governments and multinationals attack the endeavor, Randy joins forces with Shaftoe's tough-as-nails granddaughter, Amy, to secretly salvage a sunken Nazi submarine that holds the key to keeping the dream of a data haven afloat. But soon their scheme brings to light a massive conspiracy with its roots in Detachment 2702 linked to an unbreakable Nazi code called Arethusa. And it will represent the path to unimaginable riches and a future of personal and digital liberty...or to universal totalitarianism reborn.

    A breathtaking tour de force, and Neal Stephenson's most accomplished and affecting work to date, Cryptonomicon is profound and prophetic, hypnotic and hyper-driven, as it leaps forward and back between World War II and the World Wide Web, hinting all the while at a dark day-after-tomorrow. It is a work of great art, thought and creative daring; the product of a truly iconoclastic imagination working with white-hot intensity.",
    category: 'books',
    price: 15.99,
    rating: 4.3})

file = open('https://jamazon-seeds.s3.amazonaws.com/books/cryptonomicon.jpg')
bookProduct6.photo.attach(io: file, filename: 'cryptonomicon.jpg')

bookProduct7 = Product.create(
    {name: "Lifespan: Why We Age―and Why We Don't Have To",
    description: "Written by: David Sinclair
    
    It's a seemingly undeniable truth that aging is inevitable. But what if everything we've been taught to believe about aging is wrong? What if we could choose our lifespan?

    In this groundbreaking book, Dr. David Sinclair, leading world authority on genetics and longevity, reveals a bold new theory for why we age. As he writes: “Aging is a disease, and that disease is treatable.”

    This eye-opening and provocative work takes us to the frontlines of research that is pushing the boundaries on our perceived scientific limitations, revealing incredible breakthroughs—many from Dr. David Sinclair's own lab at Harvard—that demonstrate how we can slow down, or even reverse, aging. The key is activating newly discovered vitality genes, the descendants of an ancient genetic survival circuit that is both the cause of aging and the key to reversing it. Recent experiments in genetic reprogramming suggest that in the near future we may not just be able to feel younger, but actually become younger.

    Through a page-turning narrative, Dr. Sinclair invites you into the process of scientific discovery and reveals the emerging technologies and simple lifestyle changes—such as intermittent fasting, cold exposure, exercising with the right intensity, and eating less meat—that have been shown to help us live younger and healthier for longer. At once a roadmap for taking charge of our own health destiny and a bold new vision for the future of humankind, Lifespan will forever change the way we think about why we age and what we can do about it.",
    category: 'books',
    price: 13.99,
    rating: 3.9})

file = open('https://jamazon-seeds.s3.amazonaws.com/books/lifespan.jpg')
bookProduct7.photo.attach(io: file, filename: 'lifespan.jpg')

bookProduct8 = Product.create(
    {name: "The Structure of Scientific Revolutions: 50th Anniversary Edition",
    description: "A good book may have the power to change the way we see the world, but a great book actually becomes part of our daily consciousness, pervading our thinking to the point that we take it for granted, and we forget how provocative and challenging its ideas once were—and still are. The Structure of Scientific Revolutions is that kind of book. When it was first published in 1962, it was a landmark event in the history and philosophy of science. Fifty years later, it still has many lessons to teach.

    With The Structure of Scientific Revolutions, Kuhn challenged long-standing linear notions of scientific progress, arguing that transformative ideas don't arise from the day-to-day, gradual process of experimentation and data accumulation but that the revolutions in science, those breakthrough moments that disrupt accepted thinking and offer unanticipated ideas, occur outside of “normal science,” as he called it. Though Kuhn was writing when physics ruled the sciences, his ideas on how scientific revolutions bring order to the anomalies that amass over time in research experiments are still instructive in our biotech age.

    This new edition of Kuhn's essential work in the history of science includes an insightful introduction by Ian Hacking, which clarifies terms popularized by Kuhn, including paradigm and incommensurability, and applies Kuhn's ideas to the science of today. Usefully keyed to the separate sections of the book, Hacking's introduction provides important background information as well as a contemporary context.  Newly designed, with an expanded index, this edition will be eagerly welcomed by the next generation of readers seeking to understand the history of our perspectives on science.",
    category: 'books',
    price: 9.99,
    rating: 4.2})

file = open('https://jamazon-seeds.s3.amazonaws.com/books/structure_of_scientific_revolutions.jpg')
bookProduct8.photo.attach(io: file, filename: 'structure_of_scientific_revolutions.jpg')

bookProduct9 = Product.create(
    {name: 'The Logic of Scientific Discovery',
    description: "Described by the philosopher A.J. Ayer as a work of 'great originality and power', this book revolutionized contemporary thinking on science and knowledge. Ideas such as the now legendary doctrine of 'falsificationism' electrified the scientific community, influencing even working scientists, as well as post-war philosophy. This astonishing work ranks alongside The Open Society and Its Enemies as one of Popper's most enduring books and contains insights and arguments that demand to be read to this day.",
    category: 'books',
    price: 22.99,
    rating: 4.9})

file = open('https://jamazon-seeds.s3.amazonaws.com/books/logic_of_scientific_discovery.jpg')
bookProduct9.photo.attach(io: file, filename: 'logic_of_scientific_discovery.jpg')

bookProduct10 = Product.create(
    {name: "Structure and Interpretation of Computer Programs - 2nd Edition",
    description: "Structure and Interpretation of Computer Programs has had a dramatic impact on computer science curricula over the past decade. This long-awaited revision contains changes throughout the text. There are new implementations of most of the major programming systems in the book, including the interpreters and compilers, and the authors have incorporated many small changes that reflect their experience teaching the course at MIT since the first edition was published. A new theme has been introduced that emphasizes the central role played by different approaches to dealing with time in computational models: objects with state, concurrent programming, functional programming and lazy evaluation, and nondeterministic programming. There are new example sections on higher-order procedures in graphics and on applications of stream processing in numerical programming, and many new exercises. In addition, all the programs have been reworked to run in any Scheme implementation that adheres to the IEEE standard.",
    category: 'books',
    price: 49.99,
    rating: 4.8})

file = open('https://jamazon-seeds.s3.amazonaws.com/books/structure_interpretation_computer_programs.jpg')
bookProduct10.photo.attach(io: file, filename: 'structure_interperation_computer_programs.jpg')

electronicsProduct1 = Product.create(
    {name: "2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 10-core CPU and 16-core GPU, 16GB RAM, 1TB SSD) - Space Gray",
    description: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU, and machine learning performance
    Up to 10-core CPU delivers up to 3.7x faster performance to fly through pro workflows quicker than ever
    Up to 32-core GPU with up to 13x faster performance for graphics-intensive apps and games
    16-core Neural Engine for up to 11x faster machine learning performance
    Longer battery life, up to 17 hours
    Up to 64GB of unified memory so everything you do is fast and fluid
    Up to 8TB of superfast SSD storage launches apps and opens files in an instant
    Stunning 14-inch Liquid Retina XDR display with extreme dynamic range and contrast ratio
    1080p FaceTime HD camera with advanced image signal processor for sharper video calls
    Six-speaker sound system with force-cancelling woofers",
    category: 'electronics',
    price: 2499.00,
    rating: 4.6})

file = open('https://jamazon-seeds.s3.amazonaws.com/electronics/macbook_air.jpg')
electronicsProduct1.photo.attach(io: file, filename: 'macbook_air.jpg')

electronicsProduct2 = Product.create(
    {name: "Sceptre 24'' Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)",
    description: "24'' Ultra slim profile
    Contemporary sleek metallic design
    Slim bezel with thin chassis. Power Range (V, A, Hz)- AC-DC Adapter Input 100 - 240 VAC, 50/60 Hz, 1.0A (Max.) Output - 12V DC, 2.5A. Power Consumption (Typical)- 25.4W. Neck/Stand Detachable: Yes
    2 x HDMI Ports (convertible to DVI).Contrast Ratio:1000 : 1
    VESA wall mount ready. HDMI Input Signal Support - 1920 x 1080 @ 75Hz, 1080/60p, 1080/60i, 720p, 480p, 480i, Built-in Speakers - 2 x 2W 8 Ohm.Mounting type: VESA Hole Pattern 100mm x 100mm",
    category: 'electronics',
    price: 134.15,
    rating: 4.2})

file = open('https://jamazon-seeds.s3.amazonaws.com/electronics/monitor.jpg')
electronicsProduct2.photo.attach(io: file, filename: 'monitor.jpg')

electronicsProduct3 = Product.create(
    {name: "2021 Apple iPad Mini (Wi-Fi, 64GB) - Space Gray",
    description: "8.3-inch Liquid Retina display with True Tone and wide color
    A15 Bionic chip with Neural Engine
    Touch ID for secure authentication and Apple Pay
    12MP Wide back camera, 12MP Ultra Wide front camera with Center Stage
    Available in purple, starlight, pink, and space gray
    Landscape stereo speakers
    Stay connected with ultrafast Wi-Fi 6
    Up to 10 hours of battery life
    USB-C connector for charging and accessories
    Works with Apple Pencil (2nd generation)",
    category: 'electronics',
    price: 399.99,
    rating: 4.7})

file = open('https://jamazon-seeds.s3.amazonaws.com/electronics/ipad.jpg')
electronicsProduct3.photo.attach(io: file, filename: 'ipad.jpg')

electronicsProduct4 = Product.create(
    {name: "Logitech HD Pro Webcam C920, Widescreen Video Calling and Recording, 1080p Camera, Desktop or Laptop Webcam",
    description: "Full HD 1080p video calling (upto 1920 x 1080 pixels) with the latest version of Skype for Windows; Webcam with 5 foot cable
    720p HD video calling (upto 1280 x 720 pixels) with supported clients; Full HD video recording (upto 1920 x 1080 pixels). Max Resolution: 1080p/30fps 720p/30fps
    Video compression, Built in dual stereo mics with automatic noise reduction; Automatic low light correction, Tripod ready universal clip fits laptops, LCD or monitors
    Compatible with: Windows 7, Windows 8, Windows 10 or later; Works in USB Video Device Class (UVC) mode: Mac OS 10.10 or later (HD 720p on FaceTime for Mac or other supported video calling clients; Full HD 1080p video recording with QuickTime Player) Chrome OS,Android v 5.0 or above (with supported video calling clients),USB port,Internet connection",
    category: 'electronics',
    price: 63.99,
    rating: 3.7})

file = open('https://jamazon-seeds.s3.amazonaws.com/electronics/webcam.jpg')
electronicsProduct4.photo.attach(io: file, filename: 'webcam.jpg')

electronicsProduct5 = Product.create(
    {name: "Kingston Technology Fury Impact 64GB 4800MT/s DDR5 CL38 SODIMM XMP Ready Laptop Memory (Kit of 2) KF548S38IBK2-64, Black",
    description: "Mighty DDR5 SODIMM Performance
    Plug N Play Automatic Overclocking Functionality
    Intel XMP 3.0 Certified
    Lower Power Consumption, Increased Efficiency
    Improved Stability with On-Die ECC",
    category: 'electronics',
    price: 444.99,
    rating: 4.1})

file = open('https://jamazon-seeds.s3.amazonaws.com/electronics/motherboard.jpg')
electronicsProduct5.photo.attach(io: file, filename: 'motherboard.jpg')

electronicsProduct6 = Product.create(
    {name: "Apple Magic Keyboard with Touch ID and Numeric Keypad (for Mac Computers with Apple Silicon) - US English - Black Keys",
    description: "Magic Keyboard with Touch ID and Numeric Keypad delivers a remarkably comfortable and precise typing experience
    It features an extended layout, with document navigation controls for quick scrolling and full-size arrow keys, which are great for gaming
    It's wireless and rechargeable, with an incredibly long-lasting internal battery that will power your keyboard for about a month or more between charges.¹ It pairs automatically with your Mac, so you can get to work right away
    And it includes a woven USB-C to Lightning Cable that lets you pair and charge by connecting to a USB-C port on your Mac.
    System Requirements: Mac with Apple silicon using macOS 11.4 or later",
    category: 'electronics',
    price: 199.00,
    rating: 4.5})

file = open('https://jamazon-seeds.s3.amazonaws.com/electronics/keyboard.jpg')
electronicsProduct6.photo.attach(io: file, filename: 'keyboard.jpg')

electronicsProduct7 = Product.create(
    {name: "Syntech USB C to USB Adapter Pack of 2 USB C Male to USB3 Female Adapter Compatible with MacBook Pro 2021 iMac iPad Mini 6/Pro MacBook Air 2020 and Other Type C or Thunderbolt 4/3 Devices Space Grey",
    description: "Design: The adapter is gathered with zinc alloy metallic minimalist design and delicate embossment for not slipping
    Compatibility: This USB C to USB adapter is compatible with MacBook Pro after 2016 and MacBook Air after 2018 and most of the laptops, tablets and smartphones with a USB Type C port
    User Friendly and USB3 Speed: Plug and work; Plug the USB C end of the adapter into a USBC port, and then connect your flash drive or other standard USB A devices; Also, you can sync or charge your phone with this USB C to USB adapter
    Connectors: Engineered for enhanced durability, the male USB C and female USB3 connectors are designed to be plugged and unplugged up to 10000 times
    Compact and Easy to Use: Plug and play, no driver required; Simple structure, lightweight and portability",
    category: 'electronics',
    price: 9.99,
    rating: 3.8})

file = open('https://jamazon-seeds.s3.amazonaws.com/electronics/usb_adapter.jpg')
electronicsProduct7.photo.attach(io: file, filename: 'usb_adapter')

electronicsProduct8 = Product.create(
    {name: "USB C Docking Station Dual Monitor, 9 in 1 USB C Triple Display Docking Station to Dual HDMI Adapter Displayport SD TF Card Reader 2USB 2.0, 1 USB 3.0, 100W PD for USB C Thunderbolt 3 Laptops",
    description: "Laptop USB C Docking Station:Perfectly combined the function of USB c dock and hub featuring USB C Thunderblot 3 to Dual HDMI ports 4K@60HZ,1*DP outpout,1*super speed USB 3.0 Ports(Up to 5Gbps), 2*standard USB 2.0 Ports, SD/TF card reader and type c port (87W PD charging),support Windows USB C device which supports video output or DP Alt Mode; Make Your Life More Intelligent.
    9-IN-1 Triple Display:Usb c docking station dual monitor HDMI+DP, with three high-definition video output ports, ONLY Windows OS supports triple display, CAN NOT support Mac OS; Under Extended Mode, allow you enjoy 3 multiple display from 2 HDMI output, 1*DP output; for Mirror Mode, our hub support triple display: 1*HDMI output, 1* HDMI+DP.❤Please Note: ONLY Windows system support MST, Mac does not support; HDMI Port 60HZ Only for DP1.4 laptop.
    Fast Speed USB C Hub: This hdmi docking station enlabled 2 USB 3.0 Port up to 5Gbps,2 USB 2. 0 ports provide stable connection without wireless interference; Due to the USB 3. 0 radio frequency interference to the wireless connection, It is advisable to connect your wireless device to the USB 2. 0 ports; SD & TF speeds up to 480Mbps and two cards can be read simultaneously; this USB C adapter provides 1*Type-C pass through Female port by which you could securely charge for laptops.",
    category: 'electronics',
    price: 35.69,
    rating: 3.9})

file = open('https://jamazon-seeds.s3.amazonaws.com/electronics/usb_hub.jpg')
electronicsProduct8.photo.attach(io: file, filename: 'usb_hub.jpg')

electronicsProduct9 = Product.create(
    {name: "NETGEAR 5-Port Gigabit Ethernet Unmanaged Switch (GS305) - Home Network Hub, Office Ethernet Splitter, Plug-and-Play, Silent Operation, Desktop or Wall Mount",
    description: "Plug and play: Simple setup with no software to install or configuration needed
    Versatile mounting options: Supports desktop or wall mount placement
    Silent operation: The Fanless design means zero added noise wherever its located, making it ideal for noise sensitive environments
    Peace of mind warranty - Covered by an industry leading 3 year limited hardware warranty
    Energy efficient: Designed to optimize power usage, lowering its cost to operate; Most models are compliant with IEEE802.3az Energy Efficient Ethernet mode
    Built to last: Every Netgear Network switch is rigorously tested for reliability, quality, and performance",
    category: 'electronics',
    price: 17.99,
    rating: 3.2})

file = open('https://jamazon-seeds.s3.amazonaws.com/electronics/switch.jpg')
electronicsProduct9.photo.attach(io: file, filename: 'switch.jpg')

groceriesProduct1 = Product.create(
    {name: "Large Organic Hass Avocado",
    description: "Grown in Mexico or California
    Hass avocado is easily identified thanks to it oval shape and thick bumpy skin that turns dark, almost purple when ripe
    Is ideal for domestic consumption, families with healthy eating habits, raw vegans, vegans, vegetarians, and paleao diet followers who want to enrich their daily menu with this hearty and highly nutritious fruit.",
    category: 'groceries',
    price: 2.99,
    rating: 4.5})

file = open('https://jamazon-seeds.s3.amazonaws.com/groceries/avocado.jpg')
groceriesProduct1.photo.attach(io: file, filename: 'avocado.jpg')

groceriesProduct2 = Product.create(
    {name: "So Delicious Dairy Free Coconut Milk Yogurt Alternative, Vanilla, Vegan, Non-GMO Project Verified, 5.3 oz.",
    description: "A CREAMY DELIGHT: Enjoy our vanilla coconutmilk yogurt alternative on its own or with your favorite toppings, from granola to diced fruits.
    GREAT FOR DAIRY-FREE LIFESTYLES: Our plant-based yogurt alternative is dairy-, lactose-, soy-, and gluten-free
    MADE WITH ORGANIC COCONUTMILK as part of our commitment to high-quality ingredients
    AVAILABLE IN SO MANY BELOVED FLAVORS, including strawberry banana, raspberry, key lime, and more
    VEGAN AND NON-GMO PROJECT VERIFIED; no artificial flavors, hydrogenated oils, added MSG, or trans-fats",
    category: 'groceries',
    price: 1.99,
    rating: 4.4})

file = open('https://jamazon-seeds.s3.amazonaws.com/groceries/yogurt.jpeg')
groceriesProduct2.photo.attach(io: file, filename: 'yogurt.jpeg')

groceriesProduct3 = Product.create(
    {name: "Oil Olive Extra Virgin Mediterranean Blend, 33.8 Fl Oz",
    description: "365 by Whole Foods Market products give you that dance-down-the-aisles feeling, virtual aisles too! Our huge range of choices with premium ingredients at prices you can get down with makes grocery shopping so much more than tossing the basics in your cart.",
    category: 'groceries',
    price: 7.99,
    rating: 5})

file = open('https://jamazon-seeds.s3.amazonaws.com/groceries/olive_oil.jpg')
groceriesProduct3.photo.attach(io: file, filename: 'olive_oil.jpg')

groceriesProduct4 = Product.create(
    {name: "Beans Black No Salt Added, 15 Ounce",
    description: "Brought to you by Whole Foods Market.  The packaging for this product has a fresh new look. During this transition, you may get the original packaging or the new packaging in your order, but the product and quality is staying exactly the same. Enjoy!
    Black Beans are naturally fat free foods.
    Ready to serve.
    Fat Free, Low Sodium, No Salt Added, No Sugar Added.
    Certified Non-GMO, Vegan",
    category: 'groceries',
    price: 1.09,
    rating: 3.2})

file = open('https://jamazon-seeds.s3.amazonaws.com/groceries/black_beans.jpg')
groceriesProduct4.photo.attach(io: file, filename: 'black_beans.jpg')

groceriesProduct5 = Product.create(
    {name: "Dave's Killer Bread Organic 21 Whole Grains and Seeds Bread - 27 oz Loaf",
    description: "Contains: No animal products, No artificial preservatives, No artificial ingredients, No high fructose corn syrup, USDA certified organic, Non-GMO project verified, power packed with whole grain nutrition, Made with killer taste and texture
    With a hearty texture, subtle sweetness, and a seed-coated crust, '21' is great for toast, sandwiches, or even by itself. Dave's Killer Bread is powerfully different. Packed with protein, fiber, and whole grains with no artificial anything. It will rock your world.
    USDA organic, Non-GMO project verified
    • 5g protein, 5g fiber, 250mg Omega-3, 22g whole grains per slice
    Certified Organic",
    category: 'groceries',
    price: 7.49,
    rating: 4.2})

file = open('https://jamazon-seeds.s3.amazonaws.com/groceries/bread.jpg')
groceriesProduct5.photo.attach(io: file, filename: 'bread.jpg')

groceriesProduct6 = Product.create(
    {name: "Guayaki Yerba Mate Traditional Terere, Organic Energy Drink 16 Ounce Bottle",
    description: "Includes one (1) Guayaki Yerba Mate Traditional Terere 16 Ounce Bottle
    High Energy Infusion: The strength of coffee, the health benefits of tea, and the euphoria of chocolate
    Every time you purchase Guayakí Yerba Mate, you're driving real change because the regeneration of people and planet is integrated into our business model
    USDA Organic, Gluten Free, Non GMO Project Verified, Kosher, Certified B-Corp, Made With Fair Trade Ingredients; Yerba mate contains 24 vitamins and minerals, 15 amino acids, and abundant polyphenols; yerba mate nourishes while it stimulates",
    category: 'groceries',
    price: 3.49,
    rating: 4.4})

file = open('https://jamazon-seeds.s3.amazonaws.com/groceries/yerba.jpg')
groceriesProduct6.photo.attach(io: file, filename: 'yerba.jpg')

groceriesProduct7 = Product.create(
    {name: "Boneless Beef New York Strip Loin Steak, Step 1",
    description: "Meets standards for animal welfare, feed, and more, so you can know about what you're buying (and eating)
    No added growth hormones or antibiotics, ever
    No animal by-products in feed
    Traceable to farm or ranch.
    Animal Welfare Certified by Global Animal Partnership",
    category: 'groceries',
    price: 15.99,
    rating: 4.5})

file = open('https://jamazon-seeds.s3.amazonaws.com/groceries/steak.jpg')
groceriesProduct7.photo.attach(io: file, filename: 'steak.jpg')

groceriesProduct8 = Product.create(
    {name: "Chicken Sausage Link Italian Spicy Step-1",
    description: "All chicken from the Whole Foods Market Meat department must meet standards for animal welfare, feed and more, so you can know about what you're buying (and eating). Here are some things you can count on with this selection:
    No antibiotics or added growth hormones (there are no hormones approved for use in the production of poultry)
    No animal by-products in feed
    Animal Welfare Certified by Global Animal Partnership
    ",
    category: 'groceries',
    price: 6.99,
    rating: 3.9})

file = open('https://jamazon-seeds.s3.amazonaws.com/groceries/sausage.jpg')
groceriesProduct8.photo.attach(io: file, filename: 'sausage.jpg')

groceriesProduct9 = Product.create(
    {name: "Sockeye Salmon Fillet, Previously Frozen",
    description: "This product is Marine Stewardship Council (MSC) certified. In order for a fishery to earn MSC certification, theyâ€re evaluated by an independent third party in accordance with the MSC Fisheries Standard for healthy fish populations and ecosystems, and effective management.
    Certain preservatives prohibited, including sodium bisulfite and STPP",
    category: 'groceries',
    price: 16.99,
    rating: 4.3})

file = open('https://jamazon-seeds.s3.amazonaws.com/groceries/salmon.jpg')
groceriesProduct9.photo.attach(io: file, filename: 'salmon.jpg')

jamsProduct1 = Product.create(
    {name: "Dickinson's Seedless Blackberry Preserves, 10 oz",
    description: "No artificial flavors
    Easy to spread
    Gourmet Preserves
    Seedless",
    category: 'jams',
    price: 9.29,
    rating: 4.7})

file = open('https://jamazon-seeds.s3.amazonaws.com/jams/blackberry.jpg')
jamsProduct1.photo.attach(io: file, filename: 'blackberry.jpg')

jamsProduct2 = Product.create(
    {name: "Tiptree Crystal Orange Marmalade, 12 Ounce Jar",
    description: "Tiptree has been growing fruit & making preserves since 1885 in Essex County, England. We grow a wide range of traditional fruits on the farm right next to our factory, producing some of the highest quality preserves & marmalades the world has tasted.
    We use traditional techniques including cooking the fruit in small batches using copper pans to make the highest consistent quality – each batch produces only 150 jars of product.
    A curiously British term, marmalade means a jam made with citrus fruit. Award-winning Tiptree Marmalades are produced with hand-sorted citrus fruits.
    Gluten free, made in a nut free factory, suitable for vegetarians.",
    category: 'jams',
    price: 10.19,
    rating: 4.4})

file = open('https://jamazon-seeds.s3.amazonaws.com/jams/orange.jpg')
jamsProduct2.photo.attach(io: file, filename: 'orange.jpg')

jamsProduct3 = Product.create(
    {name: "Smucker's Strawberry Preserves, 12 Ounces",
    description: "Contains 6- 12 Ounce Jars of Smucker's Strawberry Preserves
    Strawberry sweetness shines through every jar
    Preserves made with whole or large pieces of high-quality fruit
    Partner with peanut butter for a classic PB and J
    Serves as a filling for cupcakes, topping for waffles, or a delicious base for fruit sauces",
    category: 'jams',
    price: 4.99,
    rating: 3.2})

file = open('https://jamazon-seeds.s3.amazonaws.com/jams/strawberry.jpg')
jamsProduct3.photo.attach(io: file, filename: 'strawberry.jpg')

jamsProduct4 = Product.create(
    {name: "Tennessee's Best Old Fashion Seedless Red Raspberry Jam",
    description: "Using raspberries picked at the peak of ripeness, our Seedless Red Raspberry bursts with flavor! Use is on toast, add to your favorite yogurt, or as a filling for your donut! Delicious!
    FRESH - Using raspberries picked at the peak of ripeness, our Seedless Red Raspberry Jam is a sweet and delicious treat for your toast or biscuit. Gluten-free, all natural, and no preservatives.
    SIMPLE - With only simple fruits and ingredients, our unique blend of raspberries, citric acid, and sugar will quickly become a staple for your pantry, for you, your family and for entertaining.
    ARTISANAL - Crafted in small batches and handpacked to ensure freshness in every jar, our jams seal in that homemade taste and it's been that way in Tennessee for over 25 years.",
    category: 'jams',
    price: 14.95,
    rating: 4.7})

file = open('https://jamazon-seeds.s3.amazonaws.com/jams/raspberry.jpg')
jamsProduct4.photo.attach(io: file, filename: 'raspberry.jpg')

jamsProduct5 = Product.create(
    {name: "Stonewall Kitchen Wild Maine Blueberry Jam, 12.5 Ounces",
    description: "Stonewall Kitchen Wild Maine Blueberry Jam, 12.5 oz
    A must for the well-stocked pantry; The perfect taste of Maine in a jar
    Just sweet, intensely flavorful wild Maine blueberries, the right amount of sugar and a splash of lemon
    The foundation of our brand and our top selling item year after year
    It all started in 1991 at a local farmers' market with a few dozen items that we'd finished hand-labeling only hours before. Fast-forward to today and Stonewall Kitchen is now home to an ever-growing family of like-minded lifestyle brands! Expertly made with premium ingredients, our products are the result of decades spent dreaming up, testing and producing only the very best in specialty foods and fine home living.",
    category: 'jams',
    price: 12.76,
    rating: 4.3})

file = open('https://jamazon-seeds.s3.amazonaws.com/jams/blueberry.jpg')
jamsProduct5.photo.attach(io: file, filename: 'blueberry.jpg')

jamsProduct6 = Product.create(
    {name: "Stonewall Kitchen Mango Chutney, 8.5 Ounces",
    description: "Stonewall Kitchen Mango Chutney, 8.5 oz.
    A must for the well-stocked pantry; Convenient and flavorful
    We blended sweet mango and delicious complementary spices
    Try it as a topping or add it to grilled fish or meat
    It all started in 1991 at a local farmers' market with a few dozen items that we'd finished hand-labeling only hours before. Fast-forward to today and Stonewall Kitchen is now home to an ever-growing family of like-minded lifestyle brands! Expertly made with premium ingredients, our products are the result of decades spent dreaming up, testing and producing only the very best in specialty foods and fine home living.",
    category: 'jams',
    price: 10.89,
    rating: 4.5})

file = open('https://jamazon-seeds.s3.amazonaws.com/jams/mango.jpg')
jamsProduct6.photo.attach(io: file, filename: 'mango.jpg')

furnitureProduct1 = Product.create(
    {
        name: "Rivet Revolve Modern Upholstered Sofa",
        description: "This modern sectional sofa features simple lines and square armrests atop tall tapered legs, giving it a minimalist feel that looks great with most decor styles.
        Hardwood frame, solid beech wood legs and durable polyester upholstery stand up to wear and tear
        The chaise can be moved to either end to accommodate your room layout -- and it provides an extra seat for company.
        Assemble in 15 minutes or less, just attach the legs that come zippered inside the product
        Wipe clean with a soft, dry cloth.",
        category: 'home',
        price: 856.00,
        rating: 4.5
    }
)

file = open('https://jamazon-seeds.s3.amazonaws.com/furniture/sectional.jpg')
furnitureProduct1.photo.attach(io: file, filename: 'sectional.jpg')

furnitureProduct2 = Product.create(
    {
        name: "HomePop Swoop Arm Living-Room-Chair",
        description: "ACCENT CHAIR: Our elegant accent chair features a slightly curved back along with side swoop arms to create a comfortable chair that would go perfect with your living room furniture or even bedroom furniture
        MODERN CHAIR: Our accent chairs for living room, bedroom, and home office are made with a premium easy-to-care-for fabric that is both stylish and durable for a lavish design that’s built to last
        ROOM FURNITURE: When paired together our accent chairs set of 2 provide extra seating for either your living room, bedroom, or home office | Our floral accent chairs with arms and solid wood legs that support up to 250lbs
        SITTING CHAIR: Our small accent chair with it's transitional design works in most homes adding a decorative accent to any room for a luxurious statement
        MODERN ACCENT CHAIR: Available in 3 various fabric styles our accent chair with arms is super easy to clean with either a vacuum or by spot wipe using a soft dry cloth.",
        category: 'home',
        price: 199.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/furniture/arm_chair.jpg')
furnitureProduct2.photo.attach(io: file, filename: 'arm_chair.jpg')

furnitureProduct3 = Product.create(
    {
        name: "De'Longhi EC9665M La Specialista Maestro Espresso Machine",
        description: "Sensor Grinding Technology Choose one of 8 grinding settings for the coffee beans of your choice and adjust the dose with a precise digital dosing guide.
        Smart Tamping Station No more too loose or too dense doses, the Smart Tamping Station works in harmony with the sensors to ensure perfect pressure and proper doses with less mess.
        Dynamic Pre-Infusion The dynamic pre-infusion process adapts to the density of the coffee dose, and evenly wets the grounds to reach their perfect extraction.",
        category: 'home',
        price: 1299.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/furniture/espresso.jpg')
furnitureProduct3.photo.attach(io: file, filename: 'espresso.jpg')

furnitureProduct4 = Product.create(
    {
        name: "Alora Modern Vintage Bohemian Distressed Accent Rug",
        description: "100% Polypropylene
            A flat, kilim-style pile that has the look of a Flat weave rug
            The Yarn is stain resistant and doesn't shed or fade over time, making it perfect for high traffic areas
            Extremely durable, design for high traffic area
            The 100% jute backing is safe for wood floors
            Stain resistant and won't fade in the sunlight over time",
        category: 'home',
        price: 19.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/furniture/rug.jpg')
furnitureProduct4.photo.attach(io: file, filename: 'rug.jpg')

furnitureProduct5 = Product.create(
    {
        name: "Accent Plus Floral Fantasia Art Glass Vase",
        description: "Glass
        Imported
        This vase weighs 11.5 lbs and measures 8x8x9
        Made of glass to create a stunning home décor accent
        Accentuate your home's side tables, bookshelves, mantles, or dressers with this exquisite decorative vase! Fill with flowers or leave as a stand alone décor piece to elevate your interior design.
        To clean your work of art dust lightly or wipe with damp cloth as needed.
        This individually hand crafted jug-shaped vase is a treasure of glowing color and graceful garden imagery. Individually hand-crafted for its unique beauty and therefore may be slightly different from the picture shown here.",
        category: 'home',
        price: 84.15,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/furniture/vase.jpg')
furnitureProduct5.photo.attach(io: file, filename: 'vase.jpg')

furnitureProduct6 = Product.create(
    {
        name: "Bathroom Accessory Set-4 Pieces Resin",
        description: "4 Piece Bathroom Accessories Complete Set: 1 Refillable Lotion/Soap Dispenser, 1 Rinsing Tumbler Cup ,1 Soap Dish and 1 Vanity Tray; A REAL COMPLETE COUNTERTOP VANITY ACCESSORIES SET FOR BATHROOM;
        Multifunctional Accessories: can be used to organize the sink, make your bathroom countertop tidy and orderly, suitable as an ideal bathroom accessory for home decoration
        Convenient and Safety Package Box :modern bathroom accessories are made of high-quality resin, which is more durable and stronger than ceramic or plastic sanitary ware. safety corrugated box and foam package provide safety package box to avoid broken after you received it",
        category: 'home',
        price: 37.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/furniture/bathroom.jpg')
furnitureProduct6.photo.attach(io: file, filename: 'bathroom.jpg')

furnitureProduct7 = Product.create(
    {
        name: "TERESA'S COLLECTIONS Rabbit on Turtle Garden Outdoor Statue and Sculpture with Solar Lights",
        description: "【Original Design 】TERESA'S COLLECTIONS is a retail brand adhering to original designs. Inspired by gray rabbit and tortoise reading a book, this rabbit garden statue brings natural faux succulents atmosphere to your garden
        【Premium Quality】 This rabbit figurine made of durable resin materials, waterproof and anti-fading. The product is equipped with advanced solar chips, which can light up for 8 hours",
        category: 'home',
        price: 36.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/furniture/turtle.jpg')
furnitureProduct7.photo.attach(io: file, filename: 'turtle.jpg')

furnitureProduct8 = Product.create(
    {
        name: "Burpee Giant Flowered Mixed Colors Zinnia Seeds 150 seeds",
        description: "Huge, 5in doubles, on sturdy, bushy plants add bold, vibrant color to gardens. The more you cut, the more they bloom! heat-loving and very easy to grow
        Each packet contains 150 seeds
        Sow outdoors 4 weeks after the average last frost date
        Plant Height is 26in. plant spread is 12in. blooms are 5in",
        category: 'home',
        price: 6.85,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/furniture/flower.jpg')
furnitureProduct8.photo.attach(io: file, filename: 'flower.jpg')

furnitureProduct9 = Product.create(
    {
        name: "12 PACK 9 Inch Lightweight Wheat Straw Plates",
        description: "【Qualified Material】 Made of wheat straw fiber, starch and food-grade PP material, totally safety and healthy. A good alternative to ceramic, glass other plastic plates.
        【User-Friendly Design】 Designed with space-saving style and smooth round edges, light to hold and safe to use. No need to worry about break the plate again. They are perfect plate for naughty kids and careless people.
        【Microwave and Dishwasher Safe】 Temperature resistance reaches up to 248 °F(-4°F ~ 248 °F). Don`t Microwave on high for more than 3 minutes. Easy to clean.",
        category: 'home',
        price: 19.85,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/furniture/plate.jpg')
furnitureProduct9.photo.attach(io: file, filename: 'plate.jpg')

clothesProduct1 = Product.create(
    {
        name: "Kanu Surf Men's Riviera Swim Trunks",
        description: "100% Polyester
        Imported
        Elastic closure
        Machine Wash
        Upf 50+ quick dry microfiber: lightweight and durable for your most comfortable pair of swim trunks for the beach, pool or just lounging around
        Triple needle side seams and rises make Kanu Surf swimming trunks and bathing suits among the highest quality you will own",
        category: 'clothes',
        price: 12.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/clothes/trunks.jpg')
clothesProduct1.photo.attach(io: file, filename: 'trunks.jpg')

clothesProduct2 = Product.create(
    {
        name: "JIONS Slip-on Suede Chelsea Boots Men",
        description: "100% Leather/Cowhide Grain Leather
            Shoes Width: Medium, Heel Height:1in
            crepe sole
            Platform measures approximately .26in
            COMFORT DEDIGN: The shoes are designed to be comfortable. Genuine leather upper, pigskin lining, soft raw rubber outsole, thickened soft elastic insole. Simple style solid beige classic fashion mens chelsea boots.",
        category: 'clothes',
        price: 64.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/clothes/boots.jpg')
clothesProduct2.photo.attach(io: file, filename: 'boots.jpg')

clothesProduct3 = Product.create(
    {
        name: "Dockers Men's Classic Fit Signature Khaki Lux Cotton Stretch Pants",
        description: "98% Cotton, 2% Elastane
            Imported
            Button closure
            Machine Wash
            Best Pressed- Timeless details and sharp center crease for a polished and confident look
            Classic Fit (D3) - Sits naturally at waist, eased through seat and thigh with a straight leg
            Comfort Waistband offers up to 2in of extra room in the waist
            Zip fly with button-through front closure, double welt button-through back pockets and fine topstitching",
        category: 'clothes',
        price: 22.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/clothes/pants.jpg')
clothesProduct3.photo.attach(io: file, filename: 'pants.jpg')

clothesProduct4 = Product.create(
    {
        name: "No Show Men Socks, Low Cut Ankle Sock, Men Short Socks Casual Cotton Socks",
        description: "Cotton,Spandex
            Hand Wash Only
            Made of high quality cotton/spandex which enhances durability, comfortability and sweat-wicking,these no show socks are ideal for indoor and outdoor activity.
            Cotton No Show Socks with 3 silicone heel grip technology ensures non-slip and your no show socks stay put all day long. M=size 6-10. L=size 11-13.
            Invisible Wear: The liner socks creates an invisible wear inside shoes.Suit for boat shoes,sneakers, oxfords, loafers and sport shoes.
            Well Made Cuff: The Ergonomically designed well made cuff make socks fit your feet perfectly, will not be tight and neither loose.",
        category: 'clothes',
        price: 16.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/clothes/socks.jpg')
clothesProduct4.photo.attach(io: file, filename: 'socks.jpg')

clothesProduct5 = Product.create(
    {
        name: "Carhartt Men's Logo Hooded Work Sweatshirt",
        description: "50% Cotton, 50% Polyester
            *10.5-ounce, 50% cotton/50% polyester blend, midweight
            *attached hood
            Machine wash cold - like colors
            Loose Fit t-shirts are cut larger with a roomier fit in the chest and shoulders
            Loose Fit, previously known as Original Fit, is a label update in name only. Loose and Original size and fit remains the same. Stock may vary in labeling
            Previous Product Name: K87 Workwear Pocket Short-Sleeve T-shirt",
        category: 'clothes',
        price: 42.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/clothes/hoodie.jpg')
clothesProduct5.photo.attach(io: file, filename: 'hoodie.jpg')

clothesProduct6 = Product.create(
    {
        name: "Clarks Men's Tilden Walk Oxford",
        description: "100% Leather
            Imported
            Synthetic sole
            Heel measures approximately 1in
            A shoe designed to take on the Monday through Friday grind
            Stretch Gore Panels for a Flexible Fit
            Ortholite footbed that softens impact and wicks away moisture",
        category: 'clothes',
        price: 120.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/clothes/oxford.jpg')
clothesProduct6.photo.attach(io: file, filename: 'oxford.jpg')

clothesProduct7 = Product.create(
    {
        name: "Leidowei Men's 2 in 1 Workout Running Shorts Lightweight Training Yoga Gym 7in Short with Zipper Pockets",
        description: "Outer Shorts: 95% Polyester, 5% Spandex; Built-in Compression Shorts: 90% Polyester, 10% Spandex
        Drawstring closure
        Machine Wash
        2-IN-1 DESIGN: Mesh material shorts, quick-dry fabric to keep you comfortable for workouts and practice, built-in Compression shorts with tight fit offers support thigh muscle to improve performance and provide a more generous fit for extra mobility.",
        category: 'clothes',
        price: 24.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/clothes/shorts.jpg')
clothesProduct7.photo.attach(io: file, filename: 'shorts.jpg')

clothesProduct8 = Product.create(
    {
        name: "Timberland Men's 35mm Classic Jean Belt",
        description: "100% Leather
        Imported
        Buckle closure
        Dry Clean Only
        Mens leather belt made with 100% genuine leather with single loop antique finish buckle
        Perfect mens casual belt that will soon become your favorite go to everyday leather belt
        The perfect mens belt for jeans that can also convert into a mens dress belt and work belt",
        category: 'clothes',
        price: 19.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/clothes/belt.jpg')
clothesProduct8.photo.attach(io: file, filename: 'belt.jpg')

clothesProduct9 = Product.create(
    {
        name: "Disguise Men's Disney Pixar Toy Story and Beyond Buzz Lightyear Adult Costume Kit",
        description: "Pull On closure
        Officially Licensed product
        Product Includes: Character hood, gloves and inflatable jet pack.
        Whether it's Halloween, birthday parties, or even a fun filled night, disguise is good for everything!",
        category: 'clothes',
        price: 21.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/clothes/buzz.jpg')
clothesProduct9.photo.attach(io: file, filename: 'buzz.jpg')

officeProduct1 = Product.create(
    {
        name: "Jamazon Basics 6-Sheet Cross-Cut Paper and Credit Card Home Office Shredder",
        description: "6 sheet crosscut paper/credit card shredder
        Auto Start and overheat protection
        Thermal Protection to prevent overheating
        manual reverse to clear paper jams
        shreds credit cards; small paper clips; staples
        Important Note: Do not spray or keep any aerosol products in or around the shredder and do not shred items like metallic credit cards",
        category: 'office',
        price: 44.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/office/shredder.jpg')
officeProduct1.photo.attach(io: file, filename: 'shredder.jpg')

officeProduct2 = Product.create(
    {
        name: "E-Z Ink (TM) Remanufactured Ink Cartridge Replacement",
        description: "Product Name: E-Z Ink remanufactured ink cartridges replacement for Epson 410XL 410 XL T410XL
        Package Contents: 1 x User Guide, 1 x Cyan 410XL, 1 x Magenta 410XL, 1 x Yellow 410XL, total 3 cartridges
        Page Yield: Color is 650 pages per cartridge (5% coverage)
        Printer Compatibility: Epson Expression XP-830, XP-640, XP-530, XP-630, XP-635, XP-7100 Printer
        Premium quality ink delivers crisp text and graphics",
        category: 'office',
        price: 23.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/office/ink.jpg')
officeProduct2.photo.attach(io: file, filename: 'ink.jpg')

officeProduct3 = Product.create(
    {
        name: "HP OfficeJet Pro 6978 All-in-One Wireless Printer",
        description: "Main functions of this HP color inkjet photo printer: copy, scan, fax, wireless printing, two-sided duplex printing and scanning, color touchscreen, automatic document feeder, Instant Ink ready so you'll never run out of ink, and more
            Easily print when and where you need to from your smartphone, tablet, or notebook PC; get convenient mobile printing options and mobile setup; connect the way you want to with Ethernet and wireless networking
            Ink delivered to your home: get your first 2 months free when you enroll in HP Instant Ink (optional) during printer set up; plans starting at 2.99 dollar per month after the trial period, shipping and recycling included
            Built for business; produce fast professional-quality color for 50% less than lasers, save paper, and handle more tasks without slowing down",
        category: 'office',
        price: 169.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/office/printer.jpg')
officeProduct3.photo.attach(io: file, filename: 'printer.jpg')

officeProduct4 = Product.create(
    {
        name: "Heavy Duty Packaging Tape, Clear, 2 Inches x 800 Inches",
        description: "Scotch packaging tape unwinds smoothly and easily; resists splitting and tearing, adheres instantly and has a strong film backing
            Extreme holding power for heavy tasks; adheres instantly, ideal for packaging overstuffed cartons - Scotch brand's strongest clear-to-the-core packaging tape
            Meets US Postal Service regulations for standard packages, tape made in USA",
        category: 'office',

        price: 8.28,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/office/tape.jpg')
officeProduct4.photo.attach(io: file, filename: 'tape.jpg')

officeProduct5 = Product.create(
    {
        name: "Sharpie Permanent Markers, Fine Point, Black, 12 Count",
        description: "Proudly permanent ink marks on paper, plastic, metal, and most other surfaces
            Intensely brilliant Colors create eye popping, Vibrant impressions
            Remarkably resilient ink dries quickly and resists fading and Water; AP certified
            Endlessly versatile fine tip makes impressively Bold, Detailed marks
            Includes 12 black Sharpie permanent markers",
        category: 'office',
        price: 8.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/office/marker.jpg')
officeProduct5.photo.attach(io: file, filename: 'marker.jpg')

officeProduct6 = Product.create(
    {
        name: "6Pcs Inkless Pencils Eternal",
        description: "Package includes: You will receive 6 pieces of inkless pencils in different color and 6 extra pencil nibs, a eraser is placed in each everlasting pencil. Protable design can be used anytime, bring you relaxing writing experience.
            0.7 mm Everlasting Pencil: This is a unlimited pencil without need to sharpen or replace refill and no ink, because the nib is made of alloy, the nib rubs on paper to decompose alloy metal molecules and leave them on the surface of the paper. Can be applied to notebook & writing pads, stone paper, kraft paper, and most paper, and the handwriting can be retained for a long time.
            Erasable & Durable: Our eternal pencil can replace 100 wooden pencils. The nib made of alloy material, which can write smoothly and not easy to break, handwriting same as ordinary pencil, easy to erase, the barrel is non-slip, and the grip feels comfortable, suite adults and children.",
        category: 'office',
        price: 11.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/office/pen.jpg')
officeProduct6.photo.attach(io: file, filename: 'pen.jpg')

officeProduct7 = Product.create(
    {
        name: "Epson Home Cinema 2200 3LCD 1080p Projector",
        description: "Epson Certified-Refurbished Product - Epson`s quality-assurance team reviews each refurbished product. They have been inspected and tested to ensure they perform properly.
            Stunning picture quality — delivers an immersive viewing experience for TV shows, sporting events, gaming and movies for an amazing Full HD picture
            Smooth, crisp images — with Image Enhancement and Frame Interpolation
            Built-in Android TV (2) — latest Android TV interface with a simple-to-use remote - including voice search with built-in Google Assistant. Watch all your favorite streaming channels including Hulu, HBO, YouTube and more (3) without an external streaming media player",
        category: 'office',
        price: 649.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/office/projector.jpg')
officeProduct7.photo.attach(io: file, filename: 'projector.jpg')

officeProduct8 = Product.create(
    {
        name: "Pendaflex File Folders",
        description: "TRIED AND TRUE: Pendaflex Standard Manila File Folders slip seamlessly into many existing filing systems and are easy to label, easy to read and easy to replace
            1/3-CUT TABS IN ASSORTED POSITIONS are staggered from left to right for perfect visibility in your vertical or lateral file cabinet",
        category: 'office',
        price: 13.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/office/folder.jpg')
officeProduct8.photo.attach(io: file, filename: 'folder.jpg')

officeProduct9 = Product.create(
    {
        name: "Half Sheet Self Adhesive Shipping Labels for Laser & Inkjet Printers",
        description: "【COMPATIBILITY】- LabelMore sticker paper for inkjet & laser printer, compatible with all laser & inkjet printer series on the market, printing smoothly without paper jam issue.
                    【ADHESIVE LABELS】- Each mailing labels paper have strong permanent self-adhesive for all surface types. LabelMore shipping label stickers adheres to bubble mailer, cardboard shipping box, poly mailer, kraft envelopes and more surface. Save mailing costs and improve your work efficiency since NO tape.",
        category: 'office',
        price: 28.99,
        rating: 4.5
    }
)
file = open('https://jamazon-seeds.s3.amazonaws.com/office/label.jpg')
officeProduct9.photo.attach(io: file, filename: 'label.jpg')





1000.times do
    Review.create(
        title: Faker::GreekPhilosophers.quote,
        body: Faker::Lorem.paragraph(sentence_count: 10, supplemental: false, random_sentences_to_add: 4),
        rating: rand(2..5).to_i,
        product_id: rand(0..34).to_i,
        user_id: rand(1..5).to_i,
    )
end


# Product1 = Product.create(
#     {name: "",
#     description: "",
#     category: '',
#     price: ,
#     rating: })

# file = open('')
# Product1.photo.attach(io: file, filename: '')

# JamProducts = Product.create([
#     {name: 'Blackberry Jam',
#     description: 'Made from the finest blackberries',
#     category: 'jams',
#     price: 4.99,
#     rating: 5}
# ])
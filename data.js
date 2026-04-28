const wordsData = [
    {
        "pos":  "Article",
        "word":  "A, An",
        "translation":  "Bir (belgisiz tanımlık)",
        "sentence":  "I have an apple and a sandwich in my bag."
    },
    {
        "pos":  "Verb",
        "word":  "Abandon",
        "translation":  "Terk etmek, bırakmak",
        "sentence":  "The crew had to abandon the ship when the engine caught fire."
    },
    {
        "pos":  "Noun",
        "word":  "Ability",
        "translation":  "Yetenek, kabiliyet",
        "sentence":  "Her ability to speak four languages helped her get the job."
    },
    {
        "pos":  "Adjective",
        "word":  "Able",
        "translation":  "Yapabilmek, muktedir",
        "sentence":  "Will you be able to finish the cost reduction report by tomorrow?"
    },
    {
        "pos":  "Verb",
        "word":  "Abolish",
        "translation":  "Feshetmek, yürürlükten kaldırmak",
        "sentence":  "The government decided to abolish the outdated tax law."
    },
    {
        "pos":  "Noun",
        "word":  "Abortion",
        "translation":  "Kürtaj, (bir işlemi) durdurma",
        "sentence":  "They discussed the ethical implications of abortion in the seminar."
    },
    {
        "pos":  "Prep.",
        "word":  "About",
        "translation":  "Adv.",
        "sentence":  "Hakkında, yaklaşık"
    },
    {
        "pos":  "Prep.",
        "word":  "Above",
        "translation":  "Adv.",
        "sentence":  "Üzerinde, yukarısında"
    },
    {
        "pos":  "Adverb",
        "word":  "Abroad",
        "translation":  "Yurt dışı, yurt dışında",
        "sentence":  "He has worked abroad for several years before returning to İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Absence",
        "translation":  "Yokluk, bulunmama",
        "sentence":  "Her absence from the meeting was noticed by everyone."
    },
    {
        "pos":  "Adjective",
        "word":  "Absent",
        "translation":  "Devamsız, eksik, orada olmayan",
        "sentence":  "He has been absent from school for three days due to illness."
    },
    {
        "pos":  "Adjective",
        "word":  "Absolute",
        "translation":  "Kesin, mutlak",
        "sentence":  "You must have absolute trust in your team members."
    },
    {
        "pos":  "Adverb",
        "word":  "Absolutely",
        "translation":  "Kesinlikle",
        "sentence":  "I absolutely agree with your decision to find alternative suppliers."
    },
    {
        "pos":  "Verb",
        "word":  "Absorb",
        "translation":  "Emmek, soğurmak, kavramak",
        "sentence":  "Plants absorb nutrients and water through their roots."
    },
    {
        "pos":  "Adjective",
        "word":  "Abstract",
        "translation":  "Soyut",
        "sentence":  "\"Justice\" is an abstract concept that means different things to different people."
    },
    {
        "pos":  "Adjective",
        "word":  "Absurd",
        "translation":  "Saçma, akıl dışı",
        "sentence":  "It is absurd to suggest that the Earth is flat in this day and age."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Abuse",
        "translation":  "Kötüye kullanma, istismar (etmek)",
        "sentence":  "The politician was accused of the abuse of power."
    },
    {
        "pos":  "Adjective",
        "word":  "Academic",
        "translation":  "Akademik",
        "sentence":  "The university offers a wide range of academic programs."
    },
    {
        "pos":  "Noun",
        "word":  "Academy",
        "translation":  "Akademi",
        "sentence":  "She was accepted into the national sports academy last summer."
    },
    {
        "pos":  "Verb",
        "word":  "Accelerate",
        "translation":  "Hızlanmak, hızlandırmak",
        "sentence":  "The driver had to accelerate to pass the slow-moving truck."
    },
    {
        "pos":  "Noun",
        "word":  "Accent",
        "translation":  "Aksan, vurgu",
        "sentence":  "He speaks English with a strong German accent."
    },
    {
        "pos":  "Verb",
        "word":  "Accept",
        "translation":  "Kabul etmek",
        "sentence":  "Did the alternative firm accept our offer for the raw materials?"
    },
    {
        "pos":  "Adjective",
        "word":  "Acceptable",
        "translation":  "Kabul edilebilir",
        "sentence":  "A 5% increase in costs is not acceptable under the current budget."
    },
    {
        "pos":  "Noun",
        "word":  "Acceptance",
        "translation":  "Kabul, kabullenme",
        "sentence":  "The university sent him a letter of acceptance."
    },
    {
        "pos":  "Noun",
        "word":  "Access",
        "translation":  "Verb",
        "sentence":  "Erişim"
    },
    {
        "pos":  "Adjective",
        "word":  "Accessible",
        "translation":  "Erişilebilir, ulaşılabilir",
        "sentence":  "The information is easily accessible on the internet."
    },
    {
        "pos":  "Noun",
        "word":  "Accident",
        "translation":  "Kaza",
        "sentence":  "I\u0027m sorry I\u0027m late; there was a minor traffic accident on the way."
    },
    {
        "pos":  "Adverb",
        "word":  "Accidentally",
        "translation":  "Yanlışlıkla, kazara",
        "sentence":  "I accidentally broke the vase while cleaning."
    },
    {
        "pos":  "Verb",
        "word":  "Accommodate",
        "translation":  "Konaklatmak, yer sağlamak",
        "sentence":  "The new stadium can accommodate over 50,000 fans."
    },
    {
        "pos":  "Noun",
        "word":  "Accommodation",
        "translation":  "Konaklama, kalacak yer",
        "sentence":  "We are looking for suitable accommodation near the city center."
    },
    {
        "pos":  "Verb",
        "word":  "Accompany",
        "translation":  "Eşlik etmek",
        "sentence":  "Would you like me to accompany you to the meeting in İzmir?"
    },
    {
        "pos":  "Verb",
        "word":  "Accomplish",
        "translation":  "Başarmak, tamamlamak",
        "sentence":  "They managed to accomplish the mission despite the difficulties."
    },
    {
        "pos":  "Noun",
        "word":  "Accomplishment",
        "translation":  "Başarı, kazanım",
        "sentence":  "Finishing the marathon was a major accomplishment for her."
    },
    {
        "pos":  "Preposition",
        "word":  "According to",
        "translation":  "-e göre",
        "sentence":  "According to the latest market news, silver prices are rising."
    },
    {
        "pos":  "Adverb",
        "word":  "Accordingly",
        "translation":  "Bu doğrultuda, buna göre",
        "sentence":  "Please let us know your decision and we will act accordingly."
    },
    {
        "pos":  "Noun",
        "word":  "Account",
        "translation":  "Verb",
        "sentence":  "Hesap"
    },
    {
        "pos":  "Noun",
        "word":  "Accountability",
        "translation":  "Hesap verebilirlik, sorumluluk",
        "sentence":  "Accountability is key to maintaining public trust in the system."
    },
    {
        "pos":  "Adjective",
        "word":  "Accountable",
        "translation":  "Sorumlu, hesap verebilir",
        "sentence":  "Politicians should be held accountable for their actions."
    },
    {
        "pos":  "Noun",
        "word":  "Accountant",
        "translation":  "Muhasebeci",
        "sentence":  "My uncle works as a senior accountant for a multinational firm."
    },
    {
        "pos":  "Verb",
        "word":  "Accumulate",
        "translation":  "Biriktirmek, çoğalmak",
        "sentence":  "Dust tends to accumulate quickly in empty rooms."
    },
    {
        "pos":  "Noun",
        "word":  "Accumulation",
        "translation":  "Birikim, toplama",
        "sentence":  "The accumulation of wealth was not his primary goal."
    },
    {
        "pos":  "Noun",
        "word":  "Accuracy",
        "translation":  "Doğruluk, kesinlik",
        "sentence":  "I cannot guarantee the accuracy of this information."
    },
    {
        "pos":  "Adjective",
        "word":  "Accurate",
        "translation":  "Doğru, kesin",
        "sentence":  "It is important to provide accurate data in your self-evaluation."
    },
    {
        "pos":  "Adverb",
        "word":  "Accurately",
        "translation":  "Doğru bir şekilde, tam olarak",
        "sentence":  "It is difficult to predict the future accurately."
    },
    {
        "pos":  "Noun",
        "word":  "Accusation",
        "translation":  "Suçlama, itham",
        "sentence":  "He denied the accusation of theft made against him."
    },
    {
        "pos":  "Verb",
        "word":  "Accuse",
        "translation":  "Suçlamak",
        "sentence":  "It is not fair to accuse him of the mistake without any proof."
    },
    {
        "pos":  "Noun",
        "word":  "Accused",
        "translation":  "Sanık, suçlanan kişi",
        "sentence":  "The accused was found not guilty by the jury."
    },
    {
        "pos":  "Verb",
        "word":  "Achieve",
        "translation":  "Başarmak, ulaşmak",
        "sentence":  "We hope to achieve a significant reduction in costs this year."
    },
    {
        "pos":  "Noun",
        "word":  "Achievement",
        "translation":  "Başarı",
        "sentence":  "Winning the \"Employee of the Year\" award was a great achievement."
    },
    {
        "pos":  "Noun / Adjective",
        "word":  "Acid",
        "translation":  "Asit / Asitli, keskin",
        "sentence":  "Lemon juice is a natural acid. / He has an acid wit."
    },
    {
        "pos":  "Verb",
        "word":  "Acknowledge",
        "translation":  "Kabul etmek, onaylamak",
        "sentence":  "Please acknowledge receipt of this email as soon as possible."
    },
    {
        "pos":  "Verb",
        "word":  "Acquire",
        "translation":  "Edinmek, kazanmak",
        "sentence":  "The company plans to acquire a smaller firm in the same industry."
    },
    {
        "pos":  "Noun",
        "word":  "Acquisition",
        "translation":  "Edinme, satın alma, kazanım",
        "sentence":  "The museum\u0027s latest acquisition is a rare 18th-century painting."
    },
    {
        "pos":  "Noun",
        "word":  "Acre",
        "translation":  "Dönüm (yaklaşık 4 dönüm), arazi birimi",
        "sentence":  "The farmhouse comes with ten acres of land."
    },
    {
        "pos":  "Prep.",
        "word":  "Across",
        "translation":  "Adv.",
        "sentence":  "Karşısında, boydan boya"
    },
    {
        "pos":  "Verb",
        "word":  "Act",
        "translation":  "Noun",
        "sentence":  "Hareket etmek"
    },
    {
        "pos":  "Noun",
        "word":  "Action",
        "translation":  "Eylem, hareket",
        "sentence":  "The management is taking immediate action to reduce expenses."
    },
    {
        "pos":  "Verb",
        "word":  "Activate",
        "translation":  "Etkinleştirmek, harekete geçirmek",
        "sentence":  "You need to enter a code to activate your new credit card."
    },
    {
        "pos":  "Noun",
        "word":  "Activation",
        "translation":  "Aktivasyon, etkinleştirme",
        "sentence":  "The activation of the security system takes a few seconds."
    },
    {
        "pos":  "Adjective",
        "word":  "Active",
        "translation":  "Aktif",
        "sentence":  "He is an active member of several professional sourcing groups."
    },
    {
        "pos":  "Noun",
        "word":  "Activist",
        "translation":  "Aktivist, eylemci",
        "sentence":  "She is a well-known animal rights activist."
    },
    {
        "pos":  "Noun",
        "word":  "Activity",
        "translation":  "Aktivite, faaliyet",
        "sentence":  "There was a lot of activity in the warehouse this morning."
    },
    {
        "pos":  "Noun",
        "word":  "Actor",
        "translation":  "Erkek oyuncu",
        "sentence":  "My favorite actor is starring in a new movie about a stock market crash."
    },
    {
        "pos":  "Noun",
        "word":  "Actress",
        "translation":  "Kadın oyuncu",
        "sentence":  "She is a very talented actress who has won many international awards."
    },
    {
        "pos":  "Adjective",
        "word":  "Actual",
        "translation":  "Gerçek, asıl",
        "sentence":  "The actual cost was much lower than our initial estimate."
    },
    {
        "pos":  "Adverb",
        "word":  "Actually",
        "translation":  "Aslında",
        "sentence":  "I thought the flight was at 8, but actually, it is at 7:50."
    },
    {
        "pos":  "Adjective",
        "word":  "Acute",
        "translation":  "Keskin, şiddetli, dar (açı)",
        "sentence":  "There is an acute shortage of water in the region."
    },
    {
        "pos":  "Adjective",
        "word":  "Acute",
        "translation":  "Keskin, şiddetli, dar (açı)",
        "sentence":  "The problem of poverty is particularly acute in rural areas."
    },
    {
        "pos":  "Noun",
        "word":  "Ad",
        "translation":  "İlan, reklam",
        "sentence":  "I saw an ad for a new car financing plan in the newspaper."
    },
    {
        "pos":  "Verb",
        "word":  "Adapt",
        "translation":  "Adapte olmak, uymak",
        "sentence":  "We need to adapt our strategy to the changing market conditions."
    },
    {
        "pos":  "Noun",
        "word":  "Adaptation",
        "translation":  "Adaptasyon, uyum sağlama",
        "sentence":  "The movie is a faithful adaptation of the classic novel."
    },
    {
        "pos":  "Verb",
        "word":  "Add",
        "translation":  "Eklemek",
        "sentence":  "Don\u0027t forget to add the cost of shipping to the total amount."
    },
    {
        "pos":  "Noun",
        "word":  "Addiction",
        "translation":  "Bağımlılık",
        "sentence":  "He is fighting a long-term addiction to nicotine."
    },
    {
        "pos":  "Noun",
        "word":  "Addition",
        "translation":  "İlave, ek",
        "sentence":  "In addition to silver, he is also interested in investing in gold."
    },
    {
        "pos":  "Adjective",
        "word":  "Additional",
        "translation":  "Ek, ilave",
        "sentence":  "We might need additional time to evaluate the alternative firm."
    },
    {
        "pos":  "Adverb",
        "word":  "Additionally",
        "translation":  "Ayrıca, buna ek olarak",
        "sentence":  "The hotel offers free Wi-Fi; additionally, breakfast is included."
    },
    {
        "pos":  "Noun",
        "word":  "Address",
        "translation":  "Verb",
        "sentence":  "Adres"
    },
    {
        "pos":  "Adjective",
        "word":  "Adequate",
        "translation":  "Yeterli, kafi",
        "sentence":  "The old heating system is no longer adequate for this large building."
    },
    {
        "pos":  "Adverb",
        "word":  "Adequately",
        "translation":  "Yeterli bir şekilde",
        "sentence":  "Make sure you are adequately prepared for the exam."
    },
    {
        "pos":  "Verb",
        "word":  "Adhere",
        "translation":  "Bağlı kalmak, yapışmak",
        "sentence":  "All members must adhere to the rules of the club."
    },
    {
        "pos":  "Adjective",
        "word":  "Adjacent",
        "translation":  "Bitişik, komşu",
        "sentence":  "The school is located adjacent to the public library."
    },
    {
        "pos":  "Verb",
        "word":  "Adjust",
        "translation":  "Ayarlamak, alışmak",
        "sentence":  "It took her a while to adjust to the new time zone."
    },
    {
        "pos":  "Noun",
        "word":  "Adjustment",
        "translation":  "Ayarlama, düzeltme, uyum",
        "sentence":  "We made a small adjustment to the plan to save more time."
    },
    {
        "pos":  "Verb",
        "word":  "Administer",
        "translation":  "Yönetmek, (ilaç vb.) vermek",
        "sentence":  "The clinic is authorized to administer vaccines to the public."
    },
    {
        "pos":  "Noun",
        "word":  "Administration",
        "translation":  "Yönetim, idare",
        "sentence":  "The school administration decided to change the exam schedule."
    },
    {
        "pos":  "Adjective",
        "word":  "Administrative",
        "translation":  "İdari, yönetimsel",
        "sentence":  "She has a lot of administrative experience in the healthcare sector."
    },
    {
        "pos":  "Noun",
        "word":  "Administrator",
        "translation":  "Yönetici, idareci",
        "sentence":  "The system administrator is responsible for maintaining the network."
    },
    {
        "pos":  "Verb",
        "word":  "Admire",
        "translation":  "Hayran kalmak",
        "sentence":  "I really admire your dedication to your work over the last five years."
    },
    {
        "pos":  "Noun",
        "word":  "Admission",
        "translation":  "Giriş, kabul, itiraf",
        "sentence":  "Admission to the museum is free on Sundays."
    },
    {
        "pos":  "Verb",
        "word":  "Admit",
        "translation":  "İtiraf etmek, kabul etmek",
        "sentence":  "He had to admit that he made a mistake in the calculation."
    },
    {
        "pos":  "Noun / Adjective",
        "word":  "Adolescent",
        "translation":  "Ergen / Ergenlik dönemine ait",
        "sentence":  "The program is designed to help adolescent children build confidence."
    },
    {
        "pos":  "Verb",
        "word":  "Adopt",
        "translation":  "Evlat edinmek, benimsemek",
        "sentence":  "The company decided to adopt a more sustainable sourcing policy."
    },
    {
        "pos":  "Noun",
        "word":  "Adoption",
        "translation":  "Evlat edinme, benimseme",
        "sentence":  "The adoption of new technology has improved our productivity."
    },
    {
        "pos":  "Noun",
        "word":  "Adult",
        "translation":  "Adj.",
        "sentence":  "Yetişkin"
    },
    {
        "pos":  "N.",
        "word":  "Advance",
        "translation":  "V.",
        "sentence":  "Adj."
    },
    {
        "pos":  "Adjective",
        "word":  "Advanced",
        "translation":  "İleri düzey",
        "sentence":  "She is taking an advanced course in German to improve her skills."
    },
    {
        "pos":  "Noun",
        "word":  "Advantage",
        "translation":  "Avantaj",
        "sentence":  "Being fluent in English is a great advantage in global trade."
    },
    {
        "pos":  "Noun",
        "word":  "Adventure",
        "translation":  "Macera",
        "sentence":  "Traveling to a new country is always an exciting adventure."
    },
    {
        "pos":  "Adjective",
        "word":  "Adverse",
        "translation":  "Olumsuz, zıt, kötü",
        "sentence":  "The flight was canceled due to adverse weather conditions."
    },
    {
        "pos":  "Verb",
        "word":  "Advertise",
        "translation":  "Reklam yapmak",
        "sentence":  "We are planning to advertise our new product on social media."
    },
    {
        "pos":  "Noun",
        "word":  "Advertisement",
        "translation":  "Reklam, ilan",
        "sentence":  "I saw an advertisement for a job opening in the procurement department."
    },
    {
        "pos":  "Noun",
        "word":  "Advertising",
        "translation":  "Reklamcılık",
        "sentence":  "Digital advertising is much more effective than traditional methods."
    },
    {
        "pos":  "Noun",
        "word":  "Advice",
        "translation":  "Tavsiye",
        "sentence":  "Can you give me some advice on which car financing plan to choose?"
    },
    {
        "pos":  "Verb",
        "word":  "Advise",
        "translation":  "Tavsiye vermek",
        "sentence":  "I would advise you to diversify your investment portfolio."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Advocate",
        "translation":  "Savunucu, avukat / Savunmak",
        "sentence":  "She is a strong advocate for women\u0027s rights."
    },
    {
        "pos":  "Adjective",
        "word":  "Aesthetic",
        "translation":  "Estetik",
        "sentence":  "The building was designed with both function and aesthetic in mind."
    },
    {
        "pos":  "Noun",
        "word":  "Affair",
        "translation":  "Mesele, olay, ilişki",
        "sentence":  "The government\u0027s handling of the financial affair was criticized."
    },
    {
        "pos":  "Verb",
        "word":  "Affect",
        "translation":  "Etkilemek",
        "sentence":  "The global metal shortage will affect our production schedule."
    },
    {
        "pos":  "Noun",
        "word":  "Affection",
        "translation":  "Şefkat, sevgi",
        "sentence":  "He felt great affection for his old childhood home."
    },
    {
        "pos":  "Verb",
        "word":  "Afford",
        "translation":  "Parası yetmek, karşılamak",
        "sentence":  "We cannot afford to lose our best supplier right now."
    },
    {
        "pos":  "Adjective",
        "word":  "Affordable",
        "translation":  "Uygun fiyatlı, ekonomik",
        "sentence":  "The company\u0027s goal is to provide affordable housing for everyone."
    },
    {
        "pos":  "Adjective",
        "word":  "Afraid",
        "translation":  "Korkmuş",
        "sentence":  "Don\u0027t be afraid to try new strategies for cost reduction."
    },
    {
        "pos":  "Prep.",
        "word":  "After",
        "translation":  "Conj.",
        "sentence":  "Sonra"
    },
    {
        "pos":  "Noun",
        "word":  "Aftermath",
        "translation":  "(Kötü bir olayın) sonrası, etkileri",
        "sentence":  "Many people were left homeless in the aftermath of the earthquake."
    },
    {
        "pos":  "Noun",
        "word":  "Afternoon",
        "translation":  "Öğleden sonra",
        "sentence":  "I have a meeting with the alternative firm this afternoon."
    },
    {
        "pos":  "Adverb",
        "word":  "Afterward",
        "translation":  "Sonradan, daha sonra",
        "sentence":  "We had a meeting and went to lunch shortly afterward."
    },
    {
        "pos":  "Adverb",
        "word":  "Again",
        "translation":  "Tekrar",
        "sentence":  "Can you please explain the cost-down study to me again?"
    },
    {
        "pos":  "Preposition",
        "word":  "Against",
        "translation":  "-e karşı",
        "sentence":  "We are playing against a very strong team in the next match."
    },
    {
        "pos":  "Noun",
        "word":  "Age",
        "translation":  "Verb",
        "sentence":  "Yaş"
    },
    {
        "pos":  "Adjective",
        "word":  "Aged",
        "translation":  "Yaşında, yaşlı",
        "sentence":  "The program provides social activities for aged members of the community."
    },
    {
        "pos":  "Noun",
        "word":  "Agency",
        "translation":  "Ajans",
        "sentence":  "We hired a marketing agency to promote our children\u0027s channel."
    },
    {
        "pos":  "Noun",
        "word":  "Agenda",
        "translation":  "Gündem",
        "sentence":  "We need to add the cost reduction strategy to the meeting agenda."
    },
    {
        "pos":  "Noun",
        "word":  "Agent",
        "translation":  "Temsilci, ajan",
        "sentence":  "I contacted a real estate agent to look for a new office in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Aggression",
        "translation":  "Saldırganlık",
        "sentence":  "Television violence can lead to increased aggression in children."
    },
    {
        "pos":  "Adjective",
        "word":  "Aggressive",
        "translation":  "Agresif",
        "sentence":  "The company is taking an aggressive approach to market expansion."
    },
    {
        "pos":  "Adverb",
        "word":  "Ago",
        "translation":  "Önce",
        "sentence":  "I started working at this firm exactly four years ago."
    },
    {
        "pos":  "Verb",
        "word":  "Agree",
        "translation":  "Aynı fikirde olmak",
        "sentence":  "We both agree that we need more alternative suppliers."
    },
    {
        "pos":  "Noun",
        "word":  "Agreement",
        "translation":  "Anlaşma",
        "sentence":  "We finally signed a long-term agreement with the new firm."
    },
    {
        "pos":  "Adjective",
        "word":  "Agricultural",
        "translation":  "Tarımsal, zirai",
        "sentence":  "Most of the country\u0027s agricultural land is used for growing wheat."
    },
    {
        "pos":  "Noun",
        "word":  "Agriculture",
        "translation":  "Tarım",
        "sentence":  "Agriculture is the backbone of the region\u0027s economy."
    },
    {
        "pos":  "Exclam.",
        "word":  "Ah",
        "translation":  "Ah, ya (nida)",
        "sentence":  "Ah, now I understand why the flight was canceled."
    },
    {
        "pos":  "Adverb",
        "word":  "Ahead",
        "translation":  "İleride, önünde",
        "sentence":  "We need to plan for the difficult months ahead."
    },
    {
        "pos":  "Noun",
        "word":  "Aid",
        "translation":  "Verb",
        "sentence":  "Yardım"
    },
    {
        "pos":  "Noun",
        "word":  "Aide",
        "translation":  "Yardımcı, asistan",
        "sentence":  "The minister arrived accompanied by a senior political aide."
    },
    {
        "pos":  "Noun",
        "word":  "AIDS",
        "translation":  "AIDS hastalığı",
        "sentence":  "Early diagnosis is crucial in the treatment of AIDS."
    },
    {
        "pos":  "Verb",
        "word":  "Aim",
        "translation":  "Noun",
        "sentence":  "Hedeflemek"
    },
    {
        "pos":  "Noun",
        "word":  "Air",
        "translation":  "Hava",
        "sentence":  "I felt like I needed some fresh air after the long meeting."
    },
    {
        "pos":  "Noun",
        "word":  "Aircraft",
        "translation":  "Hava taşıtı",
        "sentence":  "The airline is adding five new aircraft to its fleet."
    },
    {
        "pos":  "Noun",
        "word":  "Airline",
        "translation":  "Hava yolu şirketi",
        "sentence":  "I called the airline to ask about my rights after the cancellation."
    },
    {
        "pos":  "Noun",
        "word":  "Airport",
        "translation":  "Havalimanı",
        "sentence":  "I arrived at Sabiha Gökçen Airport two hours before my flight."
    },
    {
        "pos":  "Noun",
        "word":  "Alarm",
        "translation":  "Verb",
        "sentence":  "Alarm"
    },
    {
        "pos":  "Noun",
        "word":  "Album",
        "translation":  "Albüm",
        "sentence":  "I am organizing my old photos into a digital album."
    },
    {
        "pos":  "Noun",
        "word":  "Alcohol",
        "translation":  "Alkol",
        "sentence":  "High taxes on alcohol products were discussed in the news."
    },
    {
        "pos":  "Adjective",
        "word":  "Alcoholic",
        "translation":  "Alkollü",
        "sentence":  "The restaurant offers both alcoholic and non-alcoholic beverages."
    },
    {
        "pos":  "Verb / Noun / Adjective",
        "word":  "Alert",
        "translation":  "Uyarmak / Uyarı / Tetikte",
        "sentence":  "The sirens were sounded to alert the residents of the danger."
    },
    {
        "pos":  "Noun / Adjective",
        "word":  "Alien",
        "translation":  "Uzaylı, yabancı / Yabancı, aykırı",
        "sentence":  "The concept of absolute freedom was alien to their culture."
    },
    {
        "pos":  "Verb",
        "word":  "Align",
        "translation":  "Hizalamak, aynı çizgiye getirmek",
        "sentence":  "Make sure to align the text to the left margin."
    },
    {
        "pos":  "Noun",
        "word":  "Alignment",
        "translation":  "Hizalama, iş birliği",
        "sentence":  "The wheels on your car need proper alignment for safety."
    },
    {
        "pos":  "Adverb / Adjective",
        "word":  "Alike",
        "translation":  "Benzer şekilde / Benzer",
        "sentence":  "My father and I are alike in many ways."
    },
    {
        "pos":  "Adjective",
        "word":  "Alive",
        "translation":  "Hayatta, canlı",
        "sentence":  "He felt lucky to be alive after the serious car accident."
    },
    {
        "pos":  "Det.",
        "word":  "All",
        "translation":  "Pron.",
        "sentence":  "Hepsi, tüm"
    },
    {
        "pos":  "Adj.",
        "word":  "All right",
        "translation":  "Adv.",
        "sentence":  "Tamam, peki"
    },
    {
        "pos":  "Noun",
        "word":  "Allegation",
        "translation":  "İddia, suçlama",
        "sentence":  "The company denied the allegation of corruption."
    },
    {
        "pos":  "Verb",
        "word":  "Allege",
        "translation":  "İddia etmek, ileri sürmek",
        "sentence":  "Several witnesses allege that they saw him at the scene."
    },
    {
        "pos":  "Adverb",
        "word":  "Allegedly",
        "translation":  "İddia edilene göre",
        "sentence":  "He was allegedly involved in the bank robbery."
    },
    {
        "pos":  "Noun",
        "word":  "Alliance",
        "translation":  "İttifak, birlik",
        "sentence":  "The two nations formed a military alliance for mutual defense."
    },
    {
        "pos":  "Verb",
        "word":  "Allocate",
        "translation":  "Tahsis etmek, ayırmak",
        "sentence":  "The government decided to allocate more funds to education."
    },
    {
        "pos":  "Noun",
        "word":  "Allocation",
        "translation":  "Paylaştırma, tahsisat",
        "sentence":  "The allocation of resources must be done fairly."
    },
    {
        "pos":  "Verb",
        "word":  "Allow",
        "translation":  "İzin vermek",
        "sentence":  "My schedule doesn\u0027t allow me to take a long vacation right now."
    },
    {
        "pos":  "Noun",
        "word":  "Allowance",
        "translation":  "Ödenek, harçlık, izin",
        "sentence":  "My parents gave me a small weekly allowance when I was a kid."
    },
    {
        "pos":  "Noun",
        "word":  "Ally",
        "translation":  "Müttefik, dost",
        "sentence":  "During the war, the two countries were close allies."
    },
    {
        "pos":  "Adverb",
        "word":  "Almost",
        "translation":  "Neredeyse",
        "sentence":  "The cost-down study is almost finished; we just need the final data."
    },
    {
        "pos":  "Adj.",
        "word":  "Alone",
        "translation":  "Adv.",
        "sentence":  "Yalnız, tek başına"
    },
    {
        "pos":  "Prep.",
        "word":  "Along",
        "translation":  "Adv.",
        "sentence":  "Boyunca"
    },
    {
        "pos":  "Preposition",
        "word":  "Alongside",
        "translation":  "Yanı sıra, yanında",
        "sentence":  "A car pulled up alongside ours at the traffic lights."
    },
    {
        "pos":  "Adverb",
        "word":  "Already",
        "translation":  "Zaten, çoktan",
        "sentence":  "I have already contacted the alternative firm for a quote."
    },
    {
        "pos":  "Adverb",
        "word":  "Also",
        "translation":  "Ayrıca, de",
        "sentence":  "da"
    },
    {
        "pos":  "Verb",
        "word":  "Alter",
        "translation":  "Değiştirmek",
        "sentence":  "We might need to alter our plans if the metal prices keep rising."
    },
    {
        "pos":  "N.",
        "word":  "Alternative",
        "translation":  "Adj.",
        "sentence":  "Alternatif"
    },
    {
        "pos":  "Conj.",
        "word":  "Although",
        "translation":  "-e rağmen",
        "sentence":  "Although the price is higher, the quality is much better."
    },
    {
        "pos":  "Adverb",
        "word":  "Altogether",
        "translation":  "Tamamen, bütünüyle",
        "sentence":  "That is an altogether different matter."
    },
    {
        "pos":  "Noun",
        "word":  "Aluminum",
        "translation":  "Alüminyum",
        "sentence":  "Most soda cans are made of aluminum."
    },
    {
        "pos":  "Adverb",
        "word":  "Always",
        "translation":  "Her zaman",
        "sentence":  "I always double-check the gold holdings calculation."
    },
    {
        "pos":  "Adjective / Noun",
        "word":  "Amateur",
        "translation":  "Amatör",
        "sentence":  "He is an amateur photographer but his work is professional."
    },
    {
        "pos":  "Adjective",
        "word":  "Amazed",
        "translation":  "Şaşırmış",
        "sentence":  "I was amazed by the high level of interest in the new YouTube channel."
    },
    {
        "pos":  "Adjective",
        "word":  "Amazing",
        "translation":  "Şaşırtıcı, harika",
        "sentence":  "The view from the top floor of our office is absolutely amazing."
    },
    {
        "pos":  "Noun",
        "word":  "Ambassador",
        "translation":  "Büyükelçi",
        "sentence":  "She was appointed as the new ambassador to France."
    },
    {
        "pos":  "Noun",
        "word":  "Ambition",
        "translation":  "Hırs, gaye",
        "sentence":  "My ambition is to become a leading expert in strategic sourcing."
    },
    {
        "pos":  "Adjective",
        "word":  "Ambitious",
        "translation":  "Hırslı, azimli",
        "sentence":  "He has an ambitious plan to start his own business."
    },
    {
        "pos":  "Noun",
        "word":  "Ambulance",
        "translation":  "Ambulans",
        "sentence":  "The ambulance arrived within minutes of the accident."
    },
    {
        "pos":  "Verb",
        "word":  "Amend",
        "translation":  "Değiştirmek (kanun, kural vb.), düzeltmek",
        "sentence":  "They voted to amend the constitution last year."
    },
    {
        "pos":  "Noun",
        "word":  "Amendment",
        "translation":  "Değişiklik, yasa değişikliği",
        "sentence":  "The first amendment guarantees freedom of speech."
    },
    {
        "pos":  "Preposition",
        "word":  "Amid",
        "translation":  "Arasında, ortasında",
        "sentence":  "The hotel is located amid beautiful pine forests."
    },
    {
        "pos":  "Preposition",
        "word":  "Among",
        "translation":  "Arasında",
        "sentence":  "This firm is among the top suppliers in the region."
    },
    {
        "pos":  "Noun",
        "word":  "Amount",
        "translation":  "Verb",
        "sentence":  "Miktar"
    },
    {
        "pos":  "Adjective",
        "word":  "Amusing",
        "translation":  "Eğlenceli, komik",
        "sentence":  "I found his stories about his travels very amusing."
    },
    {
        "pos":  "Noun",
        "word":  "Analogy",
        "translation":  "Analoji, benzetme",
        "sentence":  "He drew an analogy between the human brain and a computer."
    },
    {
        "pos":  "Noun",
        "word":  "Analysis",
        "translation":  "Analiz",
        "sentence":  "We need a detailed analysis of the football match for the bets."
    },
    {
        "pos":  "Noun",
        "word":  "Analyst",
        "translation":  "Analist, çözümleyici",
        "sentence":  "She works as a financial analyst for a major bank."
    },
    {
        "pos":  "Verb",
        "word":  "Analyze",
        "translation":  "Analiz etmek",
        "sentence":  "It is important to analyze the market before buying palladium."
    },
    {
        "pos":  "Noun",
        "word":  "Ancestor",
        "translation":  "Ata, soy",
        "sentence":  "My ancestors came from Central Asia many centuries ago."
    },
    {
        "pos":  "Noun",
        "word":  "Anchor",
        "translation":  "Çapa, haber sunucusu",
        "sentence":  "The ship dropped its anchor in the bay."
    },
    {
        "pos":  "Adjective",
        "word":  "Ancient",
        "translation":  "Antik, çok eski",
        "sentence":  "We visited some ancient ruins during our trip to Ephesus."
    },
    {
        "pos":  "Conj.",
        "word":  "And",
        "translation":  "Ve",
        "sentence":  "I need to buy some bread and milk on my way home."
    },
    {
        "pos":  "Noun",
        "word":  "Angel",
        "translation":  "Melek",
        "sentence":  "Be an angel and help me with these heavy bags."
    },
    {
        "pos":  "Noun",
        "word":  "Anger",
        "translation":  "Öfke",
        "sentence":  "He struggled to hide his anger when the contract was rejected."
    },
    {
        "pos":  "Noun",
        "word":  "Angle",
        "translation":  "Açı",
        "sentence":  "The photographer looked for the best angle to take the picture."
    },
    {
        "pos":  "Adjective",
        "word":  "Angry",
        "translation":  "Kızgın",
        "sentence":  "The customer was very angry about the delayed shipment."
    },
    {
        "pos":  "Noun",
        "word":  "Animal",
        "translation":  "Hayvan",
        "sentence":  "The children\u0027s YouTube channel features many talking animals."
    },
    {
        "pos":  "Noun",
        "word":  "Animation",
        "translation":  "Animasyon",
        "sentence":  "Pixar is famous for creating high-quality computer animation."
    },
    {
        "pos":  "Noun",
        "word":  "Ankle",
        "translation":  "Ayak bileği",
        "sentence":  "I twisted my ankle while running in the park yesterday."
    },
    {
        "pos":  "Noun",
        "word":  "Anniversary",
        "translation":  "Yıl dönümü",
        "sentence":  "I am writing a note for my fifth-year work anniversary."
    },
    {
        "pos":  "Verb",
        "word":  "Announce",
        "translation":  "Duyurmak",
        "sentence":  "The company will announce the new bonus system tomorrow."
    },
    {
        "pos":  "Noun",
        "word":  "Announcement",
        "translation":  "Duyuru",
        "sentence":  "I heard an announcement at the airport about the flight delay."
    },
    {
        "pos":  "Verb",
        "word":  "Annoy",
        "translation":  "Rahatsız etmek",
        "sentence":  "It can annoy me when people are late for important meetings."
    },
    {
        "pos":  "Adjective",
        "word":  "Annoyed",
        "translation":  "Rahatsız olmuş",
        "sentence":  "He looked annoyed because his computer kept crashing."
    },
    {
        "pos":  "Adjective",
        "word":  "Annoying",
        "translation":  "Sinir bozucu",
        "sentence":  "The constant noise from the construction site is very annoying."
    },
    {
        "pos":  "Adjective",
        "word":  "Annual",
        "translation":  "Yıllık",
        "sentence":  "We are preparing for the annual performance review in December."
    },
    {
        "pos":  "Adverb",
        "word":  "Annually",
        "translation":  "Yıllık olarak, yılda bir",
        "sentence":  "The film festival is held annually in the summer."
    },
    {
        "pos":  "Adjective",
        "word":  "Anonymous",
        "translation":  "Anonim, gizli",
        "sentence":  "An anonymous donor gave a million dollars to the hospital."
    },
    {
        "pos":  "Det.",
        "word":  "Another",
        "translation":  "Pron.",
        "sentence":  "Başka bir"
    },
    {
        "pos":  "Noun",
        "word":  "Answer",
        "translation":  "Verb",
        "sentence":  "Cevap"
    },
    {
        "pos":  "Verb",
        "word":  "Anticipate",
        "translation":  "Beklemek, ummak, öngörmek",
        "sentence":  "We anticipate that prices will rise next year."
    },
    {
        "pos":  "Noun",
        "word":  "Anxiety",
        "translation":  "Kaygı, endişe",
        "sentence":  "Waiting for the exam results caused her a lot of anxiety."
    },
    {
        "pos":  "Adjective",
        "word":  "Anxious",
        "translation":  "Endişeli",
        "sentence":  "I was a bit anxious about the results of the self-evaluation."
    },
    {
        "pos":  "Det.",
        "word":  "Any",
        "translation":  "Pron.",
        "sentence":  "Hiç, herhangi"
    },
    {
        "pos":  "Pronoun",
        "word":  "Anybody",
        "translation":  "Hiç kimse, herhangi biri",
        "sentence":  "Anybody can join the training session on Wednesday."
    },
    {
        "pos":  "Adverb",
        "word":  "Anymore",
        "translation":  "Artık",
        "sentence":  "We don\u0027t work with that supplier anymore due to quality issues."
    },
    {
        "pos":  "Pronoun",
        "word":  "Anyone",
        "translation":  "Hiç kimse, herhangi biri",
        "sentence":  "Anyone who is interested in the project should contact me."
    },
    {
        "pos":  "Pronoun",
        "word":  "Anything",
        "translation":  "Hiçbir şey, herhangi bir şey",
        "sentence":  "Is there anything else we need to discuss today?"
    },
    {
        "pos":  "Adverb",
        "word":  "Anyway",
        "translation":  "Her neyse",
        "sentence":  "It\u0027s raining, but I\u0027m going to the office anyway."
    },
    {
        "pos":  "Adv.",
        "word":  "Anywhere",
        "translation":  "Pron.",
        "sentence":  "Herhangi bir yer"
    },
    {
        "pos":  "Adverb",
        "word":  "Apart",
        "translation":  "Ayrı",
        "sentence":  "The two offices are about five kilometers apart."
    },
    {
        "pos":  "Noun",
        "word":  "Apartment",
        "translation":  "Daire",
        "sentence":  "He decided to rent a small apartment near the city center."
    },
    {
        "pos":  "Verb",
        "word":  "Apologize",
        "translation":  "Özür dilemek",
        "sentence":  "The manager had to apologize for the error in the report."
    },
    {
        "pos":  "Noun",
        "word":  "Apology",
        "translation":  "Özür",
        "sentence":  "I owe you an apology for being late this morning."
    },
    {
        "pos":  "Noun",
        "word":  "App",
        "translation":  "Uygulama",
        "sentence":  "I use a mobile app to track the value of my gold holdings."
    },
    {
        "pos":  "Noun",
        "word":  "Apparatus",
        "translation":  "Aparat, cihaz, düzenek",
        "sentence":  "Firefighters wear breathing apparatus to enter smoky buildings."
    },
    {
        "pos":  "Noun",
        "word":  "Apparel",
        "translation":  "Kılık kıyafet, giyim",
        "sentence":  "The store sells high-end sports apparel."
    },
    {
        "pos":  "Adjective",
        "word":  "Apparent",
        "translation":  "Belirgin, aşikar",
        "sentence":  "The difference in quality between the two samples was apparent."
    },
    {
        "pos":  "Adverb",
        "word":  "Apparently",
        "translation":  "Görünüşe göre",
        "sentence":  "Apparently, the flight was canceled due to bad weather."
    },
    {
        "pos":  "Noun",
        "word":  "Appeal",
        "translation":  "Verb",
        "sentence":  "Başvuru"
    },
    {
        "pos":  "Adjective",
        "word":  "Appealing",
        "translation":  "Çekici, cazip",
        "sentence":  "The idea of working from home is very appealing to me."
    },
    {
        "pos":  "Verb",
        "word":  "Appear",
        "translation":  "Görünmek",
        "sentence":  "New alternative firms appear in the market every year."
    },
    {
        "pos":  "Noun",
        "word":  "Appearance",
        "translation":  "Görünüş",
        "sentence":  "The appearance of the final product is very important to customers."
    },
    {
        "pos":  "Noun",
        "word":  "Appetite",
        "translation":  "İştah",
        "sentence":  "The long walk in the fresh air gave us a healthy appetite."
    },
    {
        "pos":  "Verb",
        "word":  "Applaud",
        "translation":  "Alkışlamak",
        "sentence":  "The audience began to applaud at the end of the performance."
    },
    {
        "pos":  "Noun",
        "word":  "Apple",
        "translation":  "Elma",
        "sentence":  "I usually have an apple and a handful of nuts for a snack."
    },
    {
        "pos":  "Adjective",
        "word":  "Applicable",
        "translation":  "Uygulanabilir, geçerli",
        "sentence":  "These rules are not applicable to international students."
    },
    {
        "pos":  "Noun",
        "word":  "Applicant",
        "translation":  "Başvuru sahibi, aday",
        "sentence":  "There were over fifty applicants for the job."
    },
    {
        "pos":  "Noun",
        "word":  "Application",
        "translation":  "Uygulama, başvuru",
        "sentence":  "Your application for the senior role is being reviewed."
    },
    {
        "pos":  "Verb",
        "word":  "Apply",
        "translation":  "Başvurmak, uygulamak",
        "sentence":  "You should apply for a refund for the canceled flight."
    },
    {
        "pos":  "Verb",
        "word":  "Appoint",
        "translation":  "Atamak, görevlendirmek",
        "sentence":  "The committee will appoint a new chairperson tomorrow."
    },
    {
        "pos":  "Noun",
        "word":  "Appointment",
        "translation":  "Randevu",
        "sentence":  "I have an appointment with the dentist at 4 PM."
    },
    {
        "pos":  "Verb",
        "word":  "Appreciate",
        "translation":  "Takdir etmek",
        "sentence":  "I really appreciate your help with the English vocabulary list."
    },
    {
        "pos":  "Noun",
        "word":  "Appreciation",
        "translation":  "Takdir, minnettarlık, değer artışı",
        "sentence":  "I’d like to express my appreciation for all your hard work."
    },
    {
        "pos":  "Noun",
        "word":  "Approach",
        "translation":  "Verb",
        "sentence":  "Yaklaşım"
    },
    {
        "pos":  "Adjective",
        "word":  "Appropriate",
        "translation":  "Uygun",
        "sentence":  "Please wear appropriate clothes for the factory visit."
    },
    {
        "pos":  "Adverb",
        "word":  "Appropriately",
        "translation":  "Uygun bir şekilde",
        "sentence":  "Please ensure you are dressed appropriately for the interview."
    },
    {
        "pos":  "Noun",
        "word":  "Approval",
        "translation":  "Onay",
        "sentence":  "We are still waiting for the manager\u0027s approval for the project."
    },
    {
        "pos":  "Verb",
        "word":  "Approve",
        "translation":  "Onaylamak",
        "sentence":  "The board decided to approve the cost-down budget."
    },
    {
        "pos":  "Adverb",
        "word":  "Approximately",
        "translation":  "Yaklaşık olarak",
        "sentence":  "The total weight is approximately 180 grams."
    },
    {
        "pos":  "Noun",
        "word":  "April",
        "translation":  "Nisan",
        "sentence":  "Today is Monday, April 27, 2026."
    },
    {
        "pos":  "Adjective",
        "word":  "Arbitrary",
        "translation":  "Keyfi",
        "sentence":  "The decision to close the park seemed completely arbitrary."
    },
    {
        "pos":  "Noun",
        "word":  "Architect",
        "translation":  "Mimar",
        "sentence":  "The architect designed a very modern and sustainable office."
    },
    {
        "pos":  "Adjective",
        "word":  "Architectural",
        "translation":  "Mimari",
        "sentence":  "The city is famous for its diverse architectural styles."
    },
    {
        "pos":  "Noun",
        "word":  "Architecture",
        "translation":  "Mimari",
        "sentence":  "I really like the historical architecture of the old buildings in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Archive",
        "translation":  "Arşiv",
        "sentence":  "You can find the old records in the national archive."
    },
    {
        "pos":  "Noun",
        "word":  "Area",
        "translation":  "Alan, bölge",
        "sentence":  "We are looking for alternative suppliers in the local area."
    },
    {
        "pos":  "Noun",
        "word":  "Arena",
        "translation":  "Arena, saha, alan",
        "sentence":  "The rock concert was held in a large indoor arena."
    },
    {
        "pos":  "Verb",
        "word":  "Argue",
        "translation":  "Tartışmak",
        "sentence":  "They started to argue about the terms of the contract."
    },
    {
        "pos":  "Noun",
        "word":  "Argument",
        "translation":  "Tartışma, argüman",
        "sentence":  "His main argument for cost reduction was very convincing."
    },
    {
        "pos":  "Verb",
        "word":  "Arise",
        "translation":  "Ortaya çıkmak",
        "sentence":  "Problems can arise if we don\u0027t communicate clearly with suppliers."
    },
    {
        "pos":  "Verb",
        "word":  "Arm",
        "translation":  "Silahlandırmak",
        "sentence":  "The soldiers were told to arm themselves before the mission."
    },
    {
        "pos":  "Noun",
        "word":  "Arm",
        "translation":  "Kol",
        "sentence":  "He hurt his arm while carrying heavy boxes in the warehouse."
    },
    {
        "pos":  "Adjective",
        "word":  "Armed",
        "translation":  "Silahlı",
        "sentence":  "The bank is protected by several armed security guards."
    },
    {
        "pos":  "Noun",
        "word":  "Arms",
        "translation":  "Silahlar",
        "sentence":  "The international treaty aims to reduce the trade of arms."
    },
    {
        "pos":  "Noun",
        "word":  "Army",
        "translation":  "Ordu",
        "sentence":  "He served in the army for six months after university."
    },
    {
        "pos":  "Prep.",
        "word":  "Around",
        "translation":  "Adv.",
        "sentence":  "Etrafında, yaklaşık"
    },
    {
        "pos":  "Verb",
        "word":  "Arrange",
        "translation":  "Düzenlemek",
        "sentence":  "Can you arrange a meeting with the strategic sourcing team?"
    },
    {
        "pos":  "Noun",
        "word":  "Arrangement",
        "translation":  "Düzenleme",
        "sentence":  "We made a special arrangement for the delivery of the metals."
    },
    {
        "pos":  "Noun",
        "word":  "Array",
        "translation":  "Seri, dizi, çokluk",
        "sentence":  "The shop offers a wide array of organic vegetables."
    },
    {
        "pos":  "Verb",
        "word":  "Arrest",
        "translation":  "Noun",
        "sentence":  "Tutuklamak"
    },
    {
        "pos":  "Noun",
        "word":  "Arrival",
        "translation":  "Varış",
        "sentence":  "The estimated time of arrival for the cargo is 3 PM."
    },
    {
        "pos":  "Verb",
        "word":  "Arrive",
        "translation":  "Varmak",
        "sentence":  "What time did you arrive at the office this morning?"
    },
    {
        "pos":  "Noun",
        "word":  "Arrow",
        "translation":  "Ok",
        "sentence":  "Follow the arrows to find the exit."
    },
    {
        "pos":  "Noun",
        "word":  "Art",
        "translation":  "Sanat",
        "sentence":  "She is very interested in modern art and digital design."
    },
    {
        "pos":  "Noun",
        "word":  "Article",
        "translation":  "Makale, eşya",
        "sentence":  "I read an interesting article about silver investment trends."
    },
    {
        "pos":  "Verb",
        "word":  "Articulate",
        "translation":  "Kendini net ifade etmek, telaffuz etmek",
        "sentence":  "She is highly intelligent and can articulate her ideas clearly."
    },
    {
        "pos":  "Adjective",
        "word":  "Artificial",
        "translation":  "Yapay",
        "sentence":  "Some manufacturers use artificial materials to reduce costs."
    },
    {
        "pos":  "Noun",
        "word":  "Artist",
        "translation":  "Sanatçı",
        "sentence":  "The children\u0027s book was illustrated by a famous artist."
    },
    {
        "pos":  "Adjective",
        "word":  "Artistic",
        "translation":  "Sanatsal",
        "sentence":  "She has a very artistic eye for digital content creation."
    },
    {
        "pos":  "Noun",
        "word":  "Artwork",
        "translation":  "Sanat eseri",
        "sentence":  "The walls of the gallery were covered with modern artwork."
    },
    {
        "pos":  "Prep.",
        "word":  "As",
        "translation":  "Adv.",
        "sentence":  "Olarak, gibi"
    },
    {
        "pos":  "Noun",
        "word":  "Ash",
        "translation":  "Kül",
        "sentence":  "The volcano erupted, covering the village in grey ash."
    },
    {
        "pos":  "Adjective",
        "word":  "Ashamed",
        "translation":  "Utanmış",
        "sentence":  "You shouldn\u0027t be ashamed of making a mistake in a new language."
    },
    {
        "pos":  "Adverb",
        "word":  "Aside",
        "translation":  "Kenara, bir yana",
        "sentence":  "All jokes aside, we really need to focus on this project."
    },
    {
        "pos":  "Verb",
        "word":  "Ask",
        "translation":  "Sormak, istemek",
        "sentence":  "I need to ask my supervisor about the car financing options."
    },
    {
        "pos":  "Adjective",
        "word":  "Asleep",
        "translation":  "Uykuda",
        "sentence":  "The baby was fast asleep in the crib when I arrived."
    },
    {
        "pos":  "Noun",
        "word":  "Aspect",
        "translation":  "Yön, açı",
        "sentence":  "Cost is only one aspect of the supplier evaluation process."
    },
    {
        "pos":  "Noun",
        "word":  "Aspiration",
        "translation":  "Büyük amaç, arzu, soluma",
        "sentence":  "She has aspirations to become a world-class violinist."
    },
    {
        "pos":  "Verb",
        "word":  "Aspire",
        "translation":  "Çok istemek, can atmak",
        "sentence":  "Many young people aspire to be famous influencers."
    },
    {
        "pos":  "Noun",
        "word":  "Assassination",
        "translation":  "Suikast",
        "sentence":  "The assassination of the president shocked the nation."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Assault",
        "translation":  "Saldırı / Saldırmak",
        "sentence":  "He was charged with sexual assault."
    },
    {
        "pos":  "Verb",
        "word":  "Assemble",
        "translation":  "Bir araya getirmek, monte etmek",
        "sentence":  "It took me four hours to assemble the new bookshelf."
    },
    {
        "pos":  "Noun",
        "word":  "Assembly",
        "translation":  "Meclis, toplantı, montaj",
        "sentence":  "The school holds a general assembly every Monday morning."
    },
    {
        "pos":  "Verb",
        "word":  "Assert",
        "translation":  "İleri sürmek, iddia etmek, güvenle belirtmek",
        "sentence":  "She continued to assert her innocence despite the evidence."
    },
    {
        "pos":  "Noun",
        "word":  "Assertion",
        "translation":  "İddia, tez",
        "sentence":  "I don\u0027t agree with his assertion that technology always improves lives."
    },
    {
        "pos":  "Verb",
        "word":  "Assess",
        "translation":  "Değerlendirmek",
        "sentence":  "We need to assess the risks of switching to a new supplier."
    },
    {
        "pos":  "Noun",
        "word":  "Assessment",
        "translation":  "Değerlendirme",
        "sentence":  "The annual performance assessment will take place next month."
    },
    {
        "pos":  "Noun",
        "word":  "Asset",
        "translation":  "Varlık, değer, koz",
        "sentence":  "Her ability to speak three languages is a great asset to the company."
    },
    {
        "pos":  "Verb",
        "word":  "Assign",
        "translation":  "Atamak, görevlendirmek",
        "sentence":  "The teacher will assign a different project to each student."
    },
    {
        "pos":  "Noun",
        "word":  "Assignment",
        "translation":  "Görev, ödev",
        "sentence":  "My first assignment at the firm was to track raw material prices."
    },
    {
        "pos":  "Verb",
        "word":  "Assist",
        "translation":  "Yardım etmek",
        "sentence":  "I would be happy to assist you with the translation of the terms."
    },
    {
        "pos":  "Noun",
        "word":  "Assistance",
        "translation":  "Yardım, destek",
        "sentence":  "Do you require any financial assistance with your university fees?"
    },
    {
        "pos":  "N.",
        "word":  "Assistant",
        "translation":  "Adj.",
        "sentence":  "Asistan, yardımcı"
    },
    {
        "pos":  "Verb",
        "word":  "Associate",
        "translation":  "İlişkilendirmek",
        "sentence":  "People often associate gold with wealth and stability."
    },
    {
        "pos":  "Adjective",
        "word":  "Associated",
        "translation":  "İlişkili",
        "sentence":  "There are several risks associated with alternative raw materials."
    },
    {
        "pos":  "Noun",
        "word":  "Association",
        "translation":  "Dernek, kurum",
        "sentence":  "He is a member of the local business association in İzmir."
    },
    {
        "pos":  "Verb",
        "word":  "Assume",
        "translation":  "Varsaymak",
        "sentence":  "Don\u0027t assume that the cheapest supplier is always the best."
    },
    {
        "pos":  "Noun",
        "word":  "Assumption",
        "translation":  "Varsayım",
        "sentence":  "We are working on the assumption that the economy will improve."
    },
    {
        "pos":  "Noun",
        "word":  "Assurance",
        "translation":  "Güvence, teminat",
        "sentence":  "He gave me his personal assurance that the vehicle was safe."
    },
    {
        "pos":  "Verb",
        "word":  "Assure",
        "translation":  "Güvence vermek, temin etmek",
        "sentence":  "I can assure you that your secret is safe with me."
    },
    {
        "pos":  "Adjective",
        "word":  "Astonishing",
        "translation":  "Şaşırtıcı, hayret verici",
        "sentence":  "The team made an astonishing recovery in the second half of the game."
    },
    {
        "pos":  "Noun",
        "word":  "Asylum",
        "translation":  "Sığınma, barınak",
        "sentence":  "The refugees are seeking political asylum in the neighboring country."
    },
    {
        "pos":  "Preposition",
        "word":  "At",
        "translation":  "-de, -da",
        "sentence":  "I will be at the office until 6 PM today."
    },
    {
        "pos":  "Noun",
        "word":  "Athlete",
        "translation":  "Atlet, sporcu",
        "sentence":  "He is a professional athlete who trains six days a week."
    },
    {
        "pos":  "Adjective",
        "word":  "Athletic",
        "translation":  "Atletik, sportif",
        "sentence":  "He has a very athletic build because he swims every day."
    },
    {
        "pos":  "Noun",
        "word":  "Atmosphere",
        "translation":  "Atmosfer",
        "sentence":  "The office has a very friendly and collaborative atmosphere."
    },
    {
        "pos":  "Noun",
        "word":  "Atrocity",
        "translation":  "Vahşet, gaddarlık",
        "sentence":  "The war was marked by numerous atrocities committed against civilians."
    },
    {
        "pos":  "Verb",
        "word":  "Attach",
        "translation":  "Eklemek (dosya vb.)",
        "sentence":  "Please attach the price list to your next email."
    },
    {
        "pos":  "Noun",
        "word":  "Attachment",
        "translation":  "Ek, bağlılık",
        "sentence":  "Please see the file in the attachment for more details."
    },
    {
        "pos":  "Noun",
        "word":  "Attack",
        "translation":  "Verb",
        "sentence":  "Saldırı"
    },
    {
        "pos":  "Verb",
        "word":  "Attain",
        "translation":  "Elde etmek, ulaşmak",
        "sentence":  "She worked hard to attain her goal of becoming a doctor."
    },
    {
        "pos":  "Noun",
        "word":  "Attempt",
        "translation":  "Verb",
        "sentence":  "Girişim"
    },
    {
        "pos":  "Verb",
        "word":  "Attend",
        "translation":  "Katılmak",
        "sentence":  "I plan to attend the sourcing conference in Istanbul."
    },
    {
        "pos":  "Noun",
        "word":  "Attendance",
        "translation":  "Katılım, devamlılık",
        "sentence":  "Attendance at the seminar is mandatory for all staff members."
    },
    {
        "pos":  "Noun",
        "word":  "Attention",
        "translation":  "Dikkat",
        "sentence":  "Please pay close attention to the details of the contract."
    },
    {
        "pos":  "Noun",
        "word":  "Attitude",
        "translation":  "Tavır, tutum",
        "sentence":  "Having a positive attitude is key to success in any job."
    },
    {
        "pos":  "Noun",
        "word":  "Attorney",
        "translation":  "Avukat",
        "sentence":  "Our company attorney is reviewing the new supplier agreement."
    },
    {
        "pos":  "Verb",
        "word":  "Attract",
        "translation":  "Cezbetmek",
        "sentence":  "The high interest rates are trying to attract new investors."
    },
    {
        "pos":  "Noun",
        "word":  "Attraction",
        "translation":  "Cazibe, çekim",
        "sentence":  "The ancient city is a major tourist attraction in the region."
    },
    {
        "pos":  "Adjective",
        "word":  "Attractive",
        "translation":  "Çekici",
        "sentence":  "The new investment plan looks very attractive on paper."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Attribute",
        "translation":  "Atfetmek, bağlamak / Özellik",
        "sentence":  "He attributes his success to hard work and a bit of luck."
    },
    {
        "pos":  "Noun",
        "word":  "Auction",
        "translation":  "Açık artırma",
        "sentence":  "The rare painting was sold for millions at a London auction."
    },
    {
        "pos":  "Noun",
        "word":  "Audience",
        "translation":  "İzleyici, kitle",
        "sentence":  "Our target audience for the channel is children aged 2 to 6."
    },
    {
        "pos":  "Adjective",
        "word":  "Audio",
        "translation":  "Ses, işitsel",
        "sentence":  "The laptop\u0027s audio quality is not very good for listening to music."
    },
    {
        "pos":  "Noun",
        "word":  "Audit",
        "translation":  "Denetim, teftiş",
        "sentence":  "The company undergoes an annual financial audit."
    },
    {
        "pos":  "Noun",
        "word":  "August",
        "translation":  "Ağustos",
        "sentence":  "We are planning a short vacation to the coast in August."
    },
    {
        "pos":  "Noun",
        "word":  "Aunt",
        "translation":  "Teyze, hala",
        "sentence":  "My aunt lives in a beautiful house overlooking the sea."
    },
    {
        "pos":  "Adjective",
        "word":  "Authentic",
        "translation":  "Otantik, gerçek, güvenilir",
        "sentence":  "We found a small restaurant that serves authentic Italian food."
    },
    {
        "pos":  "Noun",
        "word":  "Author",
        "translation":  "Yazar",
        "sentence":  "I read a book by an author who specializes in asset management."
    },
    {
        "pos":  "Noun",
        "word":  "Authority",
        "translation":  "Otorite, yetki",
        "sentence":  "He has the authority to approve small cost-down projects."
    },
    {
        "pos":  "Verb",
        "word":  "Authorize",
        "translation":  "Yetki vermek, izin vermek",
        "sentence":  "Only the manager can authorize such a large expenditure."
    },
    {
        "pos":  "Noun",
        "word":  "Auto",
        "translation":  "Oto, otomobil",
        "sentence":  "The city is trying to reduce the number of autos in the center."
    },
    {
        "pos":  "Adjective",
        "word":  "Automatic",
        "translation":  "Otomatik",
        "sentence":  "The new car has an automatic transmission for easier driving."
    },
    {
        "pos":  "Adverb",
        "word":  "Automatically",
        "translation":  "Otomatik olarak",
        "sentence":  "The system automatically updates the price of silver every hour."
    },
    {
        "pos":  "Noun",
        "word":  "Autonomy",
        "translation":  "Özerklik, otonomi",
        "sentence":  "The regional government is demanding more autonomy from the state."
    },
    {
        "pos":  "Noun",
        "word":  "Autumn",
        "translation":  "Sonbahar",
        "sentence":  "The leaves turn beautiful shades of red and gold in autumn."
    },
    {
        "pos":  "Noun",
        "word":  "Availability",
        "translation":  "Müsaitlik, mevcudiyet",
        "sentence":  "Please check the availability of rooms before you book your flight."
    },
    {
        "pos":  "Adjective",
        "word":  "Available",
        "translation":  "Mevcut, müsait",
        "sentence":  "Is the manager available for a brief chat this morning?"
    },
    {
        "pos":  "Adj.",
        "word":  "Average",
        "translation":  "N.",
        "sentence":  "V."
    },
    {
        "pos":  "Verb",
        "word":  "Avoid",
        "translation":  "Kaçınmak",
        "sentence":  "We should avoid working with firms that have a bad reputation."
    },
    {
        "pos":  "Verb",
        "word":  "Await",
        "translation":  "Beklemek",
        "sentence":  "We eagerly await your reply to our invitation."
    },
    {
        "pos":  "Noun",
        "word":  "Award",
        "translation":  "Verb",
        "sentence":  "Ödül"
    },
    {
        "pos":  "Adjective",
        "word":  "Aware",
        "translation":  "Farkında",
        "sentence":  "Are you aware of the latest changes in the tax laws?"
    },
    {
        "pos":  "Noun",
        "word":  "Awareness",
        "translation":  "Farkındalık",
        "sentence":  "The campaign aims to raise public awareness about climate change."
    },
    {
        "pos":  "Adverb",
        "word":  "Away",
        "translation":  "Uzak",
        "sentence":  "The factory is about thirty kilometers away from the city center."
    },
    {
        "pos":  "Adjective",
        "word":  "Awesome",
        "translation":  "Harika, müthiş",
        "sentence":  "The content you created for the Taboo game was awesome."
    },
    {
        "pos":  "Adjective",
        "word":  "Awful",
        "translation":  "Korkunç",
        "sentence":  "I had an awful experience with a canceled flight last month."
    },
    {
        "pos":  "Adjective",
        "word":  "Awkward",
        "translation":  "Tuhaf, garip, sakar",
        "sentence":  "There was an awkward silence after he asked the question."
    },
    {
        "pos":  "Noun",
        "word":  "Baby",
        "translation":  "Bebek",
        "sentence":  "The baby started to cry as soon as the plane took off."
    },
    {
        "pos":  "N.",
        "word":  "Back",
        "translation":  "Adv.",
        "sentence":  "V."
    },
    {
        "pos":  "Noun",
        "word":  "Backdrop",
        "translation":  "Arka plan, fon",
        "sentence":  "The mountains provided a stunning backdrop for the wedding photos."
    },
    {
        "pos":  "Noun",
        "word":  "Background",
        "translation":  "Arka plan, geçmiş",
        "sentence":  "He has a strong background in strategic sourcing and procurement."
    },
    {
        "pos":  "Noun",
        "word":  "Backing",
        "translation":  "Destek, arka çıkma",
        "sentence":  "The project has the full financial backing of the government."
    },
    {
        "pos":  "Noun",
        "word":  "Backup",
        "translation":  "Yedek",
        "sentence":  "Always keep a backup of your important digital files."
    },
    {
        "pos":  "Adverb",
        "word":  "Backward",
        "translation":  "Geriye doğru",
        "sentence":  "He took a step backward to get a better view of the painting."
    },
    {
        "pos":  "Noun",
        "word":  "Bacteria",
        "translation":  "Bakteri",
        "sentence":  "You should wash your hands frequently to avoid harmful bacteria."
    },
    {
        "pos":  "Adjective",
        "word":  "Bad",
        "translation":  "Kötü",
        "sentence":  "A bad start to the day can affect your productivity."
    },
    {
        "pos":  "Noun",
        "word":  "Badge",
        "translation":  "Rozet, yaka kartı",
        "sentence":  "All employees must wear their security badges at all times."
    },
    {
        "pos":  "Adverb",
        "word":  "Badly",
        "translation":  "Kötü bir şekilde",
        "sentence":  "The shipment was badly damaged during transportation."
    },
    {
        "pos":  "Noun",
        "word":  "Bag",
        "translation":  "Çanta",
        "sentence":  "I put my laptop and some documents in my work bag."
    },
    {
        "pos":  "Noun",
        "word":  "Bail",
        "translation":  "Kefalet",
        "sentence":  "The judge set the bail at fifty thousand dollars."
    },
    {
        "pos":  "Verb",
        "word":  "Bake",
        "translation":  "Fırında pişirmek",
        "sentence":  "I like to bake fresh cookies for my colleagues on Fridays."
    },
    {
        "pos":  "Noun",
        "word":  "Balance",
        "translation":  "Verb",
        "sentence":  "Denge"
    },
    {
        "pos":  "Adjective",
        "word":  "Balanced",
        "translation":  "Dengeli",
        "sentence":  "A balanced diet is essential for maintaining good health."
    },
    {
        "pos":  "Noun",
        "word":  "Ball",
        "translation":  "Top",
        "sentence":  "The kids were playing with a colorful ball in the park."
    },
    {
        "pos":  "Noun",
        "word":  "Ballet",
        "translation":  "Bale",
        "sentence":  "She has been practicing ballet since she was five years old."
    },
    {
        "pos":  "Noun",
        "word":  "Balloon",
        "translation":  "Balon",
        "sentence":  "The children were delighted with the colorful balloons at the party."
    },
    {
        "pos":  "Noun",
        "word":  "Ballot",
        "translation":  "Oy pusulası, oylama",
        "sentence":  "The winners will be chosen by a secret ballot."
    },
    {
        "pos":  "Verb",
        "word":  "Ban",
        "translation":  "Noun",
        "sentence":  "Yasaklamak"
    },
    {
        "pos":  "Noun",
        "word":  "Banana",
        "translation":  "Muz",
        "sentence":  "I added a sliced banana to my bowl of cereal this morning."
    },
    {
        "pos":  "Noun",
        "word":  "Band",
        "translation":  "Grup (müzik), bant",
        "sentence":  "He used to play the guitar in a rock band during college."
    },
    {
        "pos":  "Noun",
        "word":  "Bank (Money)",
        "translation":  "Banka",
        "sentence":  "I need to go to the bank to transfer some money for the car."
    },
    {
        "pos":  "Noun",
        "word":  "Bank (River)",
        "translation":  "Nehir kıyısı",
        "sentence":  "We sat on the bank of the river and watched the sunset."
    },
    {
        "pos":  "Noun",
        "word":  "Bankruptcy",
        "translation":  "İflas",
        "sentence":  "The company filed for bankruptcy after a year of heavy losses."
    },
    {
        "pos":  "Noun",
        "word":  "Banner",
        "translation":  "Afiş, pankart",
        "sentence":  "Supporters held up a large banner with the team\u0027s logo."
    },
    {
        "pos":  "Noun",
        "word":  "Bar",
        "translation":  "Verb",
        "sentence":  "Bar, engel"
    },
    {
        "pos":  "Adjective",
        "word":  "Bare",
        "translation":  "Çıplak, boş, sade",
        "sentence":  "The room looked very bare without any furniture."
    },
    {
        "pos":  "Adverb",
        "word":  "Barely",
        "translation":  "Zar zor, ancak",
        "sentence":  "We had barely started the hike when it began to rain."
    },
    {
        "pos":  "Noun",
        "word":  "Bargain",
        "translation":  "Pazarlık, kelepir",
        "sentence":  "At that price, the new car is a real bargain."
    },
    {
        "pos":  "Noun",
        "word":  "Barrel",
        "translation":  "Varil, namlu",
        "sentence":  "The oil price is measured per barrel."
    },
    {
        "pos":  "Noun",
        "word":  "Barrier",
        "translation":  "Bariyer, engel",
        "sentence":  "Language can be a barrier when negotiating with foreign firms."
    },
    {
        "pos":  "Noun",
        "word":  "Base",
        "translation":  "Verb",
        "sentence":  "Temel, üs"
    },
    {
        "pos":  "Noun",
        "word":  "Baseball",
        "translation":  "Beyzbol",
        "sentence":  "Baseball is not a very popular sport in our country."
    },
    {
        "pos":  "Adjective",
        "word":  "Based",
        "translation":  "Dayalı, bazlı",
        "sentence":  "The cost reduction plan is based on our latest market analysis."
    },
    {
        "pos":  "Noun",
        "word":  "Basement",
        "translation":  "Bodrum katı",
        "sentence":  "We store all our old Christmas decorations in the basement."
    },
    {
        "pos":  "Adjective",
        "word":  "Basic",
        "translation":  "Temel",
        "sentence":  "Having basic knowledge of German is helpful for our exports."
    },
    {
        "pos":  "Adverb",
        "word":  "Basically",
        "translation":  "Temelde, aslında",
        "sentence":  "Basically, we need to find a way to lower our raw material costs."
    },
    {
        "pos":  "Noun",
        "word":  "Basis",
        "translation":  "Temel, esas",
        "sentence":  "We evaluate our suppliers on a regular basis."
    },
    {
        "pos":  "Noun",
        "word":  "Basket",
        "translation":  "Sepet",
        "sentence":  "She filled her basket with fresh fruit from the market."
    },
    {
        "pos":  "Noun",
        "word":  "Basketball",
        "translation":  "Basketbol",
        "sentence":  "My favorite match to watch is a high-energy basketball game."
    },
    {
        "pos":  "Noun",
        "word":  "Bass",
        "translation":  "Bas (ses/enstrüman)",
        "sentence":  "The loud bass from the speakers made the floor vibrate."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Bat",
        "translation":  "Yarasa, sopa / Vurmak",
        "sentence":  "He hit the ball with the baseball bat."
    },
    {
        "pos":  "Noun",
        "word":  "Bath",
        "translation":  "Banyo",
        "sentence":  "I decided to take a warm bath to relax after a long day."
    },
    {
        "pos":  "Noun",
        "word":  "Bathroom",
        "translation":  "Banyo, tuvalet",
        "sentence":  "Excuse me, where is the nearest bathroom in this terminal?"
    },
    {
        "pos":  "Noun",
        "word":  "Battery",
        "translation":  "Pil, batarya",
        "sentence":  "My phone\u0027s battery died while I was waiting for the flight."
    },
    {
        "pos":  "Noun",
        "word":  "Battle",
        "translation":  "Verb",
        "sentence":  "Savaş"
    },
    {
        "pos":  "Noun",
        "word":  "Battlefield",
        "translation":  "Savaş alanı",
        "sentence":  "The soldiers fought bravely on the battlefield."
    },
    {
        "pos":  "Noun",
        "word":  "Bay",
        "translation":  "Körfez",
        "sentence":  "The hotel overlooks a beautiful quiet bay."
    },
    {
        "pos":  "Verb",
        "word":  "Be",
        "translation":  "Olmak",
        "sentence":  "I want to be a successful manager in the future."
    },
    {
        "pos":  "Noun",
        "word":  "Beach",
        "translation":  "Plaj",
        "sentence":  "We spent the whole afternoon relaxing on the beach."
    },
    {
        "pos":  "Noun",
        "word":  "Beam",
        "translation":  "Kiriş, ışın",
        "sentence":  "A beam of sunlight shone through the window."
    },
    {
        "pos":  "Noun",
        "word":  "Bean",
        "translation":  "Fasulye",
        "sentence":  "I added some green beans to the salad for extra nutrition."
    },
    {
        "pos":  "Noun",
        "word":  "Bear (Animal)",
        "translation":  "Ayı",
        "sentence":  "The children\u0027s story is about a friendly bear living in the forest."
    },
    {
        "pos":  "Verb",
        "word":  "Bear (Deal with)",
        "translation":  "Katlanmak",
        "sentence":  "It was difficult to bear the heat in the warehouse today."
    },
    {
        "pos":  "Noun",
        "word":  "Beast",
        "translation":  "Canavar, hayvan",
        "sentence":  "The lion is often called the king of beasts."
    },
    {
        "pos":  "Verb",
        "word":  "Beat",
        "translation":  "Noun",
        "sentence":  "Yenmek"
    },
    {
        "pos":  "Adjective",
        "word":  "Beautiful",
        "translation":  "Güzel",
        "sentence":  "İzmir is a beautiful city with a lot of history and culture."
    },
    {
        "pos":  "Noun",
        "word":  "Beauty",
        "translation":  "Güzellik",
        "sentence":  "The beauty of this strategy is its simplicity and effectiveness."
    },
    {
        "pos":  "Conjunction",
        "word":  "Because",
        "translation":  "Çünkü",
        "sentence":  "I am learning German because it is useful for my career."
    },
    {
        "pos":  "Verb",
        "word":  "Become",
        "translation":  "Olmak, haline gelmek",
        "sentence":  "He hopes to become a senior sourcing manager in the next two years."
    },
    {
        "pos":  "Noun",
        "word":  "Bed",
        "translation":  "Yatak",
        "sentence":  "I was so tired that I went straight to bed after work."
    },
    {
        "pos":  "Noun",
        "word":  "Bedroom",
        "translation":  "Yatak odası",
        "sentence":  "The apartment has two bedrooms and a large living room."
    },
    {
        "pos":  "Noun",
        "word":  "Bee",
        "translation":  "Arı",
        "sentence":  "A small bee was buzzing around the flowers in the garden."
    },
    {
        "pos":  "Noun",
        "word":  "Beef",
        "translation":  "Sığır eti",
        "sentence":  "We had a delicious beef stew for dinner last night."
    },
    {
        "pos":  "Noun",
        "word":  "Beer",
        "translation":  "Bira",
        "sentence":  "He ordered a cold beer to relax after a long day at the office."
    },
    {
        "pos":  "Prep.",
        "word":  "Before",
        "translation":  "Conj.",
        "sentence":  "Önce"
    },
    {
        "pos":  "Verb",
        "word":  "Beg",
        "translation":  "Yalvarmak",
        "sentence":  "I had to beg my supervisor for an extension on the project deadline."
    },
    {
        "pos":  "Verb",
        "word":  "Begin",
        "translation":  "Başlamak",
        "sentence":  "We will begin the sourcing process for alternative materials next week."
    },
    {
        "pos":  "Noun",
        "word":  "Beginning",
        "translation":  "Başlangıç",
        "sentence":  "At the beginning of my career, I focused on basic supplier management."
    },
    {
        "pos":  "Noun",
        "word":  "Behalf",
        "translation":  "Adına, namına",
        "sentence":  "I am writing to you on behalf of my client."
    },
    {
        "pos":  "Verb",
        "word":  "Behave",
        "translation":  "Davranmak",
        "sentence":  "It is important to behave professionally during negotiations with firms."
    },
    {
        "pos":  "Noun",
        "word":  "Behavior",
        "translation":  "Davranış",
        "sentence":  "The market\u0027s behavior regarding silver prices has been quite unpredictable."
    },
    {
        "pos":  "Adjective",
        "word":  "Behavioral",
        "translation":  "Davranışsal",
        "sentence":  "The researchers are studying behavioral patterns in monkeys."
    },
    {
        "pos":  "Prep.",
        "word":  "Behind",
        "translation":  "Adv.",
        "sentence":  "Arkasında"
    },
    {
        "pos":  "Noun",
        "word":  "Being",
        "translation":  "Varlık",
        "sentence":  "Every human being deserves to be treated with respect in the workplace."
    },
    {
        "pos":  "Noun",
        "word":  "Belief",
        "translation":  "İnanç",
        "sentence":  "It is my firm belief that we can achieve a 10% cost reduction this year."
    },
    {
        "pos":  "Verb",
        "word":  "Believe",
        "translation":  "İnanmak",
        "sentence":  "Do you believe the price of palladium will continue to rise in 2026?"
    },
    {
        "pos":  "Noun",
        "word":  "Bell",
        "translation":  "Zil",
        "sentence":  "I didn\u0027t hear the door bell because I was focused on the calculation."
    },
    {
        "pos":  "Verb",
        "word":  "Belong",
        "translation":  "Ait olmak",
        "sentence":  "These gold coins belong to my personal investment collection."
    },
    {
        "pos":  "Adjective",
        "word":  "Beloved",
        "translation":  "Sevgili, çok sevilen",
        "sentence":  "The children mourned the death of their beloved dog."
    },
    {
        "pos":  "Adv.",
        "word":  "Below",
        "translation":  "Prep.",
        "sentence":  "Altında"
    },
    {
        "pos":  "Noun",
        "word":  "Belt",
        "translation":  "Kemer, kayış",
        "sentence":  "The mechanic had to replace the fan belt in my car yesterday."
    },
    {
        "pos":  "Noun",
        "word":  "Bench",
        "translation":  "Tezgah, bank",
        "sentence":  "He sat on a park bench and watched the people go by."
    },
    {
        "pos":  "Noun",
        "word":  "Benchmark",
        "translation":  "Kıyaslama noktası, kriter",
        "sentence":  "This new phone will be the benchmark for all future models."
    },
    {
        "pos":  "Verb",
        "word":  "Bend",
        "translation":  "Noun",
        "sentence":  "Bükmek"
    },
    {
        "pos":  "Preposition",
        "word":  "Beneath",
        "translation":  "Altında",
        "sentence":  "The valley lay far beneath us."
    },
    {
        "pos":  "Adjective",
        "word":  "Beneficial",
        "translation":  "Faydalı, yararlı",
        "sentence":  "Regular exercise is extremely beneficial to your health."
    },
    {
        "pos":  "Noun",
        "word":  "Beneficiary",
        "translation":  "Hak sahibi, faydalanan kişi",
        "sentence":  "She is the sole beneficiary of her grandmother\u0027s will."
    },
    {
        "pos":  "Noun",
        "word":  "Benefit",
        "translation":  "Verb",
        "sentence":  "Fayda"
    },
    {
        "pos":  "Adjective",
        "word":  "Bent",
        "translation":  "Eğilmiş, bükülmüş",
        "sentence":  "The bent frame of the bicycle meant it could no longer be used."
    },
    {
        "pos":  "Preposition",
        "word":  "Beside",
        "translation":  "Yanında",
        "sentence":  "Come and sit beside me."
    },
    {
        "pos":  "Preposition / Adverb",
        "word":  "Besides",
        "translation":  "Yanı sıra, zaten",
        "sentence":  "Besides the violin, he also plays the piano."
    },
    {
        "pos":  "Adj.",
        "word":  "Best",
        "translation":  "Adv.",
        "sentence":  "En iyi"
    },
    {
        "pos":  "Verb",
        "word":  "Bet",
        "translation":  "Noun",
        "sentence":  "Bahis oynamak"
    },
    {
        "pos":  "Verb",
        "word":  "Betray",
        "translation":  "İhanet etmek",
        "sentence":  "He promised never to betray his friends."
    },
    {
        "pos":  "Adj.",
        "word":  "Better",
        "translation":  "Adv.",
        "sentence":  "Daha iyi"
    },
    {
        "pos":  "Prep.",
        "word":  "Between",
        "translation":  "Adv.",
        "sentence":  "Arasında"
    },
    {
        "pos":  "Noun",
        "word":  "Beverage",
        "translation":  "İçecek",
        "sentence":  "Hot beverages will be served during the break."
    },
    {
        "pos":  "Prep.",
        "word":  "Beyond",
        "translation":  "Adv.",
        "sentence":  "Ötesinde"
    },
    {
        "pos":  "Noun",
        "word":  "Bias",
        "translation":  "Önyargı, taraf tutma",
        "sentence":  "The news report was criticized for its political bias."
    },
    {
        "pos":  "Noun",
        "word":  "Bicycle",
        "translation":  "Bisiklet",
        "sentence":  "He decided to ride his bicycle to work to save on fuel costs."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Bid",
        "translation":  "Teklif (vermek)",
        "sentence":  "She made a bid of five hundred dollars for the antique clock."
    },
    {
        "pos":  "Adjective",
        "word":  "Big",
        "translation":  "Büyük",
        "sentence":  "This is a big opportunity to show your skills in strategic sourcing."
    },
    {
        "pos":  "Noun",
        "word":  "Bike",
        "translation":  "Bisiklet, motosiklet",
        "sentence":  "I prefer riding my bike along the coast in İzmir on sunny days."
    },
    {
        "pos":  "Noun",
        "word":  "Bill",
        "translation":  "Verb",
        "sentence":  "Fatura"
    },
    {
        "pos":  "Number",
        "word":  "Billion",
        "translation":  "Milyar",
        "sentence":  "The company\u0027s annual turnover reached one billion lira last year."
    },
    {
        "pos":  "Verb",
        "word":  "Bind",
        "translation":  "Bağlamak, ciltlemek",
        "sentence":  "The agreement will bind both parties to the terms."
    },
    {
        "pos":  "Noun",
        "word":  "Biography",
        "translation":  "Biyografi",
        "sentence":  "I am reading a fascinating biography of Winston Churchill."
    },
    {
        "pos":  "Adjective",
        "word":  "Biological",
        "translation":  "Biyolojik",
        "sentence":  "Eating organic food reduces your exposure to biological toxins."
    },
    {
        "pos":  "Noun",
        "word":  "Biology",
        "translation":  "Biyoloji",
        "sentence":  "He studied biology in high school but chose a career in business."
    },
    {
        "pos":  "Noun",
        "word":  "Bird",
        "translation":  "Kuş",
        "sentence":  "A small bird built its nest on the balcony of my apartment."
    },
    {
        "pos":  "Noun",
        "word":  "Birth",
        "translation":  "Doğum",
        "sentence":  "You need to provide your date of birth for the visa application."
    },
    {
        "pos":  "Noun",
        "word":  "Birthday",
        "translation":  "Doğum günü",
        "sentence":  "We had a small celebration in the office for my colleague\u0027s birthday."
    },
    {
        "pos":  "Noun",
        "word":  "Bishop",
        "translation":  "Piskopos",
        "sentence":  "The bishop visited the local church for the confirmation ceremony."
    },
    {
        "pos":  "Noun",
        "word":  "Bit",
        "translation":  "Biraz, parça",
        "sentence":  "I\u0027m a bit concerned about the delay in the raw material shipment."
    },
    {
        "pos":  "Verb",
        "word":  "Bite",
        "translation":  "Noun",
        "sentence":  "Isırmak"
    },
    {
        "pos":  "Adjective",
        "word":  "Bitter",
        "translation":  "Acı, keskin",
        "sentence":  "The bitter cold weather caused some delays at the airport."
    },
    {
        "pos":  "Adjective",
        "word":  "Bizarre",
        "translation":  "Tuhaf, acayip",
        "sentence":  "I had a really bizarre dream last night."
    },
    {
        "pos":  "Adj.",
        "word":  "Black",
        "translation":  "Noun",
        "sentence":  "Siyah"
    },
    {
        "pos":  "Noun",
        "word":  "Blade",
        "translation":  "Bıçak ağzı, bıçak, pervane kanadı",
        "sentence":  "Be careful, the blade of this knife is very sharp."
    },
    {
        "pos":  "Verb",
        "word":  "Blame",
        "translation":  "Noun",
        "sentence":  "Suçlamak"
    },
    {
        "pos":  "Adj.",
        "word":  "Blank",
        "translation":  "Noun",
        "sentence":  "Boş"
    },
    {
        "pos":  "Noun",
        "word":  "Blanket",
        "translation":  "Battaniye",
        "sentence":  "It was cold, so she wrapped herself in a thick blanket."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Blast",
        "translation":  "Patlama / Patlatmak",
        "sentence":  "The blast from the explosion broke windows for miles."
    },
    {
        "pos":  "Verb",
        "word":  "Bleed",
        "translation":  "Kanamak",
        "sentence":  "Your finger is starting to bleed; you should use a bandage."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Blend",
        "translation":  "Karıştırmak, harmanlamak / Karışım",
        "sentence":  "This coffee is a unique blend of Brazilian and African beans."
    },
    {
        "pos":  "Verb",
        "word":  "Bless",
        "translation":  "Takdis etmek, kutsamak",
        "sentence":  "May God bless you and your family."
    },
    {
        "pos":  "Noun",
        "word":  "Blessing",
        "translation":  "Lütuf, nimet, dua",
        "sentence":  "Having a supportive family is a real blessing."
    },
    {
        "pos":  "Adjective",
        "word":  "Blind",
        "translation":  "Kör",
        "sentence":  "The new policy was implemented without blind faith in the data."
    },
    {
        "pos":  "Noun",
        "word":  "Block",
        "translation":  "Verb",
        "sentence":  "Blok"
    },
    {
        "pos":  "Noun",
        "word":  "Blog",
        "translation":  "Blog",
        "sentence":  "I started a blog to share my experiences in asset management."
    },
    {
        "pos":  "Adjective",
        "word":  "Blond",
        "translation":  "Sarışın",
        "sentence":  "The little girl with the blond hair is my niece."
    },
    {
        "pos":  "Noun",
        "word":  "Blood",
        "translation":  "Kan",
        "sentence":  "The doctor is checking your blood pressure during the exam."
    },
    {
        "pos":  "Noun",
        "word":  "Blow",
        "translation":  "Darbe, üfleme",
        "sentence":  "The loss of his job was a severe blow to his confidence."
    },
    {
        "pos":  "Verb",
        "word":  "Blow",
        "translation":  "Üflemek, esmek",
        "sentence":  "A strong wind began to blow across the Sabiha Gökçen runway."
    },
    {
        "pos":  "Adj.",
        "word":  "Blue",
        "translation":  "Noun",
        "sentence":  "Mavi"
    },
    {
        "pos":  "Noun",
        "word":  "Board",
        "translation":  "Verb",
        "sentence":  "Kurul, tahta"
    },
    {
        "pos":  "Verb",
        "word":  "Boast",
        "translation":  "Övünmek",
        "sentence":  "He likes to boast about how much money he earns."
    },
    {
        "pos":  "Noun",
        "word":  "Boat",
        "translation":  "Tekne",
        "sentence":  "We rented a small boat to explore the bays around İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Body",
        "translation":  "Vücut, gövde",
        "sentence":  "Regular exercise is important for keeping your body healthy."
    },
    {
        "pos":  "Verb",
        "word":  "Boil",
        "translation":  "Kaynamak",
        "sentence":  "You should boil the water before adding the pasta."
    },
    {
        "pos":  "Adjective",
        "word":  "Bold",
        "translation":  "Cesur, belirgin",
        "sentence":  "It was a bold move to quit his job without having another one."
    },
    {
        "pos":  "Noun",
        "word":  "Bomb",
        "translation":  "Verb",
        "sentence":  "Bomba"
    },
    {
        "pos":  "Noun",
        "word":  "Bombing",
        "translation":  "Bombalama",
        "sentence":  "The city was devastated by the heavy bombing."
    },
    {
        "pos":  "Noun",
        "word":  "Bond",
        "translation":  "Bağ, bono",
        "sentence":  "There is a strong bond between the team members at our firm."
    },
    {
        "pos":  "Noun",
        "word":  "Bone",
        "translation":  "Kemik",
        "sentence":  "The X-ray showed that no bones were broken in the accident."
    },
    {
        "pos":  "Noun",
        "word":  "Bonus",
        "translation":  "İkramiye, prim",
        "sentence":  "All employees received a Christmas bonus this year."
    },
    {
        "pos":  "Noun",
        "word":  "Book",
        "translation":  "Verb",
        "sentence":  "Kitap"
    },
    {
        "pos":  "Noun",
        "word":  "Booking",
        "translation":  "Rezervasyon",
        "sentence":  "I’d like to make a booking for a table of four for tonight."
    },
    {
        "pos":  "Noun",
        "word":  "Boom",
        "translation":  "Patlama (ekonomik vb.), gürleme",
        "sentence":  "There has been a recent boom in the housing market."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Boost",
        "translation":  "Artırmak / Artış, destek",
        "sentence":  "The new advertising campaign helped boost sales significantly."
    },
    {
        "pos":  "Noun",
        "word":  "Boot",
        "translation":  "Bot, çizme",
        "sentence":  "You should wear safety boots when entering the warehouse."
    },
    {
        "pos":  "Noun",
        "word":  "Border",
        "translation":  "Verb",
        "sentence":  "Sınır"
    },
    {
        "pos":  "Adjective",
        "word":  "Bored",
        "translation":  "Sıkılmış",
        "sentence":  "I felt a bit bored during the long and repetitive data entry task."
    },
    {
        "pos":  "Adjective",
        "word":  "Boring",
        "translation":  "Sıkıcı",
        "sentence":  "The first draft of the report was a bit boring to read."
    },
    {
        "pos":  "Verb",
        "word":  "Born",
        "translation":  "Doğmak",
        "sentence":  "I was born in a small town but moved to the city for work."
    },
    {
        "pos":  "Verb",
        "word":  "Borrow",
        "translation":  "Ödünç almak",
        "sentence":  "Can I borrow your calculator for a few minutes to check these gold grams?"
    },
    {
        "pos":  "Noun",
        "word":  "Boss",
        "translation":  "Patron, şef",
        "sentence":  "My boss was very supportive of my decision to learn German."
    },
    {
        "pos":  "Det.",
        "word":  "Both",
        "translation":  "Pron.",
        "sentence":  "Her ikisi"
    },
    {
        "pos":  "Verb",
        "word":  "Bother",
        "translation":  "Rahatsız etmek",
        "sentence":  "I\u0027m sorry to bother you, but do you have the latest silver prices?"
    },
    {
        "pos":  "Noun",
        "word":  "Bottle",
        "translation":  "Şişe",
        "sentence":  "I always keep a bottle of water on my desk at the office."
    },
    {
        "pos":  "Noun",
        "word":  "Bottom",
        "translation":  "Adj.",
        "sentence":  "Alt, dip"
    },
    {
        "pos":  "Verb",
        "word":  "Bounce",
        "translation":  "Zıplamak",
        "sentence":  "The kids love to bounce on the trampoline."
    },
    {
        "pos":  "Adjective",
        "word":  "Bound",
        "translation":  "Zorunlu, sınırlı, bağlı",
        "sentence":  "You are bound by the contract to finish the work on time."
    },
    {
        "pos":  "Noun",
        "word":  "Boundary",
        "translation":  "Sınır",
        "sentence":  "The river forms the natural boundary between the two states."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Bow",
        "translation":  "Eğilmek / Yay, fiyonk",
        "sentence":  "The actors took a bow as the audience applauded."
    },
    {
        "pos":  "Noun",
        "word":  "Bowl",
        "translation":  "Kase",
        "sentence":  "I had a bowl of soup for lunch at the company cafeteria."
    },
    {
        "pos":  "Noun",
        "word":  "Box",
        "translation":  "Kutu",
        "sentence":  "We need a larger box to store these alternative material samples."
    },
    {
        "pos":  "Noun",
        "word":  "Boy",
        "translation":  "Erkek çocuk",
        "sentence":  "The young boy was excited to see the big planes at the airport."
    },
    {
        "pos":  "Noun",
        "word":  "Boyfriend",
        "translation":  "Erkek arkadaş",
        "sentence":  "She introduced her boyfriend to the team at the office party."
    },
    {
        "pos":  "Noun",
        "word":  "Brain",
        "translation":  "Beyin",
        "sentence":  "Strategic sourcing requires using your brain to solve complex problems."
    },
    {
        "pos":  "Noun",
        "word":  "Branch",
        "translation":  "Şube, dal",
        "sentence":  "Our company is planning to open a new branch in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Brand",
        "translation":  "Verb",
        "sentence":  "Marka"
    },
    {
        "pos":  "Adjective",
        "word":  "Brave",
        "translation":  "Cesur",
        "sentence":  "It was a brave decision to switch to a completely new supplier."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Breach",
        "translation":  "İhlal (etmek)",
        "sentence":  "The company was sued for a breach of contract."
    },
    {
        "pos":  "Noun",
        "word":  "Bread",
        "translation":  "Ekmek",
        "sentence":  "I usually buy fresh bread from the bakery near my house."
    },
    {
        "pos":  "Verb",
        "word":  "Break",
        "translation":  "Noun",
        "sentence":  "Kırmak"
    },
    {
        "pos":  "Noun",
        "word":  "Breakdown",
        "translation":  "Bozulma, arıza, çöküş",
        "sentence":  "We had a car breakdown on the way to the airport."
    },
    {
        "pos":  "Noun",
        "word":  "Breakfast",
        "translation":  "Kahvaltı",
        "sentence":  "I had a quick breakfast before heading to Sabiha Gökçen."
    },
    {
        "pos":  "Noun",
        "word":  "Breakthrough",
        "translation":  "Buluş, atılım",
        "sentence":  "Scientists have made a major breakthrough in cancer research."
    },
    {
        "pos":  "Noun",
        "word":  "Breast",
        "translation":  "Göğüs",
        "sentence":  "The doctor checked the patient\u0027s breast during the routine exam."
    },
    {
        "pos":  "Noun",
        "word":  "Breath",
        "translation":  "Nefes",
        "sentence":  "Take a deep breath before you start your presentation."
    },
    {
        "pos":  "Verb",
        "word":  "Breathe",
        "translation":  "Nefes almak",
        "sentence":  "It is difficult to breathe in the dusty environment of the warehouse."
    },
    {
        "pos":  "Noun",
        "word":  "Breathing",
        "translation":  "Soluk alma",
        "sentence":  "His breathing returned to normal after the initial shock of the news."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Breed",
        "translation":  "Üretmek, yetiştirmek / Cins, tür",
        "sentence":  "They breed spaniels on their farm."
    },
    {
        "pos":  "Noun",
        "word":  "Brick",
        "translation":  "Tuğla",
        "sentence":  "The house was built of solid red brick."
    },
    {
        "pos":  "Noun",
        "word":  "Bride",
        "translation":  "Gelin",
        "sentence":  "The bride looked stunning in her white dress at the wedding."
    },
    {
        "pos":  "Noun",
        "word":  "Bridge",
        "translation":  "Köprü",
        "sentence":  "The new bridge will significantly reduce the travel time to the airport."
    },
    {
        "pos":  "Adjective",
        "word":  "Brief",
        "translation":  "Kısa, öz",
        "sentence":  "I will give a brief summary of the cost-down study results."
    },
    {
        "pos":  "Adverb",
        "word":  "Briefly",
        "translation":  "Kısaca",
        "sentence":  "He spoke briefly about his plans for the future."
    },
    {
        "pos":  "Adjective",
        "word":  "Bright",
        "translation":  "Parlak, zeki",
        "sentence":  "The future of the new YouTube channel looks very bright."
    },
    {
        "pos":  "Adjective",
        "word":  "Brilliant",
        "translation":  "Muhteşem, dahi",
        "sentence":  "Switching to this alternative material was a brilliant idea."
    },
    {
        "pos":  "Verb",
        "word":  "Bring",
        "translation":  "Getirmek",
        "sentence":  "Can you bring the updated supplier list to the meeting?"
    },
    {
        "pos":  "Adjective",
        "word":  "Broad",
        "translation":  "Geniş, kapsamlı",
        "sentence":  "The manager has a broad knowledge of global metal markets."
    },
    {
        "pos":  "Noun",
        "word":  "Broadband",
        "translation":  "Geniş bant (internet)",
        "sentence":  "Most homes in the area now have high-speed broadband."
    },
    {
        "pos":  "Verb",
        "word":  "Broadcast",
        "translation":  "Noun",
        "sentence":  "Yayınlamak"
    },
    {
        "pos":  "Noun",
        "word":  "Broadcaster",
        "translation":  "Yayıncı, sunucu",
        "sentence":  "The BBC is a world-famous public service broadcaster."
    },
    {
        "pos":  "Adverb",
        "word":  "Broadly",
        "translation":  "Geniş çaplı, genel olarak",
        "sentence":  "Broadly speaking, the project was a success."
    },
    {
        "pos":  "Adjective",
        "word":  "Broken",
        "translation":  "Kırık, bozuk",
        "sentence":  "The broken machine caused a delay in the production line."
    },
    {
        "pos":  "Noun",
        "word":  "Brother",
        "translation":  "Erkek kardeş",
        "sentence":  "My brother is also interested in investing in precious metals."
    },
    {
        "pos":  "Adj.",
        "word":  "Brown",
        "translation":  "Noun",
        "sentence":  "Kahverengi"
    },
    {
        "pos":  "Noun",
        "word":  "Browser",
        "translation":  "Tarayıcı (internet)",
        "sentence":  "Which web browser do you usually use?"
    },
    {
        "pos":  "Verb",
        "word":  "Brush",
        "translation":  "Noun",
        "sentence":  "Fırçalamak"
    },
    {
        "pos":  "Adjective",
        "word":  "Brutal",
        "translation":  "Acımasız, vahşi",
        "sentence":  "It was a brutal winter with record-breaking low temperatures."
    },
    {
        "pos":  "Noun",
        "word":  "Bubble",
        "translation":  "Baloncuk, balon (ekonomik)",
        "sentence":  "Many experts believe the current tech market is a bubble."
    },
    {
        "pos":  "Noun",
        "word":  "Buck",
        "translation":  "Dolar (argo), erkek geyik",
        "sentence":  "Can you lend me ten bucks until tomorrow?"
    },
    {
        "pos":  "Noun",
        "word":  "Buddy",
        "translation":  "Ahbap, arkadaş",
        "sentence":  "We\u0027ve been best buddies since primary school."
    },
    {
        "pos":  "Noun",
        "word":  "Budget",
        "translation":  "Bütçe",
        "sentence":  "We must work within the budget set by the administration."
    },
    {
        "pos":  "Noun",
        "word":  "Buffer",
        "translation":  "Tampon bölge/alan",
        "sentence":  "The trees act as a buffer against the noise from the highway."
    },
    {
        "pos":  "Noun",
        "word":  "Bug",
        "translation":  "Böcek, yazılım hatası",
        "sentence":  "There\u0027s a bug in the software that needs to be fixed."
    },
    {
        "pos":  "Verb",
        "word":  "Build",
        "translation":  "İnşa etmek",
        "sentence":  "We are trying to build a strong network of alternative suppliers."
    },
    {
        "pos":  "Noun",
        "word":  "Building",
        "translation":  "Bina",
        "sentence":  "The office building is located in a very central part of İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Bulk",
        "translation":  "Büyük kısım, yığın",
        "sentence":  "It is cheaper to buy office supplies in bulk."
    },
    {
        "pos":  "Noun",
        "word":  "Bullet",
        "translation":  "Kurşun",
        "sentence":  "The police found several bullet casings at the scene."
    },
    {
        "pos":  "Noun",
        "word":  "Bunch",
        "translation":  "Demet, grup",
        "sentence":  "I bought a bunch of flowers for my colleague\u0027s anniversary."
    },
    {
        "pos":  "Noun",
        "word":  "Burden",
        "translation":  "Yük, külfet",
        "sentence":  "I don\u0027t want to be a burden to my family in my old age."
    },
    {
        "pos":  "Noun",
        "word":  "Bureaucracy",
        "translation":  "Bürokrasi",
        "sentence":  "Many people complain about the unnecessary bureaucracy in government."
    },
    {
        "pos":  "Noun",
        "word":  "Burial",
        "translation":  "Defin, gömme",
        "sentence":  "The burial will take place in the local cemetery tomorrow."
    },
    {
        "pos":  "Verb",
        "word":  "Burn",
        "translation":  "Noun",
        "sentence":  "Yanmak"
    },
    {
        "pos":  "Verb",
        "word":  "Burst",
        "translation":  "Patlamak",
        "sentence":  "The balloon burst when it touched the sharp thorns."
    },
    {
        "pos":  "Verb",
        "word":  "Bury",
        "translation":  "Gömmek",
        "sentence":  "They decided to bury the time capsule under the new building."
    },
    {
        "pos":  "Noun",
        "word":  "Bus",
        "translation":  "Otobüs",
        "sentence":  "I took the bus to the airport because my car was in the garage."
    },
    {
        "pos":  "Noun",
        "word":  "Bush",
        "translation":  "Çalı",
        "sentence":  "A small rabbit was hiding behind a green bush in the garden."
    },
    {
        "pos":  "Noun",
        "word":  "Business",
        "translation":  "İş",
        "sentence":  "Strategic sourcing is a vital part of our company\u0027s business."
    },
    {
        "pos":  "Noun",
        "word":  "Businessman",
        "translation":  "İş adamı",
        "sentence":  "He is a successful businessman who owns several firms in İzmir."
    },
    {
        "pos":  "Adjective",
        "word":  "Busy",
        "translation":  "Meşgul",
        "sentence":  "I was very busy today with the fifth-year evaluation note."
    },
    {
        "pos":  "Conj.",
        "word":  "But",
        "translation":  "Prep.",
        "sentence":  "Ama"
    },
    {
        "pos":  "Noun",
        "word":  "Butter",
        "translation":  "Tereyağı",
        "sentence":  "I prefer using butter instead of oil for this recipe."
    },
    {
        "pos":  "Noun",
        "word":  "Button",
        "translation":  "Düğme, tuş",
        "sentence":  "Press the red button to stop the machine in an emergency."
    },
    {
        "pos":  "Verb",
        "word":  "Buy",
        "translation":  "Satın almak",
        "sentence":  "I want to buy some more silver while the price is still low."
    },
    {
        "pos":  "Prep.",
        "word":  "By",
        "translation":  "Adv.",
        "sentence":  "Tarafından, ile"
    },
    {
        "pos":  "Exclam.",
        "word":  "Bye",
        "translation":  "Hoşça kal",
        "sentence":  "\"I\u0027m leaving now, see you tomorrow.\" \"Bye!\""
    },
    {
        "pos":  "Noun",
        "word":  "Cabin",
        "translation":  "Kabin, kulübe",
        "sentence":  "We stayed in a cozy wooden cabin in the mountains."
    },
    {
        "pos":  "Noun",
        "word":  "Cabinet",
        "translation":  "Kabine, dolap",
        "sentence":  "He kept his tools in a metal cabinet in the garage."
    },
    {
        "pos":  "Noun",
        "word":  "Cable",
        "translation":  "Kablo",
        "sentence":  "We need a longer cable to connect the monitor to the computer."
    },
    {
        "pos":  "Noun",
        "word":  "Cafe",
        "translation":  "Kafe",
        "sentence":  "Let\u0027s meet at the cafe across the street to discuss the project."
    },
    {
        "pos":  "Noun",
        "word":  "Cake",
        "translation":  "Kek, pasta",
        "sentence":  "We ordered a large chocolate cake for the work anniversary party."
    },
    {
        "pos":  "Verb",
        "word":  "Calculate",
        "translation":  "Hesaplamak",
        "sentence":  "I need to calculate the total cost of the alternative materials."
    },
    {
        "pos":  "Noun",
        "word":  "Calculation",
        "translation":  "Hesaplama",
        "sentence":  "According to my calculations, we should have enough money."
    },
    {
        "pos":  "Verb",
        "word":  "Call",
        "translation":  "Noun",
        "sentence":  "Aramak"
    },
    {
        "pos":  "Adj.",
        "word":  "Calm",
        "translation":  "V.",
        "sentence":  "N."
    },
    {
        "pos":  "Noun",
        "word":  "Camera",
        "translation":  "Kamera",
        "sentence":  "We use a high-quality camera to record videos for the kids\u0027 channel."
    },
    {
        "pos":  "Noun",
        "word":  "Camp",
        "translation":  "Verb",
        "sentence":  "Kamp"
    },
    {
        "pos":  "Noun",
        "word":  "Campaign",
        "translation":  "Verb",
        "sentence":  "Kampanya"
    },
    {
        "pos":  "Noun",
        "word":  "Camping",
        "translation":  "Kamp yapma",
        "sentence":  "Camping is a great way to relax and enjoy nature."
    },
    {
        "pos":  "Noun",
        "word":  "Campus",
        "translation":  "Kampüs",
        "sentence":  "The university campus in İzmir is very large and green."
    },
    {
        "pos":  "Modal Verb",
        "word":  "Can1",
        "translation":  "-ebilmek",
        "sentence":  "I can speak English at a B2 level, and I\u0027m learning German."
    },
    {
        "pos":  "Noun",
        "word":  "Can2",
        "translation":  "Teneke kutu",
        "sentence":  "I bought a can of soda from the vending machine."
    },
    {
        "pos":  "Noun",
        "word":  "Canal",
        "translation":  "Kanal",
        "sentence":  "The Panama Canal connects the Atlantic and Pacific Oceans."
    },
    {
        "pos":  "Verb",
        "word":  "Cancel",
        "translation":  "İptal etmek",
        "sentence":  "I had to cancel my meeting because of the flight cancellation."
    },
    {
        "pos":  "Noun",
        "word":  "Cancer",
        "translation":  "Kanser",
        "sentence":  "Early detection is crucial for the successful treatment of cancer."
    },
    {
        "pos":  "Noun",
        "word":  "Candidate",
        "translation":  "Aday",
        "sentence":  "We are interviewing several candidates for the sourcing role."
    },
    {
        "pos":  "Noun",
        "word":  "Candle",
        "translation":  "Mum",
        "sentence":  "We had to light candles when the electricity went out."
    },
    {
        "pos":  "Noun",
        "word":  "Candy",
        "translation":  "Şekerleme",
        "sentence":  "Don\u0027t give the kids too much candy before dinner."
    },
    {
        "pos":  "Verb",
        "word":  "Cannot",
        "translation":  "Yapamamak",
        "sentence":  "I cannot accept these terms; we need a better price."
    },
    {
        "pos":  "Noun",
        "word":  "Canvas",
        "translation":  "Tuval, çadır bezi",
        "sentence":  "The artist painted a beautiful landscape on a large canvas."
    },
    {
        "pos":  "Noun",
        "word":  "Cap",
        "translation":  "Şapka, kapak",
        "sentence":  "I lost my favorite baseball cap during the trip to İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Capability",
        "translation":  "Kapasite, yetenek",
        "sentence":  "The new software has the capability to process data much faster."
    },
    {
        "pos":  "Adjective",
        "word":  "Capable",
        "translation":  "Yetenekli, muktedir",
        "sentence":  "She is a very capable employee who manages multiple tasks."
    },
    {
        "pos":  "Noun",
        "word":  "Capacity",
        "translation":  "Kapasite",
        "sentence":  "The warehouse has the capacity to store all our raw materials."
    },
    {
        "pos":  "N.",
        "word":  "Capital",
        "translation":  "Adj.",
        "sentence":  "Başkent, sermaye"
    },
    {
        "pos":  "Noun",
        "word":  "Capitalism",
        "translation":  "Kapitalizm",
        "sentence":  "Capitalism is based on private ownership of the means of production."
    },
    {
        "pos":  "Adjective",
        "word":  "Capitalist",
        "translation":  "Kapitalist",
        "sentence":  "Most Western countries have a capitalist economy."
    },
    {
        "pos":  "Noun",
        "word":  "Captain",
        "translation":  "Kaptan",
        "sentence":  "The captain of the aircraft apologized for the delay."
    },
    {
        "pos":  "Verb",
        "word":  "Capture",
        "translation":  "Noun",
        "sentence":  "Yakalamak, ele geçirmek"
    },
    {
        "pos":  "Noun",
        "word":  "Car",
        "translation":  "Araba",
        "sentence":  "I am evaluating two different ways to buy a new car."
    },
    {
        "pos":  "Noun",
        "word":  "Carbon",
        "translation":  "Karbon",
        "sentence":  "Trees absorb carbon dioxide from the atmosphere."
    },
    {
        "pos":  "Noun",
        "word":  "Card",
        "translation":  "Kart",
        "sentence":  "I used my credit card to pay for the English game materials."
    },
    {
        "pos":  "Noun",
        "word":  "Care",
        "translation":  "Verb",
        "sentence":  "İlgi, bakım"
    },
    {
        "pos":  "Noun",
        "word":  "Career",
        "translation":  "Kariyer",
        "sentence":  "My career in strategic sourcing has been very rewarding so far."
    },
    {
        "pos":  "Adjective",
        "word":  "Careful",
        "translation":  "Dikkatli",
        "sentence":  "Please be careful with the data in the cost-down study."
    },
    {
        "pos":  "Adverb",
        "word":  "Carefully",
        "translation":  "Dikkatlice",
        "sentence":  "Read the supplier agreement carefully before signing it."
    },
    {
        "pos":  "Adjective",
        "word":  "Careless",
        "translation":  "Dikkatsiz",
        "sentence":  "A careless mistake in the calculation can lead to a big loss."
    },
    {
        "pos":  "Noun",
        "word":  "Cargo",
        "translation":  "Kargo, yük",
        "sentence":  "The ship was carrying a cargo of grain to Europe."
    },
    {
        "pos":  "Noun",
        "word":  "Carpet",
        "translation":  "Halı",
        "sentence":  "We decided to replace the old carpet in the living room."
    },
    {
        "pos":  "Noun",
        "word":  "Carriage",
        "translation":  "Fayton, vagon",
        "sentence":  "The royal couple left the church in a horse-drawn carriage."
    },
    {
        "pos":  "Noun",
        "word":  "Carrot",
        "translation":  "Havuç",
        "sentence":  "I like to add fresh carrots to my vegetable salad."
    },
    {
        "pos":  "Verb",
        "word":  "Carry",
        "translation":  "Taşımak",
        "sentence":  "These trucks carry raw materials from the supplier to our factory."
    },
    {
        "pos":  "Noun",
        "word":  "Cartoon",
        "translation":  "Çizgi film",
        "sentence":  "The new YouTube channel will feature fun cartoons for kids."
    },
    {
        "pos":  "Verb",
        "word":  "Carve",
        "translation":  "Oymak, (et vb.) kesmek",
        "sentence":  "The artist used a small knife to carve the figure out of wood."
    },
    {
        "pos":  "Noun",
        "word":  "Case",
        "translation":  "Durum, vaka, kılıf",
        "sentence":  "In this case, we should look for an alternative supplier."
    },
    {
        "pos":  "Noun",
        "word":  "Cash",
        "translation":  "Nakit",
        "sentence":  "I don\u0027t have much cash with me; can I pay by card?"
    },
    {
        "pos":  "Noun",
        "word":  "Casino",
        "translation":  "Kumarhane",
        "sentence":  "He lost a significant amount of money at the casino in Las Vegas."
    },
    {
        "pos":  "Noun",
        "word":  "Cast",
        "translation":  "Verb",
        "sentence":  "Oyuncu kadrosu"
    },
    {
        "pos":  "Noun",
        "word":  "Castle",
        "translation":  "Kale, şato",
        "sentence":  "The medieval castle stands on top of a hill overlooking the river."
    },
    {
        "pos":  "Adjective",
        "word":  "Casual",
        "translation":  "Rahat, gündelik, tesadüfi",
        "sentence":  "The office has a casual dress code on Fridays."
    },
    {
        "pos":  "Noun",
        "word":  "Casualty",
        "translation":  "Zayiat, kazazede, yaralı",
        "sentence":  "There were many casualties during the heavy earthquake."
    },
    {
        "pos":  "Noun",
        "word":  "Cat",
        "translation":  "Kedi",
        "sentence":  "A stray cat was sleeping on the hood of my car this morning."
    },
    {
        "pos":  "Noun",
        "word":  "Catalog",
        "translation":  "Katalog",
        "sentence":  "You can find all our products in the latest autumn catalog."
    },
    {
        "pos":  "Verb",
        "word":  "Catch",
        "translation":  "Noun",
        "sentence":  "Yakalamak"
    },
    {
        "pos":  "Noun",
        "word":  "Category",
        "translation":  "Kategori",
        "sentence":  "Raw materials are divided into several different categories."
    },
    {
        "pos":  "Verb",
        "word":  "Cater",
        "translation":  "Hizmet sunmak, (yemek) tedarik etmek",
        "sentence":  "The hotel can cater for large weddings and conferences."
    },
    {
        "pos":  "Noun",
        "word":  "Cattle",
        "translation":  "Sığır, büyükbaş hayvan",
        "sentence":  "The farmer has over two hundred head of cattle on his land."
    },
    {
        "pos":  "Noun",
        "word":  "Cause",
        "translation":  "Verb",
        "sentence":  "Neden"
    },
    {
        "pos":  "Noun",
        "word":  "Caution",
        "translation":  "Dikkat, tedbir",
        "sentence":  "You should exercise caution when driving in icy conditions."
    },
    {
        "pos":  "Adjective",
        "word":  "Cautious",
        "translation":  "Tedbirli, dikkatli",
        "sentence":  "He is very cautious about investing his money in the stock market."
    },
    {
        "pos":  "Noun",
        "word":  "Cave",
        "translation":  "Mağara",
        "sentence":  "The explorers found ancient paintings on the walls of the cave."
    },
    {
        "pos":  "Noun",
        "word":  "CD",
        "translation":  "CD",
        "sentence":  "I found an old CD with Turkish songs in my drawer."
    },
    {
        "pos":  "Verb",
        "word":  "Cease",
        "translation":  "Durdurmak, kesilmek",
        "sentence":  "The company decided to cease operations in that region."
    },
    {
        "pos":  "Noun",
        "word":  "Ceiling",
        "translation":  "Tavan",
        "sentence":  "The ceiling of the warehouse is high enough for tall shelves."
    },
    {
        "pos":  "Verb",
        "word":  "Celebrate",
        "translation":  "Kutlamak",
        "sentence":  "We will celebrate my fifth work anniversary with a small dinner."
    },
    {
        "pos":  "Noun",
        "word":  "Celebration",
        "translation":  "Kutlama",
        "sentence":  "The company organized a grand celebration for its 50th year."
    },
    {
        "pos":  "Noun",
        "word":  "Celebrity",
        "translation":  "Ünlü",
        "sentence":  "Tracking celebrity social media trends is one of my interests."
    },
    {
        "pos":  "Noun",
        "word":  "Cell",
        "translation":  "Hücre",
        "sentence":  "Every living organism is made up of at least one cell."
    },
    {
        "pos":  "Noun",
        "word":  "Cemetery",
        "translation":  "Mezarlık",
        "sentence":  "Her grandparents are buried in the local cemetery."
    },
    {
        "pos":  "Noun",
        "word":  "Cent",
        "translation":  "Sent",
        "sentence":  "The price of silver rose by a few cents this morning."
    },
    {
        "pos":  "Noun",
        "word":  "Center",
        "translation":  "Verb",
        "sentence":  "Merkez"
    },
    {
        "pos":  "Adjective",
        "word":  "Central",
        "translation":  "Merkezi",
        "sentence":  "Our office is located in a central area, close to public transport."
    },
    {
        "pos":  "Noun",
        "word":  "Century",
        "translation":  "Yüzyıl",
        "sentence":  "Many great technological changes occurred in the 20th century."
    },
    {
        "pos":  "Noun",
        "word":  "Ceremony",
        "translation":  "Tören",
        "sentence":  "We attended the award ceremony at the sourcing conference."
    },
    {
        "pos":  "Adjective",
        "word":  "Certain",
        "translation":  "Kesin, belli",
        "sentence":  "I am certain that we can find a better alternative supplier."
    },
    {
        "pos":  "Adverb",
        "word":  "Certainly",
        "translation":  "Kesinlikle",
        "sentence":  "I will certainly help you with the German fruit names."
    },
    {
        "pos":  "Noun",
        "word":  "Certainty",
        "translation":  "Kesinlik",
        "sentence":  "There is no certainty that the project will be finished on time."
    },
    {
        "pos":  "Noun",
        "word":  "Certificate",
        "translation":  "Sertifika, belge",
        "sentence":  "You will receive a certificate after completing the training course."
    },
    {
        "pos":  "Noun",
        "word":  "Chain",
        "translation":  "Verb",
        "sentence":  "Zincir"
    },
    {
        "pos":  "Noun",
        "word":  "Chair",
        "translation":  "Verb",
        "sentence":  "Sandalye"
    },
    {
        "pos":  "Noun",
        "word":  "Chairman",
        "translation":  "Başkan",
        "sentence":  "The chairman of the board announced the new cost-down goals."
    },
    {
        "pos":  "Noun",
        "word":  "Challenge",
        "translation":  "Verb",
        "sentence":  "Zorluk"
    },
    {
        "pos":  "Adjective",
        "word":  "Challenging",
        "translation":  "Zorlayıcı, emek isteyen",
        "sentence":  "Teaching a class of thirty children can be very challenging."
    },
    {
        "pos":  "Noun",
        "word":  "Chamber",
        "translation":  "Oda, bölme, meclis salonu",
        "sentence":  "The meeting was held in the council chamber."
    },
    {
        "pos":  "Noun",
        "word":  "Champion",
        "translation":  "Şampiyon",
        "sentence":  "The team worked hard to become the champion of the league."
    },
    {
        "pos":  "Noun",
        "word":  "Championship",
        "translation":  "Şampiyona",
        "sentence":  "Our team won the national basketball championship last year."
    },
    {
        "pos":  "Noun",
        "word":  "Chance",
        "translation":  "Şans, fırsat",
        "sentence":  "This project gives me a chance to use my English skills."
    },
    {
        "pos":  "Verb",
        "word":  "Change",
        "translation":  "Noun",
        "sentence":  "Değiştirmek"
    },
    {
        "pos":  "Noun",
        "word":  "Channel",
        "translation":  "Kanal",
        "sentence":  "I am planning to launch a YouTube channel for kids aged 2-6."
    },
    {
        "pos":  "Noun",
        "word":  "Chaos",
        "translation":  "Kaos, kargaşa",
        "sentence":  "The heavy snow caused chaos on the roads this morning."
    },
    {
        "pos":  "Noun",
        "word":  "Chapter",
        "translation":  "Bölüm (kitap)",
        "sentence":  "I am currently reading the second chapter of the sourcing book."
    },
    {
        "pos":  "Noun",
        "word":  "Character",
        "translation":  "Karakter",
        "sentence":  "The main character in the cartoon is a helpful little bear."
    },
    {
        "pos":  "N.",
        "word":  "Characteristic",
        "translation":  "Adj.",
        "sentence":  "Özellik"
    },
    {
        "pos":  "Verb",
        "word":  "Characterize",
        "translation":  "Tanımlamak, nitelemek",
        "sentence":  "High inflation and low growth characterize the current economy."
    },
    {
        "pos":  "Noun",
        "word":  "Charge",
        "translation":  "Verb",
        "sentence":  "Ücret"
    },
    {
        "pos":  "Noun",
        "word":  "Charity",
        "translation":  "Hayır kurumu",
        "sentence":  "We decided to donate a portion of our profits to a local charity."
    },
    {
        "pos":  "Noun",
        "word":  "Charm",
        "translation":  "Cazibe, tılsım",
        "sentence":  "The old town has a lot of historical charm."
    },
    {
        "pos":  "Adjective",
        "word":  "Charming",
        "translation":  "Çekici, büyüleyici",
        "sentence":  "We stayed in a charming little cottage by the sea."
    },
    {
        "pos":  "Noun",
        "word":  "Chart",
        "translation":  "Verb",
        "sentence":  "Grafik"
    },
    {
        "pos":  "Noun",
        "word":  "Charter",
        "translation":  "Tüzük, şartname, kiralama",
        "sentence":  "The United Nations Charter sets out the rights of all people."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Chase",
        "translation":  "Kovalamak / Takip",
        "sentence":  "The police had to chase the suspect through the narrow streets."
    },
    {
        "pos":  "Verb",
        "word":  "Chat",
        "translation":  "Noun",
        "sentence":  "Sohbet etmek"
    },
    {
        "pos":  "Adj.",
        "word":  "Cheap",
        "translation":  "Adv.",
        "sentence":  "Ucuz"
    },
    {
        "pos":  "Verb",
        "word":  "Cheat",
        "translation":  "Noun",
        "sentence":  "Aldatmak, hile yapmak"
    },
    {
        "pos":  "Verb",
        "word":  "Check",
        "translation":  "Noun",
        "sentence":  "Kontrol etmek"
    },
    {
        "pos":  "Noun",
        "word":  "Cheek",
        "translation":  "Yanak",
        "sentence":  "She kissed the baby on each cheek."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Cheer",
        "translation":  "Tezahürat yapmak / Neşe",
        "sentence":  "The crowd began to cheer as the players entered the field."
    },
    {
        "pos":  "Adjective",
        "word":  "Cheerful",
        "translation":  "Neşeli",
        "sentence":  "She has a very cheerful personality and is a joy to work with."
    },
    {
        "pos":  "Noun",
        "word":  "Cheese",
        "translation":  "Peynir",
        "sentence":  "I like to have some olives and cheese for breakfast."
    },
    {
        "pos":  "Noun",
        "word":  "Chef",
        "translation":  "Şef, aşçı",
        "sentence":  "The chef at the restaurant prepared a special meal for us."
    },
    {
        "pos":  "Adj.",
        "word":  "Chemical",
        "translation":  "Noun",
        "sentence":  "Kimyasal"
    },
    {
        "pos":  "Noun",
        "word":  "Chemistry",
        "translation":  "Kimya",
        "sentence":  "He has a degree in chemistry and works in the lab."
    },
    {
        "pos":  "Noun",
        "word":  "Chest",
        "translation":  "Göğüs, sandık",
        "sentence":  "He felt a slight pain in his chest and went to see a doctor."
    },
    {
        "pos":  "Noun",
        "word":  "Chicken",
        "translation":  "Tavuk",
        "sentence":  "We had grilled chicken and vegetables for dinner last night."
    },
    {
        "pos":  "Adj.",
        "word":  "Chief",
        "translation":  "Noun",
        "sentence":  "Baş, şef"
    },
    {
        "pos":  "Noun",
        "word":  "Child",
        "translation":  "Çocuk",
        "sentence":  "The child was playing happily with his toys in the garden."
    },
    {
        "pos":  "Noun",
        "word":  "Childhood",
        "translation":  "Çocukluk",
        "sentence":  "I have many happy memories from my childhood in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Chip",
        "translation":  "Çip, patates cipsi",
        "sentence":  "The new computer uses a very advanced electronic chip."
    },
    {
        "pos":  "Noun",
        "word":  "Chocolate",
        "translation":  "Çikolata",
        "sentence":  "My niece really loves dark chocolate with hazelnuts."
    },
    {
        "pos":  "Noun",
        "word":  "Choice",
        "translation":  "Seçim, tercih",
        "sentence":  "You have a choice between two different car financing paths."
    },
    {
        "pos":  "Noun",
        "word":  "Choir",
        "translation":  "Koro",
        "sentence":  "He sings in the local church choir every Sunday."
    },
    {
        "pos":  "Verb",
        "word":  "Choose",
        "translation":  "Seçmek",
        "sentence":  "I need to choose the most reliable alternative supplier."
    },
    {
        "pos":  "Verb",
        "word":  "Chop",
        "translation":  "Doğramak, balta ile kesmek",
        "sentence":  "Could you please chop the onions for the salad?"
    },
    {
        "pos":  "Adjective",
        "word":  "Chronic",
        "translation":  "Kronik, müzmin",
        "sentence":  "He suffers from chronic back pain."
    },
    {
        "pos":  "Noun",
        "word":  "Chunk",
        "translation":  "Büyük parça, yığın",
        "sentence":  "A large chunk of ice fell from the roof."
    },
    {
        "pos":  "Noun",
        "word":  "Church",
        "translation":  "Kilise",
        "sentence":  "There is a historical church located in the center of the city."
    },
    {
        "pos":  "Noun",
        "word":  "Cigarette",
        "translation":  "Sigara",
        "sentence":  "Smoking cigarettes is harmful to your health and the environment."
    },
    {
        "pos":  "Noun",
        "word":  "Circle",
        "translation":  "Verb",
        "sentence":  "Daire, çember"
    },
    {
        "pos":  "Noun",
        "word":  "Circuit",
        "translation":  "Devre, tur",
        "sentence":  "The electrical circuit was overloaded and caused a fire."
    },
    {
        "pos":  "Verb",
        "word":  "Circulate",
        "translation":  "Dolaşmak, yayılmak",
        "sentence":  "Fresh air should be allowed to circulate through the room."
    },
    {
        "pos":  "Noun",
        "word":  "Circulation",
        "translation":  "Dolaşım, (gazete vb.) tiraj",
        "sentence":  "Regular exercise helps to improve your blood circulation."
    },
    {
        "pos":  "Noun",
        "word":  "Circumstance",
        "translation":  "Durum, koşul",
        "sentence":  "Under the current circumstances, we must delay the project."
    },
    {
        "pos":  "Verb",
        "word":  "Cite",
        "translation":  "Alıntı yapmak, belirtmek",
        "sentence":  "You should cite your sources in the final sourcing report."
    },
    {
        "pos":  "Noun",
        "word":  "Citizen",
        "translation":  "Vatandaş",
        "sentence":  "Every citizen has the right to vote in the national elections."
    },
    {
        "pos":  "Noun",
        "word":  "Citizenship",
        "translation":  "Vatandaşlık",
        "sentence":  "He applied for British citizenship after living in London for five years."
    },
    {
        "pos":  "Noun",
        "word":  "City",
        "translation":  "Şehir",
        "sentence":  "İzmir is a beautiful and historic city on the coast of Turkey."
    },
    {
        "pos":  "Adjective",
        "word":  "Civic",
        "translation":  "Şehirle ilgili, sivil, toplumsal",
        "sentence":  "It is our civic duty to vote in the elections."
    },
    {
        "pos":  "Adjective",
        "word":  "Civil",
        "translation":  "Sivil, nazik",
        "sentence":  "The two countries agreed to work together on civil aviation projects."
    },
    {
        "pos":  "Noun / Adjective",
        "word":  "Civilian",
        "translation":  "Sivil",
        "sentence":  "Many civilians were injured during the conflict."
    },
    {
        "pos":  "Noun",
        "word":  "Civilization",
        "translation":  "Uygarlık, medeniyet",
        "sentence":  "The Nile valley was the birthplace of an ancient civilization."
    },
    {
        "pos":  "Verb",
        "word":  "Claim",
        "translation":  "Noun",
        "sentence":  "İddia etmek"
    },
    {
        "pos":  "Verb",
        "word":  "Clarify",
        "translation":  "Açıklığa kavuşturmak",
        "sentence":  "Could you please clarify what you mean by that statement?"
    },
    {
        "pos":  "Noun",
        "word":  "Clarity",
        "translation":  "Berraklık, netlik",
        "sentence":  "The instructions were written with great clarity."
    },
    {
        "pos":  "Noun",
        "word":  "Clash",
        "translation":  "Çatışma, fikir ayrılığı",
        "sentence":  "There was a violent clash between the protesters and the police."
    },
    {
        "pos":  "Noun",
        "word":  "Class",
        "translation":  "Sınıf, ders",
        "sentence":  "I am taking an evening class to improve my German."
    },
    {
        "pos":  "Adj.",
        "word":  "Classic",
        "translation":  "Noun",
        "sentence":  "Klasik"
    },
    {
        "pos":  "Adjective",
        "word":  "Classical",
        "translation":  "Klasik (müzik vb.)",
        "sentence":  "I like listening to classical music while I work on calculations."
    },
    {
        "pos":  "Noun",
        "word":  "Classification",
        "translation":  "Sınıflandırma",
        "sentence":  "The library uses a complex system for the classification of books."
    },
    {
        "pos":  "Verb",
        "word":  "Classify",
        "translation":  "Sınıflandırmak",
        "sentence":  "Biologists classify living things into different groups."
    },
    {
        "pos":  "Noun",
        "word":  "Classroom",
        "translation":  "Sınıf",
        "sentence":  "The classroom was equipped with a modern digital whiteboard."
    },
    {
        "pos":  "Noun",
        "word":  "Clause",
        "translation":  "Madde (sözleşme), cümlecik",
        "sentence":  "We need to add a new clause to the supplier agreement."
    },
    {
        "pos":  "Adj.",
        "word":  "Clean",
        "translation":  "Verb",
        "sentence":  "Temiz"
    },
    {
        "pos":  "Adj.",
        "word":  "Clear",
        "translation":  "Verb",
        "sentence":  "Net, açık"
    },
    {
        "pos":  "Adverb",
        "word":  "Clearly",
        "translation":  "Net bir şekilde",
        "sentence":  "Please explain the new strategy clearly to all team members."
    },
    {
        "pos":  "Noun",
        "word":  "Clerk",
        "translation":  "Memur, tezgahtar",
        "sentence":  "The clerk at the airport helped me with the flight refund."
    },
    {
        "pos":  "Adjective",
        "word":  "Clever",
        "translation":  "Zeki",
        "sentence":  "It was a clever idea to track celebrity social media trends."
    },
    {
        "pos":  "Verb",
        "word":  "Click",
        "translation":  "Noun",
        "sentence":  "Tıklamak"
    },
    {
        "pos":  "Noun",
        "word":  "Client",
        "translation":  "Müşteri",
        "sentence":  "We are meeting with an important client from Germany tomorrow."
    },
    {
        "pos":  "Noun",
        "word":  "Cliff",
        "translation":  "Uçurum, falez",
        "sentence":  "The house stands on the edge of a steep cliff."
    },
    {
        "pos":  "Noun",
        "word":  "Climate",
        "translation":  "İklim",
        "sentence":  "The Mediterranean climate in İzmir is warm and sunny."
    },
    {
        "pos":  "Verb",
        "word":  "Climb",
        "translation":  "Noun",
        "sentence":  "Tırmanmak"
    },
    {
        "pos":  "Verb",
        "word":  "Cling",
        "translation":  "Tutunmak, yapışmak",
        "sentence":  "The child started to cling to his mother\u0027s hand."
    },
    {
        "pos":  "Noun",
        "word":  "Clinic",
        "translation":  "Klinik",
        "sentence":  "She works as a nurse at a local health clinic."
    },
    {
        "pos":  "Adjective",
        "word":  "Clinical",
        "translation":  "Klinik, soğukkanlı",
        "sentence":  "The drug is currently undergoing clinical trials."
    },
    {
        "pos":  "Noun",
        "word":  "Clip",
        "translation":  "Klips, ataş, (film/video) kesit",
        "sentence":  "He used a paper clip to hold the documents together."
    },
    {
        "pos":  "Noun",
        "word":  "Clock",
        "translation":  "Saat",
        "sentence":  "There is a large clock hanging on the wall of the office."
    },
    {
        "pos":  "Verb",
        "word":  "Close1",
        "translation":  "Noun",
        "sentence":  "Kapatmak"
    },
    {
        "pos":  "Adj.",
        "word":  "Close2",
        "translation":  "Adv.",
        "sentence":  "Yakın"
    },
    {
        "pos":  "Adjective",
        "word":  "Closed",
        "translation":  "Kapalı",
        "sentence":  "The store was closed when I arrived there late last night."
    },
    {
        "pos":  "Adverb",
        "word":  "Closely",
        "translation":  "Yakından",
        "sentence":  "We are monitoring the price of silver very closely."
    },
    {
        "pos":  "Noun",
        "word":  "Closet",
        "translation":  "Dolap",
        "sentence":  "I put my winter clothes in the closet at the back of the room."
    },
    {
        "pos":  "Noun",
        "word":  "Closure",
        "translation":  "Kapanış, kapatma",
        "sentence":  "The factory closure resulted in the loss of hundreds of jobs."
    },
    {
        "pos":  "Noun",
        "word":  "Cloth",
        "translation":  "Kumaş, bez",
        "sentence":  "Use a damp cloth to clean the surface of the samples."
    },
    {
        "pos":  "Noun",
        "word":  "Clothes",
        "translation":  "Giysiler",
        "sentence":  "I need to buy some new professional clothes for the conference."
    },
    {
        "pos":  "Noun",
        "word":  "Clothing",
        "translation":  "Giyim",
        "sentence":  "The company specializes in high-quality outdoor clothing."
    },
    {
        "pos":  "Noun",
        "word":  "Cloud",
        "translation":  "Bulut",
        "sentence":  "There isn\u0027t a single cloud in the sky over İzmir today."
    },
    {
        "pos":  "Noun",
        "word":  "Club",
        "translation":  "Kulüp",
        "sentence":  "He is a member of a local football club in his neighborhood."
    },
    {
        "pos":  "Noun",
        "word":  "Clue",
        "translation":  "İpucu",
        "sentence":  "The police found a vital clue that helped them solve the case."
    },
    {
        "pos":  "Noun",
        "word":  "Cluster",
        "translation":  "Salkım, küme, grup",
        "sentence":  "A cluster of fans waited outside the stadium for the players."
    },
    {
        "pos":  "Noun",
        "word":  "Coach",
        "translation":  "Verb",
        "sentence":  "Koç, antrenör"
    },
    {
        "pos":  "Noun",
        "word":  "Coal",
        "translation":  "Kömür",
        "sentence":  "Coal is still used as a primary energy source in many factories."
    },
    {
        "pos":  "Noun",
        "word":  "Coalition",
        "translation":  "Koalisyon",
        "sentence":  "The two parties formed a coalition government."
    },
    {
        "pos":  "Noun",
        "word":  "Coast",
        "translation":  "Sahil, kıyı",
        "sentence":  "We love to go for a drive along the coast during the weekends."
    },
    {
        "pos":  "Adjective",
        "word":  "Coastal",
        "translation":  "Kıyı, sahil",
        "sentence":  "Coastal erosion is a serious problem in this part of the country."
    },
    {
        "pos":  "Noun",
        "word":  "Coat",
        "translation":  "Palto, ceket",
        "sentence":  "Don\u0027t forget to take your coat; it\u0027s getting cold outside."
    },
    {
        "pos":  "Noun",
        "word":  "Cocktail",
        "translation":  "Kokteyl",
        "sentence":  "They served fruit cocktails at the beginning of the party."
    },
    {
        "pos":  "Noun",
        "word":  "Code",
        "translation":  "Kod",
        "sentence":  "You need to enter a four-digit code to open the safe."
    },
    {
        "pos":  "Noun",
        "word":  "Coffee",
        "translation":  "Kahve",
        "sentence":  "I need a strong cup of coffee to start my morning at work."
    },
    {
        "pos":  "Adjective",
        "word":  "Cognitive",
        "translation":  "Bilişsel",
        "sentence":  "Reading helps to develop a child\u0027s cognitive skills."
    },
    {
        "pos":  "Noun",
        "word":  "Coin",
        "translation":  "Madeni para",
        "sentence":  "I have a small collection of rare coins in my desk drawer."
    },
    {
        "pos":  "Verb",
        "word":  "Coincide",
        "translation":  "Rast gelmek, çakışmak",
        "sentence":  "The festival will coincide with the city\u0027s anniversary."
    },
    {
        "pos":  "Noun",
        "word":  "Coincidence",
        "translation":  "Tesadüf",
        "sentence":  "It was a complete coincidence that we met in Paris."
    },
    {
        "pos":  "Adj.",
        "word":  "Cold",
        "translation":  "Noun",
        "sentence":  "Soğuk"
    },
    {
        "pos":  "Verb",
        "word":  "Collaborate",
        "translation":  "İş birliği yapmak",
        "sentence":  "The two companies decided to collaborate on the new project."
    },
    {
        "pos":  "Noun",
        "word":  "Collaboration",
        "translation":  "İş birliği",
        "sentence":  "The new song was a collaboration between two famous singers."
    },
    {
        "pos":  "Verb",
        "word":  "Collapse",
        "translation":  "Noun",
        "sentence":  "Çökmek"
    },
    {
        "pos":  "Noun",
        "word":  "Colleague",
        "translation":  "Meslektaş",
        "sentence":  "My colleagues at the firm are very helpful and experienced."
    },
    {
        "pos":  "Verb",
        "word":  "Collect",
        "translation":  "Biriktirmek, toplamak",
        "sentence":  "I like to collect historical data on palladium prices."
    },
    {
        "pos":  "Noun",
        "word":  "Collection",
        "translation":  "Koleksiyon",
        "sentence":  "He has an impressive collection of silver bars and coins."
    },
    {
        "pos":  "Adjective",
        "word":  "Collective",
        "translation":  "Ortak, kolektif",
        "sentence":  "It was a collective decision made by the whole team."
    },
    {
        "pos":  "Noun",
        "word":  "Collector",
        "translation":  "Koleksiyoncu",
        "sentence":  "He is an enthusiastic collector of antique coins."
    },
    {
        "pos":  "Noun",
        "word":  "College",
        "translation":  "Kolej, üniversite",
        "sentence":  "She graduated from college with a degree in architecture."
    },
    {
        "pos":  "Noun",
        "word":  "Collision",
        "translation":  "Çarpışma",
        "sentence":  "The two cars were involved in a head-on collision."
    },
    {
        "pos":  "Adjective",
        "word":  "Colonial",
        "translation":  "Sömürge, koloni",
        "sentence":  "The city has many beautiful buildings from the colonial era."
    },
    {
        "pos":  "Noun",
        "word":  "Colony",
        "translation":  "Koloni, sömürge",
        "sentence":  "Brazil was once a Portuguese colony."
    },
    {
        "pos":  "Noun",
        "word":  "Color",
        "translation":  "Renk",
        "sentence":  "What is your favorite color for the kids\u0027 channel logo?"
    },
    {
        "pos":  "Adjective",
        "word":  "Colored",
        "translation":  "Renkli",
        "sentence":  "The kids were playing with several colored blocks in the park."
    },
    {
        "pos":  "Adjective",
        "word":  "Colorful",
        "translation":  "Renkli",
        "sentence":  "The garden was full of colorful summer flowers."
    },
    {
        "pos":  "Noun",
        "word":  "Column",
        "translation":  "Sütun",
        "sentence":  "Please enter the supplier names in the first column of the table."
    },
    {
        "pos":  "Noun",
        "word":  "Columnist",
        "translation":  "Köşe yazarı",
        "sentence":  "She is a well-known columnist for a national newspaper."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Combat",
        "translation":  "Dövüş, mücadele / Mücadele etmek",
        "sentence":  "New measures were introduced to combat crime in the city."
    },
    {
        "pos":  "Noun",
        "word":  "Combination",
        "translation":  "Kombinasyon",
        "sentence":  "A combination of low price and high quality is our goal."
    },
    {
        "pos":  "Verb",
        "word":  "Combine",
        "translation":  "Birleştirmek",
        "sentence":  "We can combine these two orders to save on shipping costs."
    },
    {
        "pos":  "Verb",
        "word":  "Come",
        "translation":  "Gelmek",
        "sentence":  "Please come to my office at 10 AM for the performance review."
    },
    {
        "pos":  "Noun",
        "word":  "Comedy",
        "translation":  "Komedi",
        "sentence":  "We watched a very funny comedy at the cinema last night."
    },
    {
        "pos":  "Noun",
        "word":  "Comfort",
        "translation":  "Verb",
        "sentence":  "Konfor, rahatlık"
    },
    {
        "pos":  "Adjective",
        "word":  "Comfortable",
        "translation":  "Rahat, konforlu",
        "sentence":  "The flight to İzmir was very comfortable and smooth."
    },
    {
        "pos":  "Adjective / Noun",
        "word":  "Comic",
        "translation":  "Komik / Çizgi roman",
        "sentence":  "He has a large collection of vintage comic books."
    },
    {
        "pos":  "Noun",
        "word":  "Command",
        "translation":  "Verb",
        "sentence":  "Emir"
    },
    {
        "pos":  "Noun",
        "word":  "Commander",
        "translation":  "Komutan",
        "sentence":  "The commander ordered the troops to retreat."
    },
    {
        "pos":  "Verb",
        "word":  "Commence",
        "translation":  "Başlamak",
        "sentence":  "The graduation ceremony will commence at ten o\u0027clock."
    },
    {
        "pos":  "Noun",
        "word":  "Comment",
        "translation":  "Verb",
        "sentence":  "Yorum"
    },
    {
        "pos":  "Noun",
        "word":  "Commentary",
        "translation":  "Yorum, analiz",
        "sentence":  "The sports channel provided a live commentary on the game."
    },
    {
        "pos":  "Noun",
        "word":  "Commentator",
        "translation":  "Yorumcu",
        "sentence":  "He is a famous political commentator on television."
    },
    {
        "pos":  "Noun",
        "word":  "Commerce",
        "translation":  "Ticaret",
        "sentence":  "The city has been a center of commerce for centuries."
    },
    {
        "pos":  "Adj.",
        "word":  "Commercial",
        "translation":  "Noun",
        "sentence":  "Ticari"
    },
    {
        "pos":  "Noun",
        "word":  "Commission",
        "translation":  "Verb",
        "sentence":  "Komisyon"
    },
    {
        "pos":  "Noun",
        "word":  "Commissioner",
        "translation":  "Komiser, kurul üyesi, yetkili",
        "sentence":  "The police commissioner announced the new safety measures."
    },
    {
        "pos":  "Verb",
        "word":  "Commit",
        "translation":  "İşlemek, adamak",
        "sentence":  "The company is ready to commit more resources to cost reduction."
    },
    {
        "pos":  "Noun",
        "word":  "Commitment",
        "translation":  "Bağlılık, taahhüt",
        "sentence":  "His commitment to the firm over the last five years is outstanding."
    },
    {
        "pos":  "Noun",
        "word":  "Committee",
        "translation":  "Komite",
        "sentence":  "The sourcing committee will meet on Friday to discuss the suppliers."
    },
    {
        "pos":  "Noun",
        "word":  "Commodity",
        "translation":  "Emtia, ticari mal",
        "sentence":  "Oil is one of the world\u0027s most important commodities."
    },
    {
        "pos":  "Adjective",
        "word":  "Common",
        "translation":  "Yaygın, ortak",
        "sentence":  "It is a common mistake to ignore small cost-down opportunities."
    },
    {
        "pos":  "Adverb",
        "word":  "Commonly",
        "translation":  "Yaygın olarak",
        "sentence":  "Silver is commonly used in both jewelry and industrial products."
    },
    {
        "pos":  "Verb",
        "word":  "Communicate",
        "translation":  "İletişim kurmak",
        "sentence":  "We must communicate our requirements clearly to the alternative firm."
    },
    {
        "pos":  "Noun",
        "word":  "Communication",
        "translation":  "İletişim",
        "sentence":  "Good communication is essential for a successful supply chain."
    },
    {
        "pos":  "Adjective",
        "word":  "Communist",
        "translation":  "Komünist",
        "sentence":  "The country was ruled by the Communist Party for decades."
    },
    {
        "pos":  "Noun",
        "word":  "Community",
        "translation":  "Topluluk",
        "sentence":  "He is very active in the local business community in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Companion",
        "translation":  "Arkadaş, yoldaş",
        "sentence":  "My dog is my constant companion on my walks."
    },
    {
        "pos":  "Noun",
        "word":  "Company",
        "translation":  "Şirket",
        "sentence":  "I have been working for my company for nearly five years."
    },
    {
        "pos":  "Adjective",
        "word":  "Comparable",
        "translation":  "Karşılaştırılabilir, benzer",
        "sentence":  "The two products are of comparable quality."
    },
    {
        "pos":  "Adjective",
        "word":  "Comparative",
        "translation":  "Karşılaştırmalı, göreceli",
        "sentence":  "She is doing a comparative study of two different cultures."
    },
    {
        "pos":  "Verb",
        "word":  "Compare",
        "translation":  "Karşılaştırmak",
        "sentence":  "We need to compare the prices of different alternative materials."
    },
    {
        "pos":  "Noun",
        "word":  "Comparison",
        "translation":  "Karşılaştırma",
        "sentence":  "This table provides a comparison of the two financing options."
    },
    {
        "pos":  "Noun",
        "word":  "Compassion",
        "translation":  "Merhamet, şefkat",
        "sentence":  "We must show compassion for those who are less fortunate."
    },
    {
        "pos":  "Verb",
        "word":  "Compel",
        "translation":  "Zorlamak",
        "sentence":  "Illness may compel him to resign from his job."
    },
    {
        "pos":  "Adjective",
        "word":  "Compelling",
        "translation":  "İkna edici, sürükleyici",
        "sentence":  "The lawyer presented a compelling argument to the jury."
    },
    {
        "pos":  "Verb",
        "word":  "Compensate",
        "translation":  "Tazmin etmek, telafi etmek",
        "sentence":  "The company agreed to compensate the victims of the accident."
    },
    {
        "pos":  "Noun",
        "word":  "Compensation",
        "translation":  "Tazminat, bedel",
        "sentence":  "He received ten thousand dollars in compensation for his injuries."
    },
    {
        "pos":  "Verb",
        "word":  "Compete",
        "translation":  "Yarışmak, rekabet etmek",
        "sentence":  "Our firm must compete with global suppliers on price and quality."
    },
    {
        "pos":  "Noun",
        "word":  "Competence",
        "translation":  "Yetkinlik, yeterlilik",
        "sentence":  "The job requires a high level of technical competence."
    },
    {
        "pos":  "Adjective",
        "word":  "Competent",
        "translation":  "Yetkin, becerikli",
        "sentence":  "She is a highly competent lawyer with years of experience."
    },
    {
        "pos":  "Noun",
        "word":  "Competition",
        "translation":  "Rekabet, yarışma",
        "sentence":  "There is a lot of competition in the precious metals market."
    },
    {
        "pos":  "Adjective",
        "word":  "Competitive",
        "translation":  "Rekabetçi",
        "sentence":  "The alternative firm offered a very competitive price."
    },
    {
        "pos":  "Noun",
        "word":  "Competitor",
        "translation":  "Rakip",
        "sentence":  "We are monitoring our main competitor\u0027s cost reduction strategies."
    },
    {
        "pos":  "Verb",
        "word":  "Compile",
        "translation":  "Derlemek, toplamak",
        "sentence":  "It took weeks to compile the data for the report."
    },
    {
        "pos":  "Verb",
        "word":  "Complain",
        "translation":  "Şikayet etmek",
        "sentence":  "Customers might complain if the quality of the product drops."
    },
    {
        "pos":  "Noun",
        "word":  "Complaint",
        "translation":  "Şikayet",
        "sentence":  "We received a complaint about the late delivery of raw materials."
    },
    {
        "pos":  "Verb",
        "word":  "Complement",
        "translation":  "Tamamlamak",
        "sentence":  "The red wine will complement the flavor of the meat perfectly."
    },
    {
        "pos":  "Adj.",
        "word":  "Complete",
        "translation":  "Verb",
        "sentence":  "Tam, tamam"
    },
    {
        "pos":  "Adverb",
        "word":  "Completely",
        "translation":  "Tamamen",
        "sentence":  "I completely forgot about the meeting at the airport."
    },
    {
        "pos":  "Noun",
        "word":  "Completion",
        "translation":  "Tamamlama, bitirme",
        "sentence":  "The project is nearing completion after two years of work."
    },
    {
        "pos":  "Adj.",
        "word":  "Complex",
        "translation":  "Noun",
        "sentence":  "Karmaşık"
    },
    {
        "pos":  "Noun",
        "word":  "Complexity",
        "translation":  "Karmaşıklık",
        "sentence":  "I was surprised by the complexity of the situation."
    },
    {
        "pos":  "Noun",
        "word":  "Compliance",
        "translation":  "Uyumluluk, riayet",
        "sentence":  "The company is in full compliance with safety regulations."
    },
    {
        "pos":  "Adjective",
        "word":  "Complicated",
        "translation":  "Karışık, karmaşık",
        "sentence":  "The car financing process was more complicated than I expected."
    },
    {
        "pos":  "Noun",
        "word":  "Complication",
        "translation":  "Komplikasyon, karmaşa",
        "sentence":  "The surgery was successful, but there were some minor complications."
    },
    {
        "pos":  "Verb",
        "word":  "Comply",
        "translation":  "Uymak, itaat etmek",
        "sentence":  "All visitors must comply with the site\u0027s security rules."
    },
    {
        "pos":  "Noun",
        "word":  "Component",
        "translation":  "Bileşen, parça",
        "sentence":  "We are looking for a cheaper source for this electronic component."
    },
    {
        "pos":  "Verb",
        "word":  "Compose",
        "translation":  "Bestelemek, oluşturmak",
        "sentence":  "Mozart began to compose music at a very young age."
    },
    {
        "pos":  "Noun",
        "word":  "Composer",
        "translation":  "Besteci",
        "sentence":  "He is one of the most famous film music composers in the world."
    },
    {
        "pos":  "Noun",
        "word":  "Composition",
        "translation":  "Kompozisyon, eser, yapı",
        "sentence":  "The composition of the soil varies from region to region."
    },
    {
        "pos":  "Noun",
        "word":  "Compound",
        "translation":  "Bileşik, yerleşke",
        "sentence":  "Water is a chemical compound consisting of hydrogen and oxygen."
    },
    {
        "pos":  "Adjective",
        "word":  "Comprehensive",
        "translation":  "Kapsamlı, detaylı",
        "sentence":  "The book provides a comprehensive guide to local history."
    },
    {
        "pos":  "Verb",
        "word":  "Comprise",
        "translation":  "Oluşturmak, kapsamak",
        "sentence":  "The committee is comprised of representatives from all departments."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Compromise",
        "translation":  "Uzlaşma / Uzlaşmak",
        "sentence":  "After long negotiations, they finally reached a compromise."
    },
    {
        "pos":  "Adjective",
        "word":  "Compulsory",
        "translation":  "Zorunlu",
        "sentence":  "Primary education is compulsory in most countries."
    },
    {
        "pos":  "Verb",
        "word":  "Compute",
        "translation":  "Hesaplamak",
        "sentence":  "We need to compute the total cost of the repairs."
    },
    {
        "pos":  "Noun",
        "word":  "Computer",
        "translation":  "Bilgisayar",
        "sentence":  "I use my computer to track alternative raw material prices."
    },
    {
        "pos":  "Verb",
        "word":  "Conceal",
        "translation":  "Gizlemek",
        "sentence":  "He tried to conceal the truth from his family."
    },
    {
        "pos":  "Verb",
        "word":  "Concede",
        "translation":  "Kabul etmek (istemeyerek), yenilgiyi kabul etmek",
        "sentence":  "The government was forced to concede that its policy had failed."
    },
    {
        "pos":  "Verb",
        "word":  "Conceive",
        "translation":  "Tasarlamak, hamile kalmak, hayal etmek",
        "sentence":  "It is difficult to conceive of a world without the internet."
    },
    {
        "pos":  "Verb",
        "word":  "Concentrate",
        "translation":  "Konsantre olmak",
        "sentence":  "I need to concentrate on the cost-down study this afternoon."
    },
    {
        "pos":  "Noun",
        "word":  "Concentration",
        "translation":  "Konsantrasyon",
        "sentence":  "The silver concentration in the ore was higher than expected."
    },
    {
        "pos":  "Noun",
        "word":  "Concept",
        "translation":  "Kavram, konsept",
        "sentence":  "The concept of the new YouTube channel is both educational and fun."
    },
    {
        "pos":  "Noun",
        "word":  "Conception",
        "translation":  "Kavram, anlayış, gebe kalma",
        "sentence":  "My conception of the project was quite different from yours."
    },
    {
        "pos":  "Noun",
        "word":  "Concern",
        "translation":  "Verb",
        "sentence":  "Endişe"
    },
    {
        "pos":  "Adjective",
        "word":  "Concerned",
        "translation":  "Endişeli",
        "sentence":  "Management is concerned about the delay in the supply chain."
    },
    {
        "pos":  "Noun",
        "word":  "Concert",
        "translation":  "Konser",
        "sentence":  "I want to go to a jazz concert in İzmir to relax this weekend."
    },
    {
        "pos":  "Noun",
        "word":  "Concession",
        "translation":  "Taviz, ödün",
        "sentence":  "The company made several concessions to the workers\u0027 union."
    },
    {
        "pos":  "Verb",
        "word":  "Conclude",
        "translation":  "Sonuçlandırmak",
        "sentence":  "We hope to conclude the negotiations with the firm by Friday."
    },
    {
        "pos":  "Noun",
        "word":  "Conclusion",
        "translation":  "Sonuç",
        "sentence":  "The conclusion of the report shows that we can save 10% this year."
    },
    {
        "pos":  "Adjective / Noun",
        "word":  "Concrete",
        "translation":  "Somut / Beton",
        "sentence":  "The house was built with reinforced concrete."
    },
    {
        "pos":  "Verb",
        "word":  "Condemn",
        "translation":  "Kınamak, mahkum etmek",
        "sentence":  "World leaders were quick to condemn the terrorist attack."
    },
    {
        "pos":  "Noun",
        "word":  "Condition",
        "translation":  "Koşul, durum",
        "sentence":  "The raw materials arrived at the warehouse in perfect condition."
    },
    {
        "pos":  "Verb",
        "word":  "Conduct",
        "translation":  "Noun",
        "sentence":  "Yürütmek"
    },
    {
        "pos":  "Verb",
        "word":  "Confer",
        "translation":  "Görüşmek, danışmak, (unvan vb.) vermek",
        "sentence":  "The king decided to confer a knighthood on the scientist."
    },
    {
        "pos":  "Noun",
        "word":  "Conference",
        "translation":  "Konferans",
        "sentence":  "I attended an international conference on asset management."
    },
    {
        "pos":  "Verb",
        "word":  "Confess",
        "translation":  "İtiraf etmek",
        "sentence":  "He finally decided to confess to the crime."
    },
    {
        "pos":  "Noun",
        "word":  "Confession",
        "translation":  "İtiraf",
        "sentence":  "The suspect made a full confession to the police."
    },
    {
        "pos":  "Noun",
        "word":  "Confidence",
        "translation":  "Güven",
        "sentence":  "Having confidence in your supplier is essential for a long-term partnership."
    },
    {
        "pos":  "Adjective",
        "word":  "Confident",
        "translation":  "Kendinden emin",
        "sentence":  "I am confident that our cost-down strategy will be successful."
    },
    {
        "pos":  "Noun",
        "word":  "Configuration",
        "translation":  "Yapılandırma, şekil",
        "sentence":  "You can change the configuration of the software in the settings menu."
    },
    {
        "pos":  "Verb",
        "word":  "Confine",
        "translation":  "Sınırlamak, hapsetmek",
        "sentence":  "Please confine your remarks to the subject of the meeting."
    },
    {
        "pos":  "Verb",
        "word":  "Confirm",
        "translation":  "Onaylamak, teyit etmek",
        "sentence":  "Please confirm your attendance for the fifth-year anniversary dinner."
    },
    {
        "pos":  "Noun",
        "word":  "Confirmation",
        "translation":  "Onay, doğrulama",
        "sentence":  "We are still waiting for confirmation of the flight time."
    },
    {
        "pos":  "Noun",
        "word":  "Conflict",
        "translation":  "Verb",
        "sentence":  "Çatışma"
    },
    {
        "pos":  "Verb",
        "word":  "Confront",
        "translation":  "Yüzleşmek, karşı karşıya gelmek",
        "sentence":  "We need to confront the problem before it gets any worse."
    },
    {
        "pos":  "Noun",
        "word":  "Confrontation",
        "translation":  "Yüzleşme, çatışma",
        "sentence":  "The confrontation between the two leaders lasted for hours."
    },
    {
        "pos":  "Verb",
        "word":  "Confuse",
        "translation":  "Kafasını karıştırmak",
        "sentence":  "Too many variables in the calculation can confuse the team."
    },
    {
        "pos":  "Adjective",
        "word":  "Confused",
        "translation":  "Kafası karışmış",
        "sentence":  "He looked confused when I explained the car financing options."
    },
    {
        "pos":  "Adjective",
        "word":  "Confusing",
        "translation":  "Kafa karıştırıcı",
        "sentence":  "The instructions for the English taboo game were a bit confusing."
    },
    {
        "pos":  "Noun",
        "word":  "Confusion",
        "translation":  "Karışıklık",
        "sentence":  "There was some confusion about the date of the meeting."
    },
    {
        "pos":  "Verb",
        "word":  "Congratulate",
        "translation":  "Tebrik etmek",
        "sentence":  "I’d like to congratulate you on your promotion."
    },
    {
        "pos":  "Noun",
        "word":  "Congregation",
        "translation":  "Cemaat",
        "sentence":  "The priest addressed the congregation during the morning service."
    },
    {
        "pos":  "Noun",
        "word":  "Congress",
        "translation":  "Kongre",
        "sentence":  "The medical congress in İzmir attracted experts from all over the world."
    },
    {
        "pos":  "Adjective",
        "word":  "Congressional",
        "translation":  "Kongre ile ilgili",
        "sentence":  "The proposal requires congressional approval before it can become law."
    },
    {
        "pos":  "Verb",
        "word":  "Connect",
        "translation":  "Bağlamak",
        "sentence":  "You can connect your laptop to the large screen in the meeting room."
    },
    {
        "pos":  "Adjective",
        "word":  "Connected",
        "translation":  "Bağlantılı",
        "sentence":  "The two issues are closely connected to the global metal crisis."
    },
    {
        "pos":  "Noun",
        "word":  "Connection",
        "translation":  "Bağlantı",
        "sentence":  "A strong connection with alternative suppliers is vital for our firm."
    },
    {
        "pos":  "Verb",
        "word":  "Conquer",
        "translation":  "Fethetmek",
        "sentence":  "The army managed to conquer the city after a long siege."
    },
    {
        "pos":  "Noun",
        "word":  "Conscience",
        "translation":  "Vicdan",
        "sentence":  "He has a guilty conscience about what he did."
    },
    {
        "pos":  "Adjective",
        "word":  "Conscious",
        "translation":  "Bilinçli",
        "sentence":  "We are making a conscious effort to reduce our carbon footprint."
    },
    {
        "pos":  "Noun",
        "word":  "Consciousness",
        "translation":  "Bilinç",
        "sentence":  "The patient regained consciousness shortly after the surgery."
    },
    {
        "pos":  "Adjective",
        "word":  "Consecutive",
        "translation":  "Ardışık",
        "sentence":  "It has rained for three consecutive days."
    },
    {
        "pos":  "Noun",
        "word":  "Consensus",
        "translation":  "Fikir birliği, konsensüs",
        "sentence":  "There is a general consensus that the current law needs to change."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Consent",
        "translation":  "Rıza, onay / Razı olmak",
        "sentence":  "You must obtain the patient\u0027s consent before the operation."
    },
    {
        "pos":  "Noun",
        "word":  "Consequence",
        "translation":  "Sonuç",
        "sentence":  "A drop in quality would be a serious consequence of choosing the wrong firm."
    },
    {
        "pos":  "Adverb",
        "word":  "Consequently",
        "translation":  "Sonuç olarak",
        "sentence":  "He failed his exams and consequently lost his scholarship."
    },
    {
        "pos":  "Noun",
        "word":  "Conservation",
        "translation":  "Koruma (doğa vb.)",
        "sentence":  "The organization is dedicated to the conservation of wildlife."
    },
    {
        "pos":  "Adj.",
        "word":  "Conservative",
        "translation":  "Noun",
        "sentence":  "Muhafazakar, tutucu"
    },
    {
        "pos":  "Verb",
        "word":  "Conserve",
        "translation":  "Korumak, muhafaza etmek",
        "sentence":  "We need to find ways to conserve energy in our homes."
    },
    {
        "pos":  "Verb",
        "word":  "Consider",
        "translation":  "Düşünmek, dikkate almak",
        "sentence":  "We should consider the long-term benefits of this investment."
    },
    {
        "pos":  "Adjective",
        "word":  "Considerable",
        "translation":  "Önemli, azımsanmayacak",
        "sentence":  "The project will require a considerable amount of time and money."
    },
    {
        "pos":  "Adverb",
        "word":  "Considerably",
        "translation":  "Önemli ölçüde",
        "sentence":  "The price of gas has risen considerably in the last month."
    },
    {
        "pos":  "Noun",
        "word":  "Consideration",
        "translation":  "Düşünme, dikkate alma",
        "sentence":  "Your suggestion for the children\u0027s channel is under consideration."
    },
    {
        "pos":  "Verb",
        "word":  "Consist",
        "translation":  "-den oluşmak",
        "sentence":  "The raw material shipment will consist of silver and palladium."
    },
    {
        "pos":  "Noun",
        "word":  "Consistency",
        "translation":  "Tutarlılık, kıvam",
        "sentence":  "Consistency is the key to success in any long-term project."
    },
    {
        "pos":  "Adjective",
        "word":  "Consistent",
        "translation":  "İstikrarlı, tutarlı",
        "sentence":  "We need a consistent supply of alternative materials for production."
    },
    {
        "pos":  "Adverb",
        "word":  "Consistently",
        "translation":  "Tutarlı bir şekilde",
        "sentence":  "She has consistently been the top student in her class."
    },
    {
        "pos":  "Verb",
        "word":  "Consolidate",
        "translation":  "Güçlendirmek, birleştirmek",
        "sentence":  "The company is looking to consolidate its position in the market."
    },
    {
        "pos":  "Noun",
        "word":  "Conspiracy",
        "translation":  "Komplo",
        "sentence":  "They were charged with conspiracy to commit fraud."
    },
    {
        "pos":  "Adjective",
        "word":  "Constant",
        "translation":  "Sabit, sürekli",
        "sentence":  "The constant change in exchange rates makes budgeting difficult."
    },
    {
        "pos":  "Adverb",
        "word":  "Constantly",
        "translation":  "Sürekli olarak",
        "sentence":  "I am constantly looking for ways to improve our sourcing strategy."
    },
    {
        "pos":  "Verb",
        "word":  "Constitute",
        "translation":  "Oluşturmak, teşkil etmek",
        "sentence":  "These findings constitute a major breakthrough in the field."
    },
    {
        "pos":  "Noun",
        "word":  "Constitution",
        "translation":  "Anayasa",
        "sentence":  "The right to free speech is guaranteed by the constitution."
    },
    {
        "pos":  "Adjective",
        "word":  "Constitutional",
        "translation":  "Anayasal",
        "sentence":  "The court ruled that the new law was constitutional."
    },
    {
        "pos":  "Noun",
        "word":  "Constraint",
        "translation":  "Kısıtlama, zorlama",
        "sentence":  "Financial constraints prevented us from buying a new car."
    },
    {
        "pos":  "Verb",
        "word":  "Construct",
        "translation":  "İnşa etmek, kurmak",
        "sentence":  "It takes time to construct a reliable network of alternative firms."
    },
    {
        "pos":  "Noun",
        "word":  "Construction",
        "translation":  "İnşaat",
        "sentence":  "The construction of the new warehouse in İzmir is almost finished."
    },
    {
        "pos":  "Verb",
        "word":  "Consult",
        "translation":  "Danışmak",
        "sentence":  "You should consult a lawyer before signing any contract."
    },
    {
        "pos":  "Noun",
        "word":  "Consultant",
        "translation":  "Danışman",
        "sentence":  "He works as a management consultant for a large firm."
    },
    {
        "pos":  "Noun",
        "word":  "Consultation",
        "translation":  "Konsültasyon, danışma",
        "sentence":  "The decision was made after extensive consultation with the staff."
    },
    {
        "pos":  "Verb",
        "word":  "Consume",
        "translation":  "Tüketmek",
        "sentence":  "How much energy does this new machine consume per hour?"
    },
    {
        "pos":  "Noun",
        "word":  "Consumer",
        "translation":  "Tüketici",
        "sentence":  "The consumer demand for electric vehicles is driving palladium prices."
    },
    {
        "pos":  "Noun",
        "word":  "Consumption",
        "translation":  "Tüketim",
        "sentence":  "The country\u0027s energy consumption has increased significantly."
    },
    {
        "pos":  "Noun",
        "word":  "Contact",
        "translation":  "Verb",
        "sentence":  "İletişim"
    },
    {
        "pos":  "Verb",
        "word":  "Contain",
        "translation":  "İçermek",
        "sentence":  "These reports contain sensitive data about our cost-down studies."
    },
    {
        "pos":  "Noun",
        "word":  "Container",
        "translation":  "Konteynır, kap",
        "sentence":  "The silver bars are stored in a secure container in the vault."
    },
    {
        "pos":  "Verb",
        "word":  "Contemplate",
        "translation":  "Düşünmek, tasarlamak",
        "sentence":  "He is contemplating a career change."
    },
    {
        "pos":  "Adjective",
        "word":  "Contemporary",
        "translation":  "Çağdaş, modern",
        "sentence":  "The office has a contemporary design that inspires creativity."
    },
    {
        "pos":  "Noun",
        "word":  "Contempt",
        "translation":  "Aşağılama, küçümseme",
        "sentence":  "He has nothing but contempt for people who lie."
    },
    {
        "pos":  "Verb",
        "word":  "Contend",
        "translation":  "İddia etmek, mücadele etmek",
        "sentence":  "The lawyer contended that his client was innocent."
    },
    {
        "pos":  "Noun",
        "word":  "Contender",
        "translation":  "Rakip, aday",
        "sentence":  "He is a leading contender for the world title."
    },
    {
        "pos":  "Adjective",
        "word":  "Content",
        "translation":  "Memnun, hoşnut",
        "sentence":  "She was content to sit quietly and read her book."
    },
    {
        "pos":  "Noun",
        "word":  "Content1",
        "translation":  "İçerik",
        "sentence":  "The content of the YouTube channel will be suitable for ages 2 to 6."
    },
    {
        "pos":  "Noun",
        "word":  "Contention",
        "translation":  "Tartışma, iddia",
        "sentence":  "It is my contention that the plan will not work."
    },
    {
        "pos":  "Noun",
        "word":  "Contest",
        "translation":  "Verb",
        "sentence":  "Yarışma"
    },
    {
        "pos":  "Noun",
        "word":  "Context",
        "translation":  "Bağlam",
        "sentence":  "In this context, \"yield\" refers to the return on our investment."
    },
    {
        "pos":  "Noun",
        "word":  "Continent",
        "translation":  "Kıta",
        "sentence":  "We source raw materials from almost every continent in the world."
    },
    {
        "pos":  "Adverb",
        "word":  "Continually",
        "translation":  "Sürekli olarak",
        "sentence":  "The software is continually being updated."
    },
    {
        "pos":  "Verb",
        "word":  "Continue",
        "translation":  "Devam etmek",
        "sentence":  "We will continue our search for a more affordable alternative supplier."
    },
    {
        "pos":  "Adjective",
        "word":  "Continuous",
        "translation":  "Sürekli, kesintisiz",
        "sentence":  "Continuous improvement is one of the core values of our company."
    },
    {
        "pos":  "Noun",
        "word":  "Contract",
        "translation":  "Verb",
        "sentence":  "Sözleşme"
    },
    {
        "pos":  "Noun",
        "word":  "Contractor",
        "translation":  "Müteahhit, üstlenici",
        "sentence":  "The building contractor promised to finish the work by June."
    },
    {
        "pos":  "Noun",
        "word":  "Contradiction",
        "translation":  "Çelişki",
        "sentence":  "There is a clear contradiction between his words and his actions."
    },
    {
        "pos":  "Adjective / Noun",
        "word":  "Contrary",
        "translation":  "Aksine, zıt",
        "sentence":  "Contrary to popular belief, the desert can be very cold at night."
    },
    {
        "pos":  "Noun",
        "word":  "Contrast",
        "translation":  "Verb",
        "sentence":  "Karşıtlık"
    },
    {
        "pos":  "Verb",
        "word":  "Contribute",
        "translation":  "Katkıda bulunmak",
        "sentence":  "Every team member can contribute to the cost reduction goals."
    },
    {
        "pos":  "Noun",
        "word":  "Contribution",
        "translation":  "Katkı",
        "sentence":  "Your contribution to the strategic sourcing project has been excellent."
    },
    {
        "pos":  "Noun",
        "word":  "Contributor",
        "translation":  "Katkıda bulunan kişi/yazar",
        "sentence":  "He is a regular contributor to several medical journals."
    },
    {
        "pos":  "Noun",
        "word":  "Control",
        "translation":  "Verb",
        "sentence":  "Kontrol"
    },
    {
        "pos":  "Adjective",
        "word":  "Controversial",
        "translation":  "Tartışmalı",
        "sentence":  "The government\u0027s decision to raise taxes was very controversial."
    },
    {
        "pos":  "Noun",
        "word":  "Controversy",
        "translation":  "Tartışma",
        "sentence":  "The new movie has caused a lot of controversy."
    },
    {
        "pos":  "Noun",
        "word":  "Convenience",
        "translation":  "Uygunluk, kolaylık",
        "sentence":  "For your convenience, the shop is open 24 hours a day."
    },
    {
        "pos":  "Adjective",
        "word":  "Convenient",
        "translation":  "Uygun, elverişli",
        "sentence":  "Buying a car through the Birevim system might be convenient for you."
    },
    {
        "pos":  "Noun",
        "word":  "Convention",
        "translation":  "Kongre, gelenek, sözleşme",
        "sentence":  "The city is hosting a large medical convention this week."
    },
    {
        "pos":  "Adjective",
        "word":  "Conventional",
        "translation":  "Geleneksel",
        "sentence":  "Conventional medicine has no cure for this disease."
    },
    {
        "pos":  "Noun",
        "word":  "Conversation",
        "translation":  "Sohbet",
        "sentence":  "I had a brief conversation with my boss about my fifth-year review."
    },
    {
        "pos":  "Noun",
        "word":  "Conversion",
        "translation":  "Dönüşüm",
        "sentence":  "The conversion of the old warehouse into apartments took a year."
    },
    {
        "pos":  "Verb",
        "word":  "Convert",
        "translation":  "Dönüştürmek",
        "sentence":  "We need to convert the weight from grams to ounces for the report."
    },
    {
        "pos":  "Verb",
        "word":  "Convey",
        "translation":  "İletmek, nakletmek",
        "sentence":  "It is difficult to convey the beauty of the landscape in words."
    },
    {
        "pos":  "Verb",
        "word":  "Convict",
        "translation":  "Mahkum etmek",
        "sentence":  "The jury decided to convict him of the crime."
    },
    {
        "pos":  "Noun",
        "word":  "Conviction",
        "translation":  "Mahkumiyet, güçlü inanç",
        "sentence":  "She has a deep conviction that justice will prevail."
    },
    {
        "pos":  "Verb",
        "word":  "Convince",
        "translation":  "İkna etmek",
        "sentence":  "It was hard to convince the supplier to lower their prices."
    },
    {
        "pos":  "Adjective",
        "word":  "Convinced",
        "translation":  "İkna olmuş",
        "sentence":  "I am convinced that palladium is a good investment for 2026."
    },
    {
        "pos":  "Adjective",
        "word":  "Convincing",
        "translation":  "İkna edici",
        "sentence":  "He provided a very convincing explanation for his absence."
    },
    {
        "pos":  "Verb",
        "word":  "Cook",
        "translation":  "Noun",
        "sentence":  "Yemek pişirmek"
    },
    {
        "pos":  "Noun",
        "word":  "Cookie",
        "translation":  "Kurabiye",
        "sentence":  "Would you like a cookie with your afternoon coffee?"
    },
    {
        "pos":  "Noun",
        "word":  "Cooking",
        "translation":  "Yemek pişirme",
        "sentence":  "Cooking is a great way to relieve stress after a long work week."
    },
    {
        "pos":  "Adj.",
        "word":  "Cool",
        "translation":  "Verb",
        "sentence":  "Serin, havalı"
    },
    {
        "pos":  "Verb",
        "word":  "Cooperate",
        "translation":  "İş birliği yapmak",
        "sentence":  "The two countries agreed to cooperate on environmental issues."
    },
    {
        "pos":  "Adjective",
        "word":  "Cooperative",
        "translation":  "İş birliğine açık, kooperatif",
        "sentence":  "The neighbors were very cooperative during the investigation."
    },
    {
        "pos":  "Verb",
        "word":  "Coordinate",
        "translation":  "Koordine etmek",
        "sentence":  "We need someone to coordinate the different parts of the project."
    },
    {
        "pos":  "Noun",
        "word":  "Coordination",
        "translation":  "Koordinasyon",
        "sentence":  "The rescue mission required close coordination between the police and the fire department."
    },
    {
        "pos":  "Noun",
        "word":  "Coordinator",
        "translation":  "Koordinatör",
        "sentence":  "She was appointed as the project coordinator."
    },
    {
        "pos":  "Noun",
        "word":  "Cop",
        "translation":  "Polis (argo)",
        "sentence":  "A cop pulled him over for speeding."
    },
    {
        "pos":  "Verb",
        "word":  "Cope",
        "translation":  "Başa çıkmak",
        "sentence":  "It is difficult to cope with the loss of a loved one."
    },
    {
        "pos":  "Noun",
        "word":  "Copper",
        "translation":  "Bakır",
        "sentence":  "The pipes in the old house were made of copper."
    },
    {
        "pos":  "Noun",
        "word":  "Copy",
        "translation":  "Verb",
        "sentence":  "Kopya"
    },
    {
        "pos":  "Noun",
        "word":  "Copyright",
        "translation":  "Telif hakkı",
        "sentence":  "The author holds the copyright to all her books."
    },
    {
        "pos":  "Noun",
        "word":  "Core",
        "translation":  "Adj.",
        "sentence":  "Çekirdek, ana"
    },
    {
        "pos":  "Noun",
        "word":  "Corn",
        "translation":  "Mısır",
        "sentence":  "Large fields of corn can be seen in the countryside near İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Corner",
        "translation":  "Köşe",
        "sentence":  "The alternative firm\u0027s office is located on the corner of the street."
    },
    {
        "pos":  "Adjective",
        "word":  "Corporate",
        "translation":  "Kurumsal",
        "sentence":  "We must follow the corporate guidelines for all international sourcing."
    },
    {
        "pos":  "Noun",
        "word":  "Corporation",
        "translation":  "Kurum, büyük şirket",
        "sentence":  "He works for a multinational corporation."
    },
    {
        "pos":  "Adj.",
        "word":  "Correct",
        "translation":  "Verb",
        "sentence":  "Doğru"
    },
    {
        "pos":  "Noun",
        "word":  "Correction",
        "translation":  "Düzeltme",
        "sentence":  "I have made a few small corrections to your essay."
    },
    {
        "pos":  "Adverb",
        "word":  "Correctly",
        "translation":  "Doğru bir şekilde",
        "sentence":  "Please ensure that all data is entered correctly into the system."
    },
    {
        "pos":  "Verb",
        "word":  "Correlate",
        "translation":  "İlişkilendirmek",
        "sentence":  "Scientists are trying to correlate diet with heart disease."
    },
    {
        "pos":  "Noun",
        "word":  "Correlation",
        "translation":  "Korelasyon, ilişki",
        "sentence":  "There is a strong correlation between smoking and lung cancer."
    },
    {
        "pos":  "Verb",
        "word":  "Correspond",
        "translation":  "Yazışmak, uyuşmak",
        "sentence":  "The two descriptions of the suspect do not correspond."
    },
    {
        "pos":  "Noun",
        "word":  "Correspondence",
        "translation":  "Yazışma, mektuplaşma",
        "sentence":  "I have a large pile of correspondence to deal with."
    },
    {
        "pos":  "Noun",
        "word":  "Correspondent",
        "translation":  "Muhabir",
        "sentence":  "He is the BBC\u0027s foreign correspondent in Washington."
    },
    {
        "pos":  "Adjective",
        "word":  "Corresponding",
        "translation":  "Karşılık gelen, benzer",
        "sentence":  "Sales have fallen, with a corresponding drop in profits."
    },
    {
        "pos":  "Noun",
        "word":  "Corridor",
        "translation":  "Koridor",
        "sentence":  "Her office is at the end of the long corridor."
    },
    {
        "pos":  "Adjective",
        "word":  "Corrupt",
        "translation":  "Yolsuzluk yapan, yozlaşmış",
        "sentence":  "The country is ruled by a corrupt regime."
    },
    {
        "pos":  "Noun",
        "word":  "Corruption",
        "translation":  "Yolsuzluk",
        "sentence":  "The government has promised to fight corruption at all levels."
    },
    {
        "pos":  "Noun",
        "word":  "Cost",
        "translation":  "Verb",
        "sentence":  "Maliyet"
    },
    {
        "pos":  "Adjective",
        "word":  "Costly",
        "translation":  "Pahalı, maliyetli",
        "sentence":  "The delay proved to be very costly for the company."
    },
    {
        "pos":  "Noun",
        "word":  "Costume",
        "translation":  "Kostüm",
        "sentence":  "The kids on the YouTube channel will wear colorful animal costumes."
    },
    {
        "pos":  "Noun",
        "word":  "Cotton",
        "translation":  "Pamuk",
        "sentence":  "The price of cotton has also been affected by the global supply crisis."
    },
    {
        "pos":  "Modal Verb",
        "word":  "Could",
        "translation":  "-ebilirdi, -ebilirdi",
        "sentence":  "Could you please send me the updated price list for silver?"
    },
    {
        "pos":  "Noun",
        "word":  "Council",
        "translation":  "Konsey, meclis",
        "sentence":  "The city council is planning to build a new park in our neighborhood."
    },
    {
        "pos":  "Noun",
        "word":  "Councilor",
        "translation":  "Konsey üyesi, meclis üyesi",
        "sentence":  "The local councilor promised to improve the park."
    },
    {
        "pos":  "Noun",
        "word":  "Counseling",
        "translation":  "Psikolojik danışmanlık",
        "sentence":  "She is receiving counseling to help her deal with her grief."
    },
    {
        "pos":  "Noun",
        "word":  "Counselor",
        "translation":  "Danışman, rehber",
        "sentence":  "The school counselor helps students with their problems."
    },
    {
        "pos":  "Verb",
        "word":  "Count",
        "translation":  "Noun",
        "sentence":  "Saymak"
    },
    {
        "pos":  "Noun",
        "word":  "Counter",
        "translation":  "Tezgah",
        "sentence":  "He placed the groceries on the counter."
    },
    {
        "pos":  "Verb",
        "word":  "Counter",
        "translation":  "Karşı çıkmak, karşı koymak",
        "sentence":  "The government is taking steps to counter the rise in crime."
    },
    {
        "pos":  "Noun",
        "word":  "Counterpart",
        "translation":  "Mevkidaş, karşılık",
        "sentence":  "The prime minister met with his German counterpart."
    },
    {
        "pos":  "Adjective",
        "word":  "Countless",
        "translation":  "Sayısız",
        "sentence":  "I\u0027ve told him countless times to be more careful."
    },
    {
        "pos":  "Noun",
        "word":  "Country",
        "translation":  "Ülke",
        "sentence":  "We are looking for alternative firms in more than one country."
    },
    {
        "pos":  "Noun",
        "word":  "Countryside",
        "translation":  "Kırsal kesim",
        "sentence":  "I enjoy driving through the countryside on my way to the factory."
    },
    {
        "pos":  "Noun",
        "word":  "County",
        "translation":  "İlçe, vilayet",
        "sentence":  "İzmir is a beautiful city located in a large county."
    },
    {
        "pos":  "Noun",
        "word":  "Coup",
        "translation":  "Darbe",
        "sentence":  "The military leader seized power in a sudden coup."
    },
    {
        "pos":  "Noun",
        "word":  "Couple",
        "translation":  "Çift",
        "sentence":  "A couple of alternative suppliers have already sent their quotes."
    },
    {
        "pos":  "Noun",
        "word":  "Courage",
        "translation":  "Cesaret",
        "sentence":  "It takes courage to suggest a completely new strategy to the board."
    },
    {
        "pos":  "Noun",
        "word":  "Course",
        "translation":  "Kurs, gidişat",
        "sentence":  "I am taking a German course to improve my professional skills."
    },
    {
        "pos":  "Noun",
        "word":  "Court",
        "translation":  "Mahkeme",
        "sentence":  "The dispute with the supplier might end up in court."
    },
    {
        "pos":  "Noun",
        "word":  "Courtesy",
        "translation":  "Nezaket",
        "sentence":  "It is a matter of common courtesy to say thank you."
    },
    {
        "pos":  "Noun",
        "word":  "Cousin",
        "translation":  "Kuzen",
        "sentence":  "My cousin is helping me with the digital content for the kids\u0027 channel."
    },
    {
        "pos":  "Verb",
        "word":  "Cover",
        "translation":  "Noun",
        "sentence":  "Kaplamak, örtmek"
    },
    {
        "pos":  "Noun",
        "word":  "Coverage",
        "translation":  "Kapsam, (basın) haberleri",
        "sentence":  "The wedding received a lot of television coverage."
    },
    {
        "pos":  "Adjective",
        "word":  "Covered",
        "translation":  "Kaplı, örtülü",
        "sentence":  "The warehouse floor is covered with high-quality protective material."
    },
    {
        "pos":  "Noun",
        "word":  "Cow",
        "translation":  "İnek",
        "sentence":  "The children\u0027s song on the channel is about a happy cow on a farm."
    },
    {
        "pos":  "Noun",
        "word":  "Cowboy",
        "translation":  "Kovboy",
        "sentence":  "The children love playing cowboys and Indians."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Crack",
        "translation":  "Çatlamak / Çatlak",
        "sentence":  "There is a large crack in the wall."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Craft",
        "translation":  "Zanaat, beceri / Özenle yapmak",
        "sentence":  "She is learning the craft of traditional weaving."
    },
    {
        "pos":  "Noun",
        "word":  "Crash",
        "translation":  "Verb",
        "sentence":  "Çarpışma, çökme"
    },
    {
        "pos":  "Verb",
        "word":  "Crawl",
        "translation":  "Emeklemek",
        "sentence":  "The baby is just starting to crawl."
    },
    {
        "pos":  "Adjective",
        "word":  "Crazy",
        "translation":  "Çılgın, deli",
        "sentence":  "The volatility in palladium prices lately is absolutely crazy."
    },
    {
        "pos":  "Noun",
        "word":  "Cream",
        "translation":  "Adj.",
        "sentence":  "Krema, krem rengi"
    },
    {
        "pos":  "Verb",
        "word":  "Create",
        "translation":  "Oluşturmak",
        "sentence":  "I want to create a self-evaluation note that highlights my achievements."
    },
    {
        "pos":  "Noun",
        "word":  "Creation",
        "translation":  "Oluşum, yaratılış",
        "sentence":  "The creation of the new sourcing department took several months."
    },
    {
        "pos":  "Adjective",
        "word":  "Creative",
        "translation":  "Yaratıcı",
        "sentence":  "We need to find creative ways to reduce our logistics costs."
    },
    {
        "pos":  "Noun",
        "word":  "Creativity",
        "translation":  "Yaratıcılık",
        "sentence":  "The job requires a high degree of creativity."
    },
    {
        "pos":  "Noun",
        "word":  "Creator",
        "translation":  "Yaratıcı, mucit",
        "sentence":  "He is the creator of a popular video game series."
    },
    {
        "pos":  "Noun",
        "word":  "Creature",
        "translation":  "Yaratık",
        "sentence":  "The cartoon features a friendly creature from another planet."
    },
    {
        "pos":  "Noun",
        "word":  "Credibility",
        "translation":  "Güvenilirlik",
        "sentence":  "The scandal has damaged the politician\u0027s credibility."
    },
    {
        "pos":  "Adjective",
        "word":  "Credible",
        "translation":  "İnandırıcı, güvenilir",
        "sentence":  "The police are looking for a credible witness to the accident."
    },
    {
        "pos":  "Noun",
        "word":  "Credit",
        "translation":  "Verb",
        "sentence":  "Kredi"
    },
    {
        "pos":  "Verb",
        "word":  "Creep",
        "translation":  "Sessizce sokulmak, sürünmek",
        "sentence":  "I saw him creep out of the room when he thought no one was looking."
    },
    {
        "pos":  "Noun",
        "word":  "Crew",
        "translation":  "Mürettebat, ekip",
        "sentence":  "The ground crew at Sabiha Gökçen worked hard to manage the delay."
    },
    {
        "pos":  "Noun",
        "word":  "Crime",
        "translation":  "Suç",
        "sentence":  "Financial fraud is a serious crime that we must guard against."
    },
    {
        "pos":  "Noun",
        "word":  "Criminal",
        "translation":  "Adj.",
        "sentence":  "Suçlu"
    },
    {
        "pos":  "Noun",
        "word":  "Crisis",
        "translation":  "Kriz",
        "sentence":  "The global metal crisis has significantly increased silver prices."
    },
    {
        "pos":  "Noun",
        "word":  "Criterion",
        "translation":  "Kriter",
        "sentence":  "Quality is the most important criterion in our supplier selection."
    },
    {
        "pos":  "Noun",
        "word":  "Critic",
        "translation":  "Eleştirmen",
        "sentence":  "He is a well-known food critic who writes for a local newspaper."
    },
    {
        "pos":  "Adjective",
        "word":  "Critical",
        "translation":  "Kritik",
        "sentence":  "Finding alternative raw materials is critical for our production."
    },
    {
        "pos":  "Adverb",
        "word":  "Critically",
        "translation":  "Eleştirel bir şekilde, ciddi olarak",
        "sentence":  "Several people were critically injured in the crash."
    },
    {
        "pos":  "Noun",
        "word":  "Criticism",
        "translation":  "Eleştiri",
        "sentence":  "I welcome constructive criticism on my performance review."
    },
    {
        "pos":  "Verb",
        "word":  "Criticize",
        "translation":  "Eleştirmek",
        "sentence":  "It is easy to criticize, but hard to find a better solution."
    },
    {
        "pos":  "Noun",
        "word":  "Critique",
        "translation":  "Eleştiri, inceleme",
        "sentence":  "The professor gave a detailed critique of my research paper."
    },
    {
        "pos":  "Noun",
        "word":  "Crop",
        "translation":  "Mahsul, ekin",
        "sentence":  "The wheat crop was affected by the lack of rain this spring."
    },
    {
        "pos":  "Verb",
        "word":  "Cross",
        "translation":  "Noun",
        "sentence":  "Karşıya geçmek"
    },
    {
        "pos":  "Noun",
        "word":  "Crowd",
        "translation":  "Kalabalık",
        "sentence":  "There was a large crowd of people waiting at the airport gate."
    },
    {
        "pos":  "Adjective",
        "word":  "Crowded",
        "translation":  "Kalabalık",
        "sentence":  "The ferry in İzmir is usually very crowded during rush hour."
    },
    {
        "pos":  "Noun",
        "word":  "Crown",
        "translation":  "Taç",
        "sentence":  "The queen wore a gold crown during the ceremony."
    },
    {
        "pos":  "Adjective",
        "word":  "Crucial",
        "translation":  "Çok önemli",
        "sentence":  "Accurate data is crucial for a successful cost-down study."
    },
    {
        "pos":  "Adjective",
        "word":  "Crude",
        "translation":  "Ham, işlenmemiş, kaba",
        "sentence":  "The country exports a lot of crude oil."
    },
    {
        "pos":  "Adjective",
        "word":  "Cruel",
        "translation":  "Zalim, acımasız",
        "sentence":  "The cruel winter weather made transportation very difficult."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Cruise",
        "translation":  "Gemi seyahati / (sabit hızla) gitmek",
        "sentence":  "They are going on a Mediterranean cruise this summer."
    },
    {
        "pos":  "Verb",
        "word":  "Crush",
        "translation":  "Ezmek",
        "sentence":  "Be careful not to crush the flowers."
    },
    {
        "pos":  "Verb",
        "word":  "Cry",
        "translation":  "Noun",
        "sentence":  "Ağlamak"
    },
    {
        "pos":  "Noun",
        "word":  "Crystal",
        "translation":  "Kristal",
        "sentence":  "The chandelier was made of thousands of small crystals."
    },
    {
        "pos":  "Noun",
        "word":  "Cue",
        "translation":  "İşaret, ipucu",
        "sentence":  "The actor missed his cue and entered the stage late."
    },
    {
        "pos":  "Noun / Adjective",
        "word":  "Cult",
        "translation":  "Tarikat, kült",
        "sentence":  "The movie has become a cult classic over the years."
    },
    {
        "pos":  "Verb",
        "word":  "Cultivate",
        "translation":  "Toprağı işlemek, geliştirmek",
        "sentence":  "The farmer is trying to cultivate new varieties of wheat."
    },
    {
        "pos":  "Adjective",
        "word":  "Cultural",
        "translation":  "Kültürel",
        "sentence":  "İzmir has a rich cultural heritage with many historical sites."
    },
    {
        "pos":  "Noun",
        "word":  "Culture",
        "translation":  "Kültür",
        "sentence":  "Learning about the local culture is important when sourcing abroad."
    },
    {
        "pos":  "Noun",
        "word":  "Cup",
        "translation":  "Fincan, kupa",
        "sentence":  "I\u0027ll have a cup of tea while I finish writing the anniversary note."
    },
    {
        "pos":  "Noun",
        "word":  "Cupboard",
        "translation":  "Erzak dolabı",
        "sentence":  "I found the alternative material samples in the storage cupboard."
    },
    {
        "pos":  "Verb",
        "word":  "Cure",
        "translation":  "Noun",
        "sentence":  "İyileştirmek"
    },
    {
        "pos":  "Noun",
        "word":  "Curiosity",
        "translation":  "Merak",
        "sentence":  "His curiosity led him to explore the abandoned house."
    },
    {
        "pos":  "Adjective",
        "word":  "Curious",
        "translation":  "Meraklı",
        "sentence":  "I was curious to know what was inside the box."
    },
    {
        "pos":  "Adjective",
        "word":  "Curly",
        "translation":  "Kıvırcık",
        "sentence":  "My niece has beautiful curly hair and a bright smile."
    },
    {
        "pos":  "Noun",
        "word":  "Currency",
        "translation":  "Para birimi",
        "sentence":  "We need to check the current currency exchange rates for the deal."
    },
    {
        "pos":  "Adjective",
        "word":  "Current",
        "translation":  "Noun",
        "sentence":  "Mevcut, güncel"
    },
    {
        "pos":  "Adverb",
        "word":  "Currently",
        "translation":  "Şu anda",
        "sentence":  "I am currently evaluating two different ways to buy a car."
    },
    {
        "pos":  "Noun",
        "word":  "Curriculum",
        "translation":  "Müfredat",
        "sentence":  "The school is introducing a new science curriculum."
    },
    {
        "pos":  "Noun",
        "word":  "Curtain",
        "translation":  "Perde",
        "sentence":  "We chose light blue curtains for the new office windows."
    },
    {
        "pos":  "Noun",
        "word":  "Curve",
        "translation":  "Verb",
        "sentence":  "Eğri"
    },
    {
        "pos":  "Adjective",
        "word":  "Curved",
        "translation":  "Eğri, kavisli",
        "sentence":  "The modern building has a unique curved glass facade."
    },
    {
        "pos":  "Noun",
        "word":  "Custody",
        "translation":  "Velayet, gözaltı",
        "sentence":  "The suspect was taken into police custody."
    },
    {
        "pos":  "Noun",
        "word":  "Custom",
        "translation":  "Gelenek, adet",
        "sentence":  "It is a local custom to offer tea to visitors in the office."
    },
    {
        "pos":  "Noun",
        "word":  "Customer",
        "translation":  "Müşteri",
        "sentence":  "Our goal is to provide high-quality products to every customer."
    },
    {
        "pos":  "Verb",
        "word":  "Cut",
        "translation":  "Noun",
        "sentence":  "Kesmek"
    },
    {
        "pos":  "Adjective",
        "word":  "Cute",
        "translation":  "Sevimli",
        "sentence":  "That is a very cute puppy."
    },
    {
        "pos":  "Noun",
        "word":  "Cutting",
        "translation":  "Kesim, kupür",
        "sentence":  "She kept a cutting of the newspaper article."
    },
    {
        "pos":  "Noun",
        "word":  "Cycle",
        "translation":  "Verb",
        "sentence":  "Döngü"
    },
    {
        "pos":  "Adjective",
        "word":  "Cynical",
        "translation":  "Kinik, kötümser",
        "sentence":  "He has a very cynical view of human nature."
    },
    {
        "pos":  "Noun",
        "word":  "Dad",
        "translation":  "Baba",
        "sentence":  "I asked my dad for his opinion on the car financing plan."
    },
    {
        "pos":  "Adjective",
        "word":  "Daily",
        "translation":  "Adv.",
        "sentence":  "Günlük"
    },
    {
        "pos":  "Noun / Adjective",
        "word":  "Dairy",
        "translation":  "Süt ürünleri",
        "sentence":  "I’m trying to cut down on dairy products."
    },
    {
        "pos":  "Noun",
        "word":  "Dam",
        "translation":  "Baraj",
        "sentence":  "The new dam will provide electricity for the whole region."
    },
    {
        "pos":  "Noun",
        "word":  "Damage",
        "translation":  "Verb",
        "sentence":  "Hasar"
    },
    {
        "pos":  "Adjective",
        "word":  "Damaging",
        "translation":  "Zararlı",
        "sentence":  "Smoking is extremely damaging to your health."
    },
    {
        "pos":  "Noun",
        "word":  "Dance",
        "translation":  "Verb",
        "sentence":  "Dans"
    },
    {
        "pos":  "Noun",
        "word":  "Dancer",
        "translation":  "Dansçı",
        "sentence":  "She is a professional dancer who performs at the İzmir Opera."
    },
    {
        "pos":  "Noun",
        "word":  "Dancing",
        "translation":  "Dans etme",
        "sentence":  "Dancing is a great way for children to stay active and healthy."
    },
    {
        "pos":  "Noun",
        "word":  "Danger",
        "translation":  "Tehlike",
        "sentence":  "There is no danger of the project being canceled at this stage."
    },
    {
        "pos":  "Adjective",
        "word":  "Dangerous",
        "translation":  "Tehlikeli",
        "sentence":  "It is dangerous to enter the warehouse without safety gear."
    },
    {
        "pos":  "Verb",
        "word":  "Dare",
        "translation":  "Cesaret etmek",
        "sentence":  "I wouldn\u0027t dare to ask him such a personal question."
    },
    {
        "pos":  "Adj.",
        "word":  "Dark",
        "translation":  "Noun",
        "sentence":  "Karanlık"
    },
    {
        "pos":  "Noun",
        "word":  "Darkness",
        "translation":  "Karanlık",
        "sentence":  "They sat in total darkness when the lights went out."
    },
    {
        "pos":  "Noun",
        "word":  "Data",
        "translation":  "Veri",
        "sentence":  "We need more data to analyze the football match properly."
    },
    {
        "pos":  "Noun",
        "word":  "Database",
        "translation":  "Veritabanı",
        "sentence":  "The company keeps all its customer records in a large database."
    },
    {
        "pos":  "Noun",
        "word":  "Date",
        "translation":  "Verb",
        "sentence":  "Tarih"
    },
    {
        "pos":  "Noun",
        "word":  "Daughter",
        "translation":  "Kız evlat",
        "sentence":  "His daughter is very interested in the educational songs on the channel."
    },
    {
        "pos":  "Noun",
        "word":  "Dawn",
        "translation":  "Şafak, gün doğumu",
        "sentence":  "We left the house at dawn to beat the traffic."
    },
    {
        "pos":  "Noun",
        "word":  "Day",
        "translation":  "Gün",
        "sentence":  "I hope you have a productive day at the office tomorrow."
    },
    {
        "pos":  "Adjective",
        "word":  "Dead",
        "translation":  "Ölü",
        "sentence":  "The battery in my laptop was completely dead after the flight."
    },
    {
        "pos":  "Noun",
        "word":  "Deadline",
        "translation":  "Son teslim tarihi",
        "sentence":  "I’m working hard to meet the deadline for the report."
    },
    {
        "pos":  "Adjective",
        "word":  "Deadly",
        "translation":  "Ölümcül",
        "sentence":  "Some species of spiders are extremely deadly."
    },
    {
        "pos":  "Verb",
        "word":  "Deal",
        "translation":  "Noun",
        "sentence":  "İlgilenmek"
    },
    {
        "pos":  "Noun",
        "word":  "Dealer",
        "translation":  "Satıcı, bayi",
        "sentence":  "He works as a used car dealer."
    },
    {
        "pos":  "Adjective",
        "word":  "Dear",
        "translation":  "Sevgili, değerli",
        "sentence":  "Dear colleagues, I would like to thank you for your support."
    },
    {
        "pos":  "Noun",
        "word":  "Death",
        "translation":  "Ölüm",
        "sentence":  "The news of the founder\u0027s death was a shock to everyone at the firm."
    },
    {
        "pos":  "Noun",
        "word":  "Debate",
        "translation":  "Verb",
        "sentence":  "Tartışma"
    },
    {
        "pos":  "Noun",
        "word":  "Debris",
        "translation":  "Enkaz, kalıntı",
        "sentence":  "Emergency teams are working to clear the debris from the street."
    },
    {
        "pos":  "Noun",
        "word":  "Debt",
        "translation":  "Borç",
        "sentence":  "Taking out a loan for a car will increase your monthly debt."
    },
    {
        "pos":  "Noun",
        "word":  "Debut",
        "translation":  "İlk sahneye çıkış, prömiyer",
        "sentence":  "The young singer made her professional debut last night."
    },
    {
        "pos":  "Noun",
        "word":  "Decade",
        "translation":  "On yıl",
        "sentence":  "The company has grown significantly over the last decade."
    },
    {
        "pos":  "Noun",
        "word":  "December",
        "translation":  "Aralık",
        "sentence":  "I will enter my fifth year at the firm in December 2025."
    },
    {
        "pos":  "Adjective",
        "word":  "Decent",
        "translation":  "Terbiyeli, düzgün",
        "sentence":  "It is hard to find a decent alternative supplier at this price point."
    },
    {
        "pos":  "Verb",
        "word":  "Decide",
        "translation":  "Karar vermek",
        "sentence":  "I need to decide which financing option is better for my budget."
    },
    {
        "pos":  "Noun",
        "word":  "Decision",
        "translation":  "Karar",
        "sentence":  "Switching to a new raw material was a strategic decision."
    },
    {
        "pos":  "Noun",
        "word":  "Decision-making",
        "translation":  "Karar verme",
        "sentence":  "She plays a key role in the company\u0027s decision-making process."
    },
    {
        "pos":  "Adjective",
        "word":  "Decisive",
        "translation":  "Kararlı, kesin",
        "sentence":  "The victory was a decisive moment in the war."
    },
    {
        "pos":  "Noun",
        "word":  "Deck",
        "translation":  "Güverte, deste",
        "sentence":  "We sat on the deck of the ship and watched the sunset."
    },
    {
        "pos":  "Noun",
        "word":  "Declaration",
        "translation":  "Beyan, ilan",
        "sentence":  "The government made a formal declaration of war."
    },
    {
        "pos":  "Verb",
        "word":  "Declare",
        "translation":  "Beyan etmek, ilan etmek",
        "sentence":  "You must declare any valuable items at the airport customs."
    },
    {
        "pos":  "Verb",
        "word":  "Decline",
        "translation":  "Noun",
        "sentence":  "Reddetmek, düşmek"
    },
    {
        "pos":  "Verb",
        "word":  "Decorate",
        "translation":  "Dekore etmek, süslemek",
        "sentence":  "We are going to decorate the office for the anniversary celebration."
    },
    {
        "pos":  "Noun",
        "word":  "Decoration",
        "translation":  "Dekorasyon, süsleme",
        "sentence":  "The decoration of the children\u0027s YouTube set looks very colorful."
    },
    {
        "pos":  "Verb",
        "word":  "Decrease",
        "translation":  "Noun",
        "sentence":  "Azaltmak"
    },
    {
        "pos":  "Adjective",
        "word":  "Dedicated",
        "translation":  "Kendini adamış",
        "sentence":  "She is a dedicated teacher who spends a lot of time with her students."
    },
    {
        "pos":  "Noun",
        "word":  "Dedication",
        "translation":  "Adanmışlık",
        "sentence":  "His success is due to his hard work and dedication."
    },
    {
        "pos":  "Noun",
        "word":  "Deed",
        "translation":  "Eylem, tapu",
        "sentence":  "It was a kind deed to help the old lady with her bags."
    },
    {
        "pos":  "Verb",
        "word":  "Deem",
        "translation":  "Farz etmek, varsaymak",
        "sentence":  "The bridge was deemed unsafe and was closed to traffic."
    },
    {
        "pos":  "Adj.",
        "word":  "Deep",
        "translation":  "Adv.",
        "sentence":  "Derin"
    },
    {
        "pos":  "Adverb",
        "word":  "Deeply",
        "translation":  "Derinden",
        "sentence":  "I was deeply impressed by the firm\u0027s cost reduction strategy."
    },
    {
        "pos":  "Noun",
        "word":  "Default",
        "translation":  "Varsayılan, borç ödeyememe",
        "sentence":  "The system will use the default settings if you don\u0027t change them."
    },
    {
        "pos":  "Verb",
        "word":  "Defeat",
        "translation":  "Noun",
        "sentence":  "Yenmek"
    },
    {
        "pos":  "Noun",
        "word":  "Defect",
        "translation":  "Kusur, hata",
        "sentence":  "The car was recalled because of a safety defect."
    },
    {
        "pos":  "Verb",
        "word":  "Defend",
        "translation":  "Savunmak",
        "sentence":  "You should be ready to defend your cost-down study to the board."
    },
    {
        "pos":  "Noun",
        "word":  "Defender",
        "translation":  "Savunmacı, koruyucu",
        "sentence":  "He is a strong defender of human rights."
    },
    {
        "pos":  "Noun",
        "word":  "Defense",
        "translation":  "Savunma",
        "sentence":  "The company\u0027s defense against the lawsuit was very strong."
    },
    {
        "pos":  "Adjective",
        "word":  "Defensive",
        "translation":  "Savunmacı",
        "sentence":  "The team took a defensive position to protect their lead."
    },
    {
        "pos":  "Noun",
        "word":  "Deficiency",
        "translation":  "Eksiklik, yetersizlik",
        "sentence":  "A vitamin deficiency can lead to various health problems."
    },
    {
        "pos":  "Noun",
        "word":  "Deficit",
        "translation":  "Açık (bütçe vb.)",
        "sentence":  "The government is trying to reduce the national deficit."
    },
    {
        "pos":  "Verb",
        "word":  "Define",
        "translation":  "Tanımlamak",
        "sentence":  "We need to define the scope of the alternative material research."
    },
    {
        "pos":  "Adjective",
        "word":  "Definite",
        "translation":  "Kesin, belirli",
        "sentence":  "We don\u0027t have a definite date for the flight refund yet."
    },
    {
        "pos":  "Adverb",
        "word":  "Definitely",
        "translation":  "Kesinlikle",
        "sentence":  "I will definitely use these English words in my game project."
    },
    {
        "pos":  "Noun",
        "word":  "Definition",
        "translation":  "Tanım",
        "sentence":  "What is the professional definition for these sourcing tasks?"
    },
    {
        "pos":  "Verb",
        "word":  "Defy",
        "translation":  "Meydan okumak, karşı gelmek",
        "sentence":  "It is dangerous to defy the orders of the police."
    },
    {
        "pos":  "Noun",
        "word":  "Degree",
        "translation":  "Derece, diploma",
        "sentence":  "He has a university degree in strategic sourcing and logistics."
    },
    {
        "pos":  "Verb",
        "word":  "Delay",
        "translation":  "Noun",
        "sentence":  "Geciktirmek"
    },
    {
        "pos":  "Noun",
        "word":  "Delegate",
        "translation":  "Delege, temsilci",
        "sentence":  "Each country sent a delegate to the international conference."
    },
    {
        "pos":  "Noun",
        "word":  "Delegation",
        "translation":  "Heyet, delegasyon",
        "sentence":  "A delegation of business leaders visited the city today."
    },
    {
        "pos":  "Verb",
        "word":  "Delete",
        "translation":  "Silmek",
        "sentence":  "You can delete the file if you no longer need it."
    },
    {
        "pos":  "Adjective",
        "word":  "Deliberate",
        "translation":  "Kasti, planlı",
        "sentence":  "The move to find a new supplier was a deliberate business choice."
    },
    {
        "pos":  "Adverb",
        "word":  "Deliberately",
        "translation":  "Kasten",
        "sentence":  "The data was deliberately changed to hide the cost increase."
    },
    {
        "pos":  "Adjective",
        "word":  "Delicate",
        "translation":  "Hassas, narin",
        "sentence":  "The silk fabric is very delicate and needs special care."
    },
    {
        "pos":  "Adjective",
        "word":  "Delicious",
        "translation":  "Lezzetli",
        "sentence":  "İzmir is famous for its delicious street food like boyoz and kumru."
    },
    {
        "pos":  "Adjective",
        "word":  "Delighted",
        "translation":  "Memnun, çok mutlu",
        "sentence":  "I am delighted to hear the news of your success."
    },
    {
        "pos":  "Verb",
        "word":  "Deliver",
        "translation":  "Teslim etmek",
        "sentence":  "The supplier promised to deliver the materials by Monday."
    },
    {
        "pos":  "Noun",
        "word":  "Delivery",
        "translation":  "Teslimat",
        "sentence":  "Please track the delivery of the new silver bars carefully."
    },
    {
        "pos":  "Noun",
        "word":  "Demand",
        "translation":  "Verb",
        "sentence":  "Talep"
    },
    {
        "pos":  "Noun",
        "word":  "Democracy",
        "translation":  "Demokrasi",
        "sentence":  "The country is making a slow transition to democracy."
    },
    {
        "pos":  "Adjective",
        "word":  "Democratic",
        "translation":  "Demokratik",
        "sentence":  "We live in a democratic society where everyone has a vote."
    },
    {
        "pos":  "Noun",
        "word":  "Demon",
        "translation":  "İblis, şeytan",
        "sentence":  "In the story, the hero has to fight a powerful demon."
    },
    {
        "pos":  "Verb",
        "word":  "Demonstrate",
        "translation":  "Göstermek, kanıtlamak",
        "sentence":  "You should demonstrate your achievements in the self-evaluation."
    },
    {
        "pos":  "Noun",
        "word":  "Demonstration",
        "translation":  "Gösteri, kanıtlama",
        "sentence":  "There was a large demonstration against the new law today."
    },
    {
        "pos":  "Noun",
        "word":  "Denial",
        "translation":  "İnkar, reddetme",
        "sentence":  "The government issued a flat denial of the rumors."
    },
    {
        "pos":  "Verb",
        "word":  "Denounce",
        "translation":  "Kınamak, ihbar etmek",
        "sentence":  "The group was quick to denounce the use of violence."
    },
    {
        "pos":  "Adjective",
        "word":  "Dense",
        "translation":  "Yoğun",
        "sentence":  "The morning was hidden by a dense fog."
    },
    {
        "pos":  "Noun",
        "word":  "Density",
        "translation":  "Yoğunluk",
        "sentence":  "The population density is very high in the city center."
    },
    {
        "pos":  "Noun",
        "word":  "Dentist",
        "translation":  "Diş hekimi",
        "sentence":  "I have an appointment with my dentist in İzmir tomorrow morning."
    },
    {
        "pos":  "Verb",
        "word":  "Deny",
        "translation":  "İnkar etmek, reddetmek",
        "sentence":  "The company had to deny the rumors about the budget cuts."
    },
    {
        "pos":  "Verb",
        "word":  "Depart",
        "translation":  "Ayrılmak, yola çıkmak",
        "sentence":  "The train is scheduled to depart at 9:00 AM."
    },
    {
        "pos":  "Noun",
        "word":  "Department",
        "translation":  "Departman",
        "sentence":  "I have been working in the sourcing department for four years."
    },
    {
        "pos":  "Noun",
        "word":  "Departure",
        "translation":  "Kalkış, ayrılış",
        "sentence":  "The departure of my flight from Sabiha Gökçen was canceled."
    },
    {
        "pos":  "Verb",
        "word":  "Depend",
        "translation":  "Bağlı olmak",
        "sentence":  "The success of the project will depend on our team\u0027s effort."
    },
    {
        "pos":  "Noun",
        "word":  "Dependence",
        "translation":  "Bağımlılık",
        "sentence":  "The country is trying to reduce its dependence on foreign oil."
    },
    {
        "pos":  "Adjective",
        "word":  "Dependent",
        "translation":  "Bağımlı",
        "sentence":  "The success of the project is dependent on your cooperation."
    },
    {
        "pos":  "Verb",
        "word":  "Depict",
        "translation":  "Tasvir etmek, betimlemek",
        "sentence":  "The painting depicts a scene from a traditional village wedding."
    },
    {
        "pos":  "Verb",
        "word":  "Deploy",
        "translation":  "Görevlendirmek, konuşlandırmak",
        "sentence":  "The government decided to deploy more troops to the border."
    },
    {
        "pos":  "Noun",
        "word":  "Deployment",
        "translation":  "Konuşlandırma",
        "sentence":  "The deployment of the new technology will take several months."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Deposit",
        "translation":  "Mevduat, kapora / Yatırmak",
        "sentence":  "I need to go to the bank to make a deposit."
    },
    {
        "pos":  "Adjective",
        "word":  "Depressed",
        "translation":  "Depresif, morali bozuk",
        "sentence":  "He felt a bit depressed after the matching results were announced."
    },
    {
        "pos":  "Adjective",
        "word":  "Depressing",
        "translation":  "Kederli, moral bozucu",
        "sentence":  "The news about the economic crisis was quite depressing."
    },
    {
        "pos":  "Noun",
        "word":  "Depression",
        "translation":  "Depresyon, ekonomik çöküntü",
        "sentence":  "She is suffering from severe clinical depression."
    },
    {
        "pos":  "Verb",
        "word":  "Deprive",
        "translation":  "Yoksun bırakmak",
        "sentence":  "You shouldn\u0027t deprive yourself of sleep during the exam period."
    },
    {
        "pos":  "Noun",
        "word":  "Depth",
        "translation":  "Derinlik",
        "sentence":  "We need to analyze the market in depth before buying more gold."
    },
    {
        "pos":  "Noun",
        "word":  "Deputy",
        "translation":  "Vekil, yardımcı",
        "sentence":  "The deputy manager will be in charge while the manager is away."
    },
    {
        "pos":  "Verb",
        "word":  "Derive",
        "translation":  "Türetmek, -den almak",
        "sentence":  "Many English words derive from Latin or Greek."
    },
    {
        "pos":  "Verb",
        "word":  "Descend",
        "translation":  "İnmek, alçalmak",
        "sentence":  "The airplane began to descend as it approached the airport."
    },
    {
        "pos":  "Noun",
        "word":  "Descent",
        "translation":  "İniş, soy",
        "sentence":  "The mountain descent was much faster than the climb."
    },
    {
        "pos":  "Verb",
        "word":  "Describe",
        "translation":  "Betimlemek, anlatmak",
        "sentence":  "Can you describe the alternative raw material you are looking for?"
    },
    {
        "pos":  "Noun",
        "word":  "Description",
        "translation":  "Açıklama, tanım",
        "sentence":  "Please provide a brief description of your work tasks for the note."
    },
    {
        "pos":  "Noun",
        "word":  "Desert",
        "translation":  "Verb",
        "sentence":  "Çöl"
    },
    {
        "pos":  "Verb",
        "word":  "Deserve",
        "translation":  "Hak etmek",
        "sentence":  "After five years of hard work, you deserve a good promotion."
    },
    {
        "pos":  "Noun",
        "word":  "Design",
        "translation":  "Verb",
        "sentence":  "Tasarım"
    },
    {
        "pos":  "Verb",
        "word":  "Designate",
        "translation":  "Belirlemek, atamak",
        "sentence":  "This area has been designated as a national park."
    },
    {
        "pos":  "Noun",
        "word":  "Designer",
        "translation":  "Tasarımcı",
        "sentence":  "We hired a professional designer for the educational game project."
    },
    {
        "pos":  "Adjective",
        "word":  "Desirable",
        "translation":  "Arzu edilen, istenir",
        "sentence":  "A good knowledge of English is highly desirable for this job."
    },
    {
        "pos":  "Noun",
        "word":  "Desire",
        "translation":  "Verb",
        "sentence":  "Arzu, istek"
    },
    {
        "pos":  "Noun",
        "word":  "Desk",
        "translation":  "Çalışma masası",
        "sentence":  "I keep a small calculator and a notepad on my desk."
    },
    {
        "pos":  "Noun",
        "word":  "Desktop",
        "translation":  "Masaüstü",
        "sentence":  "You can find the shortcut to the program on your desktop."
    },
    {
        "pos":  "Adjective",
        "word":  "Desperate",
        "translation":  "Çaresiz, umutsuz",
        "sentence":  "The firm was desperate to find a cheaper supplier for silver."
    },
    {
        "pos":  "Adverb",
        "word":  "Desperately",
        "translation":  "Çaresizce, aşırı derecede",
        "sentence":  "They are desperately looking for a new place to live."
    },
    {
        "pos":  "Preposition",
        "word":  "Despite",
        "translation":  "-e rağmen",
        "sentence":  "Despite the high cost, palladium is still a vital material for us."
    },
    {
        "pos":  "Noun",
        "word":  "Dessert",
        "translation":  "Tatlı",
        "sentence":  "İzmir is well-known for its dessert called \"şambali.\""
    },
    {
        "pos":  "Noun",
        "word":  "Destination",
        "translation":  "Varış yeri, hedef",
        "sentence":  "My final destination was İzmir, but the flight was canceled."
    },
    {
        "pos":  "Verb",
        "word":  "Destroy",
        "translation":  "Yok etmek, mahvetmek",
        "sentence":  "A major fire managed to destroy most of the stock in the factory."
    },
    {
        "pos":  "Noun",
        "word":  "Destruction",
        "translation":  "Yıkım, tahrip",
        "sentence":  "The earthquake caused widespread destruction in the city."
    },
    {
        "pos":  "Adjective",
        "word":  "Destructive",
        "translation":  "Yıkıcı",
        "sentence":  "The storm was very destructive, damaging many homes."
    },
    {
        "pos":  "Noun",
        "word":  "Detail",
        "translation":  "Verb",
        "sentence":  "Detay"
    },
    {
        "pos":  "Adjective",
        "word":  "Detailed",
        "translation":  "Detaylı",
        "sentence":  "I need a detailed analysis of the betting options for the match."
    },
    {
        "pos":  "Verb",
        "word":  "Detain",
        "translation":  "Gözaltına almak, alıkoymak",
        "sentence":  "The police decided to detain the suspect for further questioning."
    },
    {
        "pos":  "Verb",
        "word":  "Detect",
        "translation":  "Tespit etmek",
        "sentence":  "The sensors can detect even the smallest change in temperature."
    },
    {
        "pos":  "Noun",
        "word":  "Detection",
        "translation":  "Tespit, bulma",
        "sentence":  "Early detection of the disease is vital for successful treatment."
    },
    {
        "pos":  "Noun",
        "word":  "Detective",
        "translation":  "Dedektif",
        "sentence":  "He enjoys reading detective novels during his commute to work."
    },
    {
        "pos":  "Noun",
        "word":  "Detention",
        "translation":  "Gözaltı, alıkoyma",
        "sentence":  "The suspect was held in detention for further questioning."
    },
    {
        "pos":  "Verb",
        "word":  "Deteriorate",
        "translation":  "Kötüleşmek, bozulmak",
        "sentence":  "Relations between the two countries continued to deteriorate."
    },
    {
        "pos":  "Noun",
        "word":  "Determination",
        "translation":  "Kararlılık, azim",
        "sentence":  "Her determination to succeed helped her overcome many obstacles."
    },
    {
        "pos":  "Verb",
        "word":  "Determine",
        "translation":  "Belirlemek",
        "sentence":  "We need to determine the total gram weight of your gold holdings."
    },
    {
        "pos":  "Adjective",
        "word":  "Determined",
        "translation":  "Kararlı",
        "sentence":  "I am determined to finish the German fruit and vegetable list today."
    },
    {
        "pos":  "Verb",
        "word":  "Devastate",
        "translation":  "Mahvetmek, yıkmak",
        "sentence":  "The forest fire managed to devastate thousands of acres of land."
    },
    {
        "pos":  "Verb",
        "word":  "Develop",
        "translation":  "Geliştirmek",
        "sentence":  "We need to develop a better strategy for cost reduction."
    },
    {
        "pos":  "Noun",
        "word":  "Development",
        "translation":  "Gelişim",
        "sentence":  "The development of the new YouTube project is going very well."
    },
    {
        "pos":  "Noun",
        "word":  "Device",
        "translation":  "Cihaz",
        "sentence":  "My mobile device is always updated with the latest metal prices."
    },
    {
        "pos":  "Noun",
        "word":  "Devil",
        "translation":  "Şeytan",
        "sentence":  "In many stories, the hero must face a powerful devil."
    },
    {
        "pos":  "Verb",
        "word":  "Devise",
        "translation":  "Tasarlamak, icat etmek",
        "sentence":  "Scientists are working to devise a new way to store solar energy."
    },
    {
        "pos":  "Verb",
        "word":  "Devote",
        "translation":  "Adamak, tahsis etmek",
        "sentence":  "He decided to devote his life to helping the poor."
    },
    {
        "pos":  "Verb",
        "word":  "Diagnose",
        "translation":  "Teşhis koymak",
        "sentence":  "Doctors were able to diagnose the condition using a blood test."
    },
    {
        "pos":  "Noun",
        "word":  "Diagnosis",
        "translation":  "Teşhis, tanı",
        "sentence":  "The doctor\u0027s diagnosis was confirmed by further medical tests."
    },
    {
        "pos":  "Noun",
        "word":  "Diagram",
        "translation":  "Diyagram",
        "sentence":  "This diagram illustrates the strategic sourcing process clearly."
    },
    {
        "pos":  "Noun",
        "word":  "Dialogue",
        "translation":  "Diyalog",
        "sentence":  "Creating a dialogue between suppliers is key to a healthy chain."
    },
    {
        "pos":  "Noun",
        "word":  "Diamond",
        "translation":  "Elmas",
        "sentence":  "Gold and diamonds have always been popular long-term investments."
    },
    {
        "pos":  "Noun",
        "word":  "Diary",
        "translation":  "Günlük",
        "sentence":  "I use my digital diary to keep track of my daily work tasks."
    },
    {
        "pos":  "Verb",
        "word":  "Dictate",
        "translation":  "Yazdırmak, dikte etmek",
        "sentence":  "The rules of the market often dictate the price of goods."
    },
    {
        "pos":  "Noun",
        "word":  "Dictator",
        "translation":  "Diktatör",
        "sentence":  "The country was ruled by a brutal dictator for over twenty years."
    },
    {
        "pos":  "Noun",
        "word":  "Dictionary",
        "translation":  "Sözlük",
        "sentence":  "I use an English-Turkish dictionary for my B2 level studies."
    },
    {
        "pos":  "Verb",
        "word":  "Die",
        "translation":  "Ölmek",
        "sentence":  "Many small firms might die out if they don\u0027t adapt to the market."
    },
    {
        "pos":  "Noun",
        "word":  "Diet",
        "translation":  "Diyet",
        "sentence":  "I am trying to follow a healthier diet while living in İzmir."
    },
    {
        "pos":  "Verb",
        "word":  "Differ",
        "translation":  "Farklılık göstermek",
        "sentence":  "Opinions differ on the best way to solve the economic crisis."
    },
    {
        "pos":  "Noun",
        "word":  "Difference",
        "translation":  "Fark",
        "sentence":  "Is there a big difference between the two car financing options?"
    },
    {
        "pos":  "Adjective",
        "word":  "Different",
        "translation":  "Farklı",
        "sentence":  "We are looking at three different alternative raw materials."
    },
    {
        "pos":  "Verb",
        "word":  "Differentiate",
        "translation":  "Ayırt etmek, farklılaştırmak",
        "sentence":  "It is sometimes difficult to differentiate between the two species."
    },
    {
        "pos":  "Adverb",
        "word":  "Differently",
        "translation":  "Farklı bir şekilde",
        "sentence":  "We need to approach the supplier differently this time."
    },
    {
        "pos":  "Adjective",
        "word":  "Difficult",
        "translation":  "Zor",
        "sentence":  "It is difficult to manage alternative suppliers without a clear head."
    },
    {
        "pos":  "Noun",
        "word":  "Difficulty",
        "translation":  "Zorluk",
        "sentence":  "We experienced some difficulty with the flight cancellation refund."
    },
    {
        "pos":  "Verb",
        "word":  "Dig",
        "translation":  "Kazmak",
        "sentence":  "Workers had to dig a deep trench for the new factory pipes."
    },
    {
        "pos":  "Adjective",
        "word":  "Digital",
        "translation":  "Dijital",
        "sentence":  "The digital content for the children\u0027s channel is almost ready."
    },
    {
        "pos":  "Noun",
        "word":  "Dignity",
        "translation":  "Haysiyet, itibar, vakar",
        "sentence":  "He faced the difficult situation with great dignity."
    },
    {
        "pos":  "Noun",
        "word":  "Dilemma",
        "translation":  "İkilem",
        "sentence":  "The manager faced a dilemma over whether to cut jobs or reduce salaries."
    },
    {
        "pos":  "Noun",
        "word":  "Dime",
        "translation":  "10 sentlik madeni para",
        "sentence":  "I found a shiny dime on the sidewalk today."
    },
    {
        "pos":  "Noun",
        "word":  "Dimension",
        "translation":  "Boyut",
        "sentence":  "It is important to consider every dimension of the problem."
    },
    {
        "pos":  "Verb",
        "word":  "Diminish",
        "translation":  "Azalmak, eksiltmek",
        "sentence":  "The company\u0027s profits began to diminish after the new competitor arrived."
    },
    {
        "pos":  "Noun",
        "word":  "Dinner",
        "translation":  "Akşam yemeği",
        "sentence":  "Let\u0027s have a celebratory dinner for your fifth work anniversary."
    },
    {
        "pos":  "Verb",
        "word":  "Dip",
        "translation":  "Bandırmak, dalmak, hafifçe düşmek",
        "sentence":  "The sun began to dip below the horizon."
    },
    {
        "pos":  "Noun",
        "word":  "Diplomat",
        "translation":  "Diplomat",
        "sentence":  "She has worked as a senior diplomat for over fifteen years."
    },
    {
        "pos":  "Adjective",
        "word":  "Diplomatic",
        "translation":  "Diplomatik",
        "sentence":  "The two nations are trying to find a diplomatic solution to the conflict."
    },
    {
        "pos":  "Adj.",
        "word":  "Direct",
        "translation":  "Verb",
        "sentence":  "Doğrudan"
    },
    {
        "pos":  "Noun",
        "word":  "Direction",
        "translation":  "Yön",
        "sentence":  "The general direction of the market seems to be upward for gold."
    },
    {
        "pos":  "Adverb",
        "word":  "Directly",
        "translation":  "Doğrudan",
        "sentence":  "You can apply for a refund directly through the airline\u0027s website."
    },
    {
        "pos":  "Noun",
        "word":  "Director",
        "translation":  "Direktör, yönetmen",
        "sentence":  "The sourcing director was impressed with the cost-down study."
    },
    {
        "pos":  "Noun",
        "word":  "Directory",
        "translation":  "Dizin, rehber",
        "sentence":  "You can find his phone number in the local business directory."
    },
    {
        "pos":  "Noun",
        "word":  "Dirt",
        "translation":  "Kir, toprak",
        "sentence":  "Please clean the dirt off the raw material samples before inspection."
    },
    {
        "pos":  "Adjective",
        "word":  "Dirty",
        "translation":  "Kirli",
        "sentence":  "The warehouse floor was quite dirty after the heavy shipment."
    },
    {
        "pos":  "Noun",
        "word":  "Disability",
        "translation":  "Engellilik, sakatlık",
        "sentence":  "The building has special access for people with a physical disability."
    },
    {
        "pos":  "Adjective",
        "word":  "Disabled",
        "translation":  "Engelli",
        "sentence":  "The charity provides support and equipment for disabled children."
    },
    {
        "pos":  "Noun",
        "word":  "Disadvantage",
        "translation":  "Dezavantaj",
        "sentence":  "One disadvantage of this supplier is the long delivery time."
    },
    {
        "pos":  "Verb",
        "word":  "Disagree",
        "translation":  "Aynı fikirde olmamak",
        "sentence":  "I disagree with the claim that silver value will drop soon."
    },
    {
        "pos":  "Noun",
        "word":  "Disagreement",
        "translation":  "Anlaşmazlık",
        "sentence":  "There was a strong disagreement between the board members."
    },
    {
        "pos":  "Verb",
        "word":  "Disappear",
        "translation":  "Gözden kaybolmak",
        "sentence":  "These small cost-down opportunities can disappear quickly."
    },
    {
        "pos":  "Verb",
        "word":  "Disappoint",
        "translation":  "Hayal kırıklığına uğratmak",
        "sentence":  "I don\u0027t want to disappoint my parents by failing the exam."
    },
    {
        "pos":  "Adjective",
        "word":  "Disappointed",
        "translation":  "Hayal kırıklığına uğramış",
        "sentence":  "I was disappointed that my flight to İzmir was canceled."
    },
    {
        "pos":  "Adjective",
        "word":  "Disappointing",
        "translation":  "Hayal kırıklığı yaratan",
        "sentence":  "The matching result for Beşiktaş was a bit disappointing."
    },
    {
        "pos":  "Noun",
        "word":  "Disappointment",
        "translation":  "Hayal kırıklığı",
        "sentence":  "To her great disappointment, she didn\u0027t get the job."
    },
    {
        "pos":  "Noun",
        "word":  "Disaster",
        "translation":  "Felaket",
        "sentence":  "The sudden fire in the factory was a complete disaster."
    },
    {
        "pos":  "Adjective",
        "word":  "Disastrous",
        "translation":  "Felaket getiren, korkunç",
        "sentence":  "The harvest was a disastrous failure due to the long drought."
    },
    {
        "pos":  "Verb",
        "word":  "Discard",
        "translation":  "Atmak, ıskartaya çıkarmak",
        "sentence":  "Please discard any old food that is past its expiry date."
    },
    {
        "pos":  "Verb",
        "word":  "Discharge",
        "translation":  "Tahliye etmek (hastane vb.), boşaltmak",
        "sentence":  "The patient was fit enough to be discharged from the hospital."
    },
    {
        "pos":  "Noun",
        "word":  "Discipline",
        "translation":  "Disiplin",
        "sentence":  "Strategic sourcing requires a high level of discipline and focus."
    },
    {
        "pos":  "Verb",
        "word":  "Disclose",
        "translation":  "İfşa etmek, açıklamak",
        "sentence":  "The company refused to disclose the details of the agreement."
    },
    {
        "pos":  "Noun",
        "word":  "Disclosure",
        "translation":  "İfşa, açıklama",
        "sentence":  "The disclosure of the secret documents caused a major scandal."
    },
    {
        "pos":  "Noun",
        "word":  "Discount",
        "translation":  "Verb",
        "sentence":  "İndirim"
    },
    {
        "pos":  "Verb",
        "word":  "Discourage",
        "translation":  "Cesaretini kırmak, vazgeçirmek",
        "sentence":  "Higher taxes on cigarettes are intended to discourage smoking."
    },
    {
        "pos":  "Noun",
        "word":  "Discourse",
        "translation":  "Söylem, konuşma",
        "sentence":  "Political discourse has become increasingly polarized in recent years."
    },
    {
        "pos":  "Verb",
        "word":  "Discover",
        "translation":  "Keşfetmek",
        "sentence":  "It took us months to discover this high-quality alternative firm."
    },
    {
        "pos":  "Noun",
        "word":  "Discovery",
        "translation":  "Keşif",
        "sentence":  "The discovery of a new palladium source will stabilize the prices."
    },
    {
        "pos":  "Noun",
        "word":  "Discretion",
        "translation":  "Tedbir, ağzı sıkılık, takdir yetkisi",
        "sentence":  "You must use your own discretion when making such a decision."
    },
    {
        "pos":  "Noun",
        "word":  "Discrimination",
        "translation":  "Ayrımcılık",
        "sentence":  "The law prohibits discrimination on the basis of race or gender."
    },
    {
        "pos":  "Verb",
        "word":  "Discuss",
        "translation":  "Tartışmak, görüşmek",
        "sentence":  "We need to discuss the final version of your self-evaluation."
    },
    {
        "pos":  "Noun",
        "word":  "Discussion",
        "translation":  "Tartışma, görüşme",
        "sentence":  "There was a long discussion about the new car financing plan."
    },
    {
        "pos":  "Noun",
        "word":  "Disease",
        "translation":  "Hastalık",
        "sentence":  "The doctor explained how the disease affects the immune system."
    },
    {
        "pos":  "Noun",
        "word":  "Dish",
        "translation":  "Tabak, yemek",
        "sentence":  "Kumru is a very popular dish that you can find in İzmir."
    },
    {
        "pos":  "Adjective",
        "word":  "Dishonest",
        "translation":  "Dürüst olmayan",
        "sentence":  "We should avoid working with dishonest suppliers at all costs."
    },
    {
        "pos":  "Noun",
        "word":  "Disk",
        "translation":  "Disk",
        "sentence":  "Please save the backup of the sourcing data on an external disk."
    },
    {
        "pos":  "Verb",
        "word":  "Dislike",
        "translation":  "Noun",
        "sentence":  "Sevmemek"
    },
    {
        "pos":  "Verb",
        "word":  "Dismiss",
        "translation":  "Kovmak, reddetmek",
        "sentence":  "You shouldn\u0027t dismiss the idea of using alternative raw materials."
    },
    {
        "pos":  "Noun",
        "word":  "Dismissal",
        "translation":  "Kovulma, azil, dikkate almama",
        "sentence":  "His unfair dismissal from the firm led to a lengthy lawsuit."
    },
    {
        "pos":  "Noun",
        "word":  "Disorder",
        "translation":  "Bozukluk, düzensizlik",
        "sentence":  "He was diagnosed with a rare genetic disorder."
    },
    {
        "pos":  "Verb",
        "word":  "Displace",
        "translation":  "Yerinden etmek",
        "sentence":  "The building of the dam will displace thousands of local residents."
    },
    {
        "pos":  "Verb",
        "word":  "Display",
        "translation":  "Noun",
        "sentence":  "Sergilemek"
    },
    {
        "pos":  "Noun",
        "word":  "Disposal",
        "translation":  "İmha etme, elden çıkarma",
        "sentence":  "The safe disposal of nuclear waste is a major environmental challenge."
    },
    {
        "pos":  "Verb",
        "word":  "Dispose",
        "translation":  "Elden çıkarmak, atmak",
        "sentence":  "Always dispose of your trash in the bins provided."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Dispute",
        "translation":  "Anlaşmazlık / Tartışmak",
        "sentence":  "The two neighbors are in a legal dispute over the boundary."
    },
    {
        "pos":  "Verb",
        "word":  "Disrupt",
        "translation":  "Aksatmak, bozmak",
        "sentence":  "Heavy snow continued to disrupt flights at the airport."
    },
    {
        "pos":  "Noun",
        "word":  "Disruption",
        "translation":  "Aksama, bozulma",
        "sentence":  "The strike caused widespread disruption to the rail network."
    },
    {
        "pos":  "Verb",
        "word":  "Dissolve",
        "translation":  "Çözünmek, eritmek, (meclis vb.) feshetmek",
        "sentence":  "Stir the water until the sugar begins to dissolve."
    },
    {
        "pos":  "Noun",
        "word":  "Distance",
        "translation":  "Mesafe",
        "sentence":  "What is the total distance between the warehouse and the factory?"
    },
    {
        "pos":  "Adjective",
        "word":  "Distant",
        "translation":  "Uzak",
        "sentence":  "The sound of distant thunder could be heard in the mountains."
    },
    {
        "pos":  "Adjective",
        "word":  "Distinct",
        "translation":  "Belirgin, farklı",
        "sentence":  "There is a distinct possibility that the project will be delayed."
    },
    {
        "pos":  "Noun",
        "word":  "Distinction",
        "translation":  "Ayrım, fark",
        "sentence":  "There is a clear distinction between a hobby and a profession."
    },
    {
        "pos":  "Adjective",
        "word":  "Distinctive",
        "translation":  "Kendine has, ayırt edici",
        "sentence":  "The zebra is famous for its distinctive black and white stripes."
    },
    {
        "pos":  "Verb",
        "word":  "Distinguish",
        "translation":  "Ayırt etmek",
        "sentence":  "It\u0027s important to distinguish between facts and opinions."
    },
    {
        "pos":  "Verb",
        "word":  "Distort",
        "translation":  "Çarpıtmak, biçimini bozmak",
        "sentence":  "The media was accused of trying to distort the truth."
    },
    {
        "pos":  "Verb",
        "word":  "Distract",
        "translation":  "Dikkatini dağıtmak",
        "sentence":  "Please don\u0027t distract me while I\u0027m trying to drive."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Distress",
        "translation":  "Üzüntü, sıkıntı / Üzmek",
        "sentence":  "The news of the accident caused her great distress."
    },
    {
        "pos":  "Verb",
        "word":  "Distribute",
        "translation":  "Dağıtmak",
        "sentence":  "We need to distribute the new sourcing guidelines to the team."
    },
    {
        "pos":  "Noun",
        "word":  "Distribution",
        "translation":  "Dağıtım",
        "sentence":  "The distribution of raw materials was delayed by the storm."
    },
    {
        "pos":  "Noun",
        "word":  "District",
        "translation":  "Bölge, semt",
        "sentence":  "Karşıyaka is one of the most famous districts in İzmir."
    },
    {
        "pos":  "Verb",
        "word":  "Disturb",
        "translation":  "Rahatsız etmek",
        "sentence":  "I\u0027m sorry to disturb you, but there is a phone call for you."
    },
    {
        "pos":  "Adjective",
        "word":  "Disturbing",
        "translation":  "Rahatsız edici",
        "sentence":  "The documentary showed some very disturbing images of the war."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Dive",
        "translation":  "Dalmak / Dalış",
        "sentence":  "We watched the children dive into the swimming pool."
    },
    {
        "pos":  "Adjective",
        "word":  "Diverse",
        "translation":  "Çeşitli, farklı",
        "sentence":  "The city has a very diverse population with people from all over the world."
    },
    {
        "pos":  "Noun",
        "word":  "Diversity",
        "translation":  "Çeşitlilik",
        "sentence":  "Cultural diversity is one of the city\u0027s greatest strengths."
    },
    {
        "pos":  "Verb",
        "word":  "Divert",
        "translation":  "Başka yöne çevirmek",
        "sentence":  "Traffic had to be diverted because of a serious accident."
    },
    {
        "pos":  "Verb",
        "word":  "Divide",
        "translation":  "Noun",
        "sentence":  "Bölmek"
    },
    {
        "pos":  "Adjective",
        "word":  "Divine",
        "translation":  "İlahi, kutsal",
        "sentence":  "Many ancient cultures believed that their kings were divine."
    },
    {
        "pos":  "Noun",
        "word":  "Division",
        "translation":  "Bölüm, bölme",
        "sentence":  "He works in the international sourcing division of the firm."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Divorce",
        "translation":  "Boşanma / Boşanmak",
        "sentence":  "They decided to get a divorce after ten years of marriage."
    },
    {
        "pos":  "Adjective",
        "word":  "Divorced",
        "translation":  "Boşanmış",
        "sentence":  "My colleague is divorced and lives in a small apartment in İzmir."
    },
    {
        "pos":  "Verb",
        "word":  "Do1",
        "translation":  "Yapmak",
        "sentence":  "What did you do to solve the problem with the canceled flight?"
    },
    {
        "pos":  "Noun",
        "word":  "Doctor",
        "translation":  "Doktor",
        "sentence":  "The doctor advised him to take a few days off to rest."
    },
    {
        "pos":  "Noun",
        "word":  "Doctrine",
        "translation":  "Doktrin, öğreti",
        "sentence":  "The government\u0027s economic doctrine is based on free trade."
    },
    {
        "pos":  "Noun",
        "word":  "Document",
        "translation":  "Verb",
        "sentence":  "Doküman"
    },
    {
        "pos":  "Noun",
        "word":  "Documentary",
        "translation":  "Belgesel",
        "sentence":  "I watched an interesting documentary about the history of gold."
    },
    {
        "pos":  "Noun",
        "word":  "Documentation",
        "translation":  "Belgeleme, dökümantasyon",
        "sentence":  "You will need to provide official documentation of your qualifications."
    },
    {
        "pos":  "Noun",
        "word":  "Dog",
        "translation":  "Köpek",
        "sentence":  "I enjoy walking my dog along the seaside in İzmir every morning."
    },
    {
        "pos":  "Noun",
        "word":  "Dollar",
        "translation":  "Dolar",
        "sentence":  "The price of palladium is usually quoted in US dollars."
    },
    {
        "pos":  "Noun",
        "word":  "Domain",
        "translation":  "Alan, saha",
        "sentence":  "The care of the elderly is mainly in the domain of the family."
    },
    {
        "pos":  "Adjective",
        "word":  "Domestic",
        "translation":  "Yerel, evcil",
        "sentence":  "We are focusing on domestic suppliers to reduce shipping costs."
    },
    {
        "pos":  "Noun",
        "word":  "Dominance",
        "translation":  "Hakimiyet, egemenlik",
        "sentence":  "The company has maintained its dominance in the market for years."
    },
    {
        "pos":  "Adjective",
        "word":  "Dominant",
        "translation":  "Baskın, hakim",
        "sentence":  "The dominant language in the region is Spanish."
    },
    {
        "pos":  "Verb",
        "word":  "Dominate",
        "translation":  "Domine etmek, hükmetmek",
        "sentence":  "A few large firms dominate the global silver market."
    },
    {
        "pos":  "Verb",
        "word":  "Donate",
        "translation":  "Bağış yapmak",
        "sentence":  "I decided to donate some old clothes to a local charity in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Donation",
        "translation":  "Bağış",
        "sentence":  "The hospital relies on private donations to fund its research."
    },
    {
        "pos":  "Noun",
        "word":  "Donor",
        "translation":  "Bağışçı, donör",
        "sentence":  "The anonymous donor gave millions to the university."
    },
    {
        "pos":  "Noun",
        "word":  "Door",
        "translation":  "Kapı",
        "sentence":  "Please make sure the warehouse door is locked at night."
    },
    {
        "pos":  "Noun",
        "word":  "Dose",
        "translation":  "Doz",
        "sentence":  "You should not exceed the recommended dose of this medicine."
    },
    {
        "pos":  "Noun",
        "word":  "Dot",
        "translation":  "Nokta",
        "sentence":  "He drew a small red dot in the center of the circle."
    },
    {
        "pos":  "Adj.",
        "word":  "Double",
        "translation":  "V.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Noun",
        "word":  "Doubt",
        "translation":  "Verb",
        "sentence":  "Şüphe"
    },
    {
        "pos":  "Adv.",
        "word":  "Down",
        "translation":  "Prep.",
        "sentence":  "Aşağı"
    },
    {
        "pos":  "Verb",
        "word":  "Download",
        "translation":  "Noun",
        "sentence":  "İndirmek"
    },
    {
        "pos":  "Adv.",
        "word":  "Downstairs",
        "translation":  "Adj.",
        "sentence":  "Alt kat"
    },
    {
        "pos":  "Adv.",
        "word":  "Downtown",
        "translation":  "Noun",
        "sentence":  "Şehir merkezi"
    },
    {
        "pos":  "Adj.",
        "word":  "Downward",
        "translation":  "Adv.",
        "sentence":  "Aşağıya doğru"
    },
    {
        "pos":  "Noun",
        "word":  "Dozen",
        "translation":  "Det.",
        "sentence":  "Düzine"
    },
    {
        "pos":  "Noun",
        "word":  "Draft",
        "translation":  "Verb",
        "sentence":  "Taslak"
    },
    {
        "pos":  "Verb",
        "word":  "Drag",
        "translation":  "Sürüklemek",
        "sentence":  "You can drag and drop the files into the new sourcing folder."
    },
    {
        "pos":  "Verb",
        "word":  "Drain",
        "translation":  "Tahliye etmek, boşaltmak, süzmek",
        "sentence":  "You need to drain the pasta before adding the sauce."
    },
    {
        "pos":  "Noun",
        "word":  "Drama",
        "translation":  "Dram, tiyatro",
        "sentence":  "He is not a big fan of movie dramas; he prefers action films."
    },
    {
        "pos":  "Adjective",
        "word":  "Dramatic",
        "translation":  "Dramatik, çarpıcı",
        "sentence":  "There was a dramatic increase in silver prices last January."
    },
    {
        "pos":  "Adverb",
        "word":  "Dramatically",
        "translation":  "Büyük ölçüde, çarpıcı bir şekilde",
        "sentence":  "The price of gold has risen dramatically in the last week."
    },
    {
        "pos":  "Verb",
        "word":  "Draw",
        "translation":  "Çizmek, çekmek",
        "sentence":  "I like to draw sketches of new designs for the kids\u0027 channel."
    },
    {
        "pos":  "Noun",
        "word":  "Drawing",
        "translation":  "Çizim",
        "sentence":  "The drawing shows the layout of the new factory in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Dream",
        "translation":  "Verb",
        "sentence":  "Rüya, hayal"
    },
    {
        "pos":  "Noun",
        "word":  "Dress",
        "translation":  "Verb",
        "sentence":  "Elbise"
    },
    {
        "pos":  "Adjective",
        "word":  "Dressed",
        "translation":  "Giyinmiş",
        "sentence":  "He was dressed in a sharp suit for the meeting with the firm."
    },
    {
        "pos":  "Verb",
        "word":  "Drift",
        "translation":  "Sürüklenmek",
        "sentence":  "The boat began to drift slowly out to sea."
    },
    {
        "pos":  "Noun",
        "word":  "Drink",
        "translation":  "Verb",
        "sentence":  "İçecek"
    },
    {
        "pos":  "Verb",
        "word":  "Drive",
        "translation":  "Noun",
        "sentence":  "Sürmek"
    },
    {
        "pos":  "Noun",
        "word":  "Driver",
        "translation":  "Sürücü",
        "sentence":  "The truck driver arrived at the warehouse early this morning."
    },
    {
        "pos":  "Adjective",
        "word":  "Driving",
        "translation":  "İtici (güç), şiddetli",
        "sentence":  "Her driving ambition was to become a world-famous surgeon."
    },
    {
        "pos":  "Noun",
        "word":  "Driving",
        "translation":  "Sürüş, araba kullanma",
        "sentence":  "Driving in İzmir can be a bit challenging during rush hour."
    },
    {
        "pos":  "Verb",
        "word":  "Drop",
        "translation":  "Noun",
        "sentence":  "Düşürmek"
    },
    {
        "pos":  "Noun",
        "word":  "Drought",
        "translation":  "Kuraklık",
        "sentence":  "The long drought has caused severe water shortages in the area."
    },
    {
        "pos":  "Verb",
        "word":  "Drown",
        "translation":  "Boğulmak",
        "sentence":  "Thousands of farm animals were left to drown in the flood."
    },
    {
        "pos":  "Noun",
        "word":  "Drug",
        "translation":  "İlaç",
        "sentence":  "The pharmaceutical company is testing a new drug for heart disease."
    },
    {
        "pos":  "Noun",
        "word":  "Drum",
        "translation":  "Davul",
        "sentence":  "The children on the YouTube channel will enjoy playing the toy drum."
    },
    {
        "pos":  "Adjective",
        "word":  "Drunk",
        "translation":  "Sarhoş",
        "sentence":  "It is illegal and dangerous to drive a car while drunk."
    },
    {
        "pos":  "Adj.",
        "word":  "Dry",
        "translation":  "Verb",
        "sentence":  "Kuru"
    },
    {
        "pos":  "Adjective",
        "word":  "Dual",
        "translation":  "Çift, ikili",
        "sentence":  "He has dual nationality, being both French and American."
    },
    {
        "pos":  "Verb",
        "word":  "Dub",
        "translation":  "Seslendirmek (dublaj), ad takmak",
        "sentence":  "The film was dubbed into Turkish for the local audience."
    },
    {
        "pos":  "Adjective",
        "word":  "Due",
        "translation":  "Beklenen, vadesi gelen",
        "sentence":  "The self-evaluation note is due by the end of this week."
    },
    {
        "pos":  "Adjective",
        "word":  "Dull",
        "translation":  "Sıkıcı, mat",
        "sentence":  "The lecture was so dull that I almost fell asleep."
    },
    {
        "pos":  "Adjective",
        "word":  "Dumb",
        "translation":  "Aptal, dilsiz",
        "sentence":  "That was a really dumb mistake to make."
    },
    {
        "pos":  "Verb",
        "word":  "Dump",
        "translation":  "Boşaltmak, çöpe atmak",
        "sentence":  "It is illegal to dump toxic waste in the river."
    },
    {
        "pos":  "Noun",
        "word":  "Duo",
        "translation":  "İkili",
        "sentence":  "The comedy duo has been performing together for twenty years."
    },
    {
        "pos":  "Noun",
        "word":  "Duration",
        "translation":  "Süre, müddet",
        "sentence":  "The duration of the flight is approximately three hours."
    },
    {
        "pos":  "Preposition",
        "word":  "During",
        "translation":  "Boyunca, esnasında",
        "sentence":  "I gained a lot of experience during my four years at this firm."
    },
    {
        "pos":  "Noun",
        "word":  "Dust",
        "translation":  "Toz",
        "sentence":  "The construction site was covered in a thick layer of dust."
    },
    {
        "pos":  "Noun",
        "word":  "Duty",
        "translation":  "Görev, sorumluluk",
        "sentence":  "Managing alternative suppliers is my primary duty at work."
    },
    {
        "pos":  "Noun",
        "word":  "DVD",
        "translation":  "DVD",
        "sentence":  "I found an old DVD of educational songs that might be useful for my channel."
    },
    {
        "pos":  "Adjective / Noun",
        "word":  "Dynamic",
        "translation":  "Dinamik / Dinamik (güç)",
        "sentence":  "She is a dynamic leader who inspires everyone in the team."
    },
    {
        "pos":  "Det.",
        "word":  "Each",
        "translation":  "Pron.",
        "sentence":  "Her biri"
    },
    {
        "pos":  "Adjective",
        "word":  "Eager",
        "translation":  "İstekli, hevesli",
        "sentence":  "The students were eager to start their new project."
    },
    {
        "pos":  "Noun",
        "word":  "Ear",
        "translation":  "Kulak",
        "sentence":  "I use my headphones to protect my ears from the loud noise in the factory."
    },
    {
        "pos":  "Adj.",
        "word":  "Early",
        "translation":  "Adv.",
        "sentence":  "Erken"
    },
    {
        "pos":  "Verb",
        "word":  "Earn",
        "translation":  "Kazanmak",
        "sentence":  "Through hard work, you can earn a promotion for your fifth year."
    },
    {
        "pos":  "Noun",
        "word":  "Earnings",
        "translation":  "Kazanç",
        "sentence":  "The company reported a significant increase in annual earnings."
    },
    {
        "pos":  "Noun",
        "word":  "Earth",
        "translation":  "Dünya, toprak",
        "sentence":  "Precious metals like palladium are extracted from the earth."
    },
    {
        "pos":  "Noun",
        "word":  "Earthquake",
        "translation":  "Deprem",
        "sentence":  "All new buildings in İzmir are designed to be earthquake resistant."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Ease",
        "translation":  "Kolaylık / Kolaylaştırmak",
        "sentence":  "He passed the exam with ease."
    },
    {
        "pos":  "Adverb",
        "word":  "Easily",
        "translation":  "Kolayca",
        "sentence":  "You can easily calculate the total gold weight using a digital scale."
    },
    {
        "pos":  "N.",
        "word":  "East",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Adjective",
        "word":  "Eastern",
        "translation":  "Doğulu, doğuda olan",
        "sentence":  "We are looking for new suppliers in eastern European countries."
    },
    {
        "pos":  "Adjective",
        "word":  "Easy",
        "translation":  "Kolay",
        "sentence":  "Finding a high-quality alternative material is never an easy task."
    },
    {
        "pos":  "Verb",
        "word":  "Eat",
        "translation":  "Yemek yemek",
        "sentence":  "Let\u0027s eat at that new restaurant to celebrate your work anniversary."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Echo",
        "translation":  "Yankılanmak / Yankı",
        "sentence":  "His voice began to echo in the empty hallway."
    },
    {
        "pos":  "Adjective",
        "word":  "Ecological",
        "translation":  "Ekolojik",
        "sentence":  "The oil spill caused an ecological disaster in the bay."
    },
    {
        "pos":  "Adjective",
        "word":  "Economic",
        "translation":  "Ekonomik",
        "sentence":  "The global economic situation affects the price of silver and gold."
    },
    {
        "pos":  "Noun",
        "word":  "Economics",
        "translation":  "Ekonomi (bilim)",
        "sentence":  "She is studying economics at the University of Izmir."
    },
    {
        "pos":  "Noun",
        "word":  "Economist",
        "translation":  "Ekonomist",
        "sentence":  "Most economists predict that inflation will fall next year."
    },
    {
        "pos":  "Noun",
        "word":  "Economy",
        "translation":  "Ekonomi",
        "sentence":  "A strong economy usually leads to higher demand for raw materials."
    },
    {
        "pos":  "Noun",
        "word":  "Edge",
        "translation":  "Kenar, uç",
        "sentence":  "Be careful not to place the silver bars near the edge of the table."
    },
    {
        "pos":  "Verb",
        "word":  "Edit",
        "translation":  "Düzenlemek",
        "sentence":  "I need to edit the video content for the children\u0027s YouTube channel."
    },
    {
        "pos":  "Noun",
        "word":  "Edition",
        "translation":  "Baskı, edisyon",
        "sentence":  "I bought the latest edition of the English-German dictionary."
    },
    {
        "pos":  "Noun",
        "word":  "Editor",
        "translation":  "Editör",
        "sentence":  "The editor reviewed the final draft of my performance review."
    },
    {
        "pos":  "Adjective",
        "word":  "Editorial",
        "translation":  "Editöryal, yazı işleri ile ilgili",
        "sentence":  "He works on the editorial staff of a national newspaper."
    },
    {
        "pos":  "Verb",
        "word":  "Educate",
        "translation":  "Eğitmek",
        "sentence":  "Our goal is to educate young children through fun and music."
    },
    {
        "pos":  "Adjective",
        "word":  "Educated",
        "translation":  "Eğitimli",
        "sentence":  "The firm prefers to hire highly educated professionals for sourcing."
    },
    {
        "pos":  "Noun",
        "word":  "Education",
        "translation":  "Eğitim",
        "sentence":  "Investing in your education is the best way to advance your career."
    },
    {
        "pos":  "Adjective",
        "word":  "Educational",
        "translation":  "Eğitici",
        "sentence":  "I am planning to create educational content for kids aged 2 to 6."
    },
    {
        "pos":  "Noun",
        "word":  "Educator",
        "translation":  "Eğitimci",
        "sentence":  "She has spent her whole career working as an educator."
    },
    {
        "pos":  "Noun",
        "word":  "Effect",
        "translation":  "Etki",
        "sentence":  "The price of silver has a direct effect on our production costs."
    },
    {
        "pos":  "Adjective",
        "word":  "Effective",
        "translation":  "Etkili",
        "sentence":  "Using alternative suppliers is an effective way to reduce expenses."
    },
    {
        "pos":  "Adverb",
        "word":  "Effectively",
        "translation":  "Etkili bir şekilde",
        "sentence":  "We must manage our resources effectively to meet our goals."
    },
    {
        "pos":  "Noun",
        "word":  "Effectiveness",
        "translation":  "Etkililik",
        "sentence":  "The clinical trial is testing the effectiveness of the new drug."
    },
    {
        "pos":  "Noun",
        "word":  "Efficiency",
        "translation":  "Verimlilik",
        "sentence":  "We need to improve the efficiency of our production process."
    },
    {
        "pos":  "Adjective",
        "word":  "Efficient",
        "translation":  "Verimli",
        "sentence":  "The new cost-down strategy is much more efficient than the old one."
    },
    {
        "pos":  "Adverb",
        "word":  "Efficiently",
        "translation":  "Verimli bir şekilde",
        "sentence":  "The new system allows us to process orders more efficiently."
    },
    {
        "pos":  "Noun",
        "word":  "Effort",
        "translation":  "Çaba",
        "sentence":  "Reducing costs requires a team effort and constant monitoring."
    },
    {
        "pos":  "Noun",
        "word":  "Egg",
        "translation":  "Yumurta",
        "sentence":  "I usually have a boiled egg for breakfast before going to work."
    },
    {
        "pos":  "Noun",
        "word":  "Ego",
        "translation":  "Ego, benlik",
        "sentence":  "Winning the award was a huge boost to his ego."
    },
    {
        "pos":  "Number",
        "word":  "Eight",
        "translation":  "Sekiz",
        "sentence":  "I start my work day at eight o\u0027clock every morning."
    },
    {
        "pos":  "Number",
        "word":  "Eighteen",
        "translation":  "On sekiz",
        "sentence":  "He has been working in the industry for eighteen years."
    },
    {
        "pos":  "Number",
        "word":  "Eighty",
        "translation":  "Seksen",
        "sentence":  "We managed to save eighty thousand dollars this year."
    },
    {
        "pos":  "Det.",
        "word":  "Either",
        "translation":  "Pron.",
        "sentence":  "Ya da, ikisinden biri"
    },
    {
        "pos":  "Adjective",
        "word":  "Elaborate",
        "translation":  "Ayrıntılı, detaylı",
        "sentence":  "They made elaborate preparations for the royal visit."
    },
    {
        "pos":  "Noun",
        "word":  "Elbow",
        "translation":  "Dirsek",
        "sentence":  "He rested his elbows on the table and listened."
    },
    {
        "pos":  "Adjective",
        "word":  "Elderly",
        "translation":  "Yaşlı",
        "sentence":  "My elderly neighbor in İzmir is a retired strategic sourcing expert."
    },
    {
        "pos":  "Verb",
        "word":  "Elect",
        "translation":  "Seçmek (oy ile)",
        "sentence":  "The board will elect a new chairman at the next meeting."
    },
    {
        "pos":  "Noun",
        "word":  "Election",
        "translation":  "Seçim",
        "sentence":  "The results of the local election were discussed all over İzmir."
    },
    {
        "pos":  "Adjective",
        "word":  "Electoral",
        "translation":  "Seçimle ilgili",
        "sentence":  "The country is currently undergoing major electoral reforms."
    },
    {
        "pos":  "Adjective",
        "word":  "Electric",
        "translation":  "Elektrikli",
        "sentence":  "I am considering buying an electric car for my daily commute."
    },
    {
        "pos":  "Adjective",
        "word":  "Electrical",
        "translation":  "Elektriksel",
        "sentence":  "We need to check the electrical systems in the warehouse."
    },
    {
        "pos":  "Noun",
        "word":  "Electricity",
        "translation":  "Elektrik",
        "sentence":  "The cost of electricity is a major factor in our factory\u0027s budget."
    },
    {
        "pos":  "Adjective",
        "word":  "Electronic",
        "translation":  "Elektronik",
        "sentence":  "We source many electronic components from alternative firms."
    },
    {
        "pos":  "Noun",
        "word":  "Electronics",
        "translation":  "Elektronik",
        "sentence":  "The store sells a wide range of consumer electronics."
    },
    {
        "pos":  "Adjective",
        "word":  "Elegant",
        "translation":  "Zarif, şık",
        "sentence":  "She was wearing an elegant black silk dress."
    },
    {
        "pos":  "Noun",
        "word":  "Element",
        "translation":  "Element, öğe",
        "sentence":  "Palladium is a rare chemical element used in many industries."
    },
    {
        "pos":  "Adjective",
        "word":  "Elementary",
        "translation":  "Temel, başlangıç düzeyi",
        "sentence":  "It’s an elementary mistake that even a beginner wouldn\u0027t make."
    },
    {
        "pos":  "Noun",
        "word":  "Elephant",
        "translation":  "Fil",
        "sentence":  "There is a song about a big blue elephant on my YouTube channel."
    },
    {
        "pos":  "Verb",
        "word":  "Elevate",
        "translation":  "Yükseltmek",
        "sentence":  "He was recently elevated to the rank of senior manager."
    },
    {
        "pos":  "Noun",
        "word":  "Elevator",
        "translation":  "Asansör",
        "sentence":  "Please take the elevator to the fourth floor for the meeting."
    },
    {
        "pos":  "Number",
        "word":  "Eleven",
        "translation":  "On bir",
        "sentence":  "The meeting is scheduled for eleven o\u0027clock in the morning."
    },
    {
        "pos":  "Adjective",
        "word":  "Eligible",
        "translation":  "Uygun, nitelikli",
        "sentence":  "Only residents over eighteen are eligible to vote."
    },
    {
        "pos":  "Verb",
        "word":  "Eliminate",
        "translation":  "Elemek, yok etmek",
        "sentence":  "The government is trying to eliminate poverty in rural areas."
    },
    {
        "pos":  "Noun",
        "word":  "Elite",
        "translation":  "Elit, seçkin tabaka",
        "sentence":  "The country\u0027s political elite often meet at this private club."
    },
    {
        "pos":  "Adverb",
        "word":  "Else",
        "translation":  "Başka",
        "sentence":  "If this supplier fails, is there anyone else we can contact?"
    },
    {
        "pos":  "Adverb",
        "word":  "Elsewhere",
        "translation":  "Başka yerde",
        "sentence":  "If we can\u0027t find the material here, we will look elsewhere."
    },
    {
        "pos":  "Noun",
        "word":  "Email",
        "translation":  "Verb",
        "sentence":  "E-posta"
    },
    {
        "pos":  "Verb",
        "word":  "Embark",
        "translation":  "Gemiye binmek, (yeni bir işe) başlamak",
        "sentence":  "We are about to embark on a very exciting new project."
    },
    {
        "pos":  "Adjective",
        "word":  "Embarrassed",
        "translation":  "Utanmış",
        "sentence":  "I felt embarrassed when I realized I had the wrong flight date."
    },
    {
        "pos":  "Adjective",
        "word":  "Embarrassing",
        "translation":  "Utanç verici",
        "sentence":  "Forgetting a colleague\u0027s name can be an embarrassing situation."
    },
    {
        "pos":  "Noun",
        "word":  "Embarrassment",
        "translation":  "Utanç, mahcubiyet",
        "sentence":  "I nearly died of embarrassment when I realized I was late."
    },
    {
        "pos":  "Noun",
        "word":  "Embassy",
        "translation":  "Büyükelçilik",
        "sentence":  "You need to go to the embassy to apply for a visa."
    },
    {
        "pos":  "Verb",
        "word":  "Embed",
        "translation":  "Yerleştirmek, içine oturtmak",
        "sentence":  "The diamond was embedded in a gold ring."
    },
    {
        "pos":  "Verb",
        "word":  "Embody",
        "translation":  "Somutlaştırmak, simgelemek",
        "sentence":  "The new building is intended to embody the spirit of the city."
    },
    {
        "pos":  "Verb",
        "word":  "Embrace",
        "translation":  "Kucaklamak, benimsemek",
        "sentence":  "The company has decided to embrace new technology."
    },
    {
        "pos":  "Verb",
        "word":  "Emerge",
        "translation":  "Ortaya çıkmak",
        "sentence":  "New opportunities for cost-down studies emerge every day."
    },
    {
        "pos":  "Noun",
        "word":  "Emergence",
        "translation":  "Ortaya çıkma",
        "sentence":  "The emergence of the new virus caused global concern."
    },
    {
        "pos":  "Noun",
        "word":  "Emergency",
        "translation":  "Acil durum",
        "sentence":  "Please use the emergency exit in case of a fire."
    },
    {
        "pos":  "Noun",
        "word":  "Emission",
        "translation":  "Emisyon, yayılım",
        "sentence":  "The new law aims to reduce carbon emissions from factories."
    },
    {
        "pos":  "Noun",
        "word":  "Emotion",
        "translation":  "Duygu",
        "sentence":  "It\u0027s important to keep emotion out of professional negotiations."
    },
    {
        "pos":  "Adjective",
        "word":  "Emotional",
        "translation":  "Duygusal",
        "sentence":  "The story in the children\u0027s book has a very emotional ending."
    },
    {
        "pos":  "Adverb",
        "word":  "Emotionally",
        "translation":  "Duygusal olarak",
        "sentence":  "The loss of his job has affected him emotionally."
    },
    {
        "pos":  "Noun",
        "word":  "Emphasis",
        "translation":  "Vurgu",
        "sentence":  "The emphasis of our meeting was on managing alternative suppliers."
    },
    {
        "pos":  "Verb",
        "word":  "Emphasize",
        "translation":  "Vurgulamak",
        "sentence":  "I want to emphasize the importance of quality control."
    },
    {
        "pos":  "Noun",
        "word":  "Empire",
        "translation":  "İmparatorluk",
        "sentence":  "The Ottoman Empire lasted for over six hundred years."
    },
    {
        "pos":  "Adjective",
        "word":  "Empirical",
        "translation":  "Deneysel, ampirik",
        "sentence":  "There is no empirical evidence to support his theory."
    },
    {
        "pos":  "Verb",
        "word":  "Employ",
        "translation":  "İşe almak, çalıştırmak",
        "sentence":  "Our firm plans to employ ten more people in the sourcing team."
    },
    {
        "pos":  "Noun",
        "word":  "Employee",
        "translation":  "Çalışan",
        "sentence":  "As an employee of five years, you have a deep understanding of the firm."
    },
    {
        "pos":  "Noun",
        "word":  "Employer",
        "translation":  "İşveren",
        "sentence":  "My employer provided me with a new laptop for my work tasks."
    },
    {
        "pos":  "Noun",
        "word":  "Employment",
        "translation":  "İstihdam, iş",
        "sentence":  "The employment rate in İzmir has been increasing lately."
    },
    {
        "pos":  "Verb",
        "word":  "Empower",
        "translation":  "Yetkilendirmek, güçlendirmek",
        "sentence":  "The program aims to empower young women in the workplace."
    },
    {
        "pos":  "Adj.",
        "word":  "Empty",
        "translation":  "Verb",
        "sentence":  "Boş"
    },
    {
        "pos":  "Verb",
        "word":  "Enable",
        "translation":  "Olanak sağlamak",
        "sentence":  "This new software will enable us to track prices more accurately."
    },
    {
        "pos":  "Verb",
        "word":  "Enact",
        "translation":  "Yasalaştırmak",
        "sentence":  "The government plans to enact new laws to protect the environment."
    },
    {
        "pos":  "Verb",
        "word":  "Encompass",
        "translation":  "Kapsamak, kuşatmak",
        "sentence":  "The course is designed to encompass all aspects of modern history."
    },
    {
        "pos":  "Verb",
        "word":  "Encounter",
        "translation":  "Noun",
        "sentence":  "Karşılaşmak"
    },
    {
        "pos":  "Verb",
        "word":  "Encourage",
        "translation":  "Teşvik etmek",
        "sentence":  "My manager decided to encourage me to learn a new language."
    },
    {
        "pos":  "Noun",
        "word":  "Encouragement",
        "translation":  "Teşvik, cesaretlendirme",
        "sentence":  "My teacher gave me a lot of encouragement to apply for college."
    },
    {
        "pos":  "Adjective",
        "word":  "Encouraging",
        "translation":  "Cesaret verici, umut verici",
        "sentence":  "The recent sales figures are very encouraging for the company."
    },
    {
        "pos":  "Noun",
        "word":  "End",
        "translation":  "Verb",
        "sentence":  "Son"
    },
    {
        "pos":  "Noun",
        "word":  "Endeavor",
        "translation":  "Çaba, gayret",
        "sentence":  "We wish him every success in his future endeavors."
    },
    {
        "pos":  "Noun",
        "word":  "Ending",
        "translation":  "Son, sonlanış",
        "sentence":  "The ending of the football match was very exciting."
    },
    {
        "pos":  "Adjective",
        "word":  "Endless",
        "translation":  "Sonsuz",
        "sentence":  "The project seems to be taking an endless amount of time."
    },
    {
        "pos":  "Verb",
        "word":  "Endorse",
        "translation":  "Onaylamak, desteklemek",
        "sentence":  "The famous athlete was paid millions to endorse the new sneakers."
    },
    {
        "pos":  "Noun",
        "word":  "Endorsement",
        "translation":  "Onay, destek",
        "sentence":  "The product received a celebrity endorsement in the magazine."
    },
    {
        "pos":  "Verb",
        "word":  "Endure",
        "translation":  "Dayanmak, katlanmak",
        "sentence":  "The refugees had to endure many hardships during their journey."
    },
    {
        "pos":  "Noun",
        "word":  "Enemy",
        "translation":  "Düşman",
        "sentence":  "In business, a lack of transparency is the enemy of success."
    },
    {
        "pos":  "Noun",
        "word":  "Energy",
        "translation":  "Enerji",
        "sentence":  "High energy costs are driving us to find alternative materials."
    },
    {
        "pos":  "Verb",
        "word":  "Enforce",
        "translation":  "Uygulamak, zorla yaptırmak",
        "sentence":  "It is the job of the police to enforce the law."
    },
    {
        "pos":  "Noun",
        "word":  "Enforcement",
        "translation":  "Uygulama, icra",
        "sentence":  "Law enforcement agencies are working together to fight crime."
    },
    {
        "pos":  "Verb",
        "word":  "Engage",
        "translation":  "İlgilenmek, bağlamak",
        "sentence":  "We need to engage more with our suppliers to build trust."
    },
    {
        "pos":  "Adjective",
        "word":  "Engaged",
        "translation":  "Nişanlı, meşgul",
        "sentence":  "My sister got engaged last month and is planning a wedding."
    },
    {
        "pos":  "Noun",
        "word":  "Engagement",
        "translation":  "Nişan, katılım, randevu",
        "sentence":  "Their engagement was announced in the local newspaper."
    },
    {
        "pos":  "Adjective",
        "word":  "Engaging",
        "translation":  "Çekici, ilgi çekici",
        "sentence":  "She has a very engaging personality and makes friends easily."
    },
    {
        "pos":  "Noun",
        "word":  "Engine",
        "translation":  "Motor",
        "sentence":  "The engine of my car needs a routine check before the long trip."
    },
    {
        "pos":  "Noun",
        "word":  "Engineer",
        "translation":  "Mühendis",
        "sentence":  "Our production engineer is testing the new raw material samples."
    },
    {
        "pos":  "Noun",
        "word":  "Engineering",
        "translation":  "Mühendislik",
        "sentence":  "He studied mechanical engineering before joining the sourcing team."
    },
    {
        "pos":  "Verb",
        "word":  "Enhance",
        "translation":  "Geliştirmek, artırmak",
        "sentence":  "We want to enhance the quality of our educational videos."
    },
    {
        "pos":  "Verb",
        "word":  "Enjoy",
        "translation":  "Zevk almak",
        "sentence":  "I enjoy researching the market trends for precious metals."
    },
    {
        "pos":  "Adjective",
        "word":  "Enjoyable",
        "translation":  "Keyifli",
        "sentence":  "We had a very enjoyable evening at the theater."
    },
    {
        "pos":  "Adjective",
        "word":  "Enormous",
        "translation":  "Muazzam, kocaman",
        "sentence":  "Switching to this firm saved us an enormous amount of money."
    },
    {
        "pos":  "Det.",
        "word":  "Enough",
        "translation":  "Pron.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Verb",
        "word":  "Enrich",
        "translation":  "Zenginleştirmek",
        "sentence":  "The curriculum is designed to enrich the students\u0027 learning experience."
    },
    {
        "pos":  "Verb",
        "word":  "Enroll",
        "translation":  "Kaydolmak",
        "sentence":  "I’ve decided to enroll in an English course this summer."
    },
    {
        "pos":  "Verb",
        "word":  "Ensue",
        "translation":  "Ardından gelmek, sonuç olarak çıkmak",
        "sentence":  "A violent argument began to ensue after the meeting."
    },
    {
        "pos":  "Verb",
        "word":  "Ensure",
        "translation":  "Garantiye almak",
        "sentence":  "Please ensure that all the gold weights are calculated correctly."
    },
    {
        "pos":  "Verb",
        "word":  "Enter",
        "translation":  "Girmek",
        "sentence":  "I will enter my fifth year at the company this coming December."
    },
    {
        "pos":  "Noun",
        "word":  "Enterprise",
        "translation":  "İşletme, girişim",
        "sentence":  "He is the owner of a small commercial enterprise."
    },
    {
        "pos":  "Verb",
        "word":  "Entertain",
        "translation":  "Eğlendirmek",
        "sentence":  "The purpose of the YouTube channel is to entertain and teach kids."
    },
    {
        "pos":  "Adjective",
        "word":  "Entertaining",
        "translation":  "Eğlendirici",
        "sentence":  "The movie was very entertaining, and the kids loved it."
    },
    {
        "pos":  "Noun",
        "word":  "Entertainment",
        "translation":  "Eğlence",
        "sentence":  "İzmir offers many types of entertainment, from concerts to theaters."
    },
    {
        "pos":  "Noun",
        "word":  "Enthusiasm",
        "translation":  "Coşku, heves",
        "sentence":  "She showed great enthusiasm for the new cost-down project."
    },
    {
        "pos":  "Noun",
        "word":  "Enthusiast",
        "translation":  "Meraklı, tutkun",
        "sentence":  "He is a classic car enthusiast and owns three vintage models."
    },
    {
        "pos":  "Adjective",
        "word":  "Enthusiastic",
        "translation":  "Hevesli, coşkulu",
        "sentence":  "I am very enthusiastic about launching the children\u0027s channel."
    },
    {
        "pos":  "Adjective",
        "word":  "Entire",
        "translation":  "Tüm, bütün",
        "sentence":  "I spent the entire morning analyzing the Beşiktaş match."
    },
    {
        "pos":  "Adverb",
        "word":  "Entirely",
        "translation":  "Tamamen",
        "sentence":  "The delay was entirely due to the flight cancellation."
    },
    {
        "pos":  "Verb",
        "word":  "Entitle",
        "translation":  "Yetki vermek, hak kazandırmak",
        "sentence":  "This ticket will entitle you to a free drink at the bar."
    },
    {
        "pos":  "Noun",
        "word":  "Entity",
        "translation":  "Varlık, birim",
        "sentence":  "The two companies will remain separate legal entities."
    },
    {
        "pos":  "Noun",
        "word":  "Entrance",
        "translation":  "Giriş",
        "sentence":  "I\u0027ll meet you at the main entrance of the office building."
    },
    {
        "pos":  "Noun",
        "word":  "Entrepreneur",
        "translation":  "Girişimci",
        "sentence":  "She is a successful entrepreneur who has started several businesses."
    },
    {
        "pos":  "Noun",
        "word":  "Entry",
        "translation":  "Giriş, girdi",
        "sentence":  "Each entry in the sourcing ledger must be checked for accuracy."
    },
    {
        "pos":  "Noun",
        "word":  "Envelope",
        "translation":  "Zarf",
        "sentence":  "He put the letter in an envelope and mailed it."
    },
    {
        "pos":  "Noun",
        "word":  "Environment",
        "translation":  "Çevre, ortam",
        "sentence":  "Working in a positive environment increases productivity."
    },
    {
        "pos":  "Adjective",
        "word":  "Environmental",
        "translation":  "Çevresel",
        "sentence":  "We are looking for suppliers with strong environmental policies."
    },
    {
        "pos":  "Noun",
        "word":  "Epidemic",
        "translation":  "Salgın",
        "sentence":  "The authorities are working to prevent a flu epidemic."
    },
    {
        "pos":  "Noun",
        "word":  "Episode",
        "translation":  "Bölüm (dizi vb.)",
        "sentence":  "The first episode of the kids\u0027 channel will be about animals."
    },
    {
        "pos":  "Adj.",
        "word":  "Equal",
        "translation":  "V.",
        "sentence":  "N."
    },
    {
        "pos":  "Noun",
        "word":  "Equality",
        "translation":  "Eşitlik",
        "sentence":  "The group is fighting for racial and gender equality."
    },
    {
        "pos":  "Adverb",
        "word":  "Equally",
        "translation":  "Eşit olarak",
        "sentence":  "Both cost and quality are equally important in strategic sourcing."
    },
    {
        "pos":  "Noun",
        "word":  "Equation",
        "translation":  "Denklem",
        "sentence":  "It is a complex mathematical equation that is difficult to solve."
    },
    {
        "pos":  "Verb",
        "word":  "Equip",
        "translation":  "Donatmak",
        "sentence":  "The gym is equipped with the latest exercise machines."
    },
    {
        "pos":  "Noun",
        "word":  "Equipment",
        "translation":  "Ekipman",
        "sentence":  "We need to buy some new recording equipment for the channel."
    },
    {
        "pos":  "Noun / Adjective",
        "word":  "Equivalent",
        "translation":  "Eşdeğer, muadil",
        "sentence":  "A ten percent discount is equivalent to saving twenty dollars."
    },
    {
        "pos":  "Noun",
        "word":  "Era",
        "translation":  "Devir, çağ",
        "sentence":  "The invention of the internet marked the beginning of a new era."
    },
    {
        "pos":  "Verb",
        "word":  "Erect",
        "translation":  "Dikmek, inşa etmek",
        "sentence":  "The city plans to erect a statue of the famous writer."
    },
    {
        "pos":  "Noun",
        "word":  "Error",
        "translation":  "Hata",
        "sentence":  "There was a small error in the initial gold weight calculation."
    },
    {
        "pos":  "Verb",
        "word":  "Erupt",
        "translation":  "Patlamak (volkan vb.), aniden başlamak",
        "sentence":  "The volcano is expected to erupt at any moment."
    },
    {
        "pos":  "Verb",
        "word":  "Escalate",
        "translation":  "Tırmanmak, şiddetlenmek",
        "sentence":  "The conflict began to escalate as more troops were sent to the border."
    },
    {
        "pos":  "Verb",
        "word":  "Escape",
        "translation":  "Noun",
        "sentence":  "Kaçmak"
    },
    {
        "pos":  "Adverb",
        "word":  "Especially",
        "translation":  "Özellikle",
        "sentence":  "This cost-down study is especially important for our department."
    },
    {
        "pos":  "Noun",
        "word":  "Essay",
        "translation":  "Makale, deneme",
        "sentence":  "I had to write an essay about asset management for my course."
    },
    {
        "pos":  "Noun",
        "word":  "Essence",
        "translation":  "Öz, esas",
        "sentence":  "The essence of his argument is that we need to save more money."
    },
    {
        "pos":  "Adjective",
        "word":  "Essential",
        "translation":  "Gerekli, temel",
        "sentence":  "Accurate data is essential for writing a good performance note."
    },
    {
        "pos":  "Adverb",
        "word":  "Essentially",
        "translation":  "Esasen, aslında",
        "sentence":  "The two products are essentially the same."
    },
    {
        "pos":  "Verb",
        "word":  "Establish",
        "translation":  "Kurmak",
        "sentence":  "We want to establish a long-term partnership with this firm."
    },
    {
        "pos":  "Noun",
        "word":  "Establishment",
        "translation":  "Kurum, kuruluş, tesis",
        "sentence":  "The hotel is a well-known establishment in the city center."
    },
    {
        "pos":  "Noun",
        "word":  "Estate",
        "translation":  "Mülk, arazi",
        "sentence":  "He works for a real estate agency in the center of İzmir."
    },
    {
        "pos":  "Verb",
        "word":  "Estimate",
        "translation":  "Noun",
        "sentence":  "Tahmin etmek"
    },
    {
        "pos":  "Adjective",
        "word":  "Eternal",
        "translation":  "Ebedi, sonsuz",
        "sentence":  "She believes in the concept of eternal life."
    },
    {
        "pos":  "Noun",
        "word":  "Ethic",
        "translation":  "Etik, ahlak kuralı",
        "sentence":  "The company has a very strong work ethic."
    },
    {
        "pos":  "Adjective",
        "word":  "Ethical",
        "translation":  "Etik",
        "sentence":  "We must ensure our sourcing practices are always ethical."
    },
    {
        "pos":  "Adjective",
        "word":  "Ethnic",
        "translation":  "Etnik",
        "sentence":  "The city is home to many different ethnic groups."
    },
    {
        "pos":  "Noun",
        "word":  "Euro",
        "translation":  "Euro",
        "sentence":  "The price of the equipment was listed in euros, not dollars."
    },
    {
        "pos":  "Verb",
        "word":  "Evacuate",
        "translation":  "Tahliye etmek",
        "sentence":  "Residents were told to evacuate their homes due to the flood."
    },
    {
        "pos":  "Verb",
        "word":  "Evaluate",
        "translation":  "Değerlendirmek",
        "sentence":  "I need to evaluate my performance over the last four years."
    },
    {
        "pos":  "Noun",
        "word":  "Evaluation",
        "translation":  "Değerlendirme",
        "sentence":  "The teacher gave a positive evaluation of the student\u0027s progress."
    },
    {
        "pos":  "Adv.",
        "word":  "Even",
        "translation":  "Adj.",
        "sentence":  "Bile"
    },
    {
        "pos":  "Noun",
        "word":  "Evening",
        "translation":  "Akşam",
        "sentence":  "I usually review my English vocabulary in the evening."
    },
    {
        "pos":  "Noun",
        "word":  "Event",
        "translation":  "Etkinlik, olay",
        "sentence":  "The flight cancellation was an unfortunate event for my trip."
    },
    {
        "pos":  "Adverb",
        "word":  "Eventually",
        "translation":  "Er ya da geç",
        "sentence":  "Eventually, we will find the perfect alternative raw material."
    },
    {
        "pos":  "Adverb",
        "word":  "Ever",
        "translation":  "Hiç, her zaman",
        "sentence":  "Have you ever invested in palladium through Akbank?"
    },
    {
        "pos":  "Determiner",
        "word":  "Every",
        "translation":  "Her",
        "sentence":  "I check the market value of my gold holdings every day."
    },
    {
        "pos":  "Pronoun",
        "word":  "Everybody",
        "translation":  "Herkes",
        "sentence":  "Everybody in the office was happy about the anniversary celebration."
    },
    {
        "pos":  "Adjective",
        "word":  "Everyday",
        "translation":  "Günlük",
        "sentence":  "Vocabulary for everyday situations is essential for language learning."
    },
    {
        "pos":  "Pronoun",
        "word":  "Everyone",
        "translation":  "Herkes",
        "sentence":  "Everyone needs to contribute to the cost-down goals."
    },
    {
        "pos":  "Pronoun",
        "word":  "Everything",
        "translation":  "Her şey",
        "sentence":  "I have prepared everything needed for the kids\u0027 YouTube channel."
    },
    {
        "pos":  "Adverb",
        "word":  "Everywhere",
        "translation":  "Her yer",
        "sentence":  "I looked everywhere for my passport but couldn\u0027t find it."
    },
    {
        "pos":  "Noun",
        "word":  "Evidence",
        "translation":  "Kanıt",
        "sentence":  "There is strong evidence that silver prices will continue to rise."
    },
    {
        "pos":  "Adjective",
        "word":  "Evident",
        "translation":  "Belirgin, açık",
        "sentence":  "It was evident that he was not telling the truth."
    },
    {
        "pos":  "Adj.",
        "word":  "Evil",
        "translation":  "Noun",
        "sentence":  "Kötü, fena"
    },
    {
        "pos":  "Verb",
        "word":  "Evoke",
        "translation":  "Çağrıştırmak, anımsatmak",
        "sentence":  "The music was intended to evoke memories of his childhood."
    },
    {
        "pos":  "Noun",
        "word":  "Evolution",
        "translation":  "Evrim, gelişim",
        "sentence":  "Darwin\u0027s theory of evolution changed the way we look at the world."
    },
    {
        "pos":  "Adjective",
        "word":  "Evolutionary",
        "translation":  "Evrimsel",
        "sentence":  "The scientist is studying the evolutionary history of birds."
    },
    {
        "pos":  "Verb",
        "word":  "Evolve",
        "translation":  "Gelişmek, evrilmek",
        "sentence":  "The company has continued to evolve over the last decade."
    },
    {
        "pos":  "Adjective",
        "word":  "Exact",
        "translation":  "Tam, kesin",
        "sentence":  "I need to know the exact number of grams for each gold piece."
    },
    {
        "pos":  "Adverb",
        "word":  "Exactly",
        "translation":  "Tam olarak",
        "sentence":  "That is exactly what I wanted to say in my self-evaluation."
    },
    {
        "pos":  "Verb",
        "word":  "Exaggerate",
        "translation":  "Abartmak",
        "sentence":  "He tends to exaggerate his achievements to impress people."
    },
    {
        "pos":  "Noun",
        "word":  "Exam",
        "translation":  "Sınav",
        "sentence":  "I am studying hard to pass my German language exam."
    },
    {
        "pos":  "Noun",
        "word":  "Examination",
        "translation":  "Muayene, inceleme",
        "sentence":  "The physical examination of the materials showed no defects."
    },
    {
        "pos":  "Verb",
        "word":  "Examine",
        "translation":  "İncelemek",
        "sentence":  "We need to examine the alternative firm\u0027s financial history."
    },
    {
        "pos":  "Noun",
        "word":  "Example",
        "translation":  "Örnek",
        "sentence":  "Let me give you an example of a successful cost reduction project."
    },
    {
        "pos":  "Verb",
        "word":  "Exceed",
        "translation":  "Aşmak, geçmek",
        "sentence":  "You should not exceed the speed limit on this road."
    },
    {
        "pos":  "Noun",
        "word":  "Excellence",
        "translation":  "Mükemmellik",
        "sentence":  "The school is committed to achieving academic excellence."
    },
    {
        "pos":  "Adjective",
        "word":  "Excellent",
        "translation":  "Mükemmel",
        "sentence":  "Your performance over the last four years has been excellent."
    },
    {
        "pos":  "Prep.",
        "word":  "Except",
        "translation":  "Conj.",
        "sentence":  "Hariç"
    },
    {
        "pos":  "Noun",
        "word":  "Exception",
        "translation":  "İstisna",
        "sentence":  "We usually don\u0027t allow pets, but we can make an exception for you."
    },
    {
        "pos":  "Adjective",
        "word":  "Exceptional",
        "translation":  "Olağanüstü, müstesna",
        "sentence":  "She is an exceptional student who consistently gets top grades."
    },
    {
        "pos":  "Noun / Adjective",
        "word":  "Excess",
        "translation":  "Fazlalık / Fazla",
        "sentence":  "You will have to pay for any excess baggage."
    },
    {
        "pos":  "Adjective",
        "word":  "Excessive",
        "translation":  "Aşırı",
        "sentence":  "Excessive drinking can lead to serious health problems."
    },
    {
        "pos":  "Noun",
        "word":  "Exchange",
        "translation":  "Verb",
        "sentence":  "Değişim"
    },
    {
        "pos":  "Adjective",
        "word":  "Excited",
        "translation":  "Heyecanlı",
        "sentence":  "I am excited about entering my fifth year at the company."
    },
    {
        "pos":  "Noun",
        "word":  "Excitement",
        "translation":  "Heyecan",
        "sentence":  "There was a lot of excitement about the new YouTube channel launch."
    },
    {
        "pos":  "Adjective",
        "word":  "Exciting",
        "translation":  "Heyecan verici",
        "sentence":  "Finding a new and cheaper supplier is an exciting challenge."
    },
    {
        "pos":  "Verb",
        "word":  "Exclude",
        "translation":  "Dışlamak, hariç tutmak",
        "sentence":  "The price of the hotel does not exclude breakfast."
    },
    {
        "pos":  "Noun",
        "word":  "Exclusion",
        "translation":  "Dışlama, hariç bırakma",
        "sentence":  "The exclusion of women from the club caused a lot of controversy."
    },
    {
        "pos":  "Adjective",
        "word":  "Exclusive",
        "translation":  "Özel, seçkin, hariç tutan",
        "sentence":  "This is an exclusive club for members only."
    },
    {
        "pos":  "Adverb",
        "word":  "Exclusively",
        "translation":  "Sadece, yalnızca",
        "sentence":  "This room is used exclusively for private meetings."
    },
    {
        "pos":  "Noun",
        "word":  "Excuse",
        "translation":  "Verb",
        "sentence":  "Mazeret"
    },
    {
        "pos":  "Verb",
        "word":  "Execute",
        "translation":  "İdam etmek, yürütmek, yerine getirmek",
        "sentence":  "The government plans to execute the new strategy next month."
    },
    {
        "pos":  "Noun",
        "word":  "Execution",
        "translation":  "İdam, uygulama, yürütme",
        "sentence":  "The execution of the plan was delayed by several weeks."
    },
    {
        "pos":  "Noun",
        "word":  "Executive",
        "translation":  "Adj.",
        "sentence":  "Yönetici"
    },
    {
        "pos":  "Noun",
        "word":  "Exercise",
        "translation":  "Verb",
        "sentence":  "Egzersiz"
    },
    {
        "pos":  "Verb",
        "word":  "Exert",
        "translation":  "(Güç, nüfuz vb.) kullanmak, sarf etmek",
        "sentence":  "You need to exert more pressure to open the door."
    },
    {
        "pos":  "Verb",
        "word":  "Exhibit",
        "translation":  "Noun",
        "sentence":  "Sergilemek"
    },
    {
        "pos":  "Noun",
        "word":  "Exhibition",
        "translation":  "Sergi",
        "sentence":  "I visited a fascinating exhibition on digital content creation."
    },
    {
        "pos":  "Noun",
        "word":  "Exile",
        "translation":  "Sürgün",
        "sentence":  "He spent many years in exile in Switzerland."
    },
    {
        "pos":  "Verb",
        "word":  "Exist",
        "translation":  "Var olmak",
        "sentence":  "Does a cheaper alternative for this material really exist?"
    },
    {
        "pos":  "Noun",
        "word":  "Existence",
        "translation":  "Varlık, mevcudiyet",
        "sentence":  "The existence of the new firm was only discovered last week."
    },
    {
        "pos":  "Noun",
        "word":  "Exit",
        "translation":  "Verb",
        "sentence":  "Çıkış"
    },
    {
        "pos":  "Adjective",
        "word":  "Exotic",
        "translation":  "Egzotik",
        "sentence":  "The garden was full of exotic plants from all over the world."
    },
    {
        "pos":  "Verb",
        "word":  "Expand",
        "translation":  "Genişletmek",
        "sentence":  "We want to expand our supplier network to include more firms."
    },
    {
        "pos":  "Noun",
        "word":  "Expansion",
        "translation":  "Genişleme, büyüme",
        "sentence":  "The company\u0027s expansion into new markets has been very successful."
    },
    {
        "pos":  "Verb",
        "word":  "Expect",
        "translation":  "Beklemek",
        "sentence":  "I expect the price of palladium to stabilize by the end of the year."
    },
    {
        "pos":  "Noun",
        "word":  "Expectation",
        "translation":  "Beklenti",
        "sentence":  "The performance review met all my expectations for this year."
    },
    {
        "pos":  "Adjective",
        "word":  "Expected",
        "translation":  "Beklenen",
        "sentence":  "The expected delivery date for the silver bars is next Tuesday."
    },
    {
        "pos":  "Noun",
        "word":  "Expedition",
        "translation":  "Sefer, yolculuk, keşif gezisi",
        "sentence":  "He led a scientific expedition to the South Pole."
    },
    {
        "pos":  "Noun",
        "word":  "Expenditure",
        "translation":  "Harcama, masraf",
        "sentence":  "The government plans to increase expenditure on healthcare."
    },
    {
        "pos":  "Noun",
        "word":  "Expense",
        "translation":  "Masraf, gider",
        "sentence":  "Travelling to the factory is a necessary business expense."
    },
    {
        "pos":  "Adjective",
        "word":  "Expensive",
        "translation":  "Pahalı",
        "sentence":  "Silver is much less expensive than gold or palladium."
    },
    {
        "pos":  "Noun",
        "word":  "Experience",
        "translation":  "Verb",
        "sentence":  "Deneyim"
    },
    {
        "pos":  "Adjective",
        "word":  "Experienced",
        "translation":  "Deneyimli",
        "sentence":  "We need an experienced person to manage the alternative firm."
    },
    {
        "pos":  "Noun",
        "word":  "Experiment",
        "translation":  "Verb",
        "sentence":  "Deney"
    },
    {
        "pos":  "Adjective",
        "word":  "Experimental",
        "translation":  "Deneysel",
        "sentence":  "The new drug is still in the experimental stage."
    },
    {
        "pos":  "Noun",
        "word":  "Expert",
        "translation":  "Adj.",
        "sentence":  "Uzman"
    },
    {
        "pos":  "Noun",
        "word":  "Expertise",
        "translation":  "Uzmanlık",
        "sentence":  "The job requires a high level of technical expertise."
    },
    {
        "pos":  "Verb",
        "word":  "Expire",
        "translation":  "Süresi dolmak",
        "sentence":  "My passport is due to expire next month."
    },
    {
        "pos":  "Verb",
        "word":  "Explain",
        "translation":  "Açıklamak",
        "sentence":  "Can you explain the professional terminology for these tasks?"
    },
    {
        "pos":  "Noun",
        "word":  "Explanation",
        "translation":  "Açıklama",
        "sentence":  "I need a clear explanation for the delay in the sourcing report."
    },
    {
        "pos":  "Adjective",
        "word":  "Explicit",
        "translation":  "Açık, net",
        "sentence":  "The teacher gave us explicit instructions on how to do the task."
    },
    {
        "pos":  "Adverb",
        "word":  "Explicitly",
        "translation":  "Açıkça",
        "sentence":  "I explicitly told him not to mention the secret."
    },
    {
        "pos":  "Verb",
        "word":  "Explode",
        "translation":  "Patlamak",
        "sentence":  "Be careful with the chemicals; they might explode if heated."
    },
    {
        "pos":  "Verb",
        "word":  "Exploit",
        "translation":  "Sömürmek, faydalanmak",
        "sentence":  "The company was accused of trying to exploit its workers."
    },
    {
        "pos":  "Noun",
        "word":  "Exploitation",
        "translation":  "Sömürü",
        "sentence":  "The charity is working to end the exploitation of children."
    },
    {
        "pos":  "Noun",
        "word":  "Exploration",
        "translation":  "Keşif, araştırma",
        "sentence":  "The exploration of new metal sources is a long-term goal."
    },
    {
        "pos":  "Verb",
        "word":  "Explore",
        "translation":  "Keşfetmek, araştırmak",
        "sentence":  "I want to explore new ways to monetize my YouTube channel."
    },
    {
        "pos":  "Noun",
        "word":  "Explosion",
        "translation":  "Patlama",
        "sentence":  "The sudden explosion in silver demand surprised the market."
    },
    {
        "pos":  "Adjective / Noun",
        "word":  "Explosive",
        "translation":  "Patlayıcı",
        "sentence":  "Dynamite is a powerful chemical explosive."
    },
    {
        "pos":  "Noun",
        "word":  "Export",
        "translation":  "Verb",
        "sentence":  "İhracat"
    },
    {
        "pos":  "Verb",
        "word":  "Expose",
        "translation":  "Maruz bırakmak, açığa çıkarmak",
        "sentence":  "Don\u0027t expose the raw material samples to direct sunlight."
    },
    {
        "pos":  "Noun",
        "word":  "Exposure",
        "translation":  "Maruz kalma, teşhir",
        "sentence":  "Prolonged exposure to the sun can damage your skin."
    },
    {
        "pos":  "Verb",
        "word":  "Express",
        "translation":  "İfade etmek",
        "sentence":  "I want to express my gratitude to my team for their support."
    },
    {
        "pos":  "Noun",
        "word":  "Expression",
        "translation":  "İfade",
        "sentence":  "\"Cost-down\" is a common expression used in our department."
    },
    {
        "pos":  "Verb",
        "word":  "Extend",
        "translation":  "Uzatmak",
        "sentence":  "We decided to extend the contract with the current supplier."
    },
    {
        "pos":  "Noun",
        "word":  "Extension",
        "translation":  "Uzatma, eklenti, dahili numara",
        "sentence":  "I’ve asked for an extension on the deadline for my essay."
    },
    {
        "pos":  "Adjective",
        "word":  "Extensive",
        "translation":  "Kapsamlı, geniş",
        "sentence":  "The storm caused extensive damage to the local area."
    },
    {
        "pos":  "Adverb",
        "word":  "Extensively",
        "translation":  "Yaygın olarak, kapsamlıca",
        "sentence":  "The new technology has been used extensively in the industry."
    },
    {
        "pos":  "Noun",
        "word":  "Extent",
        "translation":  "Kapsam, derece",
        "sentence":  "To what extent will the new policy affect our sourcing budget?"
    },
    {
        "pos":  "Adjective",
        "word":  "External",
        "translation":  "Dış, harici",
        "sentence":  "We hired an external consultant to review our cost reduction plan."
    },
    {
        "pos":  "Adj.",
        "word":  "Extra",
        "translation":  "N.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Extract",
        "translation":  "Öz / Çıkarmak",
        "sentence":  "Scientists are trying to extract oil from the seeds."
    },
    {
        "pos":  "Adjective",
        "word":  "Extraordinary",
        "translation":  "Olağanüstü",
        "sentence":  "The growth of the firm over the last five years has been extraordinary."
    },
    {
        "pos":  "Adj.",
        "word":  "Extreme",
        "translation":  "Noun",
        "sentence":  "Aşırı, uç"
    },
    {
        "pos":  "Adverb",
        "word":  "Extremely",
        "translation":  "Son derece",
        "sentence":  "The price of palladium has become extremely volatile recently."
    },
    {
        "pos":  "Noun",
        "word":  "Extremist",
        "translation":  "Aşırılıkçı",
        "sentence":  "The group was accused of having extremist political views."
    },
    {
        "pos":  "Noun",
        "word":  "Eye",
        "translation":  "Göz",
        "sentence":  "Keep a close eye on the market trends for gold and silver."
    },
    {
        "pos":  "Noun",
        "word":  "Fabric",
        "translation":  "Kumaş, yapı",
        "sentence":  "This fabric is made of a blend of cotton and silk."
    },
    {
        "pos":  "Adjective",
        "word":  "Fabulous",
        "translation":  "Harika, efsanevi",
        "sentence":  "We had a fabulous time at the party last night."
    },
    {
        "pos":  "Noun",
        "word":  "Face",
        "translation":  "Verb",
        "sentence":  "Yüz"
    },
    {
        "pos":  "Verb",
        "word":  "Facilitate",
        "translation":  "Kolaylaştırmak",
        "sentence":  "The new software is designed to facilitate communication between staff."
    },
    {
        "pos":  "Noun",
        "word":  "Facility",
        "translation":  "Tesis, imkan",
        "sentence":  "The new production facility in İzmir is now fully operational."
    },
    {
        "pos":  "Noun",
        "word":  "Fact",
        "translation":  "Gerçek",
        "sentence":  "It is a fact that alternative sourcing saves our company money."
    },
    {
        "pos":  "Noun",
        "word":  "Faction",
        "translation":  "Fraksiyon, grup",
        "sentence":  "There is a small faction within the party that opposes the new leader."
    },
    {
        "pos":  "Noun",
        "word":  "Factor",
        "translation":  "Faktör",
        "sentence":  "Reliability is a key factor in choosing a new supplier."
    },
    {
        "pos":  "Noun",
        "word":  "Factory",
        "translation":  "Fabrika",
        "sentence":  "I visit the factory every Wednesday to check the material stocks."
    },
    {
        "pos":  "Noun",
        "word":  "Faculty",
        "translation":  "Fakülte, yetenek",
        "sentence":  "She is a member of the medical faculty at the university."
    },
    {
        "pos":  "Verb",
        "word":  "Fade",
        "translation":  "Solmak, sönmek",
        "sentence":  "The color of the curtains began to fade in the sun."
    },
    {
        "pos":  "Verb",
        "word":  "Fail",
        "translation":  "Başarısız olmak, kalmak",
        "sentence":  "We cannot afford to fail in this cost-down project."
    },
    {
        "pos":  "Adjective",
        "word":  "Failed",
        "translation":  "Başarısız",
        "sentence":  "He is a failed businessman who has lost all his money."
    },
    {
        "pos":  "Noun",
        "word":  "Failure",
        "translation":  "Başarısızlık",
        "sentence":  "The failure of the first supplier led us to look for alternatives."
    },
    {
        "pos":  "Adjective",
        "word":  "Fair",
        "translation":  "Adil, dürüst",
        "sentence":  "We want to ensure a fair price for all the raw materials we buy."
    },
    {
        "pos":  "Adverb",
        "word":  "Fairly",
        "translation":  "Oldukça, adilce",
        "sentence":  "The cost of silver is fairly low compared to other precious metals."
    },
    {
        "pos":  "Noun",
        "word":  "Fairness",
        "translation":  "Adalet, hakkaniyet",
        "sentence":  "The decision was made with fairness and transparency in mind."
    },
    {
        "pos":  "Noun",
        "word":  "Faith",
        "translation":  "İnanç, güven",
        "sentence":  "I have full faith in our team\u0027s ability to achieve the targets."
    },
    {
        "pos":  "Adjective",
        "word":  "Fake",
        "translation":  "Sahte",
        "sentence":  "He was caught trying to use a fake passport."
    },
    {
        "pos":  "Verb",
        "word":  "Fall",
        "translation":  "Noun",
        "sentence":  "Düşmek"
    },
    {
        "pos":  "Adjective",
        "word":  "False",
        "translation":  "Yanlış, sahte",
        "sentence":  "The rumors about the company\u0027s bankruptcy were completely false."
    },
    {
        "pos":  "Noun",
        "word":  "Fame",
        "translation":  "Ün, şöhret",
        "sentence":  "She achieved international fame at a very young age."
    },
    {
        "pos":  "Adjective",
        "word":  "Familiar",
        "translation":  "Tanıdık, aşina",
        "sentence":  "I am very familiar with the strategic sourcing terminology."
    },
    {
        "pos":  "Noun",
        "word":  "Family",
        "translation":  "Adj.",
        "sentence":  "Aile"
    },
    {
        "pos":  "Adjective",
        "word":  "Famous",
        "translation":  "Ünlü",
        "sentence":  "This firm is famous for its high-quality raw materials."
    },
    {
        "pos":  "Noun",
        "word":  "Fan",
        "translation":  "Fan, hayran",
        "sentence":  "I am a big fan of Beşiktaş and follow all their matches."
    },
    {
        "pos":  "Adjective",
        "word":  "Fancy",
        "translation":  "Şık, lüks",
        "sentence":  "We don\u0027t need a fancy office; we need an efficient one."
    },
    {
        "pos":  "Adjective",
        "word":  "Fantastic",
        "translation":  "Fantastik, şahane",
        "sentence":  "The initial feedback for the kids\u0027 channel was fantastic."
    },
    {
        "pos":  "Noun",
        "word":  "Fantasy",
        "translation":  "Fantezi, hayal",
        "sentence":  "The book is a work of pure fantasy."
    },
    {
        "pos":  "Adv.",
        "word":  "Far",
        "translation":  "Adj.",
        "sentence":  "Uzak"
    },
    {
        "pos":  "Noun",
        "word":  "Fare",
        "translation":  "Bilet ücreti",
        "sentence":  "How much is the train fare from Izmir to Istanbul?"
    },
    {
        "pos":  "Noun",
        "word":  "Farm",
        "translation":  "Verb",
        "sentence":  "Çiftlik"
    },
    {
        "pos":  "Noun",
        "word":  "Farmer",
        "translation":  "Çiftçi",
        "sentence":  "The local farmer provides us with fresh vegetables for the canteen."
    },
    {
        "pos":  "Noun",
        "word":  "Farming",
        "translation":  "Çiftçilik",
        "sentence":  "Farming is a vital part of the economy in this region."
    },
    {
        "pos":  "Adjective",
        "word":  "Fascinating",
        "translation":  "Büyüleyici",
        "sentence":  "Researching the history of gold is a fascinating task."
    },
    {
        "pos":  "Noun",
        "word":  "Fashion",
        "translation":  "Moda",
        "sentence":  "Tracking celebrity social media helps me understand current fashion."
    },
    {
        "pos":  "Adjective",
        "word":  "Fashionable",
        "translation":  "Modaya uygun",
        "sentence":  "She always wears fashionable clothes to the office meetings."
    },
    {
        "pos":  "Adj.",
        "word":  "Fast",
        "translation":  "Adv.",
        "sentence":  "Hızlı"
    },
    {
        "pos":  "Verb",
        "word":  "Fasten",
        "translation":  "Bağlamak",
        "sentence":  "Please fasten your seatbelt before the plane takes off."
    },
    {
        "pos":  "Adj.",
        "word":  "Fat",
        "translation":  "Noun",
        "sentence":  "Şişman"
    },
    {
        "pos":  "Adjective",
        "word":  "Fatal",
        "translation":  "Ölümcül",
        "sentence":  "The accident proved to be fatal for the driver."
    },
    {
        "pos":  "Noun",
        "word":  "Fate",
        "translation":  "Kader, yazgı",
        "sentence":  "He believes that his fate is already written."
    },
    {
        "pos":  "Noun",
        "word":  "Father",
        "translation":  "Baba",
        "sentence":  "My father gave me some good advice on car financing."
    },
    {
        "pos":  "Noun",
        "word":  "Fault",
        "translation":  "Hata, kusur",
        "sentence":  "The delay was not the supplier\u0027s fault, but a logistics issue."
    },
    {
        "pos":  "Noun",
        "word":  "Favor",
        "translation":  "Verb",
        "sentence":  "İyilik"
    },
    {
        "pos":  "Adjective",
        "word":  "Favorable",
        "translation":  "Elverişli, olumlu",
        "sentence":  "The company received a very favorable report from the auditors."
    },
    {
        "pos":  "Adj.",
        "word":  "Favorite",
        "translation":  "Noun",
        "sentence":  "Favori"
    },
    {
        "pos":  "Noun",
        "word":  "Fear",
        "translation":  "Verb",
        "sentence":  "Korku"
    },
    {
        "pos":  "Noun",
        "word":  "Feat",
        "translation":  "Başarı, ustalık gerektiren iş",
        "sentence":  "Climbing Everest is a remarkable feat of endurance."
    },
    {
        "pos":  "Noun",
        "word":  "Feather",
        "translation":  "Tüy",
        "sentence":  "The bird in the cartoon has bright, colorful feathers."
    },
    {
        "pos":  "Noun",
        "word":  "Feature",
        "translation":  "Verb",
        "sentence":  "Özellik"
    },
    {
        "pos":  "Noun",
        "word":  "February",
        "translation":  "Şubat",
        "sentence":  "I started my German course back in February."
    },
    {
        "pos":  "Adjective",
        "word":  "Federal",
        "translation":  "Federal",
        "sentence":  "The federal government announced new regulations for metal exports."
    },
    {
        "pos":  "Noun",
        "word":  "Fee",
        "translation":  "Ücret",
        "sentence":  "How much is the annual fee for the Akbank investment account?"
    },
    {
        "pos":  "Verb",
        "word":  "Feed",
        "translation":  "Noun",
        "sentence":  "Beslemek"
    },
    {
        "pos":  "Noun",
        "word":  "Feedback",
        "translation":  "Geri bildirim",
        "sentence":  "My boss gave me positive feedback on my cost-down study."
    },
    {
        "pos":  "Verb",
        "word":  "Feel",
        "translation":  "Noun",
        "sentence":  "Hissetmek"
    },
    {
        "pos":  "Noun",
        "word":  "Feeling",
        "translation":  "His, duygu",
        "sentence":  "I have a good feeling about the next Beşiktaş match."
    },
    {
        "pos":  "Adjective",
        "word":  "Fellow",
        "translation":  "Arkadaş, dost",
        "sentence":  "I want to thank my fellow colleagues for their hard work."
    },
    {
        "pos":  "Noun",
        "word":  "Felony",
        "translation":  "Ağır suç",
        "sentence":  "He was charged with a felony and sent to prison."
    },
    {
        "pos":  "Adj.",
        "word":  "Female",
        "translation":  "Noun",
        "sentence":  "Kadın, dişi"
    },
    {
        "pos":  "Adjective / Noun",
        "word":  "Feminist",
        "translation":  "Feminist",
        "sentence":  "She is a well-known feminist writer and activist."
    },
    {
        "pos":  "Noun",
        "word":  "Fence",
        "translation":  "Çit",
        "sentence":  "There is a high wire fence around the perimeter of the warehouse."
    },
    {
        "pos":  "Noun",
        "word":  "Festival",
        "translation":  "Festival",
        "sentence":  "I attended a digital content festival in İzmir last year."
    },
    {
        "pos":  "Noun",
        "word":  "Fever",
        "translation":  "Ateş",
        "sentence":  "He had to stay home because he had a high fever and a cold."
    },
    {
        "pos":  "Det.",
        "word":  "Few",
        "translation":  "Adj.",
        "sentence":  "Az, birkaç"
    },
    {
        "pos":  "Noun",
        "word":  "Fiber",
        "translation":  "Lif, elyaf",
        "sentence":  "Whole grains are a good source of dietary fiber."
    },
    {
        "pos":  "Noun",
        "word":  "Fiction",
        "translation":  "Kurgu",
        "sentence":  "I enjoy reading science fiction novels in my spare time."
    },
    {
        "pos":  "Noun",
        "word":  "Field",
        "translation":  "Alan, saha",
        "sentence":  "Strategic sourcing is a very specialized field of business."
    },
    {
        "pos":  "Adjective",
        "word":  "Fierce",
        "translation":  "Şiddetli, azgın",
        "sentence":  "The two teams are fierce rivals."
    },
    {
        "pos":  "Number",
        "word":  "Fifteen",
        "translation":  "On beş",
        "sentence":  "I have fifteen gram gold pieces in my personal collection."
    },
    {
        "pos":  "Number",
        "word":  "Fifth",
        "translation":  "Beşinci",
        "sentence":  "I am entering my fifth year of service at my current company."
    },
    {
        "pos":  "Number",
        "word":  "Fifty",
        "translation":  "Elli",
        "sentence":  "The cost of the alternative material is fifty dollars per unit."
    },
    {
        "pos":  "Verb",
        "word":  "Fight",
        "translation":  "Noun",
        "sentence":  "Savaşmak, kavga"
    },
    {
        "pos":  "Noun",
        "word":  "Fighting",
        "translation":  "Savaşma, kavga",
        "sentence":  "The fighting in the region has affected the supply of palladium."
    },
    {
        "pos":  "Noun",
        "word":  "Figure",
        "translation":  "Verb",
        "sentence":  "Rakam, şekil"
    },
    {
        "pos":  "Noun",
        "word":  "File",
        "translation":  "Verb",
        "sentence":  "Dosya"
    },
    {
        "pos":  "Verb",
        "word":  "Fill",
        "translation":  "Doldurmak",
        "sentence":  "You need to fill out the evaluation form before Friday."
    },
    {
        "pos":  "Noun",
        "word":  "Film",
        "translation":  "Verb",
        "sentence":  "Film"
    },
    {
        "pos":  "Noun",
        "word":  "Filmmaker",
        "translation":  "Film yapımcısı",
        "sentence":  "He is a famous independent filmmaker from New York."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Filter",
        "translation":  "Filtre / Süzmek",
        "sentence":  "You need to replace the air filter in your car."
    },
    {
        "pos":  "Adj.",
        "word":  "Final",
        "translation":  "Noun",
        "sentence":  "Final, son"
    },
    {
        "pos":  "Adverb",
        "word":  "Finally",
        "translation":  "Sonunda",
        "sentence":  "Finally, I managed to calculate the total weight of my gold."
    },
    {
        "pos":  "Noun",
        "word":  "Finance",
        "translation":  "Verb",
        "sentence":  "Finans"
    },
    {
        "pos":  "Adjective",
        "word":  "Financial",
        "translation":  "Finansal",
        "sentence":  "The firm is in a very strong financial position this year."
    },
    {
        "pos":  "Verb",
        "word":  "Find",
        "translation":  "Bulmak",
        "sentence":  "I hope to find a more reliable supplier for the raw materials."
    },
    {
        "pos":  "Noun",
        "word":  "Finding",
        "translation":  "Bulgu",
        "sentence":  "The findings of the study suggest we should switch to silver."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Fine",
        "translation":  "Para cezası / Para cezası kesmek",
        "sentence":  "He had to pay a fine for illegal parking."
    },
    {
        "pos":  "Adjective",
        "word":  "Fine",
        "translation":  "İyi, ince",
        "sentence":  "The quality of the alternative material is perfectly fine."
    },
    {
        "pos":  "Noun",
        "word":  "Finger",
        "translation":  "Parmak",
        "sentence":  "I accidentally cut my finger while opening the metal sample box."
    },
    {
        "pos":  "Verb",
        "word":  "Finish",
        "translation":  "Noun",
        "sentence":  "Bitirmek"
    },
    {
        "pos":  "Noun",
        "word":  "Fire",
        "translation":  "Verb",
        "sentence":  "Ateş, yangın"
    },
    {
        "pos":  "Noun",
        "word":  "Firearm",
        "translation":  "Ateşli silah",
        "sentence":  "It is illegal to possess a firearm without a license."
    },
    {
        "pos":  "Noun",
        "word":  "Firefighter",
        "translation":  "İtfaiyeci",
        "sentence":  "The firefighter managed to rescue the cat from the tree."
    },
    {
        "pos":  "Noun",
        "word":  "Firework",
        "translation":  "Havai fişek",
        "sentence":  "We watched the fireworks display on New Year\u0027s Eve."
    },
    {
        "pos":  "Adjective",
        "word":  "Firm",
        "translation":  "Sıkı, sert, kararlı",
        "sentence":  "You need to have a firm grip on the handle."
    },
    {
        "pos":  "Noun",
        "word":  "Firm",
        "translation":  "Firma, şirket",
        "sentence":  "We are working with a new firm to source alternative materials."
    },
    {
        "pos":  "Adverb",
        "word":  "Firmly",
        "translation":  "Sıkıca, kararlılıkla",
        "sentence":  "He firmly believes that the government is doing the right thing."
    },
    {
        "pos":  "Det.",
        "word":  "First",
        "translation":  "Adv.",
        "sentence":  "Birinci, ilk"
    },
    {
        "pos":  "Adjective",
        "word":  "Fiscal",
        "translation":  "Mali, parasal",
        "sentence":  "The government\u0027s fiscal year begins in April."
    },
    {
        "pos":  "Noun",
        "word":  "Fish",
        "translation":  "Verb",
        "sentence":  "Balık"
    },
    {
        "pos":  "Noun",
        "word":  "Fishing",
        "translation":  "Balık tutma",
        "sentence":  "Many people enjoy fishing along the coast on Sunday mornings."
    },
    {
        "pos":  "Noun",
        "word":  "Fit",
        "translation":  "Nöbet, kriz, uyum",
        "sentence":  "He had a fit of coughing that lasted for several minutes."
    },
    {
        "pos":  "Verb",
        "word":  "Fit",
        "translation":  "Adj.",
        "sentence":  "Uymak"
    },
    {
        "pos":  "Noun",
        "word":  "Fitness",
        "translation":  "Zindelik, fitness",
        "sentence":  "I joined a fitness center in İzmir to stay healthy and active."
    },
    {
        "pos":  "Number",
        "word":  "Five",
        "translation":  "Beş",
        "sentence":  "My five years at the company have been full of learning."
    },
    {
        "pos":  "Verb",
        "word":  "Fix",
        "translation":  "Noun",
        "sentence":  "Tamir etmek"
    },
    {
        "pos":  "Adjective",
        "word":  "Fixed",
        "translation":  "Sabit",
        "sentence":  "We managed to get a fixed price for the silver for the whole year."
    },
    {
        "pos":  "Noun",
        "word":  "Flag",
        "translation":  "Bayrak",
        "sentence":  "The national flag was flying high in front of the office building."
    },
    {
        "pos":  "Noun",
        "word":  "Flame",
        "translation":  "Alev",
        "sentence":  "Keep all flammable materials away from the open flame."
    },
    {
        "pos":  "Noun",
        "word":  "Flash",
        "translation":  "Verb",
        "sentence":  "Flaş, parıltı"
    },
    {
        "pos":  "Adjective",
        "word":  "Flat",
        "translation":  "Düz, yassı",
        "sentence":  "The land around the factory is very flat and easy to build on."
    },
    {
        "pos":  "Noun",
        "word":  "Flavor",
        "translation":  "Tat, lezzet",
        "sentence":  "This ice cream has a very unusual flavor."
    },
    {
        "pos":  "Noun",
        "word":  "Flaw",
        "translation":  "Kusur, çatlak",
        "sentence":  "There is a small flaw in the diamond that reduces its value."
    },
    {
        "pos":  "Adjective",
        "word":  "Flawed",
        "translation":  "Kusurlu, hatalı",
        "sentence":  "The plan was based on flawed information."
    },
    {
        "pos":  "Verb",
        "word":  "Flee",
        "translation":  "Kaçmak",
        "sentence":  "Thousands of people were forced to flee their homes during the war."
    },
    {
        "pos":  "Noun",
        "word":  "Fleet",
        "translation":  "Filo",
        "sentence":  "The company has a fleet of over a hundred delivery trucks."
    },
    {
        "pos":  "Noun",
        "word":  "Flesh",
        "translation":  "Et, ten",
        "sentence":  "The tiger\u0027s claws tore into the deer\u0027s flesh."
    },
    {
        "pos":  "Noun",
        "word":  "Flexibility",
        "translation":  "Esneklik",
        "sentence":  "The job offers a lot of flexibility in terms of working hours."
    },
    {
        "pos":  "Adjective",
        "word":  "Flexible",
        "translation":  "Esnek",
        "sentence":  "We need a flexible sourcing strategy to adapt to market changes."
    },
    {
        "pos":  "Noun",
        "word":  "Flight",
        "translation":  "Uçuş",
        "sentence":  "My flight to İzmir was canceled due to bad weather."
    },
    {
        "pos":  "Verb",
        "word":  "Float",
        "translation":  "Batmadan yüzmek",
        "sentence":  "Some lighter materials will float on the surface of the water."
    },
    {
        "pos":  "Noun",
        "word":  "Flood",
        "translation":  "Verb",
        "sentence":  "Sel"
    },
    {
        "pos":  "Noun",
        "word":  "Floor",
        "translation":  "Yer, kat",
        "sentence":  "The sourcing department is on the second floor of the building."
    },
    {
        "pos":  "Noun",
        "word":  "Flour",
        "translation":  "Un",
        "sentence":  "We need to buy several bags of flour for the office bakery."
    },
    {
        "pos":  "Verb",
        "word":  "Flourish",
        "translation":  "Gelişmek, serpilmek",
        "sentence":  "The small business began to flourish after the new manager arrived."
    },
    {
        "pos":  "Verb",
        "word":  "Flow",
        "translation":  "Noun",
        "sentence":  "Akmak"
    },
    {
        "pos":  "Noun",
        "word":  "Flower",
        "translation":  "Çiçek",
        "sentence":  "There are many colorful flowers in the park near my house."
    },
    {
        "pos":  "Noun",
        "word":  "Flu",
        "translation":  "Grip",
        "sentence":  "I had to take a week off work because I caught the flu."
    },
    {
        "pos":  "Noun",
        "word":  "Fluid",
        "translation":  "Sıvı",
        "sentence":  "You should drink plenty of fluids when you have a fever."
    },
    {
        "pos":  "Verb",
        "word":  "Fly",
        "translation":  "Noun",
        "sentence":  "Uçmak"
    },
    {
        "pos":  "Noun",
        "word":  "Flying",
        "translation":  "Adj.",
        "sentence":  "Uçuş"
    },
    {
        "pos":  "Verb",
        "word":  "Focus",
        "translation":  "Noun",
        "sentence":  "Odaklanmak"
    },
    {
        "pos":  "Verb",
        "word":  "Fold",
        "translation":  "Noun",
        "sentence":  "Katlamak"
    },
    {
        "pos":  "Adjective",
        "word":  "Folding",
        "translation":  "Katlanabilir",
        "sentence":  "We bought some folding chairs for the office celebration."
    },
    {
        "pos":  "Noun",
        "word":  "Folk",
        "translation":  "Adj.",
        "sentence":  "Halk"
    },
    {
        "pos":  "Verb",
        "word":  "Follow",
        "translation":  "Takip etmek",
        "sentence":  "I follow the silver market trends every single morning."
    },
    {
        "pos":  "Adj.",
        "word":  "Following",
        "translation":  "N.",
        "sentence":  "Prep."
    },
    {
        "pos":  "Adjective",
        "word":  "Fond",
        "translation":  "Düşkün, seven",
        "sentence":  "She is very fond of her little nephew."
    },
    {
        "pos":  "Noun",
        "word":  "Food",
        "translation":  "Yemek",
        "sentence":  "İzmir has a great variety of delicious local food."
    },
    {
        "pos":  "Noun",
        "word":  "Fool",
        "translation":  "Aptal",
        "sentence":  "I felt like a fool when I realized I was at the wrong house."
    },
    {
        "pos":  "Noun",
        "word":  "Foot",
        "translation":  "Ayak",
        "sentence":  "I went to the meeting on foot because it was very close by."
    },
    {
        "pos":  "Noun",
        "word":  "Footage",
        "translation":  "Kamera kaydı, görüntü",
        "sentence":  "The police are examining the CCTV footage of the robbery."
    },
    {
        "pos":  "Noun",
        "word":  "Football",
        "translation":  "Futbol",
        "sentence":  "I enjoy watching football matches, especially when Beşiktaş is playing."
    },
    {
        "pos":  "Preposition",
        "word":  "For",
        "translation":  "İçin",
        "sentence":  "I have been working here for nearly five years."
    },
    {
        "pos":  "Verb",
        "word":  "Forbid",
        "translation":  "Yasaklamak",
        "sentence":  "My parents forbid me to stay out late on school nights."
    },
    {
        "pos":  "Noun",
        "word":  "Force",
        "translation":  "Verb",
        "sentence":  "Güç"
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Forecast",
        "translation":  "Tahmin (etmek)",
        "sentence":  "The weather forecast says it will be sunny tomorrow."
    },
    {
        "pos":  "Adjective",
        "word":  "Foreign",
        "translation":  "Yabancı",
        "sentence":  "Knowing a foreign language like German is a big advantage."
    },
    {
        "pos":  "Noun",
        "word":  "Foreigner",
        "translation":  "Yabancı",
        "sentence":  "He felt like a foreigner in his own country."
    },
    {
        "pos":  "Noun",
        "word":  "Forest",
        "translation":  "Orman",
        "sentence":  "There is a beautiful pine forest on the hills surrounding İzmir."
    },
    {
        "pos":  "Adverb",
        "word":  "Forever",
        "translation":  "Sonsuza dek",
        "sentence":  "I don\u0027t want to stay in this position forever; I want to grow."
    },
    {
        "pos":  "Verb",
        "word":  "Forge",
        "translation":  "Sahtesini yapmak, (ilişki vb.) kurmak",
        "sentence":  "He was caught trying to forge his father\u0027s signature."
    },
    {
        "pos":  "Verb",
        "word":  "Forget",
        "translation":  "Unutmak",
        "sentence":  "Don\u0027t forget to save the latest version of your evaluation note."
    },
    {
        "pos":  "Verb",
        "word":  "Forgive",
        "translation":  "Affetmek",
        "sentence":  "It is important to forgive minor mistakes if the supplier is generally reliable."
    },
    {
        "pos":  "Noun",
        "word":  "Fork",
        "translation":  "Çatal",
        "sentence":  "Please remember to put a fork and a knife on the dinner table."
    },
    {
        "pos":  "Noun",
        "word":  "Form",
        "translation":  "Verb",
        "sentence":  "Form, şekil"
    },
    {
        "pos":  "Adjective",
        "word":  "Formal",
        "translation":  "Resmi",
        "sentence":  "The company anniversary dinner will be a formal event."
    },
    {
        "pos":  "Noun",
        "word":  "Format",
        "translation":  "Format, biçim",
        "sentence":  "The course is available in several different formats."
    },
    {
        "pos":  "Noun",
        "word":  "Formation",
        "translation":  "Oluşum, şekillenme",
        "sentence":  "The clouds began to take on a strange formation."
    },
    {
        "pos":  "Adjective",
        "word":  "Former",
        "translation":  "Önceki, eski",
        "sentence":  "My former manager gave me great advice on strategic sourcing."
    },
    {
        "pos":  "Adverb",
        "word":  "Formerly",
        "translation":  "Eskiden, önceden",
        "sentence":  "The building was formerly a primary school."
    },
    {
        "pos":  "Noun",
        "word":  "Formula",
        "translation":  "Formül",
        "sentence":  "Scientists are trying to find a formula for the new drug."
    },
    {
        "pos":  "Verb",
        "word":  "Formulate",
        "translation":  "Formüle etmek, tasarlamak",
        "sentence":  "The government is trying to formulate a new economic policy."
    },
    {
        "pos":  "Adverb",
        "word":  "Forth",
        "translation":  "İleriye doğru",
        "sentence":  "He walked back and forth while he was waiting for the call."
    },
    {
        "pos":  "Adjective",
        "word":  "Forthcoming",
        "translation":  "Yaklaşan, yakınlardaki",
        "sentence":  "Details of the forthcoming event will be announced soon."
    },
    {
        "pos":  "Adjective",
        "word":  "Fortunate",
        "translation":  "Şanslı",
        "sentence":  "I am very fortunate to have such supportive friends."
    },
    {
        "pos":  "Adverb",
        "word":  "Fortunately",
        "translation":  "Neyse ki, çok şükür",
        "sentence":  "Fortunately, the alternative firm had the raw materials in stock."
    },
    {
        "pos":  "Noun",
        "word":  "Fortune",
        "translation":  "Servet, şans",
        "sentence":  "Some people make a fortune by investing in precious metals at the right time."
    },
    {
        "pos":  "Number",
        "word":  "Forty",
        "translation":  "Kırık",
        "sentence":  "The drive from Sabiha Gökçen to the center of İzmir takes about forty minutes."
    },
    {
        "pos":  "Noun",
        "word":  "Forum",
        "translation":  "Forum, tartışma alanı",
        "sentence":  "The meeting provided a forum for residents to express their concerns."
    },
    {
        "pos":  "Adv.",
        "word":  "Forward",
        "translation":  "Adj.",
        "sentence":  "İleriye doğru"
    },
    {
        "pos":  "Noun",
        "word":  "Fossil",
        "translation":  "Fosil",
        "sentence":  "He found a fossil of a sea creature in the rocks."
    },
    {
        "pos":  "Verb",
        "word":  "Foster",
        "translation":  "Geliştirmek, teşvik etmek, (bakıcı aile olarak) büyütmek",
        "sentence":  "The program aims to foster a sense of community among students."
    },
    {
        "pos":  "Verb",
        "word":  "Found",
        "translation":  "Kurmak (temelini atmak)",
        "sentence":  "The firm was founded twenty years ago in a small office in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Foundation",
        "translation":  "Temel, vakıf",
        "sentence":  "The organization is a non-profit foundation."
    },
    {
        "pos":  "Noun",
        "word":  "Founder",
        "translation":  "Kurucu",
        "sentence":  "He is the founder of a successful tech company."
    },
    {
        "pos":  "Number",
        "word":  "Four",
        "translation":  "Dört",
        "sentence":  "I have completed four successful years in the sourcing department."
    },
    {
        "pos":  "Number",
        "word":  "Fourteen",
        "translation":  "On dört",
        "sentence":  "There are fourteen different items in our new cost-down report."
    },
    {
        "pos":  "Number",
        "word":  "Fourth",
        "translation":  "Dördüncü",
        "sentence":  "My fourth year at the company was the most productive one so far."
    },
    {
        "pos":  "Noun",
        "word":  "Fraction",
        "translation":  "Kesir, küçük parça",
        "sentence":  "The cost was only a fraction of the original price."
    },
    {
        "pos":  "Adjective",
        "word":  "Fragile",
        "translation":  "Hassas, kırılgan",
        "sentence":  "Be careful with that vase; it is very fragile."
    },
    {
        "pos":  "Noun",
        "word":  "Fragment",
        "translation":  "Parça, kırıntı",
        "sentence":  "Police found fragments of glass at the scene of the accident."
    },
    {
        "pos":  "Noun",
        "word":  "Frame",
        "translation":  "Verb",
        "sentence":  "Çerçeve"
    },
    {
        "pos":  "Noun",
        "word":  "Framework",
        "translation":  "Çerçeve, yapı",
        "sentence":  "The agreement provides a framework for future cooperation."
    },
    {
        "pos":  "Noun",
        "word":  "Franchise",
        "translation":  "Franchise, imtiyaz",
        "sentence":  "He owns a local franchise of a famous fast-food chain."
    },
    {
        "pos":  "Adverb",
        "word":  "Frankly",
        "translation":  "Açıkçası",
        "sentence":  "Frankly, I don\u0027t think he is the right person for the job."
    },
    {
        "pos":  "Noun",
        "word":  "Fraud",
        "translation":  "Dolandırıcılık",
        "sentence":  "He was sent to prison for tax fraud."
    },
    {
        "pos":  "Adj.",
        "word":  "Free",
        "translation":  "Adv.",
        "sentence":  "V."
    },
    {
        "pos":  "Noun",
        "word":  "Freedom",
        "translation":  "Özgürlük",
        "sentence":  "Having multiple suppliers gives us the freedom to choose the best price."
    },
    {
        "pos":  "Adverb",
        "word":  "Freely",
        "translation":  "Özgürce, serbestçe",
        "sentence":  "You can move freely within the building."
    },
    {
        "pos":  "Verb",
        "word":  "Freeze",
        "translation":  "Donmak",
        "sentence":  "If the market prices freeze, we can plan our budget more easily."
    },
    {
        "pos":  "Noun",
        "word":  "Frequency",
        "translation":  "Frekans, sıklık",
        "sentence":  "The frequency of flight cancellations has increased recently."
    },
    {
        "pos":  "Adjective",
        "word":  "Frequent",
        "translation":  "Sık, yaygın",
        "sentence":  "He is a frequent visitor to the local library."
    },
    {
        "pos":  "Adverb",
        "word":  "Frequently",
        "translation":  "Sık sık",
        "sentence":  "I frequently check the value of gold and silver on my phone."
    },
    {
        "pos":  "Adjective",
        "word":  "Fresh",
        "translation":  "Taze",
        "sentence":  "You can find fresh fruits and vegetables at the local market in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Freshman",
        "translation":  "Üniversite birinci sınıf öğrencisi",
        "sentence":  "He is a freshman studying engineering at the university."
    },
    {
        "pos":  "Noun",
        "word":  "Friday",
        "translation":  "Cuma",
        "sentence":  "I need to submit the final report by Friday afternoon."
    },
    {
        "pos":  "Noun",
        "word":  "Friend",
        "translation":  "Arkadaş",
        "sentence":  "A friend from work is helping me with the German vocabulary list."
    },
    {
        "pos":  "Adjective",
        "word":  "Friendly",
        "translation":  "Arkadaş canlısı",
        "sentence":  "The staff at the alternative firm were very friendly and helpful."
    },
    {
        "pos":  "Noun",
        "word":  "Friendship",
        "translation":  "Arkadaşlık",
        "sentence":  "Good business relationships often grow into strong friendships."
    },
    {
        "pos":  "Verb",
        "word":  "Frighten",
        "translation":  "Korkutmak",
        "sentence":  "Sudden changes in the stock market can frighten small investors."
    },
    {
        "pos":  "Adjective",
        "word":  "Frightened",
        "translation":  "Korkmuş",
        "sentence":  "He was frightened when he saw the volatility of palladium prices."
    },
    {
        "pos":  "Adjective",
        "word":  "Frightening",
        "translation":  "Korkutucu",
        "sentence":  "The possibility of a global metal crisis is quite frightening."
    },
    {
        "pos":  "Noun",
        "word":  "Frog",
        "translation":  "Kurbağa",
        "sentence":  "There is a funny song about a green frog on the kids\u0027 channel."
    },
    {
        "pos":  "Preposition",
        "word":  "From",
        "translation":  "-den, -dan",
        "sentence":  "I received an email from the strategic sourcing department."
    },
    {
        "pos":  "Noun",
        "word":  "Front",
        "translation":  "Adj.",
        "sentence":  "Ön, ön taraf"
    },
    {
        "pos":  "Adjective",
        "word":  "Frozen",
        "translation":  "Donmuş",
        "sentence":  "We keep some of the raw material samples in a frozen state for testing."
    },
    {
        "pos":  "Noun",
        "word":  "Fruit",
        "translation":  "Meyve",
        "sentence":  "I am learning the German names for thirty different fruits."
    },
    {
        "pos":  "Adjective",
        "word":  "Frustrated",
        "translation":  "Hayal kırıklığına uğramış, hüsran dolu",
        "sentence":  "She felt frustrated because she couldn\u0027t solve the problem."
    },
    {
        "pos":  "Adjective",
        "word":  "Frustrating",
        "translation":  "Sinir bozucu",
        "sentence":  "It is very frustrating when the internet connection is slow."
    },
    {
        "pos":  "Noun",
        "word":  "Frustration",
        "translation":  "Hüsran, sinir bozukluğu",
        "sentence":  "He shouted in frustration when he lost the game."
    },
    {
        "pos":  "Verb",
        "word":  "Fry",
        "translation":  "Yağda kızartmak",
        "sentence":  "It is not very healthy to fry food every single day."
    },
    {
        "pos":  "Noun",
        "word":  "Fuel",
        "translation":  "Verb",
        "sentence":  "Yakıt"
    },
    {
        "pos":  "Verb",
        "word":  "Fulfill",
        "translation":  "Yerine getirmek, tamamlamak",
        "sentence":  "I hope to fulfill all my career goals within the next five years."
    },
    {
        "pos":  "Adjective",
        "word":  "Full",
        "translation":  "Dolu",
        "sentence":  "My schedule is full of meetings with alternative firms this week."
    },
    {
        "pos":  "Adjective / Adverb",
        "word":  "Full-time",
        "translation":  "Tam zamanlı",
        "sentence":  "She works as a full-time nurse at the local hospital."
    },
    {
        "pos":  "Adverb",
        "word":  "Fully",
        "translation":  "Tamamen",
        "sentence":  "I fully support the new cost reduction strategy."
    },
    {
        "pos":  "Noun",
        "word":  "Fun",
        "translation":  "Adj.",
        "sentence":  "Eğlence"
    },
    {
        "pos":  "Noun",
        "word":  "Function",
        "translation":  "Verb",
        "sentence":  "Fonksiyon"
    },
    {
        "pos":  "Adjective",
        "word":  "Functional",
        "translation":  "İşlevsel",
        "sentence":  "The new furniture is both beautiful and functional."
    },
    {
        "pos":  "Noun",
        "word":  "Fund",
        "translation":  "Verb",
        "sentence":  "Fon"
    },
    {
        "pos":  "Adjective",
        "word":  "Fundamental",
        "translation":  "Temel, esas",
        "sentence":  "Quality control is a fundamental part of our sourcing process."
    },
    {
        "pos":  "Adverb",
        "word":  "Fundamentally",
        "translation":  "Esas itibarıyla",
        "sentence":  "The two systems are fundamentally different."
    },
    {
        "pos":  "Noun",
        "word":  "Funding",
        "translation":  "Finansman, fon sağlama",
        "sentence":  "The funding for the new YouTube channel comes from my personal savings."
    },
    {
        "pos":  "Noun",
        "word":  "Fundraising",
        "translation":  "Kaynak oluşturma, bağış toplama",
        "sentence":  "The school is holding a fundraising event for the new library."
    },
    {
        "pos":  "Noun",
        "word":  "Funeral",
        "translation":  "Cenaze",
        "sentence":  "Thousands of people attended the famous singer\u0027s funeral."
    },
    {
        "pos":  "Adjective",
        "word":  "Funny",
        "translation":  "Komik",
        "sentence":  "The children\u0027s songs on the channel are very funny and catchy."
    },
    {
        "pos":  "Noun",
        "word":  "Fur",
        "translation":  "Kürk",
        "sentence":  "The toy bear on the YouTube channel has very soft fur."
    },
    {
        "pos":  "Adjective",
        "word":  "Furious",
        "translation":  "Çok öfkeli",
        "sentence":  "He was furious when he found out that he had been lied to."
    },
    {
        "pos":  "Noun",
        "word":  "Furniture",
        "translation":  "Mobilya",
        "sentence":  "We ordered some new furniture for the sourcing department office."
    },
    {
        "pos":  "Adj.",
        "word":  "Further",
        "translation":  "Adv.",
        "sentence":  "Daha ileri, daha fazla"
    },
    {
        "pos":  "Adverb",
        "word":  "Furthermore",
        "translation":  "Dahası, ayrıca",
        "sentence":  "The price is low; furthermore, the quality is excellent."
    },
    {
        "pos":  "Noun",
        "word":  "Future",
        "translation":  "Adj.",
        "sentence":  "Gelecek"
    },
    {
        "pos":  "Verb",
        "word":  "Gain",
        "translation":  "Noun",
        "sentence":  "Kazanmak"
    },
    {
        "pos":  "Noun",
        "word":  "Gallery",
        "translation":  "Galeri",
        "sentence":  "There is a modern art gallery near the harbor in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Gallon",
        "translation":  "Galon (yaklaşık 3.78 litre)",
        "sentence":  "How much does a gallon of gas cost these days?"
    },
    {
        "pos":  "Noun",
        "word":  "Gambling",
        "translation":  "Kumar",
        "sentence":  "He lost all his savings through gambling."
    },
    {
        "pos":  "Noun",
        "word":  "Game",
        "translation":  "Oyun",
        "sentence":  "I am creating an English vocabulary game for A1 level students."
    },
    {
        "pos":  "Noun",
        "word":  "Gaming",
        "translation":  "Oyun oynama, kumar",
        "sentence":  "The gaming industry has grown tremendously over the last decade."
    },
    {
        "pos":  "Noun",
        "word":  "Gang",
        "translation":  "Çete, grup",
        "sentence":  "A gang of workers started moving the containers to the warehouse."
    },
    {
        "pos":  "Noun",
        "word":  "Gap",
        "translation":  "Boşluk, fark",
        "sentence":  "There is a significant gap between the prices of the two firms."
    },
    {
        "pos":  "Noun",
        "word":  "Garage",
        "translation":  "Garaj",
        "sentence":  "I park my car in the garage to protect it from the rain."
    },
    {
        "pos":  "Noun",
        "word":  "Garbage",
        "translation":  "Çöp",
        "sentence":  "Please make sure to put the office garbage in the correct bins."
    },
    {
        "pos":  "Noun",
        "word":  "Garden",
        "translation":  "Bahçe",
        "sentence":  "I enjoy spending time in my garden in İzmir during the weekends."
    },
    {
        "pos":  "Noun",
        "word":  "Gas",
        "translation":  "Gaz, benzin",
        "sentence":  "The price of natural gas has an impact on our factory costs."
    },
    {
        "pos":  "Noun",
        "word":  "Gate",
        "translation":  "Kapı (büyük)",
        "sentence":  "Meet me at gate 204 at Sabiha Gökçen Airport."
    },
    {
        "pos":  "Verb",
        "word":  "Gather",
        "translation":  "Toplamak, bir araya getirmek",
        "sentence":  "We need to gather all the data for the self-evaluation note."
    },
    {
        "pos":  "Noun",
        "word":  "Gathering",
        "translation":  "Toplanma, toplantı",
        "sentence":  "We had a small family gathering to celebrate his birthday."
    },
    {
        "pos":  "Adjective",
        "word":  "Gay",
        "translation":  "Eşcinsel",
        "sentence":  "He is an active supporter of gay rights movements."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Gaze",
        "translation":  "Gözünü dikip bakma / Dik dik bakmak",
        "sentence":  "She lowered her gaze when he looked at her."
    },
    {
        "pos":  "Noun",
        "word":  "Gear",
        "translation":  "Dişli, vites, ekipman",
        "sentence":  "Make sure you have all the necessary camping gear before you leave."
    },
    {
        "pos":  "Noun",
        "word":  "Gender",
        "translation":  "Cinsiyet",
        "sentence":  "The study looks at the differences in wages between genders."
    },
    {
        "pos":  "Noun",
        "word":  "Gene",
        "translation":  "Gen",
        "sentence":  "Scientists have identified the gene responsible for this condition."
    },
    {
        "pos":  "Adjective",
        "word":  "General",
        "translation":  "Genel",
        "sentence":  "The general consensus is that we need more alternative suppliers."
    },
    {
        "pos":  "Adverb",
        "word":  "Generally",
        "translation":  "Genellikle",
        "sentence":  "I generally start my day by checking the gold market."
    },
    {
        "pos":  "Verb",
        "word":  "Generate",
        "translation":  "Üretmek, oluşturmak",
        "sentence":  "We hope this project will generate a lot of savings for the firm."
    },
    {
        "pos":  "Noun",
        "word":  "Generation",
        "translation":  "Nesil",
        "sentence":  "The new generation of sourcing tools is much more efficient."
    },
    {
        "pos":  "Adjective",
        "word":  "Generic",
        "translation":  "Genel, kapsamlı, markasız",
        "sentence":  "The doctor prescribed a generic version of the drug to save money."
    },
    {
        "pos":  "Adjective",
        "word":  "Generous",
        "translation":  "Cömert",
        "sentence":  "The firm was very generous with the anniversary bonuses this year."
    },
    {
        "pos":  "Adjective",
        "word":  "Genetic",
        "translation":  "Genetik",
        "sentence":  "Some diseases are caused by genetic factors beyond our control."
    },
    {
        "pos":  "Noun",
        "word":  "Genius",
        "translation":  "Deha, dahi",
        "sentence":  "Einstein was a mathematical genius who changed physics."
    },
    {
        "pos":  "Noun",
        "word":  "Genocide",
        "translation":  "Soykırım",
        "sentence":  "The international court is investigating reports of genocide in the region."
    },
    {
        "pos":  "Noun",
        "word":  "Genre",
        "translation":  "Tür (müzik, film vb.)",
        "sentence":  "My favorite genre of music to listen to while working is classical."
    },
    {
        "pos":  "Adjective",
        "word":  "Gentle",
        "translation":  "Nazik, yumuşak",
        "sentence":  "The song on the children\u0027s channel has a gentle melody."
    },
    {
        "pos":  "Noun",
        "word":  "Gentleman",
        "translation":  "Beyefendi",
        "sentence":  "The manager of the alternative firm is a true gentleman."
    },
    {
        "pos":  "Adjective",
        "word":  "Genuine",
        "translation":  "Gerçek, hakiki, samimi",
        "sentence":  "This leather jacket is made of genuine cowhide."
    },
    {
        "pos":  "Adverb",
        "word":  "Genuinely",
        "translation":  "Gerçekten, içtenlikle",
        "sentence":  "I am genuinely sorry for the mistake I made yesterday."
    },
    {
        "pos":  "Noun",
        "word":  "Geography",
        "translation":  "Coğrafya",
        "sentence":  "Understanding the geography of our suppliers helps in logistics planning."
    },
    {
        "pos":  "Noun",
        "word":  "Gesture",
        "translation":  "Jest, hareket",
        "sentence":  "Giving flowers was a kind gesture of appreciation."
    },
    {
        "pos":  "Verb",
        "word":  "Get",
        "translation":  "Almak, elde etmek",
        "sentence":  "I need to get a refund for my canceled flight to İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Ghost",
        "translation":  "Hayalet",
        "sentence":  "There are no ghost stories on my children\u0027s YouTube channel."
    },
    {
        "pos":  "Adj.",
        "word":  "Giant",
        "translation":  "Noun",
        "sentence":  "Dev"
    },
    {
        "pos":  "Noun",
        "word":  "Gift",
        "translation":  "Hediye",
        "sentence":  "I bought a small gift for my colleague\u0027s work anniversary."
    },
    {
        "pos":  "Noun",
        "word":  "Gig",
        "translation":  "Konser, iş (genelde geçici)",
        "sentence":  "The band is playing a gig at a local club tonight."
    },
    {
        "pos":  "Noun",
        "word":  "Girl",
        "translation":  "Kız",
        "sentence":  "The little girl in the video is singing an educational song."
    },
    {
        "pos":  "Noun",
        "word":  "Girlfriend",
        "translation":  "Kız arkadaş",
        "sentence":  "My girlfriend and I are planning a trip to İzmir this summer."
    },
    {
        "pos":  "Verb",
        "word":  "Give",
        "translation":  "Vermek",
        "sentence":  "Can you give me a detailed analysis of the silver market?"
    },
    {
        "pos":  "Adjective",
        "word":  "Glad",
        "translation":  "Memnun",
        "sentence":  "I am glad that I chose the Birevim system for my new car."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Glance",
        "translation":  "Göz atma / Göz atmak",
        "sentence":  "He took a quick glance at his watch to check the time."
    },
    {
        "pos":  "Noun",
        "word":  "Glass",
        "translation":  "Cam, bardak",
        "sentence":  "I\u0027ll have a glass of water before we start the meeting."
    },
    {
        "pos":  "Noun",
        "word":  "Glimpse",
        "translation":  "Anlık bakış, kısa görüntü",
        "sentence":  "I managed to catch a glimpse of the celebrity through the crowd."
    },
    {
        "pos":  "Adjective",
        "word":  "Global",
        "translation":  "Küresel",
        "sentence":  "Global demand for palladium is expected to rise next year."
    },
    {
        "pos":  "Noun",
        "word":  "Globalization",
        "translation":  "Küreselleşme",
        "sentence":  "Globalization has led to increased trade between distant nations."
    },
    {
        "pos":  "Noun",
        "word":  "Globe",
        "translation":  "Küre, dünya",
        "sentence":  "We have offices in every major city across the globe."
    },
    {
        "pos":  "Adjective",
        "word":  "Glorious",
        "translation":  "Görkemli, parlak",
        "sentence":  "We enjoyed the glorious sunshine at the beach all afternoon."
    },
    {
        "pos":  "Noun",
        "word":  "Glory",
        "translation":  "Şan, şeref, görkem",
        "sentence":  "The athlete brought glory to his country by winning the gold medal."
    },
    {
        "pos":  "Noun",
        "word":  "Glove",
        "translation":  "Eldiven",
        "sentence":  "You must wear protective gloves when handling raw materials."
    },
    {
        "pos":  "Verb",
        "word":  "Go",
        "translation":  "Noun",
        "sentence":  "Gitmek"
    },
    {
        "pos":  "Noun",
        "word":  "Goal",
        "translation":  "Hedef",
        "sentence":  "My main goal is to achieve a 5% cost reduction this quarter."
    },
    {
        "pos":  "Noun",
        "word":  "God",
        "translation":  "Tanrı",
        "sentence":  "Thank God, the flight was rescheduled for the next morning."
    },
    {
        "pos":  "Noun",
        "word":  "Gold",
        "translation":  "Adj.",
        "sentence":  "Altın"
    },
    {
        "pos":  "Adjective",
        "word":  "Golden",
        "translation":  "Altın, altından yapılmış",
        "sentence":  "This is a golden opportunity to improve your career."
    },
    {
        "pos":  "Noun",
        "word":  "Golf",
        "translation":  "Golf",
        "sentence":  "Some executives enjoy playing golf during business trips."
    },
    {
        "pos":  "Adjective",
        "word":  "Good",
        "translation":  "Noun",
        "sentence":  "İyi"
    },
    {
        "pos":  "Exclam.",
        "word":  "Goodbye",
        "translation":  "Noun",
        "sentence":  "Hoşça kal"
    },
    {
        "pos":  "Noun",
        "word":  "Goodness",
        "translation":  "İyilik, erdem",
        "sentence":  "She believes in the natural goodness of human beings."
    },
    {
        "pos":  "Noun",
        "word":  "Goods",
        "translation":  "Mallar, eşyalar",
        "sentence":  "We are responsible for the strategic sourcing of all raw goods."
    },
    {
        "pos":  "Adjective",
        "word":  "Gorgeous",
        "translation":  "Muhteşem, çok güzel",
        "sentence":  "You look gorgeous in that blue silk dress."
    },
    {
        "pos":  "Verb",
        "word":  "Govern",
        "translation":  "Yönetmek",
        "sentence":  "Strict rules govern the way we handle international contracts."
    },
    {
        "pos":  "Noun",
        "word":  "Governance",
        "translation":  "Yönetim, yönetişim",
        "sentence":  "The company is improving its corporate governance policies."
    },
    {
        "pos":  "Noun",
        "word":  "Government",
        "translation":  "Hükümet",
        "sentence":  "The government is planning new tax regulations for precious metals."
    },
    {
        "pos":  "Noun",
        "word":  "Governor",
        "translation":  "Vali, yönetici",
        "sentence":  "The governor of İzmir visited our factory last month."
    },
    {
        "pos":  "Verb",
        "word":  "Grab",
        "translation":  "Yakalamak, kapmak",
        "sentence":  "Let\u0027s grab a quick coffee before the sourcing meeting starts."
    },
    {
        "pos":  "Noun",
        "word":  "Grace",
        "translation":  "Zarafet, incelik",
        "sentence":  "She moved across the stage with the grace of a professional dancer."
    },
    {
        "pos":  "Noun",
        "word":  "Grade",
        "translation":  "Verb",
        "sentence":  "Derece, not"
    },
    {
        "pos":  "Adverb",
        "word":  "Gradually",
        "translation":  "Kademeli olarak",
        "sentence":  "We will gradually increase the amount of alternative materials."
    },
    {
        "pos":  "Noun",
        "word":  "Graduate",
        "translation":  "Verb",
        "sentence":  "Mezun"
    },
    {
        "pos":  "Noun",
        "word":  "Grain",
        "translation":  "Tahıl, tanecik",
        "sentence":  "The texture of the raw material feels like fine grains of sand."
    },
    {
        "pos":  "Adjective",
        "word":  "Grand",
        "translation":  "Görkemli, büyük",
        "sentence":  "The company has grand plans for expansion in the next five years."
    },
    {
        "pos":  "Noun",
        "word":  "Grandfather",
        "translation":  "Büyükbaba",
        "sentence":  "My grandfather always told me that gold is the safest investment."
    },
    {
        "pos":  "Noun",
        "word":  "Grandmother",
        "translation":  "Büyükanne",
        "sentence":  "My grandmother lives in a quiet village near İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Grandparent",
        "translation":  "Büyükanne",
        "sentence":  "baba"
    },
    {
        "pos":  "Verb",
        "word":  "Grant",
        "translation":  "Noun",
        "sentence":  "Vermek, hibe etmek"
    },
    {
        "pos":  "Adjective",
        "word":  "Graphic",
        "translation":  "Grafik, görsel, canlı (detaylı)",
        "sentence":  "The report contains graphic descriptions of the accident scene."
    },
    {
        "pos":  "Noun",
        "word":  "Graphics",
        "translation":  "Grafikler, görsel sanatlar",
        "sentence":  "The new video game has stunning high-definition graphics."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Grasp",
        "translation":  "Kavramak, anlamak",
        "sentence":  "It took me a while to grasp the complexity of the situation."
    },
    {
        "pos":  "Noun",
        "word":  "Grass",
        "translation":  "Çim",
        "sentence":  "The kids in the video are playing on the green grass."
    },
    {
        "pos":  "Adjective",
        "word":  "Grateful",
        "translation":  "Minnettar",
        "sentence":  "I am grateful for the opportunities I\u0027ve had at this firm."
    },
    {
        "pos":  "Noun",
        "word":  "Grave",
        "translation":  "Mezar",
        "sentence":  "They laid flowers on their grandfather\u0027s grave."
    },
    {
        "pos":  "Adjective",
        "word":  "Grave",
        "translation":  "Ciddi, vahim",
        "sentence":  "The economy is in a grave situation due to the rising debt."
    },
    {
        "pos":  "Noun",
        "word":  "Gravity",
        "translation":  "Yerçekimi, ciddiyet",
        "sentence":  "I don\u0027t think you understand the gravity of the problem."
    },
    {
        "pos":  "Adj.",
        "word":  "Gray",
        "translation":  "Noun",
        "sentence":  "Gri"
    },
    {
        "pos":  "Adjective",
        "word":  "Great",
        "translation":  "Harika",
        "sentence":  "You have done a great job managing the alternative firms."
    },
    {
        "pos":  "Adverb",
        "word":  "Greatly",
        "translation":  "Büyük ölçüde",
        "sentence":  "The new law will greatly affect small business owners."
    },
    {
        "pos":  "Adj.",
        "word":  "Green",
        "translation":  "Noun",
        "sentence":  "Yeşil"
    },
    {
        "pos":  "Noun",
        "word":  "Greenhouse",
        "translation":  "Sera",
        "sentence":  "The greenhouse effect is a major contributor to global warming."
    },
    {
        "pos":  "Verb",
        "word":  "Greet",
        "translation":  "Selamlamak",
        "sentence":  "It is important to greet our suppliers warmly during meetings."
    },
    {
        "pos":  "Noun",
        "word":  "Grid",
        "translation":  "Izgara, şebeke",
        "sentence":  "The city\u0027s power grid failed during the heavy storm."
    },
    {
        "pos":  "Noun",
        "word":  "Grief",
        "translation":  "Keder, derin üzüntü",
        "sentence":  "She was overcome with grief after the loss of her pet."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Grin",
        "translation":  "Sırıtmak / Sırıtış",
        "sentence":  "He had a wide grin on his face when he heard the news."
    },
    {
        "pos":  "Verb",
        "word":  "Grind",
        "translation":  "Öğütmek, gıcırdatmak",
        "sentence":  "You need to grind the coffee beans before making the coffee."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Grip",
        "translation":  "Kavrama, tutuş / Kavramak",
        "sentence":  "Keep a firm grip on the rope so you don\u0027t fall."
    },
    {
        "pos":  "Noun",
        "word":  "Grocery",
        "translation":  "Bakkal, market",
        "sentence":  "I need to stop at the grocery store on my way home to İzmir."
    },
    {
        "pos":  "Adjective",
        "word":  "Gross",
        "translation":  "Brüt, iğrenç",
        "sentence":  "The company\u0027s gross profit increased by ten percent this year."
    },
    {
        "pos":  "Noun",
        "word":  "Ground",
        "translation":  "Yer, zemin",
        "sentence":  "The ground was still wet after the heavy rain at the factory."
    },
    {
        "pos":  "Noun",
        "word":  "Group",
        "translation":  "Grup",
        "sentence":  "I am part of a group that analyzes football betting options."
    },
    {
        "pos":  "Verb",
        "word":  "Grow",
        "translation":  "Büyümek, yetişmek",
        "sentence":  "We expect our savings to grow significantly this year."
    },
    {
        "pos":  "Noun",
        "word":  "Growth",
        "translation":  "Büyüme",
        "sentence":  "The growth of the silver market has been very impressive lately."
    },
    {
        "pos":  "Verb",
        "word":  "Guarantee",
        "translation":  "Noun",
        "sentence":  "Garanti etmek"
    },
    {
        "pos":  "Noun",
        "word":  "Guard",
        "translation":  "Verb",
        "sentence":  "Koruma, nöbetçi"
    },
    {
        "pos":  "Noun",
        "word":  "Guerrilla",
        "translation":  "Gerilla",
        "sentence":  "The army is fighting against guerrilla forces in the mountains."
    },
    {
        "pos":  "Verb",
        "word":  "Guess",
        "translation":  "Noun",
        "sentence":  "Tahmin etmek"
    },
    {
        "pos":  "Noun",
        "word":  "Guest",
        "translation":  "Misafir",
        "sentence":  "We are expecting a guest from a German alternative firm tomorrow."
    },
    {
        "pos":  "Noun",
        "word":  "Guidance",
        "translation":  "Rehberlik, yol gösterme",
        "sentence":  "Students can seek guidance from the school counselor."
    },
    {
        "pos":  "Noun",
        "word":  "Guide",
        "translation":  "Verb",
        "sentence":  "Rehber"
    },
    {
        "pos":  "Noun",
        "word":  "Guideline",
        "translation":  "Kılavuz, yönerge",
        "sentence":  "The government issued new guidelines for healthy eating."
    },
    {
        "pos":  "Noun",
        "word":  "Guilt",
        "translation":  "Suçluluk",
        "sentence":  "He suffered from feelings of guilt after lying to his friend."
    },
    {
        "pos":  "Adjective",
        "word":  "Guilty",
        "translation":  "Suçlu",
        "sentence":  "He felt guilty for missing the deadline for the cost-down report."
    },
    {
        "pos":  "Noun",
        "word":  "Guitar",
        "translation":  "Gitar",
        "sentence":  "I want to include some guitar music in the children\u0027s songs."
    },
    {
        "pos":  "Noun",
        "word":  "Gun",
        "translation":  "Tabanca, silah",
        "sentence":  "Security measures are very strict; no guns are allowed in the factory."
    },
    {
        "pos":  "Noun",
        "word":  "Gut",
        "translation":  "Bağırsak, içgüdü",
        "sentence":  "I had a gut feeling that something was wrong."
    },
    {
        "pos":  "Noun",
        "word":  "Guy",
        "translation":  "Adam, tip",
        "sentence":  "That guy from the logistics department is very helpful."
    },
    {
        "pos":  "Noun",
        "word":  "Gym",
        "translation":  "Spor salonu",
        "sentence":  "I go to the gym in İzmir three times a week to stay fit."
    },
    {
        "pos":  "Noun",
        "word":  "Habit",
        "translation":  "Alışkanlık",
        "sentence":  "Checking the palladium price every morning has become a habit."
    },
    {
        "pos":  "Noun",
        "word":  "Habitat",
        "translation":  "Doğal ortam, yaşam alanı",
        "sentence":  "The forest is the natural habitat of many rare bird species."
    },
    {
        "pos":  "Verb",
        "word":  "Hail",
        "translation":  "Dolu yağması, (birini) övmek",
        "sentence":  "The new movie was hailed as a masterpiece by critics."
    },
    {
        "pos":  "Noun",
        "word":  "Hair",
        "translation":  "Saç",
        "sentence":  "She has long, dark hair and always looks professional."
    },
    {
        "pos":  "N.",
        "word":  "Half",
        "translation":  "Det.",
        "sentence":  "Pron."
    },
    {
        "pos":  "Adverb",
        "word":  "Halfway",
        "translation":  "Yarı yolda",
        "sentence":  "We are halfway through the project and everything is on track."
    },
    {
        "pos":  "Noun",
        "word":  "Hall",
        "translation":  "Hol, salon",
        "sentence":  "The meeting will take place in the large hall on the ground floor."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Halt",
        "translation":  "Durdurmak / Durma",
        "sentence":  "Production came to a halt due to a technical failure."
    },
    {
        "pos":  "Noun",
        "word":  "Hand",
        "translation":  "Verb",
        "sentence":  "El"
    },
    {
        "pos":  "Noun",
        "word":  "Handful",
        "translation":  "Avuç dolusu, az miktar",
        "sentence":  "Only a handful of people turned up for the meeting."
    },
    {
        "pos":  "Verb",
        "word":  "Handle",
        "translation":  "Noun",
        "sentence":  "Ele almak, yönetmek"
    },
    {
        "pos":  "Noun",
        "word":  "Handling",
        "translation":  "Taşıma, ele alma, idare etme",
        "sentence":  "The safe handling of toxic chemicals is extremely important."
    },
    {
        "pos":  "Adjective",
        "word":  "Handy",
        "translation":  "Kullanışlı, el altında",
        "sentence":  "This tool is very handy for fixing small things around the house."
    },
    {
        "pos":  "Verb",
        "word":  "Hang",
        "translation":  "Asmak",
        "sentence":  "You can hang your coat on the rack near the office door."
    },
    {
        "pos":  "Verb",
        "word":  "Happen",
        "translation":  "Olmak, meydana gelmek",
        "sentence":  "What will happen to the silver prices if the demand decreases?"
    },
    {
        "pos":  "Adverb",
        "word":  "Happily",
        "translation":  "Mutlulukla",
        "sentence":  "The children in the YouTube video are singing happily."
    },
    {
        "pos":  "Noun",
        "word":  "Happiness",
        "translation":  "Mutluluk",
        "sentence":  "Seeing the success of the cost-down project gives me great happiness."
    },
    {
        "pos":  "Adjective",
        "word":  "Happy",
        "translation":  "Mutlu",
        "sentence":  "I am happy to be entering my fifth year at this company."
    },
    {
        "pos":  "Noun",
        "word":  "Harassment",
        "translation":  "Taciz",
        "sentence":  "The company has a zero-tolerance policy towards sexual harassment."
    },
    {
        "pos":  "Noun",
        "word":  "Harbor",
        "translation":  "Liman",
        "sentence":  "The ships waited in the harbor for the storm to pass."
    },
    {
        "pos":  "Adj.",
        "word":  "Hard",
        "translation":  "Adv.",
        "sentence":  "Zor, sert"
    },
    {
        "pos":  "Adverb",
        "word":  "Hardly",
        "translation":  "Zar zor, neredeyse hiç",
        "sentence":  "I hardly had time to eat lunch because of the sourcing meeting."
    },
    {
        "pos":  "Noun",
        "word":  "Hardware",
        "translation":  "Donanım",
        "sentence":  "You need to upgrade your computer\u0027s hardware to run this program."
    },
    {
        "pos":  "Noun",
        "word":  "Harm",
        "translation":  "Verb",
        "sentence":  "Zarar"
    },
    {
        "pos":  "Adjective",
        "word":  "Harmful",
        "translation":  "Zararlı",
        "sentence":  "Some alternative materials can be harmful to the environment."
    },
    {
        "pos":  "Noun",
        "word":  "Harmony",
        "translation":  "Uyum, harmoni",
        "sentence":  "The two nations are working together in perfect harmony."
    },
    {
        "pos":  "Adjective",
        "word":  "Harsh",
        "translation":  "Sert, kaba, acımasız",
        "sentence":  "The critic was very harsh in his review of the new play."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Harvest",
        "translation":  "Hasat / Hasat etmek",
        "sentence":  "Farmers are preparing for the wheat harvest next month."
    },
    {
        "pos":  "Noun",
        "word":  "Hat",
        "translation":  "Şapka",
        "sentence":  "Don\u0027t forget to wear your hard hat when you visit the factory."
    },
    {
        "pos":  "Verb",
        "word":  "Hate",
        "translation":  "Noun",
        "sentence":  "Nefret etmek"
    },
    {
        "pos":  "Noun",
        "word":  "Hatred",
        "translation":  "Nefret",
        "sentence":  "Racial hatred has no place in a modern society."
    },
    {
        "pos":  "Verb",
        "word":  "Haunt",
        "translation":  "Dadanan (hayalet vb.), akıldan çıkmamak",
        "sentence":  "Memories of the war continued to haunt him for years."
    },
    {
        "pos":  "Verb",
        "word":  "Have",
        "translation":  "Sahip olmak",
        "sentence":  "Do you have all the necessary data for the anniversary note?"
    },
    {
        "pos":  "Modal Verb",
        "word":  "Have to",
        "translation":  "Zorunda olmak",
        "sentence":  "I have to complete the cost-down study by tomorrow morning."
    },
    {
        "pos":  "Noun",
        "word":  "Hazard",
        "translation":  "Tehlike, risk",
        "sentence":  "Ice on the roads is a major hazard for drivers in winter."
    },
    {
        "pos":  "Pronoun",
        "word":  "He",
        "translation":  "O (erkek)",
        "sentence":  "He is the expert who will help us with the palladium investment."
    },
    {
        "pos":  "Noun",
        "word":  "Head",
        "translation":  "Verb",
        "sentence":  "Kafa, başkan"
    },
    {
        "pos":  "Noun",
        "word":  "Headache",
        "translation":  "Baş ağrısı",
        "sentence":  "The complex silver calculations gave me a bit of a headache."
    },
    {
        "pos":  "Noun",
        "word":  "Headline",
        "translation":  "Manşet",
        "sentence":  "The headline in the financial news was about rising gold prices."
    },
    {
        "pos":  "Noun",
        "word":  "Headquarters",
        "translation":  "Genel merkez",
        "sentence":  "The company\u0027s headquarters are located in New York City."
    },
    {
        "pos":  "Verb",
        "word":  "Heal",
        "translation":  "İyileşmek",
        "sentence":  "The wound will take a few weeks to heal completely."
    },
    {
        "pos":  "Noun",
        "word":  "Health",
        "translation":  "Sağlık",
        "sentence":  "My health is my priority, so I try to exercise regularly in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Healthcare",
        "translation":  "Sağlık hizmetleri",
        "sentence":  "The government is planning to invest more money in healthcare."
    },
    {
        "pos":  "Adjective",
        "word":  "Healthy",
        "translation":  "Sağlıklı",
        "sentence":  "Choosing healthy snacks helps me stay focused during work hours."
    },
    {
        "pos":  "Verb",
        "word":  "Hear",
        "translation":  "Duymak",
        "sentence":  "Did you hear about the new alternative firm in Germany?"
    },
    {
        "pos":  "Noun",
        "word":  "Hearing",
        "translation":  "İşitme, duruşma",
        "sentence":  "The hearing for the flight compensation claim is next month."
    },
    {
        "pos":  "Noun",
        "word":  "Heart",
        "translation":  "Kalp",
        "sentence":  "You should put your heart into everything you do at work."
    },
    {
        "pos":  "Noun",
        "word":  "Heat",
        "translation":  "Verb",
        "sentence":  "Isı"
    },
    {
        "pos":  "Noun",
        "word":  "Heating",
        "translation":  "Isıtma",
        "sentence":  "We need to upgrade the heating system in the warehouse."
    },
    {
        "pos":  "Noun",
        "word":  "Heaven",
        "translation":  "Cennet",
        "sentence":  "After a long week at the office, a weekend in İzmir is like heaven."
    },
    {
        "pos":  "Adverb",
        "word":  "Heavily",
        "translation":  "Ağır bir şekilde",
        "sentence":  "Our production depends heavily on a steady supply of silver."
    },
    {
        "pos":  "Adjective",
        "word":  "Heavy",
        "translation":  "Ağır",
        "sentence":  "Be careful; this container of raw material is very heavy."
    },
    {
        "pos":  "Noun",
        "word":  "Heel",
        "translation":  "Topuk",
        "sentence":  "I need to get the heel of my shoe repaired at a shop in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Height",
        "translation":  "Yükseklik",
        "sentence":  "What is the maximum height for the storage racks in the warehouse?"
    },
    {
        "pos":  "Verb",
        "word":  "Heighten",
        "translation":  "Artırmak, yükseltmek",
        "sentence":  "The recent attacks have heightened security concerns in the city."
    },
    {
        "pos":  "Noun",
        "word":  "Helicopter",
        "translation":  "Helikopter",
        "sentence":  "The helicopter flew over the factory to take aerial photos."
    },
    {
        "pos":  "Noun",
        "word":  "Hell",
        "translation":  "Cehennem",
        "sentence":  "The traffic in Istanbul during rush hour can be absolute hell."
    },
    {
        "pos":  "Exclam.",
        "word":  "Hello",
        "translation":  "Noun",
        "sentence":  "Merhaba"
    },
    {
        "pos":  "Noun",
        "word":  "Helmet",
        "translation":  "Kask, kask takmak",
        "sentence":  "You should always wear a helmet when riding a motorcycle."
    },
    {
        "pos":  "Verb",
        "word":  "Help",
        "translation":  "Noun",
        "sentence":  "Yardım etmek"
    },
    {
        "pos":  "Adjective",
        "word":  "Helpful",
        "translation":  "Yardımcı, faydalı",
        "sentence":  "The feedback from my manager was very helpful for my review."
    },
    {
        "pos":  "Adverb",
        "word":  "Hence",
        "translation":  "Bu nedenle, bundan dolayı",
        "sentence":  "He is only seventeen, hence his inability to vote in the election."
    },
    {
        "pos":  "Pron.",
        "word":  "Her",
        "translation":  "Det.",
        "sentence":  "Ona"
    },
    {
        "pos":  "Noun",
        "word":  "Herb",
        "translation":  "Ot, bitki (genelde şifalı veya baharat)",
        "sentence":  "She grows fresh herbs like basil and parsley in her garden."
    },
    {
        "pos":  "Adverb",
        "word":  "Here",
        "translation":  "Burada",
        "sentence":  "I have been working here for almost five years now."
    },
    {
        "pos":  "Noun",
        "word":  "Heritage",
        "translation":  "Miras (kültürel)",
        "sentence":  "We must protect our national heritage for future generations."
    },
    {
        "pos":  "Noun",
        "word":  "Hero",
        "translation":  "Kahraman",
        "sentence":  "Every child needs a hero, even if it\u0027s a character in a song."
    },
    {
        "pos":  "Pronoun",
        "word":  "Hers",
        "translation":  "Onunki (dişi)",
        "sentence":  "The report on the desk is hers, not mine."
    },
    {
        "pos":  "Pronoun",
        "word":  "Herself",
        "translation":  "Kendisi (dişi)",
        "sentence":  "She managed the entire cost-down project by herself."
    },
    {
        "pos":  "Verb",
        "word":  "Hesitate",
        "translation":  "Tereddüt etmek",
        "sentence":  "Don\u0027t hesitate to ask if you have questions about the gold weight."
    },
    {
        "pos":  "Exclamation",
        "word":  "Hey",
        "translation":  "Hey",
        "sentence":  "Hey, did you see the latest price of palladium on Akbank?"
    },
    {
        "pos":  "Exclamation",
        "word":  "Hi",
        "translation":  "Selam",
        "sentence":  "Hi, are you ready to discuss the car financing options?"
    },
    {
        "pos":  "Adjective",
        "word":  "Hidden",
        "translation":  "Gizli",
        "sentence":  "There were hidden cameras installed in the office."
    },
    {
        "pos":  "Verb",
        "word":  "Hide",
        "translation":  "Saklamak",
        "sentence":  "We shouldn\u0027t hide the truth about the supply chain problems."
    },
    {
        "pos":  "Noun",
        "word":  "Hierarchy",
        "translation":  "Hiyerarşi",
        "sentence":  "There is a clear hierarchy within the military."
    },
    {
        "pos":  "Adj.",
        "word":  "High",
        "translation":  "Adv.",
        "sentence":  "N."
    },
    {
        "pos":  "Adjective",
        "word":  "High-profile",
        "translation":  "Göz önünde olan, dikkat çeken",
        "sentence":  "The case involved several high-profile politicians."
    },
    {
        "pos":  "Verb",
        "word":  "Highlight",
        "translation":  "Noun",
        "sentence":  "Vurgulamak"
    },
    {
        "pos":  "Adverb",
        "word":  "Highly",
        "translation":  "Son derece",
        "sentence":  "My manager is highly satisfied with my work performance."
    },
    {
        "pos":  "Noun",
        "word":  "Highway",
        "translation":  "Otoyol",
        "sentence":  "The highway between Istanbul and İzmir is very convenient."
    },
    {
        "pos":  "Adjective",
        "word":  "Hilarious",
        "translation":  "Çok komik",
        "sentence":  "He told a hilarious story that made everyone laugh."
    },
    {
        "pos":  "Noun",
        "word":  "Hill",
        "translation":  "Tepe",
        "sentence":  "Our house in İzmir is located on a small hill with a sea view."
    },
    {
        "pos":  "Pronoun",
        "word":  "Him",
        "translation":  "Ona (erkek)",
        "sentence":  "I will send him the details of the palladium investment."
    },
    {
        "pos":  "Pronoun",
        "word":  "Himself",
        "translation":  "Kendisi (erkek)",
        "sentence":  "He himself checked the accuracy of the silver market data."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Hint",
        "translation":  "İpucu / İma etmek",
        "sentence":  "He gave me a hint about what my birthday present might be."
    },
    {
        "pos":  "Noun",
        "word":  "Hip",
        "translation":  "Kalça",
        "sentence":  "She fell and broke her hip while she was ice skating."
    },
    {
        "pos":  "Verb",
        "word":  "Hire",
        "translation":  "Noun",
        "sentence":  "İşe almak"
    },
    {
        "pos":  "Det.",
        "word":  "His",
        "translation":  "Pron.",
        "sentence":  "Onun"
    },
    {
        "pos":  "Noun",
        "word":  "Historian",
        "translation":  "Tarihçi",
        "sentence":  "The historian spent years researching the causes of the war."
    },
    {
        "pos":  "Adjective",
        "word":  "Historic",
        "translation":  "Tarihi (önemli)",
        "sentence":  "Entering my fifth year at the firm is a historic moment for me."
    },
    {
        "pos":  "Adjective",
        "word":  "Historical",
        "translation":  "Tarihsel",
        "sentence":  "We looked at the historical price trends of gold and silver."
    },
    {
        "pos":  "Noun",
        "word":  "History",
        "translation":  "Tarih",
        "sentence":  "The history of our company is full of successful projects."
    },
    {
        "pos":  "Verb",
        "word":  "Hit",
        "translation":  "Noun",
        "sentence":  "Vurmak"
    },
    {
        "pos":  "Noun",
        "word":  "Hobby",
        "translation":  "Hobi",
        "sentence":  "Investing in precious metals is more than just a hobby for me."
    },
    {
        "pos":  "Noun",
        "word":  "Hockey",
        "translation":  "Hokey",
        "sentence":  "Ice hockey is not as popular in Turkey as football is."
    },
    {
        "pos":  "Verb",
        "word":  "Hold",
        "translation":  "Noun",
        "sentence":  "Tutmak"
    },
    {
        "pos":  "Noun",
        "word":  "Hole",
        "translation":  "Delik",
        "sentence":  "I found a small hole in one of the raw material bags."
    },
    {
        "pos":  "Noun",
        "word":  "Holiday",
        "translation":  "Tatil",
        "sentence":  "I am looking forward to my summer holiday in İzmir."
    },
    {
        "pos":  "Adjective",
        "word":  "Hollow",
        "translation":  "Kovuk, boş",
        "sentence":  "The metal tube is hollow, which makes it much lighter."
    },
    {
        "pos":  "Adjective",
        "word":  "Holy",
        "translation":  "Kutsal",
        "sentence":  "We should treat our professional ethics as something holy."
    },
    {
        "pos":  "N.",
        "word":  "Home",
        "translation":  "Adv.",
        "sentence":  "Adj."
    },
    {
        "pos":  "Noun",
        "word":  "Homeland",
        "translation":  "Vatan, anavatan",
        "sentence":  "After twenty years abroad, he finally returned to his homeland."
    },
    {
        "pos":  "Adjective",
        "word":  "Homeless",
        "translation":  "Evsiz",
        "sentence":  "The charity provides food and shelter for homeless people."
    },
    {
        "pos":  "Noun",
        "word":  "Homework",
        "translation":  "Ödev",
        "sentence":  "Learning these English words is like doing my homework."
    },
    {
        "pos":  "Adjective",
        "word":  "Honest",
        "translation":  "Dürüst",
        "sentence":  "To be honest, the Birevim system seems like a good choice for you."
    },
    {
        "pos":  "Noun",
        "word":  "Honesty",
        "translation":  "Dürüstlük",
        "sentence":  "I appreciate your honesty in telling me the truth."
    },
    {
        "pos":  "Noun",
        "word":  "Honey",
        "translation":  "Bal",
        "sentence":  "I like to add a little honey to my tea instead of sugar."
    },
    {
        "pos":  "Noun",
        "word":  "Honor",
        "translation":  "Verb",
        "sentence":  "Onur"
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Hook",
        "translation":  "Kanca / Çengellemek",
        "sentence":  "He hung his coat on the hook behind the door."
    },
    {
        "pos":  "Verb",
        "word":  "Hope",
        "translation":  "Noun",
        "sentence":  "Umut etmek"
    },
    {
        "pos":  "Adjective",
        "word":  "Hopeful",
        "translation":  "Umutlu",
        "sentence":  "I am hopeful that we will reach an agreement soon."
    },
    {
        "pos":  "Adverb",
        "word":  "Hopefully",
        "translation":  "Umarım, inşallah",
        "sentence":  "Hopefully, the weather will be nice for our picnic tomorrow."
    },
    {
        "pos":  "Noun",
        "word":  "Horizon",
        "translation":  "Ufuk",
        "sentence":  "The sun began to sink slowly below the horizon."
    },
    {
        "pos":  "Noun",
        "word":  "Horn",
        "translation":  "Boynuz, korna",
        "sentence":  "The driver blew his horn to warn the pedestrian."
    },
    {
        "pos":  "Adjective",
        "word":  "Horrible",
        "translation":  "Korkunç",
        "sentence":  "The weather during my trip to İzmir was absolutely horrible."
    },
    {
        "pos":  "Noun",
        "word":  "Horror",
        "translation":  "Korku",
        "sentence":  "I don\u0027t really like watching horror movies late at night."
    },
    {
        "pos":  "Noun",
        "word":  "Horse",
        "translation":  "At",
        "sentence":  "There is a beautiful horse in the field next to the factory."
    },
    {
        "pos":  "Noun",
        "word":  "Hospital",
        "translation":  "Hastane",
        "sentence":  "The nearest hospital is only ten minutes away from the office."
    },
    {
        "pos":  "Noun",
        "word":  "Host",
        "translation":  "Verb",
        "sentence":  "Ev sahibi"
    },
    {
        "pos":  "Noun",
        "word":  "Hostage",
        "translation":  "Rehin, rehine",
        "sentence":  "The bank robbers took several people as hostages."
    },
    {
        "pos":  "Adjective",
        "word":  "Hostile",
        "translation":  "Düşmanca",
        "sentence":  "The crowd grew hostile as the police arrived."
    },
    {
        "pos":  "Noun",
        "word":  "Hostility",
        "translation":  "Düşmanlık",
        "sentence":  "There is a lot of hostility between the two rival gangs."
    },
    {
        "pos":  "Adjective",
        "word":  "Hot",
        "translation":  "Sıcak",
        "sentence":  "The summer days in İzmir can get extremely hot."
    },
    {
        "pos":  "Noun",
        "word":  "Hotel",
        "translation":  "Otel",
        "sentence":  "I stayed at a nice hotel near Sabiha Gökçen after the flight cancellation."
    },
    {
        "pos":  "Noun",
        "word":  "Hour",
        "translation":  "Saat",
        "sentence":  "I spent an hour calculating the total weight of my gold holdings."
    },
    {
        "pos":  "Noun",
        "word":  "House",
        "translation":  "Verb",
        "sentence":  "Ev"
    },
    {
        "pos":  "Noun",
        "word":  "Household",
        "translation":  "Ev halkı",
        "sentence":  "I manage all the household expenses myself."
    },
    {
        "pos":  "Noun",
        "word":  "Housing",
        "translation":  "Konut, barınma",
        "sentence":  "The company provides housing assistance for some employees."
    },
    {
        "pos":  "Adverb",
        "word":  "How",
        "translation":  "Nasıl",
        "sentence":  "How many alternative firms did you contact this month?"
    },
    {
        "pos":  "Adverb",
        "word":  "However",
        "translation":  "Ancak, her nasılsa",
        "sentence":  "The price is high; however, the quality is exactly what we need."
    },
    {
        "pos":  "Adjective",
        "word":  "Huge",
        "translation":  "Kocaman, devasa",
        "sentence":  "There was a huge increase in the demand for palladium."
    },
    {
        "pos":  "Adj.",
        "word":  "Human",
        "translation":  "Noun",
        "sentence":  "İnsani"
    },
    {
        "pos":  "Adjective",
        "word":  "Humanitarian",
        "translation":  "İnsani",
        "sentence":  "The organization provides humanitarian aid to war victims."
    },
    {
        "pos":  "Noun",
        "word":  "Humanity",
        "translation":  "İnsanlık",
        "sentence":  "The crime was described as an offense against humanity."
    },
    {
        "pos":  "Adjective",
        "word":  "Humble",
        "translation":  "Alçakgönüllü, mütevazı",
        "sentence":  "Despite his great success, he remained a very humble man."
    },
    {
        "pos":  "Noun",
        "word":  "Humor",
        "translation":  "Mizah",
        "sentence":  "A bit of humor can make a long meeting much more pleasant."
    },
    {
        "pos":  "Adjective",
        "word":  "Humorous",
        "translation":  "Mizahi, komik",
        "sentence":  "The educational videos for kids will be very humorous."
    },
    {
        "pos":  "Number",
        "word":  "Hundred",
        "translation":  "Yüz",
        "sentence":  "We saved several hundred thousand dollars this year."
    },
    {
        "pos":  "Noun",
        "word":  "Hunger",
        "translation":  "Açlık",
        "sentence":  "Millions of people in the world still suffer from hunger."
    },
    {
        "pos":  "Adjective",
        "word":  "Hungry",
        "translation":  "Aç",
        "sentence":  "I\u0027m always hungry after a long day at the factory."
    },
    {
        "pos":  "Verb",
        "word":  "Hunt",
        "translation":  "Noun",
        "sentence":  "Avlamak"
    },
    {
        "pos":  "Noun",
        "word":  "Hunting",
        "translation":  "Avlanma",
        "sentence":  "Hunting for new investment opportunities is quite exciting."
    },
    {
        "pos":  "Noun",
        "word":  "Hurricane",
        "translation":  "Kasırga",
        "sentence":  "The hurricane caused a lot of damage to the coastal areas."
    },
    {
        "pos":  "Noun",
        "word":  "Hurry",
        "translation":  "Verb",
        "sentence":  "Acele"
    },
    {
        "pos":  "Verb",
        "word":  "Hurt",
        "translation":  "Adj.",
        "sentence":  "N."
    },
    {
        "pos":  "Noun",
        "word":  "Husband",
        "translation":  "Koca (eş)",
        "sentence":  "Her husband works as a financial analyst in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Hydrogen",
        "translation":  "Hidrojen",
        "sentence":  "Hydrogen is the most abundant element in the universe."
    },
    {
        "pos":  "Noun",
        "word":  "Hypothesis",
        "translation":  "Hipotez",
        "sentence":  "The scientists are testing a new hypothesis about climate change."
    },
    {
        "pos":  "Pronoun",
        "word":  "I",
        "translation":  "Ben",
        "sentence":  "I am very focused on my cost-down studies this month."
    },
    {
        "pos":  "Noun",
        "word":  "Ice",
        "translation":  "Buz",
        "sentence":  "Would you like some ice in your cold tea?"
    },
    {
        "pos":  "Noun",
        "word":  "Ice cream",
        "translation":  "Dondurma",
        "sentence":  "Eating ice cream on the Kordon in İzmir is a summer tradition."
    },
    {
        "pos":  "Noun",
        "word":  "Icon",
        "translation":  "İkon, simge",
        "sentence":  "The Eiffel Tower is a world-famous icon of Paris."
    },
    {
        "pos":  "Noun",
        "word":  "ID",
        "translation":  "Kimlik",
        "sentence":  "You need to show your ID before you can enter the building."
    },
    {
        "pos":  "Noun",
        "word":  "Idea",
        "translation":  "Fikir",
        "sentence":  "I have a great idea for an educational song for the YouTube channel."
    },
    {
        "pos":  "Adj.",
        "word":  "Ideal",
        "translation":  "Noun",
        "sentence":  "İdeal"
    },
    {
        "pos":  "Adjective",
        "word":  "Identical",
        "translation":  "Özdeş, aynı",
        "sentence":  "The two signatures were almost identical."
    },
    {
        "pos":  "Noun",
        "word":  "Identification",
        "translation":  "Kimlik tespiti, tanıma",
        "sentence":  "DNA testing was used for the identification of the victim."
    },
    {
        "pos":  "Verb",
        "word":  "Identify",
        "translation":  "Tanımlamak, belirlemek",
        "sentence":  "We need to identify the key factors behind the price rise."
    },
    {
        "pos":  "Noun",
        "word":  "Identity",
        "translation":  "Kimlik",
        "sentence":  "Please keep your corporate identity card with you at all times."
    },
    {
        "pos":  "Adjective",
        "word":  "Ideological",
        "translation":  "İdeolojik",
        "sentence":  "There are deep ideological differences between the two parties."
    },
    {
        "pos":  "Noun",
        "word":  "Ideology",
        "translation":  "İdeoloji",
        "sentence":  "His political ideology is based on social justice and equality."
    },
    {
        "pos":  "Noun",
        "word":  "Idiot",
        "translation":  "Aptal",
        "sentence":  "I felt like an idiot when I realized I had the wrong keys."
    },
    {
        "pos":  "Conjunction",
        "word":  "If",
        "translation":  "Eğer",
        "sentence":  "If the silver price drops, we should buy more immediately."
    },
    {
        "pos":  "Noun",
        "word":  "Ignorance",
        "translation":  "Cehalet",
        "sentence":  "The problem is often caused by ignorance and lack of education."
    },
    {
        "pos":  "Verb",
        "word":  "Ignore",
        "translation":  "Görmezden gelmek",
        "sentence":  "We cannot ignore the risks of relying on only one supplier."
    },
    {
        "pos":  "Adjective",
        "word":  "Ill",
        "translation":  "Hasta",
        "sentence":  "He has been ill since the flight cancellation last weekend."
    },
    {
        "pos":  "Adjective",
        "word":  "Illegal",
        "translation":  "Yasadışı",
        "sentence":  "Trading precious metals through illegal channels is a huge risk."
    },
    {
        "pos":  "Noun",
        "word":  "Illness",
        "translation":  "Hastalık",
        "sentence":  "A sudden illness prevented him from attending the meeting."
    },
    {
        "pos":  "Noun",
        "word":  "Illusion",
        "translation":  "İllüzyon, yanılsama",
        "sentence":  "The mirrors create the illusion of a much larger room."
    },
    {
        "pos":  "Verb",
        "word":  "Illustrate",
        "translation":  "Örneklemek, resimlemek",
        "sentence":  "This chart will illustrate the savings from our cost-down work."
    },
    {
        "pos":  "Noun",
        "word":  "Illustration",
        "translation":  "Örnekleme, resim",
        "sentence":  "The illustration in the report makes the data much clearer."
    },
    {
        "pos":  "Noun",
        "word":  "Image",
        "translation":  "Görüntü, imaj",
        "sentence":  "We want to maintain a professional image for our firm."
    },
    {
        "pos":  "Noun",
        "word":  "Imagery",
        "translation":  "İmgeleme, görseller",
        "sentence":  "The poem is full of beautiful natural imagery."
    },
    {
        "pos":  "Adjective",
        "word":  "Imaginary",
        "translation":  "Hayali",
        "sentence":  "The characters in the children\u0027s songs are all imaginary."
    },
    {
        "pos":  "Noun",
        "word":  "Imagination",
        "translation":  "Hayal gücü",
        "sentence":  "You need a lot of imagination to create engaging content for kids."
    },
    {
        "pos":  "Verb",
        "word":  "Imagine",
        "translation":  "Hayal etmek",
        "sentence":  "Can you imagine how much we will save with this new strategy?"
    },
    {
        "pos":  "Adjective",
        "word":  "Immediate",
        "translation":  "Hemen olan, acil",
        "sentence":  "We need an immediate solution for the supply chain delay."
    },
    {
        "pos":  "Adverb",
        "word":  "Immediately",
        "translation":  "Hemen",
        "sentence":  "Please inform me immediately if the palladium price changes."
    },
    {
        "pos":  "Adjective",
        "word":  "Immense",
        "translation":  "Devasa, çok büyük",
        "sentence":  "The project will require an immense amount of time and effort."
    },
    {
        "pos":  "Noun",
        "word":  "Immigrant",
        "translation":  "Göçmen",
        "sentence":  "There are many immigrants working in the logistics sector."
    },
    {
        "pos":  "Noun",
        "word":  "Immigration",
        "translation":  "Göç, göçmenlik",
        "sentence":  "The government is introducing new laws to control immigration."
    },
    {
        "pos":  "Adjective",
        "word":  "Imminent",
        "translation":  "Eli kulağında, yakın (tehlike vb.)",
        "sentence":  "The dark clouds suggest that a storm is imminent."
    },
    {
        "pos":  "Adjective",
        "word":  "Immune",
        "translation":  "Bağışık",
        "sentence":  "Vaccinations help to make children immune to certain diseases."
    },
    {
        "pos":  "Noun",
        "word":  "Impact",
        "translation":  "Verb",
        "sentence":  "Etki"
    },
    {
        "pos":  "Adjective",
        "word":  "Impatient",
        "translation":  "Sabırsız",
        "sentence":  "He is getting impatient about the flight refund from the airline."
    },
    {
        "pos":  "Verb",
        "word":  "Implement",
        "translation":  "Uygulamak, yerine getirmek",
        "sentence":  "The company plans to implement the new safety rules next month."
    },
    {
        "pos":  "Noun",
        "word":  "Implementation",
        "translation":  "Uygulama, yürütme",
        "sentence":  "The implementation of the plan took much longer than expected."
    },
    {
        "pos":  "Noun",
        "word":  "Implication",
        "translation":  "Çıkarım, olası sonuç",
        "sentence":  "The decision has serious implications for the future of the firm."
    },
    {
        "pos":  "Verb",
        "word":  "Imply",
        "translation":  "İma etmek",
        "sentence":  "Does this report imply that we need to find more suppliers?"
    },
    {
        "pos":  "Noun",
        "word":  "Import",
        "translation":  "Verb",
        "sentence":  "İthalat"
    },
    {
        "pos":  "Noun",
        "word":  "Importance",
        "translation":  "Önem",
        "sentence":  "Never underestimate the importance of a good self-evaluation."
    },
    {
        "pos":  "Adjective",
        "word":  "Important",
        "translation":  "Önemli",
        "sentence":  "It is important to calculate the weight of the gold accurately."
    },
    {
        "pos":  "Verb",
        "word":  "Impose",
        "translation":  "Dayatmak, koymak",
        "sentence":  "The government might impose new taxes on metal investments."
    },
    {
        "pos":  "Adjective",
        "word":  "Impossible",
        "translation":  "İmkansız",
        "sentence":  "It is almost impossible to find silver at last year\u0027s prices."
    },
    {
        "pos":  "Verb",
        "word":  "Impress",
        "translation":  "Etkilemek",
        "sentence":  "I want to impress the board with my fifth-year performance review."
    },
    {
        "pos":  "Adjective",
        "word":  "Impressed",
        "translation":  "Etkilenmiş",
        "sentence":  "I was impressed by the professional terminology you used."
    },
    {
        "pos":  "Noun",
        "word":  "Impression",
        "translation":  "İzlenim",
        "sentence":  "My first impression of the alternative firm was very positive."
    },
    {
        "pos":  "Adjective",
        "word":  "Impressive",
        "translation":  "Etkileyici",
        "sentence":  "A 10% cost reduction is an impressive achievement for any team."
    },
    {
        "pos":  "Verb",
        "word":  "Imprison",
        "translation":  "Hapsetmek",
        "sentence":  "The judge decided to imprison him for five years for his crimes."
    },
    {
        "pos":  "Verb",
        "word":  "Improve",
        "translation":  "Geliştirmek",
        "sentence":  "I am constantly working to improve my English and German skills."
    },
    {
        "pos":  "Noun",
        "word":  "Improvement",
        "translation":  "Gelişme, iyileşme",
        "sentence":  "There has been a significant improvement in our sourcing process."
    },
    {
        "pos":  "Prep.",
        "word":  "In",
        "translation":  "Adv.",
        "sentence":  "İçinde"
    },
    {
        "pos":  "Noun",
        "word":  "Inability",
        "translation":  "Acizlik, yetersizlik",
        "sentence":  "His inability to speak English made it difficult for him to find a job."
    },
    {
        "pos":  "Adjective",
        "word":  "Inadequate",
        "translation":  "Yetersiz",
        "sentence":  "The current healthcare system is inadequate to meet the needs of the population."
    },
    {
        "pos":  "Adjective",
        "word":  "Inappropriate",
        "translation":  "Uygunsuz",
        "sentence":  "His behavior at the meeting was completely inappropriate."
    },
    {
        "pos":  "Verb",
        "word":  "Incarcerate",
        "translation":  "Hapsetmek",
        "sentence":  "The state continues to incarcerate a high percentage of its population."
    },
    {
        "pos":  "Noun",
        "word":  "Incarceration",
        "translation":  "Hapsedilme, hapis cezası",
        "sentence":  "The study focuses on the long-term effects of incarceration."
    },
    {
        "pos":  "Noun",
        "word":  "Incentive",
        "translation":  "Teşvik",
        "sentence":  "The company offers cash incentives to employees who meet their targets."
    },
    {
        "pos":  "Noun",
        "word":  "Inch",
        "translation":  "İnç (ölçü birimi)",
        "sentence":  "The new monitor in the office is 27 inches wide."
    },
    {
        "pos":  "Noun",
        "word":  "Incidence",
        "translation":  "Görülme sıklığı, vaka",
        "sentence":  "There is a high incidence of heart disease in this region."
    },
    {
        "pos":  "Noun",
        "word":  "Incident",
        "translation":  "Olay",
        "sentence":  "The flight cancellation was an unfortunate incident during my trip."
    },
    {
        "pos":  "Adjective",
        "word":  "Inclined",
        "translation":  "Eğilimli",
        "sentence":  "I am inclined to agree with your assessment of the situation."
    },
    {
        "pos":  "Verb",
        "word":  "Include",
        "translation":  "Dahil etmek",
        "sentence":  "Does the total weight include the two gram gold pieces?"
    },
    {
        "pos":  "Adjective",
        "word":  "Included",
        "translation":  "Dahil olan",
        "sentence":  "All shipping costs are included in the supplier\u0027s quote."
    },
    {
        "pos":  "Preposition",
        "word":  "Including",
        "translation":  "Dahil olmak üzere",
        "sentence":  "We contacted five firms, including the one in Germany."
    },
    {
        "pos":  "Noun",
        "word":  "Inclusion",
        "translation":  "Dahil etme, kapsayıcılık",
        "sentence":  "The inclusion of disabled athletes in the games was a major step forward."
    },
    {
        "pos":  "Noun",
        "word":  "Income",
        "translation":  "Gelir",
        "sentence":  "Diversifying your investments is a good way to increase your income."
    },
    {
        "pos":  "Verb",
        "word":  "Incorporate",
        "translation":  "Dahil etmek, bünyesine katmak",
        "sentence":  "We should incorporate these new findings into our final report."
    },
    {
        "pos":  "Adjective",
        "word":  "Incorrect",
        "translation":  "Yanlış",
        "sentence":  "Please correct any incorrect information in the document."
    },
    {
        "pos":  "Verb",
        "word":  "Increase",
        "translation":  "Noun",
        "sentence":  "Artırmak"
    },
    {
        "pos":  "Adverb",
        "word":  "Increasingly",
        "translation":  "Giderek daha fazla",
        "sentence":  "It is becoming increasingly difficult to find cheap raw materials."
    },
    {
        "pos":  "Adjective",
        "word":  "Incredible",
        "translation":  "İnanılmaz",
        "sentence":  "The success of the children\u0027s YouTube channel has been incredible."
    },
    {
        "pos":  "Adverb",
        "word":  "Incredibly",
        "translation":  "İnanılmaz bir şekilde",
        "sentence":  "The price of silver has risen incredibly fast this month."
    },
    {
        "pos":  "Verb",
        "word":  "Incur",
        "translation":  "Maruz kalmak, (borç vb.) üstlenmek",
        "sentence":  "You will incur a small fee if you pay your bill late."
    },
    {
        "pos":  "Adverb",
        "word":  "Indeed",
        "translation":  "Gerçekten, şüphesiz",
        "sentence":  "Strategic sourcing is indeed a very challenging field of work."
    },
    {
        "pos":  "Noun",
        "word":  "Independence",
        "translation":  "Bağımsızlık",
        "sentence":  "India gained independence from Britain in 1947."
    },
    {
        "pos":  "Adjective",
        "word":  "Independent",
        "translation":  "Bağımsız",
        "sentence":  "I want to be financially independent through my investments."
    },
    {
        "pos":  "Noun",
        "word":  "Index",
        "translation":  "Endeks, dizin",
        "sentence":  "You can find the topic you are looking for in the index at the back of the book."
    },
    {
        "pos":  "Verb",
        "word":  "Indicate",
        "translation":  "Göstermek, belirtmek",
        "sentence":  "These figures indicate a clear trend in cost reduction."
    },
    {
        "pos":  "Noun",
        "word":  "Indication",
        "translation":  "Belirti, gösterge",
        "sentence":  "There is no indication that the economy is improving."
    },
    {
        "pos":  "Noun",
        "word":  "Indicator",
        "translation":  "Gösterge",
        "sentence":  "High unemployment is often an indicator of a weak economy."
    },
    {
        "pos":  "Noun",
        "word":  "Indictment",
        "translation":  "İddianame, suçlama",
        "sentence":  "The report was a shocking indictment of the prison system."
    },
    {
        "pos":  "Adjective",
        "word":  "Indigenous",
        "translation":  "Yerli",
        "sentence":  "The kangaroo is indigenous to Australia."
    },
    {
        "pos":  "Adjective",
        "word":  "Indirect",
        "translation":  "Dolaylı",
        "sentence":  "The flight delay had an indirect effect on my work schedule."
    },
    {
        "pos":  "Noun",
        "word":  "Individual",
        "translation":  "Adj.",
        "sentence":  "Birey"
    },
    {
        "pos":  "Adjective",
        "word":  "Indoor",
        "translation":  "Kapalı mekan",
        "sentence":  "We are planning an indoor celebration for the work anniversary."
    },
    {
        "pos":  "Adverb",
        "word":  "Indoors",
        "translation":  "İçeride",
        "sentence":  "It\u0027s much cooler indoors during the hot summer days in İzmir."
    },
    {
        "pos":  "Verb",
        "word":  "Induce",
        "translation":  "İkna etmek, sebep olmak",
        "sentence":  "The drug is used to induce sleep in patients with insomnia."
    },
    {
        "pos":  "Verb",
        "word":  "Indulge",
        "translation":  "Şımartmak, (keyif veren bir şeye) kendini kaptırmak",
        "sentence":  "Sometimes it\u0027s nice to indulge in a little chocolate."
    },
    {
        "pos":  "Adjective",
        "word":  "Industrial",
        "translation":  "Endüstriyel",
        "sentence":  "The factory is located in a large industrial zone outside İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Industry",
        "translation":  "Endüstri, sanayi",
        "sentence":  "I have been working in the sourcing industry for four years."
    },
    {
        "pos":  "Noun",
        "word":  "Inequality",
        "translation":  "Eşitsizlik",
        "sentence":  "The protest was aimed at social and economic inequality."
    },
    {
        "pos":  "Adjective",
        "word":  "Inevitable",
        "translation":  "Kaçınılmaz",
        "sentence":  "Accidents are inevitable when people are tired and overworked."
    },
    {
        "pos":  "Adverb",
        "word":  "Inevitably",
        "translation":  "Kaçınılmaz olarak",
        "sentence":  "Higher prices will inevitably lead to a drop in sales."
    },
    {
        "pos":  "Adjective",
        "word":  "Infamous",
        "translation":  "Adı çıkmış, kötü şöhretli",
        "sentence":  "He is infamous for his involvement in the bank robbery."
    },
    {
        "pos":  "Noun",
        "word":  "Infant",
        "translation":  "Bebek",
        "sentence":  "The hospital has a special unit for premature infants."
    },
    {
        "pos":  "Verb",
        "word":  "Infect",
        "translation":  "Enfekte etmek, bulaşmak",
        "sentence":  "One person with a cold can quickly infect the whole office."
    },
    {
        "pos":  "Noun",
        "word":  "Infection",
        "translation":  "Enfeksiyon",
        "sentence":  "He had to stay home because of a minor ear infection."
    },
    {
        "pos":  "Verb",
        "word":  "Infer",
        "translation":  "Çıkarım yapmak",
        "sentence":  "What can we infer from the data presented in the report?"
    },
    {
        "pos":  "Noun",
        "word":  "Inflation",
        "translation":  "Enflasyon",
        "sentence":  "High inflation has led to a significant increase in the cost of living."
    },
    {
        "pos":  "Verb",
        "word":  "Inflict",
        "translation":  "Çektirmek, uğratmak",
        "sentence":  "The storm managed to inflict severe damage on the coastal town."
    },
    {
        "pos":  "Noun",
        "word":  "Influence",
        "translation":  "Verb",
        "sentence":  "Etki"
    },
    {
        "pos":  "Adjective",
        "word":  "Influential",
        "translation":  "Etkili, nüfuzlu",
        "sentence":  "She is one of the most influential women in the world of business."
    },
    {
        "pos":  "Noun",
        "word":  "Info",
        "translation":  "Bilgi (kısaltma)",
        "sentence":  "For more info, please visit our official website."
    },
    {
        "pos":  "Verb",
        "word":  "Inform",
        "translation":  "Bilgilendirmek",
        "sentence":  "Please inform the team about the new alternative material samples."
    },
    {
        "pos":  "Adjective",
        "word":  "Informal",
        "translation":  "Resmi olmayan",
        "sentence":  "We had an informal chat about the new car financing plan."
    },
    {
        "pos":  "Noun",
        "word":  "Information",
        "translation":  "Bilgi",
        "sentence":  "I need more information about the betting options for the match."
    },
    {
        "pos":  "Noun",
        "word":  "Infrastructure",
        "translation":  "Altyapı",
        "sentence":  "The city needs to invest more in its transport infrastructure."
    },
    {
        "pos":  "Noun",
        "word":  "Ingredient",
        "translation":  "İçerik, malzeme",
        "sentence":  "What is the main ingredient in this traditional İzmir dish?"
    },
    {
        "pos":  "Noun",
        "word":  "Inhabitant",
        "translation":  "Sakin, orada yaşayan",
        "sentence":  "The city has over five million inhabitants."
    },
    {
        "pos":  "Adjective",
        "word":  "Inherent",
        "translation":  "Doğasında olan, içsel",
        "sentence":  "There are inherent risks involved in any new business venture."
    },
    {
        "pos":  "Verb",
        "word":  "Inherit",
        "translation":  "Miras almak",
        "sentence":  "She is expected to inherit a large fortune from her aunt."
    },
    {
        "pos":  "Verb",
        "word":  "Inhibit",
        "translation":  "Engellemek, kısıtlamak",
        "sentence":  "Fear of failure can often inhibit a person\u0027s creativity."
    },
    {
        "pos":  "Adjective",
        "word":  "Initial",
        "translation":  "İlk, başlangıç",
        "sentence":  "Our initial meeting with the alternative firm was quite promising."
    },
    {
        "pos":  "Adverb",
        "word":  "Initially",
        "translation":  "Başlangıçta",
        "sentence":  "Initially, I thought silver was a risky investment, but now I see its value."
    },
    {
        "pos":  "Verb",
        "word":  "Initiate",
        "translation":  "Başlatmak",
        "sentence":  "The government plans to initiate a new program to help the unemployed."
    },
    {
        "pos":  "Noun",
        "word":  "Initiative",
        "translation":  "Girişim, inisiyatif",
        "sentence":  "Taking the initiative to find new suppliers helped me save the company money."
    },
    {
        "pos":  "Verb",
        "word":  "Inject",
        "translation":  "Enjekte etmek",
        "sentence":  "The doctor had to inject the medicine directly into the muscle."
    },
    {
        "pos":  "Noun",
        "word":  "Injection",
        "translation":  "Enjeksiyon, iğne",
        "sentence":  "He was nervous about getting a flu injection."
    },
    {
        "pos":  "Verb",
        "word":  "Injure",
        "translation":  "İncitmek, yaralamak",
        "sentence":  "Be careful not to injure your back when lifting heavy material boxes."
    },
    {
        "pos":  "Adjective",
        "word":  "Injured",
        "translation":  "Yaralı",
        "sentence":  "The injured worker was taken to the hospital in İzmir immediately."
    },
    {
        "pos":  "Noun",
        "word":  "Injury",
        "translation":  "Yaralanma",
        "sentence":  "Safety protocols are designed to prevent any serious injury at the factory."
    },
    {
        "pos":  "Noun",
        "word":  "Injustice",
        "translation":  "Adaletsizlik",
        "sentence":  "The group is dedicated to fighting social injustice."
    },
    {
        "pos":  "Noun",
        "word":  "Ink",
        "translation":  "Mürekkep",
        "sentence":  "I need to buy a new ink cartridge for my printer."
    },
    {
        "pos":  "Noun",
        "word":  "Inmate",
        "translation":  "Mahkum",
        "sentence":  "The prison has over two thousand inmates."
    },
    {
        "pos":  "Adjective",
        "word":  "Inner",
        "translation":  "İç, dahili",
        "sentence":  "The inner workings of the global metal market are quite complex."
    },
    {
        "pos":  "Adjective",
        "word":  "Innocent",
        "translation":  "Masum",
        "sentence":  "The child in the educational song looks very innocent and happy."
    },
    {
        "pos":  "Noun",
        "word":  "Innovation",
        "translation":  "İnovasyon, yenilik",
        "sentence":  "Technological innovation is key to the company\u0027s success."
    },
    {
        "pos":  "Adjective",
        "word":  "Innovative",
        "translation":  "Yenilikçi",
        "sentence":  "The firm is famous for its innovative approach to product design."
    },
    {
        "pos":  "Noun",
        "word":  "Input",
        "translation":  "Girdi, katkı",
        "sentence":  "We would value your input on this new project."
    },
    {
        "pos":  "Verb",
        "word":  "Inquire",
        "translation":  "Sormak, soruşturmak",
        "sentence":  "I called the hotel to inquire about the price of a room."
    },
    {
        "pos":  "Noun",
        "word":  "Inquiry",
        "translation":  "Sorgu, araştırma",
        "sentence":  "I sent a formal inquiry to the German firm regarding their prices."
    },
    {
        "pos":  "Noun",
        "word":  "Insect",
        "translation":  "Böcek",
        "sentence":  "The children\u0027s video will feature a song about a colorful insect."
    },
    {
        "pos":  "Verb",
        "word":  "Insert",
        "translation":  "Yerleştirmek, sokmak",
        "sentence":  "Please insert your credit card into the machine."
    },
    {
        "pos":  "Noun",
        "word":  "Insertion",
        "translation":  "Yerleştirme, ekleme",
        "sentence":  "The insertion of a new clause in the contract was necessary."
    },
    {
        "pos":  "Prep.",
        "word":  "Inside",
        "translation":  "Adv.",
        "sentence":  "İçinde"
    },
    {
        "pos":  "Noun",
        "word":  "Insider",
        "translation":  "İçeriden biri",
        "sentence":  "According to a company insider, the manager is about to resign."
    },
    {
        "pos":  "Noun",
        "word":  "Insight",
        "translation":  "Anlayış, içgörü",
        "sentence":  "This report gives a deep insight into silver price trends."
    },
    {
        "pos":  "Verb",
        "word":  "Insist",
        "translation":  "Israr etmek",
        "sentence":  "I insist on checking the gold weights one more time for accuracy."
    },
    {
        "pos":  "Verb",
        "word":  "Inspect",
        "translation":  "Denetlemek, incelemek",
        "sentence":  "Public health officials came to inspect the restaurant\u0027s kitchen."
    },
    {
        "pos":  "Noun",
        "word":  "Inspection",
        "translation":  "Denetim, teftiş",
        "sentence":  "The aircraft underwent a thorough safety inspection before takeoff."
    },
    {
        "pos":  "Noun",
        "word":  "Inspector",
        "translation":  "Müfettiş, denetleyici",
        "sentence":  "The school inspector praised the high quality of teaching."
    },
    {
        "pos":  "Noun",
        "word":  "Inspiration",
        "translation":  "İlham",
        "sentence":  "The beautiful landscape was a constant source of inspiration for the artist."
    },
    {
        "pos":  "Verb",
        "word":  "Inspire",
        "translation":  "İlham vermek",
        "sentence":  "Success stories of other YouTubers inspire me to start my own channel."
    },
    {
        "pos":  "Verb",
        "word":  "Install",
        "translation":  "Kurmak (cihaz vb.)",
        "sentence":  "We need to install new software to track our cost-down studies."
    },
    {
        "pos":  "Noun",
        "word":  "Installation",
        "translation":  "Kurulum, tesisat",
        "sentence":  "The installation of the new software will take about an hour."
    },
    {
        "pos":  "Noun",
        "word":  "Instance",
        "translation":  "Örnek, vaka",
        "sentence":  "For instance, silver prices rose by 10% in just one month."
    },
    {
        "pos":  "Adjective",
        "word":  "Instant",
        "translation":  "Anlık, hemen olan",
        "sentence":  "The book was an instant success and became a bestseller."
    },
    {
        "pos":  "Adverb",
        "word":  "Instantly",
        "translation":  "Anında, hemen",
        "sentence":  "He recognized her instantly, even after all those years."
    },
    {
        "pos":  "Adverb",
        "word":  "Instead",
        "translation":  "Yerine",
        "sentence":  "We should use this alternative material instead of the more expensive one."
    },
    {
        "pos":  "Noun",
        "word":  "Instinct",
        "translation":  "İçgüdü",
        "sentence":  "Animals survive by following their natural instincts."
    },
    {
        "pos":  "Noun",
        "word":  "Institute",
        "translation":  "Enstitü",
        "sentence":  "He works at a financial institute that specializes in asset management."
    },
    {
        "pos":  "Noun",
        "word":  "Institution",
        "translation":  "Kurum",
        "sentence":  "Akbank is a well-known financial institution in Turkey."
    },
    {
        "pos":  "Adjective",
        "word":  "Institutional",
        "translation":  "Kurumsal",
        "sentence":  "The report focuses on the need for institutional reform."
    },
    {
        "pos":  "Verb",
        "word":  "Instruct",
        "translation":  "Talimat vermek, eğitmek",
        "sentence":  "The manager will instruct you on how to use the new machine."
    },
    {
        "pos":  "Noun",
        "word":  "Instruction",
        "translation":  "Talimat",
        "sentence":  "Please follow the instruction manual carefully to operate the machine."
    },
    {
        "pos":  "Noun",
        "word":  "Instructor",
        "translation":  "Eğitmen",
        "sentence":  "My German instructor is very patient with my pronunciation."
    },
    {
        "pos":  "Noun",
        "word":  "Instrument",
        "translation":  "Enstrüman",
        "sentence":  "Musical instruments like the guitar will be used in our songs for kids."
    },
    {
        "pos":  "Adjective",
        "word":  "Instrumental",
        "translation":  "Enstrümantal, aracı, etkili",
        "sentence":  "She was instrumental in helping the two sides reach an agreement."
    },
    {
        "pos":  "Adjective",
        "word":  "Insufficient",
        "translation":  "Yetersiz",
        "sentence":  "There was insufficient evidence to prove his guilt."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Insult",
        "translation":  "Hakaret / Hakaret etmek",
        "sentence":  "I didn\u0027t mean to insult you; it was just a joke."
    },
    {
        "pos":  "Noun",
        "word":  "Insurance",
        "translation":  "Sigorta",
        "sentence":  "It is important to have insurance for high-value metal shipments."
    },
    {
        "pos":  "Adjective",
        "word":  "Intact",
        "translation":  "Bozulmamış, tam",
        "sentence":  "Most of the old city remained intact after the earthquake."
    },
    {
        "pos":  "Noun",
        "word":  "Intake",
        "translation":  "Alım (kalori, hava vb.)",
        "sentence":  "You should try to reduce your daily intake of sugar."
    },
    {
        "pos":  "Adjective",
        "word":  "Integral",
        "translation":  "Tamamlayıcı, ayrılmaz parça",
        "sentence":  "Music is an integral part of the school\u0027s curriculum."
    },
    {
        "pos":  "Verb",
        "word":  "Integrate",
        "translation":  "Entegre etmek, bütünleştirmek",
        "sentence":  "It takes time for immigrants to integrate into a new society."
    },
    {
        "pos":  "Adjective",
        "word":  "Integrated",
        "translation":  "Entegre, bütünleşmiş",
        "sentence":  "The car has a fully integrated navigation system."
    },
    {
        "pos":  "Noun",
        "word":  "Integration",
        "translation":  "Entegrasyon, bütünleşme",
        "sentence":  "The integration of the two companies will be a complex process."
    },
    {
        "pos":  "Noun",
        "word":  "Integrity",
        "translation":  "Dürüstlük, bütünlük",
        "sentence":  "He is a man of great personal and professional integrity."
    },
    {
        "pos":  "Adjective / Noun",
        "word":  "Intellectual",
        "translation":  "Entelektüel, zihinsel",
        "sentence":  "Chess is a game that requires a lot of intellectual effort."
    },
    {
        "pos":  "Noun",
        "word":  "Intelligence",
        "translation":  "Zeka",
        "sentence":  "Artificial intelligence can help us find the best alternative firms."
    },
    {
        "pos":  "Adjective",
        "word":  "Intelligent",
        "translation":  "Zeki",
        "sentence":  "He made an intelligent decision by investing in palladium early."
    },
    {
        "pos":  "Verb",
        "word":  "Intend",
        "translation":  "Niyet etmek",
        "sentence":  "I intend to finalize my performance note by the end of the day."
    },
    {
        "pos":  "Adjective",
        "word":  "Intended",
        "translation":  "Hedeflenen, planlanan",
        "sentence":  "The intended audience for the YouTube channel is children aged 2 to 6."
    },
    {
        "pos":  "Adjective",
        "word":  "Intense",
        "translation":  "Yoğun",
        "sentence":  "The negotiation with the supplier was very intense but successful."
    },
    {
        "pos":  "Verb",
        "word":  "Intensify",
        "translation":  "Şiddetlendirmek, yoğunlaştırmak",
        "sentence":  "The police decided to intensify their search for the missing boy."
    },
    {
        "pos":  "Noun",
        "word":  "Intensity",
        "translation":  "Yoğunluk, şiddet",
        "sentence":  "The intensity of the light made it difficult to see."
    },
    {
        "pos":  "Adjective",
        "word":  "Intensive",
        "translation":  "Yoğun, kapsamlı",
        "sentence":  "The patient is in intensive care following the surgery."
    },
    {
        "pos":  "Noun",
        "word":  "Intent",
        "translation":  "Niyet, amaç",
        "sentence":  "It was never my intent to hurt your feelings."
    },
    {
        "pos":  "Noun",
        "word":  "Intention",
        "translation":  "Niyet",
        "sentence":  "My intention is to achieve a significant cost reduction this year."
    },
    {
        "pos":  "Verb",
        "word":  "Interact",
        "translation":  "Etkileşim kurmak",
        "sentence":  "The children are encouraged to interact with each other in class."
    },
    {
        "pos":  "Noun",
        "word":  "Interaction",
        "translation":  "Etkileşim",
        "sentence":  "The study looks at the interaction between teachers and students."
    },
    {
        "pos":  "Adjective",
        "word":  "Interactive",
        "translation":  "Etkileşimli",
        "sentence":  "The museum has several interactive displays for children."
    },
    {
        "pos":  "Noun",
        "word":  "Interest",
        "translation":  "Verb",
        "sentence":  "Faiz, ilgi"
    },
    {
        "pos":  "Adjective",
        "word":  "Interested",
        "translation":  "İlgili",
        "sentence":  "I am very interested in learning more about social media automation."
    },
    {
        "pos":  "Adjective",
        "word":  "Interesting",
        "translation":  "İlginç",
        "sentence":  "It was interesting to see how silver prices fluctuated last week."
    },
    {
        "pos":  "Noun",
        "word":  "Interface",
        "translation":  "Arayüz",
        "sentence":  "The software has a very simple and user-friendly interface."
    },
    {
        "pos":  "Verb",
        "word":  "Interfere",
        "translation":  "Müdahale etmek, karışmak",
        "sentence":  "I don\u0027t want to interfere in your private life."
    },
    {
        "pos":  "Noun",
        "word":  "Interference",
        "translation":  "Müdahale, parazit",
        "sentence":  "There was a lot of static interference on the radio."
    },
    {
        "pos":  "Adjective",
        "word":  "Interim",
        "translation":  "Geçici",
        "sentence":  "An interim manager was appointed while they looked for a permanent replacement."
    },
    {
        "pos":  "Adjective / Noun",
        "word":  "Interior",
        "translation":  "İç, dahili",
        "sentence":  "The interior of the house was decorated in a modern style."
    },
    {
        "pos":  "Adjective",
        "word":  "Intermediate",
        "translation":  "Orta seviye",
        "sentence":  "This course is designed for students at an intermediate level."
    },
    {
        "pos":  "Adjective",
        "word":  "Internal",
        "translation":  "İç, dahili",
        "sentence":  "We need to improve our internal communication within the sourcing team."
    },
    {
        "pos":  "Adjective",
        "word":  "International",
        "translation":  "Uluslararası",
        "sentence":  "Managing international suppliers requires good English skills."
    },
    {
        "pos":  "Noun",
        "word":  "Internet",
        "translation":  "İnternet",
        "sentence":  "I use the internet to research alternative raw materials."
    },
    {
        "pos":  "Verb",
        "word":  "Interpret",
        "translation":  "Yorumlamak",
        "sentence":  "How do you interpret the recent changes in the precious metals market?"
    },
    {
        "pos":  "Noun",
        "word":  "Interpretation",
        "translation":  "Yorumlama",
        "sentence":  "There are several different interpretations of the poem\u0027s meaning."
    },
    {
        "pos":  "Verb",
        "word":  "Interrupt",
        "translation":  "Sözünü kesmek, araya girmek",
        "sentence":  "Please do not interrupt while the manager is explaining the cost-down goals."
    },
    {
        "pos":  "Noun",
        "word":  "Intersection",
        "translation":  "Kavşak, kesişim noktası",
        "sentence":  "Turn left at the next intersection."
    },
    {
        "pos":  "Noun",
        "word":  "Interval",
        "translation":  "Aralık, ara",
        "sentence":  "There will be a short interval of fifteen minutes between the two acts."
    },
    {
        "pos":  "Verb",
        "word":  "Intervene",
        "translation":  "Müdahale etmek (araya girmek)",
        "sentence":  "The government decided to intervene to stop the bank from failing."
    },
    {
        "pos":  "Noun",
        "word":  "Intervention",
        "translation":  "Müdahale",
        "sentence":  "The military intervention lasted for several months."
    },
    {
        "pos":  "Noun",
        "word":  "Interview",
        "translation":  "Verb",
        "sentence":  "Röportaj, mülakat"
    },
    {
        "pos":  "Adjective",
        "word":  "Intimate",
        "translation":  "Samimi, içli dışlı",
        "sentence":  "We had an intimate dinner for two at a quiet restaurant."
    },
    {
        "pos":  "Preposition",
        "word":  "Into",
        "translation":  "İçine",
        "sentence":  "We are moving into a new office space in İzmir next month."
    },
    {
        "pos":  "Adjective",
        "word":  "Intriguing",
        "translation":  "İlgi çekici, merak uyandırıcı",
        "sentence":  "I found the documentary to be absolutely intriguing."
    },
    {
        "pos":  "Verb",
        "word":  "Introduce",
        "translation":  "Tanıştırmak, sunmak",
        "sentence":  "Let me introduce you to our new strategic sourcing assistant."
    },
    {
        "pos":  "Noun",
        "word":  "Introduction",
        "translation":  "Tanıtım, giriş",
        "sentence":  "The introduction of the report explains our main cost-saving methods."
    },
    {
        "pos":  "Verb",
        "word":  "Invade",
        "translation":  "İstila etmek",
        "sentence":  "The army plans to invade the neighboring country tomorrow."
    },
    {
        "pos":  "Noun",
        "word":  "Invasion",
        "translation":  "İstila",
        "sentence":  "The invasion was condemned by world leaders."
    },
    {
        "pos":  "Verb",
        "word":  "Invent",
        "translation":  "İcat etmek",
        "sentence":  "You don\u0027t need to invent a new process; just improve the existing one."
    },
    {
        "pos":  "Noun",
        "word":  "Invention",
        "translation":  "İcat",
        "sentence":  "The invention of digital banking made buying gold much easier."
    },
    {
        "pos":  "Noun",
        "word":  "Inventory",
        "translation":  "Envanter, stok listesi",
        "sentence":  "We need to take an inventory of all the stock in the warehouse."
    },
    {
        "pos":  "Verb",
        "word":  "Invest",
        "translation":  "Yatırım yapmak",
        "sentence":  "I plan to invest more in silver and palladium this year."
    },
    {
        "pos":  "Verb",
        "word":  "Investigate",
        "translation":  "Araştırmak",
        "sentence":  "We need to investigate why the shipment from Sabiha Gökçen was delayed."
    },
    {
        "pos":  "Noun",
        "word":  "Investigation",
        "translation":  "Araştırma, soruşturma",
        "sentence":  "A thorough investigation showed that the firm was reliable."
    },
    {
        "pos":  "Noun",
        "word":  "Investigator",
        "translation":  "Araştırmacı, dedektif",
        "sentence":  "The private investigator was hired to find the missing woman."
    },
    {
        "pos":  "Noun",
        "word":  "Investment",
        "translation":  "Yatırım",
        "sentence":  "Gold is a traditional investment for many families in Turkey."
    },
    {
        "pos":  "Noun",
        "word":  "Investor",
        "translation":  "Yatırımcı",
        "sentence":  "The company is looking for new investors to fund its expansion."
    },
    {
        "pos":  "Adjective",
        "word":  "Invisible",
        "translation":  "Görünmez",
        "sentence":  "The bacteria are invisible to the naked eye."
    },
    {
        "pos":  "Noun",
        "word":  "Invitation",
        "translation":  "Davet",
        "sentence":  "I received an invitation to a seminar on global supply chains."
    },
    {
        "pos":  "Verb",
        "word":  "Invite",
        "translation":  "Davet etmek",
        "sentence":  "We should invite the new supplier to our factory in İzmir."
    },
    {
        "pos":  "Verb",
        "word":  "Invoke",
        "translation":  "Başvurmak, (yasa vb.) uygulamak",
        "sentence":  "The president decided to invoke his emergency powers."
    },
    {
        "pos":  "Verb",
        "word":  "Involve",
        "translation":  "Dahil etmek, gerektirmek",
        "sentence":  "My work tasks involve managing alternative suppliers."
    },
    {
        "pos":  "Adjective",
        "word":  "Involved",
        "translation":  "İlişkili, dahil olmuş",
        "sentence":  "Many people were involved in the successful car financing project."
    },
    {
        "pos":  "Noun",
        "word":  "Involvement",
        "translation":  "Katılım, dahil olma",
        "sentence":  "The police are investigating his involvement in the crime."
    },
    {
        "pos":  "Noun",
        "word":  "Iron",
        "translation":  "Verb",
        "sentence":  "Demir"
    },
    {
        "pos":  "Adjective",
        "word":  "Ironic",
        "translation":  "İronik, alaycı",
        "sentence":  "It\u0027s ironic that the fire station burned down."
    },
    {
        "pos":  "Adverb",
        "word":  "Ironically",
        "translation":  "İronik bir şekilde",
        "sentence":  "Ironically, he failed the exam despite studying for weeks."
    },
    {
        "pos":  "Noun",
        "word":  "Irony",
        "translation":  "İroni",
        "sentence":  "The irony of the situation was not lost on anyone."
    },
    {
        "pos":  "Adjective",
        "word":  "Irrelevant",
        "translation":  "İlgisiz, alakasız",
        "sentence":  "His past mistakes are irrelevant to the current discussion."
    },
    {
        "pos":  "Noun",
        "word":  "Island",
        "translation":  "Ada",
        "sentence":  "There are several beautiful islands near the coast of İzmir."
    },
    {
        "pos":  "Verb",
        "word":  "Isolate",
        "translation":  "İzole etmek, ayırmak",
        "sentence":  "Scientists have managed to isolate the virus responsible for the disease."
    },
    {
        "pos":  "Adjective",
        "word":  "Isolated",
        "translation":  "İzole edilmiş, ıssız",
        "sentence":  "They live in an isolated farmhouse miles from the nearest town."
    },
    {
        "pos":  "Noun",
        "word":  "Isolation",
        "translation":  "İzolasyon, yalnızlık",
        "sentence":  "Many elderly people live in social isolation."
    },
    {
        "pos":  "Noun",
        "word":  "Issue",
        "translation":  "Verb",
        "sentence":  "Mesele"
    },
    {
        "pos":  "Noun",
        "word":  "IT",
        "translation":  "Bilgi Teknolojileri",
        "sentence":  "The IT department helped me set up my new laptop."
    },
    {
        "pos":  "Pronoun",
        "word":  "It",
        "translation":  "O (cansız",
        "sentence":  "hayvan)"
    },
    {
        "pos":  "Noun",
        "word":  "Item",
        "translation":  "Madde, eşya",
        "sentence":  "Each item on the sourcing list must be checked for price changes."
    },
    {
        "pos":  "Determiner",
        "word":  "Its",
        "translation":  "Onun (cansız)",
        "sentence":  "The company announced its annual revenue growth yesterday."
    },
    {
        "pos":  "Pronoun",
        "word":  "Itself",
        "translation":  "Kendisi (cansız)",
        "sentence":  "The system itself is very easy to use for cost calculations."
    },
    {
        "pos":  "Noun",
        "word":  "Jacket",
        "translation":  "Ceket",
        "sentence":  "I left my jacket in the meeting room after the sourcing discussion."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Jail",
        "translation":  "Hapishane / Hapsetmek",
        "sentence":  "He spent six months in jail for theft."
    },
    {
        "pos":  "Noun",
        "word":  "Jam",
        "translation":  "Reçel",
        "sentence":  "Sıkışıklık"
    },
    {
        "pos":  "Noun",
        "word":  "January",
        "translation":  "Ocak",
        "sentence":  "I started researching palladium market drivers in January."
    },
    {
        "pos":  "Noun",
        "word":  "Jazz",
        "translation":  "Caz",
        "sentence":  "I like to listen to jazz music while I work on my YouTube channel plans."
    },
    {
        "pos":  "Noun",
        "word":  "Jeans",
        "translation":  "Kot pantolon",
        "sentence":  "On Fridays, we are allowed to wear jeans to the office."
    },
    {
        "pos":  "Noun",
        "word":  "Jet",
        "translation":  "Jet, fıskiye",
        "sentence":  "We flew to Paris on a private jet."
    },
    {
        "pos":  "Noun",
        "word":  "Jewelry",
        "translation":  "Mücevher",
        "sentence":  "Gold is often used to make beautiful jewelry."
    },
    {
        "pos":  "Noun",
        "word":  "Job",
        "translation":  "İş",
        "sentence":  "My job as a strategic sourcing employee is very rewarding."
    },
    {
        "pos":  "Verb",
        "word":  "Join",
        "translation":  "Katılmak",
        "sentence":  "Would you like to join our team for the anniversary dinner?"
    },
    {
        "pos":  "Adjective / Noun",
        "word":  "Joint",
        "translation":  "Ortak / Eklem",
        "sentence":  "The two companies have issued a joint statement."
    },
    {
        "pos":  "Noun",
        "word":  "Joke",
        "translation":  "Verb",
        "sentence":  "Şaka"
    },
    {
        "pos":  "Noun",
        "word":  "Journal",
        "translation":  "Dergi, günlük",
        "sentence":  "I read an article in a financial journal about silver prices."
    },
    {
        "pos":  "Noun",
        "word":  "Journalism",
        "translation":  "Gazetecilik",
        "sentence":  "She is studying journalism at the University of Ankara."
    },
    {
        "pos":  "Noun",
        "word":  "Journalist",
        "translation":  "Gazeteci",
        "sentence":  "A journalist interviewed our CEO about the company\u0027s growth."
    },
    {
        "pos":  "Noun",
        "word":  "Journey",
        "translation":  "Yolculuk",
        "sentence":  "The journey from Istanbul to İzmir was quite long by car."
    },
    {
        "pos":  "Noun",
        "word":  "Joy",
        "translation":  "Neşe, sevinç",
        "sentence":  "The children\u0027s songs will bring joy to many families."
    },
    {
        "pos":  "Noun",
        "word":  "Judge",
        "translation":  "Verb",
        "sentence":  "Hakim"
    },
    {
        "pos":  "Noun",
        "word":  "Judgment",
        "translation":  "Karar, yargı",
        "sentence":  "You must use your best judgment when choosing alternative firms."
    },
    {
        "pos":  "Adjective",
        "word":  "Judicial",
        "translation":  "Adli, yargısal",
        "sentence":  "The judicial system in the country is undergoing major reforms."
    },
    {
        "pos":  "Noun",
        "word":  "Juice",
        "translation":  "Meyve suyu",
        "sentence":  "I ordered an orange juice at the airport café."
    },
    {
        "pos":  "Noun",
        "word":  "July",
        "translation":  "Temmuz",
        "sentence":  "We plan to launch the YouTube channel in July."
    },
    {
        "pos":  "Verb",
        "word":  "Jump",
        "translation":  "Noun",
        "sentence":  "Zıplamak"
    },
    {
        "pos":  "Noun",
        "word":  "June",
        "translation":  "Haziran",
        "sentence":  "My car financing plan should be finalized by June."
    },
    {
        "pos":  "Adjective",
        "word":  "Junior",
        "translation":  "Kıdemi düşük, genç",
        "sentence":  "A junior analyst will help me with the raw material data."
    },
    {
        "pos":  "Noun",
        "word":  "Jurisdiction",
        "translation":  "Yargı yetkisi, yetki alanı",
        "sentence":  "The case does not fall within the jurisdiction of this court."
    },
    {
        "pos":  "Noun",
        "word":  "Jury",
        "translation":  "Jüri",
        "sentence":  "The jury found the defendant guilty of all charges."
    },
    {
        "pos":  "Adjective",
        "word":  "Just",
        "translation":  "Adil, haklı",
        "sentence":  "It was a just decision based on all the available evidence."
    },
    {
        "pos":  "Adverb",
        "word":  "Just",
        "translation":  "Sadece, demin",
        "sentence":  "I have just finished calculating the total gold weight."
    },
    {
        "pos":  "Noun",
        "word":  "Justice",
        "translation":  "Adalet",
        "sentence":  "Environmental justice is an important topic in modern sourcing."
    },
    {
        "pos":  "Noun",
        "word":  "Justification",
        "translation":  "Gerekçe, savunma",
        "sentence":  "There is no justification for such violent behavior."
    },
    {
        "pos":  "Verb",
        "word":  "Justify",
        "translation":  "Haklı çıkarmak, gerekçelendirmek",
        "sentence":  "We need to justify the extra cost of the high-quality material."
    },
    {
        "pos":  "Adjective",
        "word":  "Keen",
        "translation":  "İstekli, keskin",
        "sentence":  "He is a keen amateur photographer in his spare time."
    },
    {
        "pos":  "Verb",
        "word":  "Keep",
        "translation":  "Tutmak, saklamak",
        "sentence":  "Please keep a record of all your cost-down studies."
    },
    {
        "pos":  "Noun",
        "word":  "Key",
        "translation":  "Adj.",
        "sentence":  "Anahtar"
    },
    {
        "pos":  "Noun",
        "word":  "Keyboard",
        "translation":  "Klavye",
        "sentence":  "I need a more ergonomic keyboard for my office desk."
    },
    {
        "pos":  "Verb",
        "word":  "Kick",
        "translation":  "Noun",
        "sentence":  "Tekmelemek"
    },
    {
        "pos":  "Noun",
        "word":  "Kid",
        "translation":  "Çocuk",
        "sentence":  "The kids will learn a lot from our educational YouTube channel."
    },
    {
        "pos":  "Verb",
        "word":  "Kidnap",
        "translation":  "Kaçırmak (insan)",
        "sentence":  "The terrorists tried to kidnap the diplomat\u0027s daughter."
    },
    {
        "pos":  "Noun",
        "word":  "Kidney",
        "translation":  "Böbrek",
        "sentence":  "He is waiting for a kidney transplant."
    },
    {
        "pos":  "Verb",
        "word":  "Kill",
        "translation":  "Öldürmek",
        "sentence":  "The recent price increase might kill our chances of saving money this month."
    },
    {
        "pos":  "Noun",
        "word":  "Killing",
        "translation":  "Öldürme",
        "sentence":  "(Sourcing bağlamında nadir kullanılır, genellikle suç haberlerinde geçer.)"
    },
    {
        "pos":  "Noun",
        "word":  "Kilometer",
        "translation":  "Kilometre",
        "sentence":  "The factory is located fifty kilometers away from İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Kind",
        "translation":  "Adj.",
        "sentence":  "Tür"
    },
    {
        "pos":  "Noun",
        "word":  "Kindergarten",
        "translation":  "Anaokulu",
        "sentence":  "My little sister started kindergarten this week."
    },
    {
        "pos":  "Noun",
        "word":  "King",
        "translation":  "Kral",
        "sentence":  "In the investment world, cash is often called \"king.\""
    },
    {
        "pos":  "Noun",
        "word":  "Kingdom",
        "translation":  "Krallık",
        "sentence":  "The United Kingdom consists of four different countries."
    },
    {
        "pos":  "Verb",
        "word":  "Kiss",
        "translation":  "Noun",
        "sentence":  "Öpmek"
    },
    {
        "pos":  "Noun",
        "word":  "Kit",
        "translation":  "Kit, takım, malzeme",
        "sentence":  "Do you have a first-aid kit in your car?"
    },
    {
        "pos":  "Noun",
        "word":  "Kitchen",
        "translation":  "Mutfak",
        "sentence":  "The office kitchen always has fresh coffee and tea."
    },
    {
        "pos":  "Noun",
        "word":  "Knee",
        "translation":  "Diz",
        "sentence":  "I hurt my knee while playing football last weekend."
    },
    {
        "pos":  "Noun",
        "word":  "Knife",
        "translation":  "Bıçak",
        "sentence":  "Be careful with that sharp knife in the kitchen."
    },
    {
        "pos":  "Verb",
        "word":  "Knock",
        "translation":  "Noun",
        "sentence":  "Vurmak, çalmak (kapı)"
    },
    {
        "pos":  "Verb",
        "word":  "Know",
        "translation":  "Bilmek",
        "sentence":  "I know that silver is a good long-term investment."
    },
    {
        "pos":  "Noun",
        "word":  "Knowledge",
        "translation":  "Bilgi",
        "sentence":  "Your knowledge of strategic sourcing terminology is impressive."
    },
    {
        "pos":  "Noun",
        "word":  "Lab",
        "translation":  "Laboratuvar",
        "sentence":  "The lab is testing the quality of the new material samples."
    },
    {
        "pos":  "Noun",
        "word":  "Label",
        "translation":  "Verb",
        "sentence":  "Etiket"
    },
    {
        "pos":  "Noun",
        "word":  "Labor",
        "translation":  "Emek, iş gücü",
        "sentence":  "Reducing labor costs is part of our general strategy."
    },
    {
        "pos":  "Noun",
        "word":  "Laboratory",
        "translation":  "Laboratuvar",
        "sentence":  "The raw materials are sent to an independent laboratory for analysis."
    },
    {
        "pos":  "Noun",
        "word":  "Lack",
        "translation":  "Verb",
        "sentence":  "Eksiklik"
    },
    {
        "pos":  "Noun",
        "word":  "Ladder",
        "translation":  "Merdiven",
        "sentence":  "He used a ladder to climb onto the roof."
    },
    {
        "pos":  "Noun",
        "word":  "Lady",
        "translation":  "Hanımefendi",
        "sentence":  "The lady at the bank helped me with my palladium account."
    },
    {
        "pos":  "Noun",
        "word":  "Lake",
        "translation":  "Göl",
        "sentence":  "We went for a walk around the lake near İzmir last Sunday."
    },
    {
        "pos":  "Noun",
        "word":  "Lamp",
        "translation":  "Lamba",
        "sentence":  "I need a brighter lamp for my study desk at home."
    },
    {
        "pos":  "Noun",
        "word":  "Land",
        "translation":  "Verb",
        "sentence":  "Kara, arazi"
    },
    {
        "pos":  "Noun",
        "word":  "Landing",
        "translation":  "İniş, sahanlık",
        "sentence":  "The pilot made a perfect landing despite the heavy wind."
    },
    {
        "pos":  "Noun",
        "word":  "Landlord",
        "translation":  "Ev sahibi (erkek)",
        "sentence":  "The landlord came to collect the rent this morning."
    },
    {
        "pos":  "Noun",
        "word":  "Landmark",
        "translation":  "İşaret, dönüm noktası, simge yapı",
        "sentence":  "The Eiffel Tower is the most famous landmark in Paris."
    },
    {
        "pos":  "Noun",
        "word":  "Landscape",
        "translation":  "Peyzaj, manzara",
        "sentence":  "The landscape of the industrial zone is changing rapidly."
    },
    {
        "pos":  "Noun",
        "word":  "Lane",
        "translation":  "Şerit, dar yol",
        "sentence":  "Please stay in your lane while you are driving."
    },
    {
        "pos":  "Noun",
        "word":  "Language",
        "translation":  "Dil",
        "sentence":  "Learning a new language like German opens up many opportunities."
    },
    {
        "pos":  "Noun",
        "word":  "Lap",
        "translation":  "Diz, tur",
        "sentence":  "The child sat on her mother\u0027s lap and listened to the story."
    },
    {
        "pos":  "Noun",
        "word":  "Laptop",
        "translation":  "Dizüstü bilgisayar",
        "sentence":  "I carry my laptop with me whenever I travel for work."
    },
    {
        "pos":  "Adjective",
        "word":  "Large",
        "translation":  "Büyük, geniş",
        "sentence":  "We placed a large order for silver bars this morning."
    },
    {
        "pos":  "Adjective",
        "word":  "Large-scale",
        "translation":  "Geniş çaplı",
        "sentence":  "The company is planning a large-scale recruitment drive."
    },
    {
        "pos":  "Adverb",
        "word":  "Largely",
        "translation":  "Büyük ölçüde",
        "sentence":  "Our success is largely due to our team\u0027s hard work."
    },
    {
        "pos":  "Noun",
        "word":  "Laser",
        "translation":  "Lazer",
        "sentence":  "The doctor used a laser to perform the eye surgery."
    },
    {
        "pos":  "Det.",
        "word":  "Last",
        "translation":  "Adv.",
        "sentence":  "V."
    },
    {
        "pos":  "Adj.",
        "word":  "Late",
        "translation":  "Adv.",
        "sentence":  "Geç"
    },
    {
        "pos":  "Adverb",
        "word":  "Lately",
        "translation":  "Son zamanlarda",
        "sentence":  "I haven\u0027t seen much of him lately."
    },
    {
        "pos":  "Adv.",
        "word":  "Later",
        "translation":  "Adj.",
        "sentence":  "Daha sonra"
    },
    {
        "pos":  "Adjective",
        "word":  "Latest",
        "translation":  "En son, en yeni",
        "sentence":  "Have you heard the latest news about the palladium market?"
    },
    {
        "pos":  "Adjective / Noun",
        "word":  "Latter",
        "translation":  "İkincisi (sonra gelen)",
        "sentence":  "Given the choice between tea and coffee, I prefer the latter."
    },
    {
        "pos":  "Verb",
        "word":  "Laugh",
        "translation":  "Noun",
        "sentence":  "Gülmek"
    },
    {
        "pos":  "Noun",
        "word":  "Laughter",
        "translation":  "Gülüş, kahkaha",
        "sentence":  "The house was filled with the laughter of children."
    },
    {
        "pos":  "Verb",
        "word":  "Launch",
        "translation":  "Noun",
        "sentence":  "Başlatmak"
    },
    {
        "pos":  "Noun",
        "word":  "Law",
        "translation":  "Kanun, hukuk",
        "sentence":  "You should consult a lawyer to understand the labor laws."
    },
    {
        "pos":  "Noun",
        "word":  "Lawmaker",
        "translation":  "Kanun koyucu, milletvekili",
        "sentence":  "Lawmakers are discussing a new bill to reduce carbon emissions."
    },
    {
        "pos":  "Noun",
        "word":  "Lawn",
        "translation":  "Çimenlik, bahçe",
        "sentence":  "He spends every Saturday morning mowing the lawn."
    },
    {
        "pos":  "Noun",
        "word":  "Lawsuit",
        "translation":  "Dava",
        "sentence":  "The company is facing a multi-million dollar lawsuit."
    },
    {
        "pos":  "Noun",
        "word":  "Lawyer",
        "translation":  "Avukat",
        "sentence":  "Our company lawyer is reviewing the supplier contract."
    },
    {
        "pos":  "Verb",
        "word":  "Lay",
        "translation":  "Sermek, koymak",
        "sentence":  "Please lay the materials on the flat surface for inspection."
    },
    {
        "pos":  "Noun",
        "word":  "Layer",
        "translation":  "Katman",
        "sentence":  "The silver bars are covered with a protective layer of plastic."
    },
    {
        "pos":  "Noun",
        "word":  "Layout",
        "translation":  "Düzen, mizanpaj",
        "sentence":  "I really like the layout of your new apartment."
    },
    {
        "pos":  "Adjective",
        "word":  "Lazy",
        "translation":  "Tembel",
        "sentence":  "Being lazy is not an option when you manage multiple suppliers."
    },
    {
        "pos":  "Verb",
        "word":  "Lead",
        "translation":  "Noun",
        "sentence":  "Liderlik etmek"
    },
    {
        "pos":  "Noun",
        "word":  "Leader",
        "translation":  "Lider",
        "sentence":  "Our department leader is very supportive of our initiatives."
    },
    {
        "pos":  "Noun",
        "word":  "Leadership",
        "translation":  "Liderlik",
        "sentence":  "Good leadership is essential for a successful sourcing team."
    },
    {
        "pos":  "Adjective",
        "word":  "Leading",
        "translation":  "Önde gelen",
        "sentence":  "We are talking to one of the leading suppliers in the market."
    },
    {
        "pos":  "Noun",
        "word":  "Leaf",
        "translation":  "Yaprak",
        "sentence":  "The trees in İzmir are losing their leaves as autumn begins."
    },
    {
        "pos":  "Noun",
        "word":  "League",
        "translation":  "Lig",
        "sentence":  "Beşiktaş is fighting for the top spot in the league."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Leak",
        "translation":  "Sızmak / Sızıntı",
        "sentence":  "There is a leak in the roof that needs to be fixed."
    },
    {
        "pos":  "Verb",
        "word":  "Lean",
        "translation":  "Yaslanmak, eğilmek",
        "sentence":  "Don\u0027t lean against the warehouse shelves; they might be unstable."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Leap",
        "translation":  "Atlamak / Atlayış",
        "sentence":  "He managed to leap over the fence."
    },
    {
        "pos":  "Verb",
        "word":  "Learn",
        "translation":  "Öğrenmek",
        "sentence":  "I want to learn more about automated social media tracking."
    },
    {
        "pos":  "Noun",
        "word":  "Learning",
        "translation":  "Öğrenme",
        "sentence":  "Constant learning is part of my professional development."
    },
    {
        "pos":  "Det.",
        "word":  "Least",
        "translation":  "Adv.",
        "sentence":  "En az"
    },
    {
        "pos":  "Noun",
        "word":  "Leather",
        "translation":  "Deri",
        "sentence":  "I bought a high-quality leather wallet with my last bonus."
    },
    {
        "pos":  "Verb",
        "word":  "Leave",
        "translation":  "Noun",
        "sentence":  "Ayrılmak, bırakmak"
    },
    {
        "pos":  "Noun",
        "word":  "Lecture",
        "translation":  "Verb",
        "sentence":  "Ders, konferans"
    },
    {
        "pos":  "Adj.",
        "word":  "Left",
        "translation":  "Adv.",
        "sentence":  "N."
    },
    {
        "pos":  "Noun",
        "word":  "Leg",
        "translation":  "Bacak",
        "sentence":  "I had a cramp in my leg after the long flight to İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Legacy",
        "translation":  "Miras (bırakılan şey)",
        "sentence":  "The president\u0027s greatest legacy was the reform of the education system."
    },
    {
        "pos":  "Adjective",
        "word":  "Legal",
        "translation":  "Yasal",
        "sentence":  "We must ensure all our sourcing activities are legal."
    },
    {
        "pos":  "Noun",
        "word":  "Legend",
        "translation":  "Efsane",
        "sentence":  "According to local legend, a ghost lives in the castle."
    },
    {
        "pos":  "Adjective",
        "word":  "Legendary",
        "translation":  "Efsanevi",
        "sentence":  "He is a legendary figure in the world of jazz music."
    },
    {
        "pos":  "Noun",
        "word":  "Legislation",
        "translation":  "Mevzuat, yasalar",
        "sentence":  "New legislation has been introduced to protect consumers."
    },
    {
        "pos":  "Adjective",
        "word":  "Legislative",
        "translation":  "Yasama ile ilgili",
        "sentence":  "The country\u0027s legislative body is the parliament."
    },
    {
        "pos":  "Noun",
        "word":  "Legislature",
        "translation":  "Yasama organı",
        "sentence":  "The proposal will be sent to the state legislature for approval."
    },
    {
        "pos":  "Adjective",
        "word":  "Legitimate",
        "translation":  "Meşru, yasal",
        "sentence":  "I have a legitimate reason for being late."
    },
    {
        "pos":  "Noun",
        "word":  "Leisure",
        "translation":  "Boş vakit",
        "sentence":  "In my leisure time, I enjoy researching match analysis."
    },
    {
        "pos":  "Noun",
        "word":  "Lemon",
        "translation":  "Limon",
        "sentence":  "I like to add some lemon to my tea in the morning."
    },
    {
        "pos":  "Verb",
        "word":  "Lend",
        "translation":  "Ödünç vermek",
        "sentence":  "Can you lend me your calculator for the gold weight calculation?"
    },
    {
        "pos":  "Noun",
        "word":  "Length",
        "translation":  "Uzunluk",
        "sentence":  "The length of the project is estimated to be six months."
    },
    {
        "pos":  "Adjective",
        "word":  "Lengthy",
        "translation":  "Uzun, sıkıcı derecede uzun",
        "sentence":  "The meeting was a lengthy and exhausting process."
    },
    {
        "pos":  "Noun",
        "word":  "Lens",
        "translation":  "Mercek, lens",
        "sentence":  "He bought a new lens for his camera."
    },
    {
        "pos":  "Adjective",
        "word":  "Lesbian",
        "translation":  "Lezbiyen",
        "sentence":  "She is a prominent advocate for lesbian and gay rights."
    },
    {
        "pos":  "Det.",
        "word":  "Less",
        "translation":  "Adv.",
        "sentence":  "Daha az"
    },
    {
        "pos":  "Adjective",
        "word":  "Lesser",
        "translation":  "Daha az, daha küçük",
        "sentence":  "He was convicted of a lesser offense and given a lighter sentence."
    },
    {
        "pos":  "Noun",
        "word":  "Lesson",
        "translation":  "Ders",
        "sentence":  "I take a German lesson twice a week after work."
    },
    {
        "pos":  "Verb",
        "word":  "Let",
        "translation":  "İzin vermek, bırakmak",
        "sentence":  "Let us focus on the most important work tasks first."
    },
    {
        "pos":  "Adjective",
        "word":  "Lethal",
        "translation":  "Ölümcül",
        "sentence":  "The snake\u0027s venom is extremely lethal to humans."
    },
    {
        "pos":  "Noun",
        "word":  "Letter",
        "translation":  "Mektup, harf",
        "sentence":  "I received an official letter regarding my five-year anniversary."
    },
    {
        "pos":  "Noun",
        "word":  "Level",
        "translation":  "Adj.",
        "sentence":  "V."
    },
    {
        "pos":  "Adjective",
        "word":  "Liable",
        "translation":  "Sorumlu, eğilimli",
        "sentence":  "The company is liable for any damage caused during the repairs."
    },
    {
        "pos":  "Adjective / Noun",
        "word":  "Liberal",
        "translation":  "Liberal, hoşgörülü",
        "sentence":  "He has very liberal views on social issues."
    },
    {
        "pos":  "Noun",
        "word":  "Liberation",
        "translation":  "Kurtuluş, özgürleşme",
        "sentence":  "The anniversary of the city\u0027s liberation is celebrated every year."
    },
    {
        "pos":  "Noun",
        "word":  "Liberty",
        "translation":  "Özgürlük, hürriyet",
        "sentence":  "The Statue of Liberty is a symbol of freedom."
    },
    {
        "pos":  "Noun",
        "word":  "Library",
        "translation":  "Kütüphane",
        "sentence":  "I found some great books on asset management at the library."
    },
    {
        "pos":  "Noun",
        "word":  "License",
        "translation":  "Lisans, ehliyet",
        "sentence":  "I need to renew my driver\u0027s license before I buy a new car."
    },
    {
        "pos":  "Verb",
        "word":  "Lie",
        "translation":  "Uzanmak, yalan söylemek",
        "sentence":  "(İki anlamı vardır: Uzanmak ve Yalan söylemek.)"
    },
    {
        "pos":  "Noun",
        "word":  "Life",
        "translation":  "Yaşam",
        "sentence":  "Moving to İzmir has significantly improved my quality of life."
    },
    {
        "pos":  "Adjective",
        "word":  "Lifelong",
        "translation":  "Ömür boyu süren",
        "sentence":  "It has been my lifelong ambition to travel around the world."
    },
    {
        "pos":  "Noun",
        "word":  "Lifestyle",
        "translation":  "Yaşam tarzı",
        "sentence":  "I prefer a simple and productive lifestyle."
    },
    {
        "pos":  "Noun",
        "word":  "Lifetime",
        "translation":  "Ömür boyu",
        "sentence":  "This is a once-in-a-lifetime opportunity."
    },
    {
        "pos":  "Verb",
        "word":  "Lift",
        "translation":  "Noun",
        "sentence":  "Kaldırmak"
    },
    {
        "pos":  "N.",
        "word":  "Light",
        "translation":  "Adj.",
        "sentence":  "V."
    },
    {
        "pos":  "Noun",
        "word":  "Lighting",
        "translation":  "Aydınlatma",
        "sentence":  "The lighting in the restaurant was very soft and romantic."
    },
    {
        "pos":  "Noun",
        "word":  "Likelihood",
        "translation":  "Olasılık",
        "sentence":  "There is a high likelihood that the project will be finished on time."
    },
    {
        "pos":  "Adjective",
        "word":  "Likely",
        "translation":  "Muhtemel",
        "sentence":  "It is likely that silver prices will continue to rise."
    },
    {
        "pos":  "Adverb",
        "word":  "Likewise",
        "translation":  "Aynı şekilde",
        "sentence":  "He is a very hard worker, and his colleagues are likewise dedicated."
    },
    {
        "pos":  "Noun",
        "word":  "Limb",
        "translation":  "Uzuv (kol/bacak)",
        "sentence":  "He lost a limb in a tragic industrial accident."
    },
    {
        "pos":  "Noun",
        "word":  "Limit",
        "translation":  "Verb",
        "sentence":  "Sınır"
    },
    {
        "pos":  "Noun",
        "word":  "Limitation",
        "translation":  "Sınırlama, kısıtlama",
        "sentence":  "Financial limitations prevented us from going on holiday."
    },
    {
        "pos":  "Adjective",
        "word":  "Limited",
        "translation":  "Sınırlı",
        "sentence":  "Our supply of alternative hammadde is limited at the moment."
    },
    {
        "pos":  "Noun",
        "word":  "Line",
        "translation":  "Verb",
        "sentence":  "Hat, çizgi"
    },
    {
        "pos":  "Adjective",
        "word":  "Linear",
        "translation":  "Doğrusal",
        "sentence":  "The movie doesn\u0027t follow a linear narrative structure."
    },
    {
        "pos":  "Noun",
        "word":  "Lineup",
        "translation":  "Sıralama, kadro",
        "sentence":  "The festival has a great lineup of bands this year."
    },
    {
        "pos":  "Verb",
        "word":  "Linger",
        "translation":  "Oyalanmak, beklemek, devam etmek",
        "sentence":  "The smell of perfume continued to linger in the room."
    },
    {
        "pos":  "Noun",
        "word":  "Link",
        "translation":  "Verb",
        "sentence":  "Bağlantı"
    },
    {
        "pos":  "Noun",
        "word":  "Lion",
        "translation":  "Aslan",
        "sentence":  "The lion is a popular character in many children\u0027s stories."
    },
    {
        "pos":  "Noun",
        "word":  "Lip",
        "translation":  "Dudak",
        "sentence":  "I use a lip balm during the cold winter months in Istanbul."
    },
    {
        "pos":  "Noun",
        "word":  "Liquid",
        "translation":  "Adj.",
        "sentence":  "Sıvı"
    },
    {
        "pos":  "Noun",
        "word":  "List",
        "translation":  "Verb",
        "sentence":  "Liste"
    },
    {
        "pos":  "Verb",
        "word":  "Listen",
        "translation":  "Dinlemek",
        "sentence":  "I like to listen to educational songs to improve my German."
    },
    {
        "pos":  "Noun",
        "word":  "Listener",
        "translation":  "Dinleyici",
        "sentence":  "The podcast for investors has many regular listeners."
    },
    {
        "pos":  "Noun",
        "word":  "Listing",
        "translation":  "Liste, ilan",
        "sentence":  "You can find a listing of all our current properties on our website."
    },
    {
        "pos":  "Noun",
        "word":  "Liter",
        "translation":  "Litre",
        "sentence":  "I need to buy two liters of milk."
    },
    {
        "pos":  "Noun",
        "word":  "Literacy",
        "translation":  "Okuryazarlık",
        "sentence":  "The government is trying to improve adult literacy rates."
    },
    {
        "pos":  "Adverb",
        "word":  "Literally",
        "translation":  "Kelimenin tam anlamıyla",
        "sentence":  "There were literally hundreds of people at the party."
    },
    {
        "pos":  "Adjective",
        "word":  "Literary",
        "translation":  "Edebi",
        "sentence":  "She is a well-known figure in the London literary world."
    },
    {
        "pos":  "Noun",
        "word":  "Literature",
        "translation":  "Edebiyat",
        "sentence":  "I enjoy reading classical literature in my free time."
    },
    {
        "pos":  "Noun",
        "word":  "Litter",
        "translation":  "Çöp (yere atılan)",
        "sentence":  "Please don\u0027t drop litter on the street."
    },
    {
        "pos":  "Adj.",
        "word":  "Little",
        "translation":  "Det.",
        "sentence":  "Küçük, az"
    },
    {
        "pos":  "Verb",
        "word":  "Live",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Adjective",
        "word":  "Lively",
        "translation":  "Canlı, hareketli",
        "sentence":  "The atmosphere at the company anniversary was very lively."
    },
    {
        "pos":  "Noun",
        "word":  "Liver",
        "translation":  "Karaciğer",
        "sentence":  "The liver is a vital organ that filters toxins from the blood."
    },
    {
        "pos":  "Adj.",
        "word":  "Living",
        "translation":  "Noun",
        "sentence":  "Yaşayan"
    },
    {
        "pos":  "Noun",
        "word":  "Load",
        "translation":  "Verb",
        "sentence":  "Yük"
    },
    {
        "pos":  "Noun",
        "word":  "Loan",
        "translation":  "Borç, kredi",
        "sentence":  "I am comparing different car loans from various banks."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Lobby",
        "translation":  "Lobi, kulis yapmak",
        "sentence":  "Groups are trying to lobby the government for better environmental laws."
    },
    {
        "pos":  "Adjective",
        "word":  "Local",
        "translation":  "Noun",
        "sentence":  "Yerel"
    },
    {
        "pos":  "Verb",
        "word":  "Locate",
        "translation":  "Yerini belirlemek",
        "sentence":  "We need to locate a new supplier for alternative materials."
    },
    {
        "pos":  "Adjective",
        "word":  "Located",
        "translation":  "Yerleşik, bulunan",
        "sentence":  "Our company is located in a strategic industrial zone."
    },
    {
        "pos":  "Noun",
        "word":  "Location",
        "translation":  "Konum, yer",
        "sentence":  "The location of the factory is very convenient for logistics."
    },
    {
        "pos":  "Verb",
        "word":  "Lock",
        "translation":  "Noun",
        "sentence":  "Kilitlemek"
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Log",
        "translation":  "Kütük, kayıt / Kaydetmek",
        "sentence":  "The captain kept a detailed log of the ship\u0027s journey."
    },
    {
        "pos":  "Noun",
        "word":  "Logic",
        "translation":  "Mantık",
        "sentence":  "I fail to see the logic behind your decision."
    },
    {
        "pos":  "Adjective",
        "word":  "Logical",
        "translation":  "Mantıklı",
        "sentence":  "It is logical to look for alternatives when prices are rising."
    },
    {
        "pos":  "Noun",
        "word":  "Logo",
        "translation":  "Logo, amblem",
        "sentence":  "The company\u0027s logo is recognized all over the world."
    },
    {
        "pos":  "Adjective",
        "word":  "Lonely",
        "translation":  "Yalnız",
        "sentence":  "Working from home can sometimes feel a bit lonely."
    },
    {
        "pos":  "Adj.",
        "word":  "Long",
        "translation":  "Adv.",
        "sentence":  "Uzun"
    },
    {
        "pos":  "Adjective",
        "word":  "Long-standing",
        "translation":  "Uzun süreli, köklü",
        "sentence":  "The two countries have a long-standing friendship."
    },
    {
        "pos":  "Adj.",
        "word":  "Long-term",
        "translation":  "Adv.",
        "sentence":  "Uzun vadeli"
    },
    {
        "pos":  "Adjective",
        "word":  "Longtime",
        "translation":  "Uzun süreli, eski",
        "sentence":  "He is a longtime supporter of the local football team."
    },
    {
        "pos":  "Verb",
        "word":  "Look",
        "translation":  "Noun",
        "sentence":  "Bakmak"
    },
    {
        "pos":  "Verb",
        "word":  "Loom",
        "translation":  "Belirmek (tehditvari), dokuma tezgahı",
        "sentence":  "A major economic crisis is beginning to loom on the horizon."
    },
    {
        "pos":  "Noun",
        "word":  "Loop",
        "translation":  "Döngü, ilmek",
        "sentence":  "The computer program got stuck in an endless loop."
    },
    {
        "pos":  "Adjective",
        "word":  "Loose",
        "translation":  "Gevşek, bol",
        "sentence":  "One of the screws on the machine is loose and needs tightening."
    },
    {
        "pos":  "Noun",
        "word":  "Lord",
        "translation":  "Efendi, lord",
        "sentence":  "(Genelde tarihi veya edebi metinlerde geçer.)"
    },
    {
        "pos":  "Verb",
        "word":  "Lose",
        "translation":  "Kaybetmek",
        "sentence":  "We don\u0027t want to lose our competitive advantage in the market."
    },
    {
        "pos":  "Noun",
        "word":  "Loss",
        "translation":  "Kayıp, zarar",
        "sentence":  "The firm reported a small loss due to rising energy costs."
    },
    {
        "pos":  "Adjective",
        "word":  "Lost",
        "translation":  "Kayıp",
        "sentence":  "I thought I had lost my keys at the airport, but they were in my bag."
    },
    {
        "pos":  "Pron.",
        "word":  "Lot",
        "translation":  "Det.",
        "sentence":  "Çok, çok fazla"
    },
    {
        "pos":  "Noun",
        "word":  "Lottery",
        "translation":  "Piyango",
        "sentence":  "He won a million dollars in the national lottery."
    },
    {
        "pos":  "Adj.",
        "word":  "Loud",
        "translation":  "Adv.",
        "sentence":  "Yüksek sesli"
    },
    {
        "pos":  "Adverb",
        "word":  "Loudly",
        "translation":  "Yüksek sesle",
        "sentence":  "Please don\u0027t speak loudly in the office during working hours."
    },
    {
        "pos":  "Noun",
        "word":  "Love",
        "translation":  "Verb",
        "sentence":  "Aşk, sevgi"
    },
    {
        "pos":  "Adj.",
        "word":  "Low",
        "translation":  "Adv.",
        "sentence":  "N."
    },
    {
        "pos":  "Verb",
        "word":  "Lower",
        "translation":  "Düşürmek, indirmek",
        "sentence":  "We managed to lower the price of the raw material by 5%."
    },
    {
        "pos":  "Adjective",
        "word":  "Loyal",
        "translation":  "Sadık",
        "sentence":  "She has been a loyal employee for over twenty years."
    },
    {
        "pos":  "Noun",
        "word":  "Loyalty",
        "translation":  "Sadakat",
        "sentence":  "Customer loyalty is essential for the success of any business."
    },
    {
        "pos":  "Noun",
        "word":  "Luck",
        "translation":  "Şans",
        "sentence":  "I wish you the best of luck with your new YouTube channel!"
    },
    {
        "pos":  "Adjective",
        "word":  "Lucky",
        "translation":  "Şanslı",
        "sentence":  "I feel lucky to have such a supportive team at work."
    },
    {
        "pos":  "Noun",
        "word":  "Lunch",
        "translation":  "Öğle yemeği",
        "sentence":  "Let\u0027s discuss the car financing options over lunch."
    },
    {
        "pos":  "Noun",
        "word":  "Lung",
        "translation":  "Akciğer",
        "sentence":  "Fresh air in İzmir is very good for your lungs."
    },
    {
        "pos":  "Noun",
        "word":  "Luxury",
        "translation":  "Lüks",
        "sentence":  "Investing in palladium was a luxury I could finally afford."
    },
    {
        "pos":  "Noun",
        "word":  "Lyric",
        "translation":  "Şarkı sözü",
        "sentence":  "I really like the lyrics of this new song."
    },
    {
        "pos":  "Noun",
        "word":  "Machine",
        "translation":  "Makine",
        "sentence":  "The new machine in the factory is very efficient."
    },
    {
        "pos":  "Noun",
        "word":  "Machinery",
        "translation":  "Makine aksamı, mekanizma",
        "sentence":  "The factory has installed new high-tech machinery."
    },
    {
        "pos":  "Adjective",
        "word":  "Mad",
        "translation":  "Kızgın, deli",
        "sentence":  "My boss was mad because of the delay in the sourcing report."
    },
    {
        "pos":  "Noun",
        "word":  "Magazine",
        "translation":  "Dergi",
        "sentence":  "I saw an ad for a new car in a lifestyle magazine."
    },
    {
        "pos":  "Noun",
        "word":  "Magic",
        "translation":  "Adj.",
        "sentence":  "Sihir"
    },
    {
        "pos":  "Adjective",
        "word":  "Magical",
        "translation":  "Büyülü, sihirli",
        "sentence":  "We spent a magical evening under the stars."
    },
    {
        "pos":  "Adjective",
        "word":  "Magnetic",
        "translation":  "Manyetik",
        "sentence":  "The Earth\u0027s magnetic field protects us from solar radiation."
    },
    {
        "pos":  "Adjective",
        "word":  "Magnificent",
        "translation":  "Görkemli, muhteşem",
        "sentence":  "The view from the top of the mountain was magnificent."
    },
    {
        "pos":  "Noun",
        "word":  "Magnitude",
        "translation":  "Büyüklük, şiddet",
        "sentence":  "We didn\u0027t realize the magnitude of the problem at first."
    },
    {
        "pos":  "Noun",
        "word":  "Mail",
        "translation":  "Verb",
        "sentence":  "Posta"
    },
    {
        "pos":  "Adjective",
        "word":  "Main",
        "translation":  "Ana, temel",
        "sentence":  "The main reason for the cost increase is the price of palladium."
    },
    {
        "pos":  "Noun",
        "word":  "Mainland",
        "translation":  "Anakara",
        "sentence":  "The ferry takes about an hour to reach the mainland."
    },
    {
        "pos":  "Adverb",
        "word":  "Mainly",
        "translation":  "Esas olarak",
        "sentence":  "I am mainly focused on alternative raw materials this month."
    },
    {
        "pos":  "Noun / Adjective",
        "word":  "Mainstream",
        "translation":  "Ana akım",
        "sentence":  "His views are quite different from mainstream political thought."
    },
    {
        "pos":  "Verb",
        "word":  "Maintain",
        "translation":  "Korumak, sürdürmek",
        "sentence":  "We must maintain high quality standards for all our products."
    },
    {
        "pos":  "Noun",
        "word":  "Maintenance",
        "translation":  "Bakım, onarım",
        "sentence":  "Regular maintenance is necessary to keep the car running well."
    },
    {
        "pos":  "Adj.",
        "word":  "Major",
        "translation":  "Noun",
        "sentence":  "Büyük, önemli"
    },
    {
        "pos":  "Noun",
        "word":  "Majority",
        "translation":  "Çoğunluk",
        "sentence":  "The majority of our suppliers are located in Germany."
    },
    {
        "pos":  "Verb",
        "word":  "Make",
        "translation":  "Noun",
        "sentence":  "Yapmak"
    },
    {
        "pos":  "Noun",
        "word":  "Makeup",
        "translation":  "Makyaj, yapı, oluşum",
        "sentence":  "She never goes out without wearing her makeup."
    },
    {
        "pos":  "Noun",
        "word":  "Making",
        "translation":  "Yapım, oluşum",
        "sentence":  "This film was three years in the making."
    },
    {
        "pos":  "Adj.",
        "word":  "Male",
        "translation":  "Noun",
        "sentence":  "Erkek"
    },
    {
        "pos":  "Noun",
        "word":  "Mall",
        "translation":  "Alışveriş merkezi",
        "sentence":  "I went to the mall in İzmir to buy some new office clothes."
    },
    {
        "pos":  "Noun",
        "word":  "Man",
        "translation":  "Adam",
        "sentence":  "The man in charge of logistics is very experienced."
    },
    {
        "pos":  "Verb",
        "word":  "Manage",
        "translation":  "Yönetmek",
        "sentence":  "I manage several alternative firms to ensure the best prices."
    },
    {
        "pos":  "Noun",
        "word":  "Management",
        "translation":  "Yönetim",
        "sentence":  "The management approved my proposal for cost reduction."
    },
    {
        "pos":  "Noun",
        "word":  "Manager",
        "translation":  "Müdür, yönetici",
        "sentence":  "My manager is very happy with my five-year performance."
    },
    {
        "pos":  "Noun",
        "word":  "Mandate",
        "translation":  "Yetki, manda, görevlendirme",
        "sentence":  "The government has a clear mandate to reform the tax system."
    },
    {
        "pos":  "Adjective",
        "word":  "Mandatory",
        "translation":  "Zorunlu",
        "sentence":  "It is mandatory for all international passengers to show their passports."
    },
    {
        "pos":  "Verb",
        "word":  "Manifest",
        "translation":  "Göstermek, belli etmek",
        "sentence":  "The symptoms of the disease may manifest themselves later."
    },
    {
        "pos":  "Verb",
        "word":  "Manipulate",
        "translation":  "Manipüle etmek, yönlendirmek",
        "sentence":  "He was accused of trying to manipulate the stock market."
    },
    {
        "pos":  "Noun",
        "word":  "Manipulation",
        "translation":  "Manipülasyon, hileli yönlendirme",
        "sentence":  "The politician was master of media manipulation."
    },
    {
        "pos":  "Noun",
        "word":  "Manner",
        "translation":  "Biçim, tavır",
        "sentence":  "He explained the new strategy in a very professional manner."
    },
    {
        "pos":  "Verb",
        "word":  "Manufacture",
        "translation":  "Üretmek, imal etmek",
        "sentence":  "The company plans to manufacture the new cars in Turkey."
    },
    {
        "pos":  "Noun",
        "word":  "Manufacturing",
        "translation":  "İmalat, üretim sektörü",
        "sentence":  "Many jobs have been lost in the manufacturing industry."
    },
    {
        "pos":  "Noun",
        "word":  "Manuscript",
        "translation":  "El yazması",
        "sentence":  "The original manuscript of the book was found in a library."
    },
    {
        "pos":  "Det.",
        "word":  "Many",
        "translation":  "Pron.",
        "sentence":  "Birçok"
    },
    {
        "pos":  "Noun",
        "word":  "Map",
        "translation":  "Verb",
        "sentence":  "Harita"
    },
    {
        "pos":  "Noun",
        "word":  "Marathon",
        "translation":  "Maraton",
        "sentence":  "He ran his first marathon in under four hours."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "March",
        "translation":  "Marş, yürüyüş / Yürümek",
        "sentence":  "Thousands of people joined the march for peace."
    },
    {
        "pos":  "Noun",
        "word":  "March",
        "translation":  "Mart",
        "sentence":  "The flight cancellation happened in March 2026."
    },
    {
        "pos":  "Noun",
        "word":  "Margin",
        "translation":  "Kenar boşluğu, kar marjı",
        "sentence":  "The company is operating on a very small profit margin."
    },
    {
        "pos":  "Adjective",
        "word":  "Marginal",
        "translation":  "Marjinal, önemsiz, sınırda",
        "sentence":  "The changes had only a marginal effect on the final outcome."
    },
    {
        "pos":  "Adjective",
        "word":  "Marine",
        "translation":  "Denizle ilgili, bahri",
        "sentence":  "The biologist is studying marine life in the Mediterranean."
    },
    {
        "pos":  "Verb",
        "word":  "Mark",
        "translation":  "Noun",
        "sentence":  "İşaretlemek"
    },
    {
        "pos":  "Noun",
        "word":  "Marker",
        "translation":  "İşaretleyici, keçeli kalem",
        "sentence":  "Use a red marker to highlight the important dates."
    },
    {
        "pos":  "Noun",
        "word":  "Market",
        "translation":  "Verb",
        "sentence":  "Piyasa, pazar"
    },
    {
        "pos":  "Noun",
        "word":  "Marketing",
        "translation":  "Pazarlama",
        "sentence":  "I am learning about digital marketing for my YouTube channel."
    },
    {
        "pos":  "Noun",
        "word":  "Marketplace",
        "translation":  "Pazar yeri, piyasa",
        "sentence":  "In today\u0027s global marketplace, competition is very fierce."
    },
    {
        "pos":  "Noun",
        "word":  "Marriage",
        "translation":  "Evlilik",
        "sentence":  "They celebrated their tenth marriage anniversary in İzmir."
    },
    {
        "pos":  "Adjective",
        "word":  "Married",
        "translation":  "Evli",
        "sentence":  "Most of my colleagues in the department are married."
    },
    {
        "pos":  "Verb",
        "word":  "Marry",
        "translation":  "Evlenmek",
        "sentence":  "My friend from work is planning to marry his girlfriend next year."
    },
    {
        "pos":  "Adjective",
        "word":  "Martial",
        "translation":  "Askeri, savaşla ilgili",
        "sentence":  "Karate and judo are popular martial arts."
    },
    {
        "pos":  "Noun",
        "word":  "Mask",
        "translation":  "Maske",
        "sentence":  "You are required to wear a mask inside the hospital."
    },
    {
        "pos":  "N.",
        "word":  "Mass",
        "translation":  "Adj.",
        "sentence":  "Kütle, kitle"
    },
    {
        "pos":  "Noun",
        "word":  "Massacre",
        "translation":  "Katliam",
        "sentence":  "The news of the massacre shocked the whole world."
    },
    {
        "pos":  "Adjective",
        "word":  "Massive",
        "translation":  "Muazzam, devasa",
        "sentence":  "The transition to alternative materials saved us a massive amount."
    },
    {
        "pos":  "Noun",
        "word":  "Master",
        "translation":  "Verb",
        "sentence":  "Efendi, usta"
    },
    {
        "pos":  "N.",
        "word":  "Match",
        "translation":  "V.",
        "sentence":  "Maç, eşleşme"
    },
    {
        "pos":  "Adjective",
        "word":  "Matching",
        "translation":  "Eşleşen, uyumlu",
        "sentence":  "I found some matching accessories for my new office outfit."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Mate",
        "translation":  "Eş, arkadaş / Çiftleşmek",
        "sentence":  "He’s been my best mate since we were at school."
    },
    {
        "pos":  "Noun",
        "word":  "Material",
        "translation":  "Adj.",
        "sentence":  "Malzeme"
    },
    {
        "pos":  "Noun",
        "word":  "Math",
        "translation":  "Matematik",
        "sentence":  "I use math every day to calculate costs and gold weights."
    },
    {
        "pos":  "Adjective",
        "word":  "Mathematical",
        "translation":  "Matematiksel",
        "sentence":  "He solved the problem using a complex mathematical formula."
    },
    {
        "pos":  "Noun",
        "word":  "Mathematics",
        "translation":  "Matematik",
        "sentence":  "A strong background in mathematics is helpful for financial analysis."
    },
    {
        "pos":  "Noun",
        "word":  "Matter",
        "translation":  "Verb",
        "sentence":  "Mesele"
    },
    {
        "pos":  "Adjective / Verb",
        "word":  "Mature",
        "translation":  "Olgun / Olgunlaşmak",
        "sentence":  "She is very mature for her age."
    },
    {
        "pos":  "Verb",
        "word":  "Maximize",
        "translation":  "Maksimize etmek, en üst düzeye çıkarmak",
        "sentence":  "We need to maximize our resources to finish on time."
    },
    {
        "pos":  "Adj.",
        "word":  "Maximum",
        "translation":  "Noun",
        "sentence":  "Maksimum"
    },
    {
        "pos":  "Noun",
        "word":  "May",
        "translation":  "Mayıs",
        "sentence":  "We will start our summer vacation in May."
    },
    {
        "pos":  "Modal Verb",
        "word":  "May",
        "translation":  "-ebilir (olasılık",
        "sentence":  "izin)"
    },
    {
        "pos":  "Adverb",
        "word":  "Maybe",
        "translation":  "Belki",
        "sentence":  "Maybe we should consider silver instead of gold this month."
    },
    {
        "pos":  "Noun",
        "word":  "Mayor",
        "translation":  "Belediye Başkanı",
        "sentence":  "The mayor of İzmir announced a new transportation project."
    },
    {
        "pos":  "Pronoun",
        "word":  "Me",
        "translation":  "Beni, bana",
        "sentence":  "Could you please send me the silver price analysis?"
    },
    {
        "pos":  "Noun",
        "word":  "Meal",
        "translation":  "Öğün, yemek",
        "sentence":  "I usually have a light meal before the afternoon meeting."
    },
    {
        "pos":  "Verb",
        "word":  "Mean",
        "translation":  "Anlamına gelmek",
        "sentence":  "What does this professional term mean in English?"
    },
    {
        "pos":  "Noun",
        "word":  "Meaning",
        "translation":  "Anlam",
        "sentence":  "Understanding the meaning of market drivers is essential."
    },
    {
        "pos":  "Adjective",
        "word":  "Meaningful",
        "translation":  "Anlamlı",
        "sentence":  "He wanted to have a more meaningful career in education."
    },
    {
        "pos":  "Noun",
        "word":  "Means",
        "translation":  "Yol, araç",
        "sentence":  "Investing in precious metals is a means to build wealth."
    },
    {
        "pos":  "Noun",
        "word":  "Meantime",
        "translation":  "Bu arada, o zamana kadar",
        "sentence":  "The doctor will be here soon; in the meantime, please wait here."
    },
    {
        "pos":  "Adverb",
        "word":  "Meanwhile",
        "translation":  "Bu sırada",
        "sentence":  "I am working on the report; meanwhile, the team is testing the samples."
    },
    {
        "pos":  "Verb",
        "word":  "Measure",
        "translation":  "Noun",
        "sentence":  "Ölçmek"
    },
    {
        "pos":  "Noun",
        "word":  "Measurement",
        "translation":  "Ölçüm",
        "sentence":  "Accurate measurement of the gold is crucial for its value."
    },
    {
        "pos":  "Noun",
        "word":  "Meat",
        "translation":  "Et",
        "sentence":  "I prefer eating grilled meat with a side of fresh vegetables."
    },
    {
        "pos":  "Noun",
        "word":  "Mechanic",
        "translation":  "Tamirci, teknisyen",
        "sentence":  "I took my car to the mechanic to fix the brakes."
    },
    {
        "pos":  "Adjective",
        "word":  "Mechanical",
        "translation":  "Mekanik",
        "sentence":  "The breakdown was caused by a mechanical failure."
    },
    {
        "pos":  "Noun",
        "word":  "Mechanism",
        "translation":  "Mekanizma",
        "sentence":  "The watch has a very delicate internal mechanism."
    },
    {
        "pos":  "Noun",
        "word":  "Medal",
        "translation":  "Madalya",
        "sentence":  "She won a gold medal in the 100-meter race."
    },
    {
        "pos":  "Noun",
        "word":  "Media",
        "translation":  "Medya",
        "sentence":  "Social media automation is one of my personal interests."
    },
    {
        "pos":  "Adjective",
        "word":  "Medical",
        "translation":  "Tıbbi",
        "sentence":  "He had to leave the office for a medical check-up."
    },
    {
        "pos":  "Noun",
        "word":  "Medication",
        "translation":  "İlaç, tıbbi tedavi",
        "sentence":  "He is taking medication for high blood pressure."
    },
    {
        "pos":  "Noun",
        "word":  "Medicine",
        "translation":  "İlaç, tıp",
        "sentence":  "I need to take my medicine after lunch."
    },
    {
        "pos":  "Adjective",
        "word":  "Medieval",
        "translation":  "Orta Çağ\u0027a ait",
        "sentence":  "The city is famous for its beautiful medieval architecture."
    },
    {
        "pos":  "Noun",
        "word":  "Meditation",
        "translation":  "Meditasyon",
        "sentence":  "She practices meditation every morning to reduce stress."
    },
    {
        "pos":  "Adj.",
        "word":  "Medium",
        "translation":  "Noun",
        "sentence":  "Orta"
    },
    {
        "pos":  "Verb",
        "word":  "Meet",
        "translation":  "Buluşmak, karşılamak",
        "sentence":  "I will meet the alternative firm\u0027s representative tomorrow."
    },
    {
        "pos":  "Noun",
        "word":  "Meeting",
        "translation":  "Toplantı",
        "sentence":  "The sourcing meeting lasted much longer than expected."
    },
    {
        "pos":  "Noun",
        "word":  "Melody",
        "translation":  "Melodi",
        "sentence":  "The song has a very simple and catchy melody."
    },
    {
        "pos":  "Verb",
        "word":  "Melt",
        "translation":  "Erimek",
        "sentence":  "High temperatures will cause the metal to melt."
    },
    {
        "pos":  "Noun",
        "word":  "Member",
        "translation":  "Üye",
        "sentence":  "I have been a member of this team for five years."
    },
    {
        "pos":  "Noun",
        "word":  "Membership",
        "translation":  "Üyelik",
        "sentence":  "You can apply for gym membership online."
    },
    {
        "pos":  "Noun",
        "word":  "Memo",
        "translation":  "Not, muhtıra, kısa mesaj",
        "sentence":  "The manager sent a memo to all staff about the meeting."
    },
    {
        "pos":  "Noun",
        "word":  "Memoir",
        "translation":  "Otobiyografi, anı kitabı",
        "sentence":  "The former president is writing his memoirs."
    },
    {
        "pos":  "Adjective",
        "word":  "Memorable",
        "translation":  "Unutulmaz",
        "sentence":  "It was a truly memorable performance by the young actor."
    },
    {
        "pos":  "Noun",
        "word":  "Memorial",
        "translation":  "Anıt",
        "sentence":  "A memorial was built to honor the soldiers who died in the war."
    },
    {
        "pos":  "Noun",
        "word":  "Memory",
        "translation":  "Hafıza, anı",
        "sentence":  "I have a great memory for football match statistics."
    },
    {
        "pos":  "Adjective",
        "word":  "Mental",
        "translation":  "Zihinsel",
        "sentence":  "Strategic thinking requires a lot of mental effort."
    },
    {
        "pos":  "Verb",
        "word":  "Mention",
        "translation":  "Noun",
        "sentence":  "Bahsetmek"
    },
    {
        "pos":  "Noun",
        "word":  "Mentor",
        "translation":  "Akıl hocası, rehber",
        "sentence":  "He acted as a mentor to the new employees in the firm."
    },
    {
        "pos":  "Noun",
        "word":  "Menu",
        "translation":  "Menü",
        "sentence":  "Let\u0027s look at the menu and decide what to eat for dinner."
    },
    {
        "pos":  "Noun",
        "word":  "Merchant",
        "translation":  "Tüccar",
        "sentence":  "The wealthy merchant owned several shops in the city."
    },
    {
        "pos":  "Noun",
        "word":  "Mercy",
        "translation":  "Merhamet",
        "sentence":  "The prisoner begged the judge for mercy."
    },
    {
        "pos":  "Adjective",
        "word":  "Mere",
        "translation":  "Sadece, sırf",
        "sentence":  "The mere thought of flying makes her feel nervous."
    },
    {
        "pos":  "Adverb",
        "word":  "Merely",
        "translation":  "Sadece, yalnızca",
        "sentence":  "I\u0027m not complaining; I\u0027m merely stating the facts."
    },
    {
        "pos":  "Verb",
        "word":  "Merge",
        "translation":  "Birleşmek, birleştirmek",
        "sentence":  "The two small banks decided to merge into one large entity."
    },
    {
        "pos":  "Noun",
        "word":  "Merger",
        "translation":  "Birleşme (şirket vb.)",
        "sentence":  "The merger of the two companies will create a global leader."
    },
    {
        "pos":  "Noun",
        "word":  "Merit",
        "translation":  "Erdem, liyakat, değer",
        "sentence":  "Success should be based on merit, not on who you know."
    },
    {
        "pos":  "Noun",
        "word":  "Mess",
        "translation":  "Verb",
        "sentence":  "Dağınıklık"
    },
    {
        "pos":  "Noun",
        "word":  "Message",
        "translation":  "Mesaj",
        "sentence":  "I sent a message to the airline about my canceled flight."
    },
    {
        "pos":  "Noun",
        "word":  "Metal",
        "translation":  "Metal",
        "sentence":  "Silver, gold, and palladium are all precious metals."
    },
    {
        "pos":  "Noun",
        "word":  "Metaphor",
        "translation":  "Metafor, mecaz",
        "sentence":  "\"The world is a stage\" is a famous metaphor by Shakespeare."
    },
    {
        "pos":  "Noun",
        "word":  "Meter",
        "translation":  "Metre",
        "sentence":  "The storage room is five meters wide and ten meters long."
    },
    {
        "pos":  "Noun",
        "word":  "Method",
        "translation":  "Yöntem",
        "sentence":  "We need a more efficient method for cost tracking."
    },
    {
        "pos":  "Noun",
        "word":  "Methodology",
        "translation":  "Metodoloji, yöntem bilimi",
        "sentence":  "The researchers explained the methodology used in their study."
    },
    {
        "pos":  "Noun",
        "word":  "Middle",
        "translation":  "Adj.",
        "sentence":  "Orta"
    },
    {
        "pos":  "Noun",
        "word":  "Midnight",
        "translation":  "Gece yarısı",
        "sentence":  "I stayed up until midnight to finish the sourcing report."
    },
    {
        "pos":  "Noun",
        "word":  "Midst",
        "translation":  "Ortasında",
        "sentence":  "He found himself in the midst of a heated argument."
    },
    {
        "pos":  "Modal V.",
        "word":  "Might",
        "translation":  "-ebilir, -abilir (olasılık)",
        "sentence":  "Silver prices might continue to rise due to industrial demand."
    },
    {
        "pos":  "Noun",
        "word":  "Migration",
        "translation":  "Göç",
        "sentence":  "The seasonal migration of birds is a fascinating phenomenon."
    },
    {
        "pos":  "Adjective",
        "word":  "Mild",
        "translation":  "Hafif, yumuşak",
        "sentence":  "The weather in İzmir is quite mild compared to Istanbul."
    },
    {
        "pos":  "Noun",
        "word":  "Mile",
        "translation":  "Mil",
        "sentence":  "The factory is just a few miles away from the city center."
    },
    {
        "pos":  "Noun / Adjective",
        "word":  "Militant",
        "translation":  "Militan, kavgacı",
        "sentence":  "The group is known for its militant approach to environmental issues."
    },
    {
        "pos":  "Adj.",
        "word":  "Military",
        "translation":  "Noun",
        "sentence":  "Askeri"
    },
    {
        "pos":  "Noun",
        "word":  "Militia",
        "translation":  "Milis gücü",
        "sentence":  "The local militia was formed to protect the town."
    },
    {
        "pos":  "Noun",
        "word":  "Milk",
        "translation":  "Süt",
        "sentence":  "I usually drink a glass of milk before going to bed."
    },
    {
        "pos":  "Noun",
        "word":  "Mill",
        "translation":  "Değirmen, imalathane",
        "sentence":  "My grandfather used to work in a cotton mill."
    },
    {
        "pos":  "Number",
        "word":  "Million",
        "translation":  "Milyon",
        "sentence":  "The company saved one million dollars through the cost-down project."
    },
    {
        "pos":  "Noun",
        "word":  "Mind",
        "translation":  "Verb",
        "sentence":  "Zihin"
    },
    {
        "pos":  "Pronoun",
        "word":  "Mine",
        "translation":  "Benimki",
        "sentence":  "This evaluation report is mine, and that one is yours."
    },
    {
        "pos":  "Noun",
        "word":  "Mine",
        "translation":  "Maden",
        "sentence":  "Palladium is extracted from deep mines in South Africa and Russia."
    },
    {
        "pos":  "Noun",
        "word":  "Miner",
        "translation":  "Madenci",
        "sentence":  "The life of a coal miner is often dangerous and difficult."
    },
    {
        "pos":  "Noun",
        "word":  "Mineral",
        "translation":  "Mineral",
        "sentence":  "Precious metals are technically a type of mineral resource."
    },
    {
        "pos":  "Adjective",
        "word":  "Minimal",
        "translation":  "Minimum, en az",
        "sentence":  "The storm caused only minimal damage to the house."
    },
    {
        "pos":  "Verb",
        "word":  "Minimize",
        "translation":  "Minimize etmek, en aza indirmek",
        "sentence":  "We need to minimize costs to stay competitive in the market."
    },
    {
        "pos":  "Adj.",
        "word":  "Minimum",
        "translation":  "Noun",
        "sentence":  "Minimum"
    },
    {
        "pos":  "Noun",
        "word":  "Mining",
        "translation":  "Madencilik",
        "sentence":  "Gold mining is a major industry in this part of the country."
    },
    {
        "pos":  "Noun",
        "word":  "Minister",
        "translation":  "Bakan",
        "sentence":  "The Minister of Economy discussed new investment regulations."
    },
    {
        "pos":  "Noun",
        "word":  "Ministry",
        "translation":  "Bakanlık",
        "sentence":  "He works for the Ministry of Foreign Affairs."
    },
    {
        "pos":  "Adjective",
        "word":  "Minor",
        "translation":  "Küçük, ikincil",
        "sentence":  "We had a minor issue with the shipment, but it\u0027s resolved now."
    },
    {
        "pos":  "Noun",
        "word":  "Minority",
        "translation":  "Azınlık",
        "sentence":  "Only a minority of firms can provide this specific raw material."
    },
    {
        "pos":  "Adjective",
        "word":  "Minute",
        "translation":  "Çok küçük, detaylı",
        "sentence":  "The jeweler examined the diamond for minute flaws."
    },
    {
        "pos":  "Noun",
        "word":  "Minute",
        "translation":  "Dakika",
        "sentence":  "The match analysis will be ready in just a few minutes."
    },
    {
        "pos":  "Noun",
        "word":  "Miracle",
        "translation":  "Mucize",
        "sentence":  "It\u0027s a miracle that no one was hurt in the accident."
    },
    {
        "pos":  "Noun",
        "word":  "Mirror",
        "translation":  "Ayna",
        "sentence":  "I checked the rearview mirror of the new car during the test drive."
    },
    {
        "pos":  "Adjective",
        "word":  "Miserable",
        "translation":  "Perişan, zavallı, kötü",
        "sentence":  "The weather was miserable all weekend."
    },
    {
        "pos":  "Noun",
        "word":  "Misery",
        "translation":  "Sefalet, acı",
        "sentence":  "War only brings death and misery to innocent people."
    },
    {
        "pos":  "Adjective",
        "word":  "Misleading",
        "translation":  "Yanıltıcı",
        "sentence":  "The advertisement was accused of being misleading to customers."
    },
    {
        "pos":  "Verb",
        "word":  "Miss",
        "translation":  "Kaçırmak, özlemek",
        "sentence":  "I don\u0027t want to miss the opportunity to invest in silver today."
    },
    {
        "pos":  "Noun",
        "word":  "Missile",
        "translation":  "Füze",
        "sentence":  "The army successfully tested a new long-range missile."
    },
    {
        "pos":  "Adjective",
        "word":  "Missing",
        "translation":  "Eksik",
        "sentence":  "One gram of gold was missing from the total calculation."
    },
    {
        "pos":  "Noun",
        "word":  "Mission",
        "translation":  "Görev, misyon",
        "sentence":  "Our mission is to reduce costs without compromising quality."
    },
    {
        "pos":  "Noun",
        "word":  "Mistake",
        "translation":  "Verb",
        "sentence":  "Hata"
    },
    {
        "pos":  "Verb",
        "word":  "Mix",
        "translation":  "Noun",
        "sentence":  "Karıştırmak"
    },
    {
        "pos":  "Adjective",
        "word":  "Mixed",
        "translation":  "Karışık",
        "sentence":  "The market experts have mixed opinions about palladium\u0027s future."
    },
    {
        "pos":  "Noun",
        "word":  "Mixture",
        "translation":  "Karışım",
        "sentence":  "The raw material is a mixture of several different elements."
    },
    {
        "pos":  "Noun",
        "word":  "Mob",
        "translation":  "Kalabalık (genelde kontrolsüz), çete",
        "sentence":  "An angry mob gathered outside the courthouse."
    },
    {
        "pos":  "Adjective",
        "word":  "Mobile",
        "translation":  "Mobil, hareketli",
        "sentence":  "Mobile phones have changed the way we communicate."
    },
    {
        "pos":  "Noun",
        "word":  "Mobility",
        "translation":  "Hareketlilik, mobilite",
        "sentence":  "High-speed trains have improved social mobility in the region."
    },
    {
        "pos":  "Verb",
        "word":  "Mobilize",
        "translation":  "Seferber etmek",
        "sentence":  "The charity is trying to mobilize support for the refugees."
    },
    {
        "pos":  "Noun",
        "word":  "Mode",
        "translation":  "Mod, yöntem",
        "sentence":  "What is your preferred mode of transport?"
    },
    {
        "pos":  "Noun",
        "word":  "Model",
        "translation":  "Verb",
        "sentence":  "Model"
    },
    {
        "pos":  "Adjective",
        "word":  "Moderate",
        "translation":  "Orta, ılımlı",
        "sentence":  "The hotel offers good quality accommodation at a moderate price."
    },
    {
        "pos":  "Adjective",
        "word":  "Modern",
        "translation":  "Modern",
        "sentence":  "We use modern software for tracking our strategic sourcing tasks."
    },
    {
        "pos":  "Adjective",
        "word":  "Modest",
        "translation":  "Alçakgönüllü, mütevazı (miktar/tavır)",
        "sentence":  "He lives in a modest house in a quiet part of town."
    },
    {
        "pos":  "Noun",
        "word":  "Modification",
        "translation":  "Değişiklik, modifikasyon",
        "sentence":  "The plan will require some minor modifications before it\u0027s approved."
    },
    {
        "pos":  "Verb",
        "word":  "Modify",
        "translation":  "Değiştirmek, modifiye etmek",
        "sentence":  "We need to modify the contract to include the new terms."
    },
    {
        "pos":  "Noun",
        "word":  "Module",
        "translation":  "Modül, birim",
        "sentence":  "The training course consists of ten separate modules."
    },
    {
        "pos":  "Noun",
        "word":  "Mom",
        "translation":  "Anne",
        "sentence":  "I\u0027ll call my mom once I land in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Moment",
        "translation":  "An, anlık",
        "sentence":  "This is a very important moment in my professional career."
    },
    {
        "pos":  "Noun",
        "word":  "Momentum",
        "translation":  "Momentum, hız, ivme",
        "sentence":  "The campaign is starting to gain momentum across the country."
    },
    {
        "pos":  "Noun",
        "word":  "Monday",
        "translation":  "Pazartesi",
        "sentence":  "We have a big sourcing meeting every Monday morning."
    },
    {
        "pos":  "Noun",
        "word":  "Money",
        "translation":  "Para",
        "sentence":  "Investing your money wisely is the key to financial freedom."
    },
    {
        "pos":  "Noun",
        "word":  "Monitor",
        "translation":  "Verb",
        "sentence":  "Monitör"
    },
    {
        "pos":  "Noun",
        "word":  "Monk",
        "translation":  "Keşiş",
        "sentence":  "He decided to leave everything behind and become a monk."
    },
    {
        "pos":  "Noun",
        "word":  "Monkey",
        "translation":  "Maymun",
        "sentence":  "The children\u0027s song features a funny monkey dancing."
    },
    {
        "pos":  "Noun",
        "word":  "Monopoly",
        "translation":  "Tekel",
        "sentence":  "The company has a virtual monopoly on the local market."
    },
    {
        "pos":  "Noun",
        "word":  "Monster",
        "translation":  "Canavar",
        "sentence":  "The child was afraid of the monster under the bed."
    },
    {
        "pos":  "Noun",
        "word":  "Month",
        "translation":  "Ay",
        "sentence":  "I have been researching this alternative firm for a month."
    },
    {
        "pos":  "Adjective",
        "word":  "Monthly",
        "translation":  "Aylık",
        "sentence":  "We pay our rent on a monthly basis."
    },
    {
        "pos":  "Noun",
        "word":  "Monument",
        "translation":  "Anıt",
        "sentence":  "The ancient monument was built over two thousand years ago."
    },
    {
        "pos":  "Noun",
        "word":  "Mood",
        "translation":  "Ruh hali, mod",
        "sentence":  "My mood improved after seeing the successful cost-down results."
    },
    {
        "pos":  "Noun",
        "word":  "Moon",
        "translation":  "Ay (gökyüzündeki)",
        "sentence":  "The moon was very bright during my flight back to İzmir."
    },
    {
        "pos":  "Adj.",
        "word":  "Moral",
        "translation":  "Noun",
        "sentence":  "Ahlaki"
    },
    {
        "pos":  "Noun",
        "word":  "Morality",
        "translation":  "Ahlak, moralite",
        "sentence":  "The film explores the boundaries of human morality."
    },
    {
        "pos":  "Det.",
        "word":  "More",
        "translation":  "Pron.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Adverb",
        "word":  "Moreover",
        "translation":  "Dahası, üstelik",
        "sentence":  "The house is beautiful; moreover, it\u0027s in a great location."
    },
    {
        "pos":  "Noun",
        "word":  "Morning",
        "translation":  "Sabah",
        "sentence":  "Every morning, I check the betting analysis for the evening match."
    },
    {
        "pos":  "Noun",
        "word":  "Mortgage",
        "translation":  "İpotekli konut kredisi",
        "sentence":  "We took out a twenty-year mortgage to buy our first home."
    },
    {
        "pos":  "Noun",
        "word":  "Mosque",
        "translation":  "Cami",
        "sentence":  "There is a beautiful historic mosque in the city center."
    },
    {
        "pos":  "Noun",
        "word":  "Mosquito",
        "translation":  "Sivrisinek",
        "sentence":  "I was bitten by a mosquito while I was sleeping."
    },
    {
        "pos":  "Det.",
        "word":  "Most",
        "translation":  "Pron.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Adverb",
        "word":  "Mostly",
        "translation":  "Çoğunlukla",
        "sentence":  "The YouTube channel will mostly focus on educational songs."
    },
    {
        "pos":  "Noun",
        "word":  "Mother",
        "translation":  "Anne",
        "sentence":  "My mother enjoys watching the videos I create for the kids."
    },
    {
        "pos":  "Noun",
        "word":  "Motion",
        "translation":  "Hareket, önerge",
        "sentence":  "The motion of the boat made me feel a bit sick."
    },
    {
        "pos":  "Verb",
        "word":  "Motivate",
        "translation":  "Motive etmek",
        "sentence":  "It\u0027s the manager\u0027s job to motivate the team."
    },
    {
        "pos":  "Noun",
        "word":  "Motivation",
        "translation":  "Motivasyon",
        "sentence":  "He lacks the motivation to study for his exams."
    },
    {
        "pos":  "Noun",
        "word":  "Motive",
        "translation":  "Güdü, motif, neden",
        "sentence":  "The police are still trying to establish a motive for the crime."
    },
    {
        "pos":  "Noun",
        "word":  "Motor",
        "translation":  "Adj.",
        "sentence":  "Motor"
    },
    {
        "pos":  "Noun",
        "word":  "Motorcycle",
        "translation":  "Motosiklet",
        "sentence":  "I prefer driving a car rather than a motorcycle in İzmir traffic."
    },
    {
        "pos":  "Verb",
        "word":  "Mount",
        "translation":  "Çıkmak, monte etmek",
        "sentence":  "We need to mount the new monitors in the sourcing office."
    },
    {
        "pos":  "Noun",
        "word":  "Mountain",
        "translation":  "Dağ",
        "sentence":  "You can see the beautiful mountains surrounding İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Mouse",
        "translation":  "Fare",
        "sentence":  "I bought a new wireless mouse for my laptop."
    },
    {
        "pos":  "Noun",
        "word":  "Mouth",
        "translation":  "Ağız",
        "sentence":  "(Genellikle biyolojik veya günlük konuşmada kullanılır.)"
    },
    {
        "pos":  "Verb",
        "word":  "Move",
        "translation":  "Noun",
        "sentence":  "Hareket etmek, taşınmak"
    },
    {
        "pos":  "Noun",
        "word":  "Movement",
        "translation":  "Hareket",
        "sentence":  "The upward movement of silver prices is quite consistent."
    },
    {
        "pos":  "Noun",
        "word":  "Movie",
        "translation":  "Film",
        "sentence":  "I watched a great movie about financial markets last night."
    },
    {
        "pos":  "Adjective",
        "word":  "Moving",
        "translation":  "Dokunaklı, hareket eden",
        "sentence":  "It was a very moving story that brought tears to my eyes."
    },
    {
        "pos":  "Det.",
        "word":  "Much",
        "translation":  "Pron.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Noun",
        "word":  "Mud",
        "translation":  "Çamur",
        "sentence":  "The construction site was covered in mud after the rain."
    },
    {
        "pos":  "Adjective",
        "word":  "Multiple",
        "translation":  "Çoklu",
        "sentence":  "We work with multiple alternative firms to reduce risk."
    },
    {
        "pos":  "Verb",
        "word":  "Multiply",
        "translation":  "Çarpmak, çoğaltmak",
        "sentence":  "You need to multiply the weight by the current price of gold."
    },
    {
        "pos":  "Adjective",
        "word":  "Municipal",
        "translation":  "Belediye ile ilgili, kentsel",
        "sentence":  "The municipal elections will take place next month."
    },
    {
        "pos":  "Noun",
        "word":  "Murder",
        "translation":  "Verb",
        "sentence":  "Cinayet"
    },
    {
        "pos":  "Noun",
        "word":  "Muscle",
        "translation":  "Kas",
        "sentence":  "Working at the factory requires a lot of physical muscle."
    },
    {
        "pos":  "Noun",
        "word":  "Museum",
        "translation":  "Müze",
        "sentence":  "There are several historical museums to visit in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Music",
        "translation":  "Müzik",
        "sentence":  "The music for the children\u0027s channel must be very catchy."
    },
    {
        "pos":  "Adj.",
        "word":  "Musical",
        "translation":  "Noun",
        "sentence":  "Müzikal"
    },
    {
        "pos":  "Noun",
        "word":  "Musician",
        "translation":  "Müzisyen",
        "sentence":  "A professional musician will help us record the educational songs."
    },
    {
        "pos":  "Modal Verb",
        "word":  "Must",
        "translation":  "-meli, -malı (zorunluluk)",
        "sentence":  "I must finish the self-evaluation note by Friday."
    },
    {
        "pos":  "Adjective",
        "word":  "Mutual",
        "translation":  "Karşılıklı, ortak",
        "sentence":  "The agreement was based on mutual trust and respect."
    },
    {
        "pos":  "Determiner",
        "word":  "My",
        "translation":  "Benim",
        "sentence":  "My goal is to become an expert in strategic sourcing."
    },
    {
        "pos":  "Pronoun",
        "word":  "Myself",
        "translation":  "Kendim",
        "sentence":  "I will calculate the total weight of the gold pieces myself."
    },
    {
        "pos":  "Adjective",
        "word":  "Mysterious",
        "translation":  "Gizemli",
        "sentence":  "The market drivers for palladium can sometimes be mysterious."
    },
    {
        "pos":  "Noun",
        "word":  "Mystery",
        "translation":  "Gizem",
        "sentence":  "The source of the supply delay is still a mystery."
    },
    {
        "pos":  "Noun",
        "word":  "Myth",
        "translation":  "Efsane, mit",
        "sentence":  "It is a myth that you can see the Great Wall of China from space."
    },
    {
        "pos":  "Noun",
        "word":  "Nail",
        "translation":  "Çivi, tırnak",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Naked",
        "translation":  "Çıplak",
        "sentence":  "The bacteria are too small to be seen with the naked eye."
    },
    {
        "pos":  "Noun",
        "word":  "Name",
        "translation":  "Verb",
        "sentence":  "İsim"
    },
    {
        "pos":  "Adverb",
        "word":  "Namely",
        "translation":  "Yani, diğer bir deyişle",
        "sentence":  "We have two main problems, namely a lack of time and money."
    },
    {
        "pos":  "Noun",
        "word":  "Narrative",
        "translation":  "Adj.",
        "sentence":  "Anlatı, hikaye"
    },
    {
        "pos":  "Adj.",
        "word":  "Narrow",
        "translation":  "Verb",
        "sentence":  "Dar"
    },
    {
        "pos":  "Adjective",
        "word":  "Nasty",
        "translation":  "Pis, kötü, nahoş",
        "sentence":  "He has a nasty habit of biting his nails."
    },
    {
        "pos":  "Noun",
        "word":  "Nation",
        "translation":  "Ulus, millet",
        "sentence":  "The entire nation is following the economic changes."
    },
    {
        "pos":  "Adj.",
        "word":  "National",
        "translation":  "Noun",
        "sentence":  "Ulusal"
    },
    {
        "pos":  "Adjective",
        "word":  "Nationwide",
        "translation":  "Ülke çapında",
        "sentence":  "The strike has caused nationwide disruption to rail services."
    },
    {
        "pos":  "Adj.",
        "word":  "Native",
        "translation":  "Noun",
        "sentence":  "Yerli, ana"
    },
    {
        "pos":  "Adjective",
        "word":  "Natural",
        "translation":  "Doğal",
        "sentence":  "Silver is a natural resource that is widely used in industry."
    },
    {
        "pos":  "Adverb",
        "word":  "Naturally",
        "translation":  "Doğal olarak",
        "sentence":  "Naturally, we want to find the best quality at the lowest price."
    },
    {
        "pos":  "Noun",
        "word":  "Nature",
        "translation":  "Doğa",
        "sentence":  "I love spending time in nature during my weekends in İzmir."
    },
    {
        "pos":  "Adjective",
        "word":  "Naval",
        "translation":  "Deniz kuvvetleri ile ilgili",
        "sentence":  "He began his career as a young naval officer."
    },
    {
        "pos":  "Noun",
        "word":  "Navigation",
        "translation":  "Navigasyon, rota bulma",
        "sentence":  "The ship\u0027s navigation system failed in the heavy fog."
    },
    {
        "pos":  "Prep.",
        "word":  "Near",
        "translation":  "Adj.",
        "sentence":  "Yakın"
    },
    {
        "pos":  "Adjective / Adverb",
        "word":  "Nearby",
        "translation":  "Yakındaki / Yakında",
        "sentence":  "We went to a nearby restaurant for dinner."
    },
    {
        "pos":  "Adverb",
        "word":  "Nearly",
        "translation":  "Neredeyse",
        "sentence":  "I have nearly finished the B2 vocabulary list."
    },
    {
        "pos":  "Adjective",
        "word":  "Neat",
        "translation":  "Düzenli, temiz",
        "sentence":  "Please keep your workspace neat and organized."
    },
    {
        "pos":  "Adverb",
        "word":  "Necessarily",
        "translation":  "Şart olarak, illa ki",
        "sentence":  "Higher prices don\u0027t necessarily mean higher quality."
    },
    {
        "pos":  "Adjective",
        "word":  "Necessary",
        "translation":  "Gerekli",
        "sentence":  "It is necessary to have a backup plan for the supply chain."
    },
    {
        "pos":  "Noun",
        "word":  "Necessity",
        "translation":  "Gereklilik, ihtiyaç",
        "sentence":  "Fresh water is a basic necessity of life."
    },
    {
        "pos":  "Noun",
        "word":  "Neck",
        "translation":  "Boyun",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Verb",
        "word":  "Need",
        "translation":  "Noun",
        "sentence":  "İhtiyaç duymak"
    },
    {
        "pos":  "Noun",
        "word":  "Needle",
        "translation":  "İğne",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Adj.",
        "word":  "Negative",
        "translation":  "Noun",
        "sentence":  "Olumsuz"
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Neglect",
        "translation":  "İhmal etmek / İhmal",
        "sentence":  "He was accused of trying to neglect his professional duties."
    },
    {
        "pos":  "Verb",
        "word":  "Negotiate",
        "translation":  "Müzakere etmek",
        "sentence":  "The union is trying to negotiate a better pay deal for workers."
    },
    {
        "pos":  "Noun",
        "word":  "Negotiation",
        "translation":  "Müzakere",
        "sentence":  "The contract is currently under negotiation between the two firms."
    },
    {
        "pos":  "Noun",
        "word":  "Neighbor",
        "translation":  "Komşu",
        "sentence":  "My neighbor in İzmir is also interested in football betting."
    },
    {
        "pos":  "Noun",
        "word":  "Neighborhood",
        "translation":  "Mahalle, semt",
        "sentence":  "I live in a very quiet neighborhood near the sea."
    },
    {
        "pos":  "Adjective",
        "word":  "Neighboring",
        "translation":  "Komşu",
        "sentence":  "The war has caused a lot of concern in neighboring countries."
    },
    {
        "pos":  "Det.",
        "word":  "Neither",
        "translation":  "Pron.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Noun",
        "word":  "Nerve",
        "translation":  "Sinir",
        "sentence":  "You need a lot of nerve to invest in volatile markets."
    },
    {
        "pos":  "Adjective",
        "word":  "Nervous",
        "translation":  "Gergin",
        "sentence":  "I was a bit nervous before my five-year review meeting."
    },
    {
        "pos":  "Noun",
        "word":  "Nest",
        "translation":  "Yuva",
        "sentence":  "The bird built its nest in the branches of the old oak tree."
    },
    {
        "pos":  "Adjective",
        "word":  "Net",
        "translation":  "Net (brüt olmayan)",
        "sentence":  "The company\u0027s net profit has increased significantly this year."
    },
    {
        "pos":  "Noun",
        "word":  "Net",
        "translation":  "Ağ, net",
        "sentence":  "The net savings from the project were over 50,000 TL."
    },
    {
        "pos":  "Noun",
        "word":  "Network",
        "translation":  "Ağ, şebeke",
        "sentence":  "I have a large professional network in the sourcing industry."
    },
    {
        "pos":  "Adjective",
        "word":  "Neutral",
        "translation":  "Nötr, tarafsız",
        "sentence":  "Switzerland remained neutral during the Second World War."
    },
    {
        "pos":  "Adverb",
        "word":  "Never",
        "translation":  "Asla",
        "sentence":  "I never miss a chance to improve my German vocabulary."
    },
    {
        "pos":  "Adverb",
        "word":  "Nevertheless",
        "translation":  "Yine de, buna rağmen",
        "sentence":  "The price is high; nevertheless, we must buy the material now."
    },
    {
        "pos":  "Adjective",
        "word":  "New",
        "translation":  "Yeni",
        "sentence":  "I am looking for a new car through the Birevim system."
    },
    {
        "pos":  "Adverb",
        "word":  "Newly",
        "translation":  "Yeni, yakın zamanda",
        "sentence":  "The newly married couple went to Italy for their honeymoon."
    },
    {
        "pos":  "Noun",
        "word":  "News",
        "translation":  "Haber",
        "sentence":  "I check the financial news every day for updates on precious metals."
    },
    {
        "pos":  "Noun",
        "word":  "Newsletter",
        "translation":  "Bülten",
        "sentence":  "I receive a weekly newsletter from the local library."
    },
    {
        "pos":  "Noun",
        "word":  "Newspaper",
        "translation":  "Gazete",
        "sentence":  "I read the newspaper while having my morning coffee in İzmir."
    },
    {
        "pos":  "Adj.",
        "word":  "Next",
        "translation":  "Adv.",
        "sentence":  "N."
    },
    {
        "pos":  "Preposition",
        "word":  "Next to",
        "translation":  "Yanında",
        "sentence":  "The warehouse is located right next to the main office."
    },
    {
        "pos":  "Adjective",
        "word":  "Nice",
        "translation":  "Güzel, hoş",
        "sentence":  "It would be nice to have more alternative firms to choose from."
    },
    {
        "pos":  "Noun",
        "word":  "Niche",
        "translation":  "Niş, uygun yer/alan",
        "sentence":  "The company has found a profitable niche in the luxury market."
    },
    {
        "pos":  "Noun",
        "word":  "Nickel",
        "translation":  "Nikel, 5 sentlik madeni para",
        "sentence":  "Nickel is a metal often used in the production of stainless steel."
    },
    {
        "pos":  "Noun",
        "word":  "Night",
        "translation":  "Gece",
        "sentence":  "I stayed up late last night working on my YouTube channel project."
    },
    {
        "pos":  "Noun",
        "word":  "Nightmare",
        "translation":  "Kabus",
        "sentence":  "The flight cancellation was a complete nightmare."
    },
    {
        "pos":  "Number",
        "word":  "Nine",
        "translation":  "Dokuz",
        "sentence":  "There are nine different raw materials in this category."
    },
    {
        "pos":  "Number",
        "word":  "Nineteen",
        "translation":  "On dokuz",
        "sentence":  "I have nineteen days of leave left for this year."
    },
    {
        "pos":  "Number",
        "word":  "Ninety",
        "translation":  "Doksan",
        "sentence":  "The value of silver has increased by ninety percent in some periods."
    },
    {
        "pos":  "Exclam.",
        "word":  "No",
        "translation":  "Det.",
        "sentence":  "Hayır"
    },
    {
        "pos":  "Pronoun",
        "word":  "No one",
        "translation":  "Kimse",
        "sentence":  "No one expected the silver price to rise so quickly."
    },
    {
        "pos":  "Adjective",
        "word":  "Noble",
        "translation":  "Soylu, asil",
        "sentence":  "He was a man of noble character who always helped others."
    },
    {
        "pos":  "Pronoun",
        "word":  "Nobody",
        "translation":  "Hiç kimse",
        "sentence":  "Nobody likes it when a flight is canceled at the last minute."
    },
    {
        "pos":  "Verb",
        "word":  "Nod",
        "translation":  "Başını sallamak (onaylamak için)",
        "sentence":  "She gave a quick nod to show that she understood."
    },
    {
        "pos":  "Noun",
        "word":  "Noise",
        "translation":  "Gürültü",
        "sentence":  "There was a lot of noise at Sabiha Gökçen Airport yesterday."
    },
    {
        "pos":  "Adjective",
        "word":  "Noisy",
        "translation":  "Gürültülü",
        "sentence":  "The production area is too noisy for a phone call."
    },
    {
        "pos":  "Verb",
        "word":  "Nominate",
        "translation":  "Aday göstermek",
        "sentence":  "I’d like to nominate my colleague for the \"Employee of the Year\" award."
    },
    {
        "pos":  "Noun",
        "word":  "Nomination",
        "translation":  "Adaylık",
        "sentence":  "He was delighted to receive an Oscar nomination for Best Actor."
    },
    {
        "pos":  "Noun",
        "word":  "Nominee",
        "translation":  "Aday",
        "sentence":  "The names of the nominees will be announced on Monday."
    },
    {
        "pos":  "Pronoun",
        "word":  "None",
        "translation":  "Hiçbiri",
        "sentence":  "None of the suppliers could meet our target price."
    },
    {
        "pos":  "Adverb",
        "word":  "Nonetheless",
        "translation":  "Yine de, buna rağmen",
        "sentence":  "The report was brief; nonetheless, it contained all the key facts."
    },
    {
        "pos":  "Adjective",
        "word":  "Nonprofit",
        "translation":  "Kar amacı gütmeyen",
        "sentence":  "She works for a nonprofit organization that helps the homeless."
    },
    {
        "pos":  "Noun",
        "word":  "Nonsense",
        "translation":  "Saçma, anlamsız",
        "sentence":  "Stop talking nonsense and tell me what really happened."
    },
    {
        "pos":  "Noun",
        "word":  "Noon",
        "translation":  "Öğle vakti",
        "sentence":  "The meeting is scheduled to start at noon."
    },
    {
        "pos":  "Conj.",
        "word":  "Nor",
        "translation":  "Adv.",
        "sentence":  "Ne de"
    },
    {
        "pos":  "Noun",
        "word":  "Norm",
        "translation":  "Norm, standart",
        "sentence":  "Working late is the norm in many high-pressure jobs."
    },
    {
        "pos":  "Adj.",
        "word":  "Normal",
        "translation":  "Noun",
        "sentence":  "Normal"
    },
    {
        "pos":  "Adverb",
        "word":  "Normally",
        "translation":  "Normalde",
        "sentence":  "Normally, I take the ferry to get across İzmir."
    },
    {
        "pos":  "N.",
        "word":  "North",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Adjective",
        "word":  "Northern",
        "translation":  "Kuzeye ait",
        "sentence":  "We are looking for suppliers in northern Europe."
    },
    {
        "pos":  "Noun",
        "word":  "Nose",
        "translation":  "Burun",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Adverb",
        "word":  "Not",
        "translation":  "Değil",
        "sentence":  "This is not the final decision on the car financing."
    },
    {
        "pos":  "Adjective",
        "word":  "Notable",
        "translation":  "Dikkate değer, önemli",
        "sentence":  "There have been some notable improvements in the local economy."
    },
    {
        "pos":  "Adverb",
        "word":  "Notably",
        "translation":  "Özellikle, bilhassa",
        "sentence":  "The region is famous for its fruit, notably its grapes and apples."
    },
    {
        "pos":  "Noun",
        "word":  "Note",
        "translation":  "Verb",
        "sentence":  "Not"
    },
    {
        "pos":  "Noun",
        "word":  "Notebook",
        "translation":  "Not defteri",
        "sentence":  "He wrote the phone number down in his notebook."
    },
    {
        "pos":  "Pronoun",
        "word":  "Nothing",
        "translation":  "Hiçbir şey",
        "sentence":  "Nothing is more important than family and health."
    },
    {
        "pos":  "Verb",
        "word":  "Notice",
        "translation":  "Noun",
        "sentence":  "Fark etmek"
    },
    {
        "pos":  "Verb",
        "word":  "Notify",
        "translation":  "Bildirmek, tebliğ etmek",
        "sentence":  "Please notify the police if you see anything suspicious."
    },
    {
        "pos":  "Noun",
        "word":  "Notion",
        "translation":  "Kavram, düşünce",
        "sentence":  "The notion of cost reduction is central to strategic sourcing."
    },
    {
        "pos":  "Adjective",
        "word":  "Notorious",
        "translation":  "Kötü şöhretli",
        "sentence":  "The area is notorious for its high crime rate."
    },
    {
        "pos":  "Adjective",
        "word":  "Novel",
        "translation":  "Yeni, alışılmamış",
        "sentence":  "The scientist has come up with a novel way of solving the problem."
    },
    {
        "pos":  "Noun",
        "word":  "Novel",
        "translation":  "Roman",
        "sentence":  "I enjoy reading a good novel during long flights."
    },
    {
        "pos":  "Noun",
        "word":  "Novelist",
        "translation":  "Romancı",
        "sentence":  "She is a successful novelist who has written several bestsellers."
    },
    {
        "pos":  "Noun",
        "word":  "November",
        "translation":  "Kasım",
        "sentence":  "I will start my German B1 level course in November."
    },
    {
        "pos":  "Adv.",
        "word":  "Now",
        "translation":  "Conj.",
        "sentence":  "Şimdi"
    },
    {
        "pos":  "Adverb",
        "word":  "Nowadays",
        "translation":  "Bugünlerde",
        "sentence":  "Nowadays, most people do their shopping online."
    },
    {
        "pos":  "Adverb",
        "word":  "Nowhere",
        "translation":  "Hiçbir yer",
        "sentence":  "There is nowhere else I\u0027d rather be than İzmir in the spring."
    },
    {
        "pos":  "Adjective",
        "word":  "Nuclear",
        "translation":  "Nükleer",
        "sentence":  "Nuclear energy production requires various specialized metals."
    },
    {
        "pos":  "Noun",
        "word":  "Number",
        "translation":  "Verb",
        "sentence":  "Sayı, numara"
    },
    {
        "pos":  "Adjective",
        "word":  "Numerous",
        "translation":  "Pek çok",
        "sentence":  "There are numerous benefits to automating your social media tracking."
    },
    {
        "pos":  "Noun",
        "word":  "Nurse",
        "translation":  "Hemşire",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Nursery",
        "translation":  "Kreş, fidanlık",
        "sentence":  "The children spend the morning at a local nursery."
    },
    {
        "pos":  "Adjective",
        "word":  "Nursing",
        "translation":  "Hemşirelik",
        "sentence":  "She has spent her whole career in the nursing profession."
    },
    {
        "pos":  "Noun",
        "word":  "Nut",
        "translation":  "Kuruyemiş, somun",
        "sentence":  "(Somun anlamı teknik işlerde karşına çıkabilir.)"
    },
    {
        "pos":  "Noun",
        "word":  "Nutrition",
        "translation":  "Beslenme",
        "sentence":  "Good nutrition is essential for a healthy lifestyle."
    },
    {
        "pos":  "Noun",
        "word":  "Obesity",
        "translation":  "Obezite",
        "sentence":  "Obesity is a growing problem in many developed countries."
    },
    {
        "pos":  "Verb",
        "word":  "Obey",
        "translation":  "İtaat etmek, uymak",
        "sentence":  "All employees must obey the safety regulations at the factory."
    },
    {
        "pos":  "Noun",
        "word":  "Object",
        "translation":  "Verb",
        "sentence":  "Nesne"
    },
    {
        "pos":  "Noun",
        "word":  "Objection",
        "translation":  "İtiraz",
        "sentence":  "Does anyone have any objection to the proposed plan?"
    },
    {
        "pos":  "Noun",
        "word":  "Objective",
        "translation":  "Adj.",
        "sentence":  "Hedef"
    },
    {
        "pos":  "Noun",
        "word":  "Obligation",
        "translation":  "Yükümlülük, zorunluluk",
        "sentence":  "We have a legal obligation to fulfill our contracts."
    },
    {
        "pos":  "Verb",
        "word":  "Oblige",
        "translation":  "Zorunda bırakmak, minnettar kılmak",
        "sentence":  "The law obliges companies to provide a safe working environment."
    },
    {
        "pos":  "Noun",
        "word":  "Observation",
        "translation":  "Gözlem",
        "sentence":  "Based on my observation, silver is currently undervalued."
    },
    {
        "pos":  "Verb",
        "word":  "Observe",
        "translation":  "Gözlemlemek",
        "sentence":  "I like to observe how different market drivers affect gold prices."
    },
    {
        "pos":  "Noun",
        "word":  "Observer",
        "translation":  "Gözlemci",
        "sentence":  "International observers were sent to monitor the election."
    },
    {
        "pos":  "Verb",
        "word":  "Obsess",
        "translation":  "Saplantı haline getirmek",
        "sentence":  "He tends to obsess over small details."
    },
    {
        "pos":  "Noun",
        "word":  "Obsession",
        "translation":  "Saplantı, takıntı",
        "sentence":  "Fitness has become a bit of an obsession for him lately."
    },
    {
        "pos":  "Noun",
        "word":  "Obstacle",
        "translation":  "Engel",
        "sentence":  "The main obstacle to the project is a lack of funding."
    },
    {
        "pos":  "Verb",
        "word":  "Obtain",
        "translation":  "Elde etmek, edinmek",
        "sentence":  "We need to obtain a permit before starting the new project."
    },
    {
        "pos":  "Adjective",
        "word":  "Obvious",
        "translation":  "Açık, bariz",
        "sentence":  "The benefits of finding an alternative supplier are obvious."
    },
    {
        "pos":  "Adverb",
        "word":  "Obviously",
        "translation":  "Açıkça",
        "sentence":  "Obviously, we cannot continue with these high prices."
    },
    {
        "pos":  "Noun",
        "word":  "Occasion",
        "translation":  "Durum, vesile",
        "sentence":  "My fifth anniversary at the firm is a special occasion."
    },
    {
        "pos":  "Adjective",
        "word":  "Occasional",
        "translation":  "Ara sıra olan",
        "sentence":  "I enjoy the occasional glass of wine with dinner."
    },
    {
        "pos":  "Adverb",
        "word":  "Occasionally",
        "translation":  "Ara sıra",
        "sentence":  "I occasionally check the football match analysis for fun."
    },
    {
        "pos":  "Noun",
        "word":  "Occupation",
        "translation":  "Meslek, işgal",
        "sentence":  "Please state your name, age, and occupation on the form."
    },
    {
        "pos":  "Verb",
        "word":  "Occupy",
        "translation":  "İşgal etmek, meşgul etmek",
        "sentence":  "The enemy forces managed to occupy the capital city."
    },
    {
        "pos":  "Verb",
        "word":  "Occur",
        "translation":  "Meydana gelmek",
        "sentence":  "Flight cancellations occur more frequently during the winter."
    },
    {
        "pos":  "Noun",
        "word":  "Occurrence",
        "translation":  "Meydana gelme, olay",
        "sentence":  "Traffic jams are a daily occurrence on this road."
    },
    {
        "pos":  "Noun",
        "word":  "Ocean",
        "translation":  "Okyanus",
        "sentence":  "Palladium is sometimes found in deposits near the ocean."
    },
    {
        "pos":  "Noun",
        "word":  "October",
        "translation":  "Ekim",
        "sentence":  "I will finish my English B2 vocabulary list by October."
    },
    {
        "pos":  "Adjective",
        "word":  "Odd",
        "translation":  "Tuhaf, tek (sayı)",
        "sentence":  "It is odd that the price of silver dropped while gold rose."
    },
    {
        "pos":  "Noun",
        "word":  "Odds",
        "translation":  "Olasılıklar, ihtimaller",
        "sentence":  "The odds of winning the lottery are extremely low."
    },
    {
        "pos":  "Preposition",
        "word":  "Of",
        "translation":  "-in, -un",
        "sentence":  "This is a summary of my cost-reduction achievements."
    },
    {
        "pos":  "Adv.",
        "word":  "Off",
        "translation":  "Prep.",
        "sentence":  "Kapalı, dışına"
    },
    {
        "pos":  "Verb",
        "word":  "Offend",
        "translation":  "Gücendirmek, kırmak",
        "sentence":  "I didn\u0027t mean to offend the supplier with my counter-offer."
    },
    {
        "pos":  "Noun",
        "word":  "Offender",
        "translation":  "Suçlu, kusurlu",
        "sentence":  "The prison is full of first-time offenders."
    },
    {
        "pos":  "Noun",
        "word":  "Offense",
        "translation":  "Suç, saldırı",
        "sentence":  "(Günlük kullanım veya spor terimi.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Offensive",
        "translation":  "Aşağılayıcı, saldırgan",
        "sentence":  "We should avoid using offensive language in professional emails."
    },
    {
        "pos":  "Verb",
        "word":  "Offer",
        "translation":  "Noun",
        "sentence":  "Teklif etmek"
    },
    {
        "pos":  "Noun",
        "word":  "Offering",
        "translation":  "Sunu, teklif",
        "sentence":  "The company is expanding its offering of digital services."
    },
    {
        "pos":  "Noun",
        "word":  "Office",
        "translation":  "Ofis",
        "sentence":  "I\u0027ll be in the office all day if you need to discuss the gold weight."
    },
    {
        "pos":  "Noun",
        "word":  "Officer",
        "translation":  "Memur, görevli",
        "sentence":  "The customs officer checked the shipment of precious metals."
    },
    {
        "pos":  "Adj.",
        "word":  "Official",
        "translation":  "Noun",
        "sentence":  "Resmi"
    },
    {
        "pos":  "Noun",
        "word":  "Offspring",
        "translation":  "Yavru, döl, çoluk çocuk",
        "sentence":  "Many animals protect their offspring from predators."
    },
    {
        "pos":  "Adverb",
        "word":  "Often",
        "translation":  "Sık sık",
        "sentence":  "How often do you update your YouTube channel content?"
    },
    {
        "pos":  "Exclamation",
        "word":  "Oh",
        "translation":  "Oh, ah",
        "sentence":  "Oh, I almost forgot to include the two gram gold pieces."
    },
    {
        "pos":  "Noun",
        "word":  "Oil",
        "translation":  "Yağ, petrol",
        "sentence":  "Rising oil prices can increase transportation costs for our goods."
    },
    {
        "pos":  "Excl.",
        "word":  "OK",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Adjective",
        "word":  "Old",
        "translation":  "Eski, yaşlı",
        "sentence":  "We are replacing the old suppliers with more efficient ones."
    },
    {
        "pos":  "Adjective",
        "word":  "Old-fashioned",
        "translation":  "Eski moda",
        "sentence":  "Some of our sourcing methods are a bit old-fashioned."
    },
    {
        "pos":  "Prep.",
        "word":  "On",
        "translation":  "Adv.",
        "sentence":  "Üzerinde"
    },
    {
        "pos":  "Adv.",
        "word":  "Once",
        "translation":  "Conj.",
        "sentence":  "Bir kez"
    },
    {
        "pos":  "Num.",
        "word":  "One",
        "translation":  "Det.",
        "sentence":  "Pron."
    },
    {
        "pos":  "Adjective",
        "word":  "Ongoing",
        "translation":  "Devam eden",
        "sentence":  "The police have an ongoing investigation into the matter."
    },
    {
        "pos":  "Noun",
        "word":  "Onion",
        "translation":  "Soğan",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Adj.",
        "word":  "Online",
        "translation":  "Adv.",
        "sentence":  "Çevrimiçi"
    },
    {
        "pos":  "Adj.",
        "word":  "Only",
        "translation":  "Adv.",
        "sentence":  "Sadece"
    },
    {
        "pos":  "Preposition",
        "word":  "Onto",
        "translation":  "Üzerine",
        "sentence":  "We are moving the raw materials onto the new production line."
    },
    {
        "pos":  "Adj.",
        "word":  "Open",
        "translation":  "Verb",
        "sentence":  "Açık"
    },
    {
        "pos":  "Noun",
        "word":  "Opening",
        "translation":  "Açılış, boşluk",
        "sentence":  "There is an opening for a senior strategic sourcing role."
    },
    {
        "pos":  "Adverb",
        "word":  "Openly",
        "translation":  "Açıkça",
        "sentence":  "He spoke openly about his battle with depression."
    },
    {
        "pos":  "Noun",
        "word":  "Opera",
        "translation":  "Opera",
        "sentence":  "We went to the opera to see a performance of \"Carmen.\""
    },
    {
        "pos":  "Verb",
        "word":  "Operate",
        "translation":  "İşletmek, çalışmak",
        "sentence":  "Our company operates in several different countries."
    },
    {
        "pos":  "Noun",
        "word":  "Operation",
        "translation":  "Operasyon, işlem",
        "sentence":  "The cost-down operation was a huge success."
    },
    {
        "pos":  "Adjective",
        "word":  "Operational",
        "translation":  "Operasyonel, işlevsel",
        "sentence":  "The new factory will become fully operational next month."
    },
    {
        "pos":  "Noun",
        "word":  "Operator",
        "translation":  "Operatör",
        "sentence":  "He works as a telephone operator for a large company."
    },
    {
        "pos":  "Noun",
        "word":  "Opinion",
        "translation":  "Fikir, görüş",
        "sentence":  "In my opinion, investing in palladium is a smart move."
    },
    {
        "pos":  "Noun",
        "word":  "Opponent",
        "translation":  "Rakip",
        "sentence":  "Beşiktaş\u0027s opponent in the next match is very strong."
    },
    {
        "pos":  "Noun",
        "word":  "Opportunity",
        "translation":  "Fırsat",
        "sentence":  "This work anniversary is a great opportunity to reflect on my growth."
    },
    {
        "pos":  "Verb",
        "word":  "Oppose",
        "translation":  "Karşı çıkmak",
        "sentence":  "Some team members might oppose the new sourcing strategy."
    },
    {
        "pos":  "Adjective",
        "word":  "Opposed",
        "translation":  "Karşı, zıt",
        "sentence":  "I am opposed to taking unnecessary risks with our investments."
    },
    {
        "pos":  "Adj.",
        "word":  "Opposite",
        "translation":  "Adv.",
        "sentence":  "Prep."
    },
    {
        "pos":  "Noun",
        "word":  "Opposition",
        "translation":  "Muhalefet, karşıtlık",
        "sentence":  "There was some opposition to the changes in the betting rules."
    },
    {
        "pos":  "Verb",
        "word":  "Opt",
        "translation":  "Seçmek, tercih etmek",
        "sentence":  "Many students opt to study abroad for a year."
    },
    {
        "pos":  "Adjective",
        "word":  "Optical",
        "translation":  "Optik, görsel",
        "sentence":  "The invention of the optical fiber revolutionized communication."
    },
    {
        "pos":  "Noun",
        "word":  "Optimism",
        "translation":  "İyimserlik",
        "sentence":  "There is growing optimism that the economy is starting to recover."
    },
    {
        "pos":  "Adjective",
        "word":  "Optimistic",
        "translation":  "İyimser",
        "sentence":  "I am optimistic about our chances of winning the contract."
    },
    {
        "pos":  "Noun",
        "word":  "Option",
        "translation":  "Seçenek",
        "sentence":  "Which car financing option do you think is better for me?"
    },
    {
        "pos":  "Conjunction",
        "word":  "Or",
        "translation":  "Veya",
        "sentence":  "Should we buy gold or silver this month?"
    },
    {
        "pos":  "Adjective",
        "word":  "Oral",
        "translation":  "Sözlü",
        "sentence":  "The students have to take an oral exam at the end of the course."
    },
    {
        "pos":  "Noun",
        "word":  "Orange",
        "translation":  "Adj.",
        "sentence":  "Portakal"
    },
    {
        "pos":  "Noun",
        "word":  "Orchestra",
        "translation":  "Orkestra",
        "sentence":  "He plays the violin in a world-famous symphony orchestra."
    },
    {
        "pos":  "Noun",
        "word":  "Order",
        "translation":  "Verb",
        "sentence":  "Sipariş, düzen"
    },
    {
        "pos":  "Adjective",
        "word":  "Ordinary",
        "translation":  "Sıradan",
        "sentence":  "This is not an ordinary work anniversary; it\u0027s my fifth year!"
    },
    {
        "pos":  "Noun",
        "word":  "Organ",
        "translation":  "Organ",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Organic",
        "translation":  "Organik",
        "sentence":  "We try to buy organic fruit and vegetables whenever possible."
    },
    {
        "pos":  "Noun",
        "word":  "Organization",
        "translation":  "Organizasyon, kuruluş",
        "sentence":  "Our organization is committed to sustainable sourcing."
    },
    {
        "pos":  "Adjective",
        "word":  "Organizational",
        "translation":  "Organizasyonel, kurumsal",
        "sentence":  "She has excellent organizational skills and manages her time well."
    },
    {
        "pos":  "Verb",
        "word":  "Organize",
        "translation":  "Düzenlemek",
        "sentence":  "I need to organize my thoughts before writing the evaluation note."
    },
    {
        "pos":  "Adjective",
        "word":  "Organized",
        "translation":  "Düzenli",
        "sentence":  "Being organized helps me manage multiple work tasks at once."
    },
    {
        "pos":  "Noun",
        "word":  "Organizer",
        "translation":  "Düzenleyici",
        "sentence":  "I use a digital organizer to keep track of my YouTube plans."
    },
    {
        "pos":  "Noun",
        "word":  "Orientation",
        "translation":  "Oryantasyon, yönelim",
        "sentence":  "The university provides an orientation program for new students."
    },
    {
        "pos":  "Noun",
        "word":  "Origin",
        "translation":  "Köken, menşei",
        "sentence":  "We must check the origin of all raw materials we import."
    },
    {
        "pos":  "Adj.",
        "word":  "Original",
        "translation":  "Noun",
        "sentence":  "Orijinal"
    },
    {
        "pos":  "Adverb",
        "word":  "Originally",
        "translation":  "Aslında, başlangıçta",
        "sentence":  "Originally, I am from a different city, but now I live in İzmir."
    },
    {
        "pos":  "Verb",
        "word":  "Originate",
        "translation":  "Kaynaklanmak, başlamak",
        "sentence":  "The game is thought to have originated in ancient China."
    },
    {
        "pos":  "Adj.",
        "word":  "Other",
        "translation":  "Pron.",
        "sentence":  "Diğer"
    },
    {
        "pos":  "Adverb",
        "word":  "Otherwise",
        "translation":  "Aksi takdirde",
        "sentence":  "We need to save money; otherwise, we won\u0027t reach our targets."
    },
    {
        "pos":  "Modal Verb",
        "word":  "Ought",
        "translation":  "-meli, -malı (tavsiye)",
        "sentence":  "You ought to check the gold prices before making a decision."
    },
    {
        "pos":  "Determiner",
        "word":  "Our",
        "translation":  "Bizim",
        "sentence":  "Our team is working hard to implement the cost-down strategy."
    },
    {
        "pos":  "Pronoun",
        "word":  "Ours",
        "translation":  "Bizimki",
        "sentence":  "The success of the project is ours to celebrate."
    },
    {
        "pos":  "Pronoun",
        "word":  "Ourselves",
        "translation":  "Kendimiz",
        "sentence":  "We can manage the social media automation project ourselves."
    },
    {
        "pos":  "Adv.",
        "word":  "Out",
        "translation":  "Prep.",
        "sentence":  "Dışarıda"
    },
    {
        "pos":  "Noun",
        "word":  "Outbreak",
        "translation":  "Patlak verme (hastalık, savaş vb.)",
        "sentence":  "The authorities are trying to contain the outbreak of the virus."
    },
    {
        "pos":  "Noun",
        "word":  "Outcome",
        "translation":  "Sonuç",
        "sentence":  "What was the final outcome of your flight compensation claim?"
    },
    {
        "pos":  "Adjective",
        "word":  "Outdoor",
        "translation":  "Açık hava",
        "sentence":  "I enjoy outdoor activities like hiking near İzmir."
    },
    {
        "pos":  "Adverb",
        "word":  "Outdoors",
        "translation":  "Dışarıda",
        "sentence":  "It\u0027s much healthier to spend some time outdoors every day."
    },
    {
        "pos":  "Adjective",
        "word":  "Outer",
        "translation":  "Dış",
        "sentence":  "The outer shell of the metal piece is very durable."
    },
    {
        "pos":  "Noun",
        "word":  "Outfit",
        "translation":  "Kıyafet, takım",
        "sentence":  "She bought a new outfit for her sister\u0027s wedding."
    },
    {
        "pos":  "Noun",
        "word":  "Outing",
        "translation":  "Gezi, mesire",
        "sentence":  "The company organized a summer outing to the seaside for all staff."
    },
    {
        "pos":  "Noun",
        "word":  "Outlet",
        "translation":  "Çıkış yeri, mağaza, bayi",
        "sentence":  "The company has over fifty retail outlets across the country."
    },
    {
        "pos":  "Noun",
        "word":  "Outline",
        "translation":  "Verb",
        "sentence":  "Taslak"
    },
    {
        "pos":  "Noun",
        "word":  "Outlook",
        "translation":  "Görünüm, bakış açısı",
        "sentence":  "The economic outlook for the next year is very positive."
    },
    {
        "pos":  "Noun",
        "word":  "Output",
        "translation":  "Çıktı, üretim",
        "sentence":  "We need to increase our industrial output to meet the demand."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Outrage",
        "translation":  "Rezalet, öfke / Öfkelendirmek",
        "sentence":  "The public was filled with outrage over the new tax law."
    },
    {
        "pos":  "Adv.",
        "word":  "Outside",
        "translation":  "Prep.",
        "sentence":  "N."
    },
    {
        "pos":  "Noun",
        "word":  "Outsider",
        "translation":  "Dışarıdan gelen kişi",
        "sentence":  "As an outsider, he found it difficult to understand the local customs."
    },
    {
        "pos":  "Adjective",
        "word":  "Outstanding",
        "translation":  "Olağanüstü, seçkin",
        "sentence":  "She received an award for her outstanding contribution to science."
    },
    {
        "pos":  "Noun",
        "word":  "Oven",
        "translation":  "Fırın",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Prep.",
        "word":  "Over",
        "translation":  "Adverb",
        "sentence":  "Üzerinde"
    },
    {
        "pos":  "Adj.",
        "word":  "Overall",
        "translation":  "Adverb",
        "sentence":  "Genel"
    },
    {
        "pos":  "Verb",
        "word":  "Overcome",
        "translation":  "Üstesinden gelmek",
        "sentence":  "He had to overcome many challenges to reach the top of his profession."
    },
    {
        "pos":  "Verb",
        "word":  "Overlook",
        "translation":  "Gözden kaçırmak, tepeden bakmak",
        "sentence":  "Our balcony overlooks the beautiful harbor."
    },
    {
        "pos":  "Adverb",
        "word":  "Overly",
        "translation":  "Aşırı derecede",
        "sentence":  "He is an overly sensitive person who takes everything personally."
    },
    {
        "pos":  "Adverb",
        "word":  "Overnight",
        "translation":  "Bir gecede, geceleyin",
        "sentence":  "He became a global celebrity almost overnight."
    },
    {
        "pos":  "Adv.",
        "word":  "Overseas",
        "translation":  "Adj.",
        "sentence":  "Yurt dışı"
    },
    {
        "pos":  "Verb",
        "word":  "Oversee",
        "translation":  "Denetlemek, gözetmek",
        "sentence":  "A senior manager was appointed to oversee the project."
    },
    {
        "pos":  "Verb",
        "word":  "Overturn",
        "translation":  "Devirmek, (kararı) bozmak",
        "sentence":  "The Supreme Court decided to overturn the original ruling."
    },
    {
        "pos":  "Verb",
        "word":  "Overwhelm",
        "translation":  "Boğmak, bunaltmak, etkisiz hale getirmek",
        "sentence":  "The sheer volume of work began to overwhelm the small team."
    },
    {
        "pos":  "Adjective",
        "word":  "Overwhelming",
        "translation":  "Ezici, bunaltıcı",
        "sentence":  "There was overwhelming support for the new policy."
    },
    {
        "pos":  "Verb",
        "word":  "Owe",
        "translation":  "Borçlu olmak",
        "sentence":  "I owe my success to the support of my colleagues."
    },
    {
        "pos":  "Adj.",
        "word":  "Own",
        "translation":  "Pron.",
        "sentence":  "Verb"
    },
    {
        "pos":  "Noun",
        "word":  "Owner",
        "translation":  "Sahip",
        "sentence":  "He is the owner of a successful strategic sourcing firm."
    },
    {
        "pos":  "Noun",
        "word":  "Ownership",
        "translation":  "Mülkiyet, sahiplik",
        "sentence":  "The company is currently under private ownership."
    },
    {
        "pos":  "Noun",
        "word":  "Oxygen",
        "translation":  "Oksijen",
        "sentence":  "Plants produce oxygen during the process of photosynthesis."
    },
    {
        "pos":  "Adverb",
        "word":  "O’clock",
        "translation":  "Saat (tam)",
        "sentence":  "The meeting will start at nine o\u0027clock sharp."
    },
    {
        "pos":  "Noun",
        "word":  "Pace",
        "translation":  "Verb",
        "sentence":  "Hız, adım"
    },
    {
        "pos":  "Verb",
        "word":  "Pack",
        "translation":  "Noun",
        "sentence":  "Paketlemek"
    },
    {
        "pos":  "Noun",
        "word":  "Package",
        "translation":  "Verb",
        "sentence":  "Paket"
    },
    {
        "pos":  "Noun",
        "word":  "Packet",
        "translation":  "Paket",
        "sentence":  "He bought a packet of cigarettes and a box of matches."
    },
    {
        "pos":  "Noun",
        "word":  "Pad",
        "translation":  "Ped, bloknot, altlık",
        "sentence":  "He wrote the message on a small pad of paper."
    },
    {
        "pos":  "Noun",
        "word":  "Page",
        "translation":  "Sayfa",
        "sentence":  "I created a new page for tracking celebrity followings."
    },
    {
        "pos":  "Noun",
        "word":  "Pain",
        "translation":  "Acı, ağrı",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Painful",
        "translation":  "Acı verici",
        "sentence":  "It was painful to see the gold prices drop so suddenly."
    },
    {
        "pos":  "Verb",
        "word":  "Paint",
        "translation":  "Noun",
        "sentence":  "Boyamak"
    },
    {
        "pos":  "Noun",
        "word":  "Painter",
        "translation":  "Ressam, boyacı",
        "sentence":  "A professional painter is working on our house in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Painting",
        "translation":  "Tablo, boyama",
        "sentence":  "I bought a beautiful painting for my office."
    },
    {
        "pos":  "Noun",
        "word":  "Pair",
        "translation":  "Çift",
        "sentence":  "I need a new pair of safety shoes for the factory visits."
    },
    {
        "pos":  "Noun",
        "word":  "Palace",
        "translation":  "Saray",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Pale",
        "translation":  "Soluk, solgun",
        "sentence":  "He looked a bit pale after hearing about the flight cancellation."
    },
    {
        "pos":  "Noun",
        "word":  "Palm",
        "translation":  "Avuç içi, palmiye",
        "sentence":  "He held the small bird gently in the palm of his hand."
    },
    {
        "pos":  "Noun",
        "word":  "Pan",
        "translation":  "Tava",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Panel",
        "translation":  "Panel, heyet",
        "sentence":  "A panel of experts discussed the future of palladium."
    },
    {
        "pos":  "Noun",
        "word":  "Panic",
        "translation":  "Panik",
        "sentence":  "There was a sudden panic when the fire alarm went off."
    },
    {
        "pos":  "Noun",
        "word":  "Pants",
        "translation":  "Pantolon",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Paper",
        "translation":  "Kağıt, gazete",
        "sentence":  "I printed the sourcing report on high-quality paper."
    },
    {
        "pos":  "Noun",
        "word":  "Parade",
        "translation":  "Geçit töreni",
        "sentence":  "We went to see the parade on Republic Day."
    },
    {
        "pos":  "Noun",
        "word":  "Paragraph",
        "translation":  "Paragraf",
        "sentence":  "Please rewrite the first paragraph of your evaluation note."
    },
    {
        "pos":  "Adjective / Noun",
        "word":  "Parallel",
        "translation":  "Paralel",
        "sentence":  "The two roads run parallel to each other for several miles."
    },
    {
        "pos":  "Noun",
        "word":  "Parameter",
        "translation":  "Parametre, sınır",
        "sentence":  "We need to define the parameters of the research project."
    },
    {
        "pos":  "Noun",
        "word":  "Parent",
        "translation":  "Ebeveyn",
        "sentence":  "My parents are very proud of my five-year service at the firm."
    },
    {
        "pos":  "Adjective",
        "word":  "Parental",
        "translation":  "Ebeveynle ilgili",
        "sentence":  "The study looks at the importance of parental involvement in education."
    },
    {
        "pos":  "Noun",
        "word":  "Park",
        "translation":  "Verb",
        "sentence":  "Park"
    },
    {
        "pos":  "Noun",
        "word":  "Parking",
        "translation":  "Park etme",
        "sentence":  "The building has a large parking area for employees."
    },
    {
        "pos":  "Noun",
        "word":  "Parliament",
        "translation":  "Parlamento",
        "sentence":  "The new law was passed by parliament yesterday."
    },
    {
        "pos":  "Noun",
        "word":  "Part",
        "translation":  "Parça, bölüm",
        "sentence":  "Managing alternative firms is a big part of my job."
    },
    {
        "pos":  "Adjective / Adverb",
        "word":  "Part-time",
        "translation":  "Yarı zamanlı",
        "sentence":  "She has a part-time job as a waitress in a local cafe."
    },
    {
        "pos":  "Adjective",
        "word":  "Partial",
        "translation":  "Kısmi, taraf tutan",
        "sentence":  "The project was only a partial success."
    },
    {
        "pos":  "Adverb",
        "word":  "Partially",
        "translation":  "Kısmen",
        "sentence":  "The road was partially blocked by a fallen tree."
    },
    {
        "pos":  "Noun",
        "word":  "Participant",
        "translation":  "Katılımcı",
        "sentence":  "There were over fifty participants in the investment webinar."
    },
    {
        "pos":  "Verb",
        "word":  "Participate",
        "translation":  "Katılmak",
        "sentence":  "I would like to participate in the next strategic sourcing seminar."
    },
    {
        "pos":  "Noun",
        "word":  "Participation",
        "translation":  "Katılım",
        "sentence":  "We encourage active participation from all members of the group."
    },
    {
        "pos":  "Adjective",
        "word":  "Particular",
        "translation":  "Özel, belirli",
        "sentence":  "Is there any particular reason for the silver price increase?"
    },
    {
        "pos":  "Adverb",
        "word":  "Particularly",
        "translation":  "Özellikle",
        "sentence":  "I am particularly interested in palladium as a long-term asset."
    },
    {
        "pos":  "Adverb",
        "word":  "Partly",
        "translation":  "Kısmen",
        "sentence":  "The success was partly due to our new cost-tracking software."
    },
    {
        "pos":  "Noun",
        "word":  "Partner",
        "translation":  "Ortak, partner",
        "sentence":  "We are looking for a new business partner in Germany."
    },
    {
        "pos":  "Noun",
        "word":  "Partnership",
        "translation":  "Ortaklık",
        "sentence":  "The two companies have formed a strategic partnership."
    },
    {
        "pos":  "Noun",
        "word":  "Party",
        "translation":  "Parti, taraf",
        "sentence":  "We are having a small party for my fifth work anniversary."
    },
    {
        "pos":  "Verb",
        "word":  "Pass",
        "translation":  "Noun",
        "sentence":  "Geçmek"
    },
    {
        "pos":  "Noun",
        "word":  "Passage",
        "translation":  "Geçit, pasaj",
        "sentence":  "(Günlük kullanım veya okuma parçası.)"
    },
    {
        "pos":  "Noun",
        "word":  "Passenger",
        "translation":  "Yolcu",
        "sentence":  "There were many passengers waiting at Sabiha Gökçen Airport."
    },
    {
        "pos":  "Noun",
        "word":  "Passing",
        "translation":  "Geçiş, vefat",
        "sentence":  "The family was deeply saddened by the passing of their grandfather."
    },
    {
        "pos":  "Noun",
        "word":  "Passion",
        "translation":  "Tutku",
        "sentence":  "Content creation for kids is a real passion of mine."
    },
    {
        "pos":  "Adjective",
        "word":  "Passionate",
        "translation":  "Tutkulu",
        "sentence":  "He is a passionate believer in social justice."
    },
    {
        "pos":  "Adjective",
        "word":  "Passive",
        "translation":  "Pasif, edilgen",
        "sentence":  "He took a passive role in the meeting and let others do the talking."
    },
    {
        "pos":  "Noun",
        "word":  "Passport",
        "translation":  "Pasaport",
        "sentence":  "I need to renew my passport before my trip to Germany."
    },
    {
        "pos":  "Noun",
        "word":  "Password",
        "translation":  "Şifre",
        "sentence":  "You should never share your password with anyone else."
    },
    {
        "pos":  "Adj.",
        "word":  "Past",
        "translation":  "N.",
        "sentence":  "Prep."
    },
    {
        "pos":  "Noun",
        "word":  "Pastor",
        "translation":  "Papaz, rahip",
        "sentence":  "The pastor gave a moving sermon at the Sunday service."
    },
    {
        "pos":  "Noun",
        "word":  "Patch",
        "translation":  "Yama, küçük parça",
        "sentence":  "There was a small patch of oil on the garage floor."
    },
    {
        "pos":  "Noun",
        "word":  "Patent",
        "translation":  "Patent",
        "sentence":  "The company has applied for a patent for its new invention."
    },
    {
        "pos":  "Noun",
        "word":  "Path",
        "translation":  "Yol, patika",
        "sentence":  "Choosing the right financing path for the car is important."
    },
    {
        "pos":  "Noun",
        "word":  "Pathway",
        "translation":  "Yol, patika",
        "sentence":  "He followed the narrow pathway through the woods."
    },
    {
        "pos":  "Noun",
        "word":  "Patience",
        "translation":  "Sabır",
        "sentence":  "Teaching small children requires a lot of patience."
    },
    {
        "pos":  "Noun",
        "word":  "Patient",
        "translation":  "Adjective",
        "sentence":  "Hasta"
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Patrol",
        "translation":  "Devriye / Devriye gezmek",
        "sentence":  "The police are on patrol in the city center."
    },
    {
        "pos":  "Noun",
        "word":  "Patron",
        "translation":  "Hamis, düzenli müşteri",
        "sentence":  "He is a regular patron of the local arts center."
    },
    {
        "pos":  "Noun",
        "word":  "Pattern",
        "translation":  "Desen, kalıp",
        "sentence":  "I noticed a clear pattern in the gold price fluctuations."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Pause",
        "translation":  "Duraklatmak / Duraklama",
        "sentence":  "He paused for a moment to collect his thoughts."
    },
    {
        "pos":  "Verb",
        "word":  "Pay",
        "translation":  "Noun",
        "sentence":  "Ödemek"
    },
    {
        "pos":  "Noun",
        "word":  "Payment",
        "translation":  "Ödeme",
        "sentence":  "The payment for the alternative materials is due next week."
    },
    {
        "pos":  "Noun",
        "word":  "Peace",
        "translation":  "Barış, huzur",
        "sentence":  "I find a lot of peace when I\u0027m walking by the sea in İzmir."
    },
    {
        "pos":  "Adjective",
        "word":  "Peaceful",
        "translation":  "Huzurlu",
        "sentence":  "The weekend in İzmir was very peaceful despite the delay."
    },
    {
        "pos":  "Noun",
        "word":  "Peak",
        "translation":  "Zirve",
        "sentence":  "The climbers finally reached the peak of the mountain."
    },
    {
        "pos":  "Noun",
        "word":  "Peasant",
        "translation":  "Köylü",
        "sentence":  "Most of the population were poor peasants who worked on the land."
    },
    {
        "pos":  "Adjective",
        "word":  "Peculiar",
        "translation":  "Tuhaf, kendine has",
        "sentence":  "He has some very peculiar habits that others find strange."
    },
    {
        "pos":  "Noun",
        "word":  "Peer",
        "translation":  "Akran, eş",
        "sentence":  "The study looks at the influence of peer pressure on teenagers."
    },
    {
        "pos":  "Noun",
        "word":  "Pen",
        "translation":  "Tükenmez kalem",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Penalty",
        "translation":  "Ceza",
        "sentence":  "There is a heavy penalty for late payment of the tax."
    },
    {
        "pos":  "Noun",
        "word":  "Pencil",
        "translation":  "Kurşun kalem",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Penny",
        "translation":  "Kuruş, peni",
        "sentence":  "Every penny saved in sourcing adds up to a large amount."
    },
    {
        "pos":  "Noun",
        "word":  "Pension",
        "translation":  "Emekli maaşı",
        "sentence":  "He is looking forward to receiving his pension when he retires."
    },
    {
        "pos":  "Noun",
        "word":  "People",
        "translation":  "İnsanlar",
        "sentence":  "Many people in Turkey prefer gold as a safe investment."
    },
    {
        "pos":  "Noun",
        "word":  "Pepper",
        "translation":  "Biber",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Preposition",
        "word":  "Per",
        "translation":  "Başına",
        "sentence":  "The price of silver per gram has increased significantly."
    },
    {
        "pos":  "Verb",
        "word":  "Perceive",
        "translation":  "Algılamak",
        "sentence":  "How do you perceive the current economic situation?"
    },
    {
        "pos":  "N.",
        "word":  "Percent",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Noun",
        "word":  "Percentage",
        "translation":  "Yüzde oranı",
        "sentence":  "What is the percentage of alternative materials in our production?"
    },
    {
        "pos":  "Noun",
        "word":  "Perception",
        "translation":  "Algı",
        "sentence":  "The public perception of the company has changed for the better."
    },
    {
        "pos":  "Adjective",
        "word":  "Perfect",
        "translation":  "Mükemmel",
        "sentence":  "İzmir is the perfect place to live and work."
    },
    {
        "pos":  "Adverb",
        "word":  "Perfectly",
        "translation":  "Mükemmel bir şekilde",
        "sentence":  "The new sourcing strategy is working perfectly."
    },
    {
        "pos":  "Verb",
        "word":  "Perform",
        "translation":  "Uygulamak, icra etmek",
        "sentence":  "We need to perform a thorough analysis of the alternative firm."
    },
    {
        "pos":  "Noun",
        "word":  "Performance",
        "translation":  "Performans",
        "sentence":  "My work performance has been consistently high for five years."
    },
    {
        "pos":  "Adverb",
        "word":  "Perhaps",
        "translation":  "Belki",
        "sentence":  "Perhaps we should consider palladium as an alternative to gold."
    },
    {
        "pos":  "Noun",
        "word":  "Period",
        "translation":  "Dönem",
        "sentence":  "The last three months have been a busy period at work."
    },
    {
        "pos":  "Adjective",
        "word":  "Permanent",
        "translation":  "Kalıcı",
        "sentence":  "We are looking for a permanent solution to the supply delay."
    },
    {
        "pos":  "Adverb",
        "word":  "Permanently",
        "translation":  "Kalıcı olarak",
        "sentence":  "He decided to move to London permanently."
    },
    {
        "pos":  "Noun",
        "word":  "Permission",
        "translation":  "İzin",
        "sentence":  "I have permission to work from home two days a week."
    },
    {
        "pos":  "Verb",
        "word":  "Permit",
        "translation":  "Noun",
        "sentence":  "İzin vermek"
    },
    {
        "pos":  "Verb",
        "word":  "Persist",
        "translation":  "Üstelemek, devam etmek",
        "sentence":  "If the symptoms persist, you should see a doctor."
    },
    {
        "pos":  "Adjective",
        "word":  "Persistent",
        "translation":  "Israrcı, kalıcı",
        "sentence":  "He has a persistent cough that won\u0027t go away."
    },
    {
        "pos":  "Noun",
        "word":  "Person",
        "translation":  "Kişi",
        "sentence":  "He is the most experienced person in the strategic sourcing team."
    },
    {
        "pos":  "Adjective",
        "word":  "Personal",
        "translation":  "Kişisel",
        "sentence":  "I have some personal goals for my YouTube channel project."
    },
    {
        "pos":  "Noun",
        "word":  "Personality",
        "translation":  "Kişilik",
        "sentence":  "She has a very strong and professional personality."
    },
    {
        "pos":  "Adverb",
        "word":  "Personally",
        "translation":  "Şahsen",
        "sentence":  "Personally, I think silver is a better investment than gold right now."
    },
    {
        "pos":  "Noun",
        "word":  "Personnel",
        "translation":  "Personel",
        "sentence":  "The company has over five hundred personnel worldwide."
    },
    {
        "pos":  "Noun",
        "word":  "Perspective",
        "translation":  "Perspektif, bakış açısı",
        "sentence":  "Getting a new perspective on the market can be very helpful."
    },
    {
        "pos":  "Verb",
        "word":  "Persuade",
        "translation":  "İkna etmek",
        "sentence":  "I managed to persuade the supplier to lower their price."
    },
    {
        "pos":  "Noun",
        "word":  "Pet",
        "translation":  "Evcil hayvan",
        "sentence":  "I\u0027m thinking of getting a pet for my house in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Petition",
        "translation":  "Dilekçe",
        "sentence":  "They organized a petition to save the local park from being built on."
    },
    {
        "pos":  "Noun",
        "word":  "Pharmacy",
        "translation":  "Eczane",
        "sentence":  "I need to go to the pharmacy to get some aspirin."
    },
    {
        "pos":  "Noun",
        "word":  "Phase",
        "translation":  "Evre, aşama",
        "sentence":  "We are currently in the second phase of the cost-down study."
    },
    {
        "pos":  "Noun",
        "word":  "Phenomenon",
        "translation":  "Fenomen, olay",
        "sentence":  "The rapid rise of silver prices is an interesting phenomenon."
    },
    {
        "pos":  "Noun",
        "word":  "Philosopher",
        "translation":  "Filozof",
        "sentence":  "Socrates was a famous ancient Greek philosopher."
    },
    {
        "pos":  "Adjective",
        "word":  "Philosophical",
        "translation":  "Felsefi",
        "sentence":  "The book explores deep philosophical questions about life and death."
    },
    {
        "pos":  "Noun",
        "word":  "Philosophy",
        "translation":  "Felsefe",
        "sentence":  "My professional philosophy is based on transparency and cost efficiency."
    },
    {
        "pos":  "Noun",
        "word":  "Phone",
        "translation":  "Verb",
        "sentence":  "Telefon"
    },
    {
        "pos":  "Photograph",
        "word":  "Photo",
        "translation":  "Noun",
        "sentence":  "Fotoğraf"
    },
    {
        "pos":  "Noun",
        "word":  "Phrase",
        "translation":  "İfade, tabir",
        "sentence":  "\"Cost-down\" is a common phrase in my daily work tasks."
    },
    {
        "pos":  "Adjective",
        "word":  "Physical",
        "translation":  "Fiziksel",
        "sentence":  "Managing alternative raw materials involves checking their physical properties."
    },
    {
        "pos":  "Noun",
        "word":  "Physician",
        "translation":  "Hekim, doktor",
        "sentence":  "He is a senior physician at the city\u0027s main hospital."
    },
    {
        "pos":  "Noun",
        "word":  "Physics",
        "translation":  "Fizik",
        "sentence":  "(Genel eğitim terimi.)"
    },
    {
        "pos":  "Noun",
        "word":  "Piano",
        "translation":  "Piyano",
        "sentence":  "We can use piano melodies for the educational children\u0027s songs."
    },
    {
        "pos":  "Verb",
        "word":  "Pick",
        "translation":  "Noun",
        "sentence":  "Seçmek, toplamak"
    },
    {
        "pos":  "Noun",
        "word":  "Picture",
        "translation":  "Verb",
        "sentence":  "Resim"
    },
    {
        "pos":  "Noun",
        "word":  "Piece",
        "translation":  "Parça",
        "sentence":  "Every piece of silver has a different weight and value."
    },
    {
        "pos":  "Noun",
        "word":  "Pig",
        "translation":  "Domuz",
        "sentence":  "The children\u0027s video will have a song about a little pig."
    },
    {
        "pos":  "Noun",
        "word":  "Pile",
        "translation":  "Verb",
        "sentence":  "Yığın"
    },
    {
        "pos":  "Noun",
        "word":  "Pill",
        "translation":  "Hap",
        "sentence":  "The doctor prescribed some pills to help him sleep."
    },
    {
        "pos":  "Noun",
        "word":  "Pilot",
        "translation":  "Pilot",
        "sentence":  "The pilot apologized for the flight delay at Sabiha Gökçen."
    },
    {
        "pos":  "Noun",
        "word":  "Pin",
        "translation":  "Verb",
        "sentence":  "İğne"
    },
    {
        "pos":  "Adj.",
        "word":  "Pink",
        "translation":  "Noun",
        "sentence":  "Pembe"
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Pioneer",
        "translation":  "Öncü / Öncülük etmek",
        "sentence":  "He was a pioneer in the field of heart surgery."
    },
    {
        "pos":  "Noun",
        "word":  "Pipe",
        "translation":  "Boru",
        "sentence":  "The factory uses high-quality metal pipes for the cooling system."
    },
    {
        "pos":  "Noun",
        "word":  "Pipeline",
        "translation":  "Boru hattı",
        "sentence":  "The new oil pipeline will run through several different countries."
    },
    {
        "pos":  "Noun",
        "word":  "Pirate",
        "translation":  "Korsan",
        "sentence":  "The software is a pirate copy and is illegal to use."
    },
    {
        "pos":  "Noun",
        "word":  "Pit",
        "translation":  "Çukur, kuyu, çekirdek",
        "sentence":  "The miners spent all day working deep in the pit."
    },
    {
        "pos":  "Noun",
        "word":  "Pitch",
        "translation":  "Saha",
        "sentence":  "Ses tonu"
    },
    {
        "pos":  "Noun",
        "word":  "Pity",
        "translation":  "Acıma, yazık",
        "sentence":  "It\u0027s a pity that you couldn\u0027t come to the party."
    },
    {
        "pos":  "Noun",
        "word":  "Place",
        "translation":  "Verb",
        "sentence":  "Yer"
    },
    {
        "pos":  "Noun",
        "word":  "Placement",
        "translation":  "Yerleştirme, staj",
        "sentence":  "The university helps students find work placements during the summer."
    },
    {
        "pos":  "Adjective",
        "word":  "Plain",
        "translation":  "Sade, yalın",
        "sentence":  "I prefer a plain and clear design for my social media pages."
    },
    {
        "pos":  "Noun",
        "word":  "Plan",
        "translation":  "Verb",
        "sentence":  "Plan"
    },
    {
        "pos":  "Noun",
        "word":  "Plane",
        "translation":  "Uçak",
        "sentence":  "I was on the plane when I heard about the cancellation."
    },
    {
        "pos":  "Noun",
        "word":  "Planet",
        "translation":  "Gezegen",
        "sentence":  "We must protect our planet by using sustainable materials."
    },
    {
        "pos":  "Noun",
        "word":  "Planning",
        "translation":  "Planlama",
        "sentence":  "Strategic planning is the most important part of sourcing."
    },
    {
        "pos":  "Noun",
        "word":  "Plant",
        "translation":  "Verb",
        "sentence":  "Bitki, fabrika"
    },
    {
        "pos":  "Noun",
        "word":  "Plastic",
        "translation":  "Adj.",
        "sentence":  "Plastik"
    },
    {
        "pos":  "Noun",
        "word":  "Plate",
        "translation":  "Tabak, levha",
        "sentence":  "The metal plates are ready for the production line."
    },
    {
        "pos":  "Noun",
        "word":  "Platform",
        "translation":  "Platform",
        "sentence":  "YouTube is the perfect platform for my educational content."
    },
    {
        "pos":  "Verb",
        "word":  "Play",
        "translation":  "Noun",
        "sentence":  "Oynamak"
    },
    {
        "pos":  "Noun",
        "word":  "Player",
        "translation":  "Oyuncu",
        "sentence":  "He is a key player in the precious metals market."
    },
    {
        "pos":  "Noun",
        "word":  "Plea",
        "translation":  "Rica, yalvarış, savunma",
        "sentence":  "The prisoner made a plea for mercy."
    },
    {
        "pos":  "Verb",
        "word":  "Plead",
        "translation":  "Yalvarmak, (suçunu) kabul etmek/etmemek",
        "sentence":  "He decided to plead guilty to the charges."
    },
    {
        "pos":  "Adjective",
        "word":  "Pleasant",
        "translation":  "Keyifli, hoş",
        "sentence":  "It was a pleasant surprise to receive a bonus for my 5th year."
    },
    {
        "pos":  "Exclam.",
        "word":  "Please",
        "translation":  "Verb",
        "sentence":  "Lütfen"
    },
    {
        "pos":  "Adjective",
        "word":  "Pleased",
        "translation":  "Memnun",
        "sentence":  "My manager was pleased with the cost-down results."
    },
    {
        "pos":  "Noun",
        "word":  "Pleasure",
        "translation":  "Zevk, memnuniyet",
        "sentence":  "It is a pleasure to work with such a professional team in İzmir."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Pledge",
        "translation":  "Söz vermek / Söz, rehin",
        "sentence":  "The government has made a pledge to reduce unemployment."
    },
    {
        "pos":  "Pronoun",
        "word":  "Plenty",
        "translation":  "Çok, bolca",
        "sentence":  "There is plenty of information online about silver price trends."
    },
    {
        "pos":  "Noun",
        "word":  "Plot",
        "translation":  "Verb",
        "sentence":  "Konu, kurgu"
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Plug",
        "translation":  "Fiş, tıpa / Fişe takmak, tıkamak",
        "sentence":  "Please plug the lamp into the socket."
    },
    {
        "pos":  "Verb",
        "word":  "Plunge",
        "translation":  "Dalmak, aniden düşmek",
        "sentence":  "The company\u0027s share price began to plunge after the news."
    },
    {
        "pos":  "Prep.",
        "word":  "Plus",
        "translation":  "Adj.",
        "sentence":  "Artı, ek olarak"
    },
    {
        "pos":  "Noun",
        "word":  "Pocket",
        "translation":  "Cep",
        "sentence":  "I put the silver coin in my pocket to keep it safe."
    },
    {
        "pos":  "Noun",
        "word":  "Poem",
        "translation":  "Şiir",
        "sentence":  "(Edebiyat terimi.)"
    },
    {
        "pos":  "Noun",
        "word":  "Point",
        "translation":  "Verb",
        "sentence":  "Nokta"
    },
    {
        "pos":  "Adjective",
        "word":  "Pointed",
        "translation":  "Sivri, keskin",
        "sentence":  "(Fiziksel özellik.)"
    },
    {
        "pos":  "Noun",
        "word":  "Poison",
        "translation":  "Verb",
        "sentence":  "Zehir"
    },
    {
        "pos":  "Adjective",
        "word":  "Poisonous",
        "translation":  "Zehirli",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Pole",
        "translation":  "Direk, kutup",
        "sentence":  "The North Pole is one of the coldest places on Earth."
    },
    {
        "pos":  "Noun",
        "word":  "Police",
        "translation":  "Polis",
        "sentence":  "The police helped manage the traffic near the airport."
    },
    {
        "pos":  "Noun",
        "word":  "Policy",
        "translation":  "Politika, kural",
        "sentence":  "Our company has a strict policy regarding supplier ethics."
    },
    {
        "pos":  "Adjective",
        "word":  "Polite",
        "translation":  "Kibar",
        "sentence":  "It is important to be polite when negotiating with firms."
    },
    {
        "pos":  "Adjective",
        "word":  "Political",
        "translation":  "Siyasi",
        "sentence":  "Political changes in Russia often affect palladium supply."
    },
    {
        "pos":  "Noun",
        "word":  "Poll",
        "translation":  "Anket, oylama",
        "sentence":  "According to a recent poll, most people support the new law."
    },
    {
        "pos":  "Noun",
        "word":  "Pollution",
        "translation":  "Kirlilik",
        "sentence":  "We are working to reduce the pollution caused by our factory."
    },
    {
        "pos":  "Noun",
        "word":  "Pond",
        "translation":  "Gölet",
        "sentence":  "The children like to feed the ducks at the local pond."
    },
    {
        "pos":  "Noun",
        "word":  "Pool",
        "translation":  "Havuz",
        "sentence":  "There is a nice swimming pool near my house in İzmir."
    },
    {
        "pos":  "Adjective",
        "word":  "Poor",
        "translation":  "Fakir, kötü",
        "sentence":  "Poor communication can lead to mistakes in sourcing."
    },
    {
        "pos":  "Verb",
        "word":  "Pop",
        "translation":  "Patlatmak, aniden çıkmak",
        "sentence":  "I’m just going to pop into the shop for a minute."
    },
    {
        "pos":  "N.",
        "word":  "Pop",
        "translation":  "Adj.",
        "sentence":  "Pop (müzik vb.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Popular",
        "translation":  "Popüler",
        "sentence":  "Football is the most popular sport for betting analysis."
    },
    {
        "pos":  "Noun",
        "word":  "Population",
        "translation":  "Nüfus",
        "sentence":  "The population of İzmir is growing every year."
    },
    {
        "pos":  "Noun",
        "word":  "Port",
        "translation":  "Liman",
        "sentence":  "The silver shipment arrived at the port this morning."
    },
    {
        "pos":  "Noun",
        "word":  "Portfolio",
        "translation":  "Portföy",
        "sentence":  "He has a very diverse investment portfolio."
    },
    {
        "pos":  "Noun",
        "word":  "Portion",
        "translation":  "Porsiyon, bölüm",
        "sentence":  "I only ate a small portion of my dinner."
    },
    {
        "pos":  "Noun",
        "word":  "Portrait",
        "translation":  "Portre",
        "sentence":  "(Sanat terimi.)"
    },
    {
        "pos":  "Verb",
        "word":  "Portray",
        "translation":  "Betimlemek, canlandırmak",
        "sentence":  "The movie attempts to portray the life of the famous artist."
    },
    {
        "pos":  "Verb",
        "word":  "Pose",
        "translation":  "Poz vermek",
        "sentence":  "Teşkil etmek"
    },
    {
        "pos":  "Noun",
        "word":  "Position",
        "translation":  "Verb",
        "sentence":  "Konum"
    },
    {
        "pos":  "Adjective",
        "word":  "Positive",
        "translation":  "Olumlu",
        "sentence":  "I received positive feedback on my performance review."
    },
    {
        "pos":  "Verb",
        "word":  "Possess",
        "translation":  "Sahip olmak",
        "sentence":  "You possess the skills needed to manage complex suppliers."
    },
    {
        "pos":  "Noun",
        "word":  "Possession",
        "translation":  "Mülk, sahiplik",
        "sentence":  "Gold is a valuable possession to have in your portfolio."
    },
    {
        "pos":  "Noun",
        "word":  "Possibility",
        "translation":  "Olasılık",
        "sentence":  "There is a possibility that silver prices will hit a new record."
    },
    {
        "pos":  "Adjective",
        "word":  "Possible",
        "translation":  "Mümkün",
        "sentence":  "It is possible to achieve a 10% cost reduction this year."
    },
    {
        "pos":  "Adverb",
        "word":  "Possibly",
        "translation":  "Muhtemelen",
        "sentence":  "I will possibly travel to Germany for a supplier visit in May."
    },
    {
        "pos":  "Noun",
        "word":  "Post",
        "translation":  "Verb",
        "sentence":  "Posta, gönderi"
    },
    {
        "pos":  "Verb",
        "word":  "Postpone",
        "translation":  "Ertelemek",
        "sentence":  "The meeting has been postponed until next Friday."
    },
    {
        "pos":  "Adjective",
        "word":  "Postwar",
        "translation":  "Savaş sonrası",
        "sentence":  "The country experienced a period of rapid economic growth in the postwar era."
    },
    {
        "pos":  "Noun",
        "word":  "Pot",
        "translation":  "Tencere, saksı",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Potato",
        "translation":  "Patates",
        "sentence":  "(Yiyecek.)"
    },
    {
        "pos":  "Adj.",
        "word":  "Potential",
        "translation":  "Noun",
        "sentence":  "Potansiyel"
    },
    {
        "pos":  "Adverb",
        "word":  "Potentially",
        "translation":  "Potansiyel olarak",
        "sentence":  "The situation is potentially very dangerous."
    },
    {
        "pos":  "Noun",
        "word":  "Pound",
        "translation":  "Sterlin",
        "sentence":  "Pound (ağırlık)"
    },
    {
        "pos":  "Verb",
        "word":  "Pour",
        "translation":  "Dökmek",
        "sentence":  "Be careful when you pour the liquid metal into the mold."
    },
    {
        "pos":  "Noun",
        "word":  "Poverty",
        "translation":  "Yoksulluk",
        "sentence":  "(Toplumsal terim.)"
    },
    {
        "pos":  "Noun",
        "word":  "Powder",
        "translation":  "Toz",
        "sentence":  "Some raw materials are delivered in the form of a fine powder."
    },
    {
        "pos":  "Noun",
        "word":  "Power",
        "translation":  "Verb",
        "sentence":  "Güç"
    },
    {
        "pos":  "Adjective",
        "word":  "Powerful",
        "translation":  "Güçlü",
        "sentence":  "Akbank is a powerful institution in the Turkish financial market."
    },
    {
        "pos":  "Adjective",
        "word":  "Practical",
        "translation":  "Pratik",
        "sentence":  "Finding alternative suppliers is a practical way to save money."
    },
    {
        "pos":  "Noun",
        "word":  "Practice",
        "translation":  "Verb",
        "sentence":  "Uygulama, pratik"
    },
    {
        "pos":  "Noun",
        "word":  "Practitioner",
        "translation":  "Uygulayıcı, (doktor, avukat vb.)",
        "sentence":  "He is a general practitioner with over twenty years of experience."
    },
    {
        "pos":  "Noun",
        "word":  "Praise",
        "translation":  "Verb",
        "sentence":  "Övgü"
    },
    {
        "pos":  "Verb",
        "word":  "Pray",
        "translation":  "Dua etmek",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Verb",
        "word":  "Preach",
        "translation":  "Vaaz vermek",
        "sentence":  "The priest began to preach to the congregation."
    },
    {
        "pos":  "Verb",
        "word":  "Precede",
        "translation":  "-den önce gelmek",
        "sentence":  "The formal dinner will be preceded by a short reception."
    },
    {
        "pos":  "Noun",
        "word":  "Precedent",
        "translation":  "Emsal, gelenek",
        "sentence":  "The judge\u0027s decision set an important legal precedent."
    },
    {
        "pos":  "Noun",
        "word":  "Precious",
        "translation":  "Değerli, kıymetli",
        "sentence":  "Gold is a precious metal that has been used for centuries."
    },
    {
        "pos":  "Adjective",
        "word":  "Precise",
        "translation":  "Kesin, tam",
        "sentence":  "I need you to give me the precise measurements of the room."
    },
    {
        "pos":  "Adverb",
        "word":  "Precisely",
        "translation":  "Tam olarak, kesinlikle",
        "sentence":  "That is precisely what I was trying to say."
    },
    {
        "pos":  "Noun",
        "word":  "Precision",
        "translation":  "Hassasiyet, kesinlik",
        "sentence":  "The surgery requires a high degree of precision."
    },
    {
        "pos":  "Noun",
        "word":  "Predator",
        "translation":  "Yırtıcı hayvan",
        "sentence":  "The lion is a powerful predator that hunts in the grasslands."
    },
    {
        "pos":  "Noun",
        "word":  "Predecessor",
        "translation":  "Selef (önce gelen kişi)",
        "sentence":  "He is much more popular than his predecessor."
    },
    {
        "pos":  "Verb",
        "word":  "Predict",
        "translation":  "Tahmin etmek",
        "sentence":  "It is hard to predict the exact price of gold for next month."
    },
    {
        "pos":  "Adjective",
        "word":  "Predictable",
        "translation":  "Öngörülebilir",
        "sentence":  "The ending of the movie was very predictable."
    },
    {
        "pos":  "Noun",
        "word":  "Prediction",
        "translation":  "Tahmin",
        "sentence":  "My prediction is that silver will be more profitable than gold."
    },
    {
        "pos":  "Adverb",
        "word":  "Predominantly",
        "translation":  "Ağırlıklı olarak, çoğunlukla",
        "sentence":  "The population of the island is predominantly of European descent."
    },
    {
        "pos":  "Verb",
        "word":  "Prefer",
        "translation":  "Tercih etmek",
        "sentence":  "I prefer the Birevim car financing option over a bank loan."
    },
    {
        "pos":  "Noun",
        "word":  "Preference",
        "translation":  "Tercih",
        "sentence":  "Do you have a specific color preference for the new project layout?"
    },
    {
        "pos":  "Noun",
        "word":  "Pregnancy",
        "translation":  "Hamilelik",
        "sentence":  "The company offers extended leave for employees during pregnancy."
    },
    {
        "pos":  "Adjective",
        "word":  "Pregnant",
        "translation":  "Hamile",
        "sentence":  "(Sağlık terimi.)"
    },
    {
        "pos":  "Noun",
        "word":  "Prejudice",
        "translation":  "Önyargı",
        "sentence":  "We must ensure that hiring decisions are free from any prejudice."
    },
    {
        "pos":  "Adjective",
        "word":  "Preliminary",
        "translation":  "Ön, başlangıç",
        "sentence":  "We have completed the preliminary research on alternative raw materials."
    },
    {
        "pos":  "Noun",
        "word":  "Premier",
        "translation":  "Başbakan, önde gelen",
        "sentence":  "He is one of the premier experts in asset management."
    },
    {
        "pos":  "Noun",
        "word":  "Premise",
        "translation":  "Önerme, dayanak",
        "sentence":  "The entire strategy is based on the premise that costs will decrease."
    },
    {
        "pos":  "Noun",
        "word":  "Premium",
        "translation":  "Prim, yüksek kalite",
        "sentence":  "Customers are often willing to pay a premium for organic products."
    },
    {
        "pos":  "Noun",
        "word":  "Preparation",
        "translation":  "Hazırlık",
        "sentence":  "Good preparation is key to a successful supplier meeting."
    },
    {
        "pos":  "Verb",
        "word":  "Prepare",
        "translation":  "Hazırlamak",
        "sentence":  "I need to prepare my self-evaluation note for the anniversary."
    },
    {
        "pos":  "Adjective",
        "word":  "Prepared",
        "translation":  "Hazır",
        "sentence":  "I am fully prepared for the upcoming match analysis."
    },
    {
        "pos":  "Verb",
        "word":  "Prescribe",
        "translation":  "Reçete yazmak, kural koymak",
        "sentence":  "The doctor will prescribe some medicine to help you recover."
    },
    {
        "pos":  "Noun",
        "word":  "Prescription",
        "translation":  "Reçete",
        "sentence":  "You can pick up your prescription from the pharmacy nearby."
    },
    {
        "pos":  "Noun",
        "word":  "Presence",
        "translation":  "Varlık, huzur",
        "sentence":  "Your presence at the meeting is required."
    },
    {
        "pos":  "Adj.",
        "word":  "Present",
        "translation":  "N.",
        "sentence":  "V."
    },
    {
        "pos":  "Noun",
        "word":  "Presentation",
        "translation":  "Sunum",
        "sentence":  "My presentation on alternative raw materials went very well."
    },
    {
        "pos":  "Adverb",
        "word":  "Presently",
        "translation":  "Şu anda, yakında",
        "sentence":  "The manager is presently reviewing the latest cost reduction report."
    },
    {
        "pos":  "Noun",
        "word":  "Preservation",
        "translation":  "Koruma, muhafaza",
        "sentence":  "The preservation of natural resources is a key part of our mission."
    },
    {
        "pos":  "Verb",
        "word":  "Preserve",
        "translation":  "Korumak, muhafaza etmek",
        "sentence":  "We must preserve the quality of our silver holdings."
    },
    {
        "pos":  "Verb",
        "word":  "Preside",
        "translation":  "Başkanlık etmek",
        "sentence":  "Who will preside over the annual shareholder meeting?"
    },
    {
        "pos":  "Noun",
        "word":  "Presidency",
        "translation":  "Başkanlık",
        "sentence":  "His presidency lasted for five years and brought many changes."
    },
    {
        "pos":  "Noun",
        "word":  "President",
        "translation":  "Başkan",
        "sentence":  "The President of the company will visit our office in İzmir."
    },
    {
        "pos":  "Adjective",
        "word":  "Presidential",
        "translation":  "Başkanlık ile ilgili",
        "sentence":  "The presidential election will take place next month."
    },
    {
        "pos":  "Verb",
        "word":  "Press",
        "translation":  "Noun",
        "sentence":  "Basmak"
    },
    {
        "pos":  "Noun",
        "word":  "Pressure",
        "translation":  "Basınç, baskı",
        "sentence":  "There is a lot of pressure to find alternative suppliers quickly."
    },
    {
        "pos":  "Adjective",
        "word":  "Prestigious",
        "translation":  "Saygın, prestijli",
        "sentence":  "She received an offer from a very prestigious firm in İzmir."
    },
    {
        "pos":  "Adverb",
        "word":  "Presumably",
        "translation":  "Muhtemelen",
        "sentence":  "Presumably, the flight was canceled due to the heavy storm."
    },
    {
        "pos":  "Verb",
        "word":  "Presume",
        "translation":  "Varsaymak",
        "sentence":  "I presume that you have already contacted the alternative suppliers."
    },
    {
        "pos":  "Verb",
        "word":  "Pretend",
        "translation":  "-miş gibi yapmak",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Adj.",
        "word":  "Pretty",
        "translation":  "Adv.",
        "sentence":  "Güzel"
    },
    {
        "pos":  "Verb",
        "word":  "Prevail",
        "translation":  "Galip gelmek, yaygın olmak",
        "sentence":  "We hope that common sense will prevail in this difficult situation."
    },
    {
        "pos":  "Noun",
        "word":  "Prevalence",
        "translation":  "Yaygınlık",
        "sentence":  "The prevalence of the disease has decreased significantly."
    },
    {
        "pos":  "Verb",
        "word":  "Prevent",
        "translation":  "Önlemek",
        "sentence":  "We must prevent any delays in the sourcing process."
    },
    {
        "pos":  "Noun",
        "word":  "Prevention",
        "translation":  "Önleme",
        "sentence":  "Fire prevention measures are strictly followed in the factory."
    },
    {
        "pos":  "Adjective",
        "word":  "Previous",
        "translation":  "Önceki",
        "sentence":  "In my previous year, I focused on supplier management."
    },
    {
        "pos":  "Adverb",
        "word":  "Previously",
        "translation":  "Önceden",
        "sentence":  "Previously, we only worked with one main supplier."
    },
    {
        "pos":  "Noun",
        "word":  "Prey",
        "translation":  "Av",
        "sentence":  "The eagle circled high in the sky, searching for its prey."
    },
    {
        "pos":  "Noun",
        "word":  "Price",
        "translation":  "Verb",
        "sentence":  "Fiyat"
    },
    {
        "pos":  "Noun",
        "word":  "Pride",
        "translation":  "Gurur",
        "sentence":  "He takes great pride in his five years of service at the company."
    },
    {
        "pos":  "Noun",
        "word":  "Priest",
        "translation":  "Rahip",
        "sentence":  "(Dini terim.)"
    },
    {
        "pos":  "Adverb",
        "word":  "Primarily",
        "translation":  "Öncelikle, esasen",
        "sentence":  "Our focus is primarily on managing alternative raw materials."
    },
    {
        "pos":  "Adjective",
        "word":  "Primary",
        "translation":  "Birincil, temel",
        "sentence":  "My primary goal is to finish my B2 English vocabulary."
    },
    {
        "pos":  "Princess",
        "word":  "Prince",
        "translation":  "Noun",
        "sentence":  "Prens"
    },
    {
        "pos":  "Adj. / Noun",
        "word":  "Principal",
        "translation":  "Temel, asıl / Okul müdürü",
        "sentence":  "The principal goal of this meeting is to reduce production costs."
    },
    {
        "pos":  "N.",
        "word":  "Principal",
        "translation":  "Adj.",
        "sentence":  "Müdür"
    },
    {
        "pos":  "Noun",
        "word":  "Principle",
        "translation":  "İlke, prensip",
        "sentence":  "I follow the principle of honesty in all my work tasks."
    },
    {
        "pos":  "Verb",
        "word":  "Print",
        "translation":  "Noun",
        "sentence":  "Yazdırmak"
    },
    {
        "pos":  "Noun",
        "word":  "Printer",
        "translation":  "Yazıcı",
        "sentence":  "The printer in the sourcing office is out of paper."
    },
    {
        "pos":  "Adjective",
        "word":  "Prior",
        "translation":  "Önceki, öncelikli",
        "sentence":  "You must provide a valid ID prior to entering the facility."
    },
    {
        "pos":  "Noun",
        "word":  "Priority",
        "translation":  "Öncelik",
        "sentence":  "Cost-down studies are our top priority for this quarter."
    },
    {
        "pos":  "Noun",
        "word":  "Prison",
        "translation":  "Hapishane",
        "sentence":  "(Hukuki terim.)"
    },
    {
        "pos":  "Noun",
        "word":  "Privacy",
        "translation":  "Gizlilik",
        "sentence":  "I value my privacy on social media platforms."
    },
    {
        "pos":  "Adjective",
        "word":  "Private",
        "translation":  "Özel",
        "sentence":  "I keep my investment records in a private folder."
    },
    {
        "pos":  "Noun",
        "word":  "Privatization",
        "translation":  "Özelleştirme",
        "sentence":  "The privatization of the state airline caused a lot of debate."
    },
    {
        "pos":  "Noun",
        "word":  "Privilege",
        "translation":  "Ayrıcalık",
        "sentence":  "It is a great privilege to work with such a talented team."
    },
    {
        "pos":  "Noun",
        "word":  "Prize",
        "translation":  "Ödül",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Probability",
        "translation":  "Olasılık",
        "sentence":  "What is the probability of a significant rise in silver prices?"
    },
    {
        "pos":  "Adjective",
        "word":  "Probable",
        "translation":  "Olası, muhtemel",
        "sentence":  "It is probable that we will find a more affordable supplier."
    },
    {
        "pos":  "Adverb",
        "word":  "Probably",
        "translation":  "Muhtemelen",
        "sentence":  "I will probably buy the car in March 2026."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Probe",
        "translation":  "Soruşturma / İncelemek",
        "sentence":  "The police launched a probe into the suspicious financial transactions."
    },
    {
        "pos":  "Noun",
        "word":  "Problem",
        "translation":  "Sorun",
        "sentence":  "We had a small problem with the flight cancellation yesterday."
    },
    {
        "pos":  "Adjective",
        "word":  "Problematic",
        "translation":  "Sorunlu",
        "sentence":  "The current supply chain issues are very problematic for us."
    },
    {
        "pos":  "Noun",
        "word":  "Procedure",
        "translation":  "Prosedür",
        "sentence":  "What is the procedure for requesting compensation from the airline?"
    },
    {
        "pos":  "Verb",
        "word":  "Proceed",
        "translation":  "Devam etmek, ilerlemek",
        "sentence":  "We can now proceed with the alternative firm selection process."
    },
    {
        "pos":  "Noun",
        "word":  "Proceeding",
        "translation":  "İşlem, dava süreci",
        "sentence":  "The legal proceedings against the company lasted for two years."
    },
    {
        "pos":  "Noun",
        "word":  "Proceeds",
        "translation":  "Hasılat, kazanç",
        "sentence":  "The proceeds from the charity event will be used to build a school."
    },
    {
        "pos":  "Noun",
        "word":  "Process",
        "translation":  "Verb",
        "sentence":  "Süreç"
    },
    {
        "pos":  "Noun",
        "word":  "Processing",
        "translation":  "İşleme",
        "sentence":  "Data processing is a crucial part of social media automation."
    },
    {
        "pos":  "Noun",
        "word":  "Processor",
        "translation":  "İşlemci",
        "sentence":  "This computer has a very powerful processor for fast calculations."
    },
    {
        "pos":  "Verb",
        "word":  "Proclaim",
        "translation":  "İlan etmek",
        "sentence":  "The government decided to proclaim a state of emergency."
    },
    {
        "pos":  "Verb",
        "word":  "Produce",
        "translation":  "Üretmek",
        "sentence":  "Our factory produces high-quality metal parts for cars."
    },
    {
        "pos":  "Noun",
        "word":  "Producer",
        "translation":  "Üretici",
        "sentence":  "Turkey is a major producer of various industrial materials."
    },
    {
        "pos":  "Noun",
        "word":  "Product",
        "translation":  "Ürün",
        "sentence":  "This is our most popular product in the European market."
    },
    {
        "pos":  "Noun",
        "word":  "Production",
        "translation":  "Üretim",
        "sentence":  "Production costs have decreased thanks to our cost-down work."
    },
    {
        "pos":  "Adjective",
        "word":  "Productive",
        "translation":  "Verimli",
        "sentence":  "We had a very productive meeting regarding the new YouTube channel."
    },
    {
        "pos":  "Noun",
        "word":  "Productivity",
        "translation":  "Verimlilik",
        "sentence":  "New machinery has helped us increase factory productivity."
    },
    {
        "pos":  "Noun",
        "word":  "Profession",
        "translation":  "Meslek",
        "sentence":  "Sourcing is a very challenging but interesting profession."
    },
    {
        "pos":  "Adj.",
        "word":  "Professional",
        "translation":  "Noun",
        "sentence":  "Profesyonel"
    },
    {
        "pos":  "Noun",
        "word":  "Professor",
        "translation":  "Profesör",
        "sentence":  "(Eğitim terimi.)"
    },
    {
        "pos":  "Noun",
        "word":  "Profile",
        "translation":  "Profil",
        "sentence":  "I am updating my professional profile for the performance review."
    },
    {
        "pos":  "Noun",
        "word":  "Profit",
        "translation":  "Kar",
        "sentence":  "The profit from my silver investment was higher than expected."
    },
    {
        "pos":  "Adjective",
        "word":  "Profitable",
        "translation":  "Karlı",
        "sentence":  "Investing in precious metals can be very profitable in the long term."
    },
    {
        "pos":  "Adjective",
        "word":  "Profound",
        "translation":  "Derin, köklü",
        "sentence":  "The discovery of the new material had a profound impact on the industry."
    },
    {
        "pos":  "Noun",
        "word":  "Program",
        "translation":  "Verb",
        "sentence":  "Program"
    },
    {
        "pos":  "Noun",
        "word":  "Programming",
        "translation":  "Programlama",
        "sentence":  "I am learning Python for my social media programming project."
    },
    {
        "pos":  "Noun",
        "word":  "Progress",
        "translation":  "Verb",
        "sentence":  "İlerleme"
    },
    {
        "pos":  "Adjective",
        "word":  "Progressive",
        "translation":  "İlerici, kademeli",
        "sentence":  "The company is known for its progressive environmental policies."
    },
    {
        "pos":  "Verb",
        "word":  "Prohibit",
        "translation":  "Yasaklamak",
        "sentence":  "The law will prohibit the use of certain harmful chemicals."
    },
    {
        "pos":  "Noun",
        "word":  "Project",
        "translation":  "Verb",
        "sentence":  "Proje"
    },
    {
        "pos":  "Noun",
        "word":  "Projection",
        "translation":  "Projeksiyon, öngörü",
        "sentence":  "Our financial projection for next year looks very positive."
    },
    {
        "pos":  "Adjective",
        "word":  "Prominent",
        "translation":  "Önde gelen, belirgin",
        "sentence":  "He is a prominent figure in the field of strategic sourcing."
    },
    {
        "pos":  "Verb",
        "word":  "Promise",
        "translation":  "Noun",
        "sentence":  "Söz vermek"
    },
    {
        "pos":  "Adjective",
        "word":  "Promising",
        "translation":  "Gelecek vadeden",
        "sentence":  "The initial results of the cost-down study are very promising."
    },
    {
        "pos":  "Verb",
        "word":  "Promote",
        "translation":  "Terfi ettirmek",
        "sentence":  "Tanıtım yapmak"
    },
    {
        "pos":  "Noun",
        "word":  "Promotion",
        "translation":  "Terfi, tanıtım",
        "sentence":  "She was very happy to receive a promotion to senior manager."
    },
    {
        "pos":  "Verb",
        "word":  "Prompt",
        "translation":  "Teşvik etmek, sebep olmak",
        "sentence":  "The increase in costs will prompt us to find new suppliers."
    },
    {
        "pos":  "Verb",
        "word":  "Pronounce",
        "translation":  "Telaffuz etmek",
        "sentence":  "I am learning how to pronounce German words correctly."
    },
    {
        "pos":  "Adjective",
        "word":  "Pronounced",
        "translation":  "Belirgin",
        "sentence":  "There has been a pronounced improvement in your English skills."
    },
    {
        "pos":  "Noun",
        "word":  "Proof",
        "translation":  "Kanıt, ispat",
        "sentence":  "Do you have proof of the price difference from the other firm?"
    },
    {
        "pos":  "Noun",
        "word":  "Propaganda",
        "translation":  "Propaganda",
        "sentence":  "The organization was accused of spreading political propaganda."
    },
    {
        "pos":  "Adjective",
        "word":  "Proper",
        "translation":  "Uygun, düzgün",
        "sentence":  "It is essential to use the proper terminology in sourcing reports."
    },
    {
        "pos":  "Adverb",
        "word":  "Properly",
        "translation":  "Düzgünce",
        "sentence":  "The gold weight must be calculated properly."
    },
    {
        "pos":  "Noun",
        "word":  "Property",
        "translation":  "Mülk, özellik",
        "sentence":  "Silver has excellent conductive properties."
    },
    {
        "pos":  "Noun",
        "word":  "Proportion",
        "translation":  "Oran",
        "sentence":  "A large proportion of our budget is spent on raw materials."
    },
    {
        "pos":  "Noun",
        "word":  "Proposal",
        "translation":  "Teklif, öneri",
        "sentence":  "I am preparing a proposal for the new car financing plan."
    },
    {
        "pos":  "Verb",
        "word":  "Propose",
        "translation":  "Önermek",
        "sentence":  "I want to propose a new method for cost-down studies."
    },
    {
        "pos":  "Noun",
        "word":  "Proposition",
        "translation":  "Teklif, öneri",
        "sentence":  "The alternative firm made a very interesting business proposition."
    },
    {
        "pos":  "Verb",
        "word":  "Prosecute",
        "translation":  "Dava açmak",
        "sentence":  "The state decided to prosecute him for financial fraud."
    },
    {
        "pos":  "Noun",
        "word":  "Prosecution",
        "translation":  "Savcılık, kovuşturma",
        "sentence":  "The prosecution presented strong evidence during the trial."
    },
    {
        "pos":  "Noun",
        "word":  "Prosecutor",
        "translation":  "Savcı",
        "sentence":  "The prosecutor is investigating the details of the robbery."
    },
    {
        "pos":  "Noun",
        "word":  "Prospect",
        "translation":  "Beklenti, olasılık",
        "sentence":  "The prospect of a salary increase is very motivating."
    },
    {
        "pos":  "Adjective",
        "word":  "Prospective",
        "translation":  "Olası, müstakbel",
        "sentence":  "We are interviewing several prospective candidates for the role."
    },
    {
        "pos":  "Noun",
        "word":  "Prosperity",
        "translation":  "Refah, zenginlik",
        "sentence":  "The new economic policy brought prosperity to the region."
    },
    {
        "pos":  "Verb",
        "word":  "Protect",
        "translation":  "Korumak",
        "sentence":  "We must protect our investment portfolio from market volatility."
    },
    {
        "pos":  "Noun",
        "word":  "Protection",
        "translation":  "Koruma",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Protective",
        "translation":  "Koruyucu",
        "sentence":  "Workers must wear protective gear at all times in the warehouse."
    },
    {
        "pos":  "Noun",
        "word":  "Protein",
        "translation":  "Protein",
        "sentence":  "A diet high in protein is essential for muscle recovery."
    },
    {
        "pos":  "Noun",
        "word":  "Protest",
        "translation":  "Verb",
        "sentence":  "Protesto"
    },
    {
        "pos":  "Noun",
        "word":  "Protester",
        "translation":  "Protestocu",
        "sentence":  "Protesters gathered in the city center to demand better wages."
    },
    {
        "pos":  "Noun",
        "word":  "Protocol",
        "translation":  "Protokol",
        "sentence":  "All employees must follow the safety protocol during a fire drill."
    },
    {
        "pos":  "Adjective",
        "word":  "Proud",
        "translation":  "Gururlu",
        "sentence":  "I am proud of reaching my fifth year at this company."
    },
    {
        "pos":  "Verb",
        "word":  "Prove",
        "translation":  "Kanıtlamak",
        "sentence":  "I want to prove that I can manage alternative suppliers successfully."
    },
    {
        "pos":  "Verb",
        "word":  "Provide",
        "translation":  "Sağlamak",
        "sentence":  "The new firm will provide us with alternative raw materials."
    },
    {
        "pos":  "Noun",
        "word":  "Province",
        "translation":  "Vilayet, il",
        "sentence":  "İzmir is one of the most beautiful provinces in Turkey."
    },
    {
        "pos":  "Adjective",
        "word":  "Provincial",
        "translation":  "Taşralı, yerel",
        "sentence":  "The story was published in several provincial newspapers."
    },
    {
        "pos":  "Noun",
        "word":  "Provision",
        "translation":  "Tedarik, hüküm",
        "sentence":  "The contract includes a provision for early cancellation."
    },
    {
        "pos":  "Verb",
        "word":  "Provoke",
        "translation":  "Kışkırtmak, neden olmak",
        "sentence":  "His comments were clearly intended to provoke an argument."
    },
    {
        "pos":  "Adjective",
        "word":  "Psychiatric",
        "translation":  "Psikiyatrik",
        "sentence":  "He is receiving professional help at a psychiatric clinic."
    },
    {
        "pos":  "Adjective",
        "word":  "Psychological",
        "translation":  "Psikolojik",
        "sentence":  "The psychological impact of the crisis was felt by everyone."
    },
    {
        "pos":  "Noun",
        "word":  "Psychology",
        "translation":  "Psikoloji",
        "sentence":  "(Genel terim.)"
    },
    {
        "pos":  "Adj.",
        "word":  "Public",
        "translation":  "Noun",
        "sentence":  "Halk, kamu"
    },
    {
        "pos":  "Noun",
        "word":  "Publication",
        "translation":  "Yayın",
        "sentence":  "(Genel terim.)"
    },
    {
        "pos":  "Noun",
        "word":  "Publicity",
        "translation":  "Tanıtım, ilan",
        "sentence":  "The new product received a lot of publicity on social media."
    },
    {
        "pos":  "Verb",
        "word":  "Publish",
        "translation":  "Yayınlamak",
        "sentence":  "I will publish my first children\u0027s video this weekend."
    },
    {
        "pos":  "Noun",
        "word":  "Publishing",
        "translation":  "Yayıncılık",
        "sentence":  "She has a successful career in the academic publishing industry."
    },
    {
        "pos":  "Verb",
        "word":  "Pull",
        "translation":  "Noun",
        "sentence":  "Çekmek"
    },
    {
        "pos":  "Noun",
        "word":  "Pulse",
        "translation":  "Nabız",
        "sentence":  "The nurse checked the patient\u0027s pulse and blood pressure."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Pump",
        "translation":  "Pompalamak / Pompa",
        "sentence":  "We need a new pump to move the liquid to the storage tank."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Punch",
        "translation":  "Yumruk / Yumruklamak",
        "sentence":  "He managed to block the punch and defend himself."
    },
    {
        "pos":  "Punishment",
        "word":  "Punish",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Noun",
        "word":  "Punk",
        "translation":  "Punk (kültür/müzik)",
        "sentence":  "He was very interested in punk rock music during his youth."
    },
    {
        "pos":  "Noun",
        "word":  "Purchase",
        "translation":  "Verb",
        "sentence":  "Satın alma"
    },
    {
        "pos":  "Adjective",
        "word":  "Pure",
        "translation":  "Saf",
        "sentence":  "This gold coin is made of pure gold."
    },
    {
        "pos":  "Adverb",
        "word":  "Purely",
        "translation":  "Sırf, sadece",
        "sentence":  "The decision to switch suppliers was purely financial."
    },
    {
        "pos":  "Noun",
        "word":  "Purpose",
        "translation":  "Amaç",
        "sentence":  "The purpose of the cost-down study is to save money."
    },
    {
        "pos":  "Verb",
        "word":  "Pursue",
        "translation":  "Peşinden koşmak",
        "sentence":  "I want to pursue a career in strategic sourcing management."
    },
    {
        "pos":  "Noun",
        "word":  "Pursuit",
        "translation":  "Kovalama, uğraş",
        "sentence":  "He spent his life in the pursuit of scientific knowledge."
    },
    {
        "pos":  "Verb",
        "word":  "Push",
        "translation":  "Noun",
        "sentence":  "İtmek"
    },
    {
        "pos":  "Verb",
        "word":  "Put",
        "translation":  "Koymak",
        "sentence":  "Please put the silver bars back in the safe."
    },
    {
        "pos":  "Noun",
        "word":  "Puzzle",
        "translation":  "Bulmaca",
        "sentence":  "I enjoy solving a difficult puzzle during my free time."
    },
    {
        "pos":  "Noun",
        "word":  "Qualification",
        "translation":  "Nitelik, vasıf",
        "sentence":  "My 5 years of experience is my best qualification for this role."
    },
    {
        "pos":  "Adjective",
        "word":  "Qualified",
        "translation":  "Nitelikli",
        "sentence":  "We are looking for a qualified manager for the sourcing team."
    },
    {
        "pos":  "Verb",
        "word":  "Qualify",
        "translation":  "Hak kazanmak, nitelemek",
        "sentence":  "I hope I will qualify for a performance bonus this year."
    },
    {
        "pos":  "Noun",
        "word":  "Quality",
        "translation":  "Kalite",
        "sentence":  "We never sacrifice the quality of our raw materials."
    },
    {
        "pos":  "Noun",
        "word":  "Quantity",
        "translation":  "Miktar",
        "sentence":  "What is the total quantity of gold pieces in your possession?"
    },
    {
        "pos":  "Noun",
        "word":  "Quarter",
        "translation":  "Çeyrek",
        "sentence":  "A quarter gold coin weighs approximately 1.75 grams."
    },
    {
        "pos":  "Noun",
        "word":  "Queen",
        "translation":  "Kraliçe",
        "sentence":  "(Genel terim.)"
    },
    {
        "pos":  "Noun",
        "word":  "Query",
        "translation":  "Sorgu, soru",
        "sentence":  "If you have any queries, please contact the support team."
    },
    {
        "pos":  "Noun",
        "word":  "Quest",
        "translation":  "Arayış",
        "sentence":  "The team is on a quest to find the highest quality raw materials."
    },
    {
        "pos":  "Noun",
        "word":  "Question",
        "translation":  "Verb",
        "sentence":  "Soru"
    },
    {
        "pos":  "Noun",
        "word":  "Questionnaire",
        "translation":  "Anket formu",
        "sentence":  "Please fill out the questionnaire regarding your recent flight experience."
    },
    {
        "pos":  "Quickly",
        "word":  "Quick",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Quietly",
        "word":  "Quiet",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Verb",
        "word":  "Quit",
        "translation":  "Bırakmak, istifa etmek",
        "sentence":  "He decided to quit his job and start his own business."
    },
    {
        "pos":  "Adverb",
        "word":  "Quite",
        "translation":  "Epey, oldukça",
        "sentence":  "The silver price increase was quite unexpected for most investors."
    },
    {
        "pos":  "Noun",
        "word":  "Quota",
        "translation":  "Kota",
        "sentence":  "The government has set a quota on the import of certain goods."
    },
    {
        "pos":  "Quote",
        "word":  "Quotation",
        "translation":  "Noun",
        "sentence":  "Verb"
    },
    {
        "pos":  "Noun",
        "word":  "Race",
        "translation":  "Verb",
        "sentence":  "Yarış"
    },
    {
        "pos":  "Adjective",
        "word":  "Racial",
        "translation":  "Irksal",
        "sentence":  "The law prohibits any form of racial discrimination in the workplace."
    },
    {
        "pos":  "Noun",
        "word":  "Racing",
        "translation":  "Yarış",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Racism",
        "translation":  "Irkçılık",
        "sentence":  "We must work together to eliminate racism from our society."
    },
    {
        "pos":  "Adj. / Noun",
        "word":  "Racist",
        "translation":  "Irkçı",
        "sentence":  "He was fired for making racist remarks to a colleague."
    },
    {
        "pos":  "Noun",
        "word":  "Radar",
        "translation":  "Radar",
        "sentence":  "The speed of the car was caught by the police radar."
    },
    {
        "pos":  "Noun",
        "word":  "Radiation",
        "translation":  "Radyasyon",
        "sentence":  "Workers at the plant are monitored for exposure to radiation."
    },
    {
        "pos":  "Adjective",
        "word":  "Radical",
        "translation":  "Radikal, köklü",
        "sentence":  "We need a radical change in our cost reduction strategy."
    },
    {
        "pos":  "Noun",
        "word":  "Radio",
        "translation":  "Radyo",
        "sentence":  "I listen to the financial news on the radio while driving."
    },
    {
        "pos":  "Noun",
        "word":  "Rage",
        "translation":  "Öfke, hiddet",
        "sentence":  "He was filled with rage when he saw the damage to his car."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Raid",
        "translation":  "Baskın / Baskın yapmak",
        "sentence":  "The police carried out a raid on the illegal warehouse."
    },
    {
        "pos":  "Noun",
        "word":  "Rail",
        "translation":  "Ray, demiryolu",
        "sentence":  "Transporting goods by rail is often more cost-effective."
    },
    {
        "pos":  "Noun",
        "word":  "Railroad",
        "translation":  "Demiryolu",
        "sentence":  "(Ulaşım terimi.)"
    },
    {
        "pos":  "Noun",
        "word":  "Rain",
        "translation":  "Verb",
        "sentence":  "Yağmur"
    },
    {
        "pos":  "Verb",
        "word":  "Raise",
        "translation":  "Noun",
        "sentence":  "Artırmak"
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Rally",
        "translation":  "Miting / Toplanmak",
        "sentence":  "Thousands of people attended the political rally yesterday."
    },
    {
        "pos":  "Adjective",
        "word":  "Random",
        "translation":  "Rastgele",
        "sentence":  "The samples were selected at random for quality testing."
    },
    {
        "pos":  "Noun",
        "word":  "Range",
        "translation":  "Verb",
        "sentence":  "Menzil, çeşitlilik"
    },
    {
        "pos":  "Noun",
        "word":  "Rank",
        "translation":  "Verb",
        "sentence":  "Sıra, rütbe"
    },
    {
        "pos":  "Noun",
        "word":  "Ranking",
        "translation":  "Sıralama",
        "sentence":  "Our company has a high ranking in the global sourcing industry."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Rape",
        "translation":  "Tecavüz / Tecavüz etmek",
        "sentence":  "The suspect was arrested and charged with rape."
    },
    {
        "pos":  "Rapidly",
        "word":  "Rapid",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Rarely",
        "word":  "Rare",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Noun",
        "word":  "Rat",
        "translation":  "Sıçan, fare",
        "sentence":  "We need to call pest control to deal with the rats in the basement."
    },
    {
        "pos":  "Noun",
        "word":  "Rate",
        "translation":  "Verb",
        "sentence":  "Oran"
    },
    {
        "pos":  "Adverb",
        "word":  "Rather",
        "translation":  "Tercihen, epey",
        "sentence":  "I would rather invest in silver than gold right now."
    },
    {
        "pos":  "Noun",
        "word":  "Rating",
        "translation":  "Derecelendirme, reyting",
        "sentence":  "The new movie received a very high rating from the critics."
    },
    {
        "pos":  "Noun",
        "word":  "Ratio",
        "translation":  "Oran",
        "sentence":  "The ratio of silver to gold in his portfolio is quite high."
    },
    {
        "pos":  "Adjective",
        "word":  "Rational",
        "translation":  "Rasyonel, mantıklı",
        "sentence":  "Let\u0027s try to find a rational solution to this supplier issue."
    },
    {
        "pos":  "Adjective",
        "word":  "Raw",
        "translation":  "Ham",
        "sentence":  "My job is to manage alternative raw materials for production."
    },
    {
        "pos":  "Noun",
        "word":  "Ray",
        "translation":  "Işın",
        "sentence":  "A single ray of sunshine came through the office window."
    },
    {
        "pos":  "Verb",
        "word":  "Reach",
        "translation":  "Noun",
        "sentence":  "Ulaşmak"
    },
    {
        "pos":  "Reaction",
        "word":  "React",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Verb",
        "word":  "Read",
        "translation":  "Okumak",
        "sentence":  "I read an interesting article about silver market drivers."
    },
    {
        "pos":  "Noun",
        "word":  "Reader",
        "translation":  "Okuyucu",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Adverb",
        "word":  "Readily",
        "translation":  "Kolayca, isteyerek",
        "sentence":  "Information about alternative materials is readily available online."
    },
    {
        "pos":  "Noun",
        "word":  "Reading",
        "translation":  "Okuma",
        "sentence":  "Reading match analysis helps me make better decisions."
    },
    {
        "pos":  "Adjective",
        "word":  "Ready",
        "translation":  "Hazır",
        "sentence":  "Are you ready to launch the new YouTube channel?"
    },
    {
        "pos":  "Adjective",
        "word":  "Real",
        "translation":  "Gerçek",
        "sentence":  "This is a real gold piece, not a fake one."
    },
    {
        "pos":  "Adjective",
        "word":  "Realistic",
        "translation":  "Gerçekçi",
        "sentence":  "We need to set realistic goals for our cost-reduction study."
    },
    {
        "pos":  "Noun",
        "word":  "Reality",
        "translation":  "Gerçeklik",
        "sentence":  "The reality is that market prices are very volatile."
    },
    {
        "pos":  "Noun",
        "word":  "Realization",
        "translation":  "Farkına varma, gerçekleştirme",
        "sentence":  "The realization of the project took much longer than planned."
    },
    {
        "pos":  "Verb",
        "word":  "Realize",
        "translation":  "Fark etmek, gerçekleştirmek",
        "sentence":  "I didn\u0027t realize that it has already been five years."
    },
    {
        "pos":  "Adverb",
        "word":  "Really",
        "translation":  "Gerçekten",
        "sentence":  "I really enjoy finding alternative firms and saving money."
    },
    {
        "pos":  "Noun",
        "word":  "Realm",
        "translation":  "Alan, diyar",
        "sentence":  "This technology belongs to the realm of science fiction."
    },
    {
        "pos":  "Adjective / Noun",
        "word":  "Rear",
        "translation":  "Arka, geri",
        "sentence":  "Please use the rear entrance when delivering the materials."
    },
    {
        "pos":  "Noun",
        "word":  "Reason",
        "translation":  "Sebep",
        "sentence":  "What is the main reason for the flight cancellation?"
    },
    {
        "pos":  "Adjective",
        "word":  "Reasonable",
        "translation":  "Makul",
        "sentence":  "The price offered by the second firm was very reasonable."
    },
    {
        "pos":  "Adverb",
        "word":  "Reasonably",
        "translation":  "Makul bir şekilde",
        "sentence":  "The new supplier\u0027s prices are reasonably low."
    },
    {
        "pos":  "Noun",
        "word":  "Reasoning",
        "translation":  "Akıl yürütme",
        "sentence":  "I don\u0027t understand the reasoning behind this sudden price hike."
    },
    {
        "pos":  "Verb",
        "word":  "Reassure",
        "translation":  "Güven vermek",
        "sentence":  "I tried to reassure him that the project was on track."
    },
    {
        "pos":  "Noun",
        "word":  "Rebel",
        "translation":  "İsyancı",
        "sentence":  "The rebels managed to take control of the northern province."
    },
    {
        "pos":  "Noun",
        "word":  "Rebellion",
        "translation":  "İsyan",
        "sentence":  "The government worked quickly to put down the rebellion."
    },
    {
        "pos":  "Verb",
        "word":  "Rebuild",
        "translation":  "Yeniden inşa etmek",
        "sentence":  "It took years to rebuild the city after the earthquake."
    },
    {
        "pos":  "Verb",
        "word":  "Recall",
        "translation":  "Hatırlamak, geri çağırmak",
        "sentence":  "I can\u0027t recall the exact price of gold from yesterday."
    },
    {
        "pos":  "Noun",
        "word":  "Receipt",
        "translation":  "Makbuz, fiş",
        "sentence":  "Please keep the receipt for your palladium purchase."
    },
    {
        "pos":  "Verb",
        "word":  "Receive",
        "translation":  "Almak, teslim almak",
        "sentence":  "I expect to receive the shipment by the end of the week."
    },
    {
        "pos":  "Noun",
        "word":  "Receiver",
        "translation":  "Alıcı, ahize",
        "sentence":  "He picked up the receiver and dialed the number for the supplier."
    },
    {
        "pos":  "Recently",
        "word":  "Recent",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Noun",
        "word":  "Reception",
        "translation":  "Resepsiyon",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Recession",
        "translation":  "Resesyon, ekonomik durgunluk",
        "sentence":  "Many businesses struggled during the last global recession."
    },
    {
        "pos":  "Noun",
        "word":  "Recipe",
        "translation":  "Yemek tarifi",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Recipient",
        "translation":  "Alıcı",
        "sentence":  "Who was the intended recipient of this internal email?"
    },
    {
        "pos":  "Verb",
        "word":  "Reckon",
        "translation":  "Tahmin etmek, hesaba katmak",
        "sentence":  "I reckon we will reach our cost-down target by December."
    },
    {
        "pos":  "Noun",
        "word":  "Recognition",
        "translation":  "Tanıma, takdir",
        "sentence":  "He received international recognition for his work in sourcing."
    },
    {
        "pos":  "Verb",
        "word":  "Recognize",
        "translation":  "Tanımak, kabul etmek",
        "sentence":  "I recognize the importance of alternative raw materials."
    },
    {
        "pos":  "Recommendation",
        "word":  "Recommend",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Noun",
        "word":  "Reconstruction",
        "translation":  "Yeniden yapılanma",
        "sentence":  "The reconstruction of the bridge will take several months."
    },
    {
        "pos":  "Recording",
        "word":  "Record",
        "translation":  "N.",
        "sentence":  "V."
    },
    {
        "pos":  "Verb",
        "word":  "Recount",
        "translation":  "Anlatmak, yeniden saymak",
        "sentence":  "She sat down to recount her experiences from her trip to Germany."
    },
    {
        "pos":  "Verb",
        "word":  "Recover",
        "translation":  "İyileşmek, toparlanmak",
        "sentence":  "The market will soon recover from this sudden drop."
    },
    {
        "pos":  "Noun",
        "word":  "Recovery",
        "translation":  "İyileşme, toparlanma",
        "sentence":  "The economy is finally showing signs of recovery."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Recruit",
        "translation":  "İşe almak / Yeni üye",
        "sentence":  "We need to recruit a new specialist for the strategic team."
    },
    {
        "pos":  "Noun",
        "word":  "Recruitment",
        "translation":  "İşe alım",
        "sentence":  "Our recruitment process is very thorough and professional."
    },
    {
        "pos":  "Verb",
        "word":  "Recycle",
        "translation":  "Geri dönüştürmek",
        "sentence":  "We aim to recycle as much metal as possible in our factory."
    },
    {
        "pos":  "Adj.",
        "word":  "Red",
        "translation":  "Noun",
        "sentence":  "Kırmızı"
    },
    {
        "pos":  "Reduction",
        "word":  "Reduce",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Reference",
        "word":  "Refer",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Noun",
        "word":  "Referee",
        "translation":  "Hakem, referans",
        "sentence":  "The referee made a controversial decision during the match."
    },
    {
        "pos":  "Noun",
        "word":  "Referendum",
        "translation":  "Referandum",
        "sentence":  "The country will hold a referendum on the new law next month."
    },
    {
        "pos":  "Verb",
        "word":  "Reflect",
        "translation":  "Yansıtmak",
        "sentence":  "This evaluation note reflects my hard work over 5 years."
    },
    {
        "pos":  "Noun",
        "word":  "Reflection",
        "translation":  "Yansıma, düşünce",
        "sentence":  "He saw his reflection in the glass door of the office."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Reform",
        "translation":  "Reform / Islah etmek",
        "sentence":  "The government is planning to reform the tax system."
    },
    {
        "pos":  "Noun",
        "word":  "Refrigerator",
        "translation":  "Buzdolabı",
        "sentence":  "(Ev eşyası.)"
    },
    {
        "pos":  "Noun",
        "word":  "Refuge",
        "translation":  "Sığınak, barınak",
        "sentence":  "The mountain cabin provided a safe refuge from the storm."
    },
    {
        "pos":  "Noun",
        "word":  "Refugee",
        "translation":  "Mülteci",
        "sentence":  "International organizations are providing aid to the refugees."
    },
    {
        "pos":  "Noun",
        "word":  "Refusal",
        "translation":  "Reddetme",
        "sentence":  "His refusal to cooperate with the team was very disappointing."
    },
    {
        "pos":  "Verb",
        "word":  "Refuse",
        "translation":  "Reddetmek",
        "sentence":  "I had to refuse the supplier\u0027s first offer because it was too high."
    },
    {
        "pos":  "Verb",
        "word":  "Regain",
        "translation":  "Yeniden kazanmak",
        "sentence":  "We hope to regain our market share with this new strategy."
    },
    {
        "pos":  "Verb",
        "word":  "Regard",
        "translation":  "Noun",
        "sentence":  "Saygı duymak, kabul etmek"
    },
    {
        "pos":  "Adverb",
        "word":  "Regardless",
        "translation":  "Ne olursa olsun",
        "sentence":  "The project will move forward regardless of the recent delays."
    },
    {
        "pos":  "Noun",
        "word":  "Regime",
        "translation":  "Rejim, yönetim",
        "sentence":  "The old military regime was replaced by a democratic government."
    },
    {
        "pos":  "Regional",
        "word":  "Region",
        "translation":  "Noun",
        "sentence":  "Adj."
    },
    {
        "pos":  "Verb",
        "word":  "Register",
        "translation":  "Noun",
        "sentence":  "Kaydolmak"
    },
    {
        "pos":  "Noun",
        "word":  "Registration",
        "translation":  "Kayıt",
        "sentence":  "Please complete your registration for the seminar by Friday."
    },
    {
        "pos":  "Verb",
        "word":  "Regret",
        "translation":  "Noun",
        "sentence":  "Pişman olmak"
    },
    {
        "pos":  "Regularly",
        "word":  "Regular",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Verb",
        "word":  "Regulate",
        "translation":  "Düzenlemek",
        "sentence":  "New laws were passed to regulate the trade of precious metals."
    },
    {
        "pos":  "Noun",
        "word":  "Regulation",
        "translation":  "Yönetmelik, düzenleme",
        "sentence":  "We must follow all government regulations for metal import."
    },
    {
        "pos":  "Noun",
        "word":  "Regulator",
        "translation":  "Düzenleyici",
        "sentence":  "The banking regulator is reviewing the recent bank merger."
    },
    {
        "pos":  "Adjective",
        "word":  "Regulatory",
        "translation":  "Düzenleyici",
        "sentence":  "We must comply with all regulatory standards in our industry."
    },
    {
        "pos":  "Noun",
        "word":  "Rehabilitation",
        "translation":  "Rehabilitasyon",
        "sentence":  "He underwent intensive rehabilitation after his knee surgery."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Reign",
        "translation":  "Saltanat, hüküm sürmek",
        "sentence":  "Queen Victoria\u0027s reign lasted for more than sixty years."
    },
    {
        "pos":  "Verb",
        "word":  "Reinforce",
        "translation":  "Güçlendirmek",
        "sentence":  "We need to reinforce the warehouse walls before winter."
    },
    {
        "pos":  "Verb",
        "word":  "Reject",
        "translation":  "Reddetmek",
        "sentence":  "The manager decided to reject the proposal from the alternative firm."
    },
    {
        "pos":  "Noun",
        "word":  "Rejection",
        "translation":  "Reddetme, ret",
        "sentence":  "Dealing with rejection is a part of the sales process."
    },
    {
        "pos":  "Related",
        "word":  "Relate",
        "translation":  "Verb",
        "sentence":  "Adj."
    },
    {
        "pos":  "Relationship",
        "word":  "Relation",
        "translation":  "Noun",
        "sentence":  "İlişki"
    },
    {
        "pos":  "Relatively",
        "word":  "Relative",
        "translation":  "Adj.",
        "sentence":  "N."
    },
    {
        "pos":  "Relaxed",
        "word":  "Relax",
        "translation":  "Relaxing",
        "sentence":  "V."
    },
    {
        "pos":  "Verb",
        "word":  "Release",
        "translation":  "Noun",
        "sentence":  "Serbest bırakmak, yayınlamak"
    },
    {
        "pos":  "Noun",
        "word":  "Relevance",
        "translation":  "Alaka, uygunluk",
        "sentence":  "Your point has no relevance to the topic of cost reduction."
    },
    {
        "pos":  "Adjective",
        "word":  "Relevant",
        "translation":  "İlgili, alakalı",
        "sentence":  "Please provide all relevant documents for the car loan."
    },
    {
        "pos":  "Noun",
        "word":  "Reliability",
        "translation":  "Güvenilirlik",
        "sentence":  "The reliability of our suppliers is crucial for production."
    },
    {
        "pos":  "Adjective",
        "word":  "Reliable",
        "translation":  "Güvenilir",
        "sentence":  "Finding a reliable supplier is essential for our production."
    },
    {
        "pos":  "Noun",
        "word":  "Relief",
        "translation":  "Rahatlama",
        "sentence":  "It was a great relief to know that my flight was finally rescheduled."
    },
    {
        "pos":  "Verb",
        "word":  "Relieve",
        "translation":  "Rahatlatmak, hafifletmek",
        "sentence":  "This new software will relieve the pressure on the logistics team."
    },
    {
        "pos":  "Adjective",
        "word":  "Relieved",
        "translation":  "Rahatlamış",
        "sentence":  "I was so relieved to hear that the flight was not canceled."
    },
    {
        "pos":  "Religious",
        "word":  "Religion",
        "translation":  "Noun",
        "sentence":  "Adj."
    },
    {
        "pos":  "Adjective",
        "word":  "Reluctant",
        "translation":  "İsteksiz, gönülsüz",
        "sentence":  "He was reluctant to switch to a new, untested supplier."
    },
    {
        "pos":  "Verb",
        "word":  "Rely",
        "translation":  "Güvenmek, dayanmak",
        "sentence":  "We rely on alternative raw materials to lower our costs."
    },
    {
        "pos":  "Verb",
        "word":  "Remain",
        "translation":  "Kalmak, sürdürmek",
        "sentence":  "The silver market will remain strong for the rest of the year."
    },
    {
        "pos":  "Noun",
        "word":  "Remainder",
        "translation":  "Kalan, bakiye",
        "sentence":  "You can pay the remainder of the balance next month."
    },
    {
        "pos":  "Noun",
        "word":  "Remains",
        "translation":  "Kalıntılar",
        "sentence":  "The remains of an old factory were found near the coast."
    },
    {
        "pos":  "Noun",
        "word":  "Remark",
        "translation":  "Verb",
        "sentence":  "Görüş, gözlem"
    },
    {
        "pos":  "Adjective",
        "word":  "Remarkable",
        "translation":  "Dikkat çekici",
        "sentence":  "His performance over the last five years has been remarkable."
    },
    {
        "pos":  "Adverb",
        "word":  "Remarkably",
        "translation":  "Dikkat çekici şekilde",
        "sentence":  "The price of silver has stayed remarkably stable this week."
    },
    {
        "pos":  "Noun",
        "word":  "Remedy",
        "translation":  "Çare, ilaç",
        "sentence":  "Is there any legal remedy for the breach of contract?"
    },
    {
        "pos":  "Verb",
        "word":  "Remember",
        "translation":  "Hatırlamak",
        "sentence":  "Always remember to check the total gold weight twice."
    },
    {
        "pos":  "Verb",
        "word":  "Remind",
        "translation":  "Hatırlatmak",
        "sentence":  "Please remind me to call Akbank tomorrow."
    },
    {
        "pos":  "Noun",
        "word":  "Reminder",
        "translation":  "Hatırlatıcı",
        "sentence":  "This email is a friendly reminder about the upcoming deadline."
    },
    {
        "pos":  "Adjective",
        "word":  "Remote",
        "translation":  "Uzak",
        "sentence":  "Some of our sourcing partners are in remote locations."
    },
    {
        "pos":  "Noun",
        "word":  "Removal",
        "translation":  "Kaldırma",
        "sentence":  "The removal of the old machinery will begin on Monday."
    },
    {
        "pos":  "Verb",
        "word":  "Remove",
        "translation":  "Çıkarmak, kaldırmak",
        "sentence":  "We need to remove the outdated materials from the list."
    },
    {
        "pos":  "Verb",
        "word":  "Render",
        "translation":  "Hale getirmek, sunmak",
        "sentence":  "The accident managed to render the car completely useless."
    },
    {
        "pos":  "Verb",
        "word":  "Renew",
        "translation":  "Yenilemek",
        "sentence":  "Don\u0027t forget to renew your contract with the raw material firm."
    },
    {
        "pos":  "Adjective",
        "word":  "Renowned",
        "translation":  "Ünlü, meşhur",
        "sentence":  "He is a renowned expert in strategic asset management."
    },
    {
        "pos":  "Noun",
        "word":  "Rent",
        "translation":  "Verb",
        "sentence":  "Kira"
    },
    {
        "pos":  "Noun",
        "word":  "Rental",
        "translation":  "Kiralama",
        "sentence":  "We are looking for a car rental service in İzmir for the weekend."
    },
    {
        "pos":  "Verb",
        "word":  "Repair",
        "translation":  "Noun",
        "sentence":  "Tamir etmek"
    },
    {
        "pos":  "Repeated",
        "word":  "Repeat",
        "translation":  "Verb",
        "sentence":  "Adj."
    },
    {
        "pos":  "Verb",
        "word":  "Replace",
        "translation":  "Değiştirmek, yerine koymak",
        "sentence":  "We will replace the current supplier with an alternative firm."
    },
    {
        "pos":  "Noun",
        "word":  "Replacement",
        "translation":  "Değiştirme, yedek",
        "sentence":  "We found a suitable replacement for the discontinued material."
    },
    {
        "pos":  "Verb",
        "word":  "Reply",
        "translation":  "Noun",
        "sentence":  "Cevap vermek"
    },
    {
        "pos":  "Noun",
        "word":  "Report",
        "translation":  "Verb",
        "sentence":  "Rapor"
    },
    {
        "pos":  "Adverb",
        "word":  "Reportedly",
        "translation":  "Söylendiğine göre",
        "sentence":  "Reportedly, the two companies are planning to merge soon."
    },
    {
        "pos":  "Noun",
        "word":  "Reporter",
        "translation":  "Muhabir",
        "sentence":  "(Medya terimi.)"
    },
    {
        "pos":  "Noun",
        "word":  "Reporting",
        "translation":  "Raporlama",
        "sentence":  "Financial reporting must be accurate and transparent."
    },
    {
        "pos":  "Verb",
        "word":  "Represent",
        "translation":  "Temsil etmek",
        "sentence":  "These figures represent our total savings this year."
    },
    {
        "pos":  "Noun",
        "word":  "Representation",
        "translation":  "Temsil",
        "sentence":  "The union provides fair representation for all workers."
    },
    {
        "pos":  "N.",
        "word":  "Representative",
        "translation":  "Adj.",
        "sentence":  "Temsilci"
    },
    {
        "pos":  "Verb",
        "word":  "Reproduce",
        "translation":  "Çoğaltmak, üremek",
        "sentence":  "Can you reproduce this result using the new software?"
    },
    {
        "pos":  "Noun",
        "word":  "Reproduction",
        "translation":  "Üreme, çoğaltma",
        "sentence":  "The quality of the color reproduction in the video is excellent."
    },
    {
        "pos":  "Noun",
        "word":  "Republic",
        "translation":  "Cumhuriyet",
        "sentence":  "Turkey was proclaimed a republic over a hundred years ago."
    },
    {
        "pos":  "Noun",
        "word":  "Reputation",
        "translation":  "İtibar, ün",
        "sentence":  "Our company has a great reputation for quality sourcing."
    },
    {
        "pos":  "Noun",
        "word":  "Request",
        "translation":  "Verb",
        "sentence":  "İstek, talep"
    },
    {
        "pos":  "Verb",
        "word":  "Require",
        "translation":  "Gerektirmek",
        "sentence":  "Strategic sourcing requires careful market analysis."
    },
    {
        "pos":  "Noun",
        "word":  "Requirement",
        "translation":  "Gereksinim, şart",
        "sentence":  "Lowering costs is a key requirement for this project."
    },
    {
        "pos":  "Verb",
        "word":  "Rescue",
        "translation":  "Noun",
        "sentence":  "Kurtarmak"
    },
    {
        "pos":  "Noun",
        "word":  "Research",
        "translation":  "Verb",
        "sentence":  "Araştırma"
    },
    {
        "pos":  "Noun",
        "word":  "Researcher",
        "translation":  "Araştırmacı",
        "sentence":  "As a researcher of precious metals, I follow the charts daily."
    },
    {
        "pos":  "Verb",
        "word":  "Resemble",
        "translation":  "Benzemek",
        "sentence":  "The new supplier\u0027s product doesn\u0027t resemble the original at all."
    },
    {
        "pos":  "Noun",
        "word":  "Reservation",
        "translation":  "Rezervasyon",
        "sentence":  "I need to make a hotel reservation for my trip to Germany."
    },
    {
        "pos":  "Noun",
        "word":  "Reserve",
        "translation":  "Verb",
        "sentence":  "Rezerv"
    },
    {
        "pos":  "Verb",
        "word":  "Reside",
        "translation":  "İkamet etmek",
        "sentence":  "Most of the employees reside within five kilometers of the office."
    },
    {
        "pos":  "Noun",
        "word":  "Residence",
        "translation":  "Konut, ikametgah",
        "sentence":  "He changed his legal residence after moving to İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Resident",
        "translation":  "Adjective",
        "sentence":  "Bölge sakini"
    },
    {
        "pos":  "Adjective",
        "word":  "Residential",
        "translation":  "Yerleşim ile ilgili",
        "sentence":  "The new warehouse is located far from any residential areas."
    },
    {
        "pos":  "Noun",
        "word":  "Residue",
        "translation":  "Kalıntı, tortu",
        "sentence":  "There was a white residue left on the surface after cleaning."
    },
    {
        "pos":  "Verb",
        "word":  "Resign",
        "translation":  "İstifa etmek",
        "sentence":  "He decided to resign from the company to focus on his YouTube channel."
    },
    {
        "pos":  "Noun",
        "word":  "Resignation",
        "translation":  "İstifa",
        "sentence":  "The board of directors accepted the manager\u0027s resignation."
    },
    {
        "pos":  "Verb",
        "word":  "Resist",
        "translation":  "Direnmek",
        "sentence":  "It is hard to resist buying more silver when the price is low."
    },
    {
        "pos":  "Noun",
        "word":  "Resistance",
        "translation":  "Direnç, direniş",
        "sentence":  "There was some resistance to the new cost reduction plan."
    },
    {
        "pos":  "Noun",
        "word":  "Resolution",
        "translation":  "Karar, çözüm",
        "sentence":  "The committee passed a resolution to approve the new supplier."
    },
    {
        "pos":  "Verb",
        "word":  "Resolve",
        "translation":  "Çözmek, halletmek",
        "sentence":  "We need to resolve the supply issue with the alternative firm."
    },
    {
        "pos":  "Noun",
        "word":  "Resort",
        "translation":  "Tatil yeri",
        "sentence":  "(Turizm terimi.)"
    },
    {
        "pos":  "Noun",
        "word":  "Resource",
        "translation":  "Kaynak",
        "sentence":  "Human resources managed my 5th-year anniversary process."
    },
    {
        "pos":  "Noun",
        "word":  "Respect",
        "translation":  "Verb",
        "sentence":  "Saygı"
    },
    {
        "pos":  "Adjective",
        "word":  "Respective",
        "translation":  "Kendi (herkesin kendi)",
        "sentence":  "The managers returned to their respective departments after the meeting."
    },
    {
        "pos":  "Adverb",
        "word":  "Respectively",
        "translation":  "Sırasıyla",
        "sentence":  "The prices of gold and silver rose by 2% and 5%, respectively."
    },
    {
        "pos":  "Verb",
        "word":  "Respond",
        "translation":  "Cevap vermek",
        "sentence":  "The supplier failed to respond to our offer on time."
    },
    {
        "pos":  "Noun",
        "word":  "Response",
        "translation":  "Yanıt, tepki",
        "sentence":  "I am waiting for a response regarding my flight compensation."
    },
    {
        "pos":  "Noun",
        "word":  "Responsibility",
        "translation":  "Sorumluluk",
        "sentence":  "Managing costs is a big responsibility in our department."
    },
    {
        "pos":  "Adjective",
        "word":  "Responsible",
        "translation":  "Sorumlu",
        "sentence":  "I am responsible for finding alternative raw materials."
    },
    {
        "pos":  "Noun",
        "word":  "Rest",
        "translation":  "Geri kalan",
        "sentence":  "I calculated 5 grams of gold, and the rest are silver coins."
    },
    {
        "pos":  "Noun",
        "word":  "Rest",
        "translation":  "Verb",
        "sentence":  "Dinlenme"
    },
    {
        "pos":  "Noun",
        "word":  "Restaurant",
        "translation":  "Restoran",
        "sentence":  "Let’s celebrate my 5th work year at a nice restaurant."
    },
    {
        "pos":  "Noun",
        "word":  "Restoration",
        "translation":  "Restorasyon",
        "sentence":  "The restoration of the historic office building is complete."
    },
    {
        "pos":  "Verb",
        "word":  "Restore",
        "translation":  "Eski haline getirmek",
        "sentence":  "We need to restore our relationship with the main supplier."
    },
    {
        "pos":  "Noun",
        "word":  "Restraint",
        "translation":  "Kısıtlama, otokontrol",
        "sentence":  "We must show financial restraint during this economic crisis."
    },
    {
        "pos":  "Verb",
        "word":  "Restrict",
        "translation":  "Kısıtlamak",
        "sentence":  "The new policy will restrict the use of company cars for private trips."
    },
    {
        "pos":  "Noun",
        "word":  "Restriction",
        "translation":  "Kısıtlama",
        "sentence":  "There are several restrictions on importing palladium."
    },
    {
        "pos":  "Noun",
        "word":  "Result",
        "translation":  "Verb",
        "sentence":  "Sonuç"
    },
    {
        "pos":  "Verb",
        "word":  "Resume",
        "translation":  "Yeniden başlamak",
        "sentence":  "We will resume the negotiations with the alternative firm tomorrow."
    },
    {
        "pos":  "Noun",
        "word":  "Retail",
        "translation":  "Perakende",
        "sentence":  "He has five years of experience in the retail industry."
    },
    {
        "pos":  "Verb",
        "word":  "Retain",
        "translation":  "Sürdürmek, tutmak",
        "sentence":  "We aim to retain our best suppliers for long-term projects."
    },
    {
        "pos":  "Verb",
        "word":  "Retire",
        "translation":  "Emekli olmak",
        "sentence":  "I plan to retire early with my investments in precious metals."
    },
    {
        "pos":  "Adjective",
        "word":  "Retired",
        "translation":  "Emekli",
        "sentence":  "(Genel terim.)"
    },
    {
        "pos":  "Noun",
        "word":  "Retirement",
        "translation":  "Emeklilik",
        "sentence":  "He is planning to buy a house in İzmir after his retirement."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Retreat",
        "translation":  "Geri çekilme",
        "sentence":  "The army was forced to retreat due to the heavy rain."
    },
    {
        "pos":  "Verb",
        "word":  "Retrieve",
        "translation":  "Geri almak, veriyi çekmek",
        "sentence":  "I need to retrieve the contract details from the digital archive."
    },
    {
        "pos":  "Verb",
        "word":  "Return",
        "translation":  "Noun",
        "sentence":  "Dönmek"
    },
    {
        "pos":  "Verb",
        "word":  "Reveal",
        "translation":  "Ortaya çıkarmak, ifşa etmek",
        "sentence":  "The analysis reveals why silver prices are rising so fast."
    },
    {
        "pos":  "Noun",
        "word":  "Revelation",
        "translation":  "İfşa, açığa çıkma",
        "sentence":  "The revelation of the hidden costs shocked the management."
    },
    {
        "pos":  "Noun",
        "word":  "Revenge",
        "translation":  "İntikam",
        "sentence":  "He wanted to take revenge for the unfair treatment he received."
    },
    {
        "pos":  "Noun",
        "word":  "Revenue",
        "translation":  "Gelir, hasılat",
        "sentence":  "The company\u0027s annual revenue has grown by ten percent."
    },
    {
        "pos":  "Verb / Noun / Adj.",
        "word":  "Reverse",
        "translation":  "Tersine çevirmek",
        "sentence":  "The court decided to reverse its previous ruling."
    },
    {
        "pos":  "Noun",
        "word":  "Review",
        "translation":  "Verb",
        "sentence":  "İnceleme"
    },
    {
        "pos":  "Verb",
        "word":  "Revise",
        "translation":  "Revize etmek, düzeltmek",
        "sentence":  "We had to revise the production schedule due to the delay."
    },
    {
        "pos":  "Noun",
        "word":  "Revision",
        "translation":  "Revizyon, gözden geçirme",
        "sentence":  "The contract needs a quick revision before we sign it."
    },
    {
        "pos":  "Noun",
        "word":  "Revival",
        "translation":  "Canlanma",
        "sentence":  "There has been a revival of interest in traditional investments."
    },
    {
        "pos":  "Verb",
        "word":  "Revive",
        "translation":  "Canlandırmak",
        "sentence":  "We are trying to revive the old project with a new team."
    },
    {
        "pos":  "Noun",
        "word":  "Revolution",
        "translation":  "Devrim",
        "sentence":  "Digital automation is a revolution in social media tracking."
    },
    {
        "pos":  "Adjective",
        "word":  "Revolutionary",
        "translation":  "Devrimsel",
        "sentence":  "The new raw material is truly revolutionary for our industry."
    },
    {
        "pos":  "Noun",
        "word":  "Reward",
        "translation":  "Verb",
        "sentence":  "Ödül"
    },
    {
        "pos":  "Noun",
        "word":  "Rhetoric",
        "translation":  "Hitabet, gösterişli sözler",
        "sentence":  "We need real actions to reduce costs, not just empty rhetoric."
    },
    {
        "pos":  "Noun",
        "word":  "Rhythm",
        "translation":  "Ritim",
        "sentence":  "The rhythm of the children\u0027s songs should be simple and catchy."
    },
    {
        "pos":  "Noun",
        "word":  "Rice",
        "translation":  "Pirinç",
        "sentence":  "(Yiyecek.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Rich",
        "translation":  "Zengin",
        "sentence":  "Palladium is a metal rich in industrial uses."
    },
    {
        "pos":  "Verb",
        "word":  "Rid",
        "translation":  "Kurtulmak (-den)",
        "sentence":  "We need to get rid of inefficient sourcing methods."
    },
    {
        "pos":  "Verb",
        "word":  "Ride",
        "translation":  "Noun",
        "sentence":  "Binmek"
    },
    {
        "pos":  "Adjective",
        "word":  "Ridiculous",
        "translation":  "Gülünç, saçma",
        "sentence":  "The price they quoted for palladium is absolutely ridiculous."
    },
    {
        "pos":  "Noun",
        "word":  "Rifle",
        "translation":  "Tüfek",
        "sentence":  "The hunter cleaned his rifle before heading into the forest."
    },
    {
        "pos":  "Adj.",
        "word":  "Right",
        "translation":  "Adv.",
        "sentence":  "N."
    },
    {
        "pos":  "Noun",
        "word":  "Ring",
        "translation":  "Verb",
        "sentence":  "Yüzük"
    },
    {
        "pos":  "Noun",
        "word":  "Riot",
        "translation":  "Ayaklanma",
        "sentence":  "A riot broke out in the city center following the announcement."
    },
    {
        "pos":  "Verb",
        "word":  "Rip",
        "translation":  "Yırtmak",
        "sentence":  "Be careful not to rip the important document."
    },
    {
        "pos":  "Verb",
        "word":  "Rise",
        "translation":  "Noun",
        "sentence":  "Yükselmek"
    },
    {
        "pos":  "Noun",
        "word":  "Risk",
        "translation":  "Verb",
        "sentence":  "Risk"
    },
    {
        "pos":  "Adjective",
        "word":  "Risky",
        "translation":  "Riskli",
        "sentence":  "Investing all your money in one metal is a risky move."
    },
    {
        "pos":  "Noun",
        "word":  "Ritual",
        "translation":  "Ritüel, tören",
        "sentence":  "Morning coffee is a daily ritual in our office."
    },
    {
        "pos":  "Noun / Adj.",
        "word":  "Rival",
        "translation":  "Rakip",
        "sentence":  "We are monitoring the prices of our main rival firm."
    },
    {
        "pos":  "Noun",
        "word":  "River",
        "translation":  "Nehir",
        "sentence":  "(Coğrafi terim.)"
    },
    {
        "pos":  "Noun",
        "word":  "Road",
        "translation":  "Yol",
        "sentence":  "The road to success in sourcing is through constant learning."
    },
    {
        "pos":  "Verb",
        "word":  "Rob",
        "translation":  "Soymak",
        "sentence":  "Someone tried to rob the small grocery store on my street."
    },
    {
        "pos":  "Noun",
        "word":  "Robbery",
        "translation":  "Soygun",
        "sentence":  "The police are investigating an armed robbery at the bank."
    },
    {
        "pos":  "Noun",
        "word":  "Robot",
        "translation":  "Robot",
        "sentence":  "Many factories use robots to increase production speed."
    },
    {
        "pos":  "Adjective",
        "word":  "Robust",
        "translation":  "Sağlam, güçlü",
        "sentence":  "We have a robust system for managing alternative suppliers."
    },
    {
        "pos":  "Verb",
        "word":  "Rock",
        "translation":  "Sallamak, sarsmak",
        "sentence":  "The news of the merger is going to rock the entire industry."
    },
    {
        "pos":  "Noun",
        "word":  "Rock",
        "translation":  "Kaya",
        "sentence":  "Rock müzik"
    },
    {
        "pos":  "Noun",
        "word":  "Rocket",
        "translation":  "Roket",
        "sentence":  "The rocket was launched successfully from the space center."
    },
    {
        "pos":  "Noun",
        "word":  "Rod",
        "translation":  "Çubuk, değnek",
        "sentence":  "He used a metal rod to fix the broken machinery."
    },
    {
        "pos":  "Noun",
        "word":  "Role",
        "translation":  "Rol, görev",
        "sentence":  "My role in the company has evolved over the last five years."
    },
    {
        "pos":  "Verb",
        "word":  "Roll",
        "translation":  "Noun",
        "sentence":  "Yuvarlanmak"
    },
    {
        "pos":  "Noun",
        "word":  "Romance",
        "translation":  "Romantizm, aşk",
        "sentence":  "He brought her flowers to add some romance to the evening."
    },
    {
        "pos":  "Adjective",
        "word":  "Romantic",
        "translation":  "Romantik",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Roof",
        "translation":  "Çatı",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Rookie",
        "translation":  "Çaylak, yeni başlayan",
        "sentence":  "Even as a rookie, he showed great talent in strategic sourcing."
    },
    {
        "pos":  "Noun",
        "word":  "Room",
        "translation":  "Oda",
        "sentence":  "Yer, alan"
    },
    {
        "pos":  "Noun",
        "word":  "Root",
        "translation":  "Kök",
        "sentence":  "We need to find the root cause of the supply delay."
    },
    {
        "pos":  "Noun",
        "word":  "Rope",
        "translation":  "İp, halat",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Rose",
        "translation":  "Gül",
        "sentence":  "She planted red roses in her garden in İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Roster",
        "translation":  "Kadro, isim listesi",
        "sentence":  "The team roster for the new project includes several experts."
    },
    {
        "pos":  "Verb",
        "word":  "Rotate",
        "translation":  "Döndürmek",
        "sentence":  "We need to rotate the stock to ensure everything stays fresh."
    },
    {
        "pos":  "Noun",
        "word":  "Rotation",
        "translation":  "Dönüş, rotasyon",
        "sentence":  "The rotation of the earth causes day and night."
    },
    {
        "pos":  "Adjective",
        "word":  "Rough",
        "translation":  "Kaba, pürüzlü, zorlu",
        "sentence":  "It has been a rough week due to flight cancellations."
    },
    {
        "pos":  "Adverb",
        "word":  "Roughly",
        "translation":  "Yaklaşık olarak",
        "sentence":  "There are roughly 200 words in this English vocabulary list."
    },
    {
        "pos":  "Adj.",
        "word":  "Round",
        "translation":  "Adv.",
        "sentence":  "Prep."
    },
    {
        "pos":  "Noun",
        "word":  "Route",
        "translation":  "Rota, güzergah",
        "sentence":  "What is the best route from Sabiha Gökçen to İzmir?"
    },
    {
        "pos":  "Noun",
        "word":  "Routine",
        "translation":  "Adjective",
        "sentence":  "Rutin"
    },
    {
        "pos":  "Noun",
        "word":  "Row",
        "translation":  "Sıra, dizi",
        "sentence":  "The factory workers stand in a row during the morning meeting."
    },
    {
        "pos":  "Adjective",
        "word":  "Royal",
        "translation":  "Kraliyet",
        "sentence":  "Muhteşem"
    },
    {
        "pos":  "Verb",
        "word":  "Rub",
        "translation":  "Ovmak, sürtmek",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Rubber",
        "translation":  "Adjective",
        "sentence":  "Kauçuk, lastik"
    },
    {
        "pos":  "Adjective",
        "word":  "Rude",
        "translation":  "Kaba",
        "sentence":  "(Davranış biçimi.)"
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Ruin",
        "translation":  "Mahvetmek, harabe",
        "sentence":  "Don\u0027t let a small mistake ruin your professional evaluation."
    },
    {
        "pos":  "Noun",
        "word":  "Rule",
        "translation":  "Verb",
        "sentence":  "Kural"
    },
    {
        "pos":  "Noun",
        "word":  "Ruling",
        "translation":  "Karar, hüküm",
        "sentence":  "The supreme court\u0027s ruling was final and cannot be appealed."
    },
    {
        "pos":  "Noun",
        "word":  "Rumor",
        "translation":  "Söylenti",
        "sentence":  "I heard a rumor that the cost of silver is about to drop."
    },
    {
        "pos":  "Verb",
        "word":  "Run",
        "translation":  "Noun",
        "sentence":  "Koşmak"
    },
    {
        "pos":  "Running",
        "word":  "Runner",
        "translation":  "Noun",
        "sentence":  "Koşucu"
    },
    {
        "pos":  "Adjective",
        "word":  "Rural",
        "translation":  "Kırsal",
        "sentence":  "We are sourcing some materials from rural areas of the country."
    },
    {
        "pos":  "Verb",
        "word":  "Rush",
        "translation":  "Noun",
        "sentence":  "Acele etmek"
    },
    {
        "pos":  "Noun",
        "word":  "Résumé",
        "translation":  "Özgeçmiş",
        "sentence":  "Please update your résumé before applying for the senior role."
    },
    {
        "pos":  "Adjective",
        "word":  "Sacred",
        "translation":  "Kutsal",
        "sentence":  "For many people, family time is considered sacred."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Sacrifice",
        "translation":  "Fedakarlık",
        "sentence":  "Success often requires a lot of hard work and sacrifice."
    },
    {
        "pos":  "Sadly",
        "word":  "Sad",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Adjective",
        "word":  "Safe",
        "translation":  "Güvenli",
        "sentence":  "Gold is often considered a safe haven for investors."
    },
    {
        "pos":  "Noun",
        "word":  "Safety",
        "translation":  "Güvenlik",
        "sentence":  "Employee safety is the top priority in our factory."
    },
    {
        "pos":  "Sailing",
        "word":  "Sail",
        "translation":  "Sailor",
        "sentence":  "Verb"
    },
    {
        "pos":  "Noun",
        "word":  "Saint",
        "translation":  "Aziz",
        "sentence":  "He is a kind man who behaves like a saint to everyone."
    },
    {
        "pos":  "Noun",
        "word":  "Sake",
        "translation":  "Hatır, uğruna",
        "sentence":  "For the sake of the project, we must find a way to cooperate."
    },
    {
        "pos":  "Noun",
        "word":  "Salad",
        "translation":  "Salata",
        "sentence":  "(Yiyecek.)"
    },
    {
        "pos":  "Noun",
        "word":  "Salary",
        "translation":  "Maaş",
        "sentence":  "I am negotiating for a higher salary for my 5th year."
    },
    {
        "pos":  "Noun",
        "word":  "Sale",
        "translation":  "Satış",
        "sentence":  "The sale of palladium has increased this month."
    },
    {
        "pos":  "Noun",
        "word":  "Salt",
        "translation":  "Tuz",
        "sentence":  "(Yiyecek.)"
    },
    {
        "pos":  "Adj.",
        "word":  "Same",
        "translation":  "Pron.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Noun",
        "word":  "Sample",
        "translation":  "Verb",
        "sentence":  "Örnek"
    },
    {
        "pos":  "Noun",
        "word":  "Sanction",
        "translation":  "Yaptırım",
        "sentence":  "The country is facing international sanctions due to its policies."
    },
    {
        "pos":  "Noun",
        "word":  "Sand",
        "translation":  "Kum",
        "sentence":  "(Doğa terimi.)"
    },
    {
        "pos":  "Noun",
        "word":  "Sandwich",
        "translation":  "Sandviç",
        "sentence":  "(Yiyecek.)"
    },
    {
        "pos":  "Noun",
        "word":  "Satellite",
        "translation":  "Uydu",
        "sentence":  "(Teknoloji terimi.)"
    },
    {
        "pos":  "Noun",
        "word":  "Satisfaction",
        "translation":  "Memnuniyet",
        "sentence":  "We strive for total customer satisfaction with every order."
    },
    {
        "pos":  "Satisfy",
        "word":  "Satisfied",
        "translation":  "Adj.",
        "sentence":  "Verb"
    },
    {
        "pos":  "Noun",
        "word":  "Saturday",
        "translation":  "Cumartesi",
        "sentence":  "I usually plan my YouTube content on Saturday mornings."
    },
    {
        "pos":  "Noun",
        "word":  "Sauce",
        "translation":  "Sos",
        "sentence":  "(Yiyecek.)"
    },
    {
        "pos":  "Verb",
        "word":  "Save",
        "translation":  "Tasarruf etmek, kaydetmek",
        "sentence":  "Our goal is to save costs through strategic sourcing."
    },
    {
        "pos":  "Noun",
        "word":  "Saving",
        "translation":  "Tasarruf",
        "sentence":  "Cost-down studies lead to significant savings for the firm."
    },
    {
        "pos":  "Noun",
        "word":  "Say",
        "translation":  "Söz hakkı",
        "sentence":  "I believe everyone should have a say in the new office layout."
    },
    {
        "pos":  "Verb",
        "word":  "Say",
        "translation":  "Söylemek",
        "sentence":  "What did the manager say about your self-evaluation?"
    },
    {
        "pos":  "Noun",
        "word":  "Scale",
        "translation":  "Ölçek",
        "sentence":  "Terazi"
    },
    {
        "pos":  "Verb",
        "word":  "Scan",
        "translation":  "Taramak",
        "sentence":  "I will scan the contract and send it to you."
    },
    {
        "pos":  "Noun",
        "word":  "Scandal",
        "translation":  "Skandal",
        "sentence":  "The financial scandal led to the resignation of the CEO."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Scare",
        "translation":  "Korkutmak",
        "sentence":  "The sudden drop in gold prices gave many investors a scare."
    },
    {
        "pos":  "Scary",
        "word":  "Scared",
        "translation":  "Adjective",
        "sentence":  "Korkmuş"
    },
    {
        "pos":  "Adjective",
        "word":  "Scattered",
        "translation":  "Dağınık",
        "sentence":  "There were some scattered showers in İzmir yesterday."
    },
    {
        "pos":  "Noun",
        "word":  "Scenario",
        "translation":  "Senaryo",
        "sentence":  "We need to plan for the worst-case scenario regarding supply."
    },
    {
        "pos":  "Noun",
        "word":  "Scene",
        "translation":  "Sahne, olay yeri",
        "sentence":  "The first scene of the children\u0027s video is in a forest."
    },
    {
        "pos":  "Noun",
        "word":  "Schedule",
        "translation":  "Verb",
        "sentence":  "Program"
    },
    {
        "pos":  "Noun",
        "word":  "Scholar",
        "translation":  "Bilgin, bursiyer",
        "sentence":  "He is a leading scholar in the field of international trade."
    },
    {
        "pos":  "Noun",
        "word":  "Scholarship",
        "translation":  "Burs",
        "sentence":  "She won a full scholarship to study for her Master\u0027s degree."
    },
    {
        "pos":  "Noun",
        "word":  "School",
        "translation":  "Okul",
        "sentence":  "(Eğitim terimi.)"
    },
    {
        "pos":  "Scientific",
        "word":  "Science",
        "translation":  "Noun",
        "sentence":  "Adjective"
    },
    {
        "pos":  "Noun",
        "word":  "Scientist",
        "translation":  "Bilim insanı",
        "sentence":  "(Meslek.)"
    },
    {
        "pos":  "Noun",
        "word":  "Scope",
        "translation":  "Kapsam",
        "sentence":  "This issue is outside the scope of our current cost-down study."
    },
    {
        "pos":  "Verb",
        "word":  "Score",
        "translation":  "Noun",
        "sentence":  "Puan"
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Scratch",
        "translation":  "Tırmalamak, çizik",
        "sentence":  "Be careful not to scratch the screen of your new laptop."
    },
    {
        "pos":  "Verb",
        "word":  "Scream",
        "translation":  "Noun",
        "sentence":  "Çığlık atmak"
    },
    {
        "pos":  "Noun",
        "word":  "Screen",
        "translation":  "Verb",
        "sentence":  "Ekran"
    },
    {
        "pos":  "Noun",
        "word":  "Screening",
        "translation":  "Tarama, gösterim",
        "sentence":  "The security screening at Sabiha Gökçen was very thorough."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Screw",
        "translation":  "Vidalamak, vida",
        "sentence":  "I need a screwdriver to tighten this loose screw."
    },
    {
        "pos":  "Noun",
        "word":  "Script",
        "translation":  "Senaryo, metin",
        "sentence":  "I am writing a script for the new educational song."
    },
    {
        "pos":  "Noun",
        "word":  "Scrutiny",
        "translation":  "İnceleme, denetleme",
        "sentence":  "The company\u0027s tax records are under close scrutiny."
    },
    {
        "pos":  "Noun",
        "word":  "Sculpture",
        "translation":  "Heykel",
        "sentence":  "(Sanat terimi.)"
    },
    {
        "pos":  "Noun",
        "word":  "Sea",
        "translation":  "Deniz",
        "sentence":  "İzmir is famous for its beautiful sea view."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Seal",
        "translation":  "Mühürlemek",
        "sentence":  "Please seal the envelope before you send the contract."
    },
    {
        "pos":  "Noun",
        "word":  "Search",
        "translation":  "Verb",
        "sentence":  "Arama"
    },
    {
        "pos":  "Noun",
        "word":  "Season",
        "translation":  "Mevsim",
        "sentence":  "Sezon"
    },
    {
        "pos":  "Noun",
        "word":  "Seat",
        "translation":  "Verb",
        "sentence":  "Koltuk"
    },
    {
        "pos":  "Det.",
        "word":  "Second",
        "translation":  "Number",
        "sentence":  "İkinci"
    },
    {
        "pos":  "Adjective",
        "word":  "Secondary",
        "translation":  "İkincil",
        "sentence":  "Cost is important, but quality is not a secondary concern."
    },
    {
        "pos":  "Adverb",
        "word":  "Secondly",
        "translation":  "İkinci olarak",
        "sentence":  "Secondly, we need to evaluate the quality of the new material."
    },
    {
        "pos":  "Adjective",
        "word":  "Secret",
        "translation":  "Noun",
        "sentence":  "Gizli"
    },
    {
        "pos":  "Noun",
        "word":  "Secretary",
        "translation":  "Sekreter",
        "sentence":  "(Meslek.)"
    },
    {
        "pos":  "Noun",
        "word":  "Section",
        "translation":  "Bölüm, kısım",
        "sentence":  "This section of the report focuses on silver."
    },
    {
        "pos":  "Noun",
        "word":  "Sector",
        "translation":  "Sektör",
        "sentence":  "I work in the strategic sourcing sector."
    },
    {
        "pos":  "Adjective",
        "word":  "Secular",
        "translation":  "Laik, seküler",
        "sentence":  "Turkey is a secular republic with a modern legal system."
    },
    {
        "pos":  "Security",
        "word":  "Secure",
        "translation":  "Verb",
        "sentence":  "Adj."
    },
    {
        "pos":  "Verb",
        "word":  "See",
        "translation":  "Görmek",
        "sentence":  "I can see a big improvement in my English skills."
    },
    {
        "pos":  "Noun",
        "word":  "Seed",
        "translation":  "Tohum",
        "sentence":  "(Doğa terimi.)"
    },
    {
        "pos":  "Verb",
        "word":  "Seek",
        "translation":  "Aramak, peşinde koşmak",
        "sentence":  "We seek alternative firms that offer competitive prices."
    },
    {
        "pos":  "Noun",
        "word":  "Seeker",
        "translation":  "Arayan kişi",
        "sentence":  "The city is full of opportunity for ambitious job seekers."
    },
    {
        "pos":  "Verb",
        "word":  "Seem",
        "translation":  "Görünmek",
        "sentence":  "The car financing options seem complicated at first."
    },
    {
        "pos":  "Adverb",
        "word":  "Seemingly",
        "translation":  "Görünüşe göre",
        "sentence":  "He is seemingly happy with the results of the performance review."
    },
    {
        "pos":  "Noun",
        "word":  "Segment",
        "translation":  "Segment, bölüm",
        "sentence":  "We are focusing on a very specific segment of the market."
    },
    {
        "pos":  "Verb",
        "word":  "Seize",
        "translation":  "Ele geçirmek",
        "sentence":  "We should seize the opportunity to buy palladium while prices are low."
    },
    {
        "pos":  "Adverb",
        "word":  "Seldom",
        "translation":  "Nadiren",
        "sentence":  "I seldom have free time during the busy sourcing season."
    },
    {
        "pos":  "Selection",
        "word":  "Select",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Adjective",
        "word":  "Selective",
        "translation":  "Seçici",
        "sentence":  "The company is very selective when choosing new alternative firms."
    },
    {
        "pos":  "Noun",
        "word":  "Self",
        "translation":  "Kendi, öz",
        "sentence":  "My self-evaluation note is almost ready."
    },
    {
        "pos":  "Verb",
        "word":  "Sell",
        "translation":  "Satmak",
        "sentence":  "When is the best time to sell your silver holdings?"
    },
    {
        "pos":  "Noun",
        "word":  "Seminar",
        "translation":  "Seminer",
        "sentence":  "I attended an informative seminar on digital asset management."
    },
    {
        "pos":  "Senator",
        "word":  "Senate",
        "translation":  "Noun",
        "sentence":  "Senato"
    },
    {
        "pos":  "Verb",
        "word":  "Send",
        "translation":  "Gönder",
        "sentence":  "Send the total gold weight calculation to my email."
    },
    {
        "pos":  "Adjective",
        "word":  "Senior",
        "translation":  "Kıdemli",
        "sentence":  "I am working towards becoming a senior sourcing expert."
    },
    {
        "pos":  "Noun",
        "word":  "Sensation",
        "translation":  "His, duyum",
        "sentence":  "I had a strange sensation that I had met the supplier before."
    },
    {
        "pos":  "Noun",
        "word":  "Sense",
        "translation":  "Verb",
        "sentence":  "Anlam, duyu"
    },
    {
        "pos":  "Adjective",
        "word":  "Sensible",
        "translation":  "Mantıklı",
        "sentence":  "Buying silver now seems like a sensible decision."
    },
    {
        "pos":  "Adjective",
        "word":  "Sensitive",
        "translation":  "Hassas",
        "sentence":  "Precious metal prices are very sensitive to global news."
    },
    {
        "pos":  "Noun",
        "word":  "Sensitivity",
        "translation":  "Hassasiyet",
        "sentence":  "Price sensitivity is high in the raw material market right now."
    },
    {
        "pos":  "Noun",
        "word":  "Sentence",
        "translation":  "Verb",
        "sentence":  "Cümle"
    },
    {
        "pos":  "Noun",
        "word":  "Sentiment",
        "translation":  "Duygu, görüş",
        "sentence":  "Market sentiment regarding silver has been very positive recently."
    },
    {
        "pos":  "Adjective",
        "word":  "Separate",
        "translation":  "Verb",
        "sentence":  "Ayrı"
    },
    {
        "pos":  "Noun",
        "word":  "Separation",
        "translation":  "Ayrılma",
        "sentence":  "The separation of professional and personal life is important."
    },
    {
        "pos":  "Noun",
        "word":  "September",
        "translation":  "Eylül",
        "sentence":  "(Ay.)"
    },
    {
        "pos":  "Noun",
        "word":  "Sequence",
        "translation":  "Sıralama, dizi",
        "sentence":  "The sequence of tasks in production is very important."
    },
    {
        "pos":  "Adjective",
        "word":  "Serial",
        "translation":  "Seri, sırasal",
        "sentence":  "Please check the serial number on the back of the machine."
    },
    {
        "pos":  "Noun",
        "word":  "Series",
        "translation":  "Seri, dizi",
        "sentence":  "I am watching a series about investment strategies."
    },
    {
        "pos":  "Seriously",
        "word":  "Serious",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Noun",
        "word":  "Servant",
        "translation":  "Hizmetçi, uşak",
        "sentence":  "(Genel terim.)"
    },
    {
        "pos":  "Service",
        "word":  "Serve",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Noun",
        "word":  "Session",
        "translation":  "Oturum, seans",
        "sentence":  "The morning session will focus on cost reduction."
    },
    {
        "pos":  "Verb",
        "word":  "Set",
        "translation":  "Noun",
        "sentence":  "Kurmak, koymak"
    },
    {
        "pos":  "Noun",
        "word":  "Setting",
        "translation":  "Ayar, ortam",
        "sentence":  "You can change the settings on your social media page."
    },
    {
        "pos":  "Verb",
        "word":  "Settle",
        "translation":  "Yerleşmek, halletmek",
        "sentence":  "I want to settle the car purchase by next month."
    },
    {
        "pos":  "Noun",
        "word":  "Settlement",
        "translation":  "Yerleşim, anlaşma",
        "sentence":  "The two companies finally reached a financial settlement."
    },
    {
        "pos":  "Noun",
        "word":  "Settler",
        "translation":  "Yerleşimci",
        "sentence":  "The first settlers in the region were farmers and traders."
    },
    {
        "pos":  "Noun",
        "word":  "Setup",
        "translation":  "Kurulum, düzen",
        "sentence":  "I really like your new home office setup in İzmir."
    },
    {
        "pos":  "Seventeen",
        "word":  "Seven",
        "translation":  "Seventy",
        "sentence":  "Number"
    },
    {
        "pos":  "Det.",
        "word":  "Several",
        "translation":  "Pronoun",
        "sentence":  "Birkaç"
    },
    {
        "pos":  "Adjective",
        "word":  "Severe",
        "translation":  "Şiddetli, ağır",
        "sentence":  "The factory faced severe supply chain issues last year."
    },
    {
        "pos":  "Adverb",
        "word":  "Severely",
        "translation":  "Şiddetle, ağır bir şekilde",
        "sentence":  "The supply chain was severely affected by the global crisis."
    },
    {
        "pos":  "Sexual",
        "word":  "Sex",
        "translation":  "Noun",
        "sentence":  "Adjective"
    },
    {
        "pos":  "Noun",
        "word":  "Sexuality",
        "translation":  "Cinsellik",
        "sentence":  "The book explores various aspects of human sexuality."
    },
    {
        "pos":  "Adjective",
        "word":  "Sexy",
        "translation":  "Seksi, çekici",
        "sentence":  "The new marketing campaign has a very sexy and modern feel."
    },
    {
        "pos":  "Shadow",
        "word":  "Shade",
        "translation":  "Noun",
        "sentence":  "Gölge"
    },
    {
        "pos":  "Verb",
        "word":  "Shake",
        "translation":  "Noun",
        "sentence":  "Sallamak"
    },
    {
        "pos":  "Modal Verb",
        "word":  "Shall",
        "translation":  "-ecek, -acak (teklif)",
        "sentence":  "Shall we review the alternative firm\u0027s proposal together?"
    },
    {
        "pos":  "Adjective",
        "word":  "Shallow",
        "translation":  "Sığ",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Shame",
        "translation":  "Utanç, yazık",
        "sentence":  "It\u0027s a shame that the flight was canceled."
    },
    {
        "pos":  "Noun",
        "word":  "Shape",
        "translation":  "Verb",
        "sentence":  "Şekil"
    },
    {
        "pos":  "Adjective",
        "word":  "Shaped",
        "translation":  "Şekilli",
        "sentence":  "The raw materials are shaped into various components for production."
    },
    {
        "pos":  "Verb",
        "word":  "Share",
        "translation":  "Noun",
        "sentence":  "Paylaşmak"
    },
    {
        "pos":  "Noun",
        "word":  "Shareholder",
        "translation":  "Hissedar",
        "sentence":  "The shareholders are pleased with the recent cost reduction results."
    },
    {
        "pos":  "Adjective",
        "word":  "Sharp",
        "translation":  "Keskin",
        "sentence":  "There was a sharp increase in the price of palladium."
    },
    {
        "pos":  "Verb",
        "word":  "Shatter",
        "translation":  "Parçalamak",
        "sentence":  "The news of the bankruptcy managed to shatter her confidence."
    },
    {
        "pos":  "Sheep",
        "word":  "She",
        "translation":  "Pronoun",
        "sentence":  "Noun"
    },
    {
        "pos":  "Verb",
        "word":  "Shed",
        "translation":  "Dökmek",
        "sentence":  "The company needs to shed some of its non-core assets."
    },
    {
        "pos":  "Adjective",
        "word":  "Sheer",
        "translation":  "Sırf, saf",
        "sentence":  "It was sheer luck that we found a cheaper supplier so quickly."
    },
    {
        "pos":  "Noun",
        "word":  "Sheet",
        "translation":  "Çarşaf, tabaka, sayfa",
        "sentence":  "I need a sheet of paper to note down the supplier names."
    },
    {
        "pos":  "Noun",
        "word":  "Shelf",
        "translation":  "Raf",
        "sentence":  "Put the raw material samples on the top shelf."
    },
    {
        "pos":  "Noun",
        "word":  "Shell",
        "translation":  "Kabuk, dış kabuk",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Shelter",
        "translation":  "Verb",
        "sentence":  "Barınak"
    },
    {
        "pos":  "Noun",
        "word":  "Shift",
        "translation":  "Verb",
        "sentence":  "Vardiya"
    },
    {
        "pos":  "Shiny",
        "word":  "Shine",
        "translation":  "Verb",
        "sentence":  "Adjective"
    },
    {
        "pos":  "Shipping",
        "word":  "Ship",
        "translation":  "Noun",
        "sentence":  "Verb"
    },
    {
        "pos":  "Noun",
        "word":  "Shipping",
        "translation":  "Nakliye, sevkiyat",
        "sentence":  "Shipping costs have increased by 20% since last March."
    },
    {
        "pos":  "Noun",
        "word":  "Shirt",
        "translation":  "Gömlek",
        "sentence":  "(Giyim.)"
    },
    {
        "pos":  "Shocked",
        "word":  "Shock",
        "translation":  "Noun",
        "sentence":  "Verb"
    },
    {
        "pos":  "Adjective",
        "word":  "Shocking",
        "translation":  "Şok edici",
        "sentence":  "The report revealed some shocking details about the alternative firm."
    },
    {
        "pos":  "Noun",
        "word":  "Shoe",
        "translation":  "Ayakkabı",
        "sentence":  "(Giyim.)"
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Shoot",
        "translation":  "Sürgün, çekim / Ateş etmek",
        "sentence":  "We are planning a video shoot for the new YouTube channel."
    },
    {
        "pos":  "Shooting",
        "word":  "Shoot",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Shopping",
        "word":  "Shop",
        "translation":  "Noun",
        "sentence":  "Verb"
    },
    {
        "pos":  "Noun",
        "word":  "Shore",
        "translation":  "Kıyı, sahil",
        "sentence":  "We walked along the shore of the Aegean Sea last Sunday."
    },
    {
        "pos":  "Adjective",
        "word":  "Short",
        "translation":  "Kısa",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Short-term",
        "translation":  "Kısa vadeli",
        "sentence":  "We need a short-term solution to the raw material shortage."
    },
    {
        "pos":  "Noun",
        "word":  "Shortage",
        "translation":  "Kıtlık, eksiklik",
        "sentence":  "There is a temporary shortage of palladium in the global market."
    },
    {
        "pos":  "Adverb",
        "word":  "Shortly",
        "translation":  "Kısa süre içinde",
        "sentence":  "The manager will be with you shortly to discuss the evaluation."
    },
    {
        "pos":  "Noun",
        "word":  "Shot",
        "translation":  "Atış, kare, vuruş",
        "sentence":  "That was a great shot in the video!"
    },
    {
        "pos":  "Modal Verb",
        "word":  "Should",
        "translation":  "-meli, -malı (tavsiye)",
        "sentence":  "You should consider diversifying your investments."
    },
    {
        "pos":  "Noun",
        "word":  "Shoulder",
        "translation":  "Omuz",
        "sentence":  "(Vücut parçası.)"
    },
    {
        "pos":  "Verb",
        "word":  "Shout",
        "translation":  "Noun",
        "sentence":  "Bağırmak"
    },
    {
        "pos":  "Verb",
        "word":  "Show",
        "translation":  "Noun",
        "sentence":  "Göstermek"
    },
    {
        "pos":  "Noun",
        "word":  "Shower",
        "translation":  "Duş",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Verb",
        "word":  "Shrink",
        "translation":  "Küçülmek, çekmek",
        "sentence":  "The market for luxury goods is expected to shrink this year."
    },
    {
        "pos":  "Verb",
        "word":  "Shrug",
        "translation":  "Omuz silkmek",
        "sentence":  "He just gave a shrug when I asked about the flight compensation."
    },
    {
        "pos":  "Verb",
        "word":  "Shut",
        "translation":  "Adjective",
        "sentence":  "Kapatmak"
    },
    {
        "pos":  "Adjective",
        "word":  "Shy",
        "translation":  "Utangaç",
        "sentence":  "(Kişilik özelliği.)"
    },
    {
        "pos":  "Noun",
        "word":  "Sibling",
        "translation":  "Kardeş",
        "sentence":  "Do you have any siblings living in İzmir as well?"
    },
    {
        "pos":  "Adjective",
        "word":  "Sick",
        "translation":  "Hasta",
        "sentence":  "(Sağlık.)"
    },
    {
        "pos":  "Noun",
        "word":  "Side",
        "translation":  "Yan, taraf",
        "sentence":  "Which side are you on regarding the car financing?"
    },
    {
        "pos":  "Noun",
        "word":  "Sidewalk",
        "translation":  "Kaldırım",
        "sentence":  "I was walking on the sidewalk when I ran into an old colleague."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Sigh",
        "translation":  "İç çekmek",
        "sentence":  "She let out a long sigh of relief after finishing the self-evaluation."
    },
    {
        "pos":  "Noun",
        "word":  "Sight",
        "translation":  "Görme, manzara",
        "sentence":  "The port of İzmir is a beautiful sight."
    },
    {
        "pos":  "Noun",
        "word":  "Sign",
        "translation":  "Verb",
        "sentence":  "İşaret, tabela"
    },
    {
        "pos":  "Noun",
        "word":  "Signal",
        "translation":  "Verb",
        "sentence":  "Sinyal"
    },
    {
        "pos":  "Noun",
        "word":  "Signature",
        "translation":  "İmza",
        "sentence":  "We need your digital signature on the alternative firm contract."
    },
    {
        "pos":  "Noun",
        "word":  "Significance",
        "translation":  "Önem, anlam",
        "sentence":  "The discovery of silver in the region was of great significance."
    },
    {
        "pos":  "Significantly",
        "word":  "Significant",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Silent",
        "word":  "Silence",
        "translation":  "Noun",
        "sentence":  "Adjective"
    },
    {
        "pos":  "Noun",
        "word":  "Silk",
        "translation":  "İpek",
        "sentence":  "(Kumaş türü.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Silly",
        "translation":  "Aptalca, saçma",
        "sentence":  "Don\u0027t make a silly mistake with the gold weight calculation."
    },
    {
        "pos":  "Noun",
        "word":  "Silver",
        "translation":  "Adjective",
        "sentence":  "Gümüş"
    },
    {
        "pos":  "Similarity",
        "word":  "Similar",
        "translation":  "Similarly",
        "sentence":  "Adj."
    },
    {
        "pos":  "Simply",
        "word":  "Simple",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Verb",
        "word":  "Simulate",
        "translation":  "Simüle etmek",
        "sentence":  "We use a special program to simulate different supply scenarios."
    },
    {
        "pos":  "Noun",
        "word":  "Simulation",
        "translation":  "Simülasyon",
        "sentence":  "The simulation showed that the cost reduction strategy will work."
    },
    {
        "pos":  "Adverb",
        "word":  "Simultaneously",
        "translation":  "Eş zamanlı olarak",
        "sentence":  "The two events happened simultaneously in İzmir and Sabiha Gökçen."
    },
    {
        "pos":  "Noun",
        "word":  "Sin",
        "translation":  "Günah",
        "sentence":  "He felt that wasting company resources was a professional sin."
    },
    {
        "pos":  "Prep.",
        "word":  "Since",
        "translation":  "Conj.",
        "sentence":  "-den beri"
    },
    {
        "pos":  "Adjective",
        "word":  "Sincere",
        "translation":  "Samimi, içten",
        "sentence":  "Please accept my sincere thanks for your support."
    },
    {
        "pos":  "Singer",
        "word":  "Sing",
        "translation":  "Singing",
        "sentence":  "Verb"
    },
    {
        "pos":  "Adjective",
        "word":  "Single",
        "translation":  "Noun",
        "sentence":  "Tek, bekar"
    },
    {
        "pos":  "Verb",
        "word":  "Sink",
        "translation":  "Batmak",
        "sentence":  "Lavabo"
    },
    {
        "pos":  "Noun",
        "word":  "Sir",
        "translation":  "Efendim, beyefendi",
        "sentence":  "(Hitap şekli.)"
    },
    {
        "pos":  "Noun",
        "word":  "Sister",
        "translation":  "Kız kardeş",
        "sentence":  "(Aile.)"
    },
    {
        "pos":  "Verb",
        "word":  "Sit",
        "translation":  "Oturmak",
        "sentence":  "Let’s sit down and discuss the car financing options."
    },
    {
        "pos":  "Noun",
        "word":  "Site",
        "translation":  "Site, yer, internet sitesi",
        "sentence":  "I checked the Akbank site for palladium prices."
    },
    {
        "pos":  "Adjective",
        "word":  "Situated",
        "translation":  "Konumlanmış",
        "sentence":  "The new office is perfectly situated near the city center."
    },
    {
        "pos":  "Noun",
        "word":  "Situation",
        "translation":  "Durum",
        "sentence":  "The supply situation is improving day by day."
    },
    {
        "pos":  "Sixteen",
        "word":  "Six",
        "translation":  "Sixty",
        "sentence":  "Number"
    },
    {
        "pos":  "Noun",
        "word":  "Size",
        "translation":  "Boyut, beden",
        "sentence":  "The size of the silver bar is quite small."
    },
    {
        "pos":  "Adjective",
        "word":  "Skeptical",
        "translation":  "Şüpheci",
        "sentence":  "I am a bit skeptical about the supplier\u0027s promise to lower prices."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Sketch",
        "translation":  "Taslak, çizim",
        "sentence":  "Can you provide a quick sketch of the new YouTube channel logo?"
    },
    {
        "pos":  "Skiing",
        "word":  "Ski",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Noun",
        "word":  "Skill",
        "translation":  "Beceri, yetenek",
        "sentence":  "Negotiating is a vital skill in my profession."
    },
    {
        "pos":  "Adjective",
        "word":  "Skilled",
        "translation":  "Yetenekli, vasıflı",
        "sentence":  "Finding skilled labor for managing raw materials is a challenge."
    },
    {
        "pos":  "Noun",
        "word":  "Skin",
        "translation":  "Cilt, deri",
        "sentence":  "(Vücut parçası.)"
    },
    {
        "pos":  "Verb",
        "word":  "Skip",
        "translation":  "Atlamak, geçmek",
        "sentence":  "I decided to skip the boring introduction and start from the first chapter."
    },
    {
        "pos":  "Noun",
        "word":  "Skirt",
        "translation":  "Etek",
        "sentence":  "(Giyim.)"
    },
    {
        "pos":  "Noun",
        "word":  "Skull",
        "translation":  "Kafatası",
        "sentence":  "The X-ray showed a small fracture in the patient\u0027s skull."
    },
    {
        "pos":  "Noun",
        "word":  "Sky",
        "translation":  "Gökyüzü",
        "sentence":  "(Doğa.)"
    },
    {
        "pos":  "Verb",
        "word":  "Slam",
        "translation":  "Sertçe kapatmak, çarpmak",
        "sentence":  "Please don\u0027t slam the door; it\u0027s very loud in the office."
    },
    {
        "pos":  "Verb",
        "word":  "Slap",
        "translation":  "Tokat atmak, sertçe vurmak",
        "sentence":  "He managed to slap the mosquito on his arm."
    },
    {
        "pos":  "Verb",
        "word":  "Slash",
        "translation":  "Hızla düşürmek (fiyat vb.), yarmak",
        "sentence":  "The department store decided to slash prices for the winter sale."
    },
    {
        "pos":  "Noun",
        "word":  "Slave",
        "translation":  "Köle",
        "sentence":  "(Tarihi"
    },
    {
        "pos":  "Noun",
        "word":  "Slavery",
        "translation":  "Kölelik",
        "sentence":  "Many historical books discuss the abolition of slavery in the 19th century."
    },
    {
        "pos":  "Verb",
        "word":  "Sleep",
        "translation":  "Noun",
        "sentence":  "Uyumak"
    },
    {
        "pos":  "Noun",
        "word":  "Slice",
        "translation":  "Verb",
        "sentence":  "Dilim"
    },
    {
        "pos":  "Verb",
        "word":  "Slide",
        "translation":  "Noun",
        "sentence":  "Kaymak"
    },
    {
        "pos":  "Slightly",
        "word":  "Slight",
        "translation":  "Adj.",
        "sentence":  "Adverb"
    },
    {
        "pos":  "Verb",
        "word":  "Slip",
        "translation":  "Kaymak, hata yapmak",
        "sentence":  "Be careful not to slip on the wet floor in the factory."
    },
    {
        "pos":  "Noun",
        "word":  "Slogan",
        "translation":  "Slogan",
        "sentence":  "A catchy slogan is essential for a successful marketing campaign."
    },
    {
        "pos":  "Noun",
        "word":  "Slope",
        "translation":  "Verb",
        "sentence":  "Eğim, yamaç"
    },
    {
        "pos":  "Noun",
        "word":  "Slot",
        "translation":  "Yer, yuva, zaman dilimi",
        "sentence":  "I have a free slot in my schedule at 3 PM for our meeting."
    },
    {
        "pos":  "Slowly",
        "word":  "Slow",
        "translation":  "Adj.",
        "sentence":  "Adverb"
    },
    {
        "pos":  "Adjective",
        "word":  "Small",
        "translation":  "Küçük",
        "sentence":  "I have a small collection of 1 gram gold pieces."
    },
    {
        "pos":  "Adjective",
        "word":  "Smart",
        "translation":  "Zeki, akıllı",
        "sentence":  "Investing in precious metals is a smart way to manage your wealth."
    },
    {
        "pos":  "Noun",
        "word":  "Smartphone",
        "translation":  "Akıllı telefon",
        "sentence":  "I use my smartphone to track social media trends."
    },
    {
        "pos":  "Verb",
        "word":  "Smash",
        "translation":  "Parçalamak, kırmak",
        "sentence":  "The waiter accidentally dropped the tray and watched the glasses smash."
    },
    {
        "pos":  "Verb",
        "word":  "Smell",
        "translation":  "Noun",
        "sentence":  "Koklamak"
    },
    {
        "pos":  "Verb",
        "word":  "Smile",
        "translation":  "Noun",
        "sentence":  "Gülümsemek"
    },
    {
        "pos":  "Smoking",
        "word":  "Smoke",
        "translation":  "Noun",
        "sentence":  "Verb"
    },
    {
        "pos":  "Adjective",
        "word":  "Smooth",
        "translation":  "Pürüzsüz, sorunsuz",
        "sentence":  "The transition to the new supplier was very smooth."
    },
    {
        "pos":  "Noun",
        "word":  "Snake",
        "translation":  "Yılan",
        "sentence":  "(Hayvan.)"
    },
    {
        "pos":  "Verb",
        "word":  "Snap",
        "translation":  "Aniden kırılmak, şıklatmak",
        "sentence":  "The dry branch managed to snap under the weight of the heavy snow."
    },
    {
        "pos":  "Noun",
        "word":  "Sneaker",
        "translation":  "Spor ayakkabı",
        "sentence":  "(Giyim.)"
    },
    {
        "pos":  "Noun",
        "word":  "Snow",
        "translation":  "Verb",
        "sentence":  "Kar"
    },
    {
        "pos":  "Adverb",
        "word":  "So",
        "translation":  "Conj.",
        "sentence":  "Öyle, çok"
    },
    {
        "pos":  "Adjective",
        "word":  "So-called",
        "translation":  "Sözde",
        "sentence":  "I don\u0027t trust his so-called expertise in financial asset management."
    },
    {
        "pos":  "Verb",
        "word":  "Soak",
        "translation":  "Islatmak, suya bastırmak",
        "sentence":  "You should soak the beans in water overnight before cooking them."
    },
    {
        "pos":  "Noun",
        "word":  "Soap",
        "translation":  "Sabun",
        "sentence":  "(Temizlik.)"
    },
    {
        "pos":  "Verb",
        "word":  "Soar",
        "translation":  "Hızla yükselmek",
        "sentence":  "Property prices in coastal cities continue to soar this year."
    },
    {
        "pos":  "Noun",
        "word":  "Soccer",
        "translation":  "Futbol",
        "sentence":  "I enjoy analyzing soccer matches for betting options."
    },
    {
        "pos":  "Adjective",
        "word":  "Social",
        "translation":  "Sosyal",
        "sentence":  "I want to automate my social media tracking."
    },
    {
        "pos":  "Adjective",
        "word":  "Socialist",
        "translation":  "Sosyalist",
        "sentence":  "The candidate discussed his socialist views on healthcare reform."
    },
    {
        "pos":  "Noun",
        "word":  "Society",
        "translation":  "Toplum",
        "sentence":  "(Genel terim.)"
    },
    {
        "pos":  "Noun",
        "word":  "Sock",
        "translation":  "Çorap",
        "sentence":  "(Giyim.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Soft",
        "translation":  "Yumuşak",
        "sentence":  "(Fiziksel özellik.)"
    },
    {
        "pos":  "Noun",
        "word":  "Software",
        "translation":  "Yazılım",
        "sentence":  "I\u0027m looking for software to track celebrity following trends."
    },
    {
        "pos":  "Noun",
        "word":  "Soil",
        "translation":  "Toprak",
        "sentence":  "(Doğa.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Solar",
        "translation":  "Güneşle ilgili",
        "sentence":  "Solar panels require certain precious metals for production."
    },
    {
        "pos":  "Noun",
        "word":  "Soldier",
        "translation":  "Asker",
        "sentence":  "(Meslek.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Sole",
        "translation":  "Tek, yegane",
        "sentence":  "My sole reason for calling was to invite you to the event."
    },
    {
        "pos":  "Adverb",
        "word":  "Solely",
        "translation":  "Sadece, yalnızca",
        "sentence":  "The decision was based solely on the information in the report."
    },
    {
        "pos":  "Adjective",
        "word":  "Solid",
        "translation":  "Noun",
        "sentence":  "Katı, sağlam"
    },
    {
        "pos":  "Noun",
        "word":  "Solidarity",
        "translation":  "Dayanışma",
        "sentence":  "The workers showed great solidarity during the week-long strike."
    },
    {
        "pos":  "Adj. / Noun",
        "word":  "Solo",
        "translation":  "Solo, tek başına",
        "sentence":  "After years in a band, she decided to start a successful solo career."
    },
    {
        "pos":  "Noun",
        "word":  "Solution",
        "translation":  "Çözüm",
        "sentence":  "Finding an alternative firm is the best solution to our problem."
    },
    {
        "pos":  "Verb",
        "word":  "Solve",
        "translation":  "Çözmek",
        "sentence":  "We need to solve the cost issue before the end of the quarter."
    },
    {
        "pos":  "Somebody",
        "word":  "Some",
        "translation":  "Someone",
        "sentence":  "Something"
    },
    {
        "pos":  "Adverb",
        "word":  "Somehow",
        "translation":  "Bir şekilde",
        "sentence":  "Somehow, we managed to finish the project before the deadline."
    },
    {
        "pos":  "Adverb",
        "word":  "Sometime",
        "translation":  "Bir ara, bazen",
        "sentence":  "Let\u0027s meet for a coffee sometime next week to catch up."
    },
    {
        "pos":  "Noun",
        "word":  "Son",
        "translation":  "Oğul",
        "sentence":  "(Aile.)"
    },
    {
        "pos":  "Noun",
        "word":  "Song",
        "translation":  "Şarkı",
        "sentence":  "The first song for my YouTube channel is about animals."
    },
    {
        "pos":  "Adverb",
        "word":  "Soon",
        "translation":  "Yakında",
        "sentence":  "I hope to buy my new car soon."
    },
    {
        "pos":  "Adjective",
        "word":  "Sophisticated",
        "translation":  "Gelişmiş, sofistike",
        "sentence":  "The new security system is highly sophisticated and hard to break."
    },
    {
        "pos":  "Noun",
        "word":  "Sophomore",
        "translation":  "İkinci sınıf öğrencisi",
        "sentence":  "He is currently a sophomore studying engineering at the university."
    },
    {
        "pos":  "Adj.",
        "word":  "Sorry",
        "translation":  "Excl.",
        "sentence":  "Üzgün"
    },
    {
        "pos":  "Noun",
        "word":  "Sort",
        "translation":  "Verb",
        "sentence":  "Tür"
    },
    {
        "pos":  "Noun",
        "word":  "Soul",
        "translation":  "Ruh",
        "sentence":  "He sold his soul for Money."
    },
    {
        "pos":  "Adjective",
        "word":  "Sound",
        "translation":  "Sağlam, mantıklı",
        "sentence":  "Despite the crisis, the company\u0027s financial position remains sound."
    },
    {
        "pos":  "Noun",
        "word":  "Sound",
        "translation":  "Verb",
        "sentence":  "Ses"
    },
    {
        "pos":  "Noun",
        "word":  "Soup",
        "translation":  "Çorba",
        "sentence":  "(Yiyecek.)"
    },
    {
        "pos":  "Noun",
        "word":  "Source",
        "translation":  "Kaynak",
        "sentence":  "We are looking for a new source for raw materials."
    },
    {
        "pos":  "Southern",
        "word":  "South",
        "translation":  "Noun",
        "sentence":  "Adj."
    },
    {
        "pos":  "Noun",
        "word":  "Sovereignty",
        "translation":  "Egemenlik",
        "sentence":  "The nation celebrated the anniversary of its sovereignty and independence."
    },
    {
        "pos":  "Noun",
        "word":  "Space",
        "translation":  "Alan, boşluk, uzay",
        "sentence":  "We need more space in the factory for the new production line."
    },
    {
        "pos":  "Noun",
        "word":  "Spam",
        "translation":  "Gereksiz e-posta",
        "sentence":  "My inbox is full of spam advertising products I don\u0027t need."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Span",
        "translation":  "Kapsamak / Süre, mesafe",
        "sentence":  "The bridge will span the entire width of the river."
    },
    {
        "pos":  "Adj. / Verb",
        "word":  "Spare",
        "translation":  "Yedek / Ayırmak",
        "sentence":  "Could you spare a few minutes to help me with this task?"
    },
    {
        "pos":  "Verb",
        "word":  "Spark",
        "translation":  "Tetiklemek, kıvılcım saçmak",
        "sentence":  "The new law managed to spark a lot of controversy in the media."
    },
    {
        "pos":  "Speaker",
        "word":  "Speak",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Adjective",
        "word":  "Special",
        "translation":  "Özel",
        "sentence":  "This anniversary is very special to me because it\u0027s my 5th year."
    },
    {
        "pos":  "Noun",
        "word":  "Specialist",
        "translation":  "Adj.",
        "sentence":  "Uzman"
    },
    {
        "pos":  "Verb",
        "word":  "Specialize",
        "translation":  "Uzmanlaşmak",
        "sentence":  "He decided to specialize in strategic sourcing and cost reduction."
    },
    {
        "pos":  "Adjective",
        "word":  "Specialized",
        "translation":  "Uzmanlaşmış",
        "sentence":  "This role requires specialized knowledge of raw material management."
    },
    {
        "pos":  "Noun",
        "word":  "Species",
        "translation":  "Tür (canlılar için)",
        "sentence":  "(Bilimsel terim.)"
    },
    {
        "pos":  "Specifically",
        "word":  "Specific",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Noun",
        "word":  "Specification",
        "translation":  "Şartname, teknik özellik",
        "sentence":  "Please read the technical specifications before installing the machine."
    },
    {
        "pos":  "Verb",
        "word":  "Specify",
        "translation":  "Belirtmek",
        "sentence":  "You must specify which alternative supplier you prefer to work with."
    },
    {
        "pos":  "Noun",
        "word":  "Specimen",
        "translation":  "Örnek, numune",
        "sentence":  "The laboratory is analyzing a blood specimen from the patient."
    },
    {
        "pos":  "Noun",
        "word":  "Spectacle",
        "translation":  "Manzara, gösteri",
        "sentence":  "The sunset over the Aegean Sea was a truly magnificent spectacle."
    },
    {
        "pos":  "Adjective",
        "word":  "Spectacular",
        "translation":  "Muazzam, görkemli",
        "sentence":  "The team enjoyed a spectacular view from the top of the office building."
    },
    {
        "pos":  "Noun",
        "word":  "Spectator",
        "translation":  "İzleyici",
        "sentence":  "Thousands of spectators gathered at the stadium for the football match."
    },
    {
        "pos":  "Noun",
        "word":  "Spectrum",
        "translation":  "Yelpaze, spektrum",
        "sentence":  "The course covers a wide spectrum of topics in modern history."
    },
    {
        "pos":  "Verb",
        "word":  "Speculate",
        "translation":  "Tahminde bulunmak",
        "sentence":  "It is too early to speculate on the cause of the flight cancellation."
    },
    {
        "pos":  "Noun",
        "word":  "Speculation",
        "translation":  "Tahmin, spekülasyon",
        "sentence":  "There has been a lot of speculation about the rise in silver prices."
    },
    {
        "pos":  "Noun",
        "word":  "Speech",
        "translation":  "Konuşma",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Speed",
        "translation":  "Verb",
        "sentence":  "Hız"
    },
    {
        "pos":  "Noun",
        "word":  "Spell",
        "translation":  "Kısa süre, dönem",
        "sentence":  "We experienced a brief spell of cold weather early last month."
    },
    {
        "pos":  "Spelling",
        "word":  "Spell",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Spending",
        "word":  "Spend",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Noun",
        "word":  "Sphere",
        "translation":  "Küre, alan",
        "sentence":  "This falls outside my sphere of responsibility at the company."
    },
    {
        "pos":  "Noun",
        "word":  "Spice",
        "translation":  "Baharat",
        "sentence":  "Adding a bit of spice can make a simple meal much more interesting."
    },
    {
        "pos":  "Adjective",
        "word":  "Spicy",
        "translation":  "Baharatlı",
        "sentence":  "(Yiyecek.)"
    },
    {
        "pos":  "Noun",
        "word":  "Spider",
        "translation":  "Örümcek",
        "sentence":  "(Hayvan.)"
    },
    {
        "pos":  "Verb",
        "word":  "Spill",
        "translation":  "Dökmek (sıvı)",
        "sentence":  "Be careful not to spill your coffee on the new office carpet."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Spin",
        "translation":  "Döndürmek, dönmek",
        "sentence":  "The dancer started to spin around faster and faster."
    },
    {
        "pos":  "Noun",
        "word":  "Spine",
        "translation":  "Omurga",
        "sentence":  "He injured his spine in a falling accident and needs physical therapy."
    },
    {
        "pos":  "Spiritual",
        "word":  "Spirit",
        "translation":  "Noun",
        "sentence":  "Adj."
    },
    {
        "pos":  "Noun",
        "word":  "Spite",
        "translation":  "Kin, inat",
        "sentence":  "He ignored her advice out of pure spite, which was a mistake."
    },
    {
        "pos":  "Verb",
        "word":  "Split",
        "translation":  "Noun",
        "sentence":  "Bölmek, paylaşmak"
    },
    {
        "pos":  "Verb",
        "word":  "Spoil",
        "translation":  "Bozmak, şımartmak",
        "sentence":  "Don\u0027t tell me the ending of the movie; you\u0027ll spoil it for me!"
    },
    {
        "pos":  "Adjective",
        "word":  "Spoken",
        "translation":  "Sözlü",
        "sentence":  "My spoken English is improving every day."
    },
    {
        "pos":  "Noun",
        "word":  "Spokesman",
        "translation":  "Sözcü (erkek)",
        "sentence":  "The government spokesman denied the rumors of a tax increase."
    },
    {
        "pos":  "Noun",
        "word":  "Spokesperson",
        "translation":  "Sözcü (genel)",
        "sentence":  "A spokesperson for the airline apologized for the canceled flight."
    },
    {
        "pos":  "Noun",
        "word":  "Spokeswoman",
        "translation":  "Sözcü (kadın)",
        "sentence":  "The company spokeswoman announced the new cost-down strategy."
    },
    {
        "pos":  "Verb",
        "word":  "Sponsor",
        "translation":  "Noun",
        "sentence":  "Sponsor olmak"
    },
    {
        "pos":  "Noun",
        "word":  "Sponsorship",
        "translation":  "Sponsorluk",
        "sentence":  "The event was made possible through the sponsorship of local firms."
    },
    {
        "pos":  "Noun",
        "word":  "Spoon",
        "translation":  "Kaşık",
        "sentence":  "(Mutfak eşyası.)"
    },
    {
        "pos":  "Noun",
        "word":  "Sport",
        "translation":  "Spor",
        "sentence":  "Analyzing sport matches is my favorite hobby."
    },
    {
        "pos":  "Noun",
        "word":  "Spot",
        "translation":  "Verb",
        "sentence":  "Nokta, yer"
    },
    {
        "pos":  "Noun",
        "word":  "Spotlight",
        "translation":  "İlgi odağı, spot ışığı",
        "sentence":  "The young actor found himself in the spotlight after his first film."
    },
    {
        "pos":  "Noun",
        "word":  "Spouse",
        "translation":  "Eş",
        "sentence":  "Employees are invited to bring their spouses to the holiday party."
    },
    {
        "pos":  "Verb",
        "word":  "Spread",
        "translation":  "Noun",
        "sentence":  "Yaymak, yayılmak"
    },
    {
        "pos":  "Noun",
        "word":  "Spring",
        "translation":  "Verb",
        "sentence":  "İlkbahar"
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Spy",
        "translation":  "Casus / Casusluk yapmak",
        "sentence":  "The movie tells the story of a spy working during the Cold War."
    },
    {
        "pos":  "Noun",
        "word":  "Squad",
        "translation":  "Ekip, tim",
        "sentence":  "The police squad arrived quickly at the scene of the robbery."
    },
    {
        "pos":  "Adj.",
        "word":  "Square",
        "translation":  "Noun",
        "sentence":  "Kare"
    },
    {
        "pos":  "Verb",
        "word":  "Squeeze",
        "translation":  "Sıkmak",
        "sentence":  "You need to squeeze the lemon to get all the juice out."
    },
    {
        "pos":  "Verb",
        "word":  "Stab",
        "translation":  "Bıçaklamak",
        "sentence":  "He was lucky to survive after someone tried to stab him."
    },
    {
        "pos":  "Noun",
        "word":  "Stability",
        "translation":  "İstikrar, denge",
        "sentence":  "Economic stability is crucial for long-term precious metal investment."
    },
    {
        "pos":  "Verb",
        "word":  "Stabilize",
        "translation":  "Stabilize etmek, dengelemek",
        "sentence":  "The doctor worked quickly to stabilize the patient\u0027s condition."
    },
    {
        "pos":  "Adjective",
        "word":  "Stable",
        "translation":  "İstikrarlı, sabit",
        "sentence":  "We want the raw material prices to remain stable."
    },
    {
        "pos":  "Noun",
        "word":  "Stadium",
        "translation":  "Stadyum",
        "sentence":  "(Spor terimi.)"
    },
    {
        "pos":  "Noun",
        "word":  "Staff",
        "translation":  "Personel, kadro",
        "sentence":  "The factory staff is very experienced."
    },
    {
        "pos":  "Noun",
        "word":  "Stage",
        "translation":  "Verb",
        "sentence":  "Aşama"
    },
    {
        "pos":  "Noun",
        "word":  "Stair",
        "translation":  "Basamak, merdiven",
        "sentence":  "(Bina terimi.)"
    },
    {
        "pos":  "Noun",
        "word":  "Stake",
        "translation":  "Pay, hisse, risk",
        "sentence":  "The company has a large stake in the alternative energy market."
    },
    {
        "pos":  "Noun",
        "word":  "Stall",
        "translation":  "Tezgah, kabin",
        "sentence":  "He bought a fresh sandwich from a small food stall at the station."
    },
    {
        "pos":  "Noun",
        "word":  "Stamp",
        "translation":  "Pul, damga",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Stance",
        "translation":  "Duruş, tutum",
        "sentence":  "The manager\u0027s stance on cost reduction was very clear."
    },
    {
        "pos":  "Verb",
        "word":  "Stand",
        "translation":  "Noun",
        "sentence":  "Ayakta durmak"
    },
    {
        "pos":  "Noun",
        "word":  "Standard",
        "translation":  "Adj.",
        "sentence":  "Standart"
    },
    {
        "pos":  "Adjective",
        "word":  "Standing",
        "translation":  "Daimi, ayakta",
        "sentence":  "He has a standing invitation to join the executive board meetings."
    },
    {
        "pos":  "Noun",
        "word":  "Star",
        "translation":  "Verb",
        "sentence":  "Yıldız"
    },
    {
        "pos":  "Verb",
        "word":  "Stare",
        "translation":  "Dik dik bakmak",
        "sentence":  "(Davranış.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Stark",
        "translation":  "Keskin, sert",
        "sentence":  "There is a stark contrast between the two financing options."
    },
    {
        "pos":  "Verb",
        "word":  "Start",
        "translation":  "Noun",
        "sentence":  "Başlamak"
    },
    {
        "pos":  "Verb",
        "word":  "Starve",
        "translation":  "Açlıktan ölmek, çok acıkmak",
        "sentence":  "If we don\u0027t find a new supplier soon, the factory will starve for materials."
    },
    {
        "pos":  "Statement",
        "word":  "State",
        "translation":  "Noun",
        "sentence":  "Verb"
    },
    {
        "pos":  "Noun",
        "word":  "Station",
        "translation":  "İstasyon",
        "sentence":  "(Ulaşım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Statistic",
        "translation":  "İstatistik",
        "sentence":  "The statistics show a decrease in production costs."
    },
    {
        "pos":  "Adjective",
        "word":  "Statistical",
        "translation":  "İstatistiksel",
        "sentence":  "The report provides a detailed statistical analysis of the market."
    },
    {
        "pos":  "Noun",
        "word":  "Statue",
        "translation":  "Heykel",
        "sentence":  "(Sanat.)"
    },
    {
        "pos":  "Noun",
        "word":  "Status",
        "translation":  "Durum, statü",
        "sentence":  "What is the current status of the car purchase process?"
    },
    {
        "pos":  "Verb",
        "word":  "Stay",
        "translation":  "Noun",
        "sentence":  "Kalmak"
    },
    {
        "pos":  "Adverb",
        "word":  "Steadily",
        "translation":  "İstikrarlı bir şekilde",
        "sentence":  "The value of silver has been rising steadily over the last few months."
    },
    {
        "pos":  "Adjective",
        "word":  "Steady",
        "translation":  "İstikrarlı, düzenli",
        "sentence":  "A steady increase in silver value is better for long-term profit."
    },
    {
        "pos":  "Verb",
        "word":  "Steal",
        "translation":  "Çalmak",
        "sentence":  "(Hukuki terim.)"
    },
    {
        "pos":  "Noun",
        "word":  "Steam",
        "translation":  "Buhar",
        "sentence":  "The kitchen was filled with steam from the boiling water."
    },
    {
        "pos":  "Noun",
        "word":  "Steel",
        "translation":  "Çelik",
        "sentence":  "Steel is one of the main raw materials we manage."
    },
    {
        "pos":  "Adjective",
        "word":  "Steep",
        "translation":  "Dik, sarp, aşırı",
        "sentence":  "There was a steep drop in the market prices yesterday."
    },
    {
        "pos":  "Verb",
        "word":  "Steer",
        "translation":  "Yönlendirmek, sürmek",
        "sentence":  "It is difficult to steer a large ship through such a narrow channel."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Stem",
        "translation":  "Kök, gövde / -den gelmek",
        "sentence":  "Many of our current problems stem from a lack of communication."
    },
    {
        "pos":  "Noun",
        "word":  "Step",
        "translation":  "Verb",
        "sentence":  "Adım"
    },
    {
        "pos":  "Noun",
        "word":  "Stereotype",
        "translation":  "Stereotip, kalıplaşmış örnek",
        "sentence":  "We must avoid the stereotype that all cheap materials are low quality."
    },
    {
        "pos":  "Verb",
        "word":  "Stick",
        "translation":  "Noun",
        "sentence":  "Yapıştırmak"
    },
    {
        "pos":  "Stiff",
        "word":  "Sticky",
        "translation":  "Adjective",
        "sentence":  "Yapışkan"
    },
    {
        "pos":  "Adverb",
        "word":  "Still",
        "translation":  "Adj.",
        "sentence":  "Hala"
    },
    {
        "pos":  "Verb",
        "word":  "Stimulate",
        "translation":  "Uyarmak, teşvik etmek",
        "sentence":  "Lower interest rates are intended to stimulate economic growth."
    },
    {
        "pos":  "Noun",
        "word":  "Stimulus",
        "translation":  "Uyarıcı, teşvik",
        "sentence":  "The tax cut provided a much-needed stimulus for small businesses."
    },
    {
        "pos":  "Verb",
        "word":  "Stir",
        "translation":  "Karıştırmak, harekete geçirmek",
        "sentence":  "Please stir the soup occasionally so it doesn\u0027t burn."
    },
    {
        "pos":  "Noun",
        "word":  "Stock",
        "translation":  "Stok, hisse senedi",
        "sentence":  "We need to check the stock level of alternative firms."
    },
    {
        "pos":  "Noun",
        "word":  "Stomach",
        "translation":  "Mide",
        "sentence":  "(Sağlık.)"
    },
    {
        "pos":  "Noun",
        "word":  "Stone",
        "translation":  "Taş",
        "sentence":  "(Doğa.)"
    },
    {
        "pos":  "Verb",
        "word":  "Stop",
        "translation":  "Noun",
        "sentence":  "Durmak"
    },
    {
        "pos":  "Noun",
        "word":  "Storage",
        "translation":  "Depolama",
        "sentence":  "We need more storage space for the new alternative raw materials."
    },
    {
        "pos":  "Noun",
        "word":  "Store",
        "translation":  "Verb",
        "sentence":  "Mağaza"
    },
    {
        "pos":  "Noun",
        "word":  "Storm",
        "translation":  "Fırtına",
        "sentence":  "(Hava durumu.)"
    },
    {
        "pos":  "Noun",
        "word":  "Story",
        "translation":  "Hikaye",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Stove",
        "translation":  "Ocak, fırın",
        "sentence":  "(Mutfak.)"
    },
    {
        "pos":  "Adv.",
        "word":  "Straight",
        "translation":  "Adj.",
        "sentence":  "Doğruca, düz"
    },
    {
        "pos":  "Adjective",
        "word":  "Straightforward",
        "translation":  "Basit, anlaşılır",
        "sentence":  "The process for switching suppliers is quite straightforward."
    },
    {
        "pos":  "Noun",
        "word":  "Strain",
        "translation":  "Gerginlik, yük",
        "sentence":  "The long working hours are putting a lot of strain on the staff."
    },
    {
        "pos":  "Noun",
        "word":  "Strand",
        "translation":  "Tel, iplik, lif",
        "sentence":  "A single strand of hair was found at the crime scene."
    },
    {
        "pos":  "Stranger",
        "word":  "Strange",
        "translation":  "Adj.",
        "sentence":  "Noun"
    },
    {
        "pos":  "Adjective",
        "word":  "Strategic",
        "translation":  "Stratejik",
        "sentence":  "Managing alternative suppliers is a strategic part of my role."
    },
    {
        "pos":  "Noun",
        "word":  "Strategy",
        "translation":  "Strateji",
        "sentence":  "My strategy is to diversify investments in gold and silver."
    },
    {
        "pos":  "Noun",
        "word":  "Stream",
        "translation":  "Akış, dere",
        "sentence":  "(Doğa"
    },
    {
        "pos":  "Noun",
        "word":  "Street",
        "translation":  "Cadde, sokak",
        "sentence":  "(Şehir.)"
    },
    {
        "pos":  "Noun",
        "word":  "Strength",
        "translation":  "Güç, kuvvet",
        "sentence":  "One of my strengths is analyzing supplier data."
    },
    {
        "pos":  "Verb",
        "word":  "Strengthen",
        "translation":  "Güçlendirmek",
        "sentence":  "We need to strengthen our relationships with alternative firms."
    },
    {
        "pos":  "Noun",
        "word":  "Stress",
        "translation":  "Verb",
        "sentence":  "Stres"
    },
    {
        "pos":  "Verb",
        "word":  "Stretch",
        "translation":  "Noun",
        "sentence":  "Esnetmek"
    },
    {
        "pos":  "Adjective",
        "word":  "Strict",
        "translation":  "Sıkı, sert",
        "sentence":  "Our company has strict rules for choosing alternative suppliers."
    },
    {
        "pos":  "Adverb",
        "word":  "Strictly",
        "translation":  "Kesinlikle, sıkıca",
        "sentence":  "The safety rules in the factory must be strictly followed."
    },
    {
        "pos":  "Verb",
        "word":  "Strike",
        "translation":  "Noun",
        "sentence":  "Vurmak"
    },
    {
        "pos":  "Adjective",
        "word":  "Striking",
        "translation":  "Çarpıcı",
        "sentence":  "There is a striking similarity between these two gold coins."
    },
    {
        "pos":  "Noun",
        "word":  "String",
        "translation":  "İp, dizi",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Strip (Piece)",
        "translation":  "Şerit, dar parça",
        "sentence":  "Use a strip of tape to seal the box before shipping."
    },
    {
        "pos":  "Verb",
        "word":  "Strip (Remove)",
        "translation":  "Soymak, çıkarmak",
        "sentence":  "You need to strip the old paint off the wall before repainting."
    },
    {
        "pos":  "Verb",
        "word":  "Strive",
        "translation":  "Çabalamak",
        "sentence":  "We strive to achieve the highest level of cost reduction possible."
    },
    {
        "pos":  "Noun",
        "word":  "Stroke",
        "translation":  "Felç / Darbe",
        "sentence":  "He is recovering in the hospital after suffering a minor stroke."
    },
    {
        "pos":  "Strongly",
        "word":  "Strong",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Adjective",
        "word":  "Structural",
        "translation":  "Yapısal",
        "sentence":  "The engineers are checking the structural integrity of the building."
    },
    {
        "pos":  "Noun",
        "word":  "Structure",
        "translation":  "Verb",
        "sentence":  "Yapı"
    },
    {
        "pos":  "Verb",
        "word":  "Struggle",
        "translation":  "Noun",
        "sentence":  "Mücadele etmek"
    },
    {
        "pos":  "Study",
        "word":  "Student",
        "translation":  "Noun",
        "sentence":  "Verb"
    },
    {
        "pos":  "Noun",
        "word":  "Studio",
        "translation":  "Stüdyo",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Stuff",
        "translation":  "Verb",
        "sentence":  "Şeyler"
    },
    {
        "pos":  "Verb",
        "word":  "Stumble",
        "translation":  "Tökezlemek",
        "sentence":  "Be careful not to stumble on the uneven sidewalk."
    },
    {
        "pos":  "Verb",
        "word":  "Stun",
        "translation":  "Sersemletmek, şoka uğratmak",
        "sentence":  "The news of the sudden layoffs managed to stun the whole team."
    },
    {
        "pos":  "Adjective",
        "word":  "Stunning",
        "translation":  "Göz alıcı, şahane",
        "sentence":  "The view of the sunset from the office was absolutely stunning."
    },
    {
        "pos":  "Adjective",
        "word":  "Stupid",
        "translation":  "Aptalca",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Style",
        "translation":  "Tarz, stil",
        "sentence":  "I like the style of your content on YouTube."
    },
    {
        "pos":  "Noun",
        "word":  "Subject",
        "translation":  "Adj.",
        "sentence":  "Konu"
    },
    {
        "pos":  "Noun",
        "word":  "Submission",
        "translation":  "Teslim, sunma",
        "sentence":  "The deadline for the submission of your self-evaluation is Friday."
    },
    {
        "pos":  "Verb",
        "word":  "Submit",
        "translation":  "Sunmak, teslim etmek",
        "sentence":  "I need to submit my self-evaluation before the deadline."
    },
    {
        "pos":  "Noun",
        "word":  "Subscriber",
        "translation":  "Abone",
        "sentence":  "Our YouTube channel for kids has reached over a thousand subscribers."
    },
    {
        "pos":  "Noun",
        "word":  "Subscription",
        "translation":  "Abonelik",
        "sentence":  "I decided to cancel my subscription to the monthly magazine."
    },
    {
        "pos":  "Adjective",
        "word":  "Subsequent",
        "translation":  "Sonraki, takip eden",
        "sentence":  "Subsequent investigations revealed more details about the error."
    },
    {
        "pos":  "Adverb",
        "word":  "Subsequently",
        "translation":  "Sonrasında",
        "sentence":  "He was injured and subsequently taken to the nearest hospital."
    },
    {
        "pos":  "Noun",
        "word":  "Subsidy",
        "translation":  "Sübvansiyon, destek",
        "sentence":  "The government provides a subsidy to farmers for organic crops."
    },
    {
        "pos":  "Noun",
        "word":  "Substance",
        "translation":  "Madde",
        "sentence":  "We need to verify the chemical substance of the raw material."
    },
    {
        "pos":  "Adjective",
        "word":  "Substantial",
        "translation":  "Önemli, büyük miktarda",
        "sentence":  "We have made substantial progress in our cost-down studies."
    },
    {
        "pos":  "Adverb",
        "word":  "Substantially",
        "translation":  "Önemli ölçüde",
        "sentence":  "The new strategy has substantially reduced our production costs."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Substitute",
        "translation":  "Yedek / Yerine koymak",
        "sentence":  "We found a cheaper substitute for the expensive raw material."
    },
    {
        "pos":  "Noun",
        "word":  "Substitution",
        "translation":  "Değiştirme, yerine geçme",
        "sentence":  "The substitution of silver for gold saved the company a lot of money."
    },
    {
        "pos":  "Adjective",
        "word":  "Subtle",
        "translation":  "İnce, hafif, belli belirsiz",
        "sentence":  "There is a subtle difference between these two alternative materials."
    },
    {
        "pos":  "Noun",
        "word":  "Suburb",
        "translation":  "Banliyö, kenar mahalle",
        "sentence":  "Many people prefer to live in a quiet suburb and commute to İzmir."
    },
    {
        "pos":  "Adjective",
        "word":  "Suburban",
        "translation":  "Banliyö ile ilgili",
        "sentence":  "They moved to a suburban area to have a larger garden for the kids."
    },
    {
        "pos":  "Noun",
        "word":  "Subway",
        "translation":  "Metro",
        "sentence":  "(Ulaşım.)"
    },
    {
        "pos":  "Success",
        "word":  "Succeed",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Successfully",
        "word":  "Successful",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Noun",
        "word":  "Succession",
        "translation":  "Ardıllık, birbirini izleme",
        "sentence":  "He won several awards in quick succession for his sourcing work."
    },
    {
        "pos":  "Adjective",
        "word":  "Successive",
        "translation":  "Ardışık, birbirini izleyen",
        "sentence":  "The price of silver has risen for three successive days."
    },
    {
        "pos":  "Noun",
        "word":  "Successor",
        "translation":  "Halef, yerine gelen",
        "sentence":  "The company is currently looking for a successor to the CEO."
    },
    {
        "pos":  "Det.",
        "word":  "Such",
        "translation":  "Pron.",
        "sentence":  "Böyle, bu gibi"
    },
    {
        "pos":  "Verb",
        "word":  "Suck",
        "translation":  "Emmek",
        "sentence":  "Some insects use their long mouths to suck nectar from flowers."
    },
    {
        "pos":  "Suddenly",
        "word":  "Sudden",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Verb",
        "word":  "Sue",
        "translation":  "Dava açmak",
        "sentence":  "The customer decided to sue the company for the faulty product."
    },
    {
        "pos":  "Verb",
        "word":  "Suffer",
        "translation":  "Acı çekmek, zarar görmek",
        "sentence":  "Production will suffer if we don\u0027t find a new supplier."
    },
    {
        "pos":  "Noun",
        "word":  "Suffering",
        "translation":  "Acı, keder",
        "sentence":  "The organization works to reduce the suffering of refugees."
    },
    {
        "pos":  "Adjective",
        "word":  "Sufficient",
        "translation":  "Yeterli",
        "sentence":  "We must ensure we have sufficient stock of raw materials."
    },
    {
        "pos":  "Adverb",
        "word":  "Sufficiently",
        "translation":  "Yeterince",
        "sentence":  "The results of the study were not sufficiently clear to make a decision."
    },
    {
        "pos":  "Noun",
        "word":  "Sugar",
        "translation":  "Şeker",
        "sentence":  "(Yiyecek.)"
    },
    {
        "pos":  "Suggestion",
        "word":  "Suggest",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Noun",
        "word":  "Suicide",
        "translation":  "İntihar",
        "sentence":  "The news of his suicide was a shock to all his former colleagues."
    },
    {
        "pos":  "Noun",
        "word":  "Suit",
        "translation":  "Verb",
        "sentence":  "Takım elbise"
    },
    {
        "pos":  "Adjective",
        "word":  "Suitable",
        "translation":  "Uygun",
        "sentence":  "We need to find a suitable date for the supplier visit."
    },
    {
        "pos":  "Noun",
        "word":  "Suite",
        "translation":  "Süit, takım",
        "sentence":  "We booked a business suite for the conference in Istanbul."
    },
    {
        "pos":  "Noun",
        "word":  "Sum",
        "translation":  "Verb",
        "sentence":  "Toplam"
    },
    {
        "pos":  "Summary",
        "word":  "Summarize",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Noun",
        "word":  "Summer",
        "translation":  "Yaz",
        "sentence":  "(Mevsim.)"
    },
    {
        "pos":  "Noun",
        "word":  "Summit",
        "translation":  "Zirve",
        "sentence":  "The world leaders gathered for an emergency summit on climate."
    },
    {
        "pos":  "Sunday",
        "word":  "Sun",
        "translation":  "Noun",
        "sentence":  "Güneş"
    },
    {
        "pos":  "Adjective",
        "word":  "Super",
        "translation":  "Harika, süper",
        "sentence":  "You did a super job on the self-evaluation note for your anniversary."
    },
    {
        "pos":  "Adjective",
        "word":  "Superb",
        "translation":  "Şahane, mükemmel",
        "sentence":  "The service at the hotel in İzmir was absolutely superb."
    },
    {
        "pos":  "Noun",
        "word":  "Superintendent",
        "translation":  "Müfettiş, yönetici",
        "sentence":  "The school superintendent announced the new educational goals."
    },
    {
        "pos":  "Adjective",
        "word":  "Superior",
        "translation":  "Üstün",
        "sentence":  "This alternative material is actually superior to the original one."
    },
    {
        "pos":  "Noun",
        "word":  "Supermarket",
        "translation":  "Süpermarket",
        "sentence":  "(Alışveriş.)"
    },
    {
        "pos":  "Verb",
        "word":  "Supervise",
        "translation":  "Denetlemek, gözetmek",
        "sentence":  "My manager will supervise the implementation of the new strategy."
    },
    {
        "pos":  "Noun",
        "word":  "Supervision",
        "translation":  "Denetim, gözetim",
        "sentence":  "Children should be under adult supervision when playing near water."
    },
    {
        "pos":  "Noun",
        "word":  "Supervisor",
        "translation":  "Danışman, şef",
        "sentence":  "Please discuss your vacation plans with your immediate supervisor."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Supplement",
        "translation":  "Takviye / Eklemek",
        "sentence":  "I take a vitamin supplement every morning to stay healthy."
    },
    {
        "pos":  "Noun",
        "word":  "Supply",
        "translation":  "Verb",
        "sentence":  "Tedarik"
    },
    {
        "pos":  "Supporter",
        "word":  "Support",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Adjective",
        "word":  "Supportive",
        "translation":  "Destekleyici",
        "sentence":  "My team was very supportive during my first year at the firm."
    },
    {
        "pos":  "Verb",
        "word":  "Suppose",
        "translation":  "Varsaymak",
        "sentence":  "I suppose we will reach our target by the end of the year."
    },
    {
        "pos":  "Adverb",
        "word":  "Supposedly",
        "translation":  "Güya, sözde",
        "sentence":  "The new machine is supposedly much faster than the old one."
    },
    {
        "pos":  "Verb",
        "word":  "Suppress",
        "translation":  "Bastırmak, gizlemek",
        "sentence":  "He tried to suppress his laughter during the serious meeting."
    },
    {
        "pos":  "Adjective",
        "word":  "Supreme",
        "translation":  "Yüce, en üstün",
        "sentence":  "The supreme court\u0027s decision is final and cannot be changed."
    },
    {
        "pos":  "Surely",
        "word":  "Sure",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Noun",
        "word":  "Surface",
        "translation":  "Yüzey",
        "sentence":  "(Fiziksel özellik.)"
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Surge",
        "translation":  "Dalgalanma, ani artış",
        "sentence":  "We noticed a sudden surge in the price of palladium today."
    },
    {
        "pos":  "Noun",
        "word":  "Surgeon",
        "translation":  "Cerrah",
        "sentence":  "The surgeon performed a complicated operation on the patient."
    },
    {
        "pos":  "Noun",
        "word":  "Surgery",
        "translation":  "Ameliyat",
        "sentence":  "(Tıp.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Surgical",
        "translation":  "Cerrahi",
        "sentence":  "The patient is recovering well from the surgical procedure."
    },
    {
        "pos":  "Noun",
        "word":  "Surplus",
        "translation":  "Fazlalık, artı",
        "sentence":  "We have a surplus of raw materials that we need to store."
    },
    {
        "pos":  "Surprised",
        "word":  "Surprise",
        "translation":  "Surprising",
        "sentence":  "N."
    },
    {
        "pos":  "Verb",
        "word":  "Surrender",
        "translation":  "Teslim olmak",
        "sentence":  "After weeks of fighting, the rebels were forced to surrender."
    },
    {
        "pos":  "Surrounding",
        "word":  "Surround",
        "translation":  "Verb",
        "sentence":  "Adj."
    },
    {
        "pos":  "Noun",
        "word":  "Surveillance",
        "translation":  "Gözetleme, takip",
        "sentence":  "The warehouse is under 24-hour video surveillance for security."
    },
    {
        "pos":  "Noun",
        "word":  "Survey",
        "translation":  "Verb",
        "sentence":  "Anket, inceleme"
    },
    {
        "pos":  "Noun",
        "word":  "Survival",
        "translation":  "Hayatta kalma",
        "sentence":  "The survival of the company depends on successful cost reduction."
    },
    {
        "pos":  "Verb",
        "word":  "Survive",
        "translation":  "Hayatta kalmak",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Survivor",
        "translation":  "Hayatta kalan",
        "sentence":  "The survivors of the earthquake were taken to a safe location."
    },
    {
        "pos":  "Verb",
        "word":  "Suspect",
        "translation":  "Noun",
        "sentence":  "Şüphelenmek"
    },
    {
        "pos":  "Verb",
        "word":  "Suspend",
        "translation":  "Askıya almak, durdurmak",
        "sentence":  "The airline decided to suspend all flights to İzmir due to the storm."
    },
    {
        "pos":  "Noun",
        "word":  "Suspension",
        "translation":  "Askıya alma / Süspansiyon",
        "sentence":  "The driver noticed a problem with the car\u0027s front suspension."
    },
    {
        "pos":  "Noun",
        "word":  "Suspicion",
        "translation":  "Şüphe",
        "sentence":  "There is a strong suspicion that the supplier is hiding costs."
    },
    {
        "pos":  "Adjective",
        "word":  "Suspicious",
        "translation":  "Şüpheli",
        "sentence":  "If you see any suspicious activity, please report it to security."
    },
    {
        "pos":  "Verb",
        "word":  "Sustain",
        "translation":  "Sürdürmek, ayakta tutmak",
        "sentence":  "It is hard to sustain such a high level of growth in this market."
    },
    {
        "pos":  "Adjective",
        "word":  "Sustainable",
        "translation":  "Sürdürülebilir",
        "sentence":  "We are looking for more sustainable ways to source raw materials."
    },
    {
        "pos":  "Verb",
        "word":  "Swallow",
        "translation":  "Yutmak",
        "sentence":  "It was difficult to swallow the pill without a glass of water."
    },
    {
        "pos":  "Verb",
        "word":  "Swear",
        "translation":  "Yemin etmek",
        "sentence":  "Küfretmek"
    },
    {
        "pos":  "Noun",
        "word":  "Sweater",
        "translation":  "Kazak",
        "sentence":  "(Giyim.)"
    },
    {
        "pos":  "Verb",
        "word":  "Sweep",
        "translation":  "Süpürmek",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Sweet",
        "translation":  "Tatlı",
        "sentence":  "(Lezzet.)"
    },
    {
        "pos":  "Swimming",
        "word":  "Swim",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Swing",
        "translation":  "Sallanmak / Salıncak",
        "sentence":  "The pendulum began to swing back and forth slowly."
    },
    {
        "pos":  "Verb",
        "word":  "Switch",
        "translation":  "Noun",
        "sentence":  "Değiştirmek"
    },
    {
        "pos":  "Noun",
        "word":  "Sword",
        "translation":  "Kılıç",
        "sentence":  "The museum has a collection of ancient swords from the Ottoman era."
    },
    {
        "pos":  "Noun",
        "word":  "Symbol",
        "translation":  "Sembol",
        "sentence":  "Ag is the chemical symbol for silver."
    },
    {
        "pos":  "Adjective",
        "word":  "Symbolic",
        "translation":  "Sembolik",
        "sentence":  "The key to the city was given as a symbolic gesture of welcome."
    },
    {
        "pos":  "Adjective",
        "word":  "Sympathetic",
        "translation":  "Sempatik, anlayışlı",
        "sentence":  "My supervisor was very sympathetic about my flight cancellation."
    },
    {
        "pos":  "Symptom",
        "word":  "Sympathy",
        "translation":  "Noun",
        "sentence":  "Sempati"
    },
    {
        "pos":  "Noun",
        "word":  "Syndrome",
        "translation":  "Sendrom",
        "sentence":  "Irritable bowel syndrome can be managed with a proper diet."
    },
    {
        "pos":  "Noun",
        "word":  "Synthesis",
        "translation":  "Sentez",
        "sentence":  "The report is a synthesis of information from various suppliers."
    },
    {
        "pos":  "Noun",
        "word":  "System",
        "translation":  "Sistem",
        "sentence":  "The Birevim system has two different paths to buy a car."
    },
    {
        "pos":  "Adjective",
        "word":  "Systematic",
        "translation":  "Sistematik",
        "sentence":  "We need a systematic approach to reducing production costs."
    },
    {
        "pos":  "Noun",
        "word":  "Table",
        "translation":  "Tablo, masa",
        "sentence":  "I prepared a table to compare the prices of alternative firms."
    },
    {
        "pos":  "Noun",
        "word":  "Tablet",
        "translation":  "Tablet",
        "sentence":  "(Teknoloji.)"
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Tackle",
        "translation":  "Ele almak, çözmek",
        "sentence":  "We need to tackle the issue of rising material costs immediately."
    },
    {
        "pos":  "Noun",
        "word":  "Tactic",
        "translation":  "Taktik",
        "sentence":  "Using alternative firms is a common tactic in strategic sourcing."
    },
    {
        "pos":  "Adjective",
        "word":  "Tactical",
        "translation":  "Taktiksel",
        "sentence":  "Making a tactical decision now will help us save money later."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Tag",
        "translation":  "Etiket / Etiketlemek",
        "sentence":  "Please put a price tag on each item before placing it on the shelf."
    },
    {
        "pos":  "Noun",
        "word":  "Tail",
        "translation":  "Kuyruk",
        "sentence":  "(Hayvan.)"
    },
    {
        "pos":  "Verb",
        "word":  "Take",
        "translation":  "Almak, götürmek",
        "sentence":  "It will take five years to reach my investment goal."
    },
    {
        "pos":  "Talent",
        "word":  "Tale",
        "translation":  "Talented",
        "sentence":  "Noun"
    },
    {
        "pos":  "Verb",
        "word":  "Talk",
        "translation":  "Noun",
        "sentence":  "Konuşmak"
    },
    {
        "pos":  "Adjective",
        "word":  "Tall",
        "translation":  "Uzun (boylu)",
        "sentence":  "(Fiziksel özellik.)"
    },
    {
        "pos":  "Noun",
        "word":  "Tank",
        "translation":  "Tank, depo",
        "sentence":  "The factory has a large water tank."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Tap",
        "translation":  "Hafifçe vurmak / Musluk",
        "sentence":  "He turned on the tap to fill the kettle with water."
    },
    {
        "pos":  "Noun",
        "word":  "Tape",
        "translation":  "Bant, şerit",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Target",
        "translation":  "Verb",
        "sentence":  "Hedef"
    },
    {
        "pos":  "Noun",
        "word":  "Task",
        "translation":  "Görev, iş",
        "sentence":  "My daily task is managing suppliers."
    },
    {
        "pos":  "Noun",
        "word":  "Taste",
        "translation":  "Verb",
        "sentence":  "Tad"
    },
    {
        "pos":  "Noun",
        "word":  "Tax",
        "translation":  "Verb",
        "sentence":  "Vergi"
    },
    {
        "pos":  "Noun",
        "word":  "Taxi",
        "translation":  "Taksi",
        "sentence":  "I took a taxi from Sabiha Gökçen to the hotel."
    },
    {
        "pos":  "Noun",
        "word":  "Taxpayer",
        "translation":  "Vergi mükellefi",
        "sentence":  "The new project will be funded by the local taxpayers."
    },
    {
        "pos":  "Noun",
        "word":  "Tea",
        "translation":  "Çay",
        "sentence":  "(İçecek.)"
    },
    {
        "pos":  "Teacher",
        "word":  "Teach",
        "translation":  "Teaching",
        "sentence":  "Verb"
    },
    {
        "pos":  "Noun",
        "word":  "Team",
        "translation":  "Takım, ekip",
        "sentence":  "Our sourcing team is working on a new project."
    },
    {
        "pos":  "Verb",
        "word":  "Tear",
        "translation":  "Noun",
        "sentence":  "Yırtmak"
    },
    {
        "pos":  "Adjective",
        "word":  "Technical",
        "translation":  "Teknik",
        "sentence":  "I am learning the technical terminology of strategic sourcing."
    },
    {
        "pos":  "Noun",
        "word":  "Technique",
        "translation":  "Teknik, yöntem",
        "sentence":  "We are using a new technique for cost-down studies."
    },
    {
        "pos":  "Adjective",
        "word":  "Technological",
        "translation":  "Teknolojik",
        "sentence":  "Rapid technological change is transforming the sourcing industry."
    },
    {
        "pos":  "Noun",
        "word":  "Technology",
        "translation":  "Teknoloji",
        "sentence":  "Technology makes social media automation much easier."
    },
    {
        "pos":  "Noun / Adj.",
        "word":  "Teen",
        "translation":  "Ergen",
        "sentence":  "Many teens spend a lot of time on social media nowadays."
    },
    {
        "pos":  "Teenager",
        "word":  "Teenage",
        "translation":  "Adj.",
        "sentence":  "Noun"
    },
    {
        "pos":  "Television",
        "word":  "Telephone",
        "translation":  "Noun",
        "sentence":  "Telefon"
    },
    {
        "pos":  "Verb",
        "word":  "Tell",
        "translation":  "Anlatmak, söylemek",
        "sentence":  "Can you tell me the total weight of these gold grams?"
    },
    {
        "pos":  "Noun",
        "word":  "Temperature",
        "translation":  "Sıcaklık",
        "sentence":  "The temperature in the factory must be kept stable."
    },
    {
        "pos":  "Noun",
        "word":  "Temple",
        "translation":  "Tapınak",
        "sentence":  "The ancient temple is one of the most visited sites in the province."
    },
    {
        "pos":  "Adverb",
        "word":  "Temporarily",
        "translation":  "Geçici olarak",
        "sentence":  "The office will be temporarily closed for a scheduled renovation."
    },
    {
        "pos":  "Adjective",
        "word":  "Temporary",
        "translation":  "Geçici",
        "sentence":  "The flight delay was only temporary."
    },
    {
        "pos":  "Verb",
        "word":  "Tempt",
        "translation":  "Cezbetmek, özendirmek",
        "sentence":  "The low price of silver might tempt more people to invest."
    },
    {
        "pos":  "Number",
        "word":  "Ten",
        "translation":  "On (10)",
        "sentence":  "(Sayı.)"
    },
    {
        "pos":  "Noun",
        "word":  "Tenant",
        "translation":  "Kiracı",
        "sentence":  "The new tenant will move into the apartment on the first of May."
    },
    {
        "pos":  "Verb",
        "word":  "Tend",
        "translation":  "Eğiliminde olmak",
        "sentence":  "Silver prices tend to rise during economic uncertainty."
    },
    {
        "pos":  "Noun",
        "word":  "Tendency",
        "translation":  "Eğilim",
        "sentence":  "There is a growing tendency for companies to automate sourcing."
    },
    {
        "pos":  "Adjective",
        "word":  "Tender",
        "translation":  "Hassas, yumuşak",
        "sentence":  "The meat was cooked slowly until it was very tender."
    },
    {
        "pos":  "Noun",
        "word":  "Tennis",
        "translation":  "Tenis",
        "sentence":  "(Spor.)"
    },
    {
        "pos":  "Noun",
        "word":  "Tension",
        "translation":  "Gerginlik",
        "sentence":  "There is some tension between the two competing suppliers."
    },
    {
        "pos":  "Noun",
        "word":  "Tent",
        "translation":  "Çadır",
        "sentence":  "(Kamp.)"
    },
    {
        "pos":  "Noun",
        "word":  "Tenure",
        "translation":  "Görev süresi, kadro",
        "sentence":  "During his tenure as manager, the company saw significant growth."
    },
    {
        "pos":  "Noun",
        "word":  "Term",
        "translation":  "Verb",
        "sentence":  "Terim, dönem"
    },
    {
        "pos":  "Noun / Adj.",
        "word":  "Terminal",
        "translation":  "Terminal / Ölümcül",
        "sentence":  "The flight for İzmir leaves from terminal İki at Sabiha Gökçen."
    },
    {
        "pos":  "Verb",
        "word":  "Terminate",
        "translation":  "Sonlandırmak",
        "sentence":  "We decided to terminate the contract with the unreliable firm."
    },
    {
        "pos":  "Noun",
        "word":  "Terms",
        "translation":  "Şartlar, terimler",
        "sentence":  "Please read the terms and conditions carefully before signing."
    },
    {
        "pos":  "Noun",
        "word":  "Terrain",
        "translation":  "Arazi",
        "sentence":  "The rugged terrain made it difficult for the trucks to deliver."
    },
    {
        "pos":  "Adjective",
        "word":  "Terrible",
        "translation":  "Berbat, korkunç",
        "sentence":  "The news about the flight cancellation was terrible."
    },
    {
        "pos":  "Adverb",
        "word":  "Terribly",
        "translation":  "Korkunç bir şekilde",
        "sentence":  "I am terribly sorry for the delay in sending the cost report."
    },
    {
        "pos":  "Adjective",
        "word":  "Terrific",
        "translation":  "Müthiş, şahane",
        "sentence":  "You did a terrific job on the YouTube content plan for kids."
    },
    {
        "pos":  "Verb",
        "word":  "Terrify",
        "translation":  "Korkutmak",
        "sentence":  "The news of the global pandemic managed to terrify the public."
    },
    {
        "pos":  "Noun",
        "word":  "Territory",
        "translation":  "Bölge, toprak",
        "sentence":  "The company is planning to expand its sales into new territories."
    },
    {
        "pos":  "Noun",
        "word":  "Terror",
        "translation":  "Terör, dehşet",
        "sentence":  "The survivors described the night of the earthquake with terror."
    },
    {
        "pos":  "Noun",
        "word":  "Terrorism",
        "translation":  "Terörizm",
        "sentence":  "Global leaders met to discuss new ways to fight international terrorism."
    },
    {
        "pos":  "Noun",
        "word":  "Terrorist",
        "translation":  "Terörist",
        "sentence":  "The terrorist attack caused significant damage to the city center."
    },
    {
        "pos":  "Noun",
        "word":  "Test",
        "translation":  "Verb",
        "sentence":  "Test"
    },
    {
        "pos":  "Verb",
        "word":  "Testify",
        "translation":  "Tanıklık etmek",
        "sentence":  "He was called to testify in court regarding the robbery he saw."
    },
    {
        "pos":  "Noun",
        "word":  "Testimony",
        "translation":  "Tanıklık, ifade",
        "sentence":  "The witness provided a detailed testimony during the trial."
    },
    {
        "pos":  "Noun",
        "word":  "Testing",
        "translation":  "Test etme",
        "sentence":  "Quality testing is an essential step in our sourcing process."
    },
    {
        "pos":  "Noun",
        "word":  "Text",
        "translation":  "Verb",
        "sentence":  "Metin"
    },
    {
        "pos":  "Noun",
        "word":  "Textbook",
        "translation":  "Ders kitabı",
        "sentence":  "You should read the textbook to understand the basics of sourcing."
    },
    {
        "pos":  "Noun",
        "word":  "Texture",
        "translation":  "Doku",
        "sentence":  "I really like the smooth texture of this new alternative material."
    },
    {
        "pos":  "Conj.",
        "word":  "Than",
        "translation":  "-den, -dan (karşılaştırma)",
        "sentence":  "Gold is more expensive than silver."
    },
    {
        "pos":  "Thanks",
        "word":  "Thank",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Adverb",
        "word":  "Thankfully",
        "translation":  "Şükür ki, neyse ki",
        "sentence":  "Thankfully, no one was hurt in the minor factory accident."
    },
    {
        "pos":  "Det.",
        "word":  "That",
        "translation":  "Pron.",
        "sentence":  "O, şu"
    },
    {
        "pos":  "Article",
        "word":  "The",
        "translation":  "(Belirtme eki)",
        "sentence":  "(Dilbilgisi.)"
    },
    {
        "pos":  "Noun",
        "word":  "Theater",
        "translation":  "Tiyatro",
        "sentence":  "(Sanat.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Theatrical",
        "translation":  "Tiyatral",
        "sentence":  "The play was a very theatrical performance with amazing costumes."
    },
    {
        "pos":  "Noun",
        "word":  "Theft",
        "translation":  "Hırsızlık",
        "sentence":  "The company is taking steps to prevent the theft of raw materials."
    },
    {
        "pos":  "Theirs",
        "word":  "Their",
        "translation":  "Them",
        "sentence":  "Themselves"
    },
    {
        "pos":  "Noun",
        "word":  "Theme",
        "translation":  "Tema",
        "sentence":  "The theme of the YouTube channel is education through songs."
    },
    {
        "pos":  "Adverb",
        "word":  "Then",
        "translation":  "O zaman, ondan sonra",
        "sentence":  "We will analyze the match, and then place a bet."
    },
    {
        "pos":  "Noun",
        "word":  "Theology",
        "translation":  "Teoloji, ilahiyat",
        "sentence":  "He is a professor of theology at a prestigious university."
    },
    {
        "pos":  "Adjective",
        "word":  "Theoretical",
        "translation":  "Teorik",
        "sentence":  "My understanding of asset management was purely theoretical at first."
    },
    {
        "pos":  "Noun",
        "word":  "Theory",
        "translation":  "Teori",
        "sentence":  "In theory, cost-down studies should increase our profit."
    },
    {
        "pos":  "Noun",
        "word":  "Therapist",
        "translation":  "Terapist",
        "sentence":  "She visits a physical therapist twice a week for her back injury."
    },
    {
        "pos":  "Noun",
        "word":  "Therapy",
        "translation":  "Terapi",
        "sentence":  "(Sağlık.)"
    },
    {
        "pos":  "Adverb",
        "word":  "There",
        "translation":  "Orada",
        "sentence":  "There is a chance to buy more palladium this week."
    },
    {
        "pos":  "Adverb",
        "word":  "Thereafter",
        "translation":  "Ondan sonra",
        "sentence":  "He resigned in 2024 and moved to İzmir shortly thereafter."
    },
    {
        "pos":  "Adverb",
        "word":  "Thereby",
        "translation":  "Bu nedenle, böylece",
        "sentence":  "He reduced costs and thereby increased the company\u0027s profit."
    },
    {
        "pos":  "Adverb",
        "word":  "Therefore",
        "translation":  "Bu nedenle",
        "sentence":  "Silver is undervalued; therefore, it is a good investment."
    },
    {
        "pos":  "Noun",
        "word":  "Thesis",
        "translation":  "Tez",
        "sentence":  "She is currently writing her thesis on social media automation."
    },
    {
        "pos":  "Pronoun",
        "word":  "They",
        "translation":  "Onlar",
        "sentence":  "They are our most reliable suppliers in Germany."
    },
    {
        "pos":  "Thin",
        "word":  "Thick",
        "translation":  "Adjective",
        "sentence":  "Kalın"
    },
    {
        "pos":  "Noun",
        "word":  "Thief",
        "translation":  "Hırsız",
        "sentence":  "(Genel terim.)"
    },
    {
        "pos":  "Thinking",
        "word":  "Thing",
        "translation":  "Thought",
        "sentence":  "Noun"
    },
    {
        "pos":  "Number",
        "word":  "Third",
        "translation":  "Noun",
        "sentence":  "Üçüncü"
    },
    {
        "pos":  "Adjective",
        "word":  "Thirsty",
        "translation":  "Susamış",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Thirty",
        "word":  "Thirteen",
        "translation":  "Number",
        "sentence":  "13"
    },
    {
        "pos":  "Det.",
        "word":  "This",
        "translation":  "Pron.",
        "sentence":  "Bu"
    },
    {
        "pos":  "Adjective",
        "word":  "Thorough",
        "translation":  "Kapsamlı, titiz",
        "sentence":  "We conducted a thorough investigation into the supplier\u0027s history."
    },
    {
        "pos":  "Adverb",
        "word":  "Thoroughly",
        "translation":  "Tamamen, titizlikle",
        "sentence":  "Please review the cost reduction report thoroughly before the meeting."
    },
    {
        "pos":  "Conj.",
        "word":  "Though",
        "translation":  "Adverb",
        "sentence":  "-e rağmen"
    },
    {
        "pos":  "Adjective",
        "word":  "Thought-provoking",
        "translation":  "Düşündürücü",
        "sentence":  "The documentary about silver mining was very thought-provoking."
    },
    {
        "pos":  "Adjective",
        "word":  "Thoughtful",
        "translation":  "Düşünceli",
        "sentence":  "It was very thoughtful of you to send a thank-you note to the team."
    },
    {
        "pos":  "Number",
        "word":  "Thousand",
        "translation":  "Bin (1000)",
        "sentence":  "(Sayı.)"
    },
    {
        "pos":  "Noun",
        "word":  "Thread",
        "translation":  "İp, konu akışı",
        "sentence":  "I followed the thread of the conversation on the professional forum."
    },
    {
        "pos":  "Threaten",
        "word":  "Threat",
        "translation":  "Noun",
        "sentence":  "Verb"
    },
    {
        "pos":  "Number",
        "word":  "Three",
        "translation":  "Üç (3)",
        "sentence":  "(Sayı.)"
    },
    {
        "pos":  "Noun",
        "word":  "Threshold",
        "translation":  "Eşik",
        "sentence":  "We have reached the threshold for the maximum allowable cost."
    },
    {
        "pos":  "Adjective",
        "word":  "Thrilled",
        "translation":  "Çok heyecanlı",
        "sentence":  "I was thrilled to hear that our cost-down strategy was approved."
    },
    {
        "pos":  "Verb",
        "word":  "Thrive",
        "translation":  "Gelişmek, serpilmek",
        "sentence":  "Some businesses managed to thrive despite the economic recession."
    },
    {
        "pos":  "Noun",
        "word":  "Throat",
        "translation":  "Boğaz",
        "sentence":  "(Sağlık.)"
    },
    {
        "pos":  "Throughout",
        "word":  "Through",
        "translation":  "Prep.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Verb",
        "word":  "Throw",
        "translation":  "Atmak",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Thumb",
        "translation":  "Başparmak",
        "sentence":  "He accidentally hit his thumb with a hammer while fixing the stall."
    },
    {
        "pos":  "Noun",
        "word":  "Thursday",
        "translation":  "Perşembe",
        "sentence":  "(Gün.)"
    },
    {
        "pos":  "Adverb",
        "word":  "Thus",
        "translation":  "Böylece, dolayısıyla",
        "sentence":  "We found an alternative firm; thus, we saved money."
    },
    {
        "pos":  "Noun",
        "word":  "Ticket",
        "translation":  "Bilet",
        "sentence":  "I have a plane ticket to İzmir for tomorrow."
    },
    {
        "pos":  "Noun",
        "word":  "Tide",
        "translation":  "Gelgit",
        "sentence":  "The tide comes in twice a day along this part of the coast."
    },
    {
        "pos":  "Verb",
        "word":  "Tie",
        "translation":  "Noun",
        "sentence":  "Bağlamak"
    },
    {
        "pos":  "Adjective",
        "word":  "Tight",
        "translation":  "Sıkı, dar",
        "sentence":  "My schedule is very tight this week."
    },
    {
        "pos":  "Verb",
        "word":  "Tighten",
        "translation":  "Sıkılaştırmak",
        "sentence":  "We need to tighten our control over the inventory of metals."
    },
    {
        "pos":  "Conj.",
        "word":  "Till",
        "translation":  "Prep.",
        "sentence":  "-e kadar"
    },
    {
        "pos":  "Noun",
        "word":  "Timber",
        "translation":  "Kereste",
        "sentence":  "The old warehouse was built using high-quality timber."
    },
    {
        "pos":  "Noun",
        "word":  "Time",
        "translation":  "Verb",
        "sentence":  "Zaman"
    },
    {
        "pos":  "Adjective",
        "word":  "Timely",
        "translation":  "Zamanında",
        "sentence":  "Your timely response helped us avoid a major supply delay."
    },
    {
        "pos":  "Noun",
        "word":  "Timing",
        "translation":  "Zamanlama",
        "sentence":  "The timing of the investment in palladium was absolutely perfect."
    },
    {
        "pos":  "Adjective",
        "word":  "Tiny",
        "translation":  "Küçücük",
        "sentence":  "I have a tiny collection of silver coins."
    },
    {
        "pos":  "Noun",
        "word":  "Tip",
        "translation":  "Verb",
        "sentence":  "İpucu, bahşiş"
    },
    {
        "pos":  "Noun",
        "word":  "Tire",
        "translation":  "Lastik (araç)",
        "sentence":  "The car needs a new set of tires."
    },
    {
        "pos":  "Adjective",
        "word":  "Tired",
        "translation":  "Yorgun",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Tissue",
        "translation":  "Doku, kağıt mendil",
        "sentence":  "The doctor took a small sample of tissue for further testing."
    },
    {
        "pos":  "Noun",
        "word":  "Title",
        "translation":  "Verb",
        "sentence":  "Başlık, unvan"
    },
    {
        "pos":  "Today",
        "word":  "To",
        "translation":  "Together",
        "sentence":  "Prep."
    },
    {
        "pos":  "Noun",
        "word":  "Tobacco",
        "translation":  "Tütün",
        "sentence":  "The government is increasing taxes on tobacco products again."
    },
    {
        "pos":  "Noun",
        "word":  "Toe",
        "translation":  "Ayak parmağı",
        "sentence":  "(Vücut parçası.)"
    },
    {
        "pos":  "Tomato",
        "word":  "Toilet",
        "translation":  "Tomorrow",
        "sentence":  "Noun"
    },
    {
        "pos":  "Noun",
        "word":  "Tolerance",
        "translation":  "Tolerans, hoşgörü",
        "sentence":  "Our company has zero tolerance for any form of discrimination."
    },
    {
        "pos":  "Verb",
        "word":  "Tolerate",
        "translation":  "Tolere etmek",
        "sentence":  "We cannot tolerate any further delays from this alternative firm."
    },
    {
        "pos":  "Noun",
        "word":  "Toll",
        "translation":  "Ücret / Kayıp",
        "sentence":  "The long hours are starting to take a toll on his health."
    },
    {
        "pos":  "Noun",
        "word":  "Ton",
        "translation":  "Ton (1000 kg)",
        "sentence":  "We purchase several tons of raw materials every year."
    },
    {
        "pos":  "Noun",
        "word":  "Tone",
        "translation":  "Ton (ses",
        "sentence":  "renk)"
    },
    {
        "pos":  "Noun",
        "word":  "Tongue",
        "translation":  "Dil (organ)",
        "sentence":  "(Vücut parçası.)"
    },
    {
        "pos":  "Adv.",
        "word":  "Tonight",
        "translation":  "Noun",
        "sentence":  "Bu gece"
    },
    {
        "pos":  "Adverb",
        "word":  "Too",
        "translation":  "De-da, çok",
        "sentence":  "Silver is a great investment, and gold is too."
    },
    {
        "pos":  "Noun",
        "word":  "Tool",
        "translation":  "Araç, alet",
        "sentence":  "Excel is an essential tool for sourcing specialists."
    },
    {
        "pos":  "Top",
        "word":  "Tooth",
        "translation":  "Noun",
        "sentence":  "Diş"
    },
    {
        "pos":  "Verb",
        "word":  "Top",
        "translation":  "Üstüne çıkmak, aşmak",
        "sentence":  "We hope to top last year\u0027s cost reduction results this quarter."
    },
    {
        "pos":  "Noun",
        "word":  "Topic",
        "translation":  "Konu",
        "sentence":  "The main topic of the meeting is cost reduction."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Torture",
        "translation":  "İşkence / İşkence etmek",
        "sentence":  "The survivors described the mental torture they faced during the war."
    },
    {
        "pos":  "Verb",
        "word":  "Toss",
        "translation":  "Atmak, fırlatmak",
        "sentence":  "He decided to toss the old documents into the recycling bin."
    },
    {
        "pos":  "Verb",
        "word":  "Total",
        "translation":  "Toplamına ulaşmak",
        "sentence":  "The savings from the cost-down study will total over a million lira."
    },
    {
        "pos":  "Totally",
        "word":  "Total",
        "translation":  "Adj.",
        "sentence":  "Adv."
    },
    {
        "pos":  "Verb",
        "word":  "Touch",
        "translation":  "Noun",
        "sentence":  "Dokunmak"
    },
    {
        "pos":  "Adjective",
        "word":  "Tough",
        "translation":  "Zorlu, sert",
        "sentence":  "Negotiating with alternative firms can be tough."
    },
    {
        "pos":  "Tourism",
        "word":  "Tour",
        "translation":  "Tourist",
        "sentence":  "Noun"
    },
    {
        "pos":  "Noun",
        "word":  "Tournament",
        "translation":  "Turnuva",
        "sentence":  "He is preparing for a regional chess tournament in İzmir."
    },
    {
        "pos":  "Preposition",
        "word":  "Toward",
        "translation":  "-e doğru",
        "sentence":  "We are moving toward our financial goals."
    },
    {
        "pos":  "Tower",
        "word":  "Towel",
        "translation":  "Noun",
        "sentence":  "Havlu"
    },
    {
        "pos":  "Noun",
        "word":  "Town",
        "translation":  "Kasaba, şehir",
        "sentence":  "(Yerleşim.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Toxic",
        "translation":  "Zehirli",
        "sentence":  "Some of the chemicals used in the factory are highly toxic."
    },
    {
        "pos":  "Noun",
        "word":  "Toy",
        "translation":  "Adj.",
        "sentence":  "Oyuncak"
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Trace",
        "translation":  "İzini sürmek / İz",
        "sentence":  "We are trying to trace the origin of the faulty raw material."
    },
    {
        "pos":  "Noun",
        "word":  "Track",
        "translation":  "Verb",
        "sentence":  "İz, takip"
    },
    {
        "pos":  "Noun",
        "word":  "Trade",
        "translation":  "Verb",
        "sentence":  "Ticaret"
    },
    {
        "pos":  "Noun",
        "word":  "Trademark",
        "translation":  "Ticari marka",
        "sentence":  "The company\u0027s logo is a registered trademark in several countries."
    },
    {
        "pos":  "Noun",
        "word":  "Trading",
        "translation":  "Ticaret",
        "sentence":  "Online gold trading has become very popular in recent years."
    },
    {
        "pos":  "Traditional",
        "word":  "Tradition",
        "translation":  "Noun",
        "sentence":  "Adj."
    },
    {
        "pos":  "Noun",
        "word":  "Traffic",
        "translation":  "Trafik",
        "sentence":  "There was heavy traffic on the way to Sabiha Gökçen."
    },
    {
        "pos":  "Noun",
        "word":  "Tragedy",
        "translation":  "Trajedi",
        "sentence":  "The sudden death of the young worker was a great tragedy."
    },
    {
        "pos":  "Adjective",
        "word":  "Tragic",
        "translation":  "Trajik",
        "sentence":  "The accident at Sabiha Gökçen was a truly tragic event."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Trail",
        "translation":  "İz, patika / İzini sürmek",
        "sentence":  "We followed a narrow trail through the forest to reach the coast."
    },
    {
        "pos":  "Noun",
        "word":  "Trailer",
        "translation":  "Karavan, fragman",
        "sentence":  "I saw the trailer for the new movie and it looks very promising."
    },
    {
        "pos":  "Trainer",
        "word":  "Train",
        "translation":  "Training",
        "sentence":  "N."
    },
    {
        "pos":  "Noun",
        "word":  "Trait",
        "translation":  "Özellik",
        "sentence":  "Patience is a very important trait for a strategic sourcer."
    },
    {
        "pos":  "Noun",
        "word":  "Transaction",
        "translation":  "İşlem",
        "sentence":  "Each financial transaction is recorded in the company\u0027s ledger."
    },
    {
        "pos":  "Noun",
        "word":  "Transcript",
        "translation":  "Transkript, kopya",
        "sentence":  "Please provide a transcript of your university grades with the application."
    },
    {
        "pos":  "Transform",
        "word":  "Transfer",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Noun",
        "word":  "Transformation",
        "translation":  "Dönüşüm",
        "sentence":  "Digital technology has caused a complete transformation of the industry."
    },
    {
        "pos":  "Noun",
        "word":  "Transit",
        "translation":  "Transit, geçiş",
        "sentence":  "The materials were damaged while they were in transit to the factory."
    },
    {
        "pos":  "Noun",
        "word":  "Transition",
        "translation":  "Geçiş",
        "sentence":  "The transition to the new supplier system will take time."
    },
    {
        "pos":  "Translation",
        "word":  "Translate",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Noun",
        "word":  "Transmission",
        "translation":  "İletim, şanzıman",
        "sentence":  "The car\u0027s transmission failed, so it had to be towed to the garage."
    },
    {
        "pos":  "Verb",
        "word":  "Transmit",
        "translation":  "İletmek",
        "sentence":  "Use a secure connection to transmit sensitive financial data."
    },
    {
        "pos":  "Noun",
        "word":  "Transparency",
        "translation":  "Şeffaflık",
        "sentence":  "We value transparency in our negotiations with alternative suppliers."
    },
    {
        "pos":  "Adjective",
        "word":  "Transparent",
        "translation":  "Şeffaf",
        "sentence":  "The reasons for the supplier change were completely transparent."
    },
    {
        "pos":  "Transportation",
        "word":  "Transport",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Trap",
        "translation":  "Tuzak / Tuzağa düşürmek",
        "sentence":  "The animal was caught in a wooden trap set by the hunter."
    },
    {
        "pos":  "Noun",
        "word":  "Trash",
        "translation":  "Çöp",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Trauma",
        "translation":  "Travma",
        "sentence":  "He is recovering from the psychological trauma of the accident."
    },
    {
        "pos":  "Traveler",
        "word":  "Travel",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Noun",
        "word":  "Treasure",
        "translation":  "Hazine",
        "sentence":  "The divers found a chest of gold treasure at the bottom of the sea."
    },
    {
        "pos":  "Treatment",
        "word":  "Treat",
        "translation":  "Verb",
        "sentence":  "Noun"
    },
    {
        "pos":  "Noun",
        "word":  "Treaty",
        "translation":  "Antlaşma",
        "sentence":  "The two nations signed a peace treaty to end the long conflict."
    },
    {
        "pos":  "Adjective",
        "word":  "Tremendous",
        "translation":  "Muazzam",
        "sentence":  "We have seen a tremendous improvement in cost reduction this year."
    },
    {
        "pos":  "Noun",
        "word":  "Trend",
        "translation":  "Eğilim, akım",
        "sentence":  "I am following the upward trend in silver prices."
    },
    {
        "pos":  "Noun",
        "word":  "Trial",
        "translation":  "Deneme, duruşma",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Tribal",
        "translation":  "Kabile ile ilgili",
        "sentence":  "The museum features a collection of traditional tribal art."
    },
    {
        "pos":  "Noun",
        "word":  "Tribe",
        "translation":  "Kabile",
        "sentence":  "The documentary explores the life of a remote tribe in the Amazon."
    },
    {
        "pos":  "Noun",
        "word":  "Tribute",
        "translation":  "Saygı gösterisi, övgü",
        "sentence":  "The event was a tribute to his long and successful career."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Trick",
        "translation":  "Hile, püf noktası",
        "sentence":  "What is the trick to getting a better deal from suppliers?"
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Trigger",
        "translation":  "Tetiklemek / Tetik",
        "sentence":  "A rise in oil prices can trigger an increase in transportation costs."
    },
    {
        "pos":  "Number",
        "word":  "Trillion",
        "translation":  "Trilyon",
        "sentence":  "The national debt has reached over one trillion dollars."
    },
    {
        "pos":  "Noun",
        "word":  "Trio",
        "translation":  "Üçlü",
        "sentence":  "The jazz trio played a beautiful set at the club in İzmir."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Trip",
        "translation":  "Gezi, seyahat",
        "sentence":  "I need to reschedule my business trip to İzmir."
    },
    {
        "pos":  "Noun",
        "word":  "Triumph",
        "translation":  "Zafer",
        "sentence":  "Winning the cost reduction award was a great triumph for the team."
    },
    {
        "pos":  "Noun",
        "word":  "Troop",
        "translation":  "Birlik, asker",
        "sentence":  "The troops were deployed to the border to maintain security."
    },
    {
        "pos":  "Noun",
        "word":  "Trophy",
        "translation":  "Kupa, ödül",
        "sentence":  "He proudly displayed the trophy he won at the sourcing conference."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Trouble",
        "translation":  "Sorun, sıkıntı",
        "sentence":  "We had some trouble with the raw material shipment today."
    },
    {
        "pos":  "Adjective",
        "word":  "Troubled",
        "translation":  "Sorunlu, dertli",
        "sentence":  "The airline has been in a troubled financial position for years."
    },
    {
        "pos":  "Noun",
        "word":  "Truck",
        "translation":  "Kamyon",
        "sentence":  "The truck arrived at the factory with the alternative materials."
    },
    {
        "pos":  "Adj. / Adv.",
        "word":  "True / Truly",
        "translation":  "Doğru / Gerçekten",
        "sentence":  "It is truly impressive to see the cost reduction results."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Trust",
        "translation":  "Güven / Güvenmek",
        "sentence":  "It takes time to build trust with a new alternative firm."
    },
    {
        "pos":  "Noun",
        "word":  "Trustee",
        "translation":  "Mütevelli heyeti üyesi",
        "sentence":  "He serves as a trustee for a local educational foundation."
    },
    {
        "pos":  "Noun",
        "word":  "Truth",
        "translation":  "Gerçek",
        "sentence":  "To tell you the truth, I prefer palladium over gold right now."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Try",
        "translation":  "Denemek / Deneme",
        "sentence":  "I will try to finish the self-evaluation note tonight."
    },
    {
        "pos":  "Noun",
        "word":  "Tsunami",
        "translation":  "Tsunami",
        "sentence":  "The coast was hit by a massive tsunami after the earthquake."
    },
    {
        "pos":  "Noun",
        "word":  "Tube / Tunnel",
        "translation":  "Tüp / Tünel",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Tuition",
        "translation":  "Okul ücreti",
        "sentence":  "The university decided to increase its tuition fees for next year."
    },
    {
        "pos":  "Noun",
        "word":  "Tumor",
        "translation":  "Tümör",
        "sentence":  "The surgery was successful in removing the benign tumor."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Turn",
        "translation":  "Dönmek / Sıra",
        "sentence":  "It is my turn to present the strategic sourcing report."
    },
    {
        "pos":  "Noun",
        "word":  "Turnout",
        "translation":  "Katılım",
        "sentence":  "There was a high turnout for the town hall meeting on Saturday."
    },
    {
        "pos":  "Noun",
        "word":  "Turnover",
        "translation":  "Ciro, personel değişimi",
        "sentence":  "The company has a high annual turnover of over ten million lira."
    },
    {
        "pos":  "Adverb",
        "word":  "Twice",
        "translation":  "İki kez",
        "sentence":  "I checked the gold weight twice to be sure."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Twist",
        "translation":  "Bükmek, beklenmedik gelişme",
        "sentence":  "The movie has a shocking twist at the very end."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Type",
        "translation":  "Tip, tür / Yazmak",
        "sentence":  "What type of car are you planning to buy via Birevim?"
    },
    {
        "pos":  "Adj. / Adv.",
        "word":  "Typical / Typically",
        "translation":  "Tipik / Genellikle",
        "sentence":  "Typically, silver prices rise when there is economic uncertainty."
    },
    {
        "pos":  "Adjective",
        "word":  "Ugly",
        "translation":  "Çirkin",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Ultimate",
        "translation":  "Nihai, temel",
        "sentence":  "Our ultimate goal is to become the leader in strategic sourcing."
    },
    {
        "pos":  "Adverb",
        "word":  "Ultimately",
        "translation":  "En nihayetinde",
        "sentence":  "Ultimately, our goal is to achieve maximum cost efficiency."
    },
    {
        "pos":  "Noun",
        "word":  "Umbrella",
        "translation":  "Şemsiye",
        "sentence":  "(Eşya.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Unable",
        "translation":  "Muktedir olamamak",
        "sentence":  "I was unable to fly to İzmir because of the cancellation."
    },
    {
        "pos":  "Adjective",
        "word":  "Unacceptable",
        "translation":  "Kabul edilemez",
        "sentence":  "This level of quality from a supplier is completely unacceptable."
    },
    {
        "pos":  "Noun",
        "word":  "Uncertainty",
        "translation":  "Belirsizlik",
        "sentence":  "Economic uncertainty is making people cautious about investing."
    },
    {
        "pos":  "Adjective",
        "word":  "Uncomfortable",
        "translation":  "Rahatsız",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Unconstitutional",
        "translation":  "Anayasaya aykırı",
        "sentence":  "The supreme court ruled that the new law was unconstitutional."
    },
    {
        "pos":  "Prep. / Adj.",
        "word":  "Under / Underground",
        "translation":  "Altında / Yer altı",
        "sentence":  "We keep the factory records under strict protection."
    },
    {
        "pos":  "Verb",
        "word":  "Undergo",
        "translation":  "Maruz kalmak, geçirmek",
        "sentence":  "All new alternative raw materials must undergo rigorous testing."
    },
    {
        "pos":  "Noun",
        "word":  "Undergraduate",
        "translation":  "Lisans öğrencisi",
        "sentence":  "He is an undergraduate student majoring in business management."
    },
    {
        "pos":  "Adjective",
        "word":  "Underlying",
        "translation":  "Temel, altında yatan",
        "sentence":  "We need to identify the underlying cause of the supply delays."
    },
    {
        "pos":  "Verb",
        "word":  "Undermine",
        "translation":  "Baltalamak, zayıflatmak",
        "sentence":  "Frequent changes in strategy can undermine the team\u0027s confidence."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Understand / Understanding",
        "translation":  "Anlamak / Anlayış",
        "sentence":  "I understand the technical requirements of this raw material."
    },
    {
        "pos":  "Verb",
        "word":  "Undertake",
        "translation":  "Üstlenmek",
        "sentence":  "I am ready to undertake the new cost reduction project."
    },
    {
        "pos":  "Adverb",
        "word":  "Undoubtedly",
        "translation":  "Şüphesiz",
        "sentence":  "This is undoubtedly the best financing option for the new car."
    },
    {
        "pos":  "Adjective",
        "word":  "Unexpected",
        "translation":  "Beklenmedik",
        "sentence":  "The sudden rise in silver was unexpected."
    },
    {
        "pos":  "Verb",
        "word":  "Unfold",
        "translation":  "Göz önüne serilmek",
        "sentence":  "We watched the drama unfold on the news throughout the day."
    },
    {
        "pos":  "Adjective",
        "word":  "Unfortunate",
        "translation":  "Talihsiz",
        "sentence":  "It was unfortunate that your flight was canceled on such a busy day."
    },
    {
        "pos":  "Adverb",
        "word":  "Unfortunately",
        "translation":  "Maalesef",
        "sentence":  "Unfortunately, the supplier couldn\u0027t meet our deadline."
    },
    {
        "pos":  "Noun",
        "word":  "Uniform",
        "translation":  "Üniforma",
        "sentence":  "Workers must wear their uniform in the production zone."
    },
    {
        "pos":  "Verb",
        "word":  "Unify",
        "translation":  "Birleştirmek",
        "sentence":  "The goal of the new policy is to unify the sourcing processes."
    },
    {
        "pos":  "Noun",
        "word":  "Union",
        "translation":  "Sendika, birlik",
        "sentence":  "(İş dünyası terimi.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Unique",
        "translation":  "Benzersiz",
        "sentence":  "This is a unique opportunity to reduce our sourcing costs."
    },
    {
        "pos":  "Noun",
        "word":  "Unit",
        "translation":  "Birim",
        "sentence":  "We calculate the cost per unit for every product."
    },
    {
        "pos":  "Verb",
        "word":  "Unite",
        "translation":  "Birleşmek, birleştirmek",
        "sentence":  "The two rival firms decided to unite to compete globally."
    },
    {
        "pos":  "Noun",
        "word":  "Unity",
        "translation":  "Birlik, beraberlik",
        "sentence":  "There is a strong sense of unity among the members of the team."
    },
    {
        "pos":  "Adjective",
        "word":  "Universal",
        "translation":  "Evrensel",
        "sentence":  "The need for clean water is a universal human issue."
    },
    {
        "pos":  "Noun",
        "word":  "Universe / University",
        "translation":  "Evren / Üniversite",
        "sentence":  "(Genel terimler.)"
    },
    {
        "pos":  "Conjunction",
        "word":  "Unless",
        "translation":  "-medikçe",
        "sentence":  "We cannot switch firms unless the quality is proven."
    },
    {
        "pos":  "Adjective",
        "word":  "Unlikely",
        "translation":  "Beklenmedik, düşük ihtimal",
        "sentence":  "It is unlikely that gold prices will drop this week."
    },
    {
        "pos":  "Adjective",
        "word":  "Unnecessary",
        "translation":  "Gereksiz",
        "sentence":  "Avoid unnecessary spending before buying the car."
    },
    {
        "pos":  "Adjective",
        "word":  "Unprecedented",
        "translation":  "Benzeri görülmemiş",
        "sentence":  "The rise in silver prices is unprecedented in recent history."
    },
    {
        "pos":  "Conj. / Prep.",
        "word":  "Until",
        "translation":  "-e kadar",
        "sentence":  "I will stay at the office until the report is finished."
    },
    {
        "pos":  "Adjective",
        "word":  "Unusual",
        "translation":  "Sıradışı",
        "sentence":  "An unusual increase in palladium demand was noticed."
    },
    {
        "pos":  "Verb",
        "word":  "Unveil",
        "translation":  "Açığa çıkarmak, tanıtmak",
        "sentence":  "The company will unveil its new cost-down strategy next week."
    },
    {
        "pos":  "Adjective",
        "word":  "Upcoming",
        "translation":  "Yaklaşan",
        "sentence":  "I am preparing a presentation for the upcoming sourcing meeting."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Update",
        "translation":  "Güncellemek / Güncelleme",
        "sentence":  "I need to update my CV for the 5th-year review."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Upgrade",
        "translation":  "Yükseltmek / Yükseltme",
        "sentence":  "We need to upgrade our software to manage alternative suppliers better."
    },
    {
        "pos":  "Verb",
        "word":  "Uphold",
        "translation":  "Korumak, onaylamak",
        "sentence":  "The court decided to uphold the original verdict."
    },
    {
        "pos":  "Adjective",
        "word":  "Upper",
        "translation":  "Üst",
        "sentence":  "(Konum.)"
    },
    {
        "pos":  "Adj. / Verb",
        "word":  "Upset",
        "translation":  "Üzgün / Üzmek",
        "sentence":  "(Duygu.)"
    },
    {
        "pos":  "Adv. / Adj.",
        "word":  "Upstairs",
        "translation":  "Üst kat",
        "sentence":  "(Konum.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Urban",
        "translation":  "Kentsel",
        "sentence":  "Urban transportation in İzmir is quite efficient."
    },
    {
        "pos":  "Verb",
        "word":  "Urge",
        "translation":  "Israr etmek, dürtü",
        "sentence":  "I urge the team to focus on alternative suppliers."
    },
    {
        "pos":  "Adjective",
        "word":  "Urgent",
        "translation":  "Acil",
        "sentence":  "We need an urgent solution to the raw material shortage."
    },
    {
        "pos":  "Noun",
        "word":  "Usage",
        "translation":  "Kullanım",
        "sentence":  "The usage of alternative materials has increased by 30% this year."
    },
    {
        "pos":  "V. / N. / Adj.",
        "word":  "Use / Used / User",
        "translation":  "Kullanmak / Alışık / Kullanıcı",
        "sentence":  "I am used to working under pressure in sourcing."
    },
    {
        "pos":  "Adjective",
        "word":  "Useless",
        "translation":  "Yararsız, faydasız",
        "sentence":  "This old machine is completely useless and needs to be replaced."
    },
    {
        "pos":  "Noun",
        "word":  "Utility",
        "translation":  "Fayda, kamu hizmeti",
        "sentence":  "The utility of this new sourcing tool is very high for our team."
    },
    {
        "pos":  "Verb",
        "word":  "Utilize",
        "translation":  "Faydalanmak, kullanmak",
        "sentence":  "We must utilize all available resources to meet our cost-down target."
    },
    {
        "pos":  "Adverb",
        "word":  "Utterly",
        "translation":  "Tamamen, son derece",
        "sentence":  "The results of the market study were utterly surprising to us."
    },
    {
        "pos":  "Noun",
        "word":  "Vacation",
        "translation":  "Tatil",
        "sentence":  "I need a short vacation after this busy month."
    },
    {
        "pos":  "Noun",
        "word":  "Vacuum",
        "translation":  "Vakum, boşluk",
        "sentence":  "We need to create a vacuum to test the new material\u0027s durability."
    },
    {
        "pos":  "Adjective",
        "word":  "Vague",
        "translation":  "Belirsiz, net olmayan",
        "sentence":  "His explanation of the cost reduction plan was a bit vague."
    },
    {
        "pos":  "Adjective",
        "word":  "Valid",
        "translation":  "Geçerli",
        "sentence":  "Your passport must be valid for at least six months for the trip."
    },
    {
        "pos":  "Noun",
        "word":  "Validity",
        "translation":  "Geçerlilik",
        "sentence":  "The validity of the contract is being questioned by the legal team."
    },
    {
        "pos":  "Adjective",
        "word":  "Valuable",
        "translation":  "Değerli",
        "sentence":  "Your experience in strategic sourcing is very valuable."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Value",
        "translation":  "Değer / Değer biçmek",
        "sentence":  "The value of your silver holdings has increased."
    },
    {
        "pos":  "Verb",
        "word":  "Vanish",
        "translation":  "Gözden kaybolmak",
        "sentence":  "The small supplier managed to vanish after receiving the down payment."
    },
    {
        "pos":  "Noun / Adj.",
        "word":  "Variable",
        "translation":  "Değişken",
        "sentence":  "Raw material costs are a major variable in our annual budget."
    },
    {
        "pos":  "Noun",
        "word":  "Variation",
        "translation":  "Varyasyon, değişim",
        "sentence":  "We noticed a slight variation in the quality of the silver samples."
    },
    {
        "pos":  "Adjective",
        "word":  "Varied",
        "translation":  "Çeşitli, türlü",
        "sentence":  "My daily tasks are quite varied, ranging from sourcing to reporting."
    },
    {
        "pos":  "N. / Adj. / V.",
        "word":  "Variety / Various / Vary",
        "translation":  "Çeşitlilik / Çeşitli / Değişmek",
        "sentence":  "We work with various alternative firms."
    },
    {
        "pos":  "Adjective",
        "word":  "Vast",
        "translation":  "Çok büyük, devasa",
        "sentence":  "There is a vast market for recycled materials."
    },
    {
        "pos":  "Noun",
        "word":  "Vegetable",
        "translation":  "Sebze",
        "sentence":  "(Yiyecek.)"
    },
    {
        "pos":  "Noun",
        "word":  "Vehicle",
        "translation":  "Araç",
        "sentence":  "I am comparing two different ways to buy a vehicle."
    },
    {
        "pos":  "Noun",
        "word":  "Vein",
        "translation":  "Damar",
        "sentence":  "The nurse had a hard time finding a vein to draw blood."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Venture",
        "translation":  "Girişim / Cüret etmek",
        "sentence":  "The two firms decided to start a joint venture in the energy sector."
    },
    {
        "pos":  "Adjective",
        "word":  "Verbal",
        "translation":  "Sözlü",
        "sentence":  "We reached a verbal agreement, but we still need it in writing."
    },
    {
        "pos":  "Noun",
        "word":  "Verdict",
        "translation":  "Karar, hüküm",
        "sentence":  "The jury reached a verdict of \"not guilty\" after hours of deliberation."
    },
    {
        "pos":  "Verb",
        "word":  "Verify",
        "translation":  "Doğrulamak, teyit etmek",
        "sentence":  "Please verify the bank details before sending the transaction."
    },
    {
        "pos":  "Noun",
        "word":  "Verse",
        "translation":  "Ayet, kıta, mısra",
        "sentence":  "The poet read a beautiful verse from his latest book."
    },
    {
        "pos":  "Noun",
        "word":  "Version",
        "translation":  "Versiyon",
        "sentence":  "This is the final version of the anniversary note."
    },
    {
        "pos":  "Conjunction",
        "word":  "Versus",
        "translation":  "-e karşı",
        "sentence":  "This evening\u0027s match is Göztepe versus Beşiktaş."
    },
    {
        "pos":  "Adjective",
        "word":  "Vertical",
        "translation":  "Dikey",
        "sentence":  "The graph shows a vertical increase in precious metal prices."
    },
    {
        "pos":  "Noun",
        "word":  "Vessel",
        "translation":  "Gemi, kap, damar",
        "sentence":  "The cargo vessel is expected to arrive at the port tomorrow morning."
    },
    {
        "pos":  "Noun",
        "word":  "Veteran",
        "translation":  "Kıdemli, gazi",
        "sentence":  "As a veteran of the industry, he has seen many market cycles."
    },
    {
        "pos":  "Preposition",
        "word":  "Via",
        "translation":  "Aracılığıyla",
        "sentence":  "I sent the sourcing report via email."
    },
    {
        "pos":  "Adjective",
        "word":  "Viable",
        "translation":  "Uygulanabilir, karlı",
        "sentence":  "We need a viable plan to reduce costs without losing quality."
    },
    {
        "pos":  "Adjective",
        "word":  "Vibrant",
        "translation":  "Canlı, enerjik",
        "sentence":  "İzmir has a very vibrant atmosphere, especially during the summer."
    },
    {
        "pos":  "Noun",
        "word":  "Vice",
        "translation":  "Kusur, kötü alışkanlık",
        "sentence":  "Greed is often seen as a major vice in the financial world."
    },
    {
        "pos":  "Adjective",
        "word":  "Vicious",
        "translation":  "Kötü niyetli, hırçın",
        "sentence":  "High inflation can lead to a vicious cycle of rising prices."
    },
    {
        "pos":  "Noun",
        "word":  "Victim",
        "translation":  "Mağdur, kurban",
        "sentence":  "(Hukuki terim.)"
    },
    {
        "pos":  "Noun",
        "word":  "Victory",
        "translation":  "Zafer",
        "sentence":  "Reducing costs by 20% was a big victory for me."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Video / View / Viewer",
        "translation":  "Video / Görünüm / İzleyici",
        "sentence":  "My YouTube viewers love educational songs."
    },
    {
        "pos":  "Noun",
        "word":  "Viewpoint",
        "translation":  "Bakış açısı",
        "sentence":  "From my viewpoint, the alternative supplier is the better choice."
    },
    {
        "pos":  "Noun",
        "word":  "Village",
        "translation":  "Köy",
        "sentence":  "(Yerleşim.)"
    },
    {
        "pos":  "Verb",
        "word":  "Violate",
        "translation":  "İhlal etmek",
        "sentence":  "The company was fined because it managed to violate safety rules."
    },
    {
        "pos":  "Noun",
        "word":  "Violation",
        "translation":  "İhlal",
        "sentence":  "The factory was closed due to a serious violation of environmental laws."
    },
    {
        "pos":  "Noun / Adj.",
        "word":  "Violence / Violent",
        "translation":  "Şiddet / Şiddetli",
        "sentence":  "(Toplumsal terim.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Virtual",
        "translation":  "Sanal",
        "sentence":  "We had a virtual meeting with the German supplier."
    },
    {
        "pos":  "Noun",
        "word":  "Virtue",
        "translation":  "Erdem",
        "sentence":  "Patience is a virtue when waiting for the right investment opportunity."
    },
    {
        "pos":  "Noun",
        "word":  "Virus",
        "translation":  "Virüs",
        "sentence":  "(Sağlık/Teknoloji.)"
    },
    {
        "pos":  "Noun",
        "word":  "Visa",
        "translation":  "Vize",
        "sentence":  "I need to apply for a visa before my business trip to Germany."
    },
    {
        "pos":  "Adjective",
        "word":  "Visible",
        "translation":  "Görünür",
        "sentence":  "The impact of the cost reduction strategy is already visible."
    },
    {
        "pos":  "Noun",
        "word":  "Vision",
        "translation":  "Vizyon, görüş",
        "sentence":  "My vision for the channel is to reach 1,000 subscribers."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Visit / Visitor",
        "translation":  "Ziyaret etmek / Ziyaretçi",
        "sentence":  "A visitor from the alternative firm is coming today."
    },
    {
        "pos":  "Adjective",
        "word":  "Vital",
        "translation":  "Hayati",
        "sentence":  "Cost-down studies are vital for our company\u0027s profit."
    },
    {
        "pos":  "Noun",
        "word":  "Vitamin",
        "translation":  "Vitamin",
        "sentence":  "(Sağlık.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Vocal",
        "translation":  "Sesli, düşüncelerini açıkça söyleyen",
        "sentence":  "He was very vocal about his concerns regarding the new supplier."
    },
    {
        "pos":  "Noun",
        "word":  "Voice / Volume",
        "translation":  "Ses / Hacim",
        "sentence":  "The volume of silver trade is rising in Akbank."
    },
    {
        "pos":  "Adjective",
        "word":  "Voluntary",
        "translation":  "Gönüllü",
        "sentence":  "Participation in the social responsibility project is completely voluntary."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Volunteer",
        "translation":  "Gönüllü",
        "sentence":  "(Toplumsal.)"
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Vote",
        "translation":  "Oy / Oy kullanmak",
        "sentence":  "(Siyasi.)"
    },
    {
        "pos":  "Noun",
        "word":  "Voting",
        "translation":  "Oylama",
        "sentence":  "The voting process for the new board members will begin on Monday."
    },
    {
        "pos":  "Verb",
        "word":  "Vow",
        "translation":  "Yemin etmek, söz vermek",
        "sentence":  "I vow to complete the YouTube project before the end of the year."
    },
    {
        "pos":  "Noun",
        "word":  "Vulnerability",
        "translation":  "Kırılganlık, zafiyet",
        "sentence":  "The audit revealed a major vulnerability in the supply chain."
    },
    {
        "pos":  "Adjective",
        "word":  "Vulnerable",
        "translation":  "Savunmasız, kırılgan",
        "sentence":  "Small firms are more vulnerable to sudden changes in the market."
    },
    {
        "pos":  "Noun",
        "word":  "Wage",
        "translation":  "Ücret, maaş",
        "sentence":  "(İş dünyası.)"
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Wait / Waiter",
        "translation":  "Beklemek / Garson",
        "sentence":  "I will wait for the market to open before selling."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Wake / Walk / Wall",
        "translation":  "Uyanmak / Yürümek / Duvar",
        "sentence":  "(Günlük eylemler.)"
    },
    {
        "pos":  "Verb",
        "word":  "Wander",
        "translation":  "Dolaşmak, gezinmek",
        "sentence":  "I like to wander around the historic streets of İzmir on weekends."
    },
    {
        "pos":  "Verb",
        "word":  "Want",
        "translation":  "İstemek",
        "sentence":  "I want to finalize the Birevim car plan soon."
    },
    {
        "pos":  "Noun",
        "word":  "War",
        "translation":  "Savaş",
        "sentence":  "Global war threats often push gold prices up."
    },
    {
        "pos":  "Noun",
        "word":  "Ward",
        "translation":  "Koğuş, servis",
        "sentence":  "He was admitted to the surgical ward following his operation."
    },
    {
        "pos":  "Noun",
        "word":  "Warehouse",
        "translation":  "Depo",
        "sentence":  "We keep all our alternative raw materials in a large warehouse."
    },
    {
        "pos":  "Noun",
        "word":  "Warfare",
        "translation":  "Savaş, harp",
        "sentence":  "Modern warfare involves a lot of high-tech digital equipment."
    },
    {
        "pos":  "Adj. / V. / N.",
        "word":  "Warm / Warn / Warning",
        "translation":  "Ilık / Uyarmak / Uyarı",
        "sentence":  "The manager warned us about the budget limits."
    },
    {
        "pos":  "Noun",
        "word":  "Warming",
        "translation":  "Isınma",
        "sentence":  "Global warming is having a significant impact on agriculture."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Warrant",
        "translation":  "Garanti, yetki / Hak etmek",
        "sentence":  "The police had a warrant to search the office for evidence."
    },
    {
        "pos":  "Noun",
        "word":  "Warrior",
        "translation":  "Savaşçı",
        "sentence":  "The story tells the tale of a brave warrior from ancient times."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Wash / Washing",
        "translation":  "Yıkamak / Yıkama",
        "sentence":  "(Günlük kullanım.)"
    },
    {
        "pos":  "Noun / Verb / Adj.",
        "word":  "Waste",
        "translation":  "Atık, israf / Boşa harcamak",
        "sentence":  "Don\u0027t waste time with unreliable suppliers."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Watch",
        "translation":  "İzlemek / Saat",
        "sentence":  "I watch the football match analysis every weekend."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Water / Wave",
        "translation":  "Su / Dalga",
        "sentence":  "(Doğa.)"
    },
    {
        "pos":  "Noun",
        "word":  "Way",
        "translation":  "Yol, yöntem",
        "sentence":  "Strategic sourcing is a great way to improve efficiency."
    },
    {
        "pos":  "Adj. / Noun",
        "word":  "Weak / Weakness",
        "translation":  "Zayıf / Zayıflık",
        "sentence":  "Identifying the weakness of a supplier is important."
    },
    {
        "pos":  "Verb",
        "word":  "Weaken",
        "translation":  "Zayıflatmak",
        "sentence":  "Rising interest rates might weaken the demand for luxury goods."
    },
    {
        "pos":  "Noun / Adj.",
        "word":  "Wealth / Wealthy",
        "translation":  "Servet / Zengin",
        "sentence":  "Building wealth requires patience and silver!"
    },
    {
        "pos":  "Noun",
        "word":  "Weapon",
        "translation":  "Silah",
        "sentence":  "Information is your best weapon in negotiations."
    },
    {
        "pos":  "Verb",
        "word":  "Wear",
        "translation":  "Giymek",
        "sentence":  "(Giyim.)"
    },
    {
        "pos":  "Noun",
        "word":  "Weather",
        "translation":  "Hava durumu",
        "sentence":  "(Doğa.)"
    },
    {
        "pos":  "Verb",
        "word":  "Weave",
        "translation":  "Dokumak, örmek",
        "sentence":  "She can weave beautiful patterns using traditional methods."
    },
    {
        "pos":  "Noun",
        "word":  "Web / Website",
        "translation":  "Ağ / İnternet sitesi",
        "sentence":  "Check the website for current palladium rates."
    },
    {
        "pos":  "Noun",
        "word":  "Wedding",
        "translation":  "Düğün",
        "sentence":  "(Sosyal.)"
    },
    {
        "pos":  "Noun",
        "word":  "Wednesday / Week",
        "translation":  "Çarşamba / Hafta",
        "sentence":  "(Zaman.)"
    },
    {
        "pos":  "Noun",
        "word":  "Weed",
        "translation":  "Yabani ot",
        "sentence":  "I spent the morning pulling weeds out of my garden in İzmir."
    },
    {
        "pos":  "Adjective",
        "word":  "Weekly",
        "translation":  "Haftalık",
        "sentence":  "We have a weekly meeting to discuss cost reduction strategies."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Weigh / Weight",
        "translation":  "Tartmak / Ağırlık",
        "sentence":  "What is the total weight of your gold grams?"
    },
    {
        "pos":  "Adjective",
        "word":  "Weird",
        "translation":  "Tuhaf, garip",
        "sentence":  "I had a weird dream about palladium prices last night."
    },
    {
        "pos":  "Verb / Adj.",
        "word":  "Welcome",
        "translation":  "Hoş geldiniz / Karşılamak",
        "sentence":  "(Sosyal.)"
    },
    {
        "pos":  "Noun",
        "word":  "Welfare",
        "translation":  "Refah, yardım",
        "sentence":  "The government is responsible for the welfare of its citizens."
    },
    {
        "pos":  "Noun",
        "word":  "Well",
        "translation":  "Kuyu",
        "sentence":  "The old village relied on a deep well for its water supply."
    },
    {
        "pos":  "Noun",
        "word":  "Well-being",
        "translation":  "Esenlik, refah",
        "sentence":  "Employee well-being is a top priority for our company."
    },
    {
        "pos":  "Noun / Adj.",
        "word":  "West / Western",
        "translation":  "Batı / Batılı",
        "sentence":  "(Yön.)"
    },
    {
        "pos":  "Adjective",
        "word":  "Wet",
        "translation":  "Islak",
        "sentence":  "(Fiziksel.)"
    },
    {
        "pos":  "(Bağlaçlar)",
        "word":  "Whatever / Whenever / Wherever / Whether",
        "translation":  "Use alternative firms whenever it\u0027s possible.",
        "sentence":  ""
    },
    {
        "pos":  "Adverb",
        "word":  "Whatsoever",
        "translation":  "Hiç mi hiç, her neyse",
        "sentence":  "There is no reason whatsoever to delay the supplier switch."
    },
    {
        "pos":  "Noun",
        "word":  "Wheat",
        "translation":  "Buğday",
        "sentence":  "Wheat is one of the most important crops grown in this province."
    },
    {
        "pos":  "Noun",
        "word":  "Wheel",
        "translation":  "Tekerlek",
        "sentence":  "(Araç parçası.)"
    },
    {
        "pos":  "Adverb",
        "word":  "Whereby",
        "translation":  "Sayesinde, vasıtasıyla",
        "sentence":  "We have a system whereby all alternative firms are evaluated fairly."
    },
    {
        "pos":  "Conjunction",
        "word":  "While",
        "translation":  "-iken",
        "sentence":  "I studied English while waiting at the airport."
    },
    {
        "pos":  "Verb",
        "word":  "Whip",
        "translation":  "Kamçılamak, hızla hareket ettirmek",
        "sentence":  "He managed to whip up a quick meal before heading to work."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Whisper",
        "translation":  "Fısıldamak",
        "sentence":  "(Ses.)"
    },
    {
        "pos":  "Pronoun",
        "word":  "Whoever",
        "translation":  "Her kim",
        "sentence":  "Whoever finds the mistake in the report will get a small reward."
    },
    {
        "pos":  "Adverb",
        "word":  "Wholly",
        "translation":  "Tamamen, bütünüyle",
        "sentence":  "The responsibility for the error is wholly mine."
    },
    {
        "pos":  "Adj. / Adv.",
        "word":  "Wide / Widely",
        "translation":  "Geniş / Yaygın olarak",
        "sentence":  "This method is widely used in sourcing."
    },
    {
        "pos":  "Verb",
        "word":  "Widen",
        "translation":  "Genişletmek",
        "sentence":  "We need to widen our search for alternative raw materials."
    },
    {
        "pos":  "Adjective",
        "word":  "Widespread",
        "translation":  "Yaygın",
        "sentence":  "There is widespread support for the new environmental policy."
    },
    {
        "pos":  "Noun",
        "word":  "Widow",
        "translation":  "Dul (kadın)",
        "sentence":  "The poor widow lived alone in a small house near the coast."
    },
    {
        "pos":  "Noun",
        "word":  "Width",
        "translation":  "Genişlik",
        "sentence":  "Please measure the width of the warehouse entrance carefully."
    },
    {
        "pos":  "Noun",
        "word":  "Wife",
        "translation":  "Eş (kadın)",
        "sentence":  "(Aile.)"
    },
    {
        "pos":  "Adj. / Noun",
        "word":  "Wild / Wildlife",
        "translation":  "Vahşi / Yaban hayatı",
        "sentence":  "(Doğa.)"
    },
    {
        "pos":  "Modal Verb / Noun",
        "word":  "Will",
        "translation":  "-ecek / İrade, vasiyet",
        "sentence":  "I will celebrate my 5th service year in December."
    },
    {
        "pos":  "Adjective",
        "word":  "Willing",
        "translation":  "İstekli",
        "sentence":  "I am willing to take more responsibility at work."
    },
    {
        "pos":  "Noun",
        "word":  "Willingness",
        "translation":  "İsteklilik",
        "sentence":  "His willingness to learn new things is very impressive."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Win / Winner",
        "translation":  "Kazanmak / Kazanan",
        "sentence":  "A good negotiation is a win-win for both sides."
    },
    {
        "pos":  "Noun",
        "word":  "Winter",
        "translation":  "Kış",
        "sentence":  "(Mevsim.)"
    },
    {
        "pos":  "Verb",
        "word":  "Wipe",
        "translation":  "Silmek",
        "sentence":  "Don\u0027t forget to wipe the dust off the raw material samples."
    },
    {
        "pos":  "Noun",
        "word":  "Wire",
        "translation":  "Tel, kablo",
        "sentence":  "(Teknik malzeme.)"
    },
    {
        "pos":  "Noun",
        "word":  "Wisdom",
        "translation":  "Bilgelik",
        "sentence":  "He is known for his wisdom and experience in asset management."
    },
    {
        "pos":  "Adjective",
        "word":  "Wise",
        "translation":  "Bilgece, mantıklı",
        "sentence":  "It is wise to keep some of your assets in palladium."
    },
    {
        "pos":  "Verb / Noun",
        "word":  "Wish",
        "translation":  "Dilemek / Dilek",
        "sentence":  "I wish to complete my car purchase by March."
    },
    {
        "pos":  "Noun",
        "word":  "Wit",
        "translation":  "Zeka, nüktedanlık",
        "sentence":  "She is famous for her quick wit and sharp sense of humor."
    },
    {
        "pos":  "(Edatlar)",
        "word":  "With / Within / Without",
        "translation":  "We can\u0027t finish the project without your help.",
        "sentence":  ""
    },
    {
        "pos":  "Verb",
        "word":  "Withdraw",
        "translation":  "Geri çekilmek, para çekmek",
        "sentence":  "I need to withdraw some cash from the bank for the market."
    },
    {
        "pos":  "Noun",
        "word":  "Withdrawal",
        "translation":  "Geri çekilme, para çekme",
        "sentence":  "The withdrawal of the product from the market was very costly."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Witness",
        "translation":  "Şahit / Şahit olmak",
        "sentence":  "You will witness the growth of the YouTube channel."
    },
    {
        "pos":  "Noun",
        "word":  "Wolf",
        "translation":  "Kurt",
        "sentence":  "We heard a wolf howling in the distance during our camping trip."
    },
    {
        "pos":  "Noun",
        "word":  "Woman",
        "translation":  "Kadın",
        "sentence":  "(Genel.)"
    },
    {
        "pos":  "Verb / Adj.",
        "word":  "Wonder / Wonderful",
        "translation":  "Merak etmek / Harika",
        "sentence":  "I wonder if silver prices will double this year."
    },
    {
        "pos":  "Noun / Adj.",
        "word":  "Wood / Wooden / Wool",
        "translation":  "Odun / Ahşap / Yün",
        "sentence":  "(Malzemeler.)"
    },
    {
        "pos":  "Noun",
        "word":  "Word",
        "translation":  "Kelime",
        "sentence":  "Learning 200 words for a game is a great idea."
    },
    {
        "pos":  "V. / N. / Adj.",
        "word":  "Work / Worker / Working",
        "translation":  "Çalışmak / İşçi / Çalışan",
        "sentence":  "Hard work pays off in strategic sourcing."
    },
    {
        "pos":  "Noun",
        "word":  "Workforce",
        "translation":  "İş gücü",
        "sentence":  "Our company has a highly skilled and diverse workforce."
    },
    {
        "pos":  "Noun",
        "word":  "Workout",
        "translation":  "Antrenman",
        "sentence":  "I usually do a quick workout at the gym before going to the office."
    },
    {
        "pos":  "Noun",
        "word":  "Workplace",
        "translation":  "İş yeri",
        "sentence":  "Creating a safe workplace is essential for all employees."
    },
    {
        "pos":  "Noun",
        "word":  "Workshop",
        "translation":  "Atölye, çalıştay",
        "sentence":  "I attended a workshop on strategic sourcing last month."
    },
    {
        "pos":  "Noun / Adj.",
        "word":  "World / Worldwide",
        "translation":  "Dünya / Dünya çapında",
        "sentence":  "Sourcing is a worldwide business."
    },
    {
        "pos":  "Noun",
        "word":  "Worm",
        "translation":  "Solucan",
        "sentence":  "The bird pulled a long worm out of the ground after the rain."
    },
    {
        "pos":  "Verb / Adj.",
        "word":  "Worry / Worried",
        "translation":  "Endişelenmek / Endişeli",
        "sentence":  "Don\u0027t worry about the temporary flight delay."
    },
    {
        "pos":  "Adj. / Adv.",
        "word":  "Worse / Worst",
        "translation":  "Daha kötü / En kötü",
        "sentence":  "The worst thing for an investor is panic selling."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Worship",
        "translation":  "İbadet / İbadet etmek",
        "sentence":  "The ancient temple was a place of worship for many people."
    },
    {
        "pos":  "Adj. / Noun",
        "word":  "Worth",
        "translation":  "Değerinde / Değer",
        "sentence":  "Is it worth buying more gold at this price?"
    },
    {
        "pos":  "Adjective",
        "word":  "Worthwhile",
        "translation":  "Değer, zahmete değer",
        "sentence":  "Finding a cheaper supplier was a very worthwhile effort."
    },
    {
        "pos":  "Adjective",
        "word":  "Worthy",
        "translation":  "Değerli, layık",
        "sentence":  "She is a worthy candidate for the senior manager position."
    },
    {
        "pos":  "Modal Verb",
        "word":  "Would",
        "translation":  "-erdi, -ardı",
        "sentence":  "I would like to see the alternative firm\u0027s samples."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Wound",
        "translation":  "Yara / Yaralamak",
        "sentence":  "(Sağlık.)"
    },
    {
        "pos":  "Verb",
        "word":  "Wrap",
        "translation":  "Sarmak, paketlemek",
        "sentence":  "(Genel kullanım.)"
    },
    {
        "pos":  "Noun",
        "word":  "Wrist",
        "translation":  "Bilek",
        "sentence":  "He hurt his wrist while carrying heavy boxes in the warehouse."
    },
    {
        "pos":  "Adj. / Adv.",
        "word":  "Wrong",
        "translation":  "Yanlış",
        "sentence":  "It is wrong to assume that prices will always go up."
    },
    {
        "pos":  "Noun",
        "word":  "Yard",
        "translation":  "Avlu, bahçe",
        "sentence":  "(Yer.)"
    },
    {
        "pos":  "Exclamation",
        "word":  "Yeah",
        "translation":  "Evet (samimi)",
        "sentence":  "Yeah, the analysis for the Göztepe match was correct!"
    },
    {
        "pos":  "Noun",
        "word":  "Year",
        "translation":  "Yıl",
        "sentence":  "This is my fifth year at the firm."
    },
    {
        "pos":  "Verb",
        "word":  "Yell",
        "translation":  "Bağırmak",
        "sentence":  "There is no need to yell; I can hear you perfectly fine."
    },
    {
        "pos":  "Adj. / Noun",
        "word":  "Yellow",
        "translation":  "Sarı",
        "sentence":  "Gold has a beautiful yellow color."
    },
    {
        "pos":  "Noun / Verb",
        "word":  "Yield",
        "translation":  "Verim, ürün / Ürün vermek",
        "sentence":  "The high yield from our silver investment was very satisfying."
    },
    {
        "pos":  "Adj. / Noun",
        "word":  "Young / Youth",
        "translation":  "Genç / Gençlik",
        "sentence":  "(Yaş grubu.)"
    },
    {
        "pos":  "Number",
        "word":  "Zero",
        "translation":  "Sıfır",
        "sentence":  "My target for sourcing errors is zero."
    },
    {
        "pos":  "Noun",
        "word":  "Zone",
        "translation":  "Bölge, alan",
        "sentence":  "Stay in your comfort zone or take a risk?"
    }
];

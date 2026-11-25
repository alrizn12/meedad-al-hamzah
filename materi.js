/* =====================================================================
   materi.js — مداد الهمزة
   Seluruh konten bahasa Arab aplikasi disimpan di file ini.
   Sumber utama: kitab «مهارات الكتابة» — المحاضرة الأولى
   Bagian: ثانيا: كتابة همزتي الوصل والقطع (hlm. 13 dan 15–21 pada kitab)

   CATATAN PENTING UNTUK DIPERIKSA (tolong cek dengan kitab asli):
   1. Kunci jawaban Latihan 2, 3, 4, dan 5 di kitab berupa kolom kosong.
      Jawaban di sini disusun dari kaidah kitab (hlm. 16–17), bukan salinan.
   2. Kata berwarna pada Latihan 2 (ayat) tidak sepenuhnya jelas di scan.
      Kata target dipilih dari hamzah di awal kata; mohon dicek.
   3. Latihan 2 ayat ke-7: kitab tercetak «وأصبروا», sedangkan mushaf
      «واصبروا». Di sini dipakai bacaan mushaf.
   4. Kitab menulis (ابتسام) sebagai contoh hamzah qatha' pada nama.
      Dipertahankan sesuai kitab.
   5. Kitab menulis «يجاء بهمزة الوصل في ابتداء الكلام نطقا لا كتابة».
      Dipertahankan sesuai kitab.
   6. Terjemahan Indonesia (field «arti») bukan dari kitab; itu tambahan
      saya untuk membantu. Silakan sunting.
   7. Field yang bertanda «tambahan: true» bukan berasal dari kitab.
   ===================================================================== */

const MATERI = {

  /* ===================================================================
     1) INFORMASI UMUM
     =================================================================== */
  meta: {
    appName: "مداد الهمزة",
    course: "مهارات الكتابة",
    lecture: "المحاضرة الأولى",
    topic: "كتابة همزتي الوصل والقطع",
    subtopics: ["الفرق بين الهمزة والألف", "همزتا الوصل والقطع"],
    version: "1.0.0",
    source: { book: "مهارات الكتابة", pages: "13، 15-21" }
  },

  /* ===================================================================
     2) حصيلة التعلم (hlm. 13)
     =================================================================== */
  learningOutcomes: {
    title: "حصيلة التعلم",
    generalGoalTitle: "الأهداف العامة",
    generalGoal: "أن يتمكن الطالب من رسم الهمزة في أول الكلمة بطريقة صحيحة",
    specificGoalsTitle: "الأهداف التفصيلية",
    specificGoalsSubtitle: "الهمزة في أول الكلمة",
    specificGoals: [
      "أن يعرف الطالب معنى الهمزة في اللغة العربية.",
      "أن يفرّق الطالب بين الهمزة والألف.",
      "أن يفرق الطالب بين همزة الوصل وهمزة القطع.",
      "أن يعدد الطالب مواضع همزة الوصل ومواضع همزة القطع.",
      "أن يذكر الطالب أمثلة على الهمزة في أول الكلمة.",
      "أن يصحح الطالب أخطاء الهمزة في نص معطى."
    ]
  },

  /* ===================================================================
     3) نصوص الواجهة (UI)
     =================================================================== */
  ui: {
    home: "الرئيسية",
    start: "ابدأ",
    continue: "تابع",
    next: "التالي",
    previous: "السابق",
    back: "رجوع",
    finish: "إنهاء",
    check: "تحقق",
    retry: "أعد المحاولة",
    units: "الوحدات",
    unit: "الوحدة",
    lesson: "الدرس",
    rules: "القواعد",
    rule: "القاعدة",
    examples: "أمثلة",
    example: "مثال",
    exercises: "التدريبات",
    bookExercises: "تطبيقات الكتاب",
    games: "الألعاب",
    evaluation: "التقويم",
    vocabulary: "المفردات",
    verbs: "الأفعال",
    nouns: "الأسماء",
    particles: "الحروف",
    question: "السؤال",
    of: "من",
    answer: "الإجابة",
    correctAnswer: "الإجابة الصحيحة",
    yourAnswer: "إجابتك",
    explanation: "التفسير",
    hint: "تلميح",
    score: "النتيجة",
    points: "نقاط",
    time: "الوقت",
    minutes: "دقيقة",
    result: "النتيجة النهائية",
    passed: "نجحت",
    failed: "لم تنجح",
    source: "المصدر",
    page: "صفحة",
    wrong: "الخطأ",
    right: "الصواب",
    reason: "التعليل",
    wasl: "همزة الوصل",
    qat: "همزة القطع",
    hamza: "الهمزة",
    alif: "الألف",
    verb: "فعل",
    noun: "اسم",
    particle: "حرف",
    pronoun: "ضمير",
    masdar: "مصدر",
    past: "ماض",
    imperative: "أمر",
    present: "مضارع",
    above: "فوق",
    below: "تحت",
    meaning: "المعنى",
    type: "النوع",
    correctMessages: ["أحسنت!", "ممتاز!", "إجابة صحيحة!", "بارك الله فيك!"],
    wrongMessages: ["حاول مرة أخرى", "ليست هذه الإجابة الصحيحة", "راجع القاعدة"],
    chooseCorrect: "اختر الإجابة الصحيحة",
    typeAnswer: "اكتب إجابتك هنا"
  },

  /* ===================================================================
     4) الوحدات والمواد
     Struktur: units[] -> sections[] -> (paragraphs, rules[], table)
     Contoh kata: { word: "tanpa harakat", harakat: "dengan harakat", note: "..." }
     =================================================================== */
  units: [

    /* ---------------------------------------------------------------
       الوحدة 1: الفرق بين الهمزة والألف (hlm. 15)
       --------------------------------------------------------------- */
    {
      id: "u1",
      order: 1,
      title: "الفرق بين الهمزة والألف",
      subtitle: "الهمزة في أول الكلمة",
      sourcePage: 15,
      sections: [
        {
          id: "u1s1",
          title: "تعريف الهمزة",
          paragraphs: [
            "الهمزة صوت يخرج من أقصى الحلق (الحنجرة)."
          ],
          rules: [
            {
              id: "u1s1r1",
              text: "تقع الهمزة في أول الكلمة ووسطها وآخرها.",
              examples: [
                { word: "أكرم", note: "في أول الكلمة" },
                { word: "سأل", note: "في وسط الكلمة" },
                { word: "بدأ", note: "في آخر الكلمة" }
              ]
            },
            {
              id: "u1s1r2",
              text: "الهمزة حرف يقبل جميع الحركات.",
              examples: [
                { word: "إنابة", note: "الهمزة المكسورة" },
                { word: "أنيب", note: "الهمزة المضمومة" },
                { word: "أناب", note: "الهمزة المفتوحة" }
              ]
            },
            {
              id: "u1s1r3",
              text: "ليس للهمزة صورة حرف خاص بها، بل يرمز لها برأس حرف عين صغيرة (ء)، وتكتب على ألف، أو واو، أو ياء، أو على السطر.",
              examples: [
                { word: "ء", note: "رأس عين صغيرة" }
              ]
            }
          ]
        },
        {
          id: "u1s2",
          title: "تعريف الألف",
          paragraphs: [
            "الألف هي امتداد صوتي ينشأ عن إشباع (إطالة) فتحة الحرف الذي قبلها، وتخرج من فراغ الفم."
          ],
          rules: [
            {
              id: "u1s2r1",
              text: "لا تقع الألف أول الكلمة، وإنما في وسطها أو آخرها.",
              examples: [
                { word: "نال", harakat: "نَالَ", note: "في وسط الكلمة" },
                { word: "سما", harakat: "سَمَا", note: "في آخر الكلمة" },
                { word: "سعى", harakat: "سَعَى", note: "ألف مقصورة في آخر الكلمة" }
              ]
            },
            {
              id: "u1s2r2",
              text: "لا تقبل الألف الحركات، بل هي (صوت) ساكن دائما.",
              examples: []
            },
            {
              id: "u1s2r3",
              text: "للألف صورة خاصة بها، وهي الألف القائمة (ا) أو المقصورة في نهاية بعض الكلمات (ى) من غير نقطتين.",
              examples: [
                { word: "ا", note: "الألف القائمة" },
                { word: "ى", note: "الألف المقصورة (من غير نقطتين)" }
              ]
            }
          ]
        },
        {
          id: "u1s3",
          title: "جدول المقارنة بين الهمزة والألف",
          paragraphs: [],
          rules: [],
          table: {
            columns: ["وجه المقارنة", "الهمزة", "الألف"],
            rows: [
              [
                "المخرج",
                "صوت يخرج من أقصى الحلق (الحنجرة)",
                "امتداد صوتي ينشأ عن إشباع (إطالة) فتحة الحرف الذي قبلها، وتخرج من فراغ الفم"
              ],
              [
                "موقعها في الكلمة",
                "تقع في أول الكلمة ووسطها وآخرها، مثل: أكرم، سأل، بدأ",
                "لا تقع أول الكلمة، وإنما في وسطها أو آخرها، مثل: نال، سما، سعى"
              ],
              [
                "الحركات",
                "حرف يقبل جميع الحركات، مثل: إنابة، أنيب، أناب",
                "لا تقبل الحركات، بل هي (صوت) ساكن دائما"
              ],
              [
                "الرسم",
                "ليس لها صورة حرف خاص بها، بل يرمز لها برأس عين صغيرة (ء)، وتكتب على ألف أو واو أو ياء أو على السطر",
                "لها صورة خاصة بها، وهي الألف القائمة (ا) أو المقصورة (ى) من غير نقطتين"
              ]
            ]
          }
        }
      ]
    },

    /* ---------------------------------------------------------------
       الوحدة 2: همزة الوصل (hlm. 16 dan 17)
       --------------------------------------------------------------- */
    {
      id: "u2",
      order: 2,
      title: "همزة الوصل",
      subtitle: "تعريفها وفائدتها ومواضعها",
      sourcePage: 16,
      sections: [
        {
          id: "u2s1",
          title: "تعريف همزة الوصل",
          paragraphs: [
            "همزة الوصل هي همزة يتوصل بها إلى النطق بالحرف الساكن.",
            "تظهر في النطق حين نبدأ بنطق الكلمة التي وقعت هذه الهمزة في أولها، وتختفي من النطق حين لا تقع هذه الكلمة في بداية النطق."
          ],
          rules: [
            {
              id: "u2s1r1",
              text: "الهمزة في (اجتهد) تظهر في النطق حين نقول: (اجتهد)، ولا تظهر حين نقول: (واجتهد، فاجتهد) بوصل الحرفين بالفعل في النطق.",
              examples: [
                { word: "اجتهد", harakat: "اجْتَهِدْ", note: "تظهر الهمزة في النطق" },
                { word: "واجتهد", harakat: "وَاجْتَهِدْ", note: "تسقط الهمزة في النطق" },
                { word: "فاجتهد", harakat: "فَاجْتَهِدْ", note: "تسقط الهمزة في النطق" }
              ]
            }
          ]
        },
        {
          id: "u2s2",
          title: "فائدة همزة الوصل",
          paragraphs: [],
          rules: [
            {
              id: "u2s2r1",
              text: "يجاء بهمزة الوصل في ابتداء الكلام نطقا لا كتابة لأجل التمكن من الوصول للنطق بالحرف الساكن الذي بعدها، لأنها لا توجد إلا في كلمات يكون أول حرف فيها ساكنا.",
              examples: []
            },
            {
              id: "u2s2r2",
              text: "العرب لا يبدؤون النطق بحرف ساكن.",
              examples: []
            },
            {
              id: "u2s2r3",
              text: "ولذلك تسقط همزة الوصل نطقا إذا سبق الحرف الساكن الذي في أول الكلمة حرف الفاء أو الواو مثلا، كما في: (واجتهد، فاجتهد)؛ لأن الحرف الساكن (الجيم) لم يعد الحرف الأول.",
              examples: [
                { word: "واجتهد", harakat: "وَاجْتَهِدْ" },
                { word: "فاجتهد", harakat: "فَاجْتَهِدْ" }
              ]
            }
          ]
        },
        {
          id: "u2s3",
          title: "مواضع همزة الوصل",
          sourcePage: 17,
          paragraphs: ["تكون همزة الوصل في:"],
          rules: [
            {
              id: "u2s3r1",
              text: "فعل الأمر من الفعل الثلاثي.",
              examples: [
                { word: "رسم - ارسم", harakat: "رَسَمَ - ارْسُمْ" },
                { word: "كتب - اكتب", harakat: "كَتَبَ - اكْتُبْ" },
                { word: "ذهب - اذهب", harakat: "ذَهَبَ - اذْهَبْ" }
              ]
            },
            {
              id: "u2s3r2",
              text: "الفعل الماضي والأمر والمصدر من الثلاثي المزيد بحرفين.",
              examples: [
                { word: "اجتمع", harakat: "اجْتَمَعَ", note: "ماض" },
                { word: "اجتمع", harakat: "اجْتَمِعْ", note: "أمر" },
                { word: "اجتماع", harakat: "اجْتِمَاع", note: "مصدر" }
              ]
            },
            {
              id: "u2s3r3",
              text: "الفعل الماضي والأمر والمصدر من الفعل الثلاثي المزيد بثلاثة حروف.",
              examples: [
                { word: "استثمر", harakat: "اسْتَثْمَرَ", note: "ماض" },
                { word: "استثمر", harakat: "اسْتَثْمِرْ", note: "أمر" },
                { word: "استثمار", harakat: "اسْتِثْمَار", note: "مصدر" }
              ]
            },
            {
              id: "u2s3r4",
              text: "في الأسماء الآتية: ابن، ابنة، امرؤ، امرأة، اسم (ومثناها)، اثنان، اثنتان.",
              examples: [
                { word: "ابن" },
                { word: "ابنة" },
                { word: "امرؤ" },
                { word: "امرأة" },
                { word: "اسم" },
                { word: "اثنان" },
                { word: "اثنتان" }
              ]
            },
            {
              id: "u2s3r5",
              text: "(أل) التعريف إذا اتصلت بالاسم.",
              examples: [
                { word: "الجامعة" },
                { word: "المكتبة" }
              ]
            }
          ]
        }
      ]
    },

    /* ---------------------------------------------------------------
       الوحدة 3: همزة القطع (hlm. 16 dan 17)
       --------------------------------------------------------------- */
    {
      id: "u3",
      order: 3,
      title: "همزة القطع",
      subtitle: "تعريفها ومواضعها",
      sourcePage: 16,
      sections: [
        {
          id: "u3s1",
          title: "تعريف همزة القطع",
          paragraphs: [
            "همزة القطع هي همزة تظهر في النطق حين نبدأ بنطق الكلمة التي وقعت هذه الهمزة في أولها، وتظهر أيضا في النطق حين تأتي هذه الكلمة في وسط الكلام المتصل."
          ],
          rules: [
            {
              id: "u3s1r1",
              text: "مثل: همزة (أقبل)، فهي تظهر في النطق حين نقول: (أقبل الناجح مسرورا)، وكذلك حين نقول: (الناجح أقبل مسرورا).",
              examples: [
                { word: "أقبل", harakat: "أَقْبَلَ", note: "الهمزة تظهر في أول الكلام وفي وسطه" }
              ]
            },
            {
              id: "u3s1r2",
              text: "همزة القطع لا تسقط من النطق لأنها متحركة دائما، فيكون هذا موافقا لقانون العرب، وهو عدم بدء النطق بحرف ساكن.",
              examples: []
            }
          ]
        },
        {
          id: "u3s2",
          title: "مواضع همزة القطع",
          sourcePage: 17,
          paragraphs: ["تكون همزة القطع في:"],
          rules: [
            {
              id: "u3s2r1",
              text: "الفعل الماضي ومصدره من الفعل الثلاثي المهموز.",
              examples: [
                { word: "أمن", harakat: "أَمِنَ" },
                { word: "أمن", harakat: "أَمْن" },
                { word: "أخذ", harakat: "أَخَذَ" },
                { word: "أخذ", harakat: "أَخْذ" }
              ]
            },
            {
              id: "u3s2r2",
              text: "الفعل الماضي وأمره ومصدره من الفعل الثلاثي المزيد بالهمزة في أوله.",
              examples: [
                { word: "أحسن", harakat: "أَحْسَنَ", note: "ماض" },
                { word: "أحسن", harakat: "أَحْسِنْ", note: "أمر" },
                { word: "إحسان", harakat: "إِحْسَان", note: "مصدر" }
              ]
            },
            {
              id: "u3s2r3",
              text: "جميع الحروف همزتها همزة قطع، عدا (أل) التعريف إذا اتصلت بالاسم.",
              examples: [
                { word: "أل" }, { word: "أم" }, { word: "أو" }, { word: "أن" },
                { word: "إن" }, { word: "ألا" }, { word: "إلى" }, { word: "أما" },
                { word: "أيا" }, { word: "إلا" }
              ]
            },
            {
              id: "u3s2r4",
              text: "جميع الأسماء همزتها همزة قطع، عدا الأسماء المستثناة في همزة الوصل. ومثلها الضمائر المبدوءة بهمزة.",
              examples: [
                { word: "أحمد", note: "اسم" },
                { word: "ابتسام", note: "اسم (كما ورد في الكتاب)" },
                { word: "إسماعيل", note: "اسم" },
                { word: "إفريقيا", note: "اسم" },
                { word: "أسبانيا", note: "اسم" },
                { word: "أنا", note: "ضمير" },
                { word: "أنت", note: "ضمير" },
                { word: "أنتم", note: "ضمير" },
                { word: "أنتما", note: "ضمير" },
                { word: "أنتن", note: "ضمير" },
                { word: "إياك", note: "ضمير" },
                { word: "إياكم", note: "ضمير" },
                { word: "إياكن", note: "ضمير" }
              ]
            },
            {
              id: "u3s2r5",
              text: "في كل فعل مبدوء بهمزة المضارعة، سواء أكان ثلاثيا مجردا أم مزيدا.",
              examples: [
                { word: "أحمد الله", harakat: "أَحْمَدُ اللهَ" },
                { word: "أستثمر", harakat: "أَسْتَثْمِرُ" },
                { word: "أستحسن", harakat: "أَسْتَحْسِنُ" }
              ]
            }
          ]
        }
      ]
    },

    /* ---------------------------------------------------------------
       الوحدة 4: رسم الهمزة والمقارنة والمراجعة
       --------------------------------------------------------------- */
    {
      id: "u4",
      order: 4,
      title: "رسم الهمزة والمقارنة بين الهمزتين",
      subtitle: "مراجعة وتطبيق",
      sourcePage: 19,
      sections: [
        {
          id: "u4s1",
          title: "الفرق بين همزة الوصل وهمزة القطع",
          paragraphs: [],
          rules: [],
          table: {
            columns: ["وجه المقارنة", "همزة الوصل", "همزة القطع"],
            rows: [
              [
                "التعريف",
                "همزة يتوصل بها إلى النطق بالحرف الساكن",
                "همزة تظهر في النطق في بداية الكلام وفي وسطه"
              ],
              [
                "في النطق",
                "تظهر حين نبدأ بنطق الكلمة، وتختفي حين لا تقع الكلمة في بداية النطق",
                "تظهر دائما في النطق، ولا تسقط"
              ],
              [
                "الحرف الذي بعدها",
                "لا توجد إلا في كلمات يكون أول حرف فيها ساكنا",
                "هي متحركة دائما"
              ],
              [
                "أمثلة",
                "اكتب، اجتمع، استثمر، ابن، المكتبة",
                "أخذ، أحسن، أحمد، أنا، أستثمر، إلى"
              ]
            ]
          }
        },
        {
          id: "u4s2",
          title: "موضع رسم همزة القطع",
          sourcePage: 19,
          paragraphs: [],
          rules: [
            {
              id: "u4s2r1",
              text: "توضع الهمزة فوق الألف إذا كانت همزة القطع مفتوحة.",
              examples: [{ word: "أَ", note: "مفتوحة: فوق الألف" }]
            },
            {
              id: "u4s2r2",
              text: "توضع الهمزة تحت الألف إذا كانت همزة القطع مكسورة.",
              examples: [{ word: "إِ", note: "مكسورة: تحت الألف" }]
            },
            {
              id: "u4s2r3",
              text: "توضع الهمزة فوق الألف إذا كانت همزة القطع مضمومة.",
              examples: [{ word: "أُ", note: "مضمومة: فوق الألف" }]
            }
          ]
        },
        {
          id: "u4s3",
          title: "رسم همزة الوصل",
          tambahan: true,
          paragraphs: [],
          rules: [
            {
              id: "u4s3r1",
              tambahan: true,
              text: "همزة الوصل تكتب ألفا (ا) من غير رأس عين صغيرة، أما همزة القطع فتكتب بالهمزة (أ، إ).",
              examples: [
                { word: "اكتب", note: "همزة وصل: ألف من غير همزة" },
                { word: "أكرم", note: "همزة قطع: ألف عليها همزة" }
              ]
            }
          ]
        }
      ]
    }
  ],

  /* ===================================================================
     5) المفردات العامة (isim dan fi'il)
     Field:
       word    = kata tanpa harakat
       harakat = kata dengan harakat (boleh kosong)
       form    = bentuk (ماض / أمر / مضارع / مصدر / اسم / ضمير)
       hamzah  = "وصل" | "قطع" | null (tidak ada hamzah)
       arti    = arti Indonesia (tambahan, bukan dari kitab)
       unit    = id unit terkait
     =================================================================== */
  vocabulary: {
    verbs: [
      { id: "v01", word: "كتب", harakat: "كَتَبَ", form: "ماض", hamzah: null, arti: "menulis", unit: "u2" },
      { id: "v02", word: "اكتب", harakat: "اكْتُبْ", form: "أمر", hamzah: "وصل", arti: "tulislah", unit: "u2", reason: "فعل أمر من الفعل الثلاثي" },
      { id: "v03", word: "رسم", harakat: "رَسَمَ", form: "ماض", hamzah: null, arti: "menggambar", unit: "u2" },
      { id: "v04", word: "ارسم", harakat: "ارْسُمْ", form: "أمر", hamzah: "وصل", arti: "gambarlah", unit: "u2", reason: "فعل أمر من الفعل الثلاثي" },
      { id: "v05", word: "ذهب", harakat: "ذَهَبَ", form: "ماض", hamzah: null, arti: "pergi", unit: "u2" },
      { id: "v06", word: "اذهب", harakat: "اذْهَبْ", form: "أمر", hamzah: "وصل", arti: "pergilah", unit: "u2", reason: "فعل أمر من الفعل الثلاثي" },
      { id: "v07", word: "اجتمع", harakat: "اجْتَمَعَ", form: "ماض", hamzah: "وصل", arti: "berkumpul", unit: "u2", reason: "ماض من الثلاثي المزيد بحرفين" },
      { id: "v08", word: "اجتهد", harakat: "اجْتَهِدْ", form: "أمر", hamzah: "وصل", arti: "bersungguh-sungguhlah", unit: "u2", reason: "أمر من الثلاثي المزيد بحرفين" },
      { id: "v09", word: "استثمر", harakat: "اسْتَثْمَرَ", form: "ماض", hamzah: "وصل", arti: "memanfaatkan / berinvestasi", unit: "u2", reason: "ماض من الثلاثي المزيد بثلاثة حروف" },
      { id: "v10", word: "استغفر", harakat: "اسْتَغْفَرَ", form: "ماض", hamzah: "وصل", arti: "memohon ampun", unit: "u4", reason: "من الثلاثي المزيد بثلاثة حروف" },
      { id: "v11", word: "استعان", harakat: "اسْتَعَانَ", form: "ماض", hamzah: "وصل", arti: "memohon pertolongan", unit: "u4", reason: "من الثلاثي المزيد بثلاثة حروف" },
      { id: "v12", word: "انتقل", harakat: "انْتَقَلَ", form: "ماض", hamzah: "وصل", arti: "berpindah", unit: "u4", reason: "ماض من الثلاثي المزيد بحرفين" },
      { id: "v13", word: "اختبر", harakat: "اخْتَبِرْ", form: "أمر", hamzah: "وصل", arti: "ujilah", unit: "u4", reason: "أمر من الثلاثي المزيد بحرفين" },
      { id: "v14", word: "اصبر", harakat: "اصْبِرْ", form: "أمر", hamzah: "وصل", arti: "bersabarlah", unit: "u4", reason: "فعل أمر من الفعل الثلاثي" },
      { id: "v15", word: "أمن", harakat: "أَمِنَ", form: "ماض", hamzah: "قطع", arti: "merasa aman", unit: "u3", reason: "ماض من الثلاثي المهموز" },
      { id: "v16", word: "أخذ", harakat: "أَخَذَ", form: "ماض", hamzah: "قطع", arti: "mengambil", unit: "u3", reason: "ماض من الثلاثي المهموز" },
      { id: "v17", word: "أحسن", harakat: "أَحْسَنَ", form: "ماض", hamzah: "قطع", arti: "berbuat baik", unit: "u3", reason: "ماض من الثلاثي المزيد بالهمزة في أوله" },
      { id: "v18", word: "أكرم", harakat: "أَكْرَمَ", form: "ماض", hamzah: "قطع", arti: "memuliakan", unit: "u3", reason: "ماض من الثلاثي المزيد بالهمزة في أوله" },
      { id: "v19", word: "أقبل", harakat: "أَقْبَلَ", form: "ماض", hamzah: "قطع", arti: "datang menghadap", unit: "u3", reason: "ماض من الثلاثي المزيد بالهمزة في أوله" },
      { id: "v20", word: "أرسل", harakat: "أَرْسَلَ", form: "ماض", hamzah: "قطع", arti: "mengutus", unit: "u4", reason: "ماض من الثلاثي المزيد بالهمزة في أوله" },
      { id: "v21", word: "أطاع", harakat: "أَطَاعَ", form: "ماض", hamzah: "قطع", arti: "menaati", unit: "u4", reason: "ماض من الثلاثي المزيد بالهمزة في أوله" },
      { id: "v22", word: "آمن", harakat: "آمَنَ", form: "ماض", hamzah: "قطع", arti: "beriman", unit: "u4", reason: "ماض من الثلاثي المزيد بالهمزة في أوله" },
      { id: "v23", word: "أناب", harakat: "أَنَابَ", form: "ماض", hamzah: "قطع", arti: "kembali (bertobat)", unit: "u1", reason: "ماض مبدوء بهمزة" },
      { id: "v24", word: "أحمد", harakat: "أَحْمَدُ", form: "مضارع", hamzah: "قطع", arti: "aku memuji", unit: "u3", reason: "مبدوء بهمزة المضارعة" },
      { id: "v25", word: "أستثمر", harakat: "أَسْتَثْمِرُ", form: "مضارع", hamzah: "قطع", arti: "aku berinvestasi", unit: "u3", reason: "مبدوء بهمزة المضارعة" },
      { id: "v26", word: "أستحسن", harakat: "أَسْتَحْسِنُ", form: "مضارع", hamzah: "قطع", arti: "aku menganggap baik", unit: "u3", reason: "مبدوء بهمزة المضارعة" },
      { id: "v27", word: "سأل", harakat: "سَأَلَ", form: "ماض", hamzah: "قطع", arti: "bertanya", unit: "u1", reason: "الهمزة في وسط الكلمة" },
      { id: "v28", word: "بدأ", harakat: "بَدَأَ", form: "ماض", hamzah: "قطع", arti: "memulai", unit: "u1", reason: "الهمزة في آخر الكلمة" },
      { id: "v29", word: "نال", harakat: "نَالَ", form: "ماض", hamzah: null, arti: "memperoleh", unit: "u1", reason: "فيه ألف وليس فيه همزة" },
      { id: "v30", word: "سما", harakat: "سَمَا", form: "ماض", hamzah: null, arti: "menjulang tinggi", unit: "u1", reason: "فيه ألف وليس فيه همزة" },
      { id: "v31", word: "سعى", harakat: "سَعَى", form: "ماض", hamzah: null, arti: "berusaha", unit: "u1", reason: "فيه ألف مقصورة وليس فيه همزة" }
    ],

    nouns: [
      { id: "n01", word: "ابن", form: "اسم", hamzah: "وصل", arti: "anak laki-laki", unit: "u2", reason: "من الأسماء المستثناة" },
      { id: "n02", word: "ابنة", form: "اسم", hamzah: "وصل", arti: "anak perempuan", unit: "u2", reason: "من الأسماء المستثناة" },
      { id: "n03", word: "امرؤ", form: "اسم", hamzah: "وصل", arti: "seorang laki-laki", unit: "u2", reason: "من الأسماء المستثناة" },
      { id: "n04", word: "امرأة", form: "اسم", hamzah: "وصل", arti: "seorang perempuan", unit: "u2", reason: "من الأسماء المستثناة" },
      { id: "n05", word: "اسم", form: "اسم", hamzah: "وصل", arti: "nama", unit: "u2", reason: "من الأسماء المستثناة" },
      { id: "n06", word: "اثنان", form: "اسم", hamzah: "وصل", arti: "dua (laki-laki)", unit: "u2", reason: "من الأسماء المستثناة" },
      { id: "n07", word: "اثنتان", form: "اسم", hamzah: "وصل", arti: "dua (perempuan)", unit: "u2", reason: "من الأسماء المستثناة" },
      { id: "n08", word: "الجامعة", form: "اسم", hamzah: "وصل", arti: "universitas", unit: "u2", reason: "همزة أل التعريف" },
      { id: "n09", word: "المكتبة", form: "اسم", hamzah: "وصل", arti: "perpustakaan", unit: "u2", reason: "همزة أل التعريف" },
      { id: "n10", word: "اجتماع", harakat: "اجْتِمَاع", form: "مصدر", hamzah: "وصل", arti: "pertemuan", unit: "u2", reason: "مصدر من الثلاثي المزيد بحرفين" },
      { id: "n11", word: "استثمار", harakat: "اسْتِثْمَار", form: "مصدر", hamzah: "وصل", arti: "investasi", unit: "u2", reason: "مصدر من الثلاثي المزيد بثلاثة حروف" },
      { id: "n12", word: "اختبار", harakat: "اخْتِبَار", form: "مصدر", hamzah: "وصل", arti: "ujian", unit: "u4", reason: "مصدر من الثلاثي المزيد بحرفين" },
      { id: "n13", word: "إحسان", harakat: "إِحْسَان", form: "مصدر", hamzah: "قطع", arti: "kebaikan", unit: "u3", reason: "مصدر من الثلاثي المزيد بالهمزة في أوله" },
      { id: "n14", word: "إكرام", harakat: "إِكْرَام", form: "مصدر", hamzah: "قطع", arti: "pemuliaan", unit: "u4", reason: "مصدر من الثلاثي المزيد بالهمزة في أوله" },
      { id: "n15", word: "إنابة", form: "مصدر", hamzah: "قطع", arti: "kembali (bertobat)", unit: "u1", reason: "همزة مكسورة في أول الكلمة" },
      { id: "n16", word: "أمن", harakat: "أَمْن", form: "مصدر", hamzah: "قطع", arti: "keamanan", unit: "u3", reason: "مصدر من الثلاثي المهموز" },
      { id: "n17", word: "أخذ", harakat: "أَخْذ", form: "مصدر", hamzah: "قطع", arti: "pengambilan", unit: "u3", reason: "مصدر من الثلاثي المهموز" },
      { id: "n18", word: "أنثى", form: "اسم", hamzah: "قطع", arti: "perempuan (betina)", unit: "u4", reason: "اسم، وجميع الأسماء همزتها قطع إلا المستثنى" },
      { id: "n19", word: "أحمد", form: "اسم", hamzah: "قطع", arti: "Ahmad", unit: "u3", reason: "اسم" },
      { id: "n20", word: "ابتسام", form: "اسم", hamzah: "قطع", arti: "Ibtisam", unit: "u3", reason: "ورد في الكتاب مثالا للأسماء التي همزتها قطع", catatan: "sesuai kitab" },
      { id: "n21", word: "إسماعيل", form: "اسم", hamzah: "قطع", arti: "Ismail", unit: "u3", reason: "اسم" },
      { id: "n22", word: "إفريقيا", form: "اسم", hamzah: "قطع", arti: "Afrika", unit: "u3", reason: "اسم" },
      { id: "n23", word: "أسبانيا", form: "اسم", hamzah: "قطع", arti: "Spanyol", unit: "u3", reason: "اسم" },
      { id: "n24", word: "أنا", form: "ضمير", hamzah: "قطع", arti: "saya", unit: "u3", reason: "ضمير مبدوء بهمزة" },
      { id: "n25", word: "أنت", form: "ضمير", hamzah: "قطع", arti: "kamu", unit: "u3", reason: "ضمير مبدوء بهمزة" },
      { id: "n26", word: "أنتم", form: "ضمير", hamzah: "قطع", arti: "kalian (laki-laki)", unit: "u3", reason: "ضمير مبدوء بهمزة" },
      { id: "n27", word: "إياك", form: "ضمير", hamzah: "قطع", arti: "hanya kepada-Mu / kepadamu", unit: "u3", reason: "ضمير مبدوء بهمزة" },
      { id: "n28", word: "الأديان", form: "اسم", hamzah: "قطع", arti: "agama-agama", unit: "u4", reason: "اسم همزته قطع (وهمزة أل وصل)" },
      { id: "n29", word: "الإخاء", form: "اسم", hamzah: "قطع", arti: "persaudaraan", unit: "u4", reason: "اسم همزته قطع" },
      { id: "n30", word: "إشعار", form: "مصدر", hamzah: "قطع", arti: "pemberitahuan", unit: "u4", reason: "مصدر من الفعل المزيد بالهمزة" },
      { id: "n31", word: "إظهار", form: "مصدر", hamzah: "قطع", arti: "penampakan", unit: "u4", reason: "مصدر من الفعل المزيد بالهمزة" },
      { id: "n32", word: "ألفاظ", form: "اسم", hamzah: "قطع", arti: "kata-kata", unit: "u4", reason: "اسم همزته قطع" },
      { id: "n33", word: "الإعزاز", form: "مصدر", hamzah: "قطع", arti: "penghormatan", unit: "u4", reason: "مصدر من الفعل المزيد بالهمزة" }
    ],

    particles: [
      { id: "p01", word: "أن", hamzah: "قطع", arti: "bahwa", unit: "u3" },
      { id: "p02", word: "إن", hamzah: "قطع", arti: "sesungguhnya / jika", unit: "u3" },
      { id: "p03", word: "أو", hamzah: "قطع", arti: "atau", unit: "u3" },
      { id: "p04", word: "أم", hamzah: "قطع", arti: "ataukah", unit: "u3" },
      { id: "p05", word: "إلى", hamzah: "قطع", arti: "ke / kepada", unit: "u3" },
      { id: "p06", word: "إلا", hamzah: "قطع", arti: "kecuali", unit: "u3" },
      { id: "p07", word: "ألا", hamzah: "قطع", arti: "ingatlah / ketahuilah", unit: "u3" },
      { id: "p08", word: "أما", hamzah: "قطع", arti: "adapun", unit: "u3" },
      { id: "p09", word: "أيا", hamzah: "قطع", arti: "wahai", unit: "u3" }
    ]
  },

  /* ===================================================================
     6) أسئلة التدريب
     Format:
       choices : daftar pilihan (urutan array)
       answer  : nomor pilihan benar, MULAI DARI 0
                 (0 = pilihan pertama, 1 = kedua, dst.)
       explanation : feedback yang muncul setelah menjawab
     =================================================================== */
  questions: [

    /* ---- الوحدة 1 ---- */
    {
      id: "u1q1", unit: "u1", section: "u1s1", type: "mcq",
      question: "الهمزة صوت يخرج من:",
      choices: ["أقصى الحلق (الحنجرة)", "فراغ الفم", "الشفتين", "وسط اللسان"],
      answer: 0,
      explanation: "الهمزة صوت يخرج من أقصى الحلق (الحنجرة)، أما الألف فتخرج من فراغ الفم."
    },
    {
      id: "u1q2", unit: "u1", section: "u1s2", type: "mcq",
      question: "أي الحرفين لا يقع في أول الكلمة؟",
      choices: ["الهمزة", "الألف", "كلاهما", "لا واحد منهما"],
      answer: 1,
      explanation: "لا تقع الألف أول الكلمة، وإنما في وسطها أو آخرها، أما الهمزة فتقع في أول الكلمة ووسطها وآخرها."
    },
    {
      id: "u1q3", unit: "u1", section: "u1s1", type: "mcq",
      question: "أي الحرفين يقبل جميع الحركات؟",
      choices: ["الألف", "الهمزة", "الألف والهمزة معا", "لا واحد منهما"],
      answer: 1,
      explanation: "الهمزة حرف يقبل جميع الحركات، مثل: إنابة، أنيب، أناب. أما الألف فلا تقبل الحركات."
    },
    {
      id: "u1q4", unit: "u1", section: "u1s2", type: "mcq",
      question: "الألف صوت:",
      choices: ["متحرك دائما", "ساكن دائما", "يقبل الفتح فقط", "يقبل الكسر والضم فقط"],
      answer: 1,
      explanation: "الألف لا تقبل الحركات، بل هي صوت ساكن دائما."
    },
    {
      id: "u1q5", unit: "u1", section: "u1s2", type: "mcq",
      question: "في أي كلمة تقع الألف في وسطها؟",
      choices: ["أكرم", "سأل", "نال", "بدأ"],
      answer: 2,
      explanation: "في كلمة (نال) ألف في وسط الكلمة. أما أكرم وسأل وبدأ ففيها همزة."
    },
    {
      id: "u1q6", unit: "u1", section: "u1s1", type: "mcq",
      question: "يرمز للهمزة برأس حرف:",
      choices: ["صاد صغيرة", "عين صغيرة", "نون صغيرة", "ألف صغيرة"],
      answer: 1,
      explanation: "يرمز للهمزة برأس حرف عين صغيرة (ء)، وتكتب على ألف أو واو أو ياء أو على السطر."
    },
    {
      id: "u1q7", unit: "u1", section: "u1s1", type: "mcq",
      question: "في أي كلمة تقع الهمزة في آخرها؟",
      choices: ["سما", "نال", "بدأ", "سعى"],
      answer: 2,
      explanation: "في كلمة (بدأ) تقع الهمزة في آخر الكلمة. أما سما ونال وسعى ففيها ألف."
    },
    {
      id: "u1q8", unit: "u1", section: "u1s1", type: "mcq",
      question: "الكلمات (إنابة، أنيب، أناب) تدل على أن الهمزة:",
      choices: ["تقبل جميع الحركات", "ساكنة دائما", "لا تقع في أول الكلمة", "لها صورة الألف القائمة فقط"],
      answer: 0,
      explanation: "الهمزة مكسورة في إنابة، ومضمومة في أنيب، ومفتوحة في أناب؛ فهي تقبل جميع الحركات."
    },

    /* ---- الوحدة 2 ---- */
    {
      id: "u2q1", unit: "u2", section: "u2s1", type: "mcq",
      question: "همزة الوصل يتوصل بها إلى النطق بـ:",
      choices: ["الحرف الساكن", "الحرف المتحرك", "حرف العلة فقط", "الحرف المشدد فقط"],
      answer: 0,
      explanation: "همزة الوصل يتوصل بها إلى النطق بالحرف الساكن."
    },
    {
      id: "u2q2", unit: "u2", section: "u2s2", type: "mcq",
      question: "العرب لا يبدؤون النطق بـ:",
      choices: ["حرف متحرك", "حرف ساكن", "حرف حلقي", "حرف مشدد"],
      answer: 1,
      explanation: "العرب لا يبدؤون النطق بحرف ساكن، ولذلك جيء بهمزة الوصل."
    },
    {
      id: "u2q3", unit: "u2", section: "u2s2", type: "mcq",
      question: "تسقط همزة الوصل نطقا في (فاجتهد) لأن:",
      choices: ["الكلمة اسم", "الهمزة متحركة", "الحرف الساكن لم يعد الحرف الأول", "الفاء حرف جر"],
      answer: 2,
      explanation: "تسقط همزة الوصل نطقا لأن الحرف الساكن (الجيم) لم يعد الحرف الأول بعد دخول الفاء."
    },
    {
      id: "u2q4", unit: "u2", section: "u2s3", type: "mcq",
      question: "أي الأسماء الآتية همزته همزة وصل؟",
      choices: ["أحمد", "امرأة", "إسماعيل", "أسبانيا"],
      answer: 1,
      explanation: "امرأة من الأسماء التي همزتها وصل: ابن، ابنة، امرؤ، امرأة، اسم، اثنان، اثنتان."
    },
    {
      id: "u2q5", unit: "u2", section: "u2s3", type: "mcq",
      question: "فعل الأمر من الفعل الثلاثي (كتب) هو (اكتب)، وهمزته:",
      choices: ["همزة وصل", "همزة قطع", "لا همزة فيه"],
      answer: 0,
      explanation: "همزة فعل الأمر من الفعل الثلاثي همزة وصل، مثل: ارسم، اكتب، اذهب."
    },
    {
      id: "u2q6", unit: "u2", section: "u2s3", type: "mcq",
      question: "همزة (أل) التعريف في كلمة (المكتبة) همزة:",
      choices: ["قطع", "وصل"],
      answer: 1,
      explanation: "همزة (أل) التعريف إذا اتصلت بالاسم همزة وصل."
    },
    {
      id: "u2q7", unit: "u2", section: "u2s3", type: "mcq",
      question: "الفعل (استثمر) ومصدره (استثمار) من الثلاثي المزيد بثلاثة حروف، وهمزتهما:",
      choices: ["وصل", "قطع"],
      answer: 0,
      explanation: "الفعل الماضي والأمر والمصدر من الثلاثي المزيد بثلاثة حروف همزتها وصل."
    },
    {
      id: "u2q8", unit: "u2", section: "u2s3", type: "mcq",
      question: "أي الأسماء الآتية ليس من أسماء همزة الوصل؟",
      choices: ["ابن", "اسم", "اثنان", "إفريقيا"],
      answer: 3,
      explanation: "إفريقيا اسم عادي همزته قطع، أما ابن واسم واثنان فمن الأسماء المستثناة التي همزتها وصل."
    },
    {
      id: "u2q9", unit: "u2", section: "u2s3", type: "mcq",
      question: "(اجتماع) مصدر من الثلاثي المزيد بحرفين، وهمزته:",
      choices: ["قطع", "وصل"],
      answer: 1,
      explanation: "الفعل الماضي والأمر والمصدر من الثلاثي المزيد بحرفين همزتها وصل: اجتمع، اجتمع، اجتماع."
    },

    /* ---- الوحدة 3 ---- */
    {
      id: "u3q1", unit: "u3", section: "u3s1", type: "mcq",
      question: "همزة القطع تظهر في النطق:",
      choices: ["في بداية الكلام فقط", "في بداية الكلام ووسطه", "في وسط الكلام فقط", "لا تظهر أبدا"],
      answer: 1,
      explanation: "تظهر همزة القطع في النطق حين نبدأ بالكلمة، وحين تأتي الكلمة في وسط الكلام المتصل."
    },
    {
      id: "u3q2", unit: "u3", section: "u3s1", type: "mcq",
      question: "لا تسقط همزة القطع من النطق لأنها:",
      choices: ["ساكنة دائما", "متحركة دائما", "في آخر الكلمة", "حرف علة"],
      answer: 1,
      explanation: "همزة القطع متحركة دائما، فلا تسقط من النطق، وهذا موافق لقانون العرب في عدم بدء النطق بساكن."
    },
    {
      id: "u3q3", unit: "u3", section: "u3s2", type: "mcq",
      question: "الفعل (أكرم) همزته همزة قطع لأنه:",
      choices: ["فعل ثلاثي مزيد بالهمزة في أوله", "فعل أمر من ثلاثي", "اسم مثنى", "مصدر ثلاثي"],
      answer: 0,
      explanation: "الفعل الماضي من الثلاثي المزيد بالهمزة في أوله همزته قطع، مثل: أحسن، أكرم."
    },
    {
      id: "u3q4", unit: "u3", section: "u3s2", type: "mcq",
      question: "جميع الحروف همزتها همزة قطع، عدا:",
      choices: ["أل التعريف إذا اتصلت بالاسم", "إلى", "أو", "إن"],
      answer: 0,
      explanation: "جميع الحروف همزتها قطع، عدا (أل) التعريف إذا اتصلت بالاسم فهمزتها وصل."
    },
    {
      id: "u3q5", unit: "u3", section: "u3s2", type: "mcq",
      question: "الضمير (أنا) همزته:",
      choices: ["وصل", "قطع"],
      answer: 1,
      explanation: "الضمائر المبدوءة بهمزة همزتها قطع، مثل: أنا، أنت، أنتم، إياك."
    },
    {
      id: "u3q6", unit: "u3", section: "u3s2", type: "mcq",
      question: "الفعل المضارع (أستثمر) همزته قطع لأنه:",
      choices: ["مبدوء بهمزة المضارعة", "فعل أمر", "اسم", "مصدر"],
      answer: 0,
      explanation: "كل فعل مبدوء بهمزة المضارعة همزته قطع، سواء أكان ثلاثيا مجردا أم مزيدا."
    },
    {
      id: "u3q7", unit: "u3", section: "u3s2", type: "mcq",
      question: "(إحسان) مصدر من (أحسن)، وهمزته:",
      choices: ["قطع", "وصل"],
      answer: 0,
      explanation: "المصدر من الثلاثي المزيد بالهمزة في أوله همزته قطع: أحسن، أحسن، إحسان."
    },
    {
      id: "u3q8", unit: "u3", section: "u3s2", type: "mcq",
      question: "أي الكلمات الآتية همزتها همزة قطع؟",
      choices: ["اكتب", "ابن", "أخذ", "اجتمع"],
      answer: 2,
      explanation: "أخذ فعل ماض من الثلاثي المهموز، فهمزته قطع. أما اكتب وابن واجتمع فهمزتها وصل."
    },

    /* ---- الوحدة 4 ---- */
    {
      id: "u4q1", unit: "u4", section: "u4s2", type: "mcq",
      question: "توضع الهمزة في همزة القطع المفتوحة:",
      choices: ["فوق الألف", "تحت الألف"],
      answer: 0,
      explanation: "توضع الهمزة فوق الألف إذا كانت همزة القطع مفتوحة."
    },
    {
      id: "u4q2", unit: "u4", section: "u4s2", type: "mcq",
      question: "توضع الهمزة في همزة القطع المكسورة:",
      choices: ["فوق الألف", "تحت الألف"],
      answer: 1,
      explanation: "توضع الهمزة تحت الألف إذا كانت همزة القطع مكسورة."
    },
    {
      id: "u4q3", unit: "u4", section: "u4s2", type: "mcq",
      question: "توضع الهمزة في همزة القطع المضمومة:",
      choices: ["تحت الألف", "فوق الألف"],
      answer: 1,
      explanation: "توضع الهمزة فوق الألف إذا كانت همزة القطع مضمومة."
    },
    {
      id: "u4q4", unit: "u4", section: "u4s1", type: "mcq",
      question: "الفعل (استغفروا) في قوله تعالى: «فقلت استغفروا ربكم» همزته:",
      choices: ["وصل", "قطع"],
      answer: 0,
      explanation: "استغفروا فعل أمر من الثلاثي المزيد بثلاثة حروف، فهمزته وصل."
    },
    {
      id: "u4q5", unit: "u4", section: "u4s1", type: "mcq",
      question: "الفعل (أطيعوا) في قوله تعالى: «وأطيعوا الله ورسوله» همزته:",
      choices: ["وصل", "قطع"],
      answer: 1,
      explanation: "أطيعوا فعل أمر من الفعل المزيد بالهمزة في أوله (أطاع)، فهمزته قطع."
    },
    {
      id: "u4q6", unit: "u4", section: "u4s1", type: "mcq",
      question: "كلمة (أنثى) في قوله تعالى: «من ذكر أو أنثى» همزتها:",
      choices: ["وصل", "قطع"],
      answer: 1,
      explanation: "أنثى اسم، وجميع الأسماء همزتها قطع عدا الأسماء المستثناة في همزة الوصل."
    },
    {
      id: "u4q7", unit: "u4", section: "u4s1", type: "mcq",
      question: "فعل الأمر من المصدر (إكرام) هو (أكرم)، وهمزته:",
      choices: ["وصل", "قطع"],
      answer: 1,
      explanation: "أكرم فعل أمر من الثلاثي المزيد بالهمزة في أوله، فهمزته قطع."
    },
    {
      id: "u4q8", unit: "u4", section: "u4s2", type: "mcq",
      question: "ما الصواب في الجملة: «يوم الخروج من الزمن ... زمن»؟",
      choices: ["إلى", "الى", "ألى", "إلي"],
      answer: 0,
      explanation: "إلى حرف، وجميع الحروف همزتها قطع، فتكتب (إلى) بهمزة تحت الألف."
    },
    {
      id: "u4q9", unit: "u4", section: "u4s1", type: "mcq",
      question: "(ارسم) فعل أمر من (رسم)، وهمزته:",
      choices: ["قطع", "وصل"],
      answer: 1,
      explanation: "فعل الأمر من الفعل الثلاثي همزته وصل، مثل: ارسم، اكتب، اذهب."
    }
  ],

  /* ===================================================================
     7) تطبيقات الكتاب (hlm. 18 – 21)
     =================================================================== */
  bookExercises: {

    /* ---- التطبيق 1 (hlm. 18): jawaban terbuka ---- */
    ex1: {
      id: "ex1",
      sourcePage: 18,
      title: "التطبيق الأول",
      prompt: "وضح الفرق بين الهمزة والألف؟",
      modelAnswer: {
        hamza: [
          "صوت يخرج من أقصى الحلق (الحنجرة).",
          "تقع في أول الكلمة ووسطها وآخرها، مثل: أكرم، سأل، بدأ.",
          "حرف يقبل جميع الحركات، مثل: إنابة، أنيب، أناب.",
          "ليس لها صورة حرف خاص بها، بل يرمز لها برأس عين صغيرة (ء)، وتكتب على ألف أو واو أو ياء أو على السطر."
        ],
        alif: [
          "امتداد صوتي ينشأ عن إشباع (إطالة) فتحة الحرف الذي قبلها، وتخرج من فراغ الفم.",
          "لا تقع أول الكلمة، وإنما في وسطها أو آخرها، مثل: نال، سما، سعى.",
          "لا تقبل الحركات، بل هي (صوت) ساكن دائما.",
          "لها صورة خاصة بها، وهي الألف القائمة (ا) أو المقصورة (ى) من غير نقطتين."
        ]
      }
    },

    /* ---- التطبيق 2 (hlm. 19): ayat dan jenis hamzah ---- */
    ex2: {
      id: "ex2",
      sourcePage: 19,
      title: "التطبيق الثاني",
      prompt: "بين نوع الهمزة في الكلمات الملونة في الآيات الآتية، قال الله تعالى:",
      items: [
        {
          id: "ex2i1",
          verse: "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ",
          ref: "القلم: 4",
          targets: [
            { word: "إنك", type: "قطع", reason: "إن حرف، وجميع الحروف همزتها همزة قطع." }
          ]
        },
        {
          id: "ex2i2",
          verse: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ",
          ref: "الأنبياء: 107",
          targets: [
            { word: "أرسلناك", type: "قطع", reason: "فعل ماض من الثلاثي المزيد بالهمزة في أوله." },
            { word: "إلا", type: "قطع", reason: "حرف، وجميع الحروف همزتها همزة قطع." }
          ]
        },
        {
          id: "ex2i3",
          verse: "فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا",
          ref: "نوح: 10",
          targets: [
            { word: "استغفروا", type: "وصل", reason: "فعل أمر من الثلاثي المزيد بثلاثة حروف." },
            { word: "إنه", type: "قطع", reason: "إن حرف، وجميع الحروف همزتها همزة قطع." }
          ]
        },
        {
          id: "ex2i4",
          verse: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
          ref: "البقرة: 153",
          targets: [
            { word: "آمنوا", type: "قطع", reason: "فعل ماض من الثلاثي المزيد بالهمزة في أوله." },
            { word: "استعينوا", type: "وصل", reason: "فعل أمر من الثلاثي المزيد بثلاثة حروف." },
            { word: "إن", type: "قطع", reason: "حرف، وجميع الحروف همزتها همزة قطع." }
          ]
        },
        {
          id: "ex2i5",
          verse: "مَنْ عَمِلَ صَالِحًا مِنْ ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً",
          ref: "النحل: 97",
          targets: [
            { word: "أنثى", type: "قطع", reason: "اسم، وجميع الأسماء همزتها قطع عدا الأسماء المستثناة." }
          ]
        },
        {
          id: "ex2i6",
          verse: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُمْ بِذِكْرِ اللَّهِ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
          ref: "الرعد: 28",
          targets: [
            { word: "آمنوا", type: "قطع", reason: "فعل ماض من الثلاثي المزيد بالهمزة في أوله." },
            { word: "ألا", type: "قطع", reason: "حرف، وجميع الحروف همزتها همزة قطع." }
          ]
        },
        {
          id: "ex2i7",
          verse: "وَأَطِيعُوا اللَّهَ وَرَسُولَهُ وَلَا تَنَازَعُوا فَتَفْشَلُوا وَتَذْهَبَ رِيحُكُمْ وَاصْبِرُوا إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
          ref: "الأنفال: 46",
          targets: [
            { word: "أطيعوا", type: "قطع", reason: "فعل أمر من الفعل المزيد بالهمزة في أوله (أطاع)." },
            { word: "اصبروا", type: "وصل", reason: "فعل أمر من الفعل الثلاثي (صبر)." },
            { word: "إن", type: "قطع", reason: "حرف، وجميع الحروف همزتها همزة قطع." }
          ]
        }
      ]
    },

    /* ---- التطبيق 3 (hlm. 19): pilih kata yang benar ---- */
    ex3: {
      id: "ex3",
      sourcePage: 19,
      title: "التطبيق الثالث",
      prompt: "اختر الكلمة الصحيحة مما بين القوسين في الآتي:",
      items: [
        {
          id: "ex3i1",
          before: "توضع الهمزة",
          after: "الألف إذا كانت همزة القطع مفتوحة.",
          choices: ["تحت", "فوق"],
          answer: 1,
          explanation: "همزة القطع المفتوحة توضع فوق الألف."
        },
        {
          id: "ex3i2",
          before: "توضع الهمزة",
          after: "الألف إذا كانت همزة القطع مكسورة.",
          choices: ["تحت", "فوق"],
          answer: 0,
          explanation: "همزة القطع المكسورة توضع تحت الألف."
        },
        {
          id: "ex3i3",
          before: "توضع الهمزة",
          after: "الألف إذا كانت همزة القطع مضمومة.",
          choices: ["تحت", "فوق"],
          answer: 1,
          explanation: "همزة القطع المضمومة توضع فوق الألف."
        }
      ]
    },

    /* ---- التطبيق 4 (hlm. 20): fi'il amr dari mashdar ---- */
    ex4: {
      id: "ex4",
      sourcePage: 20,
      title: "التطبيق الرابع",
      prompt: "هات أفعال الأمر من المصادر الآتية، ثم بين أنواع همزاتها، مع التعليل:",
      rows: [
        {
          id: "ex4r1",
          masdar: "استثمار", masdarHarakat: "اسْتِثْمَار",
          amr: "استثمر", amrHarakat: "اسْتَثْمِرْ",
          type: "وصل",
          reason: "لأنه فعل أمر من الفعل الثلاثي المزيد بثلاثة حروف."
        },
        {
          id: "ex4r2",
          masdar: "رسم", masdarHarakat: "رَسْم",
          amr: "ارسم", amrHarakat: "ارْسُمْ",
          type: "وصل",
          reason: "لأنه فعل أمر من الفعل الثلاثي."
        },
        {
          id: "ex4r3",
          masdar: "إكرام", masdarHarakat: "إِكْرَام",
          amr: "أكرم", amrHarakat: "أَكْرِمْ",
          type: "قطع",
          reason: "لأنه فعل أمر من الفعل الثلاثي المزيد بالهمزة في أوله."
        },
        {
          id: "ex4r4",
          masdar: "اختبار", masdarHarakat: "اخْتِبَار",
          amr: "اختبر", amrHarakat: "اخْتَبِرْ",
          type: "وصل",
          reason: "لأنه فعل أمر من الفعل الثلاثي المزيد بحرفين."
        }
      ]
    },

    /* ---- التطبيق 5 (hlm. 20 dan 21): koreksi teks ---- */
    ex5: {
      id: "ex5",
      sourcePage: 20,
      title: "التطبيق الخامس",
      prompt: "اقرأ النص الآتي، ثم صحح كتابة همزتي الوصل والقطع للكلمات الواردة فيه:",
      /* Teks persis seperti di kitab (dengan kesalahan hamzah di dalamnya) */
      text: "جاء يوم العيد، يوم الخروج من الزمن الى زمن، .... زمن قصير ظريف ضاحك، تفرضه الاديان على الناس؛ ليكون لهم بين الحين والحين يوم طبيعي في هذه الحياة التي إنتقلت عن طبيعتها، يوم السلام، والبشر، والضحك، والوفاء، والاخاء، يوم الثياب الجديدة على الكل اشعارا لهم بأن الوجه الإنساني جديد في هذا اليوم، يوم الزينة التي لا يراد منها إلا اظهار أثرها على النفس ليكون الناس جميعا في يوم حب، يوم العيد؛ يوم تقديم الحلوى إلى كل فم لتحلو الكلمات فيه ..... يوم تنتشر فيه بين الناس الفاظ الدعاء والتهنئة مرتفعة بقوة إلهية فوق منازعات الحياة، ذلك اليوم الذي ينظر فيه الإنسان إلى نفسه نظرة تلمح السعادة، وإلى أهله نظرة تبصر الاعزاز، وإلى داره نظرة تدرك الجمال، وإلى الناس نظرة ترى الصداقة. ومن كل هذه النظرات تستوي له النظرة الجميلة إلى الحياة والعالم، فتبهج نفسه بالعالم والحياة، وما اسماها نظرة تكشف للإنسان أن الكل جماله في الكل.",
      errors: [
        { id: "ex5e1", wrong: "الى", right: "إلى", context: "من الزمن الى زمن", type: "قطع", reason: "حرف، وجميع الحروف همزتها همزة قطع." },
        { id: "ex5e2", wrong: "الاديان", right: "الأديان", context: "تفرضه الاديان على الناس", type: "قطع", reason: "اسم همزته قطع، وهمزة أل التعريف وصل." },
        { id: "ex5e3", wrong: "إنتقلت", right: "انتقلت", context: "التي إنتقلت عن طبيعتها", type: "وصل", reason: "فعل ماض من الثلاثي المزيد بحرفين." },
        { id: "ex5e4", wrong: "الاخاء", right: "الإخاء", context: "والوفاء، والاخاء", type: "قطع", reason: "اسم همزته قطع." },
        { id: "ex5e5", wrong: "اشعارا", right: "إشعارا", context: "اشعارا لهم", type: "قطع", reason: "مصدر من الفعل الثلاثي المزيد بالهمزة في أوله (أشعر)." },
        { id: "ex5e6", wrong: "اظهار", right: "إظهار", context: "إلا اظهار أثرها", type: "قطع", reason: "مصدر من الفعل الثلاثي المزيد بالهمزة في أوله (أظهر)." },
        { id: "ex5e7", wrong: "الفاظ", right: "ألفاظ", context: "بين الناس الفاظ الدعاء", type: "قطع", reason: "اسم همزته قطع." },
        { id: "ex5e8", wrong: "الاعزاز", right: "الإعزاز", context: "نظرة تبصر الاعزاز", type: "قطع", reason: "مصدر من الفعل الثلاثي المزيد بالهمزة في أوله (أعز)." },
        { id: "ex5e9", wrong: "اسماها", right: "أسماها", context: "وما اسماها نظرة", type: "قطع", reason: "فعل ماض على صيغة التعجب (أفعل)، وهو مزيد بالهمزة في أوله." }
      ]
    }
  },

  /* ===================================================================
     8) الألعاب
     =================================================================== */
  games: {

    /* ---- لعبة 1: سلة الهمزة — kelompokkan kata ke dua keranjang ---- */
    sortBasket: {
      id: "g1",
      title: "سلة الهمزة",
      instructions: "ضع كل كلمة في السلة الصحيحة: همزة الوصل أو همزة القطع.",
      baskets: [
        { id: "wasl", label: "همزة الوصل" },
        { id: "qat", label: "همزة القطع" }
      ],
      timeLimitSeconds: 90,
      pointsPerCorrect: 10,
      items: [
        { word: "اكتب", basket: "wasl", reason: "فعل أمر من الفعل الثلاثي." },
        { word: "ارسم", basket: "wasl", reason: "فعل أمر من الفعل الثلاثي." },
        { word: "اذهب", basket: "wasl", reason: "فعل أمر من الفعل الثلاثي." },
        { word: "اجتمع", basket: "wasl", reason: "من الثلاثي المزيد بحرفين." },
        { word: "اجتماع", basket: "wasl", reason: "مصدر من الثلاثي المزيد بحرفين." },
        { word: "استثمر", basket: "wasl", reason: "من الثلاثي المزيد بثلاثة حروف." },
        { word: "استثمار", basket: "wasl", reason: "مصدر من الثلاثي المزيد بثلاثة حروف." },
        { word: "اختبار", basket: "wasl", reason: "مصدر من الثلاثي المزيد بحرفين." },
        { word: "انتقل", basket: "wasl", reason: "من الثلاثي المزيد بحرفين." },
        { word: "استغفروا", basket: "wasl", reason: "أمر من الثلاثي المزيد بثلاثة حروف." },
        { word: "استعينوا", basket: "wasl", reason: "أمر من الثلاثي المزيد بثلاثة حروف." },
        { word: "اصبروا", basket: "wasl", reason: "فعل أمر من الفعل الثلاثي." },
        { word: "ابن", basket: "wasl", reason: "من الأسماء المستثناة." },
        { word: "ابنة", basket: "wasl", reason: "من الأسماء المستثناة." },
        { word: "امرأة", basket: "wasl", reason: "من الأسماء المستثناة." },
        { word: "اسم", basket: "wasl", reason: "من الأسماء المستثناة." },
        { word: "اثنان", basket: "wasl", reason: "من الأسماء المستثناة." },
        { word: "اثنتان", basket: "wasl", reason: "من الأسماء المستثناة." },
        { word: "الجامعة", basket: "wasl", reason: "همزة أل التعريف." },
        { word: "المكتبة", basket: "wasl", reason: "همزة أل التعريف." },

        { word: "أخذ", basket: "qat", reason: "ماض من الثلاثي المهموز." },
        { word: "أمن", basket: "qat", reason: "ماض من الثلاثي المهموز." },
        { word: "أحسن", basket: "qat", reason: "ماض من الثلاثي المزيد بالهمزة في أوله." },
        { word: "إحسان", basket: "qat", reason: "مصدر من الثلاثي المزيد بالهمزة في أوله." },
        { word: "أكرم", basket: "qat", reason: "ماض من الثلاثي المزيد بالهمزة في أوله." },
        { word: "إكرام", basket: "qat", reason: "مصدر من الثلاثي المزيد بالهمزة في أوله." },
        { word: "أقبل", basket: "qat", reason: "ماض من الثلاثي المزيد بالهمزة في أوله." },
        { word: "أرسل", basket: "qat", reason: "ماض من الثلاثي المزيد بالهمزة في أوله." },
        { word: "أطيعوا", basket: "qat", reason: "أمر من الفعل المزيد بالهمزة في أوله." },
        { word: "أحمد", basket: "qat", reason: "اسم، وجميع الأسماء همزتها قطع عدا المستثنى." },
        { word: "إسماعيل", basket: "qat", reason: "اسم." },
        { word: "إفريقيا", basket: "qat", reason: "اسم." },
        { word: "أنا", basket: "qat", reason: "ضمير مبدوء بهمزة." },
        { word: "أنت", basket: "qat", reason: "ضمير مبدوء بهمزة." },
        { word: "إياك", basket: "qat", reason: "ضمير مبدوء بهمزة." },
        { word: "أستثمر", basket: "qat", reason: "مبدوء بهمزة المضارعة." },
        { word: "أستحسن", basket: "qat", reason: "مبدوء بهمزة المضارعة." },
        { word: "أن", basket: "qat", reason: "حرف، وجميع الحروف همزتها قطع." },
        { word: "إلى", basket: "qat", reason: "حرف، وجميع الحروف همزتها قطع." },
        { word: "إلا", basket: "qat", reason: "حرف، وجميع الحروف همزتها قطع." },
        { word: "أو", basket: "qat", reason: "حرف، وجميع الحروف همزتها قطع." },
        { word: "ألا", basket: "qat", reason: "حرف، وجميع الحروف همزتها قطع." },
        { word: "أنثى", basket: "qat", reason: "اسم." }
      ]
    },

    /* ---- لعبة 2: طابق الخصائص — hubungkan sifat dengan Hamzah / Alif ---- */
    matchProperties: {
      id: "g2",
      title: "الهمزة أم الألف؟",
      instructions: "اقرأ الخاصية، ثم اختر هل هي للهمزة أم للألف.",
      options: [
        { id: "hamza", label: "الهمزة" },
        { id: "alif", label: "الألف" }
      ],
      pointsPerCorrect: 10,
      items: [
        { text: "صوت يخرج من أقصى الحلق (الحنجرة).", belongsTo: "hamza" },
        { text: "امتداد صوتي ينشأ عن إشباع فتحة الحرف الذي قبلها.", belongsTo: "alif" },
        { text: "تخرج من فراغ الفم.", belongsTo: "alif" },
        { text: "تقع في أول الكلمة ووسطها وآخرها.", belongsTo: "hamza" },
        { text: "لا تقع في أول الكلمة.", belongsTo: "alif" },
        { text: "حرف يقبل جميع الحركات.", belongsTo: "hamza" },
        { text: "صوت ساكن دائما.", belongsTo: "alif" },
        { text: "يرمز لها برأس عين صغيرة (ء).", belongsTo: "hamza" },
        { text: "صورتها الألف القائمة (ا) أو المقصورة (ى).", belongsTo: "alif" },
        { text: "تكتب على ألف أو واو أو ياء أو على السطر.", belongsTo: "hamza" },
        { text: "مثالها: أكرم، سأل، بدأ.", belongsTo: "hamza" },
        { text: "مثالها: نال، سما، سعى.", belongsTo: "alif" }
      ]
    },

    /* ---- لعبة 3: اكتشف الخطأ — dari kalimat teks ex5 ---- */
    spotError: {
      id: "g3",
      title: "اكتشف الخطأ",
      instructions: "في كل عبارة كلمة كتبت فيها الهمزة خطأ. اختر الصواب.",
      pointsPerCorrect: 10,
      items: [
        { phrase: "يوم الخروج من الزمن الى زمن", wrong: "الى", choices: ["إلى", "الى", "ألى"], answer: 0, reason: "إلى حرف، وجميع الحروف همزتها همزة قطع." },
        { phrase: "تفرضه الاديان على الناس", wrong: "الاديان", choices: ["الاديان", "الأديان", "الإديان"], answer: 1, reason: "أديان اسم همزته قطع، والهمزة مفتوحة فتوضع فوق الألف." },
        { phrase: "التي إنتقلت عن طبيعتها", wrong: "إنتقلت", choices: ["انتقلت", "أنتقلت", "إنتقلت"], answer: 0, reason: "انتقل فعل من الثلاثي المزيد بحرفين، فهمزته وصل." },
        { phrase: "والوفاء، والاخاء", wrong: "الاخاء", choices: ["الاخاء", "الأخاء", "الإخاء"], answer: 2, reason: "إخاء اسم همزته قطع، والهمزة مكسورة فتوضع تحت الألف." },
        { phrase: "اشعارا لهم", wrong: "اشعارا", choices: ["أشعارا", "إشعارا", "اشعارا"], answer: 1, reason: "إشعار مصدر من (أشعر)، فهمزته قطع مكسورة." },
        { phrase: "إلا اظهار أثرها", wrong: "اظهار", choices: ["إظهار", "أظهار", "اظهار"], answer: 0, reason: "إظهار مصدر من (أظهر)، فهمزته قطع مكسورة." },
        { phrase: "بين الناس الفاظ الدعاء", wrong: "الفاظ", choices: ["الفاظ", "إلفاظ", "ألفاظ"], answer: 2, reason: "ألفاظ اسم همزته قطع مفتوحة." },
        { phrase: "نظرة تبصر الاعزاز", wrong: "الاعزاز", choices: ["الأعزاز", "الإعزاز", "الاعزاز"], answer: 1, reason: "إعزاز مصدر من (أعز)، فهمزته قطع مكسورة." },
        { phrase: "وما اسماها نظرة", wrong: "اسماها", choices: ["أسماها", "إسماها", "اسماها"], answer: 0, reason: "أسمى فعل ماض مزيد بالهمزة في أوله، فهمزته قطع." }
      ]
    }
  },

  /* ===================================================================
     9) التقويم (evaluasi akhir)
     questionIds mengacu ke id pada bagian questions di atas.
     =================================================================== */
  evaluation: {
    title: "التقويم النهائي",
    description: "اختبار شامل في الفرق بين الهمزة والألف وفي همزتي الوصل والقطع.",
    instructions: "اقرأ كل سؤال جيدا، ثم اختر الإجابة الصحيحة.",
    timeLimitMinutes: 15,
    passingScore: 70,
    shuffleQuestions: true,
    shuffleChoices: false,
    questionIds: [
      "u1q1", "u1q2", "u1q5",
      "u2q1", "u2q3", "u2q4", "u2q8",
      "u3q2", "u3q4", "u3q5", "u3q8",
      "u4q1", "u4q2", "u4q5", "u4q8"
    ],
    grades: [
      { min: 90, label: "ممتاز", message: "أحسنت! أتقنت الفرق بين همزة الوصل وهمزة القطع." },
      { min: 80, label: "جيد جدا", message: "مستواك جيد جدا، راجع الأخطاء القليلة." },
      { min: 70, label: "جيد", message: "نجحت، ولكن راجع مواضع الهمزتين مرة أخرى." },
      { min: 60, label: "مقبول", message: "تحتاج إلى مزيد من التدريب." },
      { min: 0, label: "يحتاج إلى مراجعة", message: "راجع الوحدات ثم أعد الاختبار." }
    ]
  }
};

/* Ekspor: agar bisa dipakai lewat <script src="materi.js"> maupun require() */
if (typeof window !== "undefined") { window.MATERI = MATERI; }
if (typeof module !== "undefined" && module.exports) { module.exports = MATERI; }

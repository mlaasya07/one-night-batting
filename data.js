/*
  ARCHIVE CATALOGUE

  One entry per document in the repository. index.html reads this file
  through window.ARCHIVE_DOCUMENTS.

  Fields
    id        unique, URL-safe key (used by the Preview button)
    name      title shown on the card
    subject   subject label (searchable)
    category  must match a collection id in index.html:
              CSE | DS | PYQs | Lab_Codes | ZtoA files
    path      path relative to this folder, using forward slashes

  Listed: every PDF, PPT/PPTX and DOC/DOCX, plus loose text files, images
  and zips.
  githubOnly: true  -> no preview; the card links to download the file from GitHub.
  Left out on purpose: all .html pages, placeholder first.txt/first.md files,
  ZtoA files/Test_Files, and this site's own files.
*/

// Where githubOnly files are downloaded from:  <githubRepo>/raw/<branch>/<path>
// If githubRepo is left empty and the site is hosted on <user>.github.io/<repo>,
// it is worked out automatically.
window.ARCHIVE_CONFIG = {
  githubRepo: "https://github.com/mlaasya07/one-night-batting",
  branch: "main"
};

window.ARCHIVE_DOCUMENTS = [

  // ── CSE · Formal Languages & Automata Theory (FLAT) ────────────────
  {
    id: "cse-3rdyrsem2-flat-flat-problemsformid2",
    name: "FLAT Problems For Mid 2",
    subject: "Formal Languages & Automata Theory (FLAT)",
    category: "CSE",
    path: "CSE/3rdyrSem2/FLAT/FLAT_ProblemsForMid2.pdf"
  },
  {
    id: "cse-3rdyrsem2-flat-lecture1-introtoautomatatheory",
    name: "FLAT — Lecture 1 Intro To Automata Theory",
    subject: "Formal Languages & Automata Theory (FLAT)",
    category: "CSE",
    path: "CSE/3rdyrSem2/FLAT/Lecture1_IntroToAutomataTheory.pdf"
  },
  {
    id: "cse-3rdyrsem2-flat-lecture2-dfa",
    name: "FLAT — Lecture 2 DFA",
    subject: "Formal Languages & Automata Theory (FLAT)",
    category: "CSE",
    path: "CSE/3rdyrSem2/FLAT/Lecture2_DFA.pdf"
  },
  {
    id: "cse-3rdyrsem2-flat-lecture3-nfa",
    name: "FLAT — Lecture 3 NFA",
    subject: "Formal Languages & Automata Theory (FLAT)",
    category: "CSE",
    path: "CSE/3rdyrSem2/FLAT/Lecture3_NFA.pdf"
  },
  {
    id: "cse-3rdyrsem2-flat-lecture4-enfa",
    name: "FLAT — Lecture 4 eNFA",
    subject: "Formal Languages & Automata Theory (FLAT)",
    category: "CSE",
    path: "CSE/3rdyrSem2/FLAT/Lecture4_eNFA.pdf"
  },
  {
    id: "cse-3rdyrsem2-flat-lecture5-re",
    name: "FLAT — Lecture 5 RE",
    subject: "Formal Languages & Automata Theory (FLAT)",
    category: "CSE",
    path: "CSE/3rdyrSem2/FLAT/Lecture5_RE.pdf"
  },
  {
    id: "cse-3rdyrsem2-flat-lecture6-pumpinglemma",
    name: "FLAT — Lecture 6 Pumping Lemma",
    subject: "Formal Languages & Automata Theory (FLAT)",
    category: "CSE",
    path: "CSE/3rdyrSem2/FLAT/Lecture6_PumpingLemma.pdf"
  },
  {
    id: "cse-3rdyrsem2-flat-lecture7-prl",
    name: "FLAT — Lecture 7 PRL",
    subject: "Formal Languages & Automata Theory (FLAT)",
    category: "CSE",
    path: "CSE/3rdyrSem2/FLAT/Lecture7_PRL.pdf"
  },
  {
    id: "cse-3rdyrsem2-flat-lecture8-cfg",
    name: "FLAT — Lecture 8 CFG",
    subject: "Formal Languages & Automata Theory (FLAT)",
    category: "CSE",
    path: "CSE/3rdyrSem2/FLAT/Lecture8_CFG.pdf"
  },
  {
    id: "cse-3rdyrsem2-flat-lecture9-pda",
    name: "FLAT — Lecture 9 PDA",
    subject: "Formal Languages & Automata Theory (FLAT)",
    category: "CSE",
    path: "CSE/3rdyrSem2/FLAT/Lecture9_PDA.pdf"
  },
  {
    id: "cse-3rdyrsem2-flat-lecture10-tm",
    name: "FLAT — Lecture 10 TM",
    subject: "Formal Languages & Automata Theory (FLAT)",
    category: "CSE",
    path: "CSE/3rdyrSem2/FLAT/Lecture10_TM.pdf"
  },
  {
    id: "cse-3rdyrsem2-flat-lecture11-undecidability",
    name: "FLAT — Lecture 11 Undecidability",
    subject: "Formal Languages & Automata Theory (FLAT)",
    category: "CSE",
    path: "CSE/3rdyrSem2/FLAT/Lecture11_Undecidability.pdf"
  },
  {
    id: "cse-3rdyrsem2-flat-lecture12",
    name: "FLAT — Lecture 12",
    subject: "Formal Languages & Automata Theory (FLAT)",
    category: "CSE",
    path: "CSE/3rdyrSem2/FLAT/Lecture12.pdf"
  },
  {
    id: "cse-3rdyrsem2-flat-lecture13-mdfa-only-for-flat",
    name: "Lecture 13 MDFA Only for FLAT",
    subject: "Formal Languages & Automata Theory (FLAT)",
    category: "CSE",
    path: "CSE/3rdyrSem2/FLAT/Lecture13_MDFA_Only_for_FLAT.pdf"
  },
  {
    id: "cse-3rdyrsem2-flat-links",
    name: "FLAT — Links",
    subject: "Formal Languages & Automata Theory (FLAT)",
    category: "CSE",
    path: "CSE/3rdyrSem2/FLAT/links.txt"
  },
  {
    id: "cse-3rdyrsem2-flat-problemset-unit4-atcd-n-flat",
    name: "Problem Set Unit 4 ATCD & FLAT",
    subject: "Formal Languages & Automata Theory (FLAT)",
    category: "CSE",
    path: "CSE/3rdyrSem2/FLAT/ProblemSet_Unit4_ATCD_n_FLAT.pdf"
  },

  // ── CSE · Natural Language Processing (NLP) ────────────────────────
  {
    id: "cse-3rdyrsem2-nlp-nlp-gpt-notes",
    name: "NLP GPT NOTES",
    subject: "Natural Language Processing (NLP)",
    category: "CSE",
    path: "CSE/3rdyrSem2/NLP/NLP GPT NOTES.pdf"
  },
  {
    id: "cse-3rdyrsem2-nlp-nlp-intro1",
    name: "NLP Intro 1",
    subject: "Natural Language Processing (NLP)",
    category: "CSE",
    path: "CSE/3rdyrSem2/NLP/NLP Intro1.pdf"
  },
  {
    id: "cse-3rdyrsem2-nlp-nlp-unit5",
    name: "NLP unit 5",
    subject: "Natural Language Processing (NLP)",
    category: "CSE",
    path: "CSE/3rdyrSem2/NLP/NLP unit5.pdf"
  },
  {
    id: "cse-3rdyrsem2-nlp-semantic-parsing-presentation",
    name: "NLP — Semantic Parsing Presentation",
    subject: "Natural Language Processing (NLP)",
    category: "CSE",
    path: "CSE/3rdyrSem2/NLP/Semantic_Parsing_Presentation.pdf"
  },
  {
    id: "cse-3rdyrsem2-nlp-unit1-tokens-lexemes-morphemes-typology-nlp",
    name: "UNIT 1 Tokens Lexemes Morphemes Typology NLP",
    subject: "Natural Language Processing (NLP)",
    category: "CSE",
    path: "CSE/3rdyrSem2/NLP/UNIT1_Tokens_Lexemes_Morphemes_Typology_NLP.pdf"
  },
  {
    id: "cse-3rdyrsem2-nlp-unit3",
    name: "NLP — Unit 3",
    subject: "Natural Language Processing (NLP)",
    category: "CSE",
    path: "CSE/3rdyrSem2/NLP/Unit3.pdf"
  },
  {
    id: "cse-3rdyrsem2-nlp-unit-v-language-modeling",
    name: "NLP — UNIT V Language Modeling",
    subject: "Natural Language Processing (NLP)",
    category: "CSE",
    path: "CSE/3rdyrSem2/NLP/UNIT V Language Modeling.pdf"
  },

  // ── CSE · Cryptography & Network Security (CNS) ────────────────────
  {
    id: "cse-4thyrsem1-cns-3-cns-unit-3-r20-1",
    name: "3. CNS UNIT 3 R20",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/3. CNS UNIT-3 R20 (1).pdf"
  },
  {
    id: "cse-4thyrsem1-cns-4-cns-unit-4-r20-1",
    name: "4. CNS UNIT 4 R20",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/4. CNS UNIT-4 R20 (1).pdf"
  },
  {
    id: "cse-4thyrsem1-cns-assignment-questions-cns",
    name: "Assignment questions CNS",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/Assignment_questions_cns.pdf"
  },
  {
    id: "cse-4thyrsem1-cns-cns-unit-1",
    name: "CNS UNIT 1",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/CNS UNIT-1.pdf"
  },
  {
    id: "cse-4thyrsem1-cns-cns-unit-1-2",
    name: "CNS UNIT 1 2",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/CNS UNIT-1_2.pdf"
  },
  {
    id: "cse-4thyrsem1-cns-cns-long-qns-pdf-1",
    name: "CNS Long QNS 1",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/CNS_Long_QNS.pdf_1.pdf"
  },
  {
    id: "cse-4thyrsem1-cns-cns-shortqns-1",
    name: "CNS ShortQNS 1",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/CNS_ShortQNS_1.pdf"
  },
  {
    id: "cse-4thyrsem1-cns-cns-sometopics",
    name: "CNS Some Topics",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/CNS_SomeTopics.pdf"
  },
  {
    id: "cse-4thyrsem1-cns-cns-twist-questions",
    name: "CNS Twist Questions",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/CNS_Twist_Questions.docx"
  },
  {
    id: "cse-4thyrsem1-cns-cryptography-and-network-security-notes",
    name: "CRYPTOGRAPHY AND NETWORK SECURITY NOTES",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/CRYPTOGRAPHY_AND_NETWORK_SECURITY_NOTES.pdf"
  },
  {
    id: "cse-4thyrsem1-cns-ipsec",
    name: "CNS — IPSec",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/IPSec.pdf"
  },
  {
    id: "cse-4thyrsem1-cns-note10-sha-3",
    name: "CNS — NOTE10 SHA 3",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/NOTE10_SHA_3.pdf"
  },
  {
    id: "cse-4thyrsem1-cns-pgp",
    name: "CNS — PGP",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/PGP.pdf"
  },
  {
    id: "cse-4thyrsem1-cns-pki-final",
    name: "CNS — PKI final",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/PKI_final.pdf"
  },
  {
    id: "cse-4thyrsem1-cns-ppt",
    name: "CNS — PPT",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/ppt.pdf"
  },
  {
    id: "cse-4thyrsem1-cns-smime",
    name: "CNS — SMIME",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/SMIME.pdf"
  },
  {
    id: "cse-4thyrsem1-cns-studymaterial-lastunits",
    name: "CNS — Study Material Last Units",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/studyMaterial_LastUnits.pdf"
  },
  {
    id: "cse-4thyrsem1-cns-unit-5-cns-casestudy-notes",
    name: "Unit 5 CNS casestudy notes",
    subject: "Cryptography & Network Security (CNS)",
    category: "CSE",
    path: "CSE/4thyrSem1/CNS/unit 5 cns_casestudy_notes.pdf"
  },

  // ── CSE · Compiler Design ──────────────────────────────────────────
  {
    id: "cse-4thyrsem1-compilerdesign-cd-qb-mid-2",
    name: "CD QB mid 2",
    subject: "Compiler Design",
    category: "CSE",
    path: "CSE/4thyrSem1/CompilerDesign/CD QB mid-2.pdf"
  },
  {
    id: "cse-4thyrsem1-compilerdesign-cd-question-bank-mid-1",
    name: "CD QUESTION BANK MID 1",
    subject: "Compiler Design",
    category: "CSE",
    path: "CSE/4thyrSem1/CompilerDesign/CD-QUESTION BANK-MID-1.pdf"
  },
  {
    id: "cse-4thyrsem1-compilerdesign-unit-2-parsers",
    name: "Compiler Design — UNIT 2 Parsers",
    subject: "Compiler Design",
    category: "CSE",
    path: "CSE/4thyrSem1/CompilerDesign/UNIT-2 Parsers.pdf"
  },
  {
    id: "cse-4thyrsem1-compilerdesign-unit-3-sdd-part-2",
    name: "Compiler Design — UNIT 3 SDD Part 2",
    subject: "Compiler Design",
    category: "CSE",
    path: "CSE/4thyrSem1/CompilerDesign/UNIT-3 SDD Part 2.pdf"
  },
  {
    id: "cse-4thyrsem1-compilerdesign-unit-3-sdd",
    name: "Compiler Design — UNIT 3 SDD",
    subject: "Compiler Design",
    category: "CSE",
    path: "CSE/4thyrSem1/CompilerDesign/UNIT-3 SDD.pdf"
  },
  {
    id: "cse-4thyrsem1-compilerdesign-unit-4-5-partial",
    name: "Compiler Design — UNIT 4,5(partial)",
    subject: "Compiler Design",
    category: "CSE",
    path: "CSE/4thyrSem1/CompilerDesign/UNIT-4,5(partial).pdf"
  },

  // ── DS · Computer Organization & Architecture (COA) ────────────────
  {
    id: "ds-2ndyrsem1-coa-unit-i-part-a",
    name: "COA — Unit I part A",
    subject: "Computer Organization & Architecture (COA)",
    category: "DS",
    path: "DS/2ndyrSem1/COA/Unit I part A.pdf"
  },
  {
    id: "ds-2ndyrsem1-coa-unit-i-part-b",
    name: "COA — Unit I part B",
    subject: "Computer Organization & Architecture (COA)",
    category: "DS",
    path: "DS/2ndyrSem1/COA/Unit I part B.pdf"
  },
  {
    id: "ds-2ndyrsem1-coa-unit-i-part-c",
    name: "COA — Unit I part C",
    subject: "Computer Organization & Architecture (COA)",
    category: "DS",
    path: "DS/2ndyrSem1/COA/Unit I part C.pdf"
  },

  // ── DS · COSM ──────────────────────────────────────────────────────
  {
    id: "ds-2ndyrsem1-cosm-probability-1",
    name: "COSM — Probability 1",
    subject: "COSM",
    category: "DS",
    path: "DS/2ndyrSem1/COSM/Probability-1.pdf"
  },

  // ── DS · Data Structures in C ──────────────────────────────────────
  {
    id: "ds-2ndyrsem1-data-structures-in-c-bnb-trees",
    name: "Data Structures — BnB+Trees",
    subject: "Data Structures in C",
    category: "DS",
    path: "DS/2ndyrSem1/Data_Structures_in_C/BnB+Trees.pdf"
  },
  {
    id: "ds-2ndyrsem1-data-structures-in-c-bst-notes1",
    name: "Data Structures — BST Notes1",
    subject: "Data Structures in C",
    category: "DS",
    path: "DS/2ndyrSem1/Data_Structures_in_C/BST_Notes1.pdf"
  },
  {
    id: "ds-2ndyrsem1-data-structures-in-c-complete-notes",
    name: "Data Structures — Complete Notes",
    subject: "Data Structures in C",
    category: "DS",
    path: "DS/2ndyrSem1/Data_Structures_in_C/Complete_Notes.pdf"
  },
  {
    id: "ds-2ndyrsem1-data-structures-in-c-data-structures-with-c-by-schaum-lipschutz-textbook",
    name: "Data Structures With C — Schaum / Lipschutz (Textbook)",
    subject: "Data Structures in C",
    category: "DS",
    path: "DS/2ndyrSem1/Data_Structures_in_C/Data-Structures-With-C-by-schaum-lipschutz Textbook.pdf"
  },
  {
    id: "ds-2ndyrsem1-data-structures-in-c-ds-3rd-chapter",
    name: "DS 3rd chapter",
    subject: "Data Structures in C",
    category: "DS",
    path: "DS/2ndyrSem1/Data_Structures_in_C/DS 3rd chapter.pdf"
  },
  {
    id: "ds-2ndyrsem1-data-structures-in-c-ds-unit-3",
    name: "DS UNIT 3",
    subject: "Data Structures in C",
    category: "DS",
    path: "DS/2ndyrSem1/Data_Structures_in_C/DS UNIT 3.pdf"
  },
  {
    id: "ds-2ndyrsem1-data-structures-in-c-ds-unit-1",
    name: "DS Unit 1",
    subject: "Data Structures in C",
    category: "DS",
    path: "DS/2ndyrSem1/Data_Structures_in_C/DS_Unit-1.pdf"
  },
  {
    id: "ds-2ndyrsem1-data-structures-in-c-ds-unit-1-handwritten",
    name: "DS Unit 1 Hand Written",
    subject: "Data Structures in C",
    category: "DS",
    path: "DS/2ndyrSem1/Data_Structures_in_C/DS_Unit_1 HandWritten.pdf"
  },
  {
    id: "ds-2ndyrsem1-data-structures-in-c-graphs",
    name: "Data Structures — Graphs",
    subject: "Data Structures in C",
    category: "DS",
    path: "DS/2ndyrSem1/Data_Structures_in_C/Graphs.pdf"
  },
  {
    id: "ds-2ndyrsem1-data-structures-in-c-hashtables",
    name: "Data Structures — Hashtables",
    subject: "Data Structures in C",
    category: "DS",
    path: "DS/2ndyrSem1/Data_Structures_in_C/hashtables.pdf"
  },
  {
    id: "ds-2ndyrsem1-data-structures-in-c-linked-lists",
    name: "Data Structures — Linked Lists",
    subject: "Data Structures in C",
    category: "DS",
    path: "DS/2ndyrSem1/Data_Structures_in_C/Linked Lists.pdf"
  },
  {
    id: "ds-2ndyrsem1-data-structures-in-c-quick-sort",
    name: "Data Structures — Quick Sort",
    subject: "Data Structures in C",
    category: "DS",
    path: "DS/2ndyrSem1/Data_Structures_in_C/Quick_Sort.pdf"
  },
  {
    id: "ds-2ndyrsem1-data-structures-in-c-sorting",
    name: "Data Structures — Sorting",
    subject: "Data Structures in C",
    category: "DS",
    path: "DS/2ndyrSem1/Data_Structures_in_C/Sorting.pdf"
  },
  {
    id: "ds-2ndyrsem1-data-structures-in-c-traversal",
    name: "Data Structures — Traversal",
    subject: "Data Structures in C",
    category: "DS",
    path: "DS/2ndyrSem1/Data_Structures_in_C/Traversal.pdf"
  },

  // ── DS · Digital Electronics ───────────────────────────────────────
  {
    id: "ds-2ndyrsem1-digital-electronics-all-units-question-bank",
    name: "Digital Electronics — All units - Question Bank",
    subject: "Digital Electronics",
    category: "DS",
    path: "DS/2ndyrSem1/Digital_Electronics/all units - Question Bank.pdf"
  },
  {
    id: "ds-2ndyrsem1-digital-electronics-digital-design-3rd-edition-textbook",
    name: "Digital Design (3rd Edition) Textbook",
    subject: "Digital Electronics",
    category: "DS",
    path: "DS/2ndyrSem1/Digital_Electronics/Digital Design (3rd Edition) Textbook.pdf"
  },
  {
    id: "ds-2ndyrsem1-digital-electronics-unit-4",
    name: "Digital Electronics — Unit 4",
    subject: "Digital Electronics",
    category: "DS",
    path: "DS/2ndyrSem1/Digital_Electronics/unit 4.pdf"
  },
  {
    id: "ds-2ndyrsem1-digital-electronics-unit-5",
    name: "Digital Electronics — Unit 5",
    subject: "Digital Electronics",
    category: "DS",
    path: "DS/2ndyrSem1/Digital_Electronics/unit 5.pdf"
  },
  {
    id: "ds-2ndyrsem1-digital-electronics-unit-4-dld-plds",
    name: "UNIT 4 DLD PLDs",
    subject: "Digital Electronics",
    category: "DS",
    path: "DS/2ndyrSem1/Digital_Electronics/UNIT - 4_DLD_PLDs.pdf"
  },

  // ── DS · Java ──────────────────────────────────────────────────────
  {
    id: "ds-2ndyrsem1-java-01-introduction-to-java",
    name: "01 Introduction to Java",
    subject: "Java",
    category: "DS",
    path: "DS/2ndyrSem1/JAVA/01 Introduction to Java.pdf"
  },
  {
    id: "ds-2ndyrsem1-java-example-codes",
    name: "Java — Example codes",
    subject: "Java",
    category: "DS",
    path: "DS/2ndyrSem1/JAVA/example codes.pdf"
  },
  {
    id: "ds-2ndyrsem1-java-java-threads-synchf",
    name: "Java — Threads & SynchF",
    subject: "Java",
    category: "DS",
    path: "DS/2ndyrSem1/JAVA/Java-Threads&SynchF.pdf"
  },
  {
    id: "ds-2ndyrsem1-java-unit-2",
    name: "Java — Unit 2",
    subject: "Java",
    category: "DS",
    path: "DS/2ndyrSem1/JAVA/unit 2.pdf"
  },
  {
    id: "ds-2ndyrsem1-java-unit-3",
    name: "Java — Unit 3",
    subject: "Java",
    category: "DS",
    path: "DS/2ndyrSem1/JAVA/unit 3.pdf"
  },
  {
    id: "ds-2ndyrsem1-java-unit-4-5",
    name: "Java — Unit 4 & 5",
    subject: "Java",
    category: "DS",
    path: "DS/2ndyrSem1/JAVA/unit 4 & 5.pdf"
  },

  // ── DS · Business Economics & Financial Analysis (BEFA) ────────────
  {
    id: "ds-2ndyrsem2-business-economics-n-financial-analysis-important-questions-of-all-units",
    name: "BEFA — Important questions of all units",
    subject: "Business Economics & Financial Analysis (BEFA)",
    category: "DS",
    path: "DS/2ndyrSem2/Business_Economics_n_Financial_Analysis/important questions of all units.pdf"
  },
  {
    id: "ds-2ndyrsem2-business-economics-n-financial-analysis-unit-4-financial-accounting",
    name: "BEFA — Unit 4. Financial accounting",
    subject: "Business Economics & Financial Analysis (BEFA)",
    category: "DS",
    path: "DS/2ndyrSem2/Business_Economics_n_Financial_Analysis/Unit-4. Financial accounting.pdf"
  },
  {
    id: "ds-2ndyrsem2-business-economics-n-financial-analysis-unit-5-ratio-analysis",
    name: "BEFA — Unit 5. Ratio Analysis",
    subject: "Business Economics & Financial Analysis (BEFA)",
    category: "DS",
    path: "DS/2ndyrSem2/Business_Economics_n_Financial_Analysis/Unit-5. Ratio Analysis.pdf"
  },

  // ── DS · Database Management Systems (DBMS) ────────────────────────
  {
    id: "ds-2ndyrsem2-dbms-importantqformid1",
    name: "DBMS — Important Qfor Mid 1",
    subject: "Database Management Systems (DBMS)",
    category: "DS",
    path: "DS/2ndyrSem2/DBMS/ImportantQforMid1.pdf"
  },
  {
    id: "ds-2ndyrsem2-dbms-importantqformid2",
    name: "DBMS — Important Qfor Mid 2",
    subject: "Database Management Systems (DBMS)",
    category: "DS",
    path: "DS/2ndyrSem2/DBMS/ImportantQforMid2.pdf"
  },
  {
    id: "ds-2ndyrsem2-dbms-impqs-sem",
    name: "DBMS — Imp Qs Sem",
    subject: "Database Management Systems (DBMS)",
    category: "DS",
    path: "DS/2ndyrSem2/DBMS/ImpQs_Sem.pdf"
  },
  {
    id: "ds-2ndyrsem2-dbms-unit3-1",
    name: "DBMS — Unit 3-1",
    subject: "Database Management Systems (DBMS)",
    category: "DS",
    path: "DS/2ndyrSem2/DBMS/Unit3-1.pdf"
  },
  {
    id: "ds-2ndyrsem2-dbms-unit-1-1",
    name: "DBMS — Unit 1-1",
    subject: "Database Management Systems (DBMS)",
    category: "DS",
    path: "DS/2ndyrSem2/DBMS/unit 1-1.pdf"
  },
  {
    id: "ds-2ndyrsem2-dbms-unit-1-2",
    name: "DBMS — Unit 1-2",
    subject: "Database Management Systems (DBMS)",
    category: "DS",
    path: "DS/2ndyrSem2/DBMS/unit 1-2.pdf"
  },
  {
    id: "ds-2ndyrsem2-dbms-unit-3-2",
    name: "DBMS — Unit 3-2",
    subject: "Database Management Systems (DBMS)",
    category: "DS",
    path: "DS/2ndyrSem2/DBMS/Unit 3-2.pdf"
  },
  {
    id: "ds-2ndyrsem2-dbms-unit-2",
    name: "DBMS — Unit 2",
    subject: "Database Management Systems (DBMS)",
    category: "DS",
    path: "DS/2ndyrSem2/DBMS/unit-2.pdf"
  },
  {
    id: "ds-2ndyrsem2-dbms-unit-4",
    name: "DBMS — Unit 4",
    subject: "Database Management Systems (DBMS)",
    category: "DS",
    path: "DS/2ndyrSem2/DBMS/unit-4.pdf"
  },
  {
    id: "ds-2ndyrsem2-dbms-unit-5",
    name: "DBMS — Unit 5",
    subject: "Database Management Systems (DBMS)",
    category: "DS",
    path: "DS/2ndyrSem2/DBMS/Unit-5.pdf"
  },

  // ── DS · Discrete Mathematics ──────────────────────────────────────
  {
    id: "ds-2ndyrsem2-discrete-mathematics-dm-chapter-3",
    name: "DM chapter 3",
    subject: "Discrete Mathematics",
    category: "DS",
    path: "DS/2ndyrSem2/Discrete_Mathematics/DM-chapter-3.pdf"
  },
  {
    id: "ds-2ndyrsem2-discrete-mathematics-model-mid-dm-exam-paper",
    name: "Model Mid DM Exam Paper",
    subject: "Discrete Mathematics",
    category: "DS",
    path: "DS/2ndyrSem2/Discrete_Mathematics/Model_Mid_DM_Exam_Paper.pdf"
  },
  {
    id: "ds-2ndyrsem2-discrete-mathematics-unit-1",
    name: "Discrete Mathematics — Unit 1",
    subject: "Discrete Mathematics",
    category: "DS",
    path: "DS/2ndyrSem2/Discrete_Mathematics/unit-1.pdf"
  },
  {
    id: "ds-2ndyrsem2-discrete-mathematics-unit-2",
    name: "Discrete Mathematics — Unit 2",
    subject: "Discrete Mathematics",
    category: "DS",
    path: "DS/2ndyrSem2/Discrete_Mathematics/unit-2.pdf"
  },
  {
    id: "ds-2ndyrsem2-discrete-mathematics-unit-4",
    name: "Discrete Mathematics — Unit 4",
    subject: "Discrete Mathematics",
    category: "DS",
    path: "DS/2ndyrSem2/Discrete_Mathematics/unit-4.pdf"
  },
  {
    id: "ds-2ndyrsem2-discrete-mathematics-unit-5",
    name: "Discrete Mathematics — Unit 5",
    subject: "Discrete Mathematics",
    category: "DS",
    path: "DS/2ndyrSem2/Discrete_Mathematics/unit-5.pdf"
  },

  // ── DS · Operating Systems ─────────────────────────────────────────
  {
    id: "ds-2ndyrsem2-operating-system-os-lab-1",
    name: "OS LAB 1",
    subject: "Operating Systems",
    category: "DS",
    path: "DS/2ndyrSem2/Operating_System/OS_LAB_1.pdf"
  },
  {
    id: "ds-2ndyrsem2-operating-system-os-practice-q-mid2",
    name: "OS Practice Q mid 2",
    subject: "Operating Systems",
    category: "DS",
    path: "DS/2ndyrSem2/Operating_System/OS_Practice_Q_mid2.pdf"
  },
  {
    id: "ds-2ndyrsem2-operating-system-os-unit-1-not-complete",
    name: "OS UNIT 1 not complete",
    subject: "Operating Systems",
    category: "DS",
    path: "DS/2ndyrSem2/Operating_System/OS_UNIT_1_not_complete.pdf"
  },
  {
    id: "ds-2ndyrsem2-operating-system-os-unit-2-not-complete",
    name: "OS UNIT 2 not complete",
    subject: "Operating Systems",
    category: "DS",
    path: "DS/2ndyrSem2/Operating_System/OS_UNIT_2_not_complete.pdf"
  },
  {
    id: "ds-2ndyrsem2-operating-system-os-unit-3",
    name: "OS UNIT 3",
    subject: "Operating Systems",
    category: "DS",
    path: "DS/2ndyrSem2/Operating_System/OS_UNIT_3.pdf"
  },
  {
    id: "ds-2ndyrsem2-operating-system-os-unit-3-till-mid1",
    name: "OS UNIT 3 till mid 1",
    subject: "Operating Systems",
    category: "DS",
    path: "DS/2ndyrSem2/Operating_System/OS_UNIT_3_till_mid1.pdf"
  },
  {
    id: "ds-2ndyrsem2-operating-system-os-unit-4",
    name: "OS UNIT 4",
    subject: "Operating Systems",
    category: "DS",
    path: "DS/2ndyrSem2/Operating_System/OS_UNIT_4.pdf"
  },
  {
    id: "ds-2ndyrsem2-operating-system-os-unit-5-rajeevsirpart",
    name: "OS UNIT 5 Rajeev Sir Part",
    subject: "Operating Systems",
    category: "DS",
    path: "DS/2ndyrSem2/Operating_System/OS_UNIT_5_RajeevSirPart.pdf"
  },
  {
    id: "ds-2ndyrsem2-operating-system-os-unit-5-souravsirpart",
    name: "OS UNIT 5 Sourav Sir Part",
    subject: "Operating Systems",
    category: "DS",
    path: "DS/2ndyrSem2/Operating_System/OS_UNIT_5_SouravSirPart.pdf"
  },
  {
    id: "ds-2ndyrsem2-operating-system-presentation-lab",
    name: "Operating Systems — Presentation Lab",
    subject: "Operating Systems",
    category: "DS",
    path: "DS/2ndyrSem2/Operating_System/Presentation_Lab.pdf"
  },

  // ── DS · Software Engineering ──────────────────────────────────────
  {
    id: "ds-2ndyrsem2-software-engineering-2-blackbox-problems",
    name: "Software Engineering — 2 blackbox problems",
    subject: "Software Engineering",
    category: "DS",
    path: "DS/2ndyrSem2/Software_Engineering/2_blackbox-problems.pdf"
  },
  {
    id: "ds-2ndyrsem2-software-engineering-3-debugging-in-testing",
    name: "Software Engineering — 3 debugging in testing",
    subject: "Software Engineering",
    category: "DS",
    path: "DS/2ndyrSem2/Software_Engineering/3_debugging_in_testing.pdf"
  },
  {
    id: "ds-2ndyrsem2-software-engineering-4-se-unit-4-softwaremetrics",
    name: "4 SE Unit 4 software Metrics",
    subject: "Software Engineering",
    category: "DS",
    path: "DS/2ndyrSem2/Software_Engineering/4_SE_Unit_4_softwareMetrics.pdf"
  },
  {
    id: "ds-2ndyrsem2-software-engineering-se-unit-4-testing-strategies-1",
    name: "SE UNIT 4 (TESTING STRATEGIES)-1",
    subject: "Software Engineering",
    category: "DS",
    path: "DS/2ndyrSem2/Software_Engineering/SE UNIT -4 (TESTING STRATEGIES)-1.pdf"
  },
  {
    id: "ds-2ndyrsem2-software-engineering-se-unit-5-risk-management-part-1-1",
    name: "SE UNIT 5 (RISK MANAGEMENT PART 1)-1",
    subject: "Software Engineering",
    category: "DS",
    path: "DS/2ndyrSem2/Software_Engineering/SE UNIT -5 (RISK MANAGEMENT PART-1)-1.pdf"
  },
  {
    id: "ds-2ndyrsem2-software-engineering-se-unit-5-software-quality-management",
    name: "SE Unit 5 software quality management",
    subject: "Software Engineering",
    category: "DS",
    path: "DS/2ndyrSem2/Software_Engineering/SE-Unit_5_software-quality-management.pdf"
  },
  {
    id: "ds-2ndyrsem2-software-engineering-se-unit-4-software-testing-strategies-and-methods",
    name: "SE Unit 4 software testing strategies and methods",
    subject: "Software Engineering",
    category: "DS",
    path: "DS/2ndyrSem2/Software_Engineering/SE_Unit-4_software-testing-strategies-and-methods.pdf"
  },
  {
    id: "ds-2ndyrsem2-software-engineering-unit-1",
    name: "Software Engineering — Unit 1",
    subject: "Software Engineering",
    category: "DS",
    path: "DS/2ndyrSem2/Software_Engineering/unit-1.pdf"
  },
  {
    id: "ds-2ndyrsem2-software-engineering-unit-1-ppt",
    name: "Software Engineering — Unit 1 PPT",
    subject: "Software Engineering",
    category: "DS",
    path: "DS/2ndyrSem2/Software_Engineering/unit-1_ppt.pdf"
  },
  {
    id: "ds-2ndyrsem2-software-engineering-unit-2",
    name: "Software Engineering — Unit 2",
    subject: "Software Engineering",
    category: "DS",
    path: "DS/2ndyrSem2/Software_Engineering/unit-2.pdf"
  },
  {
    id: "ds-2ndyrsem2-software-engineering-unit-2-ppt",
    name: "Software Engineering — Unit 2 PPT",
    subject: "Software Engineering",
    category: "DS",
    path: "DS/2ndyrSem2/Software_Engineering/unit-2_ppt.pdf"
  },
  {
    id: "ds-2ndyrsem2-software-engineering-unit-3-2",
    name: "Software Engineering — Unit 3-2",
    subject: "Software Engineering",
    category: "DS",
    path: "DS/2ndyrSem2/Software_Engineering/unit-3-2.pdf"
  },
  {
    id: "ds-2ndyrsem2-software-engineering-unit-3-3",
    name: "Software Engineering — Unit 3-3",
    subject: "Software Engineering",
    category: "DS",
    path: "DS/2ndyrSem2/Software_Engineering/unit-3-3.pdf"
  },
  {
    id: "ds-2ndyrsem2-software-engineering-unit-3",
    name: "Software Engineering — Unit 3",
    subject: "Software Engineering",
    category: "DS",
    path: "DS/2ndyrSem2/Software_Engineering/unit-3.pdf"
  },
  {
    id: "ds-2ndyrsem2-software-engineering-unit-4-1",
    name: "Software Engineering — Unit 4-1",
    subject: "Software Engineering",
    category: "DS",
    path: "DS/2ndyrSem2/Software_Engineering/unit-4-1.pdf"
  },
  {
    id: "ds-2ndyrsem2-software-engineering-unit-5-1",
    name: "Software Engineering — Unit 5-1",
    subject: "Software Engineering",
    category: "DS",
    path: "DS/2ndyrSem2/Software_Engineering/unit-5-1.pdf"
  },

  // ── DS · Computer Networks ─────────────────────────────────────────
  {
    id: "ds-3rdyrsem1-comp-networks-andrew-s-tanenbaum-computer-networks-textbook",
    name: "Andrew S. Tanenbaum - Computer Networks Textbook",
    subject: "Computer Networks",
    category: "DS",
    path: "DS/3rdyrSem1/Comp_Networks/Andrew S. Tanenbaum - Computer Networks Textbook.pdf"
  },
  {
    id: "ds-3rdyrsem1-comp-networks-unit-1-pt1",
    name: "Computer Networks — Unit 1 pt1",
    subject: "Computer Networks",
    category: "DS",
    path: "DS/3rdyrSem1/Comp_Networks/unit 1 pt1.pdf"
  },
  {
    id: "ds-3rdyrsem1-comp-networks-unit-1-pt2",
    name: "Computer Networks — Unit 1 pt2",
    subject: "Computer Networks",
    category: "DS",
    path: "DS/3rdyrSem1/Comp_Networks/unit 1 pt2.pdf"
  },
  {
    id: "ds-3rdyrsem1-comp-networks-unit-2",
    name: "Computer Networks — Unit 2",
    subject: "Computer Networks",
    category: "DS",
    path: "DS/3rdyrSem1/Comp_Networks/unit 2.pdf"
  },
  {
    id: "ds-3rdyrsem1-comp-networks-unit-3-pt1",
    name: "Computer Networks — Unit 3 pt1",
    subject: "Computer Networks",
    category: "DS",
    path: "DS/3rdyrSem1/Comp_Networks/unit 3 pt1.pdf"
  },
  {
    id: "ds-3rdyrsem1-comp-networks-unit-3-pt2",
    name: "Computer Networks — Unit 3 pt2",
    subject: "Computer Networks",
    category: "DS",
    path: "DS/3rdyrSem1/Comp_Networks/unit 3 pt2.pdf"
  },
  {
    id: "ds-3rdyrsem1-comp-networks-unit-4",
    name: "Computer Networks — Unit 4",
    subject: "Computer Networks",
    category: "DS",
    path: "DS/3rdyrSem1/Comp_Networks/unit 4.pdf"
  },
  {
    id: "ds-3rdyrsem1-comp-networks-unit-5-pt1",
    name: "Computer Networks — Unit 5 pt1",
    subject: "Computer Networks",
    category: "DS",
    path: "DS/3rdyrSem1/Comp_Networks/unit 5 pt1.pdf"
  },
  {
    id: "ds-3rdyrsem1-comp-networks-unit-5-pt2",
    name: "Computer Networks — Unit 5 pt2",
    subject: "Computer Networks",
    category: "DS",
    path: "DS/3rdyrSem1/Comp_Networks/unit 5 pt2.pdf"
  },
  {
    id: "ds-3rdyrsem1-comp-networks-unit-5-pt3",
    name: "Computer Networks — Unit 5 pt3",
    subject: "Computer Networks",
    category: "DS",
    path: "DS/3rdyrSem1/Comp_Networks/unit 5 pt3.pdf"
  },

  // ── DS · Introduction to Data Science ──────────────────────────────
  {
    id: "ds-3rdyrsem1-intro-to-datasci-doing-data-science-textbook",
    name: "Doing Data Science Textbook",
    subject: "Introduction to Data Science",
    category: "DS",
    path: "DS/3rdyrSem1/Intro_To_DataSci/Doing Data Science Textbook.pdf"
  },

  // ── DS · Automata Theory & Compiler Design (ATCD) ──────────────────
  {
    id: "ds-3rdyrsem2-atcd-lecture1-introtoautomatatheory",
    name: "ATCD — Lecture 1 Intro To Automata Theory",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/Lecture1_IntroToAutomataTheory.pdf"
  },
  {
    id: "ds-3rdyrsem2-atcd-lecture2-dfa",
    name: "ATCD — Lecture 2 DFA",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/Lecture2_DFA.pdf"
  },
  {
    id: "ds-3rdyrsem2-atcd-lecture3-nfa",
    name: "ATCD — Lecture 3 NFA",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/Lecture3_NFA.pdf"
  },
  {
    id: "ds-3rdyrsem2-atcd-lecture4-enfa",
    name: "ATCD — Lecture 4 eNFA",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/Lecture4_eNFA.pdf"
  },
  {
    id: "ds-3rdyrsem2-atcd-lecture5-re",
    name: "ATCD — Lecture 5 RE",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/Lecture5_RE.pdf"
  },
  {
    id: "ds-3rdyrsem2-atcd-lecture6-pumpinglemma",
    name: "ATCD — Lecture 6 Pumping Lemma",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/Lecture6_PumpingLemma.pdf"
  },
  {
    id: "ds-3rdyrsem2-atcd-lecture7-prl",
    name: "ATCD — Lecture 7 PRL",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/Lecture7_PRL.pdf"
  },
  {
    id: "ds-3rdyrsem2-atcd-lecture8-cfg",
    name: "ATCD — Lecture 8 CFG",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/Lecture8_CFG.pdf"
  },
  {
    id: "ds-3rdyrsem2-atcd-lecture9-pda",
    name: "ATCD — Lecture 9 PDA",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/Lecture9_PDA.pdf"
  },
  {
    id: "ds-3rdyrsem2-atcd-lecture10-tm",
    name: "ATCD — Lecture 10 TM",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/Lecture10_TM.pdf"
  },
  {
    id: "ds-3rdyrsem2-atcd-lecture11-undecidability",
    name: "ATCD — Lecture 11 Undecidability",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/Lecture11_Undecidability.pdf"
  },
  {
    id: "ds-3rdyrsem2-atcd-lecture12",
    name: "ATCD — Lecture 12",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/Lecture12.pdf"
  },
  {
    id: "ds-3rdyrsem2-atcd-lecture-14-atcd",
    name: "Lecture 14 ATCD",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/Lecture-14_ATCD.pdf"
  },
  {
    id: "ds-3rdyrsem2-atcd-links",
    name: "ATCD — Links",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/links.txt"
  },
  {
    id: "ds-3rdyrsem2-atcd-problemset-mid2-atcd",
    name: "Problem Set Mid 2 ATCD",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/ProblemSet_Mid2_ATCD.pdf"
  },
  {
    id: "ds-3rdyrsem2-atcd-problemset-unit4-atcd-n-flat",
    name: "Problem Set Unit 4 ATCD & FLAT",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/ProblemSet_Unit4_ATCD_n_FLAT.pdf"
  },
  {
    id: "ds-3rdyrsem2-atcd-problemsformid1",
    name: "ATCD — Problems For Mid 1",
    subject: "Automata Theory & Compiler Design (ATCD)",
    category: "DS",
    path: "DS/3rdyrSem2/ATCD/ProblemsForMid1.pdf"
  },

  // ── DS · Big Data Analysis (BDA) ───────────────────────────────────
  {
    id: "ds-3rdyrsem2-big-data-analysis-bda-lab-linux-basic-commands-and-java-env-variables",
    name: "BDA LAB Linux Basic Commands and Java Env Variables",
    subject: "Big Data Analysis (BDA)",
    category: "DS",
    path: "DS/3rdyrSem2/Big_Data_Analysis/BDA_LAB_Linux_Basic_Commands_and_Java_Env_Variables.pdf"
  },
  {
    id: "ds-3rdyrsem2-big-data-analysis-bda-mid2-important-questions",
    name: "BDA Mid 2 Important Questions",
    subject: "Big Data Analysis (BDA)",
    category: "DS",
    path: "DS/3rdyrSem2/Big_Data_Analysis/BDA_Mid2_Important Questions.pdf"
  },
  {
    id: "ds-3rdyrsem2-big-data-analysis-hadoopsecunit",
    name: "BDA — Hadoop Sec Unit",
    subject: "Big Data Analysis (BDA)",
    category: "DS",
    path: "DS/3rdyrSem2/Big_Data_Analysis/HadoopSecUnit.pdf"
  },
  {
    id: "ds-3rdyrsem2-big-data-analysis-important-questions-mid1",
    name: "BDA — Important Questions - Mid 1",
    subject: "Big Data Analysis (BDA)",
    category: "DS",
    path: "DS/3rdyrSem2/Big_Data_Analysis/Important Questions - Mid1.pdf"
  },
  {
    id: "ds-3rdyrsem2-big-data-analysis-notesforbda-updated",
    name: "BDA — Notes (Updated)",
    subject: "Big Data Analysis (BDA)",
    category: "DS",
    path: "DS/3rdyrSem2/Big_Data_Analysis/notesforBDA-Updated.pdf"
  },
  {
    id: "ds-3rdyrsem2-big-data-analysis-unitiii-bda",
    name: "Unit III BDA",
    subject: "Big Data Analysis (BDA)",
    category: "DS",
    path: "DS/3rdyrSem2/Big_Data_Analysis/UnitIII-BDA.pdf"
  },
  {
    id: "ds-3rdyrsem2-big-data-analysis-unitiv-bda",
    name: "Unit IV BDA",
    subject: "Big Data Analysis (BDA)",
    category: "DS",
    path: "DS/3rdyrSem2/Big_Data_Analysis/UnitIV-BDA.pdf"
  },

  // ── DS · Cryptography & Network Security (CNS) ─────────────────────
  {
    id: "ds-3rdyrsem2-cns-cns-lab-record",
    name: "CNS Lab Record",
    subject: "Cryptography & Network Security (CNS)",
    category: "DS",
    path: "DS/3rdyrSem2/CNS/cns lab record .pdf"
  },
  {
    id: "ds-3rdyrsem2-cns-cns-unit21-symmetricciphers-1",
    name: "CNS UNIT 21 Symmetric Ciphers",
    subject: "Cryptography & Network Security (CNS)",
    category: "DS",
    path: "DS/3rdyrSem2/CNS/CNS-UNIT21-SymmetricCiphers (1).pdf"
  },
  {
    id: "ds-3rdyrsem2-cns-cns-unit22",
    name: "CNS UNIT 22",
    subject: "Cryptography & Network Security (CNS)",
    category: "DS",
    path: "DS/3rdyrSem2/CNS/CNS-UNIT22.pdf"
  },
  {
    id: "ds-3rdyrsem2-cns-cns-unit-11",
    name: "CNS UNIT 11",
    subject: "Cryptography & Network Security (CNS)",
    category: "DS",
    path: "DS/3rdyrSem2/CNS/CNS_UNIT-11.pdf"
  },
  {
    id: "ds-3rdyrsem2-cns-cns-unit-12",
    name: "CNS UNIT 12",
    subject: "Cryptography & Network Security (CNS)",
    category: "DS",
    path: "DS/3rdyrSem2/CNS/CNS_UNIT-12.pdf"
  },
  {
    id: "ds-3rdyrsem2-cns-cns-unit-32",
    name: "CNS UNIT 32",
    subject: "Cryptography & Network Security (CNS)",
    category: "DS",
    path: "DS/3rdyrSem2/CNS/CNS_UNIT-32.pdf"
  },
  {
    id: "ds-3rdyrsem2-cns-cns-unit-41",
    name: "CNS UNIT 41",
    subject: "Cryptography & Network Security (CNS)",
    category: "DS",
    path: "DS/3rdyrSem2/CNS/CNS_UNIT-41.pdf"
  },
  {
    id: "ds-3rdyrsem2-cns-cns-unit-51",
    name: "CNS UNIT 51",
    subject: "Cryptography & Network Security (CNS)",
    category: "DS",
    path: "DS/3rdyrSem2/CNS/CNS_UNIT-51.pdf"
  },
  {
    id: "ds-3rdyrsem2-cns-cns-unit-52",
    name: "CNS UNIT 52",
    subject: "Cryptography & Network Security (CNS)",
    category: "DS",
    path: "DS/3rdyrSem2/CNS/CNS_UNIT-52.pdf"
  },
  {
    id: "ds-3rdyrsem2-cns-cryptography-and-network-security-principles-and-practice-6th-edition-william-stallings",
    name: "Cryptography and Network Security Principles and Practice (6th Edition) (William Stallings)",
    subject: "Cryptography & Network Security (CNS)",
    category: "DS",
    path: "DS/3rdyrSem2/CNS/Cryptography and Network Security Principles and Practice (6th Edition) (William Stallings).pdf"
  },
  {
    id: "ds-3rdyrsem2-cns-smpc",
    name: "CNS — SMPC",
    subject: "Cryptography & Network Security (CNS)",
    category: "DS",
    path: "DS/3rdyrSem2/CNS/SMPC.pdf"
  },
  {
    id: "ds-3rdyrsem2-cns-sss1",
    name: "CNS — SSS1",
    subject: "Cryptography & Network Security (CNS)",
    category: "DS",
    path: "DS/3rdyrSem2/CNS/SSS1.pdf"
  },

  // ── DS · DT ────────────────────────────────────────────────────────
  {
    id: "ds-3rdyrsem2-dt-dt-questions-imp-mid1",
    name: "DT QUESTIONS Imp Mid 1",
    subject: "DT",
    category: "DS",
    path: "DS/3rdyrSem2/DT/DT QUESTIONS_Imp_Mid1.pdf"
  },
  {
    id: "ds-3rdyrsem2-dt-dt-unit-3",
    name: "DT UNIT 3",
    subject: "DT",
    category: "DS",
    path: "DS/3rdyrSem2/DT/DT UNIT-3.pdf"
  },
  {
    id: "ds-3rdyrsem2-dt-dt-unit-1",
    name: "DT Unit 1",
    subject: "DT",
    category: "DS",
    path: "DS/3rdyrSem2/DT/DT-Unit-1.pdf"
  },
  {
    id: "ds-3rdyrsem2-dt-dt-unit-2",
    name: "DT Unit 2",
    subject: "DT",
    category: "DS",
    path: "DS/3rdyrSem2/DT/DT-Unit-2.pdf"
  },
  {
    id: "ds-3rdyrsem2-dt-dt-unit-4",
    name: "DT UNIT 4",
    subject: "DT",
    category: "DS",
    path: "DS/3rdyrSem2/DT/DT-UNIT-4.pdf"
  },
  {
    id: "ds-3rdyrsem2-dt-unit-5",
    name: "DT — UNIT 5",
    subject: "DT",
    category: "DS",
    path: "DS/3rdyrSem2/DT/UNIT-5.pdf"
  },

  // ── DS · Machine Learning (ML) ─────────────────────────────────────
  {
    id: "ds-3rdyrsem2-machine-learning-ml-mid1-theory",
    name: "ML MID 1 THEORY",
    subject: "Machine Learning (ML)",
    category: "DS",
    path: "DS/3rdyrSem2/Machine_Learning/ML_MID1_THEORY.pdf"
  },
  {
    id: "ds-3rdyrsem2-machine-learning-ml-mid2-theory",
    name: "ML MID 2 THEORY",
    subject: "Machine Learning (ML)",
    category: "DS",
    path: "DS/3rdyrSem2/Machine_Learning/ML_MID2_THEORY.pdf"
  },

  // ── DS · Cloud Computing ───────────────────────────────────────────
  {
    id: "ds-4thyrsem1-cloud-computing-4a-networking-and-data-centres-for-cc",
    name: "Cloud Computing — 4A Networking and Data Centres for CC",
    subject: "Cloud Computing",
    category: "DS",
    path: "DS/4thyrSem1/Cloud_Computing/4A_Networking and Data_Centres for CC.pdf"
  },
  {
    id: "ds-4thyrsem1-cloud-computing-4b-cloud-service-providers-enhanced-v3",
    name: "4B Cloud Service Providers Enhanced v3",
    subject: "Cloud Computing",
    category: "DS",
    path: "DS/4thyrSem1/Cloud_Computing/4B_Cloud_Service_Providers_Enhanced_v3.pdf"
  },
  {
    id: "ds-4thyrsem1-cloud-computing-5a-security-for-cloud-computingv2",
    name: "5A Security for Cloud Computingv2",
    subject: "Cloud Computing",
    category: "DS",
    path: "DS/4thyrSem1/Cloud_Computing/5A_Security for Cloud Computingv2.pdf"
  },
  {
    id: "ds-4thyrsem1-cloud-computing-5b-advanced-concepts-in-cloud-computing",
    name: "5B Advanced Concepts in Cloud Computing",
    subject: "Cloud Computing",
    category: "DS",
    path: "DS/4thyrSem1/Cloud_Computing/5B_Advanced_Concepts_in_Cloud_Computing.pdf"
  },
  {
    id: "ds-4thyrsem1-cloud-computing-cc-simple-revision-notes",
    name: "Cloud Computing — CC simple Revision notes",
    subject: "Cloud Computing",
    category: "DS",
    path: "DS/4thyrSem1/Cloud_Computing/CC_simple_Revision notes.pdf"
  },
  {
    id: "ds-4thyrsem1-cloud-computing-cloud-computing-paradigms",
    name: "Cloud Computing Paradigms",
    subject: "Cloud Computing",
    category: "DS",
    path: "DS/4thyrSem1/Cloud_Computing/Cloud Computing Paradigms.pdf"
  },
  {
    id: "ds-4thyrsem1-cloud-computing-cloud-computing-unit-1",
    name: "Cloud computing UNit 1",
    subject: "Cloud Computing",
    category: "DS",
    path: "DS/4thyrSem1/Cloud_Computing/cloud-computing_UNit-1.pdf"
  },
  {
    id: "ds-4thyrsem1-cloud-computing-cloud",
    name: "Cloud Computing — Cloud",
    subject: "Cloud Computing",
    category: "DS",
    path: "DS/4thyrSem1/Cloud_Computing/cloud.pdf"
  },
  {
    id: "ds-4thyrsem1-cloud-computing-cloud-computing-complete-notes-1",
    name: "Cloud Computing Complete Notes (copy)",
    subject: "Cloud Computing",
    category: "DS",
    path: "DS/4thyrSem1/Cloud_Computing/Cloud_Computing_Complete_Notes (1).docx"
  },
  {
    id: "ds-4thyrsem1-cloud-computing-cloud-computing-complete-notes",
    name: "Cloud Computing Complete Notes",
    subject: "Cloud Computing",
    category: "DS",
    path: "DS/4thyrSem1/Cloud_Computing/Cloud_Computing_Complete_Notes.docx"
  },
  {
    id: "ds-4thyrsem1-cloud-computing-cloud-computing-part-b-all-60",
    name: "Cloud Computing Part B All 60",
    subject: "Cloud Computing",
    category: "DS",
    path: "DS/4thyrSem1/Cloud_Computing/Cloud_Computing_Part_B_All_60.docx"
  },
  {
    id: "ds-4thyrsem1-cloud-computing-soa-as-technology-drivers-for-cloud-computing",
    name: "SOA as Technology Drivers for Cloud Computing",
    subject: "Cloud Computing",
    category: "DS",
    path: "DS/4thyrSem1/Cloud_Computing/SOA as Technology Drivers for Cloud Computing.pdf"
  },
  {
    id: "ds-4thyrsem1-cloud-computing-web-2-0-and-3-0",
    name: "Cloud Computing — Web 2.0 and 3.0",
    subject: "Cloud Computing",
    category: "DS",
    path: "DS/4thyrSem1/Cloud_Computing/web 2.0 and 3.0.pptx"
  },

  // ── DS · Data Mining (DM) ──────────────────────────────────────────
  {
    id: "ds-4thyrsem1-data-mining-association-to-correlations",
    name: "Data Mining — Association to correlations",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Association to correlations.pdf"
  },
  {
    id: "ds-4thyrsem1-data-mining-decisiontreesboostingexampleproblem",
    name: "Data Mining — Decision Trees Boosting Example Problem",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/DecisionTreesBoostingExampleProblem.pdf"
  },
  {
    id: "ds-4thyrsem1-data-mining-dm-mid-2-questions",
    name: "DM mid 2 questions",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/DM mid-2  questions.docx"
  },
  {
    id: "ds-4thyrsem1-data-mining-dm-mid-2-important-questions",
    name: "DM Mid 2 Important Questions",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/DM_Mid-2_Important_Questions.docx"
  },
  {
    id: "ds-4thyrsem1-data-mining-fp-growth-algorithm-example-problems",
    name: "Data Mining — Fp growth algorithm example problems",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/fp-growth-algorithm-example-problems.pdf"
  },
  {
    id: "ds-4thyrsem1-data-mining-knn",
    name: "Data Mining — KNN",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/KNN .pdf"
  },
  {
    id: "ds-4thyrsem1-data-mining-neuralnetworks",
    name: "Data Mining — Neural Networks",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/NeuralNetworks .pdf"
  },
  {
    id: "ds-4thyrsem1-data-mining-rule-based-classification",
    name: "Data Mining — Rule Based Classification",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Rule Based Classification.pdf"
  },
  {
    id: "ds-4thyrsem1-data-mining-unit-4-clusteranalysis-short-notes",
    name: "Data Mining — Unit 4 Cluster Analysis Short notes",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Unit 4 ClusterAnalysis  Short notes.pdf"
  },
  {
    id: "ds-4thyrsem1-data-mining-unit-1-data-mining-lec-1",
    name: "Unit 1 Data Mining Lec 1",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Unit -1 Data Mining Lec-1.pptx"
  },
  {
    id: "ds-4thyrsem1-data-mining-unit-1-data-mining-lect-2-3-4",
    name: "Unit 1 Data Mining Lect 2 3 4",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Unit -1 Data Mining Lect 2_3_4.pptx"
  },
  {
    id: "ds-4thyrsem1-data-mining-unit-1-data-mining-part-2",
    name: "Unit 1 Data Mining part 2",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Unit -1 Data Mining part-2.pptx"
  },
  {
    id: "ds-4thyrsem1-data-mining-unit-1-data-mining-part-3-data-preprocessing",
    name: "Unit 1 Data Mining Part 3 Data Preprocessing",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Unit -1 Data Mining Part-3_ Data Preprocessing.pptx"
  },
  {
    id: "ds-4thyrsem1-data-mining-unit-2-part-1",
    name: "Data Mining — Unit 2 Part 1",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Unit -2 Part-1.pptx"
  },
  {
    id: "ds-4thyrsem1-data-mining-unit-2-part-2",
    name: "Data Mining — Unit 2 part 2",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Unit -2 part-2.pptx"
  },
  {
    id: "ds-4thyrsem1-data-mining-unit-2-part-3",
    name: "Data Mining — Unit 2 Part 3",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Unit -2 Part-3.pptx"
  },
  {
    id: "ds-4thyrsem1-data-mining-unit-3-part-1",
    name: "Data Mining — Unit 3 Part 1",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Unit -3 Part-1.pptx"
  },
  {
    id: "ds-4thyrsem1-data-mining-unit-4-data-mining-textbook-notes",
    name: "Unit 4 Data Mining textbook notes",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Unit -4 Data Mining textbook notes.pptx"
  },
  {
    id: "ds-4thyrsem1-data-mining-unit-3-basics",
    name: "Data Mining — Unit 3 Basics",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Unit-3 Basics .pptx"
  },
  {
    id: "ds-4thyrsem1-data-mining-unit-3-basics-pdf",
    name: "Data Mining — Unit 3 Basics",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Unit-3 Basics.pdf"
  },
  {
    id: "ds-4thyrsem1-data-mining-unit-3-svm-knn-rb-nn",
    name: "Data Mining — Unit 3 SVM KNN RB NN",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Unit-3 SVM_KNN_RB_NN.pdf"
  },
  {
    id: "ds-4thyrsem1-data-mining-unit-4-outlieranalysis-short-notes",
    name: "Data Mining — Unit 4 Outlier Analysis short notes",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Unit-4 OutlierAnalysis  short notes.pdf"
  },
  {
    id: "ds-4thyrsem1-data-mining-unit-5-web-spatial-temporal-mining",
    name: "Data Mining — Unit 5 Web Spatial Temporal Mining",
    subject: "Data Mining (DM)",
    category: "DS",
    path: "DS/4thyrSem1/Data_Mining/Unit-5  Web Spatial Temporal Mining.pdf"
  },

  // ── DS · Natural Language Processing (NLP) ─────────────────────────
  {
    id: "ds-4thyrsem1-natural-language-processing-difference-between-framenet-and-propbank",
    name: "NLP — Difference Between Frame Net and Prop Bank",
    subject: "Natural Language Processing (NLP)",
    category: "DS",
    path: "DS/4thyrSem1/Natural_Language_Processing/Difference_Between_FrameNet_and_PropBank.pdf"
  },
  {
    id: "ds-4thyrsem1-natural-language-processing-natural-language-processing-ramesh-babu-sir-notes-unit-1-to-5-pdf",
    name: "Natural Language Processing — Ramesh Babu Sir Notes (Units 1–5)",
    subject: "Natural Language Processing (NLP)",
    category: "DS",
    path: "DS/4thyrSem1/Natural_Language_Processing/Natural Language Processing [Ramesh Babu sir notes] unit 1 to 5.pdf.pdf"
  },
  {
    id: "ds-4thyrsem1-natural-language-processing-natural-language-processing",
    name: "Natural Language Processing",
    subject: "Natural Language Processing (NLP)",
    category: "DS",
    path: "DS/4thyrSem1/Natural_Language_Processing/Natural Language Processing.pdf"
  },
  {
    id: "ds-4thyrsem1-natural-language-processing-natural-language-processing-unit-1-2-ramesh-babu-sir-notes",
    name: "Natural Language Processing — Ramesh Babu Sir Notes (Units 1 & 2)",
    subject: "Natural Language Processing (NLP)",
    category: "DS",
    path: "DS/4thyrSem1/Natural_Language_Processing/Natural Language Processing_ UNIT 1&2 [ Ramesh Babu Sir Notes ].pdf"
  },
  {
    id: "ds-4thyrsem1-natural-language-processing-nlp-all5units-impqs",
    name: "NLP all5units impqs",
    subject: "Natural Language Processing (NLP)",
    category: "DS",
    path: "DS/4thyrSem1/Natural_Language_Processing/NLP_all5units_impqs.docx"
  },
  {
    id: "ds-4thyrsem1-natural-language-processing-nlp-extra-1mark-questions-1",
    name: "NLP Extra 1Mark Questions",
    subject: "Natural Language Processing (NLP)",
    category: "DS",
    path: "DS/4thyrSem1/Natural_Language_Processing/NLP_Extra_1Mark_Questions (1).docx"
  },
  {
    id: "ds-4thyrsem1-natural-language-processing-nlp-mid2-important-questions",
    name: "NLP Mid 2 Important Questions",
    subject: "Natural Language Processing (NLP)",
    category: "DS",
    path: "DS/4thyrSem1/Natural_Language_Processing/NLP_Mid2_Important_Questions.docx"
  },
  {
    id: "ds-4thyrsem1-natural-language-processing-nlp-sem-full",
    name: "NLP Sem Full",
    subject: "Natural Language Processing (NLP)",
    category: "DS",
    path: "DS/4thyrSem1/Natural_Language_Processing/NLP_Sem_Full.docx"
  },

  // ── DS · Predictive Analysis (PA) ──────────────────────────────────
  {
    id: "ds-4thyrsem1-predictive-analysis-memory-palace-method-unit-3-to-4-mid2",
    name: "PA — Memory Palace method - unit 3 to 4 [mid 2]",
    subject: "Predictive Analysis (PA)",
    category: "DS",
    path: "DS/4thyrSem1/Predictive_Analysis/Memory_Palace_method - unit 3 to 4 [mid2].docx"
  },
  {
    id: "ds-4thyrsem1-predictive-analysis-pa-mid2-all2marksqs",
    name: "PA mid 2 all2marksqs",
    subject: "Predictive Analysis (PA)",
    category: "DS",
    path: "DS/4thyrSem1/Predictive_Analysis/PA_mid2_all2marksqs.docx"
  },
  {
    id: "ds-4thyrsem1-predictive-analysis-pa-mid2-all5marksqs",
    name: "PA MID 2 all5marksqs",
    subject: "Predictive Analysis (PA)",
    category: "DS",
    path: "DS/4thyrSem1/Predictive_Analysis/PA_MID2_all5marksqs.docx"
  },
  {
    id: "ds-4thyrsem1-predictive-analysis-pa-notes-units-1-to-3",
    name: "PA Notes Units 1 to 3",
    subject: "Predictive Analysis (PA)",
    category: "DS",
    path: "DS/4thyrSem1/Predictive_Analysis/PA_Notes_Units_1_to_3.docx"
  },
  {
    id: "ds-4thyrsem1-predictive-analysis-unit-v",
    name: "PA — UNIT V",
    subject: "Predictive Analysis (PA)",
    category: "DS",
    path: "DS/4thyrSem1/Predictive_Analysis/UNIT - V.pptx"
  },
  {
    id: "ds-4thyrsem1-predictive-analysis-unit-2",
    name: "PA — Unit 2",
    subject: "Predictive Analysis (PA)",
    category: "DS",
    path: "DS/4thyrSem1/Predictive_Analysis/unit-2.pptx"
  },
  {
    id: "ds-4thyrsem1-predictive-analysis-unit-3",
    name: "PA — Unit 3",
    subject: "Predictive Analysis (PA)",
    category: "DS",
    path: "DS/4thyrSem1/Predictive_Analysis/unit-3.pdf"
  },
  {
    id: "ds-4thyrsem1-predictive-analysis-unit-4",
    name: "PA — Unit 4",
    subject: "Predictive Analysis (PA)",
    category: "DS",
    path: "DS/4thyrSem1/Predictive_Analysis/unit-4.pdf"
  },
  {
    id: "ds-4thyrsem1-predictive-analysis-unit-1",
    name: "PA — Unit 1",
    subject: "Predictive Analysis (PA)",
    category: "DS",
    path: "DS/4thyrSem1/Predictive_Analysis/unit_1.pdf"
  },
  {
    id: "ds-4thyrsem1-predictive-analysis-unit-1-pptx",
    name: "PA — Unit 1",
    subject: "Predictive Analysis (PA)",
    category: "DS",
    path: "DS/4thyrSem1/Predictive_Analysis/unit_1.pptx"
  },
  {
    id: "ds-4thyrsem1-predictive-analysis-unit-3-pptx",
    name: "PA — Unit 3",
    subject: "Predictive Analysis (PA)",
    category: "DS",
    path: "DS/4thyrSem1/Predictive_Analysis/unit_3.pptx"
  },
  {
    id: "ds-4thyrsem1-predictive-analysis-unit-3-midterm-2",
    name: "PA — Unit 3 midterm 2",
    subject: "Predictive Analysis (PA)",
    category: "DS",
    path: "DS/4thyrSem1/Predictive_Analysis/unit_3_midterm-2.pptx"
  },
  {
    id: "ds-4thyrsem1-predictive-analysis-unit-3cnn",
    name: "PA — Unit 3 CNN",
    subject: "Predictive Analysis (PA)",
    category: "DS",
    path: "DS/4thyrSem1/Predictive_Analysis/unit_3CNN.pdf"
  },
  {
    id: "ds-4thyrsem1-textbooks-dean-abbott-applied-predictive-analytics-principles-and-techniques-for-the-professional-data-analyst-wiley-2014",
    name: "Applied Predictive Analytics — Dean Abbott (Wiley, 2014)",
    subject: "Predictive Analysis (PA)",
    category: "DS",
    path: "DS/4thyrSem1/textbooks/dean-abbott-applied-predictive-analytics_-principles-and-techniques-for-the-professional-data-analyst-wiley-2014.pdf"
  },

  // ── DS · Web & Social Media Analytics (WSMA) ───────────────────────
  {
    id: "ds-4thyrsem1-web-n-socialmedia-analytics-w-sma-unit-3-4",
    name: "WSMA — Units 3 & 4",
    subject: "Web & Social Media Analytics (WSMA)",
    category: "DS",
    path: "DS/4thyrSem1/Web_n_SocialMedia_Analytics/_W&SMA Unit 3& 4.pdf"
  },
  {
    id: "ds-4thyrsem1-web-n-socialmedia-analytics-unit-1-additionalmaterial",
    name: "WSMA — Unit 1 additionalmaterial",
    subject: "Web & Social Media Analytics (WSMA)",
    category: "DS",
    path: "DS/4thyrSem1/Web_n_SocialMedia_Analytics/Unit 1_additionalmaterial.pdf"
  },
  {
    id: "ds-4thyrsem1-web-n-socialmedia-analytics-w-sma-unit-1-2",
    name: "WSMA — Units 1 & 2",
    subject: "Web & Social Media Analytics (WSMA)",
    category: "DS",
    path: "DS/4thyrSem1/Web_n_SocialMedia_Analytics/W&SMA Unit 1  &2.pdf"
  },
  {
    id: "ds-4thyrsem1-web-n-socialmedia-analytics-wsma-mid2",
    name: "WSMA Mid 2",
    subject: "Web & Social Media Analytics (WSMA)",
    category: "DS",
    path: "DS/4thyrSem1/Web_n_SocialMedia_Analytics/WSMA_Mid2.docx"
  },
  {
    id: "ds-4thyrsem1-web-n-socialmedia-analytics-wsma-semexam",
    name: "WSMA Sem Exam",
    subject: "Web & Social Media Analytics (WSMA)",
    category: "DS",
    path: "DS/4thyrSem1/Web_n_SocialMedia_Analytics/WSMA_SemExam.docx"
  },
  {
    id: "ds-4thyrsem1-web-n-socialmedia-analytics-wsma-semexam-wtables",
    name: "WSMA Sem Exam wtables",
    subject: "Web & Social Media Analytics (WSMA)",
    category: "DS",
    path: "DS/4thyrSem1/Web_n_SocialMedia_Analytics/WSMA_SemExam_wtables.docx"
  },

  // ── PYQs · NLP ─────────────────────────────────────────────────────
  {
    id: "pyqs-2023-2027-batch-papers-cse-nlp-exam-key-booklet",
    name: "NLP EXAM KEY BOOKLET",
    subject: "NLP",
    category: "PYQs",
    path: "PYQs/2023-2027 batch papers/CSE/NLP EXAM KEY BOOKLET.pdf"
  },
  {
    id: "pyqs-2023-2027-batch-papers-cse-nlp-mid-1",
    name: "NLP MID 1",
    subject: "NLP",
    category: "PYQs",
    path: "PYQs/2023-2027 batch papers/CSE/NLP MID-1.pdf"
  },
  {
    id: "pyqs-2023-2027-batch-papers-cse-nlp-mids-question-paper",
    name: "NLP mids question paper",
    subject: "NLP",
    category: "PYQs",
    path: "PYQs/2023-2027 batch papers/CSE/NLP mids question paper.pdf"
  },
  {
    id: "pyqs-2023-2027-batch-papers-cse-question-bank-nlp-mid1",
    name: "Question bank NLP mid 1",
    subject: "NLP",
    category: "PYQs",
    path: "PYQs/2023-2027 batch papers/CSE/question bank_nlp_mid1.pdf"
  },

  // ── PYQs · ADA ─────────────────────────────────────────────────────
  {
    id: "pyqs-2023-2027-batch-papers-ds-ada-2025-mid2",
    name: "ADA Mid 2 — 2025 (image)",
    subject: "ADA",
    category: "PYQs",
    path: "PYQs/2023-2027 batch papers/DS/ADA_2025_mid2.jpg"
  },

  // ── PYQs · CNS ─────────────────────────────────────────────────────
  {
    id: "pyqs-2023-2027-batch-papers-ds-cns-mids-and-sem-year-2025",
    name: "CNS Mids and Sem Papers — 2025",
    subject: "CNS",
    category: "PYQs",
    path: "PYQs/2023-2027 batch papers/DS/CNS Mids and Sem [year 2025].pdf"
  },

  // ── PYQs · Predictive Analysis (PA) ────────────────────────────────
  {
    id: "pyqs-2023-2027-batch-papers-ds-mid1labexam-pa-2026yr-4thyrsem1",
    name: "PA Mid 1 Lab Exam — 2026 (4th Year Sem 1)",
    subject: "Predictive Analysis (PA)",
    category: "PYQs",
    path: "PYQs/2023-2027 batch papers/DS/mid1labexam_PA_2026yr_4thyrsem1.pdf"
  },

  // ── Lab_Codes · Cryptography & Network Security (CNS) ──────────────
  {
    id: "lab-codes-cns-lab-record",
    name: "CNS Lab Record",
    subject: "Cryptography & Network Security (CNS)",
    category: "Lab_Codes",
    path: "Lab_Codes/cns lab record .pdf"
  },

  // ── Lab_Codes · Lab Codes ──────────────────────────────────────────
  {
    id: "lab-codes-files",
    name: "Lab Files (files.zip)",
    subject: "Lab Codes",
    category: "Lab_Codes",
    path: "Lab_Codes/files.zip",
    githubOnly: true
  },
  {
    id: "lab-codes-idk-which-subject-is-this",
    name: "Lab Files — Subject Unknown (zip)",
    subject: "Lab Codes",
    category: "Lab_Codes",
    path: "Lab_Codes/idk which subject is this.zip",
    githubOnly: true
  },

  // ── Lab_Codes · Natural Language Processing (NLP) ──────────────────
  {
    id: "lab-codes-nlp-lab-notes-3col-1",
    name: "NLP Lab Notes 3col",
    subject: "Natural Language Processing (NLP)",
    category: "Lab_Codes",
    path: "Lab_Codes/NLP_Lab_Notes_3col (1).pdf"
  },

  // ── Lab_Codes · Web & Social Media Analytics (WSMA) ────────────────
  {
    id: "lab-codes-wsma",
    name: "WSMA — wsma.txt",
    subject: "Web & Social Media Analytics (WSMA)",
    category: "Lab_Codes",
    path: "Lab_Codes/wsma.txt"
  },
  {
    id: "lab-codes-wsmafinal",
    name: "WSMA — wsmafinal.txt",
    subject: "Web & Social Media Analytics (WSMA)",
    category: "Lab_Codes",
    path: "Lab_Codes/wsmafinal.txt"
  },

  // ── ZtoA files · Academic Calendars ────────────────────────────────
  {
    id: "ztoa-files-calendars-2nd-3rd-4th-academic-calendar-2026-27-v1",
    name: "2nd–3rd–4th Academic calendar 2026-27 V1",
    subject: "Academic Calendars",
    category: "ZtoA files",
    path: "ZtoA files/Calendars/2nd_3rd_4th_Academic_calendar_2026-27_V1.docx"
  },
  {
    id: "ztoa-files-calendars-academiccalendar2025-26",
    name: "Academic Calendar 2025-26",
    subject: "Academic Calendars",
    category: "ZtoA files",
    path: "ZtoA files/Calendars/AcademicCalendar2025-26.pdf"
  },

  // ── ZtoA files · R22 Syllabus ──────────────────────────────────────
  {
    id: "ztoa-files-r22-syllabus-1st-year-b-tech-csam",
    name: "Syllabus — 1st year B.Tech CSAM",
    subject: "R22 Syllabus",
    category: "ZtoA files",
    path: "ZtoA files/R22_Syllabus/1st year B.Tech CSAM.docx"
  },
  {
    id: "ztoa-files-r22-syllabus-1st-year-b-tech-cse-aiml",
    name: "Syllabus — 1st year B.Tech CSE AIML",
    subject: "R22 Syllabus",
    category: "ZtoA files",
    path: "ZtoA files/R22_Syllabus/1st year B.Tech CSE AIML.docx"
  },
  {
    id: "ztoa-files-r22-syllabus-1st-year-b-tech-cse-ds",
    name: "Syllabus — 1st year B.Tech CSE DS",
    subject: "R22 Syllabus",
    category: "ZtoA files",
    path: "ZtoA files/R22_Syllabus/1st year B.Tech CSE DS.docx"
  },
  {
    id: "ztoa-files-r22-syllabus-1st-year-b-tech-cse",
    name: "Syllabus — 1st year B.Tech CSE",
    subject: "R22 Syllabus",
    category: "ZtoA files",
    path: "ZtoA files/R22_Syllabus/1st year B.Tech CSE.docx"
  },
  {
    id: "ztoa-files-r22-syllabus-2nd-year-b-tech-csam",
    name: "Syllabus — 2nd year B.Tech CSAM",
    subject: "R22 Syllabus",
    category: "ZtoA files",
    path: "ZtoA files/R22_Syllabus/2nd year B.Tech CSAM.docx"
  },
  {
    id: "ztoa-files-r22-syllabus-2nd-year-b-tech-cse-aiml",
    name: "Syllabus — 2nd year B.Tech CSE AIML",
    subject: "R22 Syllabus",
    category: "ZtoA files",
    path: "ZtoA files/R22_Syllabus/2nd year B.Tech CSE AIML.docx"
  },
  {
    id: "ztoa-files-r22-syllabus-2nd-year-b-tech-cse-ds",
    name: "Syllabus — 2nd year B.Tech CSE DS",
    subject: "R22 Syllabus",
    category: "ZtoA files",
    path: "ZtoA files/R22_Syllabus/2nd year B.Tech CSE DS.docx"
  },
  {
    id: "ztoa-files-r22-syllabus-2nd-year-b-tech-cse",
    name: "Syllabus — 2nd year B.Tech CSE",
    subject: "R22 Syllabus",
    category: "ZtoA files",
    path: "ZtoA files/R22_Syllabus/2nd year B.Tech CSE.docx"
  },
  {
    id: "ztoa-files-r22-syllabus-3rd-4-th-year-b-tech-cse-ds",
    name: "Syllabus — 3rd–4th year B.Tech CSE DS",
    subject: "R22 Syllabus",
    category: "ZtoA files",
    path: "ZtoA files/R22_Syllabus/3rd_4 th year B.Tech CSE DS.docx"
  },
  {
    id: "ztoa-files-r22-syllabus-3rd-4-th-year-b-tech-cse-v1",
    name: "Syllabus — 3rd–4th year B.Tech CSE V1",
    subject: "R22 Syllabus",
    category: "ZtoA files",
    path: "ZtoA files/R22_Syllabus/3rd_4 th year B.Tech CSE V1.docx"
  },

  // ── ZtoA files · Templates ─────────────────────────────────────────
  {
    id: "ztoa-files-templates-images-removebg-preview",
    name: "Template Image — images-removebg-preview",
    subject: "Templates",
    category: "ZtoA files",
    path: "ZtoA files/Templates/images-removebg-preview.png"
  },
  {
    id: "ztoa-files-templates-prc-i-presentation-template",
    name: "PRC I Presentation Template",
    subject: "Templates",
    category: "ZtoA files",
    path: "ZtoA files/Templates/PRC-I_Presentation_Template.pptx"
  }
];
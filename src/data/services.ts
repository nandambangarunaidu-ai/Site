const services = [
  {
    slug: 'abhyanga',
    title: 'Abhyanga',
    heroImage: '/Abhya.jpeg',
    short: 'Warm oil Ayurvedic full-body massage for relaxation and detoxification.',
    content: `Abhyanga is a traditional Ayurvedic full-body massage using warm herbal oils.

The treatment involves long, rhythmic strokes applied to the whole body to nourish tissues, stimulate circulation, and encourage lymphatic drainage. Abhyanga is commonly used to reduce stress, improve skin tone, relieve muscular tension, and support the body’s natural detoxification processes. Oils and herbal preparations are chosen according to the client's constitution (dosha) and current health needs.

Typical session benefits include enhanced relaxation, improved sleep quality, softened skin, and reduced stiffness. It is frequently used as a foundation therapy in Ayurvedic rejuvenation programs and can be adapted in pressure and duration to address specific complaints such as fatigue or chronic tension.`
  },
  {
    slug: 'colon-hydro-therapy',
    title: 'Colon hydro therapy',
    heroImage: '/colon.jpg',
    short: 'Gentle colonic irrigation to cleanse the large intestine and support digestive health.',
    content: `Colon hydrotherapy (colonic irrigation) is a procedure that gently flushes the large intestine with warm, filtered water to remove impacted waste and promote bowel regularity.

Sessions are typically performed by a trained practitioner using disposable equipment in a private, hygienic setting. The therapy aims to reduce bloating, support detoxification, and create a healthier environment for nutrient absorption by clearing accumulated residues.

While some people report improved digestion and increased energy after treatment, clinicians recommend colon hydrotherapy as a complementary approach rather than a primary treatment for gastrointestinal conditions. A practitioner will assess suitability and recommend frequency depending on individual needs.`
  },
  {
    slug: 'shirodhara',
    title: 'Shirodhara',
    heroImage: '/shiro.jpeg',
    short: 'Warm, steady stream of oil poured on the forehead to calm the nervous system.',
    content: `Shirodhara is an Ayurvedic therapy where a steady stream of warm medicated oil (or other liquids) is poured over the forehead and scalp.

The technique is deeply relaxing and is used to soothe the nervous system, ease tension headaches, and support mental clarity and sleep. The continuous, gentle flow targets the 'third eye' area and induces a meditative, parasympathetic state.

Shirodhara is often combined with other Ayurvedic treatments such as abhyanga (oil massage) and is tailored by selecting oils and herbs appropriate for the individual's constitution and presenting imbalances.`
  },
  {
    slug: 'steambath',
    title: 'Steambath',
    heroImage: '/sb.jpg',
    short: 'Warm steam therapy to open pores, relax muscles, and support respiratory health.',
    content: `A steambath, or steam bath, exposes the body to humid, warm air and helps open pores, relax muscles, and loosen mucus in the airways.

The moist heat promotes sweating which can support skin cleansing and temporary relief of muscular tension. Steam sessions are commonly used before bodywork to prepare tissues and after some respiratory conditions to help ease congestion.

Clients should stay hydrated and avoid excessive exposure; steam therapy is contraindicated for certain cardiovascular or acute health conditions, so an intake assessment is recommended.`
  },
  {
    slug: 'ozone-therapy',
    title: 'Ozone therapy',
    heroImage: '/ozone.jpg',
    short: 'Medical ozone applications intended to support circulation and immune response.',
    content: `Ozone therapy uses ozone gas (a mixture of oxygen and ozone) in controlled medical applications. Practitioners apply ozone via methods such as ozonated oils, minor autohemotherapy, or localized insufflation depending on goals.

Proponents report benefits for circulation, immune modulation, and wound healing; however, scientific opinions vary and some approaches are considered experimental. Safety and regulatory status differ by country and clinic, so treatments should be provided by trained medical professionals with informed consent.

A qualified practitioner will review medical history and explain potential risks, expected outcomes, and alternatives before treatment.`
  },
  {
    slug: 'kati-vasthi',
    title: 'Kati vasthi',
    heroImage: '/kati_vasti.jpeg',
    short: 'Ayurvedic localized oil pool for lower back pain and lumbar support.',
    content: `Kati Vasti (Kati Vasthi) is a classical Ayurvedic procedure that treats the lower back by creating a shallow reservoir (dough dam) over the lumbar area and filling it with warm medicated oil.

The oil is retained for a prescribed duration to deeply penetrate tissues, reduce inflammation, soothe nerves, and relieve chronic or acute lower back pain. It is commonly recommended for muscular strain, lumbar disc issues, and stiffness in the lower spine.

Sessions are usually followed by gentle massage and specific lifestyle or exercise recommendations to support recovery.`
  },
  {
    slug: 'jaanu-vasthi',
    title: 'Jaanu vasthi',
    heroImage: '/janu_vasti.jpeg',
    short: 'Targeted Ayurvedic oil therapy for the knee joint to relieve pain and stiffness.',
    content: `Janu Vasti is an Ayurvedic treatment designed for the knee joint. A dough dam is placed around the knee and warm medicated oil is retained over the joint to nourish and lubricate tissues.

This localized therapy helps reduce inflammation, relieve pain, and improve joint mobility. It is often used alongside herbs, physiotherapeutic exercises, and other Ayurvedic measures for degenerative or inflammatory knee conditions.

Treatment frequency and oil formulation are selected based on the individual's constitution and the specific knee pathology.`
  },
  {
    slug: 'kati-snanam',
    title: 'Kati snanam',
    heroImage: '/kati_snanam.jpeg',
    short: 'Therapeutic lumbar soak or bath to soothe the lower back and relieve muscular tension.',
    content: `Kati Snanam refers to therapeutic bathing or localized soaking of the lower back area using herbal decoctions or medicated oils.

The practice soothes tense muscles, reduces localized pain, and supports circulation to the lumbar region. It may be recommended as a preparatory or follow-up therapy to other Ayurvedic treatments for back complaints.

Practitioners tailor the herbs and temperature to the client's condition, aiming to ease stiffness and encourage healing.`
  },
  {
    slug: 'acupuncture-therapy',
    title: 'Accupuncture therapy',
    heroImage: '/at.jpeg',
    short: 'Traditional Chinese medicine using fine needles to rebalance energy and relieve pain.',
    content: `Acupuncture is a component of Traditional Chinese Medicine in which fine needles are inserted into specific points on the body to influence energy flow (qi) and restore balance.

Clinical uses include pain management, musculoskeletal issues, headaches, and supporting stress reduction. Sessions are individualized; points are selected based on the presenting symptoms and a holistic assessment.

When administered by licensed practitioners, acupuncture is generally well tolerated. It is commonly used alongside other therapeutic modalities for a comprehensive approach to health.`
  },
  {
    slug: 'cupping-therapy',
    title: 'Cupping Therapy',
    heroImage: '/ct.jpeg',
    short: 'Suction-based therapy to increase circulation and relieve myofascial tension.',
    content: `Cupping therapy applies suction cups to the skin to lift tissues and increase blood flow in targeted areas. Techniques include stationary cupping and moving cupping (gliding).

The increased circulation can help relieve muscle tension, reduce pain, and encourage localized healing. Marks or temporary discoloration are common and generally resolve within several days.

Cupping is often integrated into musculoskeletal treatment plans and should be performed by trained therapists who assess contraindications such as skin conditions or bleeding disorders.`
  },
  {
    slug: 'foot-detox',
    title: 'Foot detox',
    heroImage: '/ft.jpeg',
    short: 'Foot-based detoxification therapies such as ionic foot baths and reflexology.',
    content: `Foot detox treatments encompass several practices, including ionic foot baths and therapeutic foot soaks, sometimes combined with reflexology.

Practitioners claim these therapies support elimination pathways and promote relaxation; supporting evidence varies by modality. Reflexology, which applies pressure to reflex points on the feet, is commonly used to support relaxation and circulation.

Clients are advised to view foot detox treatments as complementary care that may support well-being alongside evidence-based medical approaches.`
  },
  {
    slug: 'blood-circulating-machine',
    title: 'Blood circulating machine',
    heroImage: '/bcm.jpeg',
    short: 'Mechanical devices designed to improve peripheral circulation and reduce edema.',
    content: `Blood circulation machines is a general term referring to devices (such as pneumatic compression systems or passive circulation devices) used to improve peripheral blood flow and reduce swelling.

Applications include post-operative recovery, management of venous insufficiency, and support for patients with limited mobility. Devices vary in mechanism and clinical indication; some use sequential compression while others provide gentle motion to limbs.

A clinician should recommend appropriate devices after evaluating medical history and circulation needs.`
  },
  {
    slug: 'yoga-therapy',
    title: 'Yoga therapy',
    heroImage: '/yt.jpeg',
    short: 'Individualized yoga programs to address physical, mental, and emotional health.',
    content: `Yoga therapy uses adapted yoga practices—postures, breathwork, relaxation, and mindfulness—tailored to an individual's health goals and clinical conditions.

Therapy plans are designed to improve mobility, reduce pain, manage stress, and support mental health. Qualified yoga therapists integrate assessment and incremental progression to ensure safety and efficacy.

Yoga therapy is often combined with other complementary and conventional treatments to support holistic recovery and long-term wellness.`
  }
];

export default services;

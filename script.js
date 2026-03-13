// Pratidnya data for each page
const pratidnyaArr = [
  'नामधारकास चारी मुक्तींची प्राप्ति, नाममहिमा व भागवत प्रामाण्य.',
  'वेदशास्त्रनिर्णय व नाममहिमा.',
  'सगुण निर्गुण वादनिषेध व नाममहिमा',
  'इतर साधनांचा निषेध',
  'इतर साधनांचा निषेध.',
  'सत्संगाचा महिमा, संकेतदृष्टि आणि स्वलोप.',
  'नाममहिमा व इतर शब्दवादाचा निषेध.',
  'सत्संगमहिमा व नाममहिमा',
  'इतर साधनांचा निषेध',
  'नामस्मरण प्रमाण व इतर साधन अप्रमाण.',
  'नाममहिमा व वेदाची कुंठित गती.',
  'हरिनामाविषयी मानसिक साधन व इतर बाह्य साधनांचा भक्तीत अनुपयोग. सद्गुरु गुणाणीत. गुरुकृपेचे आभार.',
  'हरिरूप ऐक्यत्व फळ, इतर योगादि सिद्धींचा निषेध, भक्ताचे हरिरूपी समाधान',
  'स्वोपदेश महिमा, नामधारकाची जीवन्मुक्ती, देवतांचे हृदयी विष्णुनामाची ख्याती, नामधारकाविषयी कालनिषेध, नामधारकास दोषांची बाधा नाही. नामाने सर्व साधनसिद्धी व नामधारकास आश्वासन.',
  'वैराग्य व संसाराचे मिथ्यात्व, समबुद्धीचे तात्पर्य. सगुण ध्यानाने शमदमांची प्राप्ती, जीवेश्वर भिन्न ठेवून नाम घेणाऱ्याचा निषेध, अद्वैताचे अंतर महापुरुष जाणतो.',
  'नामस्मरणांत सर्व सिद्धींचा समन्वय',
  'गुरूपदेश कीर्तीनेंच सर्वसिद्धी, नामस्मरणाचे व गुरूपदेश कीर्तीचेच समान फल, गुरुमुखापासूनच नामस्मरण सफल, गीतोक्तिसमुद्धार, नामधारक प्रलयात नाश पावत नाही, म्हणून तो अमर. नामधारकाचे आईबाप विष्णुरूप, सारूप्य मुक्तीत जीवाचा जीवपणा नाश पावत नाही, तृप्तीचे ढेंकर आणि सद्गुरुकृपेचे आभार.',
  'पुराणांचा अंगीकार व नामास त्यांचे प्रामाण्य, नाम घेणारास वर्णाश्रम चुकल्याची बाधा नाही, नामधारकास भूमीवरच वैकुंठ, स्वोपदेशी स्थिरता करण्याची आज्ञा, नामावाचून ध्यानाचा निषेध.',
  'सनत्कुमार व नारदसंवादाचे अभिनंदन, नामास वेदशास्त्र प्रमाण, शाक्तादि काम्यमंत्रजपनिषेध. अज्ञानपूर्वक नीतीशास्त्र, धर्मशास्त्र, मीमांसादि शास्त्रांचा निषेध, नामधारकाचे कुळास यम भितो.',
  'नामसाधनाचा उपक्रम',
  'नामस्मरणास काळनियमनिषेध, श्रोतृपक्षाचे व वक्तृपक्षाचे कल्याण. पाषाण, पशुपक्षादि श्रोतृपक्ष व ब्राह्मणादि मनुष्यजाती वक्तृपक्ष, तेच जडजीव, या दोहोंचा उद्धार. माहात्म्य कळो न कळो नाम घेतच राहावे. भक्तीत पाषाणादिकापासून देवापर्यंत सर्व जीवांचा समान अधिकार, दुसऱ्यास उपदेश करताना आपलेही आईबाप उद्धरतात. याची ऐतिह्य प्रमाणाने सिद्धी.',
  'नामसाधन करण्याविषयी आज्ञा, नामधारकाचा रक्षक वासुदेव, हरिनामस्मरण न करणाऱ्यास जीवन्नरकप्राप्ती, नामधारकास ज्याप्रमाणे जीवन्मुक्ती व विदेहमुक्ती त्याप्रमाणे नाम न घेणाऱ्यास जीवन्नरक व मेल्यावरही नरक. सच्छिष्याचा श्रीगुरूस प्रश्न, नाम पंचभूतमय नसून व्यापक आहे, असे सद्गुरूंचे उत्तर. आकाशाचे शब्दपण नामास लागू नाही.',
  'सर्व शास्त्रांत अधिष्ठानाची परोक्षता व नामात अपरोक्षता, ईश्वर कर्ता म्हणणाराकडे गौणत्व, निःसाधन नामसिद्धी, भक्तीचे असाध्यत्व, प्रणवादिनाम जपण्यापुरताच योगियांचा अर्धा अंगीकार, नाम सोडून योगियांना योग साधता येत नाही. वाणीने रामकृष्ण जपाचा घोष ही संप्रदायाची कर्तव्यता.',
  'प्रेमात सर्व कर्माचे तात्पर्य, नामस्मरणावाचून वर्णाश्रमाचा निषेध, प्रेमयुक्त नामस्मरण मुखी असता वैराग्याची व संसाराची समानता, नाम घेतले असता वर्णाश्रम सोडावाच असा आग्रह नाही. नामधारकाची वैकुंटात विष्णु आधीच व्यवस्था करून ठेवितो.',
  'संकेतदृष्टीने स्वरूपज्ञान व अज्ञान यांचे खंडन, इतकेही होऊन हरिनाम चालूच असावे. उत्तर भक्तीचे स्वरूप. सर्व लोकांत वैकुंट व्यापक आहे. ज्ञानेश्वर स्मरण.',
  'संकेत जाणून नामाची विशेषता, भगवंताचे दयाळुत्वगुणवर्णन, रामकृष्ण नामावांचून इतर साधने नकोत, कळकळीने नामाचा उपदेश, नामांत मनाची एकाग्रता. नाम हे तत्त्व, इतर साऱ्या वृत्ती. लोकांस दुसऱ्या मार्गाने न जाऊं देण्याची सक्ती, भक्तेतर जनांशी भाषणनिषेध, नित्य नाम जपा मग माळ नसली तर नसो.',
  'उपदेशाचे चुटके, जगात वागण्याची रीती, हरिनामावाचून वेदशास्त्र खोटे, जीवंत समाधि-नामस्मरण.',
  "नामाची गुरुगम्यता, गुरुमुखापासून नामप्राप्तींचा संतोष इतरत्र नाही. हरिपाठ साधन करण्याचा क्रम, श्रीगुरुप्रसन्नता, गुरुमुखापासून नामप्राप्ती झाली असता, प्रेम एकदम उत्पन्न होते. आळंदीस राहण्याची आज्ञा. माझा उपदेश ग्रहण करणारास हरी निश्चयाने रक्षितो, असे श्रीज्ञानेश्वर महाराजांचे म्हणणे. अंतर प्रेमरूप व बाहेर सगुणरूप हरीची स्थापना, हरिपाठाची फलश्रुती. अभंगांची संख्या, स्वतःचा विश्वास, शिष्याला उद्देशून 'आळशी होऊ नको' म्हणण्याची प्रवृत्ती. म्हणून प्रश्न, श्रीज्ञानेश्वर महाराजांचा संतोष, श्रीगुरु निवृत्तिनाथ यांची कीर्ती.",
  '' // 30th page: No प्रतिज्ञा
];
const pratidnyaCheck = document.getElementById('pratidnya-check');

// Haripath paragraphs for main pages
const haripath = [
`॥ एक ॥\nदेवाचिये द्वारीं उभा क्षणभरी । तेणें मुक्ति चारी साधियेल्या ॥१॥\nहरि मुखें म्हणा हरि मुखें म्हणा।पुंण्याची गणना कोण् करी ॥२॥\nअसोनि संसारीं जिव्हे वेगु करी । वेदशास्त्र उभारी बाह्या सदा ॥३॥\nज्ञानदेव म्हणे व्यासाचिया खुणा । द्वारकेचा राणा पांडवांघरीं ॥४॥`,
`॥ दोन ॥\nचहूं वेदीं जाण साहीशास्त्रीं कारण । अठराही पुराणें हरिसी गाती ॥१॥\nमंथुनी नवनीता तैसें घे अनंता । वायां व्यर्थ कथा सांडी मार्गु ॥२॥\nएक हरि आत्मा जीवशिव सम । वायां तू दुर्गमा न घाली मन ॥३॥\nज्ञानदेवा पाठ हरि हा वैकुंठ । भरला घनदाट हरि दिसे ॥४॥`,
`॥ तिन ॥\nत्रिगुण असार निर्गुण हें सार । सारासार विचार हरिपाठ ॥१॥\nसगुण निर्गुण गुणाचें अगुण । हरिवीणें मन व्यर्थ जाय ॥२॥\nअव्यक्त निराकार नाहीं ज्या आकार । जेथुनि चराचर हरिसी भजें ॥३॥\nज्ञानदेवा ध्यानीं रामकृष्ण मनीं । अनंत जन्मांनी पुण्य होय ॥४॥`,
`॥ चार ॥\nभावेंवीण भक्ति भक्तिविण मुक्ति । बळेंवीण् शक्ति बोलु नये ॥१॥\nकैसेनि दैवत प्रसन्न त्वरित । उगा राहें निवांत शिणसी वायां ॥२॥\nसायासें करिसी प्रपंच दिननिशीं । हरिसी न भजसी कवण्या गुणें ॥३॥\nज्ञानदेव म्हणें हरिजप करणें । तुटेल धरणें प्रपंचाचें ॥४॥`,
`॥ पाच ॥\nयोगयागविधि येणें नोहे सिद्धी । वायांचि उपाधि दंभ धर्म ॥१॥\nभावेंविण देव न कळे नि:संदेह । गुरुविण अनुभव कैसा कळे ॥२॥\nतपेंवीण दैवत दिधल्याविण प्राप्त । गुजेंविण हित कोण सांगे ॥३॥\nज्ञानदेव सांगे दृष्टांताची मात । साधूचे संगती तरणोपाय ॥४॥`,
`॥ सहा ॥\nसाधुबोध झाला तो नुरोनियां ठेला । ठायींच मुराला अनुभवें ॥१॥\nकापुराची वाती उजळली ज्योति । ठायींच समाप्ति झाली जैसी ॥२॥\nमोक्षरेखे आला भाग्यें विनटला । साधूंचा अंकिला हरिभक्त ॥३॥\nज्ञानदेवा गोडी संगति सज्जनीं । हरि दिसे जनीं वनी आत्मतत्वीं ॥४॥`,
`॥ सात ॥\nपर्वताप्रमाणे पातक करणें । वज्रलेप होणें अभक्तासी ॥१॥\nनाहीं ज्यांसी भक्ति ते पतित अभक्त । हरिसी न भजत दैवहत ॥२॥\nअनंत वाचाळ बरळती बरळ । त्यां कैंचा दयाळ पावे हरि ॥३॥\nज्ञानदेवा प्रमाण आत्मा हा निधान । सर्वांघटीं पूर्ण एक नांदे ॥४॥`,
`॥ आठ ॥\nसंतांचे संगतीं मनोमार्ग गति । आकळावा श्रीपति येणें पंथें ॥१॥\nरामकृष्ण वाचा भाव हा जीवाचा । आत्मा जो शिवाचा राम जप ॥२॥\nएकतत्व नाम साधिती साधन । द्वैताचें बंधन न बाधिजे ॥३॥\nनामामृत गोडी वैष्णवां लाधली । योगियां साधली जीवनकळा ॥४॥\nसत्वर उच्चार प्रल्हादीं बिंबला । उद्धवा लाधला कृष्णदाता ॥५॥\nज्ञानदेव म्हणे नाम हें सुलभ । सर्वत्र दुर्लभ विरळा जाणे ॥६॥`,
`॥ न‌ऊ ॥\nविष्णुविण जप व्यर्थ त्याचें ज्ञान । रामकृष्णीं मन नाहीं ज्याचें ॥१॥\nउपजोनी करंटा नेणें अद्वय वाटा । रामकृष्णीं पैठा कैसेनी होय ॥२॥\nद्वैताची झाडणी गुरुविण ज्ञान । तया कैचें कीर्तन घडे नामीं ॥३॥\nज्ञानदेव म्हणे सगुण हें ध्यान । नामपाठ मौन प्रपंचाचे ॥४॥`,
`॥ दहा ॥\nत्रिवेणीसंगमीं नाना तीर्थे भ्रमी । चित्त नाहीं नामीं तरी तें व्यर्थ ॥१॥\nनामासी विन्मुख तो नर पापिया । हरिवीण धांवया न पावे कोणी ॥२॥\nपुराणप्रसिद्ध बोलिले वाल्मीक । नामें तीन्ही लोक उद्धरती ॥३॥\nज्ञानदेव म्हणे नाम जपा हरीचें । परंपरा त्याचें कुळ शुद्ध ॥४॥`,
`॥ अकरा ॥\nहरि उच्चारणीं अनंत पापराशी । जातील लयासी क्षणमात्रे ॥१॥\nतृण अग्निमेळें समरस झालें । तैसें नामें केलें जपतां हरि ॥२॥\nहरि उच्चारण मंत्र पै अगाध । पळे भूतबाधा भेणे तेथें ॥३॥\nज्ञानदेव म्हणे हरि माझा समर्थ । न करवे अर्थ उपनिषदां ॥४॥`,
`॥ बारा ॥\nतीर्थ व्रत नेम भावेंविण सिद्धि । वायांचि उपाधि करिसी जनां ॥१॥\nभावबळें आकळे येऱ्हवीं नाकळे । करतळीं आंवळे तैसा हरि ॥२॥\nपारियाचा रवा घेतां भूमिवरी । यत्न परोपरी साधन तैसें ॥३॥\nज्ञानदेव म्हणे निवृत्ति निर्गुण । दिधलें संपूर्ण माझे हातीं ॥४॥`,
`॥ तेरा ॥\nसमाधि हरिची सम सुखेंवीण । न साधेल जाण द्वैतबुद्धि ॥१॥\nबुद्धीचें वैभव अन्य नाहीं दुजें । एका केशवराजें सकळ सिद्धि ॥२॥\nऋद्धि सिद्धि निधी अवघीच उपाधि । जंव त्या परमानंदीं मन नाहीं ॥३॥\nज्ञानदेवी रम्य रमलें समाधान । हरिचें चिंतन सर्वकाळ ॥४॥`,
`॥ चौदा ॥\nनित्य सत्य मित हरिपाठ ज्यासी । कळीकाळ त्यासी न पाहे दृष्टी ॥१॥\nरामकृष्ण उच्चार अनंतराशी तप । पापाचे कळप पळती पुढें ॥२॥\nहरि हरि हरि मंत्र हा शिवाचा । म्हणती जे वाचा तयां मोक्ष ॥३॥\nज्ञानदेवा पाठ नारायण नाम । पाविजे उत्तम निजस्थान ॥४॥`,
`॥ पंधरा ॥\nएक नाम हरि द्वैतनाम दुरी । अद्वैत कुसरी विरळा जाणें ॥१॥\nसमबुद्धि घेतां समान श्रीहरि । शमदमांवरी हरि झाला ॥२॥\nसर्वांघटीं राम देहांदेहीं एक । सूर्य प्रकाशक सहस्ररश्मी ॥३॥\nज्ञानदेवा चित्तीं हरिपाठ नेमा । मागिलिया जन्मा मुक्त झालों ॥४॥`,
`॥ सोळा ॥\nहरिनाम जपे तो नर दुर्लभ । वाचेसी सुलभ रामकृष्ण ॥१॥\nराम कृष्ण नामीं उन्मनी साधली । तयासी लाधली सकळ सिद्धी ॥२॥\nसिद्धि बुद्धि धर्म हरिपाठीं आले । प्रपंची निवाले साधुसंगे ॥३॥\nज्ञानदेवा नाम रामकृष्ण ठसा । येणें दशदिशा आत्माराम ॥४॥`,
`॥ सतरा ॥\nहरिपाठकीर्ति मुखें जरी गाय । पवित्रचि होय देह त्याचा ॥१॥\nतपाचे सामर्थ्ये तपिन्नला अमूप । चिरंजीव कल्पकोटि वैकुंठीं नांदे ॥२॥\nमातृपितृभ्राता सगोत्र अपार । चतुर्भुज नर हो‌ऊनि ठेले ॥३॥\nज्ञान गूढ गम्य ज्ञानदेवा लाधलें । निवृत्तीनें दिधले माझे हातीं ॥४॥`,
`॥ अठरा ॥\nहरिवंशपुराण हरिनाम संकीर्तन । हरिविण सौजन्य नेणें कांहीं ॥१॥\nत्या नरा लाधलें वैकुंठ जोडलें । सकळ घडलें तीर्थाटन ॥२॥\nमनोमार्गें गेला तो तेथे मुकला । हरिपाठीं स्थिरावला तोचि धन्य ॥३॥\nज्ञानदेवा गोडी हरिनामाची जोडी । रामकृष्णीं आवडि सर्वकाळ ॥४॥`,
`।।एकोणीस।।\nवेदशास्त्रपुराण श्रुतिचे वचन । एक नारायण सार जप ॥१॥\nजप तप कर्म हरिविण धर्म । वा‌उगाचि श्रम व्यर्थ जाय ॥२॥\nहरिपाठीं गेले ते निवांतचि ठेले । भ्रमर गुंतले सुमनकळिके ॥३॥\nज्ञानदेवी मंत्र हरिनामाचे शस्त्र । यमें कुळगोत्र वर्जियेले ॥४॥`,
`॥वीस॥\nनामसंकीर्तन वैष्णवांची जोडी । पापे अनंत कोटी गेली त्यांची ॥१॥\nअनंत जन्मांचे तप एक नाम । सुगम हरिपाठ ॥२॥\nयोग याग क्रिया धर्माधर्म माया । गेले ते विलया हरिपाठीं ॥३॥\nज्ञानदेवी यज्ञ याग क्रिया धर्म । हरिविण नेम नाहीं दुजा ॥४॥`,
`॥ एकविस ॥\nकाळ वेळ नाम उच्चारितां नाही । दोन्ही पक्ष पाहीं उद्धरती ॥१॥\nरामकृष्ण नाम सर्व दोषां हरण । जडजीवां तारण हरि एक ॥२॥\nहरिनाम सार जिव्हा या नामाची । उपमा त्या देवाची कोण वानी ॥३॥\nज्ञानदेवा सांग झाला हरिपाठ । पूर्वजां वैकुंठ-मार्ग सोपा ॥४॥`,
`॥ बाविस ॥\nनित्यनेम नामीं ते प्राणी दुर्लभ । लक्ष्मीवल्लभ तयां जवळी ॥१॥\nनारायण हरि नारायण हरि । भुक्ति मुक्ति चारी घरीं त्यांच्या ॥२॥\nहरिविण जन्म तो नरकचि पैं जाणा । यमाचा पाहुणा प्राणि होय ॥३॥\nज्ञानदेव पुसे निवृत्तीसी चाड । गगनाहुनि वाड नाम आहे ॥४॥`,
`॥ तेविस ॥\nसात पांच तीन दशकांचा मेळा । एक तत्त्वीं कळा दावी हरि ॥१॥\nतैसें नव्हे नाम सर्वत्र वरीष्ठ । तेथें कांहीं कष्ट न लागती ॥२॥\nअजपा जपणें उलट प्राणाचा । तेथेंहि मनाचा निर्धार असे ॥३॥\nज्ञानदेवा जिणें नामेंविण व्यर्थ । रामकृष्णीं पंथ क्रमियेला ॥४॥`,
`॥ चौविस ॥\nजप तप कर्म क्रिया नेम धर्म । सर्वांघटीं राम भाव शुद्ध ॥१॥\nन सोडी हा भावो टाकी रे संदेहो । रामकृष्ण टाहो नित्य फोडी ॥२॥\nजाति वित्त गोत कुलशील मात । भजकां त्वरीत भावयुक्त ॥३॥\nज्ञानदेवा ध्यानीं रामकृष्ण मनीं । वैकुंठभुवनी घर केलें ॥४॥`,
`॥ पंचविस ॥\nजाणीव नेणीव भगवंतीं नाहीं । हरि‌उच्चारणीं पाही मोक्ष सदां ॥१॥\nनारायण हरि उच्चार नामाचा । तेथें कळिकाळाचा रीघ नाहीं ॥२॥\nतेथील प्रमाण नेणवें वेदांसी । तें जीवजंतूंसी केंवी कळे ॥३॥\nज्ञानदेवा फळ नारायण पाठ । सर्वत्र वैकुंठ केलें असे ॥४॥`,
`॥ सव्वीस ॥\nएक तत्व नाम दृढ धरीं मना । हरीसी करुणा ये‌ईल तुझी ॥१॥\nतें नाम सोपें रे राम-कृष्ण गोविंद । वाचेसी सद्गद जपा आधीं ॥२॥\nनामापरतें तत्त्व नाहीं रे अन्यथा । वायां आणिका पंथा जाशील झणीं ॥३॥\nज्ञानदेवा मौन जप माळ अंतरी । धरोनी श्रीहरि जपे सदां ॥४॥`,
`॥ सत्तावीस ॥\nसर्व सुख गोडी साही शास्त्रें निवडी । रिकामा अर्धघडी राहूं नको ॥१॥\nलटिका व्यवहार सर्व हा संसार । वायां येरझार हरिवीण ॥२॥\nनाम मंत्र जप कोटी जा‌ईल पाप । रामकृष्णीं संकल्प धरुनि राहें ॥३॥\nनिजवृत्ति हे काढी सर्व माया तोडी । इंद्रियां सवडी लपू नको ॥४॥\nतीर्थी व्रतीं भाव धरी रे करुणा । शांति दया पाहुणा हरि करी ॥५॥\nज्ञानदेवा प्रमाण निवृत्तिदेवीं ज्ञान । समाधि संजीवन हरिपाठ ॥६॥`,
`॥ अठठावीस ॥\nअभंग हरिपाठ असती अठ्ठावीस । रचिले विश्वासें ज्ञानदेवें ॥१॥\nनित्य पाठ करी इंद्रायणीतीरीं । होय अधिकारी सर्वथा तो ॥२॥\nअसावें एकाग्रीं स्वस्थ चित्त मनीं । उल्हासेंकरूनी स्मरण जीवी ॥३॥\nअंतकाळी तैसा संकटाचे वेळीं । हरि त्या सांभाळी अंतर्बाह्य ॥४॥\nसंतसज्जनांनी घेतली प्रचीति । आळसी मंदमति केवीं तरे ॥५॥\nश्रीगुरु-निवृत्तिवचन तें प्रेमळ । तोषला तात्काळ ज्ञानदेव ॥६॥`,
`।।एकोणतीस।।\nकोणाचे हे घर हा देह कोणाचा । आत्माराम त्याचा तोचि जाणे ॥१॥\nमी तू हा विचार विवेके शोधावा । गोविंदा माधवा याची देही ॥२॥\nदेही ध्याता ध्यान त्रिकुटीवेगळा । सहस्त्रदळी उगवला सुर्य जैसा ॥३॥\nज्ञानदेव म्हणे नायनाची ज्योती । या नावेरूपे ती तुम्हीं जाणा॥४॥`
];

// Sequence for पाठक्रम page
const sequence = [
  "१. देवाचिये द्वारीं उभा क्षणभरी ।",
  "२. चहूं वेदीं जाण साहीशास्त्रीं कारण ।",
  "३. त्रिगुण असार निर्गुण हें सार ।",
  "४. भावेंवीण भक्ति भक्तिविण मुक्ति ।",
  "५. योगयागविधि येणें नोहे सिद्धी ।",
  "६. साधुबोध झाला तो नुरोनियां ठेला ।",
  "७. पर्वताप्रमाणे पातक करणें ।",
  "८. संतांचे संगतीं मनोमार्ग गति ।",
  "९. विष्णुविण जप व्यर्थ त्याचें ज्ञान ।",
  "१०. त्रिवेणीसंगमीं नाना तीर्थे भ्रमी ।",
  "११. हरि उच्चारणीं अनंत पापराशी ।",
  "१२. तीर्थ व्रत नेम भावेंविण सिद्धि ।",
  "१३. समाधि हरिची सम सुखेंवीण ।",
  "१४. नित्य सत्य मित हरिपाठ ज्यासी ।",
  "१५. एक नाम हरि द्वैतनाम दुरी ।",
  "१६. हरिनाम जपे तो नर दुर्लभ ।",
  "१७. हरिपाठकीर्ति मुखें जरी गाय ।",
  "१८. हरिवंशपुराण हरिनाम संकीर्तन ।",
  "१९. वेदशास्त्रपुराण श्रुतिचे वचन ।",
  "२०. नामसंकीर्तन वैष्णवांची जोडी ।",
  "२१. काळ वेळ नाम उच्चारितां नाही ।",
  "२२. नित्यनेम नामीं ते प्राणी दुर्लभ ।",
  "२३. सात पांच तीन दशकांचा मेळा ।",
  "२४. जप तप कर्म क्रिया नेम धर्म ।",
  "२५. जाणीव नेणीव भगवंतीं नाहीं ।",
  "२६. एक तत्व नाम दृढ धरीं मना ।",
  "२७. सर्व सुख गोडी साही शास्त्रें निवडी ।",
  "२८. अभंग हरिपाठ असती अठ्ठावीस ।",
  "२९. कोणाचे हे घर हा देह कोणाचा ।"
];

let page = 'intro'; // 'intro' = intro page, -1 = sequence, -2 = arthkram, 0..28 = Haripath
const introPage = document.getElementById('intro-page');
const content = document.getElementById('content');
const pageIndicator = document.getElementById('page-indicator');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const fontInc = document.getElementById('increase-font');
const fontDec = document.getElementById('decrease-font');
const modeToggle = document.getElementById('toggle-mode');
const sequencePage = document.getElementById('sequence-page');
const sequenceList = document.getElementById('sequence-list');
const showSequenceBtn = document.getElementById('show-sequence');
const mainNav = document.getElementById('main-nav');
const arthkramPage = document.getElementById('arthkram-page');
const showArthkramBtn = document.getElementById('show-arthkram');
const showSequenceFromArthBtn = document.getElementById('show-sequence-from-arth');
const showSequenceWrap = document.getElementById('show-sequence-wrap');
const startMainBtn = document.getElementById('start-main');
const gotoSequenceBtn = document.getElementById('goto-sequence');
const gotoArthkramBtn = document.getElementById('goto-arthkram');
const contentGotoSequenceBtn = document.getElementById('content-goto-sequence');
const contentGotoArthkramBtn = document.getElementById('content-goto-arthkram');
const contentNavBtns = document.getElementById('content-nav-btns');

function renderPage() {
  if(page === 'intro') {
    if(introPage) introPage.style.display = '';
    const header = document.querySelector('header');
    if(header) header.style.display = 'none';
    const fontControls = document.getElementById('font-controls');
    if(fontControls) fontControls.style.display = 'none';
    if(mainNav) mainNav.style.display = 'none';
    if(sequencePage) sequencePage.style.display = 'none';
    if(arthkramPage) arthkramPage.style.display = 'none';
    if(content) content.style.display = 'none';
    if(showSequenceWrap) showSequenceWrap.style.display = 'none';
    if(contentNavBtns) contentNavBtns.style.display = 'none';
  } else if(page === -1) {
    if(introPage) introPage.style.display = 'none';
    const header = document.querySelector('header');
    if(header) header.style.display = '';
    const fontControls = document.getElementById('font-controls');
    if(fontControls) fontControls.style.display = '';
    if(mainNav) mainNav.style.display = 'none';
    if(sequencePage) sequencePage.style.display = '';
    if(arthkramPage) arthkramPage.style.display = 'none';
    if(content) content.style.display = 'none';
    if(showSequenceWrap) showSequenceWrap.style.display = 'none';
    if(pageIndicator) pageIndicator.textContent = 'पाठक्रम';
    if(contentNavBtns) contentNavBtns.style.display = 'none';
  } else if(page === -2) {
    if(introPage) introPage.style.display = 'none';
    const header = document.querySelector('header');
    if(header) header.style.display = '';
    const fontControls = document.getElementById('font-controls');
    if(fontControls) fontControls.style.display = '';
    if(mainNav) mainNav.style.display = 'none';
    if(sequencePage) sequencePage.style.display = 'none';
    if(arthkramPage) arthkramPage.style.display = '';
    if(content) content.style.display = 'none';
    if(showSequenceWrap) showSequenceWrap.style.display = 'none';
    if(pageIndicator) pageIndicator.textContent = 'अर्थक्रम';
    if(contentNavBtns) contentNavBtns.style.display = 'none';
  } else {
    if(introPage) introPage.style.display = 'none';
    const header = document.querySelector('header');
    if(header) header.style.display = '';
    const fontControls = document.getElementById('font-controls');
    if(fontControls) fontControls.style.display = '';
    if(mainNav) mainNav.style.display = '';
    if(sequencePage) sequencePage.style.display = 'none';
    if(arthkramPage) arthkramPage.style.display = 'none';
    if(content) content.style.display = '';
    if(showSequenceWrap) showSequenceWrap.style.display = '';
    if(contentNavBtns) contentNavBtns.style.display = '';
    // Center align first line (e.g., '॥ एक ॥')
    const para = haripath[page].split('\n');
    content.innerHTML = '';
    if (para.length > 0) {
      const firstLine = document.createElement('div');
      firstLine.style.textAlign = 'center';
      firstLine.style.marginBottom = '0.5em';
      firstLine.textContent = para[0];
      content.appendChild(firstLine);
      // Add rest of lines
      const rest = document.createElement('div');
      rest.innerText = para.slice(1).join('\n');
      content.appendChild(rest);
    }
    // Show Pratidnya if checkbox selected
    if(pratidnyaCheck && pratidnyaCheck.checked && pratidnyaArr[page]) {
      const pratidnyaDiv = document.createElement('div');
      pratidnyaDiv.className = 'pratidnya-text';
      pratidnyaDiv.textContent = 'प्रतिज्ञा: ' + pratidnyaArr[page];
      content.appendChild(pratidnyaDiv);
    }
    pageIndicator.textContent = `${page+1}/29`;
    prevBtn.disabled = page === 0;
    nextBtn.disabled = page === haripath.length-1;
  if(pratidnyaCheck) pratidnyaCheck.onchange = () => { renderPage(); };
  }
}

prevBtn.onclick = () => { if(page>0){ page--; renderPage(); } };
nextBtn.onclick = () => { if(page<haripath.length-1){ page++; renderPage(); } };
if (showSequenceBtn) showSequenceBtn.onclick = () => { page = -1; renderPage(); };
if (showArthkramBtn) showArthkramBtn.onclick = () => { page = -2; renderPage(); };
if (showSequenceFromArthBtn) showSequenceFromArthBtn.onclick = () => { page = -1; renderPage(); };
if (startMainBtn) startMainBtn.onclick = () => { page = -1; renderPage(); };
function setNavButtonHandlers() {
  const gotoSequenceBtn = document.getElementById('goto-sequence');
  const gotoArthkramBtn = document.getElementById('goto-arthkram');
  const contentGotoSequenceBtn = document.getElementById('content-goto-sequence');
  const contentGotoArthkramBtn = document.getElementById('content-goto-arthkram');
  if (gotoSequenceBtn) gotoSequenceBtn.onclick = () => { page = -1; renderPage(); };
  if (gotoArthkramBtn) gotoArthkramBtn.onclick = () => { page = -2; renderPage(); };
  if (contentGotoSequenceBtn) contentGotoSequenceBtn.onclick = () => { page = -1; renderPage(); };
  if (contentGotoArthkramBtn) contentGotoArthkramBtn.onclick = () => { page = -2; renderPage(); };
}
setNavButtonHandlers();
// Use event delegation for nav buttons
document.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'goto-sequence') { page = -1; renderPage(); }
  if (e.target && e.target.id === 'goto-arthkram') { page = -2; renderPage(); }
  if (e.target && e.target.id === 'content-goto-sequence') { page = -1; renderPage(); }
  if (e.target && e.target.id === 'content-goto-arthkram') { page = -2; renderPage(); }
});

// Font size controls
let fontSize = 1.1;
function setFontSize(size) {
  fontSize = Math.max(0.8, Math.min(2.2, size));
  document.documentElement.style.setProperty('--font-size', fontSize+'rem');
}
fontInc.onclick = () => setFontSize(fontSize+0.1);
fontDec.onclick = () => setFontSize(fontSize-0.1);

// Dark/Light mode
function setMode(dark) {
  document.body.classList.toggle('dark', dark);
  localStorage.setItem('haripath-mode', dark ? 'dark' : 'light');
}
modeToggle.onclick = () => setMode(!document.body.classList.contains('dark'));

// Load mode/font from storage


(function init(){
  setMode(localStorage.getItem('haripath-mode')==='dark');
  const stored = parseFloat(localStorage.getItem('haripath-font'));
  if(!isNaN(stored)) setFontSize(stored);
  // Populate sequence page
  sequenceList.innerHTML = '';
  sequence.forEach((line, idx) => {
    const li = document.createElement('li');
    li.textContent = line;
    li.style.cursor = 'pointer';
    li.onclick = () => { page = idx; renderPage(); };
    sequenceList.appendChild(li);
  });

  // ArthKram table data
  const arthkramData = [
    [1,"नामसंकीर्तन वैष्णवांची जोडी ।",20],
    [2,"योगयागविधी येणे नोहे सिद्धी ।",5],
    [3,"भावेविण भक्ती भक्तिविणे मुक्ती ।",4],
    [4,"विष्णुविणे जप व्यर्थ त्याचे ज्ञान ।",9],
    [5,"हरि ज्ञाारणी अनंत पापराशी ।",11],
    [6,"त्रिगुण असार निर्गुण हे सार ।",3],
    [7,"पर्वताप्रमाणे पातक करणे ।",7],
    [8,"संतांचे संगती मनोमार्ग गती ।",8],
    [9,"देवाचिये द्वारी उभा क्षणभरी ।",1],
    [10,"त्रिवेणी संगमी नाना तीर्थे भ्रमी ।",10],
    [11,"चहूं वेदी जाण षट्शास्त्री कारण ।",2],
    [12,"समाधि हरीची समसुखे विण।",13],
    [13,"हरिनाम जपे तो नर दुर्लभ ।",16],
    [14,"साधुबोध झाला नुरोनिया ठेला ।",6],
    [15,"तीर्थव्रत नेम भावेविण सिद्धी ।",12],
    [16,"नित्य सत्य मित हरिपाठ ज्यासी ।",14],
    [17,"एकनाम हरि द्वैतनाम दुरी।",15],
    [18,"वेदशास्त्र प्रमाण श्रुतीचे वचन ।",19],
    [19,"हरिवंश पुराण हरिनाम कीर्तन ।",18],
    [20,"हरिपाठ कीर्ति मुखीं जरी गाय ।",17],
    [21,"नित्य नेम नामी ते प्राणी दुर्लभ ।",22],
    [22,"सात पांच तीन दशकांचा मेळा ।",23],
    [23,"काळ वेळ नाम झाारितां नाही ।",21],
    [24,"एक तत्त्व नाम दृढ धरी मना ।",26],
    [25,"जप तप कर्म क्रिया नेम धर्म ।",24],
    [26,"सर्व सुख गोडी साही शास्त्रे निवडी ।",27],
    [27,"जाणीव नेणीव भगवंती नाही ।",25],
    [28,"अभंग हरिपाठ असती अट्टावीस ।",28]
  ];
  const arthkramTable = document.getElementById('arthkram-table').querySelector('tbody');
  arthkramTable.innerHTML = '';
  arthkramData.forEach(row => {
    const tr = document.createElement('tr');
    tr.style.cursor = 'pointer';
    tr.innerHTML = `<td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td>`;
    tr.onclick = () => { page = row[2]-1; renderPage(); };
    arthkramTable.appendChild(tr);
  });

  page = 'intro';
  renderPage();
})();

// Save font size
function saveFont() {
  localStorage.setItem('haripath-font', fontSize);
}
fontInc.addEventListener('click', saveFont);
fontDec.addEventListener('click', saveFont);

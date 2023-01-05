// import della funzione "apri popup" preso dal file esterno
import { openModal } from "./finestra.js";


// Funzione che fa partire maps
function initMap() {
  // Posizione di partenza 
  var position = [45.46642621575427, 9.197590291846295];
  const partenza = { lat: position[0], lng: position[1] };
  // La mappa che centra la posizione di partenza
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: partenza,
    // stili per rimuovere punti di interesse sulla mappa
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'transit.station',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'transit.station.rail',
        stylers: [{visibility: 'off'}]
      }
    ]
  });
  
  // Creazione del marker "partenza"
  var marker_partenza = new google.maps.Marker({
    position: partenza,
    map: map,
    icon: {
      url: "../img/BusRosso.png",
    }
  });
 
  // Creazione array di markers
  var fermateLineaRossa = [
    new google.maps.Marker({
      position: { lat: 45.46642621575427, lng: 9.197590291846295 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.465970429025646, lng: 9.197093688085612 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46553707660491, lng: 9.195870511609105 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.464676209169134, lng: 9.192768826757328 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.463736621920305, lng: 9.192762447353758 },
      map: map
    }), 
    new google.maps.Marker({
      position: { lat: 45.463172852573805, lng: 9.187569061380524 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.463744354266986, lng: 9.18833490737487 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46151936554318, lng: 9.185425894160376 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46070923231423, lng: 9.18295840693557 },
      map: map
    }), 
    new google.maps.Marker({
      position: { lat: 45.460609461407735, lng: 9.182101140026067 },
      map: map
    }), 
    new google.maps.Marker({
      position: { lat: 45.460709283843826, lng: 9.180005835947252 },
      map: map
    }), 
    new google.maps.Marker({
      position: { lat: 45.46041508453437, lng: 9.177918175924725 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46097775336577, lng: 9.175658272061987 },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46200737094371, lng: 9.174485216234782 },
      map: map
    }),
  ]

  //Creazione di un semplice array con le cordinate dei markers di riga  21;
  const percorsolineaRossa = [
    { lat: 45.46637089591075, lng: 9.197580963285544 },
    { lat:  45.466309728348, lng: 9.197553345518646 },
    { lat: 45.46626262514919, lng:  9.197495411609196 },
    { lat: 45.46618368375375, lng: 9.19736782636337 },
    { lat: 45.4661223543956, lng: 9.197273407581314  },
    { lat: 45.465970429025646, lng: 9.197093688085612 },
    { lat: 45.46576091443667, lng: 9.196541090328681  },
    { lat: 45.46553707660491, lng: 9.195870511609105 },
    { lat: 45.464676209169134, lng: 9.192768826757328 },
    { lat: 45.463736621920305, lng: 9.192762447353758 },
    { lat: 45.46370857478336, lng: 9.192106021426346 },
    { lat: 45.46370857478336, lng: 9.192106021426346 }, 
    { lat: 45.4637080034064, lng: 9.191324739034954 },
    { lat: 45.46369847999813, lng: 9.190702604520238 },
    { lat: 45.46369989089575, lng: 9.190475287309875 },
    { lat: 45.463725445007555, lng: 9.190251929579766 },
    { lat: 45.46373296979117, lng: 9.190023271262234 },
    { lat: 45.46373249949252, lng: 9.189789248524116 },
    { lat: 45.46373873132188, lng: 9.188546733646746 },
    { lat: 45.46359925325846, lng:  9.188519041849123 },
    { lat: 45.463744354266986, lng: 9.18833490737487 },
    { lat: 45.463172852573805, lng: 9.187569061380524 },
    { lat: 45.46258489251683, lng: 9.186840763897408 },
    { lat: 45.46210733672218, lng: 9.186300230545525 },
    { lat: 45.46151936554318, lng: 9.185425894160376 },
    { lat: 45.46115516037292, lng: 9.184946282464294 },
    { lat: 45.460926562255906, lng: 9.184407436176588 },
    { lat: 45.46079969111861, lng: 9.18388395172825 },
    { lat: 45.46070923231423, lng: 9.18295840693557 },
    { lat: 45.460609461407735, lng: 9.182101140026067 },
    { lat: 45.46048611761392, lng: 9.181693489063175 },
    { lat: 45.46025664335839, lng: 9.181317960650102 },
    { lat: 45.46012294923142, lng: 9.181008813541382 },
    { lat: 45.460614293891815, lng: 9.18032590380889 },
    { lat: 45.460709283843826, lng: 9.180005835947252 },
    { lat: 45.46076379063649, lng: 9.179623328051957 },
    { lat: 45.46041508453437, lng: 9.177918175924725 },
    { lat: 45.46043551862174, lng: 9.177611086015215 },
    { lat: 45.46082529049958, lng: 9.176361221208307 },
    { lat: 45.46097775336577, lng: 9.175658272061987 },
    { lat: 45.46137336107004, lng: 9.174842038122126 },
    { lat: 45.46171656760763, lng: 9.174557546858182 },
    { lat: 45.46200737094371, lng: 9.174485216234782 },
  ]


  var fermateLineaGialle = [
    new google.maps.Marker({
      position: { lat: 45.451844389509844, lng: 9.201601530134223 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.45391795245989, lng: 9.19936584138739 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.4555831395381, lng: 9.199460490263109 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.45793226629686,lng: 9.198975951892331 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46259210281532, lng: 9.197673919877866 
      },
      map: map
    }), 
    new google.maps.Marker({
      position: { lat: 45.46390088399996, lng: 9.1976176989637024 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.465763724564745, lng: 9.198834990777685 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.466798031167045, lng: 9.198228171178425 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46723532302577, lng: 9.196425814830047 
      },
      map: map
    }), 
    new google.maps.Marker({
      position: { lat: 45.468571870524094, lng: 9.194866805902263 
       },
      map: map
    }), 
    new google.maps.Marker({
      position: { lat: 45.469737223849805, lng: 9.19332568752798 
       },
      map: map
    }), 
    new google.maps.Marker({
      position: { lat: 45.47130545525693, lng: 9.194028322031231 
      },
      map: map
    }),
  ]

  const percorsolineaGialla = [

    {lat: 45.451844389509844, lng: 9.201601530134223},
    {lat: 45.45203927539382, lng: 9.201481879608277},
    {lat: 45.4522699496956, lng: 9.20178765902762},
    {lat: 45.452413218617764, lng: 9.20197827516814},
    {lat: 45.45254693595011, lng: 9.201610658325711},
    { lat: 45.45391795245989, lng: 9.19936584138739},
    { lat: 45.45455797483495, lng: 9.19834332111271},
    { lat: 45.4546654222014, lng: 9.19813908953358},
    { lat: 45.45477286936313, lng: 9.198455648481227},
    { lat: 45.45488747944331, lng: 9.198891342516701},
    { lat: 45.455004476997246, lng: 9.199599345330306},
    { lat: 45.4555831395381, lng: 9.199460490263109},
    { lat: 45.45793226629686,lng: 9.198975951892331},
    { lat: 45.46093540008834, lng: 9.198537436135597},
    { lat: 45.46134788492449, lng: 9.198467396726791},
    { lat: 45.462279636142334, lng: 9.19830855681517},
    { lat: 45.46231277584294, lng: 9.198174875631016},
    { lat: 45.46243967647215, lng: 9.19790981810895},
    { lat: 45.46259210281532, lng: 9.197673919877866}, 
    { lat: 45.46281173300129, lng: 9.19727790268314},
    { lat: 45.462923747743645, lng: 9.197035454122355},
    { lat: 45.46299366207233, lng: 9.197098592081222}, 
    { lat: 45.463173945259825, lng: 9.197135045710365},
    { lat: 45.463204472314445, lng: 9.197175581695985},
    { lat: 45.46322516565711, lng: 9.197202403785704},
    { lat: 45.463261860088544, lng: 9.197241890594734},
    { lat: 45.463427938273085, lng: 9.197358917517686},
    { lat: 45.46349562134258, lng: 9.197398031024823},
    { lat: 45.46353371570255, lng: 9.197419488696598}, 
    { lat: 45.46390088399996, lng: 9.1976176989637024},
    { lat: 45.464388549169605, lng: 9.197927543111351},
    { lat: 45.4646307497829, lng: 9.198084452338835},
    { lat: 45.464797232705976, lng: 9.198166259713423},
    { lat: 45.46499146216196, lng: 9.19822325665498},
    { lat: 45.46507423286557, lng: 9.198221244998328},
    { lat: 45.4654147201583, lng: 9.198185035177163},
    { lat: 45.465642807874715, lng: 9.198179000206409},
    { lat: 45.465757556807965, lng: 9.198270865864435},
    { lat: 45.465780600622715, lng: 9.198335238879759},
    { lat: 45.465778719495326, lng: 9.198556521119933},
    { lat: 45.46577072470357, lng: 9.198852905218079},
    { lat: 45.4657575568086, lng: 9.199339726153836},
    { lat: 45.46606465014436, lng: 9.199249872155484},
    { lat: 45.466205083680954, lng: 9.199214335998917},
    { lat: 45.46654448074038, lng: 9.1991200504453},
    { lat: 45.466788062655034, lng: 9.199074831863976},
    { lat: 45.466798031167045, lng: 9.198228171178425},
    { lat: 45.4667872185245, lng: 9.197996052894807},
    { lat: 45.4668417207498, lng: 9.197622366583593},
    { lat: 45.466866072792406, lng: 9.196795626952087},
    { lat: 45.466970438565056, lng: 9.196721220384076},
    { lat: 45.46723532302577, lng: 9.196425814830047},
    { lat: 45.46817605390896, lng: 9.195305401336832},
    { lat: 45.468571870524094, lng: 9.194866805902263},
    { lat: 45.46901370761017, lng: 9.19434762035417},
    { lat: 45.46942260501503, lng: 9.193822629525256},  
    { lat: 45.469737223849805, lng: 9.19332568752798},
    { lat: 45.47005910709034, lng: 9.192783474924463},
    { lat: 45.470763271276695, lng: 9.193503243825472},
    { lat: 45.47130545525693, lng: 9.194028322031231},
     
  ]



  var fermateLineaVerde = [
    new google.maps.Marker({
      position: { lat: 45.4719268913349, lng: 9.187643811796736 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.472033748515244, lng: 9.185835452634963 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.47114767861043, lng: 9.185107376008816 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.470437016427205, lng: 9.184945012518417 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46944560132482, lng: 9.185198106602334 
      },
      map: map
    }), 
    new google.maps.Marker({
      position: { lat: 45.46627065139643, lng: 9.186196858673567 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46518896023743, lng: 9.18665656221179 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.464505369599586, lng: 9.187089744586617
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.4626161662634, lng: 9.186889280095624 
      },
      map: map
    }), 
    new google.maps.Marker({
      position: { lat:45.461815961135045, lng: 9.187539424623159 
       },
      map: map
    }), 
    new google.maps.Marker({
      position: { lat: 45.46035230048829, lng: 9.188215779151179
       },
      map: map
    }), 
    new google.maps.Marker({
      position: { lat: 45.45785565901644, lng: 9.187624770021966
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.45702056367955, lng: 9.186846354987116
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.456870819043196, lng: 9.183184538627234
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.45822511085358, lng: 9.18102192505
      },
      map: map
    }),
    
  ]

  const percorsolineaVerde = [
   
    { lat: 45.4719268913349, lng: 9.187643811796736},
    { lat:45.47231871390715, lng: 9.187548573410556},
    { lat: 45.472200051909674, lng: 9.186815186495913},
    { lat: 45.472033748515244, lng: 9.185835452634963},
    { lat: 45.47200413983986, lng: 9.185627869888224},
    { lat:45.47180969082205, lng: 9.18558202751106},
    { lat: 45.471658755554216, lng: 9.185544924116943},
    { lat: 45.471472995719495, lng: 9.185389729405983},
    { lat: 45.47114767861043, lng: 9.185107376008816},
    { lat: 45.47102329132359, lng: 9.18502871369112},
    { lat: 45.47095980914458, lng: 9.1850018916014},
    { lat: 45.47095543206271, lng: 9.18499923981004},
    { lat: 45.47093991418464, lng: 9.18499722815331},
    { lat:45.47089289028566, lng: 9.184981805451724},
    { lat: 45.47075427196455, lng: 9.184960445038843},
    { lat: 45.47063843076486, lng: 9.184957874351928},
    { lat: 45.470437016427205, lng: 9.184945012518417},
    { lat: 45.47038555343154, lng: 9.184939562365178},
    { lat: 45.47036345198652, lng: 9.18493285684275},
    { lat: 45.47033711833858, lng: 9.184918104693404},
    { lat: 45.47033100516856, lng: 9.184914081379945},
    { lat: 45.470309844190254, lng: 9.184891282603685},
    { lat: 45.47029573686696, lng: 9.184870495484155},
    { lat: 45.47028068905156, lng: 9.184840991185464},
    { lat: 45.470254355364965, lng: 9.18477862982687},
    { lat: 45.47014247148505, lng: 9.184851617612216},
    { lat: 45.46996762155122, lng: 9.1849581188692},
    { lat: 45.46944560132482, lng: 9.185198106602334 },
    { lat: 45.46892033933737, lng: 9.185385255488372 },
    { lat: 45.46860785407904, lng: 9.185420820709695 },
    { lat: 45.4675143525947, lng: 9.18571983422009 },
    { lat: 45.466720031337545, lng: 9.186019729755948 },
    { lat: 45.46627065139643, lng: 9.186196858673567},
    { lat: 45.46572034131773, lng: 9.18641653464506},
    { lat: 45.46572833611549, lng: 9.186486272079096},
    { lat: 45.46572739555097, lng: 9.18654662178096},
    { lat: 45.46572128188098, lng: 9.1866096536918},
    { lat: 45.465709054539005, lng: 9.186652569035347},
    { lat: 45.465681778151215, lng: 9.186711577632728},
    { lat:45.465646036657574, lng: 9.186764551259921},
    { lat: 45.46560888429151, lng: 9.186792043901882},   
    { lat: 45.46556848083875, lng: 9.18680267420724},
    { lat: 45.46552333359438, lng: 9.186807368072943},
    { lat: 45.4654645480658, lng: 9.186808038625184},
    { lat: 45.46538648078903, lng: 9.186790604266868},
    { lat: 45.46537096137775, lng: 9.186787922057896},
    { lat:45.46530653225759, lng: 9.186757076653716},
    { lat:45.4652441886477, lng: 9.186714248878094},
    { lat: 45.46518896023743, lng: 9.18665656221179},
    { lat: 45.46511279848007, lng:  9.186558908324269},
    { lat: 45.465062007417096, lng:  9.186469054323712},
    { lat: 45.46503190898779, lng:  9.186388588054559},
    { lat: 45.464808991991546, lng:  9.186708441472357},
    { lat: 45.46467218799035, lng:  9.186884513872732},
    { lat: 45.46454803100511, lng: 9.187046787518632},   
    { lat: 45.464505369599586, lng: 9.187089744586617},
    { lat: 45.46447184062024, lng:  9.187144504564206},
    { lat: 45.464340628787575, lng:  9.187312813178432},
    { lat: 45.46409842693004, lng:  9.187631325497996},
    { lat: 45.46367327785294, lng:  9.188220740924297},
    { lat: 45.463166024424694, lng:  9.187567379317601},
    { lat: 45.46259601351047, lng:  9.186857264485035},
    { lat: 45.46257108715955, lng:  9.186841171231203},
    { lat: 45.46233734329098, lng:  9.187222715460312},
    { lat: 45.46204228539749, lng:  9.18742634016093},
    { lat: 45.461815961135045, lng: 9.187539424623159},
    { lat: 45.46142049074214, lng:  9.18775031470921},
    { lat: 45.46113927981815, lng:  9.18790926452466},
    { lat: 45.46084323755638, lng:  9.188050627262893},
    { lat: 45.460854995630804, lng:  9.188277944473255},
    { lat: 45.460701885098416, lng:  9.188289999209692},
    { lat: 45.460609493015326, lng:  9.188310882512825},
    { lat: 45.46035230048829, lng: 9.188215779151179 },
    { lat: 45.459480064994864, lng:  9.187995694830976 },
    { lat: 45.45847105369148, lng:  9.187714603347343 },
    { lat: 45.4581776251772, lng:  9.18767657332315 },
    { lat: 45.45785565901644, lng: 9.187624770021966},
    { lat: 45.45739726193696, lng: 9.18755298379855},
    { lat: 45.457010161093166, lng: 9.187508727350997},
    { lat: 45.45702056367955, lng: 9.186846354987116 },
    { lat: 45.45702423961326, lng: 9.186194883733448 },
    { lat: 45.45705763480026, lng: 9.185804622316704 },
    { lat: 45.4571078722338, lng: 9.18537562128389 },
    { lat: 45.45720875214361, lng: 9.184420053367695 },
    { lat: 45.45721522869535, lng: 9.183842237785033 },
    { lat: 45.45677450593413, lng: 9.183607544496214 },
    { lat: 45.456870819043196, lng: 9.183184538627234 },
    { lat: 45.457387285168934, lng: 9.18091455756564 },
    { lat: 45.45773760534378, lng: 9.180968843062715 },
    { lat: 45.4581176460085, lng: 9.181001700122849 },
    { lat: 45.45822511085358, lng: 9.18102192505 },

  ]


  var fermateLineaBlu = [
    new google.maps.Marker({
      position: { lat: 45.47031802180396, lng: 9.176224573519715 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.467675949310454, lng: 9.181154939086841 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46604438843158, lng: 9.185874346689634 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46469080830117, lng: 9.189344586631952 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.463134795125335, lng: 9.193667080936171 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46238267516354, lng: 9.193733677955805 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.46135567072694, lng: 9.194371275740052 
      },
      map: map
    }),
    new google.maps.Marker({
      position: { lat: 45.460476137889046, lng: 9.19392034156194 
      },
      map: map
    }),
    
  ]

  const percorsolineaBlu = [

    { lat: 45.47031802180396, lng: 9.176224573519715 },
    { lat: 45.46979378659463, lng: 9.175423037073964 },
    { lat: 45.46882327224273, lng: 9.176723366812379 },
    { lat: 45.468502086165905, lng: 9.177251761987465 },
    { lat: 45.46840226038614, lng: 9.177091551055911 },
    { lat: 45.4682677658755, lng: 9.176898432009938 },
    { lat: 45.468209923727976, lng: 9.176828024023127 },
    { lat: 45.46811775238485, lng: 9.176780414813878 },
    { lat: 45.4680556777219, lng: 9.17677169763472 },
    { lat: 45.46801711615199, lng: 9.176785108679663 },
    { lat: 45.46789296653604, lng: 9.176849481694987 },
    { lat: 45.467914598684935, lng: 9.177334961522076 },
    { lat: 45.46789484759181, lng: 9.177468401420983 },
    { lat: 45.46791036630838, lng: 9.177888474901618 },
    { lat: 45.46790425287484, lng: 9.178000457129482 },
    { lat: 45.4678774478136, lng: 9.178097016652467 },
    { lat: 45.46768535463152, lng: 9.178596111683879 },
    { lat: 45.467572020422224, lng: 9.178938093334352 },
    { lat: 45.4675447449356, lng: 9.179287451057096 },
    { lat: 45.467526404514246, lng: 9.179452406913917 },   
    { lat: 45.46753016665232, lng: 9.180029081848886 },
    { lat: 45.467541453065174, lng: 9.180314737112147 },
    { lat: 45.467565436684545, lng: 9.180527302173164 },
    { lat: 45.46762892268772, lng: 9.180907505304514 },
    { lat: 45.467675949310454, lng: 9.181154939086841 },
    { lat: 45.467759656601736, lng: 9.181421818881512 },
    { lat: 45.4679479736592, lng: 9.18202069307936 },
    { lat: 45.46791315498755, lng: 9.182103627753005 },
    { lat: 45.46789528495095, lng: 9.182212257216364 },
    { lat: 45.467900457856864, lng: 9.182362460918785 },
    { lat: 45.46793384660398, lng: 9.182475784256763 },
    { lat: 45.467984164816, lng: 9.182567649914049 },
    { lat: 45.46698000954456, lng: 9.183882794066802 },   
    { lat: 45.466378998926885, lng: 9.184694162298063 },
    { lat: 45.46615326558512, lng: 9.185032791185414 },
    { lat: 45.46611893522752, lng: 9.185073694872234 },
    { lat: 45.46600230591119, lng: 9.18520713476858 },
    { lat: 45.46604438843158, lng: 9.185874346689634 },
    { lat:45.46606935088711, lng: 9.186272725920094 },
    { lat: 45.465723694441934, lng: 9.186416894655586 },
    { lat: 45.46572792698258, lng: 9.186485290984368 },
    { lat: 45.465726986418005, lng: 9.186553016760907 },
    { lat: 45.46572087274799, lng: 9.186604649283614 },
    { lat: 45.46570958597082, lng: 9.186654940701835 },
    { lat: 45.46568372043123, lng: 9.186715290403702 },
    { lat: 45.46564750865589, lng: 9.186762899612951 },
    { lat: 45.46561223742378, lng: 9.186793074463885 },
    { lat: 45.46556850106158, lng: 9.186803803302402 },
    { lat: 45.465537932618844, lng: 9.18680581495913 },
    { lat: 45.46546315743524, lng: 9.186806485511374 },
    { lat: 45.465376625021136, lng: 9.186790392256851 },
    { lat: 45.46515653111111, lng: 9.187395230390198 },
    { lat: 45.46507611196521, lng: 9.187598407727736 },
    { lat: 45.464803344428425, lng: 9.188257560588339 },
    { lat: 45.46470223198771, lng: 9.188553274134211 },
    { lat: 45.46469112542158, lng: 9.188999445202985 },
    { lat: 45.46469080830117, lng: 9.189344586631952 },
    { lat: 45.46468082561195, lng: 9.190793244557195 },
    { lat: 45.464682690406676, lng: 9.191422584798467 },
    { lat: 45.46469632884408, lng: 9.192334535856745 },
    { lat:45.464652121483596, lng: 9.192759665986191 },
    { lat: 45.46372658068593, lng: 9.19274960770532 },
    { lat: 45.463745297799484, lng: 9.193608595451517 }, 
    { lat: 45.463134795125335, lng: 9.193667080936171 },
    { lat: 45.462834832222825, lng: 9.193695738071646 },
    { lat: 45.46267445750483, lng: 9.193682997579305 },
    { lat: 45.46262930794149, lng: 9.193694396967793 },
    { lat: 45.46259591605464, lng: 9.193735300654613 },
    { lat: 45.46256722723464, lng: 9.193801014774422 },
    { lat: 45.4625587616784, lng: 9.193838565700027 },   
    { lat: 45.462459056140425, lng: 9.193666904326196 },
    { lat: 45.46238267516354, lng: 9.193733677955805 },
    { lat: 45.46232723590895, lng: 9.193769251569128 },
    { lat: 45.46203046910383, lng: 9.193959688409953 },
    { lat: 45.46156841319164, lng: 9.194245032141264 }, 
    { lat: 45.46135567072694, lng: 9.194371275740052 },
    { lat: 45.46113281819028, lng: 9.194514124582318 },
    { lat: 45.460476137889046, lng: 9.19392034156194 },
    
  ]

  // Creazione linea rossa trasparente di tutto il tragitto
  const busRosso = new google.maps.Polyline({
    path: percorsolineaRossa,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.3,
    strokeWeight: 2,
  });
// Creazione linea gialla trasparente di tutto il tragitto
  const busGiallo = new google.maps.Polyline({
    path: percorsolineaGialla,
    geodesic: true,
    strokeColor: "#FFA500",
    strokeOpacity: 0.5,
    strokeWeight: 3,
  });
// Creazione linea verde trasparente di tutto il tragitto
const busVerde = new google.maps.Polyline({
  path: percorsolineaVerde,
  geodesic: true,
  strokeColor: "#008000",
  strokeOpacity: 0.5,
  strokeWeight: 3,
});
// Creazione linea verde trasparente di tutto il tragitto
const busBlu = new google.maps.Polyline({
  path: percorsolineaBlu,
  geodesic: true,
  strokeColor: "#0000FF",
  strokeOpacity: 0.5,
  strokeWeight: 3,
});



  // creazione linea rossa dopo aver percorso un marker
  const fermate_percorso_rosso = [
    { lat: 45.46642621575427, lng: 9.197590291846295 }
  ]

  // creazione linea gialla dopo aver percorso un marker
  const fermate_percorso_giallo = [
    { lat: 45.451844389509844, lng: 9.201601530134223 }
  ]

   // creazione linea verde dopo aver percorso un marker
   const fermate_percorso_verde = [
    { lat: 45.4719268913349, lng: 9.187643811796736 }
  ]
// creazione linea blu dopo aver percorso un marker
   const fermate_percorso_blu = [
    { lat: 45.47031802180396, lng: 9.176224573519715 }
  ]


  // linea rossa e gialla viene impostato sulla mappa
  busRosso.setMap(map);
  busGiallo.setMap(map);
  busVerde.setMap(map);
  busBlu.setMap(map);

  // creo una funzione con i che parte da 0 e continua con l'intervallo

  var i = 0;
  //funzione che muove il bus settando una nuova posizione nel marker_partenza
  function moveBus() {
    if (i < percorsolineaRossa.length) {
      marker_partenza.setPosition(new google.maps.LatLng(percorsolineaRossa[i].lat, percorsolineaRossa[i].lng));
      fermate_percorso_rosso.push(percorsolineaRossa[i]);
      // creo una variabile che crea una polinea e si aggiorna man mano che il marker si muove
      var bus1_percorso = new google.maps.Polyline({
        path: fermate_percorso_rosso,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      bus1_percorso.setMap(map);
      i++;
    }
    else {
      clearInterval(bus_interval);
    }
  }

  // funzione che quando clicchi una fermata o pullman esce un popup informazioni
  fermateLineaRossa[0].addListener("click", openModal);
  fermateLineaRossa[1].addListener("click", openModal);
  marker_partenza.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
  var bus_interval = setInterval(moveBus, 1000);
}

// fa partire la mappa di google all'avvio della pagina
window.initMap = initMap;






  //moveBus(marker_partenza);


  //changeMarkerPosition(marker_partenza);

/* var numDeltas = 100;
 var delay = 10; //milliseconds
 var i = 0;
 var deltaLat;
 var deltaLng;
 
 
 
 
 function transition(result) {
   i = 0;
   deltaLat = (result[0] - position[0]) / numDeltas;
   deltaLng = (result[1] - position[1]) / numDeltas;
   moveMarker();
 }
 
 function moveMarker() {
   position[0] += deltaLat;
   position[1] += deltaLng;
   var partenza = new google.maps.LatLng(position[0], position[1]);
   marker.setTitle("Latitude:" + position[0] + " | Longitude:" + position[1]);
   marker.setPosition(partenza);
   if (i != numDeltas) {
     i++;
     setTimeout(moveMarker, delay);
   }
 }*/
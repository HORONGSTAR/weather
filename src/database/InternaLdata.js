export const cityDatas = [
   {
      name: '서울특별시',
      value: 'Seoul',
   },
   {
      name: '부산광역시',
      value: 'Busan',
   },
   {
      name: '대구광역시',
      value: 'Daegu',
   },
   {
      name: '인천광역시',
      value: 'Incheon',
   },
   {
      name: '광주광역시',
      value: 'Gwangju',
   },
   {
      name: '대전광역시',
      value: 'Daejeon',
   },
   {
      name: '울산광역시',
      value: 'Ulsan',
   },
   {
      name: '세종특별자치시',
      value: 'Sejong',
   },
   {
      name: '경기도',
      value: 'Gyeonggi-do',
   },
   {
      name: '강원특별자치도',
      value: 'Gangwon-do',
   },
   {
      name: '충청북도',
      value: 'Chungcheongbuk-do',
   },
   {
      name: '충청남도',
      value: 'Chungcheongnam-do',
   },
   {
      name: '전북특별자치도',
      value: 'Jeollabuk-do',
   },
   {
      name: '전라남도',
      value: 'Jeollanam-do',
   },
   {
      name: '경상북도',
      value: 'Gyeongsangbuk-do',
   },
   {
      name: '경상남도',
      value: 'Gyeongsangnam-do',
   },
   {
      name: '제주특별자치도',
      value: 'Jeju-do',
   },
]

export const localDatas = [
   {
      name: '수도권',
      value: 'Gyeonggi-do',
      lon: 127.25,
      lat: 37.6,
   },
   {
      name: '강원도',
      value: 'Gangwon-do',
      lon: 128.25,
      lat: 37.75,
   },
   {
      name: '충청북도',
      value: 'Chungcheongbuk-do',
      lon: 128,
      lat: 36.75,
   },
   {
      name: '충청남도',
      value: 'Chungcheongnam-do',
      lon: 127,
      lat: 36.5,
   },
   {
      name: '전라북도',
      value: 'Jeollabuk-do',
      lon: 127.25,
      lat: 35.75,
   },
   {
      name: '전라남도',
      value: 'Jeollanam-do',
      lon: 127,
      lat: 34.75,
   },
   {
      name: '경상북도',
      value: 'Gyeongsangbuk-do',
      lon: 128.75,
      lat: 36.3333,
   },
   {
      name: '경상남도',
      value: 'Gyeongsangnam-do',
      lon: 128.25,
      lat: 35.25,
   },
   {
      name: '제주도',
      value: 'Jeju-do',
      lon: 126.5,
      lat: 33.4167,
   },
   {
      name: '울릉/독도',
      value: 'Ulleung-do',
      lat: 37.4844,
      lon: 131.4,
   },
]

export const airLevels = (type, values) => {
   let value = values[type]
   let result
   switch (type) {
      case 'pm10':
         result = value > 150 ? '매우 나쁨' : value > 80 ? '나쁨' : value > 30 ? '보통' : '좋음'
         break
      case 'pm2_5':
         result = value > 75 ? '매우 나쁨' : value > 35 ? '나쁨' : value > 15 ? '보통' : '좋음'
         break
      default:
         break
   }
   return result
}

export const address = {
   Seoul: [
      '종로구',
      '중구',
      '용산구',
      '성동구',
      '광진구',
      '동대문구',
      '중랑구',
      '성북구',
      '강북구',
      '도봉구',
      '노원구',
      '은평구',
      '서대문구',
      '마포구',
      '양천구',
      '강서구',
      '구로구',
      '금천구',
      '영등포구',
      '동작구',
      '관악구',
      '서초구',
      '강남구',
      '송파구',
      '강동구',
   ],
   Busan: [
      '중구',
      '서구',
      '동구',
      '영도구',
      '부산진구',
      '동래구',
      '남구',
      '북구',
      '해운대구',
      '사하구',
      '금정구',
      '강서구',
      '연제구',
      '수영구',
      '사상구',
      '기장군',
   ],
   Daegu: ['중구', '동구', '서구', '남구', '북구', '수성구', '달서구', '달성군', '군위군'],
   Incheon: [
      '중구',
      '동구',
      '미추홀구',
      '연수구',
      '남동구',
      '부평구',
      '계양구',
      '서구',
      '강화군',
      '옹진군',
   ],
   Gwangju: ['동구', '서구', '남구', '북구', '광산구'],
   Daejeon: ['동구', '중구', '서구', '유성구', '대덕구'],
   Ulsan: ['중구', '남구', '동구', '북구', '울주군'],
   Sejong: ['세종특별자치시'],
   'Gyeonggi-do': [
      '수원시',
      '용인시',
      '고양시',
      '화성시',
      '성남시',
      '부천시',
      '남양주시',
      '안산시',
      '평택시',
      '안양시',
      '시흥시',
      '파주시',
      '김포시',
      '의정부시',
      '광주시',
      '하남시',
      '광명시',
      '군포시',
      '양주시',
      '오산시',
      '이천시',
      '안성시',
      '구리시',
      '의왕시',
      '포천시',
      '양평군',
      '동두천시',
      '과천시',
      '가평군',
      '연천군',
   ],
   'Gangwon-do': [
      '춘천시',
      '원주시',
      '강릉시',
      '동해시',
      '태백시',
      '속초시',
      '삼척시',
      '홍천군',
      '횡성군',
      '영월군',
      '평창군',
      '정선군',
      '철원군',
      '화천군',
      '양구군',
      '인제군',
      '고성군',
      '양양군',
   ],
   'Chungcheongbuk-do': [
      '청주시',
      '충주시',
      '제천시',
      '보은군',
      '옥천군',
      '영동군',
      '증평군',
      '진천군',
      '괴산군',
      '음성군',
      '단양군',
   ],
   'Chungcheongnam-do': [
      '천안시',
      '공주시',
      '보령시',
      '아산시',
      '서산시',
      '논산시',
      '계룡시',
      '당진시',
      '금산군',
      '부여군',
      '서천군',
      '청양군',
      '홍성군',
      '예산군',
      '태안군',
   ],
   'Jeollabuk-do': [
      '전주시',
      '군산시',
      '익산시',
      '정읍시',
      '남원시',
      '김제시',
      '완주군',
      '진안군',
      '무주군',
      '장수군',
      '임실군',
      '순창군',
      '고창군',
      '부안군',
   ],
   'Jeollanam-do': [
      '목포시',
      '여수시',
      '순천시',
      '나주시',
      '광양시',
      '담양군',
      '곡성군',
      '구례군',
      '고흥군',
      '보성군',
      '화순군',
      '장흥군',
      '강진군',
      '해남군',
      '영암군',
      '무안군',
      '함평군',
      '영광군',
      '장성군',
      '완도군',
      '진도군',
      '신안군',
   ],
   'Gyeongsangbuk-do': [
      '포항시',
      '경주시',
      '김천시',
      '안동시',
      '구미시',
      '영주시',
      '영천시',
      '상주시',
      '문경시',
      '경산시',
      '의성군',
      '청송군',
      '영양군',
      '영덕군',
      '청도군',
      '고령군',
      '성주군',
      '칠곡군',
      '예천군',
      '봉화군',
      '울진군',
      '울릉군',
   ],
   'Gyeongsangnam-do': [
      '창원시',
      '진주시',
      '통영시',
      '사천시',
      '김해시',
      '밀양시',
      '거제시',
      '양산시',
      '의령군',
      '함안군',
      '창녕군',
      '고성군',
      '남해군',
      '하동군',
      '산청군',
      '함양군',
      '거창군',
      '합천군',
   ],
   'Jeju-do': ['제주시', '서귀포시'],
}

export const weatherKo = {
   201: '약한 비를 동반한 뇌우',
   200: '비를 동반한 뇌우',
   202: '폭우를 동반한 뇌우',
   210: '약한 뇌우',
   211: '뇌우',
   212: '강한 뇌우',
   221: '불규칙적 뇌우',
   230: '약한 연무를 동반한 뇌우',
   231: '연무를 동반한 뇌우',
   232: '강한 안개비 동반한 뇌우',
   300: '가벼운 안개비',
   301: '안개비',
   302: '강한 안개비',
   310: '가벼운 적은비',
   311: '적은 비',
   312: '강한 적은비',
   313: '소나기와 안개비',
   314: '강한 소나기와 안개비',
   321: '소나기',
   500: '약한 비',
   501: '중간 비',
   502: '강한 비',
   503: '매우 강한 비',
   504: '극심한 비',
   511: '우박',
   520: '약한 소나기 비',
   521: '소나기 비',
   522: '강한 소나기 비',
   531: '불규칙적 소나기 비',
   600: '가벼운 눈',
   601: '눈',
   602: '강한 눈',
   611: '진눈깨비',
   612: '소나기 진눈깨비',
   615: '약한 비와 눈',
   616: '비와 눈',
   620: '약한 소나기 눈',
   621: '소나기 눈',
   622: '강한 소나기 눈',
   701: '박무',
   711: '연기',
   721: '연무',
   731: '모래 먼지',
   741: '안개',
   751: '모래',
   761: '먼지',
   762: '화산재',
   771: '돌풍',
   781: '토네이도',
   800: '맑음',
   801: '구름 조금',
   802: '구름 보통',
   803: '구름 많음',
   804: '흐림',
   900: '토네이도',
   901: '태풍',
   902: '허리케인',
   903: '한랭',
   904: '고온',
   905: '바람부는',
   906: '우박',
   951: '매우 약한 바람',
   952: '약한 바람',
   953: '부드러운 바람',
   954: '보통 세기의 바람',
   955: '신선한 바람',
   956: '강한 바람',
   957: '매우 강한 바람',
   958: '돌풍',
   959: '심각한 돌풍',
   960: '폭풍',
   961: '강한 폭풍',
   962: '허리케인',
}

const today = new Date()
export const todays = {
   year: today.getFullYear(),
   month: today.getMonth() + 1,
   date: today.getDate(),
   day: today.getDay(),
   hour: today.getHours(),
   week: ['일', '월', '화', '수', '목', '금', '토'],
}

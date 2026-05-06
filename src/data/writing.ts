export interface FeaturedWork {
  title: string;
  publication: string;
  year: string;
  url: string;
  image: string;
  description: string;
  type: 'Documentary' | 'Investigation' | 'Photography';
  note?: string;
}

export interface SeriesItem {
  title: string;
  url: string;
  note?: 'video' | 'vr' | 'archived';
}

export interface WritingSeries {
  name: string;
  publication: string;
  period: string;
  badge?: string;
  description: string;
  items: SeriesItem[];
}

export const featuredWorks: FeaturedWork[] = [
  {
    title: '疫情下的在日留学日记',
    publication: 'Phoenix TV',
    year: '2021',
    url: 'https://ent.ifeng.com/c/89AtBYbXVBS',
    image: '/images/cover-documentary.png',
    description: 'An independent documentary I produced during the early COVID pandemic, following the daily life of Chinese students stranded in Japan.',
    type: 'Documentary',
  },
  {
    title: '新冠康复者遭职场歧视',
    publication: 'The Cover (封面新闻)',
    year: '2022',
    url: 'https://m.thecover.cn/news_details.html?eid=H4rQMrOpoNU=',
    image: '/images/cover-covid-discrimination.jpg',
    description: 'An investigation into workplace discrimination against COVID survivors, which prompted an official response from the State Council and contributed to subsequent policy measures.',
    type: 'Investigation',
    note: 'Prompted State Council policy response',
  },
  {
    title: '浦东上南九村雨夜中的核酸检测一瞥',
    publication: 'The Paper (澎湃新闻)',
    year: '2022',
    url: 'https://finance.sina.com.cn/jjxw/2022-03-25/doc-imcwipii0464067.shtml',
    image: '/images/cover-nucleic-acid.jpg',
    description: 'A late-night photographic dispatch from a Shanghai neighborhood during mass nucleic acid testing in the early days of the city\'s COVID lockdown.',
    type: 'Photography',
    note: 'Original archived; readable via repost',
  },
];

export const writingSeries: WritingSeries[] = [
  {
    name: 'Photography',
    publication: 'The Paper (澎湃新闻)',
    period: '2021–2023',
    description: 'Profiles of photographers and documentary coverage of exhibitions, spanning Japanese photography movements, pandemic documentation, and urban life.',
    items: [
      { title: '摄影记疫｜静态管理两个月后，乍浦路桥上重现的爱与平凡', url: 'https://www.thepaper.cn/newsDetail_forward_18440310' },
      { title: '摄影师｜福岛菊次郎：我这25万照片记录下"日本的谎言"', url: 'https://www.thepaper.cn/newsDetail_forward_15767687' },
      { title: '摄影师｜浅田政志：我的家庭相册是再现共同回忆的场景', url: 'https://www.thepaper.cn/newsDetail_forward_11456599' },
      { title: '看展览｜北井一夫：走向村庄，然后继续走向村庄', url: 'https://www.thepaper.cn/newsDetail_forward_12987044' },
      { title: '摄影记疫｜荷兰摄影师夫妻镜头下的纽约街巷', url: 'https://www.thepaper.cn/newsDetail_forward_16042488' },
      { title: '摄影师｜吴四一：中国农村摄影宣传员，为党留下4万多张照片', url: 'https://www.thepaper.cn/newsDetail_forward_15992225' },
      { title: '看展览｜纪实摄影师刘香成为时尚摄影师陈漫策展', url: 'https://www.thepaper.cn/newsDetail_forward_11920967' },
      { title: '看展览｜西班牙的中国梦：历史影像中的百年变迁', url: 'https://www.thepaper.cn/newsDetail_forward_14736462' },
      { title: '看展览｜找路：1970-1980年代的台湾摄影', url: 'https://www.thepaper.cn/newsDetail_forward_14899726' },
      { title: '深濑昌久1961-1991回顾展在东京都写真美术馆展出', url: 'https://www.thepaper.cn/newsDetail_forward_22683612' },
    ],
  },
  {
    name: 'Multimedia & VR',
    publication: 'The Paper (澎湃新闻)',
    period: '2021–2022',
    description: 'Interactive VR dispatches and photo essays documenting urban transformation and everyday life in Shanghai.',
    items: [
      { title: 'VR｜这座社区里的高线公园，等你来打卡', url: 'https://h5.thepaper.cn/html/pano/2021/09/bai_xi_park/index.html', note: 'vr' },
      { title: 'VR｜交房啦！70岁曹杨新村旧房改造完成', url: 'https://h5.thepaper.cn/html/pano/2021/11/cao_yang/index.html', note: 'vr' },
      { title: '图集｜子夜越江！南浦大桥通车了，外滩又堵了', url: 'https://www.thepaper.cn/newsDetail_forward_18356353' },
      { title: '上海在路上·一个村｜时光的影子，投射在70年后的曹杨新村', url: 'https://www.thepaper.cn/newsDetail_forward_15940320' },
      { title: '奔涌入海·北外滩｜被弃老物件，勾起一代上海人的生活记忆', url: 'https://www.thepaper.cn/newsDetail_forward_20293598' },
    ],
  },
  {
    name: 'Propaganda',
    publication: 'The Paper · The Cover (澎湃新闻 · 封面新闻)',
    period: '2021–2022',
    badge: '中国新闻奖',
    description: 'Institutional commissions produced as part of the CCP centenary coverage and a national infrastructure documentary series. The 曹杨新村 project documented a landmark model socialist community in Shanghai; the 大国工程 series won a Chinese Journalism Award.',
    items: [
      { title: '北京大兴国际机场为何被誉为"新世界七大奇迹"之首？｜大国工程我来建', url: 'https://www.thecover.cn/video/WOQNOP5gNO0=', note: 'video' },
      { title: '从江河走向海洋 原杭州湾跨海大桥总工程师吕忠达｜大国工程我来建', url: 'https://www.thecover.cn/news/tIgi%2BYZ1row=' },
      { title: '"跨越百年梦想"的杭州湾跨海大桥｜大国工程我来建', url: 'https://www.thecover.cn/video/i9NebQnAmRU=', note: 'video' },
      { title: '"彩云号"硬岩掘进机奋勇向前｜大国工程我来建', url: 'https://www.thecover.cn/video/5KaEE1nT0QQ=', note: 'video' },
      { title: '开山裂石的猛兽"彩云号" 研发负责人贺飞：打通大山就是我的使命｜大国工程我来建', url: 'https://www.thecover.cn/news/GSxYO/znxLU=' },
      { title: '曹杨新村系列（建党百年特别报道）', url: 'https://www.thepaper.cn/newsDetail_forward_13442780' },
    ],
  },
  {
    name: 'Science & Technology',
    publication: 'The Cover (封面新闻)',
    period: '2022',
    description: 'Breaking news and feature coverage of emerging technologies and environmental events.',
    items: [
      { title: '5.5G有望2024年进入商用 它将如何改变生活？', url: 'https://www.thecover.cn/news/cbMikkRyn6o=' },
      { title: '世界首台矿用机动型硬岩掘进机下线 研发团队：解决了"卡脖子"问题', url: 'https://www.thecover.cn/news/65DfaZN0vig=' },
      { title: '塔克拉玛干沙漠出现"湖泊"？气候学专家解析三大疑问', url: 'https://www.thecover.cn/news/y3SF37xcwSU=' },
      { title: '辽宁绕阳河堤坝溃口追踪 当地农户：水稻被淹了 螃蟹被冲走了', url: 'https://www.thecover.cn/news/GOZO4svuCWY=' },
    ],
  },
];

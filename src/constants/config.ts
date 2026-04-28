import { ServiceItem, WorkItem, StrengthItem, PricePlan, FaqItem } from '@/types';

export const SITE_CONFIG = {
  seo: {
    title: 'BRIGHT | Design × Strategy',
    description: 'ブランディングからWeb制作・集客まで、成果につながるデザインで、あなたのビジネスの未来をつくります。',
    url: 'https://example.com',
  },
  contact: {
    phone: '',
    email: 'info@example.com',
  },
};

export const LP_DATA = {
  hero: {
    title: 'その想い、\n伝わるカタチに。\nビジネスを、加速させる。',
    subtitle: 'Design × Strategy',
    description: 'ブランディングからWeb制作・集客まで、\n成果につながるデザインで、あなたのビジネスの未来をつくります。',
    features: [
      'ブランディングで選ばれる理由をつくる',
      '使いやすいUI/UXでファンを増やす',
      '集客・売上につながるWeb戦略を設計',
    ],
    ctaText: '無料で相談してみる',
    badgeText: 'つくるだけじゃない。\n結果にこだわる\nパートナー。',
  },
  service: {
    sectionTitle: 'SERVICE',
    sectionSubtitle: 'サービス',
    description: '課題や目的に合わせて、最適なサービスをワンストップでご提供します。',
    items: [
      {
        id: 'branding',
        title: 'BRANDING',
        subtitle: 'ブランディング',
        description: 'ブランドの価値を言語化し、選ばれる理由をつくります。',
        iconType: 'secondary', // Uses blob icon background color
        iconPath: '/images/icon_05.png' // Mapping to available icons, might need adjustment based on visual check
      },
      {
        id: 'web-design',
        title: 'WEB DESIGN',
        subtitle: 'Webサイト制作',
        description: '魅力が伝わり、成果につながるWebサイトを制作します。',
        iconType: 'primary',
        iconPath: '/images/icon_06.png'
      },
      {
        id: 'ui-ux',
        title: 'UI/UX DESIGN',
        subtitle: 'UI/UXデザイン',
        description: '使いやすく、心地よい体験でファンを増やします。',
        iconType: 'accent-pink',
        iconPath: '/images/icon_07.png'
      },
      {
        id: 'web-marketing',
        title: 'WEB MARKETING',
        subtitle: 'Web集客支援',
        description: 'SEO・広告・SNSで集客を強化し、売上アップに貢献します。',
        iconType: 'accent-purple',
        iconPath: '/images/icon_08.png'
      },
    ] as ServiceItem[],
  },
  works: {
    sectionTitle: 'WORKS',
    sectionSubtitle: '制作実績',
    description: 'さまざまな業種の課題を解決し、\n成果につながるWebサイトを\n制作してきました。',
    ctaText: 'すべての実績を見る',
    items: [
      {
        id: 'work1',
        name: 'CAFE Roastery',
        category: '飲食店・カフェ',
        description: 'ブランドサイト / 高度なUI/UX',
        stats: { label: 'CVR', value: '210%', suffix: 'UP' }
      },
      {
        id: 'work2',
        name: 'hair design LUANA',
        category: '美容室・サロン',
        description: 'ブランドサイト / 予約数向上',
        stats: { label: '予約数', value: '180%', suffix: 'UP' }
      },
      {
        id: 'work3',
        name: 'みなみクリニック',
        category: 'クリニック・医院',
        description: 'コーポレートサイト / 信頼性向上',
        stats: { label: 'お問い合わせ', value: '250%', suffix: 'UP' }
      },
      {
        id: 'work4',
        name: 'ひかり整骨院',
        category: '整骨院・治療院',
        description: '集客サイト / 新規患者数向上',
        stats: { label: '新規患者数', value: '200%', suffix: 'UP' }
      }
    ] as WorkItem[]
  },
  strength: {
    sectionTitle: 'STRENGTH',
    sectionSubtitle: '私たちの強み',
    description: 'デザインの力で、ビジネスの成長に\nコミットします。',
    items: [
      {
        id: 's1',
        number: '01',
        title: '成果にこだわる設計',
        description: 'ビジネス目標から逆算し、成果につながる戦略・設計を行います。',
        iconPath: '/images/icon_01.png'
      },
      {
        id: 's2',
        number: '02',
        title: '顧客理解と提案力',
        description: '多様な業種の知見を活かし、課題に合わせた最適な提案を行います。',
        iconPath: '/images/icon_02.png'
      },
      {
        id: 's3',
        number: '03',
        title: 'UI/UXに強いデザイン',
        description: '使いやすく、伝わるデザインでユーザー体験を高め、ファンを増やします。',
        iconPath: '/images/icon_03.png'
      },
      {
        id: 's4',
        number: '04',
        title: '公開後も伴走サポート',
        description: '運用・改善・集客まで、長期的にパートナーとして支援します。',
        iconPath: '/images/icon_04.png' // Heart icon etc.
      }
    ] as StrengthItem[]
  },
  price: {
    sectionTitle: 'PRICE',
    sectionSubtitle: '料金プラン',
    description: '目的やご予算に合わせて、\n最適なプランをご提案します。\n\n※表示はすべて税抜価格です',
    plans: [
      {
        id: 'light',
        name: 'ライトプラン',
        description: '小規模サイトにおすすめ',
        price: '300,000',
        features: [
          'トップページ＋下層3P',
          'スマホ対応',
          'お問い合わせフォーム',
          '基本SEO対策'
        ]
      },
      {
        id: 'standard',
        name: 'スタンダードプラン',
        description: '集客・ブランディングに最適',
        price: '600,000',
        isPopular: true,
        features: [
          'トップページ＋下層5P',
          'スマホ対応',
          'お問い合わせフォーム',
          'SEO対策',
          '画像・文章サポート'
        ]
      },
      {
        id: 'premium',
        name: 'プレミアムプラン',
        description: '本格的に成果を出したい方へ',
        price: '1,000,000',
        features: [
          'オリジナルデザイン',
          'トップページ＋下層10P〜',
          '戦略設計 / UI/UX設計',
          '集客支援 / 運用サポート'
        ]
      }
    ] as PricePlan[]
  },
  faq: {
    sectionTitle: 'FAQ',
    sectionSubtitle: 'よくあるご質問',
    description: 'よくいただくご質問を\nまとめました。',
    ctaText: 'すべての質問を見る',
    items: [
      {
        question: '制作の期間はどのくらいですか？',
        answer: '規模にもよりますが、通常1.5〜3ヶ月程度頂戴しております。お急ぎの場合はご相談ください。'
      },
      {
        question: '具体的に何を準備すればいいですか？',
        answer: '会社概要やパンフレットなど、基本的な資料をご準備ください。写真や文章の作成サポートも可能です。'
      },
      {
        question: '公開後のサポートはありますか？',
        answer: 'はい、保守管理からアクセス解析、改善提案まで継続的にサポートするプランをご用意しております。'
      },
      {
        question: 'SEOや集客のサポートもお願いできますか？',
        answer: 'もちろん可能です。Webサイト制作と連動したSEO対策やWeb広告の運用など、総合的に支援いたします。'
      }
    ] as FaqItem[]
  },
  contact: {
    title: '無料相談・お見積りはこちら',
    description: 'あなたのビジネスの課題や想いをお聞かせください。\n最適な解決策をご提案します。',
    ctaText: '今すぐ無料で相談する'
  }
};

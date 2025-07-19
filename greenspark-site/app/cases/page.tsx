import { getAllMarkdownContent } from '@/lib/markdown';
import Link from 'next/link';

export default async function Cases() {
  const cases = await getAllMarkdownContent('cases');

  const defaultCases = [
    {
      slug: 'greenfactory',
      title: 'GreenFactory株式会社',
      date: '2025-07-10',
      excerpt: '月間電力コストを32%削減した具体策とは？',
      tags: ['製造', '省エネ'],
      content: ''
    },
    {
      slug: 'smartparts',
      title: 'SmartParts工業',
      date: '2025-06-15',
      excerpt: '設備更新により年間500万円のコスト削減を実現',
      tags: ['製造', '設備更新'],
      content: ''
    },
    {
      slug: 'ecotech',
      title: 'EcoTech製作所',
      date: '2025-05-20',
      excerpt: '再生可能エネルギー導入で環境負荷を50%削減',
      tags: ['製造', '再生エネルギー'],
      content: ''
    },
    {
      slug: 'techmanu',
      title: 'TechManu株式会社',
      date: '2025-04-12',
      excerpt: 'IoT監視システム導入でメンテナンス費用30%削減',
      tags: ['製造', 'IoT'],
      content: ''
    },
    {
      slug: 'cleanproduce',
      title: 'CleanProduce有限会社',
      date: '2025-03-08',
      excerpt: '照明LED化とエアコン更新で年間300万円の電気代削減',
      tags: ['製造', '設備更新'],
      content: ''
    },
    {
      slug: 'innovate-metal',
      title: 'イノベート金属工業',
      date: '2025-02-22',
      excerpt: '工場全体のエネルギーマネジメント最適化で40%の省エネを達成',
      tags: ['製造', 'エネルギー管理'],
      content: ''
    }
  ];

  const displayCases = defaultCases;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              導入事例
            </h1>
            <p className="text-xl text-gray-600">
              実際の成功事例をご紹介します
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <button className="px-4 py-2 bg-greenspark-green text-white rounded-lg text-sm font-medium">
                すべて
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-300">
                製造
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-300">
                省エネ
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-300">
                設備更新
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-300">
                IoT
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-300">
                エネルギー管理
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayCases.map((caseItem, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-greenspark-green to-greenspark-yellow"></div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {caseItem.tags?.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-greenspark-green bg-opacity-20 text-greenspark-green text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {caseItem.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">
                      {caseItem.date}
                    </span>
                    <Link
                      href={`/cases/${caseItem.slug}`}
                      className="text-greenspark-green font-semibold text-sm hover:underline"
                    >
                      詳細を見る →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <div className="text-xl md:text-2xl font-bold text-greenspark-green mb-4">
                GreenSpark Solutions
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                〒100-0001<br />
                東京都千代田区千代田1-1-1<br />
                グリーンスパークビル 5F
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 w-full md:w-auto">
              <div className="text-left w-full sm:w-32">
                <h4 className="font-semibold mb-4 text-sm md:text-base">サービス</h4>
                <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                  <li><Link href="/service/audit" className="hover:text-greenspark-green">省エネ診断</Link></li>
                  <li><Link href="/service/consulting" className="hover:text-greenspark-green">コンサルティング</Link></li>
                  <li><Link href="/cases" className="hover:text-greenspark-green">導入事例</Link></li>
                </ul>
              </div>
              <div className="text-left w-full sm:w-32">
                <h4 className="font-semibold mb-4 text-sm md:text-base">会社情報</h4>
                <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                  <li><Link href="/company/about" className="hover:text-greenspark-green">会社概要</Link></li>
                  <li><Link href="/company/team" className="hover:text-greenspark-green">チーム</Link></li>
                </ul>
              </div>
              <div className="text-left w-full sm:w-40">
                <h4 className="font-semibold mb-4 text-sm md:text-base">お問い合わせ</h4>
                <div className="space-y-2 text-gray-400 text-sm md:text-base">
                  <p>📞 03-1234-5678</p>
                  <p>🕒 平日 9:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GreenSpark Solutions Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
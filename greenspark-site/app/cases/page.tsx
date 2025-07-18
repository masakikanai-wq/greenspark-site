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
    }
  ];

  const displayCases = cases.length > 0 ? cases : defaultCases;

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
          
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-greenspark-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors inline-block"
            >
              あなたの事例を作りませんか？
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
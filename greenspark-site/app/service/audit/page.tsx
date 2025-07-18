import { getMarkdownContent } from '@/lib/markdown';
import Link from 'next/link';

export default async function Audit() {
  const content = await getMarkdownContent('service', 'audit');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {content?.title || '省エネ診断サービス'}
            </h1>
            <p className="text-xl text-gray-600">
              ESCO診断で最適なエネルギー効率化を実現
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              {content?.content ? (
                <div dangerouslySetInnerHTML={{ __html: content.content }} />
              ) : (
                <div className="text-gray-600">
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-greenspark-green mb-6 text-center">
                      診断フロー
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-greenspark-green text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                          1
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          事前調査
                        </h3>
                        <p className="text-center text-sm text-gray-600">
                          設備リスト<br />
                          エネルギー使用実績<br />
                          現場確認
                        </p>
                      </div>
                      <div className="hidden md:block text-greenspark-green text-2xl">→</div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-greenspark-green text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                          2
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          詳細分析
                        </h3>
                        <p className="text-center text-sm text-gray-600">
                          エネルギー監査<br />
                          効率性評価<br />
                          改善ポイント特定
                        </p>
                      </div>
                      <div className="hidden md:block text-greenspark-green text-2xl">→</div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-greenspark-green text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg">
                          3
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          提案・報告
                        </h3>
                        <p className="text-center text-sm text-gray-600">
                          改善提案書<br />
                          投資効果計算<br />
                          実施計画
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        診断内容
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-greenspark-green mr-2">✓</span>
                          <span>電力使用量の詳細分析</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-greenspark-green mr-2">✓</span>
                          <span>設備の運転効率評価</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-greenspark-green mr-2">✓</span>
                          <span>熱エネルギー最適化</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-greenspark-green mr-2">✓</span>
                          <span>照明・空調システム改善</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-greenspark-green mr-2">✓</span>
                          <span>再生可能エネルギー導入検討</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        診断結果
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-greenspark-green mr-2">📊</span>
                          <span>現状のエネルギー使用状況</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-greenspark-green mr-2">💡</span>
                          <span>改善ポイントの優先順位</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-greenspark-green mr-2">💰</span>
                          <span>投資効果の試算</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-greenspark-green mr-2">📈</span>
                          <span>削減目標の設定</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-greenspark-green mr-2">🔧</span>
                          <span>具体的な実施方法</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-greenspark-green bg-opacity-10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      診断料金
                    </h3>
                    <div className="text-gray-600">
                      <p className="mb-2">
                        <span className="font-semibold">基本診断：</span> 無料
                      </p>
                      <p className="mb-2">
                        <span className="font-semibold">詳細診断：</span> 50,000円〜
                      </p>
                      <p className="text-sm text-gray-500">
                        ※ 工場規模・設備数に応じて料金が決まります
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/contact"
              className="bg-greenspark-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors inline-block"
            >
              無料診断のお申し込み
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
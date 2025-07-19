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
                <div>
                  <div className="space-y-12">
                    {/* Diagnostic Flow Section */}
                    <div>
                      <h2 className="text-3xl font-bold text-greenspark-green mb-8 text-center">
                        診断フロー
                      </h2>
                      <div className="w-16 h-px bg-greenspark-green mx-auto mb-8"></div>
                      
                      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
                        <div className="bg-gray-50 rounded-lg p-6 text-center flex-1 max-w-sm">
                          <div className="w-16 h-16 bg-greenspark-green text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg mx-auto">
                            1
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            事前調査
                          </h3>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 設備リスト作成</li>
                            <li>• エネルギー使用実績収集</li>
                            <li>• 現場の予備調査</li>
                          </ul>
                        </div>
                        <div className="hidden md:block text-greenspark-green text-2xl">→</div>
                        <div className="bg-gray-50 rounded-lg p-6 text-center flex-1 max-w-sm">
                          <div className="w-16 h-16 bg-greenspark-green text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg mx-auto">
                            2
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            詳細分析
                          </h3>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• エネルギー監査実施</li>
                            <li>• 設備効率性評価</li>
                            <li>• 改善ポイント特定</li>
                          </ul>
                        </div>
                        <div className="hidden md:block text-greenspark-green text-2xl">→</div>
                        <div className="bg-gray-50 rounded-lg p-6 text-center flex-1 max-w-sm">
                          <div className="w-16 h-16 bg-greenspark-green text-white rounded-full flex items-center justify-center mb-4 font-bold text-lg mx-auto">
                            3
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            提案・報告
                          </h3>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 改善提案書作成</li>
                            <li>• 投資効果詳細計算</li>
                            <li>• 実施計画策定</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Diagnostic Content Section */}
                    <div>
                      <h2 className="text-3xl font-bold text-greenspark-green mb-8 text-center">
                        診断内容
                      </h2>
                      <div className="w-16 h-px bg-greenspark-green mx-auto mb-8"></div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gray-50 rounded-lg p-6">
                          <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">⚡</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">電力システム</h3>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>受電設備効率分析</li>
                            <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>動力設備負荷率調査</li>
                            <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>無効電力測定・改善</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6">
                          <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🔥</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">熱エネルギー</h3>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>ボイラー効率測定</li>
                            <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>配管断熱状況確認</li>
                            <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>熱回収可能性調査</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6">
                          <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">💡</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">照明・空調</h3>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>照明設備効率評価</li>
                            <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>空調システム運転状況</li>
                            <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>自然採光活用提案</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6">
                          <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🏭</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">生産設備</h3>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>主要設備電力分析</li>
                            <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>待機電力削減提案</li>
                            <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>設備更新効果試算</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Diagnostic Results Section */}
                    <div>
                      <h2 className="text-3xl font-bold text-greenspark-green mb-8 text-center">
                        診断結果で得られるもの
                      </h2>
                      <div className="w-16 h-px bg-greenspark-green mx-auto mb-8"></div>
                      
                      <div className="space-y-6">
                        <div className="bg-gray-50 rounded-lg p-6">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-greenspark-green rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-sm">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">現状のエネルギー使用状況</h3>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>詳細な使用量データ</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>設備別の消費内訳</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>時間帯別使用パターン</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-6">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-greenspark-green rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-sm">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">改善ポイントの優先順位</h3>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>投資効果順の提案</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>実施難易度評価</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>短期・中期・長期分類</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-6">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-greenspark-green rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-sm">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">投資効果の試算</h3>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>初期投資額算出</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>年間削減効果予測</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>投資回収期間計算</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features Section */}
                    <div>
                      <h2 className="text-3xl font-bold text-greenspark-green mb-8 text-center">
                        診断の特徴
                      </h2>
                      <div className="w-16 h-px bg-greenspark-green mx-auto mb-8"></div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center bg-gray-50 rounded-lg p-6">
                          <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🎓</span>
                          </div>
                          <h3 className="font-bold text-gray-800 mb-2">専門性</h3>
                          <p className="text-gray-600 text-sm">有資格者による精密な診断</p>
                        </div>
                        <div className="text-center bg-gray-50 rounded-lg p-6">
                          <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🔍</span>
                          </div>
                          <h3 className="font-bold text-gray-800 mb-2">客観性</h3>
                          <p className="text-gray-600 text-sm">第三者の視点からの評価</p>
                        </div>
                        <div className="text-center bg-gray-50 rounded-lg p-6">
                          <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🛠️</span>
                          </div>
                          <h3 className="font-bold text-gray-800 mb-2">実用性</h3>
                          <p className="text-gray-600 text-sm">実際に実施可能な提案</p>
                        </div>
                        <div className="text-center bg-gray-50 rounded-lg p-6">
                          <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🔄</span>
                          </div>
                          <h3 className="font-bold text-gray-800 mb-2">継続性</h3>
                          <p className="text-gray-600 text-sm">継続的な改善をサポート</p>
                        </div>
                      </div>
                    </div>

                    {/* Pricing Section */}
                    <div>
                      <h2 className="text-3xl font-bold text-greenspark-green mb-8 text-center">
                        診断料金
                      </h2>
                      <div className="w-16 h-px bg-greenspark-green mx-auto mb-8"></div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                          <h3 className="font-bold text-gray-800 mb-2">基本診断</h3>
                          <div className="text-2xl font-bold text-greenspark-green mb-2">無料</div>
                          <p className="text-gray-600 text-sm">現状把握と基本的な改善提案</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                          <h3 className="font-bold text-gray-800 mb-2">詳細診断</h3>
                          <div className="text-2xl font-bold text-greenspark-green mb-2">5万円〜</div>
                          <p className="text-gray-600 text-sm">詳細分析と投資効果計算</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                          <h3 className="font-bold text-gray-800 mb-2">精密診断</h3>
                          <div className="text-2xl font-bold text-greenspark-green mb-2">20万円〜</div>
                          <p className="text-gray-600 text-sm">包括的な改善計画策定</p>
                        </div>
                      </div>
                      <p className="text-center text-gray-500 text-sm mt-6">
                        ※工場規模・設備数・診断深度により料金が決まります<br />
                        ※詳細診断以上をご利用の場合、その後のコンサルティング契約時に診断費用を割引いたします
                      </p>
                    </div>
                  </div>
                </div>
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
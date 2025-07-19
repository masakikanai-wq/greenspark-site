import { getMarkdownContent } from '@/lib/markdown';
import Link from 'next/link';

export default async function Consulting() {
  const content = await getMarkdownContent('service', 'consulting');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {content?.title || 'コンサルティングサービス'}
            </h1>
            <p className="text-xl text-gray-600">
              問題解決から成果創出まで、総合的にサポート
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              {content?.content ? (
                <div>
                  <div className="space-y-12">
                    {/* Service Content Section */}
                    <div>
                      <h2 className="text-3xl font-bold text-greenspark-green mb-8 text-center">
                        サービス内容
                      </h2>
                      <div className="w-16 h-px bg-greenspark-green mx-auto mb-8"></div>
                      
                      <div className="space-y-8">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-greenspark-green rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-sm">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">現状分析・診断</h3>
                          </div>
                          <p className="text-gray-600 mb-4">
                            工場の設備、運用状況を詳細に分析し、エネルギー効率の改善点を特定します。
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>エネルギー使用量の詳細分析</li>
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>設備の効率性評価</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>運用プロセスの最適化提案</li>
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>無駄な消費の特定</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-lg p-6">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-greenspark-green rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-sm">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">改善計画策定</h3>
                          </div>
                          <p className="text-gray-600 mb-4">
                            お客様の予算と目標に応じた最適な改善計画を策定します。
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>ROI（投資対効果）の詳細計算</li>
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>段階的な実施プラン</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>補助金申請サポート</li>
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>リスク分析と対策</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-lg p-6">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-greenspark-green rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-sm">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">実施・フォローアップ</h3>
                          </div>
                          <p className="text-gray-600 mb-4">
                            改善施策の実施から効果検証まで、継続的にサポートします。
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>導入プロジェクトの管理</li>
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>効果測定・レポート</li>
                            </ul>
                            <ul className="text-sm text-gray-600 space-y-2">
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>継続的な改善提案</li>
                              <li className="flex items-center"><span className="text-greenspark-green mr-2">✓</span>技術サポート</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features Section */}
                    <div>
                      <h2 className="text-3xl font-bold text-greenspark-green mb-8 text-center">
                        選ばれる特徴
                      </h2>
                      <div className="w-16 h-px bg-greenspark-green mx-auto mb-8"></div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center bg-white rounded-xl shadow-lg p-6">
                          <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">📊</span>
                          </div>
                          <h3 className="font-bold text-gray-800 mb-2">実績重視</h3>
                          <p className="text-gray-600 text-sm">200社以上の成功事例</p>
                        </div>
                        <div className="text-center bg-white rounded-xl shadow-lg p-6">
                          <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🎯</span>
                          </div>
                          <h3 className="font-bold text-gray-800 mb-2">カスタマイズ</h3>
                          <p className="text-gray-600 text-sm">個別の課題に対応</p>
                        </div>
                        <div className="text-center bg-white rounded-xl shadow-lg p-6">
                          <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🤝</span>
                          </div>
                          <h3 className="font-bold text-gray-800 mb-2">継続サポート</h3>
                          <p className="text-gray-600 text-sm">導入後も継続的にフォロー</p>
                        </div>
                        <div className="text-center bg-white rounded-xl shadow-lg p-6">
                          <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">📈</span>
                          </div>
                          <h3 className="font-bold text-gray-800 mb-2">透明性</h3>
                          <p className="text-gray-600 text-sm">明確な成果指標と報告</p>
                        </div>
                      </div>
                    </div>

                    {/* Pricing Section */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                      <h2 className="text-3xl font-bold text-greenspark-green mb-8 text-center">
                        料金体系
                      </h2>
                      <div className="w-16 h-px bg-greenspark-green mx-auto mb-8"></div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                          <h3 className="font-bold text-gray-800 mb-2">初回相談</h3>
                          <div className="text-2xl font-bold text-greenspark-green mb-2">無料</div>
                          <p className="text-gray-600 text-sm">お気軽にご相談ください</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                          <h3 className="font-bold text-gray-800 mb-2">基本診断</h3>
                          <div className="text-2xl font-bold text-greenspark-green mb-2">10万円〜</div>
                          <p className="text-gray-600 text-sm">現状把握と基本提案</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                          <h3 className="font-bold text-gray-800 mb-2">詳細コンサル</h3>
                          <div className="text-2xl font-bold text-greenspark-green mb-2">50万円〜</div>
                          <p className="text-gray-600 text-sm">包括的な改善提案</p>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                          <h3 className="font-bold text-gray-800 mb-2">継続サポート</h3>
                          <div className="text-2xl font-bold text-greenspark-green mb-2">月5万円〜</div>
                          <p className="text-gray-600 text-sm">効果測定と改善支援</p>
                        </div>
                      </div>
                      <p className="text-center text-gray-500 text-sm mt-6">
                        ※企業規模・プロジェクト内容により変動します
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-gray-600">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⚠️</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">問題</h3>
                      <p className="text-gray-600">
                        エネルギーコスト高騰、環境規制対応、効率性の課題
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-greenspark-green bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🔧</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">解決策</h3>
                      <p className="text-gray-600">
                        カスタマイズされた省エネソリューション、最新技術の導入
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-greenspark-yellow bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📈</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">成果</h3>
                      <p className="text-gray-600">
                        コスト削減、競争力向上、持続可能な経営の実現
                      </p>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-greenspark-green mb-6">
                    サービス内容
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-greenspark-green pl-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        現状分析・診断
                      </h3>
                      <p className="text-gray-600 mb-3">
                        工場の設備、運用状況を詳細に分析し、エネルギー効率の改善点を特定します。
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• エネルギー使用量の詳細分析</li>
                        <li>• 設備の効率性評価</li>
                        <li>• 運用プロセスの最適化提案</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-greenspark-green pl-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        改善計画策定
                      </h3>
                      <p className="text-gray-600 mb-3">
                        お客様の予算と目標に応じた最適な改善計画を策定します。
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ROI（投資対効果）の詳細計算</li>
                        <li>• 段階的な実施プラン</li>
                        <li>• 補助金申請サポート</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-greenspark-green pl-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        実施・フォローアップ
                      </h3>
                      <p className="text-gray-600 mb-3">
                        改善施策の実施から効果検証まで、継続的にサポートします。
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 導入プロジェクトの管理</li>
                        <li>• 効果測定・レポート</li>
                        <li>• 継続的な改善提案</li>
                      </ul>
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
              無料相談のお申し込み
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
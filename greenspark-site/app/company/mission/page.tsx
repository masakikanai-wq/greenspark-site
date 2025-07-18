import { getMarkdownContent } from '@/lib/markdown';

export default async function Mission() {
  const content = await getMarkdownContent('company', 'mission');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-greenspark-green via-greenspark-green to-greenspark-yellow overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {content?.title || 'ミッション'}
            </h1>
            <p className="text-sm sm:text-base mb-8 max-w-3xl mx-auto opacity-90 px-4">
              私たちのビジョンと使命
            </p>
          </div>
        </div>
      </div>

      {/* Mission Content */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {content?.content ? (
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content.content }} />
            ) : (
              <div className="space-y-12">
                {/* Mission Statement */}
                <div className="text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                    私たちのミッション
                  </h2>
                  <div className="w-16 h-px bg-greenspark-green mx-auto mb-8"></div>
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                      GreenSpark Solutionsは、<span className="text-greenspark-green font-semibold">中小製造業の皆様</span>が持続可能な経営を実現できるよう、
                      <span className="text-greenspark-green font-semibold">省エネ・環境コンサルティング</span>を通じて支援します。
                    </p>
                    <div className="flex justify-center mt-8">
                      <div className="w-12 h-12 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🎯</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vision Section */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                      ビジョン
                    </h3>
                    <div className="w-16 h-px bg-greenspark-green mx-auto mb-8"></div>
                  </div>
                  <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm max-w-4xl mx-auto">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
                      <span className="text-greenspark-green font-semibold">日本の製造業界</span>において、
                      <span className="text-greenspark-green font-semibold">環境負荷の軽減</span>と
                      <span className="text-greenspark-green font-semibold">経済的な効率性</span>を両立させ、<br className="hidden sm:block" />
                      次世代に引き継ぐことのできる<span className="text-greenspark-green font-semibold">持続可能な産業エコシステム</span>を構築します。
                    </p>
                    <div className="flex justify-center mt-6">
                      <div className="w-12 h-12 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🌟</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Values Section */}
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                    価値観
                  </h3>
                  <div className="w-16 h-px bg-greenspark-green mx-auto mb-12"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl">🌱</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4">技術革新を通じた環境保護</h4>
                      <p className="text-gray-600 leading-relaxed">
                        <span className="font-semibold text-greenspark-green">最新技術を活用</span>し、環境負荷を最小限に抑えながら生産性を向上させます。
                        AI・IoT・再生可能エネルギーなどの先端技術を駆使して、革新的なソリューションを提供します。
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl">🤝</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4">中小企業の成長支援</h4>
                      <p className="text-gray-600 leading-relaxed">
                        <span className="font-semibold text-greenspark-green">規模に関係なく</span>、すべての企業が持続可能な発展を遂げられるよう支援します。
                        地域経済の発展に貢献し、中小企業の競争力向上をサポートします。
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl">♻️</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4">持続可能な社会の実現</h4>
                      <p className="text-gray-600 leading-relaxed">
                        <span className="font-semibold text-greenspark-green">次世代のために</span>、今できることを実践し、未来への責任を果たします。
                        環境と経済の両立を追求し、持続可能な発展を目指します。
                      </p>
                    </div>
                  </div>
                </div>

                {/* Commitment Section */}
                <div className="bg-gradient-to-r from-greenspark-green to-greenspark-yellow rounded-2xl p-8 md:p-12 text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                    私たちのお約束
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <span className="text-greenspark-green text-sm font-bold">✓</span>
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-lg mb-2">実用的なソリューション</h4>
                          <p className="text-sm opacity-90 leading-relaxed">
                            理論だけでなく、実際の現場で使える実用的な解決策を提供します。
                            現場の声を大切にし、実践的なアプローチを心がけています。
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <span className="text-greenspark-green text-sm font-bold">✓</span>
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-lg mb-2">継続的なサポート</h4>
                          <p className="text-sm opacity-90 leading-relaxed">
                            一時的な改善ではなく、持続的な成長をサポートします。
                            長期的なパートナーシップを築き、継続的な価値を提供します。
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <span className="text-greenspark-green text-sm font-bold">✓</span>
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-lg mb-2">透明性の確保</h4>
                          <p className="text-sm opacity-90 leading-relaxed">
                            すべてのプロセスを透明化し、お客様との信頼関係を築きます。
                            進捗状況や成果を定期的に報告し、共に成長していきます。
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <span className="text-greenspark-green text-sm font-bold">✓</span>
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-lg mb-2">成果の保証</h4>
                          <p className="text-sm opacity-90 leading-relaxed">
                            明確な成果指標を設定し、確実な効果を実現します。
                            数値に基づく検証可能な結果をお約束いたします。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Impact Section */}
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                      社会への貢献
                    </h3>
                    <div className="w-16 h-px bg-greenspark-green mx-auto mb-6"></div>
                  </div>
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-greenspark-green to-greenspark-yellow bg-opacity-10 rounded-xl p-6 md:p-8 mb-8">
                      <p className="text-lg text-gray-700 leading-relaxed text-center">
                        私たちは<span className="font-semibold text-greenspark-green">製造業の省エネ化</span>を通じて、
                        <span className="font-semibold text-greenspark-green">日本の産業競争力向上</span>と
                        <span className="font-semibold text-greenspark-green">環境保護</span>の両立を目指します。
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-base text-gray-600 leading-relaxed">
                        小さな一歩から始まる大きな変化を信じ、お客様とともに持続可能な未来を創造していきます。
                        一社一社の取り組みが、日本全体の環境改善と経済発展につながることを確信しています。
                      </p>
                      <div className="flex justify-center mt-8">
                        <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center">
                          <span className="text-3xl">🌍</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
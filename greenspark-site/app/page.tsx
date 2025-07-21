'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    '/images/hero/factory-1.jpg',
    '/images/hero/factory-2.jpg', 
    '/images/hero/factory-3.jpg',
    '/images/hero/factory-4.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[6000ms] ease-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-relaxed">
              製造業の未来を<br />
              <span className="text-greenspark-green">グリーン</span>に変える
            </h1>
            <p className="text-sm sm:text-base mb-8 max-w-3xl mx-auto opacity-90 px-4">
              最新の省エネ技術とAI分析で、
              エネルギーコストを大幅削減し、持続可能な経営を実現します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
              <Link
                href="/contact"
                className="bg-greenspark-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                無料相談のお申し込み
              </Link>
              <Link
                href="/cases"
                className="bg-white text-greenspark-green px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                導入事例を見る
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                20年の実績と最新技術で<br />
                製造業の省エネ化を支援
              </h2>
              <div className="w-16 h-px bg-greenspark-green mb-6"></div>
              <p className="text-base text-gray-600 mb-6">
                私たちは2003年の設立以来、中小製造業の省エネ・環境対策を専門に支援してきました。
                豊富な経験と最新のAI技術を組み合わせ、お客様の課題に最適なソリューションを提供します。
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-greenspark-green rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">豊富な実績</h3>
                    <p className="text-gray-600">150社以上の導入実績、総削減コスト10億円以上</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-greenspark-green rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">最新技術</h3>
                    <p className="text-gray-600">AI分析とIoTセンサーによる精密な診断</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-greenspark-green rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">包括サポート</h3>
                    <p className="text-gray-600">診断から実施、効果測定まで一貫したサポート</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-sm">写真を追加予定</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              包括的な省エネソリューション
            </h2>
            <div className="w-16 h-px bg-greenspark-green mx-auto mb-6"></div>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              診断から実施、効果測定まで、一貫したサポートで確実な成果を実現します
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-6">
                <div className="text-gray-500 text-center">
                  <div className="text-2xl mb-1">📷</div>
                  <p className="text-xs">写真を追加予定</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">省エネ診断</h3>
              <p className="text-gray-600 mb-6">
                AIとIoTを活用した精密な診断で、隠れた省エネポイントを発見。
                現状分析から改善提案まで、包括的な診断サービスを提供します。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-greenspark-green text-white rounded-full text-sm">ESCO診断</span>
                <span className="px-3 py-1 bg-greenspark-green text-white rounded-full text-sm">AI分析</span>
                <span className="px-3 py-1 bg-greenspark-green text-white rounded-full text-sm">IoT監視</span>
              </div>
              <Link href="/service/audit" className="text-greenspark-green font-semibold hover:underline">
                詳しく見る →
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-6">
                <div className="text-gray-500 text-center">
                  <div className="text-2xl mb-1">📷</div>
                  <p className="text-xs">写真を追加予定</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">コンサルティング</h3>
              <p className="text-gray-600 mb-6">
                20年の実績を活かした戦略的なコンサルティング。
                ROIを重視した実践的な改善プランをご提案します。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-greenspark-green text-white rounded-full text-sm">戦略策定</span>
                <span className="px-3 py-1 bg-greenspark-green text-white rounded-full text-sm">ROI分析</span>
                <span className="px-3 py-1 bg-greenspark-green text-white rounded-full text-sm">実行支援</span>
              </div>
              <Link href="/service/consulting" className="text-greenspark-green font-semibold hover:underline">
                詳しく見る →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Statistics */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              数字で見る成果
            </h2>
            <div className="w-16 h-px bg-greenspark-green mx-auto mb-6"></div>
            <p className="text-base text-gray-600">
              多くの企業様に選ばれ、確実な成果を実現しています
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-greenspark-green to-greenspark-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">150+</span>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">導入企業数</div>
              <div className="text-gray-600">中小製造業を中心に</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-greenspark-green to-greenspark-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">32%</span>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">平均削減率</div>
              <div className="text-gray-600">月間エネルギーコスト</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-greenspark-green to-greenspark-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">98%</span>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">顧客満足度</div>
              <div className="text-gray-600">継続利用率</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-greenspark-green to-greenspark-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">10億+</span>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">総削減コスト</div>
              <div className="text-gray-600">累計削減効果</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              選ばれる理由
            </h2>
            <div className="w-16 h-px bg-greenspark-green mx-auto mb-6"></div>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              GreenSpark Solutionsが多くの企業様に選ばれる理由をご紹介します
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">専門性</h3>
              <p className="text-gray-600">
                エネルギー管理士、環境計量士などの有資格者が在籍。
                20年の実績に基づく確かな技術力で課題を解決します。
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">迅速性</h3>
              <p className="text-gray-600">
                スピーディーな診断と提案で、早期の効果実現を支援。
                平均1.5年で投資回収を実現しています。
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-greenspark-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">継続性</h3>
              <p className="text-gray-600">
                一時的な改善ではなく、持続的な効果を実現。
                継続的なモニタリングとサポートで長期的な成果を保証。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              お客様の声
            </h2>
            <div className="w-16 h-px bg-greenspark-green mx-auto mb-6"></div>
            <p className="text-base text-gray-600">
              実際にご利用いただいたお客様からの評価をご紹介します
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-greenspark-green rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">G</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">GreenFactory株式会社</h4>
                  <p className="text-gray-600">代表取締役 緑川様</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                「月間電力コストが32%削減できただけでなく、設備の安定稼働も実現できました。
                投資回収期間も1.5年と短く、大変満足しています。」
              </p>
              <div className="flex items-center">
                <div className="flex text-greenspark-yellow">
                  {'★'.repeat(5)}
                </div>
                <span className="ml-2 text-gray-600">削減効果: 32%</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-greenspark-green rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">SmartParts工業</h4>
                  <p className="text-gray-600">代表取締役 智田様</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                「段階的な実施計画により、資金負担を分散できました。
                生産性向上と品質改善も同時に実現でき、総合的に大きな効果を得られました。」
              </p>
              <div className="flex items-center">
                <div className="flex text-greenspark-yellow">
                  {'★'.repeat(5)}
                </div>
                <span className="ml-2 text-gray-600">削減効果: 28%</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-greenspark-green rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">E</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">EcoTech製作所</h4>
                  <p className="text-gray-600">代表取締役 環境様</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                「再生可能エネルギーの導入により、環境負荷を50%削減できました。
                災害時の事業継続性も確保でき、大きな安心材料になっています。」
              </p>
              <div className="flex items-center">
                <div className="flex text-greenspark-yellow">
                  {'★'.repeat(5)}
                </div>
                <span className="ml-2 text-gray-600">削減効果: 50%</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-greenspark-green rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">T</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">TechManu株式会社</h4>
                  <p className="text-gray-600">工場長 技術様</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                「IoT監視システムの導入により、設備の効率化と予防保全を実現。
                年間メンテナンス費用も30%削減できました。」
              </p>
              <div className="flex items-center">
                <div className="flex text-greenspark-yellow">
                  {'★'.repeat(5)}
                </div>
                <span className="ml-2 text-gray-600">削減効果: 25%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-greenspark-green to-greenspark-yellow py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              今すぐ省エネ効果を実感してください
            </h2>
            <p className="text-base text-white opacity-90 mb-8">
              無料診断で、あなたの工場の省エネポテンシャルを発見しませんか？<br />
              専門スタッフが丁寧にご対応いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-greenspark-green px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                無料診断のお申し込み
              </Link>
              <Link
                href="/cases"
                className="bg-white text-greenspark-green px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                導入事例集をダウンロード
              </Link>
            </div>
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
                  <li><Link href="/company/mission" className="hover:text-greenspark-green">ミッション</Link></li>
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

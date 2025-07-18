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
                <div dangerouslySetInnerHTML={{ __html: content.content }} />
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
    </div>
  );
}
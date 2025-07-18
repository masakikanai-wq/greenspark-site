import { getJsonContent } from '@/lib/markdown';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image?: string;
}

export default async function Team() {
  const teamData = getJsonContent('company/team.json') as TeamMember[] | null;

  const defaultTeam: TeamMember[] = [
    {
      name: "田中 太郎",
      position: "代表取締役 CEO",
      bio: "製造業界で20年以上の経験を持つ省エネエキスパート。工学博士。",
      image: "/team/tanaka.jpg"
    },
    {
      name: "佐藤 花子",
      position: "CTO",
      bio: "環境工学のスペシャリスト。AIを活用した省エネソリューションの開発をリード。",
      image: "/team/sato.jpg"
    },
    {
      name: "山田 次郎",
      position: "コンサルタント",
      bio: "中小製造業に特化したコンサルティング実績200社以上。",
      image: "/team/yamada.jpg"
    }
  ];

  const team = teamData || defaultTeam;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              チーム
            </h1>
            <p className="text-xl text-gray-600">
              経験豊富な専門家がお客様をサポートします
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member: TeamMember, index: number) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-greenspark-green to-greenspark-yellow flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-greenspark-green">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-greenspark-green font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
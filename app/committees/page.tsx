import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/icon-mapper"
import Image from "next/image"
import { getCommitteesData } from "@/lib/data"

export default async function CommitteesPage() {
  const data = await getCommitteesData()

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="border-slate-700 text-slate-400 bg-slate-900/50 px-6 py-2 mb-8 font-medium backdrop-blur-sm"
          >
            Conference Committees
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">{data.title}</h1>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto font-medium">{data.description}</p>
        </div>

        {/* Organizing Committee */}
        <div className="mb-20">
          <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm mb-12">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3 text-3xl">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Icon name="Users" className="w-6 h-6 text-slate-300" />
                </div>
                Organizing Committee
              </CardTitle>
            </CardHeader>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.organizingCommittee.map((member: any, index: number) => (
              <Card
                key={index}
                className="bg-slate-900/30 border-slate-800 hover:border-slate-700 transition-all duration-300 backdrop-blur-sm text-center group"
              >
                <CardContent className="p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{member.name}</h3>
                  <p className="text-slate-300 font-medium mb-2">{member.role}</p>
                  <p className="text-slate-400 text-sm">{member.affiliation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Steering Committee */}
        <div className="mb-20">
          <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm mb-12">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3 text-3xl">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Icon name="Award" className="w-6 h-6 text-slate-300" />
                </div>
                Steering Committee
              </CardTitle>
            </CardHeader>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.steeringCommittee.map((member: any, index: number) => (
              <Card
                key={index}
                className="bg-slate-900/30 border-slate-800 hover:border-slate-700 transition-all duration-300 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <h3 className="text-white font-semibold text-lg mb-2">{member.name}</h3>
                  <p className="text-slate-300 font-medium mb-2">{member.role}</p>
                  <p className="text-slate-400">{member.affiliation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Program Committee */}
        <div className="mb-20">
          <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm mb-12">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3 text-3xl">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Icon name="Users" className="w-6 h-6 text-slate-300" />
                </div>
                Program Committee
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                Our international program committee consists of leading experts from around the world who ensure the
                highest quality of research presentations.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.programCommittee.map((member: any, index: number) => (
                  <div
                    key={index}
                    className="bg-slate-800/30 p-6 rounded-2xl hover:bg-slate-800/50 transition-colors duration-300 border border-slate-800"
                  >
                    <h4 className="text-white font-semibold mb-2">{member.name}</h4>
                    <p className="text-slate-400">{member.affiliation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call for Volunteers */}
        <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Join Our Team</h2>
            <p className="text-slate-400 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              We're always looking for dedicated volunteers to help make WITS 2026 a memorable experience. Join our
              community of researchers and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Badge
                variant="outline"
                className="border-slate-700 text-slate-300 bg-slate-800/50 px-6 py-3 text-base font-medium"
              >
                Student Volunteers Welcome
              </Badge>
              <Badge
                variant="outline"
                className="border-slate-700 text-slate-300 bg-slate-800/50 px-6 py-3 text-base font-medium"
              >
                Professional Development Opportunities
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

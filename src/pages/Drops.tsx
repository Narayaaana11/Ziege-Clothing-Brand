import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Zap, ArrowRight } from "lucide-react";

const DropsPage = () => {
  const upcomingDrops = [
    {
      id: 1,
      name: "Void Walker Collection",
      description: "Step into the darkness with our most ambitious AI-generated collection yet",
      date: "2024-03-15",
      time: "12:00 PM EST",
      image: "/api/placeholder/600/400",
      price: "Starting at $85",
      pieces: 25,
      isLimited: true,
      preorderAvailable: true,
    },
    {
      id: 2,
      name: "Neon Genesis Drop",
      description: "Cyberpunk meets streetwear in this explosive limited release",
      date: "2024-03-22",
      time: "3:00 PM EST",
      image: "/api/placeholder/600/400",
      price: "Starting at $65",
      pieces: 50,
      isLimited: true,
      preorderAvailable: false,
    },
    {
      id: 3,
      name: "Shadow Realm Capsule",
      description: "Dark aesthetic meets premium quality in this exclusive drop",
      date: "2024-03-29",
      time: "6:00 PM EST",
      image: "/api/placeholder/600/400",
      price: "Starting at $95",
      pieces: 15,
      isLimited: true,
      preorderAvailable: true,
    },
  ];

  const pastDrops = [
    {
      id: 4,
      name: "Digital Demons",
      description: "Our sold-out collaboration with top AI artists",
      date: "2024-02-28",
      status: "SOLD OUT",
      pieces: 100,
    },
    {
      id: 5,
      name: "Glitch Monsters",
      description: "Limited edition glitch-inspired streetwear",
      date: "2024-02-15",
      status: "SOLD OUT", 
      pieces: 75,
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTimeUntilDrop = (dateString: string, timeString: string) => {
    const dropDate = new Date(`${dateString} ${timeString}`);
    const now = new Date();
    const diff = dropDate.getTime() - now.getTime();
    
    if (diff <= 0) return "Live Now!";
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days} days, ${hours}h`;
    return `${hours}h`;
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-primary/20 text-primary border-primary/30 neon-glow">
            <Zap className="h-3 w-3 mr-2" />
            Limited Drops
          </Badge>
          <h1 className="text-4xl md:text-6xl font-orbitron font-black">
            <span className="gradient-text">MONSTER</span><br />
            <span className="glitch gradient-text" data-text="DROPS">DROPS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-rajdhani">
            Exclusive releases that disappear as fast as they appear. Join the hunt or miss out forever.
          </p>
        </div>

        {/* Upcoming Drops */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-orbitron font-bold gradient-text">Upcoming Drops</h2>
            <Badge variant="outline" className="border-secondary text-secondary">
              {upcomingDrops.length} Drops Scheduled
            </Badge>
          </div>

          <div className="grid gap-8">
            {upcomingDrops.map((drop, index) => (
              <Card key={drop.id} className={`bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 overflow-hidden ${index === 0 ? 'shadow-neon' : ''}`}>
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Drop Image */}
                  <div className="lg:col-span-1">
                    <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/20 via-background to-secondary/20 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl font-orbitron font-black text-muted-foreground/20">
                          {drop.name.split(' ')[0].toUpperCase()}
                        </div>
                      </div>
                      {drop.isLimited && (
                        <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground animate-pulse">
                          LIMITED
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Drop Info */}
                  <div className="lg:col-span-2 p-6 space-y-6">
                    <div>
                      <h3 className="text-2xl font-orbitron font-bold mb-2">{drop.name}</h3>
                      <p className="text-muted-foreground font-rajdhani text-lg leading-relaxed">
                        {drop.description}
                      </p>
                    </div>

                    {/* Drop Details */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-rajdhani">{formatDate(drop.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-secondary" />
                        <span className="font-rajdhani">{drop.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-accent" />
                        <span className="font-rajdhani">{drop.pieces} pieces</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="font-rajdhani font-bold">{drop.price}</span>
                      </div>
                    </div>

                    {/* Countdown & Actions */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground font-rajdhani">Drops in:</p>
                        <p className="text-2xl font-orbitron font-bold text-primary">
                          {getTimeUntilDrop(drop.date, drop.time)}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        {drop.preorderAvailable && (
                          <Button variant="hero" className="group">
                            Pre-order Now
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        )}
                        <Button variant="outline">
                          Set Reminder
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Drops */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-orbitron font-bold gradient-text">Past Drops</h2>
            <Badge variant="outline" className="border-destructive text-destructive">
              Archive
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastDrops.map((drop) => (
              <Card key={drop.id} className="bg-card/50 backdrop-blur-sm border-border opacity-75 hover:opacity-90 transition-opacity">
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-muted/20 to-muted/10 rounded-lg flex items-center justify-center">
                    <div className="text-2xl font-orbitron font-black text-muted-foreground/30">
                      {drop.name.split(' ')[0].toUpperCase()}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-orbitron font-bold">{drop.name}</h3>
                      <Badge variant="destructive" className="text-xs">
                        {drop.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-rajdhani mb-3">
                      {drop.description}
                    </p>
                    
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span className="font-rajdhani">{formatDate(drop.date)}</span>
                      <span className="font-rajdhani">{drop.pieces} pieces</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-16 text-center">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-neon max-w-2xl mx-auto">
            <CardContent className="p-8 space-y-4">
              <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                <Zap className="h-3 w-3 mr-2" />
                Never Miss a Drop
              </Badge>
              <h3 className="text-2xl font-orbitron font-bold gradient-text">
                Join the Hunt
              </h3>
              <p className="text-muted-foreground font-rajdhani">
                Get instant notifications for new drops, exclusive pre-orders, and limited releases.
              </p>
              <Button variant="cyber" size="lg" className="group">
                <Zap className="h-5 w-5 mr-2" />
                Get Drop Alerts
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default DropsPage;
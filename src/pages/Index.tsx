import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [promoCode, setPromoCode] = useState('');
  const { toast } = useToast();

  const privileges = [
    {
      id: 1,
      name: 'VIP',
      price: 199,
      color: 'bg-green-500',
      features: ['Префикс [VIP]', 'Цветной ник', '3 дома', 'Кит /kit vip', 'Полёт 1 час/день'],
      icon: 'Gem'
    },
    {
      id: 2,
      name: 'PREMIUM',
      price: 399,
      color: 'bg-blue-500',
      features: ['Префикс [PREMIUM]', 'Цветной ник + радужный', '5 домов', 'Кит /kit premium', 'Полёт 3 часа/день', 'Keep Inventory'],
      icon: 'Crown'
    },
    {
      id: 3,
      name: 'ULTRA',
      price: 699,
      color: 'bg-purple-500',
      features: ['Префикс [ULTRA]', 'Анимированный ник', '10 домов', 'Кит /kit ultra', 'Безлимитный полёт', 'Keep Inventory', 'WorldEdit', 'Вход на заполненный сервер'],
      icon: 'Sparkles'
    },
    {
      id: 4,
      name: 'LEGEND',
      price: 1299,
      color: 'bg-amber-500',
      features: ['Префикс [LEGEND]', 'Уникальный анимированный ник', 'Безлимит домов', 'Кит /kit legend', 'Все возможности ULTRA', 'Собственный NPC', 'Изменение погоды', 'Доступ к бета-версиям'],
      icon: 'Zap'
    }
  ];

  const rules = [
    { id: 1, title: 'Читы и моды', text: 'Запрещены любые читы, X-Ray, Fly и подобные модификации. Разрешены Optifine, Minimap.' },
    { id: 2, title: 'Гриферство', text: 'Разрушение чужих построек строго запрещено. За гриферство - перманентный бан.' },
    { id: 3, title: 'Общение', text: 'Будьте вежливы. Запрещены оскорбления, мат, спам, реклама других серверов.' },
    { id: 4, title: 'Баги', text: 'Эксплуатация багов запрещена. Сообщите администрации о найденном баге.' },
    { id: 5, title: 'Торговля', text: 'Обман при торговле запрещён. Все сделки на ваш страх и риск.' },
  ];

  const handlePromoCode = () => {
    const validCodes: { [key: string]: number } = {
      'START2024': 10,
      'NEWBIE': 15,
      'MINECRAFT': 20,
      'LEGEND50': 50
    };

    const discount = validCodes[promoCode.toUpperCase()];
    
    if (discount) {
      toast({
        title: '🎉 Промокод активирован!',
        description: `Вы получили скидку ${discount}% на все донаты!`,
      });
    } else {
      toast({
        title: '❌ Неверный промокод',
        description: 'Проверьте правильность ввода промокода.',
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-emerald-50 to-lime-50">
      <header className="bg-green-600 text-white py-4 shadow-lg border-b-4 border-green-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-500 pixel-corners flex items-center justify-center text-2xl">
                🧱
              </div>
              <h1 className="text-3xl font-bold text-shadow-pixel">MINE CRAFT SERVER</h1>
            </div>
            <div className="flex gap-4">
              <Badge variant="secondary" className="bg-amber-400 text-amber-900 hover:bg-amber-500 px-4 py-2 text-base">
                <Icon name="Users" size={16} className="mr-1" />
                <span className="font-semibold">234 онлайн</span>
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-extrabold mb-6 text-green-800 text-shadow-pixel animate-fade-in">
            🎮 Добро пожаловать на сервер!
          </h2>
          <p className="text-2xl text-green-700 mb-8 font-medium">
            Выживание, мини-игры, приключения и дружелюбное сообщество
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-6 pixel-corners shadow-lg hover-scale">
              <Icon name="Download" size={20} className="mr-2" />
              IP: play.server.com
            </Button>
            <Button size="lg" variant="secondary" className="bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold text-lg px-8 py-6 pixel-corners shadow-lg hover-scale">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Discord
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <Tabs defaultValue="privileges" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-14">
              <TabsTrigger value="privileges" className="text-base font-semibold">
                <Icon name="Gem" size={18} className="mr-2" />
                Привилегии
              </TabsTrigger>
              <TabsTrigger value="rules" className="text-base font-semibold">
                <Icon name="BookOpen" size={18} className="mr-2" />
                Правила
              </TabsTrigger>
              <TabsTrigger value="donate" className="text-base font-semibold">
                <Icon name="CreditCard" size={18} className="mr-2" />
                Donate
              </TabsTrigger>
            </TabsList>

            <TabsContent value="privileges" className="animate-fade-in">
              <h2 className="text-4xl font-bold text-center mb-12 text-green-800">💎 Привилегии сервера</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {privileges.map((priv) => (
                  <Card key={priv.id} className="pixel-corners overflow-hidden hover-scale transition-all border-4 border-green-200 hover:border-green-400 bg-white">
                    <div className={`h-3 ${priv.color}`}></div>
                    <CardHeader className="text-center pb-4">
                      <div className="flex justify-center mb-3">
                        <div className={`w-16 h-16 ${priv.color} pixel-corners flex items-center justify-center`}>
                          <Icon name={priv.icon as any} size={32} className="text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-extrabold text-green-800">{priv.name}</CardTitle>
                      <CardDescription className="text-2xl font-bold text-green-600 mt-2">
                        {priv.price} ₽
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {priv.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Icon name="Check" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-green-800 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 font-bold pixel-corners">
                        Купить
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rules" className="animate-fade-in">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-green-800">📜 Правила сервера</h2>
                <div className="space-y-4">
                  {rules.map((rule) => (
                    <Card key={rule.id} className="pixel-corners border-4 border-green-200 hover:border-green-400 transition-colors bg-white">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-xl text-green-800">
                          <span className="bg-green-600 text-white w-8 h-8 flex items-center justify-center pixel-corners font-bold">
                            {rule.id}
                          </span>
                          {rule.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-green-700 font-medium">{rule.text}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="donate" className="animate-fade-in">
              <div className="max-w-2xl mx-auto">
                <Card className="pixel-corners border-4 border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-50">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 bg-amber-400 pixel-corners flex items-center justify-center text-4xl">
                        🎁
                      </div>
                    </div>
                    <CardTitle className="text-3xl font-bold text-amber-900">Промокоды и бонусы</CardTitle>
                    <CardDescription className="text-base text-amber-700 mt-2">
                      Используйте промокоды для получения скидок на донат!
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Введите промокод..."
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="border-2 border-amber-300 focus:border-amber-500 h-12 text-base font-medium"
                      />
                      <Button 
                        onClick={handlePromoCode}
                        className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 pixel-corners"
                      >
                        Применить
                      </Button>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border-2 border-amber-200">
                      <h3 className="font-bold text-lg mb-4 text-amber-900 flex items-center gap-2">
                        <Icon name="Gift" size={20} />
                        Доступные промокоды:
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-amber-50 rounded pixel-corners">
                          <code className="font-mono font-bold text-amber-900">START2024</code>
                          <Badge className="bg-green-500 text-white">-10%</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-amber-50 rounded pixel-corners">
                          <code className="font-mono font-bold text-amber-900">NEWBIE</code>
                          <Badge className="bg-green-500 text-white">-15%</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-amber-50 rounded pixel-corners">
                          <code className="font-mono font-bold text-amber-900">MINECRAFT</code>
                          <Badge className="bg-blue-500 text-white">-20%</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-amber-50 rounded pixel-corners">
                          <code className="font-mono font-bold text-amber-900">LEGEND50</code>
                          <Badge className="bg-purple-500 text-white">-50%</Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-amber-700 text-center font-medium">
                      💡 Промокоды можно получить в нашем Discord сервере и на конкурсах!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="bg-green-800 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-amber-500 pixel-corners flex items-center justify-center">
              🧱
            </div>
            <p className="text-xl font-bold">MINE CRAFT SERVER © 2024</p>
          </div>
          <p className="text-green-200 font-medium">Лучший Minecraft сервер с честной администрацией</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mountain, Leaf, Shield, ShoppingCart, Menu, X, Instagram, Facebook, Twitter, ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Logo } from "@/components/logo"

export default function XundwaLanding() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg shadow-sm border-b border-border' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center gap-1">
              <Logo className={`h-12 w-12 transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-background'}`} />
              <span className={`text-2xl font-black tracking-tight transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-background'} font-[family-name:var(--font-display)]`}>
                Xundwa
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-12">
              <a href="#products" className={`text-sm font-semibold uppercase tracking-widest hover:text-accent transition-all duration-300 ${isScrolled ? 'text-foreground' : 'text-background'}`}>
                Productos
              </a>
              <a href="#about" className={`text-sm font-semibold uppercase tracking-widest hover:text-accent transition-all duration-300 ${isScrolled ? 'text-foreground' : 'text-background'}`}>
                Nosotros
              </a>
              <a href="#collections" className={`text-sm font-semibold uppercase tracking-widest hover:text-accent transition-all duration-300 ${isScrolled ? 'text-foreground' : 'text-background'}`}>
                Colecciones
              </a>
              <Button 
                variant={isScrolled ? "default" : "secondary"} 
                size="lg" 
                className="gap-2 relative group hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="font-semibold">Carrito</span>
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground animate-pulse">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={`h-7 w-7 ${isScrolled ? 'text-foreground' : 'text-background'}`} />
              ) : (
                <Menu className={`h-7 w-7 ${isScrolled ? 'text-foreground' : 'text-background'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
            <div className="px-8 py-8 space-y-6">
              <a href="#products" className="block text-sm font-semibold uppercase tracking-widest text-foreground hover:text-accent transition-colors">
                Productos
              </a>
              <a href="#about" className="block text-sm font-semibold uppercase tracking-widest text-foreground hover:text-accent transition-colors">
                Nosotros
              </a>
              <a href="#collections" className="block text-sm font-semibold uppercase tracking-widest text-foreground hover:text-accent transition-colors">
                Colecciones
              </a>
              <Button variant="default" size="lg" className="w-full gap-2">
                <ShoppingCart className="h-5 w-5" />
                <span className="font-semibold">Carrito ({cartCount})</span>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px) scale(1.1)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <Image
            src="/hero-mountain.jpg"
            alt="Mountain landscape"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
        <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-background/80 mb-8 font-semibold">
            Equipamiento Premium Outdoor
          </p>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-background mb-8 tracking-tighter text-balance leading-[0.9] font-[family-name:var(--font-display)]">
            Conquista tu aventura.
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            Diseñado para lo extremo. Sostenible. Duradero. Innovador.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-10 py-4 h-auto font-bold hover:scale-105 active:scale-95 transition-all duration-300 gap-2 group"
            >
              Explorar colección
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-foreground text-base px-10 py-4 h-auto font-bold hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Ver lookbook
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-40 px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-semibold">
            Lo mejor de la temporada
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight text-balance font-[family-name:var(--font-display)]">
            Equipamiento destacado
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Selección premium para tu próxima expedición
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            {
              image: '/product-jacket.jpg',
              name: 'Chaqueta Summit Pro',
              category: 'Abrigos',
              price: '$349',
              description: 'Carcasa impermeable de 3 capas con membrana transpirable',
              badge: 'NUEVO'
            },
            {
              image: '/product-backpack.jpg',
              name: 'Mochila Alpine 40L',
              category: 'Mochilas',
              price: '$229',
              description: 'Mochila técnica para aventuras de varios días',
              badge: 'BESTSELLER'
            },
            {
              image: '/product-pants.jpg',
              name: 'Pantalón Trail Flex',
              category: 'Pantalones',
              price: '$159',
              description: 'Pantalones elásticos y duraderos con rodillas reforzadas',
              badge: null
            },
            {
              image: '/product-boots.jpg',
              name: 'Botas Peak Trekker',
              category: 'Calzado',
              price: '$279',
              description: 'Botas todo terreno con soporte superior de tobillo',
              badge: 'NUEVO'
            }
          ].map((product, index) => (
            <Card key={index} className="group overflow-hidden border-2 border-transparent hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                {product.badge && (
                  <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground font-bold uppercase tracking-wider text-xs px-3 py-1">
                    {product.badge}
                  </Badge>
                )}
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-3">
                  {product.category}
                </p>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 font-[family-name:var(--font-display)]">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl lg:text-3xl font-black text-foreground font-[family-name:var(--font-display)]">{product.price}</span>
                  <Button 
                    size="sm" 
                    className="gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-105 active:scale-95"
                  >
                    Ver Detalles
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section id="about" className="relative py-40 px-8 lg:px-12 overflow-hidden">
        <Image
          src="/nature-background.jpg"
          alt="Nature background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-background/70 mb-4 font-semibold">
              Nuestros Valores
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-background mb-6 tracking-tight text-balance font-[family-name:var(--font-display)]">
              Tres pilares fundamentales
            </h2>
            <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto leading-relaxed">
              Compromiso con la excelencia, sostenibilidad e innovación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                icon: <Leaf className="h-16 w-16 text-accent" />,
                title: 'Sostenibilidad',
                description: 'Materiales reciclados y procesos de fabricación éticos que minimizan nuestro impacto ambiental.'
              },
              {
                icon: <Shield className="h-16 w-16 text-accent" />,
                title: 'Durabilidad',
                description: 'Pruebas rigurosas en condiciones extremas garantizan años de aventuras sin compromisos.'
              },
              {
                icon: <Logo className="h-16 w-16 text-accent" />,
                title: 'Innovación',
                description: 'Tecnologías de vanguardia para maximizar tu rendimiento y comodidad outdoor.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="text-3xl font-black text-background mb-6 font-[family-name:var(--font-display)]">
                  {value.title}
                </h3>
                <p className="text-background/80 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Showcase */}
      <section id="collections" className="py-40 px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-semibold">
            Descubre Nuestras Líneas
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight text-balance font-[family-name:var(--font-display)]">
            Colecciones
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Equipamiento para cada aventura, desde cumbres alpinas hasta senderos forestales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {[
            {
              image: '/product-jacket.jpg',
              title: 'Chaquetas de Montaña',
              subtitle: 'Impermeables y Transpirables',
              items: 12,
              featured: true
            },
            {
              image: '/product-backpack.jpg',
              title: 'Mochilas Técnicas',
              subtitle: 'Desde Caminatas hasta Expediciones',
              items: 8,
              featured: false
            },
            {
              image: '/product-boots.jpg',
              title: 'Calzado',
              subtitle: 'Rendimiento Todo Terreno',
              items: 15,
              featured: false
            },
            {
              image: '/product-pants.jpg',
              title: 'Ropa de Trekking',
              subtitle: 'Comodidad y Durabilidad',
              items: 18,
              featured: false
            }
          ].map((collection, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                collection.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${collection.featured ? 'aspect-[21/9]' : 'aspect-[16/10]'}`}>
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/80 group-hover:via-black/40 transition-all duration-500" />
                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end text-background">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-accent text-accent-foreground font-bold uppercase tracking-wider text-xs px-3 py-1">
                      {collection.items} Productos
                    </Badge>
                  </div>
                  <h3 className={`font-black mb-3 font-[family-name:var(--font-display)] ${
                    collection.featured ? 'text-5xl lg:text-6xl' : 'text-3xl lg:text-4xl'
                  }`}>
                    {collection.title}
                  </h3>
                  <p className={`text-background/90 mb-4 ${
                    collection.featured ? 'text-xl lg:text-2xl' : 'text-lg'
                  }`}>
                    {collection.subtitle}
                  </p>
                  <Button 
                    variant="outline" 
                    className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-foreground w-fit gap-2 group/btn opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:scale-105 active:scale-95"
                  >
                    Explorar Colección
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 px-8 lg:px-12 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-semibold">
              Lo que dicen nuestros clientes
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight text-balance font-[family-name:var(--font-display)]">
              Confiado por aventureros
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Historias de quienes desafían sus límites con Xundwa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                quote: "La Chaqueta Summit Pro me salvó durante una tormenta inesperada en el K2. Absolutamente indestructible.",
                author: "Sarah Chen",
                title: "Escaladora Alpina"
              },
              {
                quote: "He puesto este equipo a prueba extrema. Tres años después, sigue funcionando como nuevo.",
                author: "Marcus Rodriguez",
                title: "Guía de Expediciones"
              },
              {
                quote: "Finalmente, equipo outdoor que no compromete la sostenibilidad. Xundwa lo hace bien.",
                author: "Emma Larsson",
                title: "Científica Ambiental"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 lg:p-10 border-border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <div className="mb-8">
                  <div className="text-6xl text-accent mb-6 leading-none">"</div>
                  <p className="text-foreground leading-relaxed text-lg font-light italic">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-black text-xl font-[family-name:var(--font-display)]">
                      {testimonial.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-40 px-8 lg:px-12 overflow-hidden">
        <Image
          src="/mountain-vista.jpg"
          alt="Mountain vista"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-background/70 mb-6 font-semibold">
            Únete a la Comunidad
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-background mb-8 tracking-tight text-balance font-[family-name:var(--font-display)]">
            Tu Próxima Aventura Comienza Aquí
          </h2>
          <p className="text-xl md:text-2xl text-background/90 mb-12 leading-relaxed font-light">
            Ofertas exclusivas, nuevos lanzamientos e inspiración aventurera.<br />
            <span className="font-bold text-accent">10% de descuento</span> en tu primera compra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input 
              type="email" 
              placeholder="tu@email.com" 
              className="bg-background/95 border-2 border-background text-foreground placeholder:text-muted-foreground h-14 text-lg px-6"
            />
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap px-10 h-14 text-base font-bold hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Suscribirme
            </Button>
          </div>
          <p className="text-sm text-background/60 mt-6 tracking-wide">
            Sin spam. Cancela cuando quieras. Respetamos tu privacidad.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-20 px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Logo className="h-10 w-10" />
                <span className="text-3xl font-black font-[family-name:var(--font-display)]">Xundwa</span>
              </div>
              <p className="text-background/80 leading-relaxed mb-8 text-lg">
                Equipamiento premium outdoor para quienes se atreven a explorar lo imposible.
              </p>
              <div className="flex gap-5">
                <a href="#" className="hover:text-accent transition-colors hover:scale-110 active:scale-95 duration-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-accent transition-colors hover:scale-110 active:scale-95 duration-300">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-accent transition-colors hover:scale-110 active:scale-95 duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-black text-xl mb-6 uppercase tracking-wider font-[family-name:var(--font-display)]">Tienda</h3>
              <ul className="space-y-3 text-background/80">
                <li><a href="#" className="hover:text-background hover:translate-x-1 inline-block transition-all duration-300">Chaquetas</a></li>
                <li><a href="#" className="hover:text-background hover:translate-x-1 inline-block transition-all duration-300">Mochilas</a></li>
                <li><a href="#" className="hover:text-background hover:translate-x-1 inline-block transition-all duration-300">Calzado</a></li>
                <li><a href="#" className="hover:text-background hover:translate-x-1 inline-block transition-all duration-300">Accesorios</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-xl mb-6 uppercase tracking-wider font-[family-name:var(--font-display)]">Compañía</h3>
              <ul className="space-y-3 text-background/80">
                <li><a href="#" className="hover:text-background hover:translate-x-1 inline-block transition-all duration-300">Nosotros</a></li>
                <li><a href="#" className="hover:text-background hover:translate-x-1 inline-block transition-all duration-300">Sostenibilidad</a></li>
                <li><a href="#" className="hover:text-background hover:translate-x-1 inline-block transition-all duration-300">Garantía</a></li>
                <li><a href="#" className="hover:text-background hover:translate-x-1 inline-block transition-all duration-300">Carreras</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-xl mb-6 uppercase tracking-wider font-[family-name:var(--font-display)]">Soporte</h3>
              <ul className="space-y-3 text-background/80">
                <li><a href="#" className="hover:text-background hover:translate-x-1 inline-block transition-all duration-300">Contacto</a></li>
                <li><a href="#" className="hover:text-background hover:translate-x-1 inline-block transition-all duration-300">Envíos</a></li>
                <li><a href="#" className="hover:text-background hover:translate-x-1 inline-block transition-all duration-300">Devoluciones</a></li>
                <li><a href="#" className="hover:text-background hover:translate-x-1 inline-block transition-all duration-300">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-background/60">
            <p className="uppercase tracking-wider">© 2026 Xundwa. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-background transition-colors uppercase tracking-wider">Privacidad</a>
              <a href="#" className="hover:text-background transition-colors uppercase tracking-wider">Términos</a>
              <a href="#" className="hover:text-background transition-colors uppercase tracking-wider">Cookies</a>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-accent" />
              <span className="uppercase tracking-wider font-semibold">Certificado Sostenible</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

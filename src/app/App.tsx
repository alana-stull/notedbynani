import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import reflectImage from '@/assets/7df84d73ffc363a7238dad7d2baeea487662c8d8.png';
import alignImage from '@/assets/54e4e8d7d4e1f66389b3798dda43209260360645.png';
import growImage from '@/assets/5d6e08a83ad4f3293aad96ba330a927369a7154a.png';
import believeImage1 from '@/assets/0469e3e2c23b026f6ae03d537dad6278e0e3f100.png';
import believeImage2 from '@/assets/214e8b3be1bcf66128a542746c9026f3007028a1.png';
import logoImage from '@/assets/logo.png';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'shop' | 'about'>('home');
  const [activeFilter, setActiveFilter] = useState<'all' | 'mindset' | 'planning' | 'goals'>('all');

  const showPage = (page: 'home' | 'shop' | 'about') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const filterShop = (filter: 'all' | 'mindset' | 'planning' | 'goals') => {
    setActiveFilter(filter);
  };

  return (
    <div style={{ background: 'var(--cream)', fontFamily: "'DM Sans', sans-serif", color: 'var(--charcoal)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>

        {/* Navigation */}
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '28px 0',
          borderBottom: '0.5px solid var(--border-noted)'
        }}>
          <button
            onClick={() => showPage('home')}
            style={{
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0
            }}
          >
            <div style={{ width: '280px', height: '120px', overflow: 'hidden', position: 'relative' }}>
              <img
                src={logoImage}
                alt="Noted by Nani"
                style={{
                  position: 'absolute',
                  width: '420px',
                  left: '-65px',
                  top: '-145px'
                }}
              />
            </div>
          </button>
          <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            <button
              onClick={() => showPage('home')}
              style={{
                fontSize: '15px',
                fontWeight: 400,
                color: currentPage === 'home' ? 'var(--charcoal)' : 'var(--mid)',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s'
              }}
            >
              Home
            </button>
            <button
              onClick={() => showPage('shop')}
              style={{
                fontSize: '15px',
                fontWeight: 400,
                color: currentPage === 'shop' ? 'var(--charcoal)' : 'var(--mid)',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s'
              }}
            >
              Shop
            </button>
            <button
              onClick={() => showPage('about')}
              style={{
                fontSize: '15px',
                fontWeight: 400,
                color: currentPage === 'about' ? 'var(--charcoal)' : 'var(--mid)',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s'
              }}
            >
              About
            </button>
          </div>
        </nav>

        {/* HOME PAGE */}
        {currentPage === 'home' && (
          <div>
            {/* Hero Section */}
            <section style={{ padding: '100px 0 80px', textAlign: 'center' }}>
              <p style={{
                fontSize: '13px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--sage)',
                marginBottom: '24px',
                fontWeight: 500
              }}>
                Digital planners & self-reflection tools
              </p>
              <h1 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '64px',
                lineHeight: '1.08',
                marginBottom: '24px',
                maxWidth: '580px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                Peace of mind, <em style={{ fontStyle: 'italic', color: 'var(--sage-dark)' }}>one page</em> at a time.
              </h1>
              <p style={{
                fontSize: '19px',
                color: 'var(--mid)',
                fontWeight: 300,
                lineHeight: '1.75',
                maxWidth: '420px',
                margin: '0 auto 44px'
              }}>
                Beautifully minimal tools designed to support your daily flow, long-term vision, and overall well-being.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button
                  onClick={() => showPage('shop')}
                  style={{
                    background: 'var(--sage-dark)',
                    color: 'var(--cream)',
                    padding: '13px 32px',
                    borderRadius: '100px',
                    fontSize: '14px',
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: '0.01em'
                  }}
                >
                  Shop now
                </button>
                <button
                  onClick={() => showPage('about')}
                  style={{
                    background: 'transparent',
                    color: 'var(--charcoal)',
                    padding: '13px 32px',
                    borderRadius: '100px',
                    fontSize: '14px',
                    fontWeight: 400,
                    border: '0.5px solid var(--border-noted)',
                    cursor: 'pointer',
                    fontFamily: "'DM Sans', sans-serif"
                  }}
                >
                  Our story
                </button>
              </div>
            </section>

            {/* Divider */}
            <div style={{ height: '0.5px', background: 'var(--border-noted)' }}></div>

            {/* Mission Section */}
            <section style={{
              padding: '80px 0',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '80px',
              alignItems: 'center'
            }}>
              <div>
                <p style={{
                  fontSize: '11px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--sage)',
                  marginBottom: '20px',
                  fontWeight: 500
                }}>
                  Our mission
                </p>
                <h2 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '38px',
                  lineHeight: '1.18',
                  marginBottom: '20px'
                }}>
                  Live intentionally. Plan mindfully.
                </h2>
                <p style={{
                  fontSize: '15px',
                  color: 'var(--mid)',
                  fontWeight: 300,
                  lineHeight: '1.85'
                }}>
                  We create tools designed to support your daily flow, long-term vision, and overall well-being — so you can build habits, create balance, and stay grounded through every season of life.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{
                  padding: '24px 28px',
                  background: 'var(--sage-light)',
                  borderRadius: '18px'
                }}>
                  <div style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '42px',
                    color: 'var(--sage-dark)',
                    lineHeight: '1',
                    marginBottom: '5px'
                  }}>
                    3
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: 'var(--sage-dark)',
                    fontWeight: 300
                  }}>
                    Core collections
                  </div>
                </div>
                <div style={{
                  padding: '24px 28px',
                  background: 'var(--sage-light)',
                  borderRadius: '18px'
                }}>
                  <div style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '42px',
                    color: 'var(--sage-dark)',
                    lineHeight: '1',
                    marginBottom: '5px'
                  }}>
                    100%
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: 'var(--sage-dark)',
                    fontWeight: 300
                  }}>
                    Digital & instant download
                  </div>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div style={{ height: '0.5px', background: 'var(--border-noted)' }}></div>

            {/* Collections Section */}
            <section style={{ padding: '80px 0' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '44px'
              }}>
                <h2 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '38px'
                }}>
                  Core collections
                </h2>
                <button
                  onClick={() => showPage('shop')}
                  style={{
                    fontSize: '14px',
                    color: 'var(--mid)',
                    textDecoration: 'none',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Explore all →
                </button>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '18px'
              }}>
                {/* Collection Card 1 - Reflect */}
                <button
                  onClick={() => showPage('shop')}
                  style={{
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '0.5px solid var(--border-noted)',
                    background: 'var(--warm-white)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 0
                  }}
                >
                  <div style={{ height: '220px', background: '#EDE8E0', overflow: 'hidden' }}>
                    <img
                      src={growImage}
                      alt="Reflect collection"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: 'center' }}
                    />
                  </div>
                  <div style={{ padding: '20px 22px' }}>
                    <p style={{
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      color: 'var(--sage)',
                      marginBottom: '8px'
                    }}>
                      01
                    </p>
                    <h3 style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: '20px',
                      marginBottom: '8px'
                    }}>
                      Reflect
                    </h3>
                    <p style={{
                      fontSize: '13px',
                      color: 'var(--mid)',
                      fontWeight: 300,
                      lineHeight: '1.65'
                    }}>
                      Gratitude journals, reflection prompts, and mindfulness tools for clarity and balance.
                    </p>
                  </div>
                </button>

                {/* Collection Card 2 - Align */}
                <button
                  onClick={() => showPage('shop')}
                  style={{
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '0.5px solid var(--border-noted)',
                    background: 'var(--warm-white)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 0
                  }}
                >
                  <div style={{ height: '220px', background: '#E2E8E2', overflow: 'hidden' }}>
                    <img
                      src={alignImage}
                      alt="Align collection"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', objectPosition: 'center' }}
                    />
                  </div>
                  <div style={{ padding: '20px 22px' }}>
                    <p style={{
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      color: 'var(--sage)',
                      marginBottom: '8px'
                    }}>
                      02
                    </p>
                    <h3 style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: '20px',
                      marginBottom: '8px'
                    }}>
                      Align
                    </h3>
                    <p style={{
                      fontSize: '13px',
                      color: 'var(--mid)',
                      fontWeight: 300,
                      lineHeight: '1.65'
                    }}>
                      Daily, weekly, and monthly layouts that bring gentle structure and flow to your days.
                    </p>
                  </div>
                </button>

                {/* Collection Card 3 - Grow */}
                <button
                  onClick={() => showPage('shop')}
                  style={{
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '0.5px solid var(--border-noted)',
                    background: 'var(--warm-white)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 0
                  }}
                >
                  <div style={{ height: '220px', background: '#E0E4EB', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={reflectImage}
                      alt="Grow collection"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ padding: '20px 22px' }}>
                    <p style={{
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      color: 'var(--sage)',
                      marginBottom: '8px'
                    }}>
                      03
                    </p>
                    <h3 style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: '20px',
                      marginBottom: '8px'
                    }}>
                      Grow
                    </h3>
                    <p style={{
                      fontSize: '13px',
                      color: 'var(--mid)',
                      fontWeight: 300,
                      lineHeight: '1.65'
                    }}>
                      Goal worksheets and habit trackers that turn your aspirations into daily practice.
                    </p>
                  </div>
                </button>
              </div>
            </section>

            {/* Banner */}
            <div style={{
              margin: '0 0 80px',
              padding: '70px 60px',
              background: 'var(--sage-light)',
              borderRadius: '24px',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '38px',
                marginBottom: '16px'
              }}>
                Thoughtfully designed for your journey.
              </h2>
              <p style={{
                fontSize: '16px',
                color: 'var(--mid)',
                fontWeight: 300,
                marginBottom: '36px',
                maxWidth: '380px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                Whether you're navigating school, building something new, or simply trying to stay centered — our tools are here.
              </p>
              <button
                onClick={() => showPage('shop')}
                style={{
                  background: 'var(--sage-dark)',
                  color: 'var(--cream)',
                  padding: '13px 32px',
                  borderRadius: '100px',
                  fontSize: '14px',
                  fontWeight: 500,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.01em'
                }}
              >
                Discover templates
              </button>
            </div>
          </div>
        )}

        {/* SHOP PAGE */}
        {currentPage === 'shop' && (
          <div>
            {/* Shop Hero */}
            <section style={{
              padding: '64px 0 48px',
              borderBottom: '0.5px solid var(--border-noted)',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--sage)',
                marginBottom: '24px',
                fontWeight: 500
              }}>
                The collection
              </p>
              <h1 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '46px',
                marginBottom: '12px'
              }}>
                Browse tools to support your journey.
              </h1>
              <p style={{
                fontSize: '16px',
                color: 'var(--mid)',
                fontWeight: 300
              }}>
                Instant digital downloads — designed with intention.
              </p>
            </section>

            {/* Filter Row */}
            <div style={{
              display: 'flex',
              gap: '10px',
              margin: '36px 0 48px',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => filterShop('all')}
                style={{
                  padding: '9px 20px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  border: '0.5px solid var(--border-noted)',
                  background: activeFilter === 'all' ? 'var(--sage-dark)' : 'transparent',
                  color: activeFilter === 'all' ? 'var(--cream)' : 'var(--mid)',
                  borderColor: activeFilter === 'all' ? 'var(--sage-dark)' : 'var(--border-noted)',
                  cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'all 0.2s'
                }}
              >
                All
              </button>
              <button
                onClick={() => filterShop('mindset')}
                style={{
                  padding: '9px 20px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  border: '0.5px solid var(--border-noted)',
                  background: activeFilter === 'mindset' ? 'var(--sage-dark)' : 'transparent',
                  color: activeFilter === 'mindset' ? 'var(--cream)' : 'var(--mid)',
                  borderColor: activeFilter === 'mindset' ? 'var(--sage-dark)' : 'var(--border-noted)',
                  cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'all 0.2s'
                }}
              >
                Personal development & mindset
              </button>
              <button
                onClick={() => filterShop('planning')}
                style={{
                  padding: '9px 20px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  border: '0.5px solid var(--border-noted)',
                  background: activeFilter === 'planning' ? 'var(--sage-dark)' : 'transparent',
                  color: activeFilter === 'planning' ? 'var(--cream)' : 'var(--mid)',
                  borderColor: activeFilter === 'planning' ? 'var(--sage-dark)' : 'var(--border-noted)',
                  cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'all 0.2s'
                }}
              >
                Planning & productivity
              </button>
              <button
                onClick={() => filterShop('goals')}
                style={{
                  padding: '9px 20px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  border: '0.5px solid var(--border-noted)',
                  background: activeFilter === 'goals' ? 'var(--sage-dark)' : 'transparent',
                  color: activeFilter === 'goals' ? 'var(--cream)' : 'var(--mid)',
                  borderColor: activeFilter === 'goals' ? 'var(--sage-dark)' : 'var(--border-noted)',
                  cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'all 0.2s'
                }}
              >
                Goal setting & habit tracking
              </button>
            </div>

            {/* Shop Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              marginBottom: '80px'
            }}>
              {/* Product 1 */}
              {(activeFilter === 'all' || activeFilter === 'planning') && (
                <div style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '0.5px solid var(--border-noted)',
                  background: 'var(--warm-white)'
                }}>
                  <div style={{ height: '220px', background: 'var(--sand-light)', overflow: 'hidden' }}>
                    <ImageWithFallback
                      src="https://static.wixstatic.com/media/b597d0_4f0cf539c85d43139fd19f7d7d3df8e0~mv2.png"
                      alt="Undated Daily Planner"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ padding: '18px 20px' }}>
                    <p style={{
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--sage)',
                      marginBottom: '6px'
                    }}>
                      Planning & productivity
                    </p>
                    <h3 style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: '17px',
                      marginBottom: '12px'
                    }}>
                      Undated Daily Planner
                    </h3>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontSize: '15px', fontWeight: 500 }}>$3.00</span>
                      <button style={{
                        background: 'var(--sage-light)',
                        color: 'var(--sage-dark)',
                        padding: '8px 16px',
                        borderRadius: '100px',
                        fontSize: '12px',
                        fontWeight: 500,
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: "'DM Sans', sans-serif",
                        transition: 'all 0.2s'
                      }}>
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Product 2 */}
              {(activeFilter === 'all' || activeFilter === 'mindset') && (
                <div style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '0.5px solid var(--border-noted)',
                  background: 'var(--warm-white)'
                }}>
                  <div style={{ height: '220px', background: '#EDE8E0', overflow: 'hidden' }}>
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=220&fit=crop"
                      alt="Mindset Journal"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ padding: '18px 20px' }}>
                    <p style={{
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--sage)',
                      marginBottom: '6px'
                    }}>
                      Mindset & reflection
                    </p>
                    <h3 style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: '17px',
                      marginBottom: '12px'
                    }}>
                      Daily Gratitude Journal
                    </h3>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontSize: '15px', fontWeight: 500 }}>$4.00</span>
                      <button style={{
                        background: 'var(--sage-light)',
                        color: 'var(--sage-dark)',
                        padding: '8px 16px',
                        borderRadius: '100px',
                        fontSize: '12px',
                        fontWeight: 500,
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: "'DM Sans', sans-serif",
                        transition: 'all 0.2s'
                      }}>
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Product 3 */}
              {(activeFilter === 'all' || activeFilter === 'goals') && (
                <div style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '0.5px solid var(--border-noted)',
                  background: 'var(--warm-white)'
                }}>
                  <div style={{ height: '220px', background: '#E0E4EB', overflow: 'hidden' }}>
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=220&fit=crop"
                      alt="Habit Tracker"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ padding: '18px 20px' }}>
                    <p style={{
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--sage)',
                      marginBottom: '6px'
                    }}>
                      Goal setting
                    </p>
                    <h3 style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: '17px',
                      marginBottom: '12px'
                    }}>
                      Monthly Habit Tracker
                    </h3>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontSize: '15px', fontWeight: 500 }}>$3.50</span>
                      <button style={{
                        background: 'var(--sage-light)',
                        color: 'var(--sage-dark)',
                        padding: '8px 16px',
                        borderRadius: '100px',
                        fontSize: '12px',
                        fontWeight: 500,
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: "'DM Sans', sans-serif",
                        transition: 'all 0.2s'
                      }}>
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ABOUT PAGE */}
        {currentPage === 'about' && (
          <div>
            {/* About Hero */}
            <section style={{ padding: '80px 0 64px', textAlign: 'center' }}>
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--sage)',
                marginBottom: '24px',
                fontWeight: 500
              }}>
                Our story
              </p>
              <h1 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '48px',
                lineHeight: '1.12',
                maxWidth: '520px',
                margin: '0 auto'
              }}>
                Designed to support you, <em style={{ fontStyle: 'italic', color: 'var(--sage-dark)' }}>wherever you are.</em>
              </h1>
            </section>

            {/* What We Believe In Section */}
            <section style={{
              padding: '64px 0',
              borderTop: '0.5px solid var(--border-noted)'
            }}>
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--sage)',
                marginBottom: '10px',
                fontWeight: 500
              }}>
                What we believe in
              </p>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '30px',
                marginBottom: '48px'
              }}>
                Our guiding principles.
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '18px'
              }}>
                <div style={{
                  padding: '32px 28px',
                  background: 'var(--warm-white)',
                  borderRadius: '18px',
                  border: '0.5px solid var(--border-noted)'
                }}>
                  <div style={{
                    fontSize: '13px',
                    letterSpacing: '0.1em',
                    color: 'var(--sage)',
                    marginBottom: '16px',
                    fontWeight: 400
                  }}>
                    01
                  </div>
                  <h3 style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '20px',
                    marginBottom: '12px',
                    color: 'var(--charcoal)'
                  }}>
                    Intentional living
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--mid)',
                    fontWeight: 300,
                    lineHeight: '1.75'
                  }}>
                    Every tool we make is designed to slow you down just enough to be purposeful about how you spend your time.
                  </p>
                </div>
                <div style={{
                  padding: '32px 28px',
                  background: 'var(--warm-white)',
                  borderRadius: '18px',
                  border: '0.5px solid var(--border-noted)'
                }}>
                  <div style={{
                    fontSize: '13px',
                    letterSpacing: '0.1em',
                    color: 'var(--sage)',
                    marginBottom: '16px',
                    fontWeight: 400
                  }}>
                    02
                  </div>
                  <h3 style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '20px',
                    marginBottom: '12px',
                    color: 'var(--charcoal)'
                  }}>
                    Minimal by design
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--mid)',
                    fontWeight: 300,
                    lineHeight: '1.75'
                  }}>
                    No clutter, no overwhelm. Clean layouts that get out of your way so you can focus on what matters.
                  </p>
                </div>
                <div style={{
                  padding: '32px 28px',
                  background: 'var(--warm-white)',
                  borderRadius: '18px',
                  border: '0.5px solid var(--border-noted)'
                }}>
                  <div style={{
                    fontSize: '13px',
                    letterSpacing: '0.1em',
                    color: 'var(--sage)',
                    marginBottom: '16px',
                    fontWeight: 400
                  }}>
                    03
                  </div>
                  <h3 style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: '20px',
                    marginBottom: '12px',
                    color: 'var(--charcoal)'
                  }}>
                    Growth without pressure
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--mid)',
                    fontWeight: 300,
                    lineHeight: '1.75'
                  }}>
                    Progress looks different every day. Our tools meet you where you are, not where you think you should be.
                  </p>
                </div>
              </div>
            </section>

            {/* Founder Section */}
            <section style={{
              padding: '64px 0',
              borderTop: '0.5px solid var(--border-noted)',
              display: 'grid',
              gridTemplateColumns: '1fr 1.6fr',
              gap: '72px',
              alignItems: 'start'
            }}>
              <div style={{
                borderRadius: '18px',
                overflow: 'hidden',
                height: '400px',
                background: 'var(--sage-light)'
              }}>
                <ImageWithFallback
                  src="https://static.wixstatic.com/media/b597d0_08e3ed3520cd4b41b3ee673842413d19~mv2.png"
                  alt="Alana Stull"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div>
                <p style={{
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--sage)',
                  marginBottom: '10px',
                  fontWeight: 500
                }}>
                  Founder & CEO
                </p>
                <h2 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: '36px',
                  marginBottom: '20px'
                }}>
                  Alana Stull
                </h2>
                <p style={{
                  fontSize: '15px',
                  color: 'var(--mid)',
                  fontWeight: 300,
                  lineHeight: '1.85',
                  marginBottom: '20px'
                }}>
                  Noted by Nani was born out of a desire to blend intentional design with everyday support — no overwhelm, no pressure, just space to grow.
                </p>
                <p style={{
                  fontSize: '15px',
                  color: 'var(--mid)',
                  fontWeight: 300,
                  lineHeight: '1.85'
                }}>
                  I'm Alana, a designer and planner who believes peace of mind starts with small, intentional steps. Through thoughtfully designed templates, I create tools that make self-growth feel approachable, empowering, and rooted in everyday life.
                </p>
              </div>
            </section>

            {/* Find Your Rhythm Section */}
            <section style={{
              margin: '0 0 80px',
              padding: '70px 60px',
              background: 'var(--sage-light)',
              borderRadius: '24px',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: '38px',
                marginBottom: '16px'
              }}>
                Find your rhythm.
              </h2>
              <p style={{
                fontSize: '16px',
                color: 'var(--mid)',
                fontWeight: 300,
                marginBottom: '36px',
                maxWidth: '420px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
                Tools that adapt to your season, support your goals, and help you stay grounded along the way.
              </p>
              <button
                onClick={() => showPage('shop')}
                style={{
                  background: 'var(--sage-dark)',
                  color: 'var(--cream)',
                  padding: '13px 32px',
                  borderRadius: '100px',
                  fontSize: '14px',
                  fontWeight: 500,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.01em'
                }}
              >
                Explore templates
              </button>
            </section>
          </div>
        )}

      </div>
    </div>
  );
}

import { GalleryCarousel } from "@/components/gallery-carousel";
import { HeroCarousel } from "@/components/hero-carousel";
import { ReviewsCarousel } from "@/components/reviews-carousel";
import {
  appointmentNotes,
  contactInfo,
  features,
  galleryCards,
  heroSlides,
  heroStats,
  navItems,
  pricingPlans,
  reviews,
  scheduleItems,
} from "@/data/site-content";

export default function HomePage() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-black/5 bg-[rgba(248,242,232,0.8)] backdrop-blur-2xl">
        <div className="mx-auto flex min-h-[76px] w-[min(calc(100%-32px),1180px)] items-center justify-between gap-5">
          <a className="flex items-center gap-3.5 font-bold tracking-[0.02em]" href="#home" aria-label="泡泡尾巴宠物洗护店首页">
            <div className="grid h-[46px] w-[46px] place-items-center rounded-[15px] bg-[linear-gradient(135deg,#f3b18f,#e67f53)] text-[22px] text-white shadow-[0_12px_26px_rgba(231,139,95,0.28)]">
              🐾
            </div>
            <div className="grid gap-0.5">
              <strong className="text-[1.02rem]">泡泡尾巴</strong>
              <span className="text-[0.8rem] text-muted">Pet Spa & Grooming House</span>
            </div>
          </a>

          <nav className="hidden items-center gap-[22px] text-[0.95rem] text-muted lg:flex" aria-label="主导航">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn-primary">
            立即预约
          </a>
        </div>
      </header>

      <main id="home">
        <section className="px-0 pb-9 pt-[22px] md:pt-[54px]">
          <div className="mx-auto grid w-[min(calc(100%-32px),1180px)] gap-7 lg:grid-cols-[1.06fr_0.94fr]">
            <article className="reveal rounded-[30px] border border-white/60 bg-[rgba(255,250,243,0.84)] p-6 shadow-glow md:p-10 xl:p-[54px]">
              <span className="eyebrow">城市里的温柔洗护站</span>
              <h1 className="mt-[22px] max-w-[9ch] font-serif text-[clamp(2.35rem,12vw,3.3rem)] leading-[1.05] tracking-[-0.02em] text-ink md:text-[clamp(2.7rem,5vw,4.9rem)]">
                让每一次洗护，都像去一趟小度假。
              </h1>
              <p className="mt-[18px] max-w-[54ch] text-[1.02rem] text-muted">
                为猫咪和狗狗提供安心洗澡、造型修剪、皮毛养护与气味管理服务。我们把清洁、舒适和拍照好看这三件事一起做好。
              </p>
              <div className="mt-7 flex flex-wrap gap-3.5">
                <a href="#pricing" className="btn-primary">
                  查看套餐
                </a>
                <a href="#services" className="btn-secondary">
                  了解服务
                </a>
              </div>
              <div className="mt-[34px] grid gap-3.5 md:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[16px] border border-black/5 bg-white/55 px-[18px] py-[18px]"
                  >
                    <strong className="block font-serif text-2xl">{stat.value}</strong>
                    <span className="text-[0.92rem] text-muted">{stat.label}</span>
                  </div>
                ))}
              </div>
            </article>

            <aside className="reveal delay-1 overflow-hidden rounded-[30px] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0.5)),linear-gradient(135deg,#fbe2cb,#d7eee4)] p-6 shadow-glow">
              <HeroCarousel slides={heroSlides} />
            </aside>
          </div>
        </section>

        <section id="services" className="section-shell">
          <div className="container-shell">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">核心服务</span>
                <h2 className="section-title">不止洗干净，也让状态更好看。</h2>
              </div>
              <p className="section-copy">
                根据宠物体型、毛量、皮肤状态和性格，安排不同节奏的护理流程，让敏感型宝贝也能慢慢放松下来。
              </p>
            </div>

            <div className="grid gap-[18px] md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature, index) => (
                <article key={feature.title} className={`card-shell reveal delay-${index + 1}`}>
                  <div className="mb-4 grid h-[52px] w-[52px] place-items-center rounded-2xl bg-[linear-gradient(135deg,rgba(231,139,95,0.18),rgba(133,183,162,0.18))] text-[1.35rem]">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2.5 font-serif text-[1.4rem]">{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section-shell">
          <div className="container-shell">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">洗护套餐</span>
                <h2 className="section-title">清楚定价，预约前先知道会得到什么。</h2>
              </div>
              <p className="section-copy">
                以下为示意价格，可按体重、毛长和宠物个体情况微调。页面是静态单页，后续也可以继续接入在线预约表单。
              </p>
            </div>

            <div className="grid gap-[18px] md:grid-cols-2 xl:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <article
                  key={plan.tag}
                  className={`reveal delay-${index + 1} rounded-[22px] border p-7 shadow-glow ${
                    plan.featured
                      ? "translate-y-0 border-transparent bg-[linear-gradient(180deg,rgba(231,139,95,0.96),rgba(201,98,54,0.96))] text-white md:-translate-y-1.5"
                      : "border-white/60 bg-[rgba(255,250,243,0.84)] text-ink"
                  }`}
                >
                  <span
                    className={`inline-block rounded-full px-3 py-[7px] text-[0.8rem] font-bold ${
                      plan.featured ? "bg-white/15 text-white" : "bg-[rgba(133,183,162,0.18)] text-accent-deep"
                    }`}
                  >
                    {plan.tag}
                  </span>
                  <div className="mt-[18px] font-serif text-[3rem] leading-none">
                    {plan.price} <small className="font-sans text-[0.95rem]">/ 次</small>
                  </div>
                  <p className={`mt-2.5 ${plan.featured ? "text-white/80" : "text-muted"}`}>{plan.note}</p>
                  <ul className="mt-[22px] grid gap-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-2.5 before:content-['•'] before:font-black ${
                          plan.featured ? "text-white/80 before:text-white" : "text-muted before:text-brand"
                        }`}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="space" className="section-shell">
          <div className="container-shell grid gap-[18px] md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="card-shell reveal grid gap-[18px]">
              <div>
                <span className="eyebrow">门店节奏</span>
                <h2 className="section-title">把宠物情绪照顾好，洗护才会真正轻松。</h2>
                <p className="mt-3 text-muted">
                  我们把接待区、清洁区和吹毛区做了节奏分离，降低连续噪声刺激。第一次来店的小朋友，也会先留出熟悉环境的时间。
                </p>
              </div>
              <div className="grid gap-3.5">
                {scheduleItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-start gap-2 rounded-[16px] border border-black/5 bg-white/55 px-[18px] py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3.5"
                  >
                    <strong>{item.label}</strong>
                    <span className="text-muted sm:text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </article>

            <aside className="card-shell reveal delay-1">
              <span className="eyebrow">预约须知</span>
              <h2 className="section-title">第一次到店也不用紧张。</h2>
              <ul className="mt-[22px] grid gap-3">
                {appointmentNotes.map((note) => (
                  <li key={note} className="flex items-start gap-2.5 text-muted before:font-black before:text-brand before:content-['•']">
                    {note}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="section-shell">
          <div className="container-shell">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">洗后氛围</span>
                <h2 className="section-title">从“刚洗完”到“真好看”，差的是细节。</h2>
              </div>
              <p className="section-copy">
                单页里用三张氛围卡片展示门店调性。如果你愿意，我下一步也可以继续把它升级成带真实图片轮播的版本。
              </p>
            </div>

            <div className="grid gap-[18px] md:grid-cols-2 xl:grid-cols-3">
              {galleryCards.map((card, index) => (
                <GalleryCarousel key={card.title} card={card} delayClass={`delay-${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="section-shell">
          <div className="container-shell">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">顾客反馈</span>
                <h2 className="section-title">让主人愿意复购的，通常是放心感。</h2>
              </div>
              <p className="section-copy">这里放了三条示意评价，适合单页展示门店口碑。后续也可以接成动态评论模块。</p>
            </div>

            <ReviewsCarousel reviews={reviews} />
            {false && <div className="grid gap-[18px] md:grid-cols-2 xl:grid-cols-3">
              {reviews.map((review, index) => (
                <article key={review.name} className={`card-shell reveal delay-${index + 1} grid gap-4`}>
                  <span className="text-[0.95rem] tracking-[0.14em] text-brand">★★★★★</span>
                  <p className="text-muted">{review.quote}</p>
                  <div className="flex items-center gap-3 text-[0.94rem] text-muted">
                    <div className="grid h-[42px] w-[42px] place-items-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-deep))] font-bold text-white">
                      {review.avatar}
                    </div>
                    <span>{review.name}</span>
                  </div>
                </article>
              ))}
            </div>}
          </div>
        </section>

        <section id="contact" className="px-0 pb-[72px] pt-[34px]">
          <div className="container-shell">
            <div className="reveal grid gap-6 rounded-[30px] bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.22),transparent_15%),linear-gradient(135deg,#8fbba8_0%,#7ca997_35%,#d06d42_100%)] p-6 text-white shadow-glow-strong md:p-9 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="inline-flex items-center gap-2.5 rounded-full bg-white/15 px-3.5 py-2 text-[0.9rem] font-bold text-white">
                  现在预约
                </span>
                <h2 className="mt-[18px] font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.08] tracking-[-0.02em]">
                  把下次洗护时间，提前安排好。
                </h2>
                <p className="mt-[14px] text-white/90">
                  适合放在店铺落地页、朋友圈引流页或本地门店展示页。直接替换电话、地址、微信号，就能投入使用。
                </p>
              </div>
              <div className="rounded-[22px] border border-white/20 bg-white/10 p-[22px] backdrop-blur-md">
                <div className="grid gap-2.5 text-white/90">
                  <strong>联系电话：{contactInfo.phone}</strong>
                  <span>门店地址：{contactInfo.address}</span>
                  <span>微信预约：{contactInfo.wechat}</span>
                  <span>建议提前2~3天预约，并告知客服您的到达时间</span>
                </div>
                <div className="mt-[22px] flex flex-wrap gap-3.5">
                  <a href={contactInfo.phoneHref} className="btn-primary">
                    电话预约
                  </a>
                  <a href={contactInfo.emailHref} className="btn-secondary">
                    发送邮件
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="pb-[30px] text-center text-[0.92rem] text-muted">
        <div className="container-shell">© {new Date().getFullYear()} 泡泡尾巴宠物洗护店 · 温柔护理每一只毛孩子</div>
      </footer>
    </>
  );
}

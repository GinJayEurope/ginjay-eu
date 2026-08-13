import { useEffect, useRef } from "react";

const illustratedEdition =
  "/editorial/GinJay-Europe-From-an-Idea-to-a-Home.pdf";

export default function EditorialArticle({ article, onClose }) {
  const closeButtonRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocusedElement = document.activeElement;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }

      if (event.key !== "Tab") return;

      const dialog = closeButtonRef.current?.closest(".editorial-article");
      const focusableElements = dialog?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedElement?.focus();
    };
  }, []);

  return (
    <div
      className="editorial-article-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="editorial-article-title"
      onClick={onClose}
    >
      <article
        className="editorial-article"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="editorial-article-close"
          aria-label="Close article"
          onClick={onClose}
          ref={closeButtonRef}
        >
          ×
        </button>

        <header className="editorial-article-header">
          <div className="editorial-article-cover">
            <img src={article.image} alt="" aria-hidden="true" />
          </div>

          <div className="editorial-article-intro">
            <span className="subtitle">GINJAY EUROPE · OUR STORY</span>
            <h2 id="editorial-article-title">{article.title}</h2>
            <p className="editorial-article-deck">{article.text}</p>

            <div className="editorial-article-details">
              <span>{article.date}</span>
              <span>By {article.author}</span>
              <span>6 min read</span>
            </div>

            <a
              className="editorial-pdf-link"
              href={illustratedEdition}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open illustrated edition <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        <div className="editorial-article-body">
          <section>
            <h3>Where It All Began</h3>

            <p className="editorial-dropcap">
              Every community begins with a feeling - the quiet realization
              that something beautiful deserves a place where it can be shared.
            </p>

            <p>
              For GinJay Europe, that feeling began in early May 2026. Ginny
              Natnicha and Jayna Angelina had already touched hearts far beyond
              Thailand, and more and more European Alkeys were finding their way
              to them. Yet Europe still felt scattered across countries,
              languages, and timelines. There were fans everywhere, but there
              was no shared European home bringing them together.
            </p>

            <p>Klaudia wanted to change that and brought DaniCor into the project.</p>

            <p>
              They founded GinJay Europe with a simple hope: to create a
              welcoming space where European Alkeys could find news, celebrate
              milestones, share creativity, preserve memories, and feel
              connected - not only to Ginny and Jayna, but also to one another.
              The first public chapter began on 3 May 2026, when GinJay Europe
              reached out to European Alkeys with the message that something new
              was being built and that this was only the beginning.
            </p>

            <p>
              Just a few days later, the account was already supporting its
              first GinJay trends and helping European fans navigate Thai and
              European time zones. What had started as an idea was becoming real.
            </p>
          </section>

          <section>
            <h3>Two Founders, One Shared Vision</h3>

            <p>
              Klaudia and DaniCor brought different creative strengths to GinJay
              Europe, but they shared the same vision.
            </p>

            <p>
              Klaudia became the driving force behind social media, creating
              edits and posters while helping shape how GinJay Europe
              communicates across its platforms. Her work gives events,
              schedules, campaigns, and milestones a visual identity that fans
              can immediately recognize and share.
            </p>

            <p>
              DaniCor brought digital art, website design, community work, and
              GirlLove news into the project. Through artwork and news coverage,
              she captures both the emotions behind GinJay’s journey and the
              wider developments within the GirlLove world, while her community
              role keeps the focus on the people GinJay Europe was created for:
              the Alkeys who want to belong, participate, and connect.
            </p>

            <p>
              Together, they began filling the new space with updates, event
              support, posters, art, edits, memories, and the sincere belief that
              Europe could become an important part of GinJay’s growing
              international story.
            </p>
          </section>

          <section>
            <h3>When Two Became Four</h3>

            <p>As the project grew, so did the team.</p>

            <p>
              BreE joined next, bringing social media, edits, blogs, and artwork.
              Her creativity added another voice and another perspective to the
              content, while her writing helped GinJay Europe move beyond simply
              reporting moments and begin reflecting on what those moments mean
              to fans.
            </p>

            <p>
              Later, juste became the fourth member of the team. Contributing to
              social media as an edit and poster creator, GIF creator, and
              archivist, she helped turn fleeting scenes into memories that could
              be revisited again and again. Her work strengthened one of the
              promises at the heart of GinJay Europe: meaningful GinJay moments
              should not simply disappear into a fast-moving timeline.
            </p>

            <p>The team now consists of four people with different skills but one shared purpose:</p>

            <ul className="editorial-team-list">
              <li><strong>Klaudia</strong><span>Social media, edits, and poster creation</span></li>
              <li><strong>BreE</strong><span>Social media, edits, blogs, and artwork</span></li>
              <li><strong>DaniCor</strong><span>Digital art, website design, community, and GirlLove news</span></li>
              <li><strong>juste</strong><span>Social media, edits, poster creation, GIF creation, and archiving</span></li>
            </ul>

            <p>
              Together, we create content that informs, celebrates, preserves,
              and connects. Every poster, edit, artwork, GIF, blog, update, and
              archived memory carries a part of the person who made it - but it
              also belongs to the larger story we are building together.
            </p>
          </section>

          <section>
            <h3>The Moments That Shaped Us</h3>

            <p>
              The first months of GinJay Europe moved quickly. We supported
              trend events, shared schedules adapted for European time zones,
              celebrated awards, followed campaigns, and collected the moments
              that made Alkeys laugh, cry, and fall for GinJay all over again.
            </p>

            <p>
              We stood with the fandom during the KCL Awards, celebrated Ginny
              and Jayna’s appearances and achievements, and preserved memories
              from moments such as Teayii’s Talk and Pride LOVE GALAXY. We
              followed individual events for Ginny and Jayna, celebrated
              follower milestones, supported voting projects, and watched the
              excitement surrounding Lunar Secret continue to grow.
            </p>

            <p>
              The road of the Lunar Secret pilot became especially meaningful to
              us. We shared its progress, encouraged Alkeys to keep watching and
              sharing, and eventually celebrated the moment it reached one
              million views - a milestone created by countless people supporting
              the same dream from different parts of the world.
            </p>

            <p>
              We also watched Ginny and Jayna receive the Girls’ Love Rising Star
              of the Year award at the 8th Nakarat Awards. Moments like this
              reminded us how much had happened in such a short time, and how
              special it was to witness their journey together with the
              community.
            </p>

            <p>
              But GinJay Europe has never been only about the large events. Some
              of our favorite memories are the smallest ones: a look exchanged
              between Ginny and Jayna, a spontaneous touch, a funny reaction, a
              quiet sentence, or a moment that lasts only seconds but stays in
              our hearts much longer. These are the moments that become edits,
              artworks, GIFs, captions, and conversations - and they are often
              the moments that bring people closest together.
            </p>
          </section>

          <section>
            <h3>Building More Than a Timeline</h3>

            <p>
              As our ideas expanded, GinJay Europe grew beyond a single social
              media account.
            </p>

            <p>
              We created a website designed as a digital home for news, art,
              edits, posters, events, timelines, and community memories. We also
              launched a dedicated Tumblr GIF archive so that high-quality
              GinJay moments could be collected, preserved, and discovered again
              instead of being lost in the speed of social media.
            </p>

            <blockquote>
              Each new part of the project came from the same question: how can
              we give European Alkeys a place that feels welcoming, useful,
              creative, and alive?
            </blockquote>

            <p>
              We are still learning the answer. GinJay Europe is growing with
              every new idea, every project, and every person who chooses to take
              part. We do not want to build a platform that only speaks to
              people. We want to build a community where people speak with one
              another, share what GinJay means to them, contribute their talents,
              and create memories together.
            </p>
          </section>

          <section>
            <h3>From a Team to a Friendship</h3>

            <p>
              Perhaps the most unexpected part of this journey is what happened
              behind the content.
            </p>

            <p>
              GinJay Europe began as a team, but somewhere between planning
              posts, creating designs, discussing ideas, collecting memories,
              and celebrating GinJay, friendships began to grow. Four people who
              came together because of Ginny and Jayna discovered trust,
              laughter, support, and a sense of belonging with one another.
            </p>

            <p>
              That friendship has become part of everything we create. It
              reminds us that fandom can be more than following artists or
              watching a series. It can introduce people who might never
              otherwise have met. It can cross borders and languages. It can
              create conversations, collaborations, safe spaces, and genuine
              connections.
            </p>

            <p>This is what we hope GinJay Europe can become for others too.</p>
          </section>

          <section className="editorial-article-finale">
            <h3>Let GinJay Into Your Heart</h3>

            <p>
              Our journey is still at its beginning. We have dreams for a
              stronger European community, more shared projects, more preserved
              memories, and perhaps one day the chance to welcome Ginny and Jayna
              to Europe surrounded by the Alkeys who have been supporting them
              from afar.
            </p>

            <p>
              Until then, we will continue creating. We will continue sharing
              news, making edits, designing posters, drawing artwork, writing
              blogs, creating GIFs, archiving memories, and celebrating every
              step of Ginny and Jayna’s journey.
            </p>

            <p>Most of all, we will continue trying to bring people together.</p>

            <p>So this is our message to every Alkey who finds us:</p>

            <blockquote>
              Let GinJay into your heart. Let their story inspire you to create,
              support, and reach out to others. Share the moments that made you
              smile. Talk to the person on your timeline who loves the same
              little things you do. Turn admiration into creativity, and
              creativity into connection.
            </blockquote>

            <div className="editorial-closing-message">
              <p>Because GinJay Europe was never meant to be only our story.</p>
              <p>It is a home we hope to build with all of you.</p>
              <p>And this is only the beginning.</p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}

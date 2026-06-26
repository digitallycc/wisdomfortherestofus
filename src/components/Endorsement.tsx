export default function Endorsement() {
  return (
    <section className="py-16 md:py-20 border-b border-border">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-8 text-center">
          Praise for the book
        </p>
        <blockquote className="text-center">
          <p className="font-serif text-xl md:text-2xl lg:text-[1.65rem] leading-relaxed md:leading-relaxed text-text">
            &ldquo;An accessible, warm-hearted presentation of the central ideas of
            Madhyamaka metaphysics and of their ethical implications. Muhammad Ibrahim
            has found the perfect voice in which to encourage people to take these
            ideas seriously, regardless of their religious or ideological commitments.
            It will be of real benefit to people who want to improve their lives along
            these lines, but who find technical presentations forbidding.&rdquo;
          </p>
          <footer className="mt-8">
            <cite className="not-italic block">
              <span className="font-sans text-base font-semibold text-text block">
                Jay&nbsp;L.&nbsp;Garfield
              </span>
              <span className="font-sans text-sm text-muted block mt-1">
                Professor Emeritus of Philosophy, Smith College
              </span>
              <span className="font-sans text-sm text-muted block">
                Visiting Professor of Buddhist Philosophy, Harvard Divinity School
              </span>
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

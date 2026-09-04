export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-dark-blue mb-8 text-center">About Project Sky</h1>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold text-dark-blue mb-4">Our Mission</h2>
        <p className="mb-8 text-foreground">
          Project Sky — Supporting Kids & Youth — это благотворительный проект, созданный для поддержки детей и молодёжи Кыргызстана и объединения людей, которые хотят внести вклад в их будущее. Мы верим, что вместе мы можем создать лучшее будущее для каждого ребёнка.
        </p>
        <h2 className="text-2xl font-bold text-dark-blue mb-4">Our Vision</h2>
        <p className="mb-8 text-foreground">
          Мы хотим видеть Кыргызстан, в котором каждый ребёнок и молодой человек имеет возможность развиваться, получать знания и необходимую поддержку независимо от обстоятельств.
        </p>
        <h2 className="text-2xl font-bold text-dark-blue mb-4">Our Values</h2>
        <ul className="list-disc pl-6 space-y-2 text-foreground">
          <li><strong>Transparency (Прозрачность):</strong> Открыто рассказывать о результатах.</li>
          <li><strong>Education (Образование):</strong> Создавать возможности для развития.</li>
          <li><strong>Equality & Community:</strong> Объединять людей ради общей цели.</li>
          <li><strong>Responsibility (Забота):</strong> Понимать реальные потребности людей.</li>
        </ul>
      </div>
    </div>
  );
}

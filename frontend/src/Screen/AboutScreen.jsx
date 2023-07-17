function AboutScreen() {
  return (
    <div className='container mx-auto bg-slate-100 h-auto mb-4 flex-col'>
      <div className='bg-sky-500 h-24 flex items-center justify-center mt-24 md:mt-10'>
        <h1 className='text-4xl italic font-bold text-white'>About Us</h1>
      </div>
      <div className='w-fit p-4 flex flex-col gap-8 text-center tracking-wide font-light'>
        <p>
          <span className='text-lg font-semibold'>
            👋 Welcome to LaptopLane,
          </span>
          your ultimate destination for all things laptops! We are a dedicated
          e-commerce platform offering a wide range of high-quality laptops from
          top brands, ensuring that you find the perfect device to meet your
          computing needs. Whether you're a student, professional, gamer, or
          simply someone who enjoys the convenience of portable computing, we
          have the ideal laptop waiting for you.
        </p>
        <p>
          At LaptopLane, we understand the importance of having a reliable and
          efficient laptop that can keep up with your demands. That's why we
          carefully curate our product selection to include the latest models
          with cutting-edge features and technologies. From sleek ultrabooks to
          powerful gaming laptops, we have options for every budget and
          requirement.
        </p>
        <p>
          We pride ourselves on providing an exceptional shopping experience for
          our customers. Our user-friendly website is designed to make your
          browsing and purchasing process smooth and hassle-free. We also offer
          detailed product descriptions, specifications, and customer reviews,
          allowing you to make informed decisions before making a purchase.
        </p>
        <p>
          Not only do we offer a diverse range of laptops, but we also provide
          excellent customer service. Our knowledgeable and friendly team is
          always ready to assist you with any inquiries or concerns you may
          have. We strive to ensure that your experience with LaptopLane is
          enjoyable and satisfactory from start to finish.
        </p>
        <p className='text-lg '>
          Thank you for choosing LaptopLane as your go-to destination for all
          your laptop needs. We are committed to delivering top-notch products
          and outstanding service. Start exploring our collection today and take
          a step towards finding your perfect laptop companion.
        </p>
        <p>🧡</p>
      </div>
    </div>
  );
}

export default AboutScreen;

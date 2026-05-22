export async function getTripImage(destination: string) {
  try {
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${destination}&per_page=1`,
      {
        headers: {
          Authorization:
            process.env.NEXT_PUBLIC_PEXELS_API_KEY || "",
        },
      }
    );

    const data = await res.json();

    return (
      data.photos?.[0]?.src?.large ||
      "https://picsum.photos/800/500"
    );
  } catch (error) {
    return "https://picsum.photos/800/500";
  }
}
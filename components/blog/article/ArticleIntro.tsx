export default function ArticleIntro() {
    const Skills = ["ARCHITECTURE", "JAVASCRIPT", "WEBDEV", "PERFORMANCE"]
      const Social = ["Twitter", "Github", "Linkdin"]
    



    return (
        <section>

            <div id="introduction">
                <h1 className="font-lg py-3">Routing is the backbone of any modern web application. As systems scale,
                    the need for flexible, performant, and type-safe routing becomes paramount.
                    In this article, we explore the intricacies of dynamic routing architectures.
                </h1>
                <p className="text-sm text-gray-600 py-2">In the early days of web development, routing was a simple mapping of file paths
                    to server responses. Today, we deal with client-side state, nested layouts, and
                    parallel data fetching. To build a truly robust system, we must look beyond
                    simple pattern matching.
                </p>
            </div>

            <div id="edge-shift">
                <h1 className="text-2xl font-bold font-geist py-2">The Shift Toward Edge-First Routing</h1>
                <p className="text-sm text-gray-600 py-2">With the rise of edge computing, routing logic has shifted closer to the user.
                    This reduces latency significantly but introduces new challenges in synchronization.
                    Dynamic routing at the edge requires a lightweight yet powerful engine capable of making
                    millisecond decisions about data localization and cache-control.
                </p>
                <p className="bg-gray-100 text-sm font-light italic py-4 border-l-2 border-blue-600 rounded-sm px-4">
                    &quot;The best routing system is one the developer never has to think about. It should feel like a
                    natural extension of the project structure, not a separate configuration overhead.&quot;
                </p>
                <p className="text-sm text-gray-600 py-4">Implementing this requires a clear separation of concerns between the path definition and the
                    data fetching logic. Here is a simplified example of how we handle dynamic parameter extraction
                    in our internal framework:
                </p>
                <div className="bg-[#1E293B] font-extralight text-white p-6 py-8 rounded-lg overflow-x-auto">
                    <pre>
                        <code>
                            {`function resolveDynamicPath(route, currentPath){
  const keys = [];
  const regex = pathToRegexp(route, keys);
  const match = regex.exec(currentPath);
  if (!match) return null;
  return keys.reduce((params, key, index) => {
    params[key.name] = match[index + 1];
    return params;
  }, {});
}`}
                        </code>
                    </pre>
                </div>
            </div>

            <div id="performance">
                <h1 className="font-bold font-geist text-2xl py-6">Performance Implications</h1>
                <p className="text-sm text-gray-600 py-4">Every millisecond spent calculating a route is a millisecond the user isn&apos;t seeing content. We
                    prioritize constant-time lookup tables where possible, using a prefix tree (Trie) data structure
                    for complex route sets. This ensures that even with thousands of dynamic routes, the
                    resolution time remains negligible.</p>
                <p className="text-sm text-gray-600 py-4">Another critical factor is the bundle size of the router itself. Modern applications often ship
                    heavy routing libraries that block the main thread. We advocate for a modular approach
                    where the router core is minimal, and extra features like animations or scroll restoration are
                    opt-in.</p>

                <div className="py-10">
                    <img src="/images/BlogArticle3.jpg"
                        alt="BlogArticle3"
                        className="border border-gray-400 rounded-md" />
                    <p className="text-gray-500 text-xs py-2 text-center">Fig 1: Visual representation of Trie-based route resolution.</p>
                </div>
            </div>

            <div id="conclusion">
                <h1 className="text-2xl font-bold font-geist py-4">Conclusion</h1>
                <p className="text-sm text-gray-600 py-4">Dynamic routing isn&apos;t just about parsing a URL; it&apos;s about managing user intent across a distributed system.
                    By leveraging modern patterns like Edge-first logic and type-safe parameter definitions,
                    we can create experiences that are both fast and maintainable.</p>
                <div className="flex justify-left gap-6 py-4 border-t border-gray-400">
                    {
                        Skills.map((item) => (
                            <p className="bg-gray-300 px-2 p-1 rounded-sm text-xs font-medium text-gray-700" key={item}>{item}</p>
                        ))
                    }
                </div>
                 
                <div className="flex gap-6  items-center   w-2xl p-8 border border-gray-400 rounded-2xl my-10 bg-white">

                    <div className="h-auto w-50">
                        <img
                            src="/images/BlogArticle4.jpg"
                            alt="BlogArticle1"
                            className="mx-auto w-20 h-20 rounded-full mb-10 object-cover"
                        />
                    </div>

                    <div className="text-left space-y-3 ">
                        <h1 className="text-xl font-bold">About Alex Chen</h1>
                        <p className="text-sm  text-gray-600">
                            Alex is a Lead Engineer at NexusCorp specializing in distributed systems and
                            front-end infrastructure. When not optimizing build pipelines, he enjoys
                            photography and hiking in the Pacific Northwest.
                        </p>

                        <div className="flex gap-3 pt-2">
                            {
                                Social.map((item) => (
                                    <p key={item} className="text-sm text-blue-600 hover:text-gray-800 cursor-pointer">
                                        {item}
                                    </p>
                                ))
                            }
                        </div>
                    </div>

                </div>

            </div>


        </section>
    )
}

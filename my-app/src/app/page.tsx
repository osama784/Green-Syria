import Image from "next/image";
import logo01 from "@/images/logo1.png";
import digitalFoundry from "@/images/a3afbcc5-digital-foundry-icon-4.svg";
import uiDesign from "@/images/ae2bf6cf-ui-design.svg";
import uiImage02 from "@/images/ui_image02.svg";
import uiImage03 from "@/images/ui_image03.svg";
import uiImage04 from "@/images/ui_image04.svg";
import trash4 from "@/images/trash4.jpg";
import trash2 from "@/images/trash2.jpg";
import trash1 from "@/images/trash1.jpg";
export default function Home() {
  return (
    <>
      <div className="w-full bg-green-200 pt-16 pb-28 px-10 sm:px-16 lg:px-40">
        <header className="flex justify-center sm:justify-between items-center gap-x-28 gap-y-5 flex-wrap">
          <div className="flex justify-center items-center gap-3">
            <Image src={logo01} className="w-20" alt="image" />
            <h2 className="sm:text-2xl font-semibold rounded-lg bg-white p-3">
              Green Syria
            </h2>
          </div>
          <button className="bg-white rounded-3xl size-fit px-3 py-2 hover:bg-green-300 transition-colors">
            Contact us
          </button>
        </header>
        <div className="flex gap-5 justify-center items-center mt-20 sm:mt-24 xl:px-56">
          <div className="text-right">
            <p className="font-bold text-2xl sm:text-5xl">
              ساهم في سوريا الخضراء{" "}
            </p>

            <p className="text-xl sm:text-3xl mt-4">دعنا نجعل بيئتك نظيفة</p>

            <p className="mt-5 text-lg sm:text-xl">
              إذا كنت ترغب في استجابة سريعة وفعالة من الجهات المسؤولة، نقدم لك
              منصة إلكترونية، أداتك الموثوقة للإبلاغ عن الحاويات الممتلئة أو
              المناطق المتسخة. من خلالها يمكنك متابعة بلاغاتك بسهولة والحصول على
              تحديثات فورية عن حالتها، مع ربطها مباشرة بالجهات المسؤولة من
              بلديات أو شركات خاصة
            </p>
            <button className="bg-black text-white py-3 px-7 rounded-3xl mt-11 hover:shadow-lg transition-shadow">
              تحميل التطبيق لإرسال الشكاوي
            </button>
          </div>
        </div>
      </div>
      <div className="w-full pt-16 pb-28 px-10 sm:px-16 xl:px-96 text-right flex gap-20 flex-col">
        <div>
          <h2 className="text-xl sm:text-3xl">
            شريكك في بيئة{" "}
            <span className="font-semibold bg-green-200 p-1">نظيفة</span>
          </h2>
          <p className="mt-4 text-lg">
            في شركة جرين سيريا،نمكنك من إرسال الشكاوي إلى الجهات المعنية. سواء
            كنت تبحث عن مناطق غير نظيفة أو وجدت حاويات ممتلئة، فإن برنامجنا مصمم
            مع وضع أهدافك في الاعتبار
          </p>
          <ul className="justify-self-center flex flex-col gap-8 mt-16 sm:text-lg">
            <li className="flex gap-3 items-center justify-end">
              <i className="fa-regular fa-circle-down fa-2x"></i>
              <div className="space-y-1 -order-1">
                <h2 className="font-semibold">تقليل النفايات</h2>
                <p>
                  النفايات أصبحت مشكلة كبيرة تهدد كوكبنا، لكن كل واحد منا يستطيع
                  أن يكون جزءًا من الحل!
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-center justify-end">
              <i className="fa-solid fa-seedling fa-2x"></i>
              <div className="space-y-1 -order-1">
                <h2 className="font-semibold ">حماية البيئة</h2>
                <p>
                  تقليل النفايات يعني تقليل القمامة في مكبات النفايات، مما يحافظ
                  على التربة والمياه من التلوث
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-center justify-end">
              <i className="fa-solid fa-trash-can-arrow-up fa-2x"></i>
              <div className="space-y-1 -order-1">
                <h2 className="font-semibold">توفير الموارد</h2>
                <p>
                  إعادة استخدام الأشياء بدلاً من رميها يقلل الحاجة لاستخراج مواد
                  خام جديدة مثل الأخشاب أو البترول
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex gap-3 bg-green-200 text-left justify-self-center self-center p-7 rounded-lg">
          <Image
            src={digitalFoundry}
            alt="image"
            className="size-12"
            data-src-desktop-1x={digitalFoundry}
          />
          <div className="space-y-3">
            <p className="sm:text-lg">
              What we are doing to the forests of the world is but a mirror
              reflection of what we are doing to ourselves and to one another.
            </p>
            <p className="text-right">
              إن ما نفعله بغابات العالم ما هو إلا انعكاس لما نفعله بأنفسنا
              وببعضنا البعض.
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold">― Chris Maser</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 bg-gray-200 pt-16 pb-28 px-10 sm:px-16 xl:px-72">
        <h1 className="text-xl sm:text-2xl md:text-4xl self-center text-center">
          Programs <span className="font-bold">Designed for Success</span> in
          the <br className="hidden sm:block" />
          Clean Environment
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="flex flex-col items-center justify-center text-center gap-3 rounded-xl bg-white p-5">
            <Image
              src={uiDesign}
              alt="image"
              className="size-24 mb-3"
              data-src-desktop-1x={uiDesign}
              data-src-mobile-1x={uiDesign}
            />
            <div>
              <h2 className="font-bold mb-1 text-lg">Our Vision</h2>
              <p>
                خلق بيئة نظيفة ومستدامة من خلال تمكين المجتمعات بأدوات ذكية
                لإدارة النفايات بكفاءة، وتعزيز الوعي البيئي والتعاون بين الأفراد
                والجهات المسؤولة
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-3 rounded-xl bg-white p-5">
            <Image
              src={uiImage02}
              alt="image"
              className="size-24 mb-3"
              data-src-desktop-1x={uiImage02}
              data-src-mobile-1x={uiImage02}
            />

            <div>
              <h2 className="font-bold mb-1 text-lg">Our Purpose</h2>
              <p>
                نسعى لتطوير تطبيق مبتكر يسهل على المستخدمين جدولة جمع النفايات،
                الإبلاغ عن المشكلات البيئية، وتلقي التنبيهات والنصائح لتقليل
                النفايات وإعادة التدوير.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-3 rounded-xl bg-white p-5">
            <Image
              src={uiImage03}
              alt=""
              className="size-24 mb-3 "
              data-src-desktop-1x={uiImage03}
              data-src-mobile-1x={uiImage03}
            />
            <div>
              <h2 className="font-bold mb-1 text-lg">
                Collaborating with the Governemnt{" "}
              </h2>
              <p>
                نهدف إلى تحسين كفاءة إدارة النفايات بالتعاون مع الجهات الحكومية،
                لضمان استجابة سريعة وفعالة، وبناء مجتمع أكثر نظافة ووعيًا
              </p>
            </div>
          </div>
          <div id="seperator" className="hidden md:block"></div>
          <div className="flex flex-col items-center justify-center text-center gap-3 rounded-xl bg-white p-5">
            <Image
              src={uiImage04}
              alt="image"
              className="size-24 mb-3"
              data-src-desktop-1x={uiImage04}
              data-src-mobile-1x={uiImage04}
            />
            <div>
              <h2 className="font-bold mb-1 text-lg">Analysis</h2>
              <p>
                إجراء إحصائيات مع عدد كبير من الأشخاص باستخدام النماذج ومشاركتها
                مع الآخرين
              </p>
            </div>
          </div>
        </div>
        <button className="bg-black text-white p-3 rounded-3xl mt-11 hover:shadow-lg transition-shadow max-w-96 w-full self-center">
          تحميل التطبيق لإرسال الشكاوي
        </button>
      </div>
      <div className="w-full pt-24 pb-28 px-10 sm:px-16 xl:px-60">
        <div className="content-center text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-5xl text-green-500">
            How does it work?
          </h1>
          <p className="text-gray-400">
            ماذا يحدث بعد الإبلاغ عن مكب نفايات غير قانوني؟
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex flex-col items-center justify-center gap-5 shadow-xl px-8 py-8 text-center border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 70 70"
              id="1977678084"
              className="w-32"
              data-icon-name="wp-mobile_phone_chat_thin">
              <g id="1903985155">
                <path
                  d="M27,16h4c0.6,0,1-0.4,1-1s-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1S26.4,16,27,16z"
                  id="1041326793"></path>
                <path
                  d="M31,54h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h4c0.6,0,1-0.4,1-1S31.6,54,31,54z"
                  id="1256229200"></path>
                <path
                  d="M57,31c0-7.2-5.2-13.3-12-14.7V13c0-1.7-1.3-3-3-3H16c-1.7,0-3,1.3-3,3v44c0,1.7,1.3,3,3,3h26c1.7,0,3-1.3,3-3V45.7
                        C51.8,44.3,57,38.2,57,31z M16,12h26c0.6,0,1,0.4,1,1v3.1c-0.3,0-0.7-0.1-1-0.1c-2.7,0-5.3,0.7-7.5,2H15v-5C15,12.4,15.4,12,16,12z
                        M42,58H16c-0.6,0-1-0.4-1-1v-5h28v5C43,57.6,42.6,58,42,58z M43,50H15V20h16.8c-3,2.7-4.8,6.7-4.8,11c0,2.8,0.8,5.5,2.2,7.9
                        l-2.2,5.8c-0.1,0.4,0,0.8,0.2,1.1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.4-0.1l5.8-2.2c2.4,1.5,5.1,2.2,7.9,2.2c0.3,0,0.7,0,1-0.1
                        V50z M42,44c-2.6,0-5.1-0.8-7.2-2.2c-0.2-0.1-0.4-0.2-0.6-0.2c-0.1,0-0.2,0-0.4,0.1l-4.2,1.6l1.6-4.2c0.1-0.3,0.1-0.6-0.1-0.9
                        C29.8,36.1,29,33.6,29,31c0-7.2,5.8-13,13-13c7.2,0,13,5.8,13,13S49.2,44,42,44z"
                  id="1151539687"></path>
                <circle cx="35.5" cy="31.5" r="1.5" id="1295254601"></circle>
                <circle cx="42.5" cy="31.5" r="1.5" id="1569777098"></circle>
                <circle cx="49.5" cy="31.5" r="1.5" id="1565247320"></circle>
              </g>
            </svg>
            <h2 className="font-bold text-green-500 text-xl sm:text-3xl">
              1.You report an illegal dump
            </h2>
            <p>
              لقد عثرت على مكب نفايات غير قانوني، والتقطت صورة وأبلغت عنها
              باستخدام تطبيق الجوال
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 shadow-xl px-8 py-8 text-center border bg-green-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 70 70"
              id="1862617472"
              className="w-32"
              data-icon-name="wp-caht_thin">
              <g id="1316543191">
                <path
                  d="M57,12H13c-1.7,0-3,1.3-3,3v32c0,1.7,1.3,3,3,3h16l6,8l6-8h16c1.7,0,3-1.3,3-3V15C60,13.3,58.7,12,57,12z M58,47
                        c0,0.6-0.4,1-1,1H40l-5,6.7L30,48H13c-0.6,0-1-0.4-1-1V15c0-0.6,0.4-1,1-1h44c0.6,0,1,0.4,1,1V47z"
                  id="1435376203"></path>
                <rect
                  x="20"
                  y="38"
                  width="30"
                  height="2"
                  id="1645529775"></rect>
                <rect
                  x="20"
                  y="30"
                  width="30"
                  height="2"
                  id="1917386756"></rect>
                <rect
                  x="20"
                  y="22"
                  width="30"
                  height="2"
                  id="1604276218"></rect>
              </g>
            </svg>
            <h2 className="font-bold text-green-500 text-xl sm:text-3xl">
              2.Relevant people get notified
            </h2>
            <p>
              سيتم إخطار المنظمات البيئية والبلديات والأفراد المهتمين الذين
              اشتركوا في تلقي الإشعارات عبر البريد الإلكتروني
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 shadow-xl px-8 py-8 text-center border bg-green-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              id="1022973112"
              className="w-32"
              data-icon-name="general_dustpan_with_crumbs">
              <path
                d="M44.08,74.52a5,5,0,0,1-1.77-.66c-.76-.37-1.85-.92-3.25-1.64-2.34-1.21-5.57-2.91-9.6-5.06-6.86-3.66-13.75-7.4-13.82-7.44a1,1,0,0,1-.41-.42,1,1,0,0,1-.47-.21c-2.46-2-1.22-5.52-1.17-5.67a1,1,0,0,1,.4-.5l29-18.85c.43-.33,3.76-2.73,6.82-1.12,2.64,1.39,22,11.85,22.18,12l.14.09a3.63,3.63,0,0,1,.7,4.7c-.24.45-.74,1.38-14.6,10.83-5.75,3.92-11.48,7.72-13.1,8.8,0,1.64,0,3.79,0,4.12a1,1,0,0,1-.48.91A1,1,0,0,1,44.08,74.52ZM16.29,57.83a1,1,0,0,1,.32.11c9,4.91,22.3,12,26.45,14,0-1.29,0-2.93,0-3.2a1,1,0,0,1,.45-.84c10-6.62,26.32-17.67,27.5-19.22a1.63,1.63,0,0,0-.13-2.08c-1.46-.79-19.54-10.56-22.07-11.9-2-1.08-4.64.93-4.67.95l-.07.05L15.41,54.41c-.16.66-.42,2.26.63,3.11A1,1,0,0,1,16.29,57.83Z"
                id="1996646860"></path>
              <path
                d="M17,58.8a1,1,0,0,1-.41-1.94L42.09,45.49a7.25,7.25,0,0,1,6.77-.14c1.88.91,14.47,8.49,15,8.82a1,1,0,1,1-1,1.73c-4.51-2.71-13.41-8-14.85-8.73a5.2,5.2,0,0,0-4.87.07l-.13.07L17.41,58.71A1,1,0,0,1,17,58.8Z"
                id="1802145659"></path>
              <path
                d="M45.28,74.52a1,1,0,0,1-.42-1.94l26-11.77c.73-.43,1.79-1.34,1.81-2,0-1.24-.94-8.84-1.17-11.66a1,1,0,0,1,2-.16c0,.42,1.22,10.28,1.17,11.88-.06,2.08-2.58,3.57-2.87,3.73l-.08,0L45.7,74.43A1,1,0,0,1,45.28,74.52Z"
                id="1455740167"></path>
              <path
                d="M68.33,42.69a1,1,0,0,1-1-1.33c.15-.46.19-.58,9.29-6.53,4.09-2.68,8.22-5.35,8.74-5.68s2.35-2.16,1-3.85-5-.22-6.21.4L58.07,37.47a1,1,0,0,1-1-1.79L79.24,23.89c.26-.14,6.15-3.1,8.73.13,2.15,2.69.07,5.57-1.33,6.72l-.09.07c-6.28,4.06-16.47,10.7-17.46,11.53A1,1,0,0,1,68.33,42.69Z"
                id="1450693516"></path>
              <circle cx="83.06" cy="26.73" r="0.95" id="1938001843"></circle>
              <path
                d="M14.56,70A3.46,3.46,0,1,1,18,66.51,3.46,3.46,0,0,1,14.56,70Zm0-4.89A1.43,1.43,0,1,0,16,66.51,1.43,1.43,0,0,0,14.56,65.08Z"
                id="1220521739"></path>
              <path
                d="M17.87,77.48a2.93,2.93,0,1,1,2.93-2.93A2.94,2.94,0,0,1,17.87,77.48Zm0-3.84a.91.91,0,1,0,.91.91A.91.91,0,0,0,17.87,73.64Z"
                id="1216429219"></path>
              <circle cx="21.68" cy="67.68" r="2.18" id="1800599494"></circle>
              <circle cx="30.84" cy="57.73" r="2.18" id="1216142267"></circle>
              <circle cx="37.92" cy="63.23" r="2.18" id="1752722554"></circle>
              <circle cx="40.01" cy="55.64" r="2.18" id="1067635155"></circle>
            </svg>
            <h2 className="font-bold text-green-500 text-xl sm:text-3xl">
              3.Cleaning event is organized
            </h2>
            <p>
              تنظم منظمة بيئية أو بلدية أو ناشط محلي حدث تنظيف. يمكنك حتى
              المشاركة
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 shadow-xl px-8 py-8 text-center border bg-green-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 70 70"
              id="1499870676"
              className="w-32 fill-white"
              data-icon-name="wp-checked_icon">
              <g id="1010386764">
                <path
                  d="M35,60c-13.8,0-25-11.2-25-25s11.2-25,25-25s25,11.2,25,25S48.8,60,35,60z M35,12c-12.7,0-23,10.3-23,23s10.3,23,23,23
                        s23-10.3,23-23S47.7,12,35,12z"
                  id="1278041624"></path>
                <polygon
                  points="32,43.4 23.3,34.7 24.7,33.3 32,40.6 48.3,24.3 49.7,25.7 	"
                  id="1468397409"></polygon>
              </g>
            </svg>
            <h2 className="font-bold text-xl sm:text-3xl">
              4.Dump you&apos;ve reported is cleaned up
            </h2>
            <p>
              بعد الحدث، سيتم إعلامك بأن مكب النفايات الذي أبلغت عنه قد تم
              تنظيفه. انتقل إلى الحدث التالي
            </p>
          </div>
        </div>
      </div>
      <div className="w-full pt-16 pb-28 px-10 sm:px-16 xl:px-72">
        <div className="grid grid-cols-12 grid-rows-12 max-h-[600px] gap-5">
          <Image
            src={trash4}
            alt="image"
            className="hidden sm:block col-span-6 row-span-full size-full shadow-lg border"
          />
          <Image
            src={trash2}
            alt="image"
            className="col-span-full sm:col-span-6 row-span-6 size-full shadow-lg border"
          />
          <Image
            src={trash1}
            alt="image"
            className="col-span-full sm:col-span-6 row-span-6 size-full shadow-lg border"
          />
        </div>
      </div>
      <footer className="bg-white shadow flex items-center justify-center border-t p-4 sm:p-6 xl:p-8 ">
        <p className="mb-4 text-sm text-center sm:mb-0 w-fit ">
          &copy; 2025 Green Syria. All rights reserved.
        </p>
      </footer>
    </>
  );
}

import MenuNmber from '../lib/MenuNmber.js';
import { video } from './video.js';
import { photo } from './photo.js';
import { sticker } from './sticker.js';
import fs from 'fs-extra';

export const menu = {

  async exec({ from, body, ctx, Markup, client }) {

    if (body === '1'){

      MenuNmber(from,1);

      let but_1 = [Markup.button.callback('أدريس أبكر', 'idris'),Markup.button.callback('ماهر المعيقلي', 'mahar')];
      let but_2 = [Markup.button.callback('عبد الله الموسى', 'almosa'),Markup.button.callback('علي جابر', 'alli')];
      let but_3 = [Markup.button.callback('عبدالرحمن السديس', 'Alsudais'),Markup.button.callback('خالد الجليل', 'Galilee')];
      let but_4 = [Markup.button.callback('رجوع', 'start')]
      let button = Markup.inlineKeyboard([but_1, but_2, but_3, but_4]);
      let quran_menu = 'قم بإختيار القارئ 🔊 \n\n'
      quran_menu += '1- أدريس أبكر \n'
      quran_menu += '2- ماهر المعيقلي \n'
      quran_menu += '3- عبدالله الموسى \n'
      quran_menu += '4- علي جابر \n'
      quran_menu += '5- عبدالرحمن السديس \n'
      quran_menu += '6- خالد الجليل \n\n\n'
      quran_menu += '【 للرجوع للقائمة الرئيسية أرسل #️ 】'
      
      await ctx.reply(quran_menu, button).catch((erro) => console.log(erro));

    }

    else if (body === '2'){

      MenuNmber(from, 6);

      let adhkar_menu = '1- أذكار الصباح ☀️ \n'
      adhkar_menu += '2- أذكار المساء 🌑 \n'
      adhkar_menu += '3- أذكار النوم 😴 \n'
      adhkar_menu += '4- أذكار عشوائية 🔄 \n'
      adhkar_menu += '5- أدعية نبوية 🤲 \n'
      adhkar_menu += '6- أذكار عند سماع الآذان 📢 \n'
      adhkar_menu += '7- أذكار المسجد 🕌 \n'
      adhkar_menu += '8- أذكار الوضوء 💦 \n'
      adhkar_menu += '9- أذكار دخول وخروج المنزل 🏠\n'
      adhkar_menu += '10- أذكار الخلاء 🚻 \n'
      adhkar_menu += '11- أذكار الطعام 🥣 \n'
      adhkar_menu += '12- دُعَاءُ خَتْمِ القُرْآنِ الكَريمِ 📖 \n\n\n'
      adhkar_menu += '【 للرجوع للقائمة الرئيسية أرسل #️ 】'
     
      await ctx.reply(adhkar_menu).catch((erro) => console.log(erro));

    }

    else if (body === '3'){

      let listvideo = video[Math.floor(Math.random() * video.length)]
      await ctx.replyWithVideo({url: listvideo})
      .catch((erro) => console.log(erro));

    }

    else if (body === '4'){

      let listphoto = photo[Math.floor(Math.random() * photo.length)]
      await ctx.replyWithPhoto({url: listphoto})
      .catch((erro) => console.log(erro));

    }
    
    else if (body === '5'){

      let liststicker = sticker[Math.floor(Math.random() * sticker.length)]
      await ctx.replyWithSticker({url: liststicker})
      .catch((erro) => console.log(erro));

    }

    else if (body === '6'){

      let question = await fs.readJson('./question.json').catch((error) => console.log(error));
      let number = Array.from(question.keys())
      let list = number[Math.floor(Math.random() * number.length)]
      let but_1 = Markup.button.callback(question[list].answer.asr, question[list].answer.id);
      let but_2 = Markup.button.callback(question[list].answer1.asr, question[list].answer1.id);
      let but_3 = Markup.button.callback(question[list].answer2.asr, question[list].answer2.id);
      let but = [[[but_1], [but_2], [but_3]],[[but_2], [but_1], [but_3]],[[but_3], [but_1], [but_2]],[[but_2], [but_3], [but_1]],[[but_1], [but_3], [but_2]]]
      let random = but[Math.floor(Math.random() * but.length)]
      let button = Markup.inlineKeyboard(random);

      await ctx.reply(question[list].question, button)
      .then(async (data) => setTimeout(async () => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)) , 120000))
      .catch((error) => console.log(error));

      client.action(question[list].answer.id, async (ctx) => {

        await ctx.reply("إجابة صحيحة ✔️")
        .then(async (data) => setTimeout(async () => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)) , 10000))
        .catch((error) => console.log(error));

      });

      client.action(question[list].answer1.id, async (ctx) => {

        await ctx.reply("إجابة خاطئة ❌")
        .then(async (data) => setTimeout(async () => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)) , 10000))
        .catch((error) => console.log(error));

      });

      client.action(question[list].answer2.id, async (ctx) => {

        await ctx.reply("إجابة خاطئة ❌")
        .then(async (data) => setTimeout(async () => ctx.deleteMessage(data.message_id).catch((error) => console.log(error)) , 10000))
        .catch((error) => console.log(error));

      });

    }

    else if (body === '7'){
      
      let LecturesJson = fs.readJsonSync('./menu/Lectures.json');
      let listlectures = LecturesJson[Math.floor(Math.random() * LecturesJson.length)]
      let msg = `✽\n\n${listlectures.Lectures}\n\n`
      msg += `الشيخ: ${listlectures.Author} 🔊`
      await ctx.replyWithVideo({url: listlectures.FilePath}, {caption : msg })
      .catch((erro) => console.log(erro));

    }

    else if (body === '8'){

      MenuNmber(from, 9);

      let msg = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مقروؤاً ومرئياً \n\n'
      msg += 'محتوياتُ (البِطَاقَات):\n\n'
      msg += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
      msg += '1- آيَـــــــــــــــاتُـــــها \n'
      msg += '2- مَعــــــنَـى اسْـــــــمِها \n'
      msg += '3- سَبَبُ تَسْمِيَتِها \n'
      msg += '4- أَسْـــــمَاؤُهـا \n'
      msg += '5- مَقْصِدُها العَامُّ \n'
      msg += '6- سَبَبُ نُزُولِهَا \n'
      msg += '7- فَضْــــــلُها \n'
      msg += '8- مُنَــاسَــبَاتُــها \n\n'
      msg += '⚠️ لإرسال البطاقة صورة وصوت قم بإرسال رقم السورة او إسم السورة \n\n\n'
      msg += '【 للرجوع للقائمة الرئيسية أرسل #️ 】'
     
      await ctx.reply(msg).catch((erro) => console.log(erro));

    }

    else if (body === '9'){

      MenuNmber(from, 10);

      let hisn_almuslim_json = fs.readJsonSync('./menu/hisn_almuslim.json')
      let key = Object.keys(hisn_almuslim_json);
      let msg = 'من فضلك قم بإرسال رقم الدعاء او الذكر من القائمة التالية ✉️\n\n'
      let number = 1
      
      for (let lop of key) {
      
        msg += `${number ++}- ${lop}\n`
          
      }
      
      msg += '\n\n\n【 للرجوع للقائمة الرئيسية أرسل #️ 】'
     
      await ctx.reply(msg).catch((erro) => console.log(erro));

    }

    else if (body === 'dbjson'){
      
      await ctx.replyWithDocument({source: './db/user.json'})
      .catch((erro) => console.log(erro));
      
      await ctx.replyWithDocument({source: './db/Menu.json'})
      .catch((erro) => console.log(erro));

    }
     
  }

};
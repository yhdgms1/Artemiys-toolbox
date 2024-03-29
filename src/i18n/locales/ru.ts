import { global, keys } from './shared'

const ru = {
  [`${keys[0]}.0` as const]: 'Счётчик длины текста',
  [`${keys[0]}.1` as const]: 'Введите текст сюда',
  [`${keys[0]}.2` as const]: 'Кол-во символов: ',
  [`${keys[0]}.3` as const]: 'Кол-во символов без учёта пробелов: ',
  [`${keys[1]}.0` as const]: 'Перевернуть текст задом наперёд',
  [`${keys[1]}.1` as const]: 'Текст задом наперёд будет тут',
  [`${keys[2]}.0` as const]: 'Цветовая Схема',
  [`${keys[2]}.1` as const]: 'Светлая',
  [`${keys[2]}.2` as const]: 'Системная',
  [`${keys[2]}.3` as const]: 'Тёмная',
  [`${keys[3]}.0` as const]: 'Открыть диалоговое окно настроек',
  [`${keys[3]}.1` as const]: 'Закрыть',
  [`${keys[3]}.2` as const]: 'Настройки',
  [`${keys[3]}.3` as const]: 'Язык',
  [`${keys[3]}.4` as const]: 'Авто',
  [`${keys[4]}.0` as const]: 'Повторитель текста',
  [`${keys[4]}.1` as const]: 'Повторить',
  [`${keys[4]}.2` as const]: 'это',
  [`${keys[4]}.3` as const]: 'столько',
  [`${keys[4]}.4` as const]: 'раз',
  [`${keys[5]}.0` as const]: 'Стилизуйте ваш [1337][LEGIT]~ТЕкст~',
  [`${keys[5]}.1` as const]: 'Введите текст, чтобы swagify',
  [`${keys[6]}.0` as const]: 'Выберите стандарт транслитерации',
  [`${keys[6]}.1` as const]: 'Схема транслитерации {{name}}',
  [`${keys[6]}.2` as const]: 'Транслитерация',
  [`${keys[6]}.3` as const]: 'Текущая схема - {{schema}}',
  [`${keys[6]}.4` as const]: 'Введите сюда текст',
  [`${keys[6]}.5` as const]: 'Транслитерированный текст будет здесь',
  [`${keys[6]}.6` as const]: 'Транслитерировать',
  [`${keys[6]}.7` as const]: 'Схема не существует',
  [`${keys[6]}.8` as const]: 'посмотреть существующие',
  [`${keys[7]}.0` as const]: 'Выберите метод',
  [`${keys[7]}.1` as const]: 'Отправить',
  [`${keys[7]}.2` as const]: 'Взглянуть',
  [`${keys[7]}.3` as const]: 'Ошибка',
  [`${keys[7]}.4` as const]: 'Создано успешно',
  [`${keys[7]}.5` as const]: 'Непредвиденная ошибка',
  [`${keys[7]}.6` as const]: 'Шаблон',
  [`${keys[7]}.7.0` as const]: 'id или shortname',
  [`${keys[7]}.8.0` as const]: 'Имя',
  [`${keys[7]}.8.1` as const]: 'Картинка',
  [`${keys[7]}.9.0` as const]: 'Идентификатор',
  [`${keys[7]}.9.1` as const]: 'Успешно удалено',
  [`${keys[7]}.10.0` as const]: 'Создать, используя шаблон {{template}}',
  // prettier-ignore
  [`${keys[7]}.10.1` as const]: 'Заполните поля выше, чтобы приступить к созданию картинки',
  [`${keys[7]}.10.2` as const]: 'Дополнительные опции',
  [`${keys[7]}.10.3` as const]: 'Ширина картинки',
  [`${keys[7]}.10.4` as const]: 'Высота картинки',
  [`${keys[7]}.10.5` as const]: 'Использовать формат изображений SVG',
  [`${keys[7]}.11.0` as const]: 'Найти профиль',
  // prettier-ignore
  [`${keys[7]}.home.0` as const]: 'добавить на сайт автоматически, используя профиль ВКонтакте',
  // prettier-ignore
  [`${keys[7]}.home.1` as const]: 'добавить на сайт, заполнив вручную все необходимые поля',
  [`${keys[7]}.home.2` as const]: 'удалить человека с сайта',
  // prettier-ignore
  [`${keys[7]}.home.3` as const]: 'создать картинку, не добавляя человека на сайт',
  // prettier-ignore
  [`${keys[7]}.home.4` as const]: 'создать картинку автоматически используя профиль ВКонтакте, не добавляя человека на сайт',
  [`${keys[8]}.0` as const]: 'Изменение регистра текста',
  [`${keys[8]}.1` as const]: 'К прописным буквам',
  [`${keys[8]}.2` as const]: 'К строчным буквам',
  [`${keys[8]}.3` as const]: 'К случайным буквам',
  [`${keys[9]}.0` as const]: 'Заменитель точек для сообщений в чате',
  [`${keys[9]}.1` as const]: 'Заменить точки',
  [`${keys[9]}.2` as const]: 'Вернуть обратно',
  [`${keys[9]}.3` as const]: ' (точка) ',
  [`${keys[10]}.0` as const]: 'Вибратор',
  [`${keys[10]}.1` as const]: 'Вибрировать',
  [`${keys[10]}.2` as const]: 'Остановить',
  [`${keys[11]}.0` as const]: 'Хэшировать',
  [`${global}.0` as const]: 'Скопировать',
  [`${global}.1` as const]: 'Скопировано',
  [`${global}.2` as const]: 'Ошибка',
  [`${global}.3` as const]: 'Страница не существует',
  [`${global}.4` as const]: 'Произошла ошибка',
  [`${global}.5` as const]: 'Доступно новое обновление',
  [`${global}.6` as const]: 'Нажмите на кнопку перезагрузки для обновления',
  [`${global}.7` as const]: 'Перезагрузить',
  [`${global}.8` as const]: 'Закрыть',
  [`${global}.9` as const]: 'Введите текст сюда',
  [`${global}.10` as const]: 'Результат будет тут',
  [`${global}.11` as const]: 'назад',
  // prettier-ignore
  [`${global}.home.0` as const]: 'Подсчитать количество символов в тексте, включая эмодзи',
  [`${global}.home.1` as const]: 'Повторить строку много раз',
  [`${global}.home.2` as const]: 'Транслитерировать кириллицу в латиницу',
  [`${global}.home.3` as const]: 'Swagify любое предложение или слОво Xx',
  [`${global}.home.4` as const]: 'Переворот текста задом наперёд',
  // prettier-ignore
  [`${global}.home.5` as const]: 'Унижайте людей показывая их на фальшивом сайте проституток',
  [`${global}.home.6` as const]: 'изменение РЕГИСТРА тЕКстА',
  // prettier-ignore
  [`${global}.home.7` as const]: 'Заменить "." на " (точка) ", чтобы поделиться ссылкой в чате',
  [`${global}.home.8` as const]: 'Просто вибратор',
  [`${global}.home.9` as const]:
    'Используйте хэш-функцию murmur в вашем браузере',
  [`${global}.home.10` as const]: 'Утилиты строкового регистра',
  [`${global}.home.11` as const]: 'Приблуды для формул Excel',
} as const

export default ru

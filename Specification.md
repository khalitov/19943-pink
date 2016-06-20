# Техническое задание на вёрстку

* Название сайта: Пинк
--

## Общие технические требования

- Сетка: определена в макете.
- Адаптивность сетки: мобильная, планшетная, десктопная версии.
- Адаптивность графики: ретинизация, векторные изображения.
- Используемые методологии: БЭМ.
- Используемые препроцессоры: LESS.
- Используемые инструменты автоматизации: Gulp.
- Используемые фреймворки: нет.
- Кроссбраузерность: Chrome, Firefox, Opera, Safari, Edge и IE11.
- Типографика: частично определена в макете (прочее — на усмотрение разработчика).
- Используемые шрифты: Open Sans.

## Пожелания к поведению блоков

### Все макеты

- Между версиями (мобильная, планшетная, десктопная) сетка может быть как резиновой, так и фиксированной.
- При фиксированной сетке контентная область центрируется и не может быть уже макетной ширины.
- Логотип на внутренних страницах — это ссылка на главную страницу.
- Блок с главным меню на мобильной и планшетной версии открывается при нажатии на инонку «гамбургера», накладываясь на шапку сайта (в блоке слоёв фотошопа выделены красным цветом). При этом иконка «гамбургера» заменяется на иконку «креста».
- При нажатии на иконку «креста» меню должно закрываться.
- Все состояния элементов при наведении и нажатии указаны в макете pink-styleguide.psd

### Главная

#### Мобильная версия (pink-index-mobile.psd):

- Логотип состоит только из названия приложения «Пинк».
- Кнопка в блоке «Скачать приложение» ведёт на маркет по умолчанию (itunes).
- Иконки в блоке «Скачать приложение» являются так же ссылками и ведут на соответствующие маркеты.
- Блок «Отзывы»: пролистывание отзывов реализовывать не обязательно. Достаточной реализацией будут свёрстанные 3 отзыва.
- Блок «Тарифы»: пролистывание тарифов реализовывать не обязательно. Достаточной реализацией будут свёрстанные 3 тарифа.
- Блок карты: необходимая реализация — интерактивная карта (карты Google или Яндекса), высота карты подстраивается под высоту футера, ширина подстраивается под ширину вьюпорта (но не уже контентной ширины макета), на карте размещён маркер (может быть как кастомным, так и дефолтным), центр карты соответствует центру блока в макете.

#### Планшетная версия (pink-index-tablet.psd):

- Блоки меняют размеры и расположение согласно макету.
- В составе логотипа добавляются новые элементы.
- Блок «Тарифы» располагается по центру страницы и не имеет элементов управления для переключения.
- После карты добавляется блок футера.

#### Десктопная версия (pink-index-desktop.psd):

- Блоки меняют размеры и расположение согласно макету.
- В составе логотипа добавляются новые элементы.
- Главное меню открыто всегда вне зависимости от его состояния на мобильной и планшетной версии.
- В блоке «Отзывы» меняются элементы управления для переключения.

### Форма

#### Мобильная версия (pink-form-mobile.psd):

- Должны быть реализованы кастомные элементы форм.
- Поля для ввода телефона и почты должны быть сделаны с верным типом для удобного заполнения с телефона.

#### Планшетная версия (pink-form-tablet.psd):

- Блоки меняют размеры и расположение согласно макету.

#### Десктопная версия (pink-form-desktop.psd):

- Блоки меняют размеры и расположение согласно макету.

### Страница с фотографиями пользователей

#### Мобильная версия (pink-photo-mobile.psd):
- Все изображения являются ссылками на полноразмерный вариант (открытие полноразмерного изображения реализовывать не нужно).
- Инструмент обработки изображений в блоке перед футером реализовывать не нужно, достаточно только вёрстки.
- У каждого элемента обработки изображений есть свой «ползунок» для настройки, но в мобильной версии показывается только активный.
- Кнопка «Запостить» отправляет форму с обработанным изображением на сайт (реализовывать не нужно).
- Кнопка «Отмена» сбрасывает все настройки фильтров с исходное состояние (реализовывать не нужно).

#### Планшетная версия (pink-photo-tablet.psd):

- Блоки меняют размеры и расположение согласно макету.

#### Десктопная версия (pink-photo-desktop.psd):

- Блоки меняют размеры и расположение согласно макету.
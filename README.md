# Genealogy Tree Showcase

Интерактивная презентация популярных библиотек для визуализации генеалогических деревьев. Каждый пример — отдельный маршрут с одними демо-данными (семья Петровых).

## Демо

После деплоя сайт доступен на GitHub Pages: `https://<username>.github.io/<repo>/`  
Для репозитория `shappoff/gTree`: `https://shappoff.github.io/gTree/`

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## Маршруты

| Маршрут | Библиотека |
|---------|------------|
| `#/` | Обзор и сравнительная таблица |
| `#/family-chart` | [family-chart](https://github.com/donatso/family-chart) — D3, интерактивные карточки |
| `#/dtree` | [d3-dtree](https://github.com/ErikGartner/dTree) — классическое pedigree-дерево |
| `#/topola` | [Topola](https://github.com/PeWu/topola) — GEDCOM, descendants chart |
| `#/famtreejs` | [@alexbrand09/famtreejs](https://github.com/alexbrand/famtreejs) — React, partnership model |
| `#/react-d3-tree` | [react-d3-tree](https://github.com/bkrem/react-d3-tree) — иерархическое дерево |
| `#/react-flow` | [React Flow](https://reactflow.dev) + Dagre — кастомный граф |
| `#/vis-network` | [vis-network](https://github.com/visjs/vis-network) — сетевой граф |
| `#/cytoscape` | [Cytoscape.js](https://js.cytoscape.org) + dagre — анализ графов |
| `#/d3-pedigree` | D3.js — кастомная pedigree-диаграмма (квадрат/круг) |
| `#/balkan` | [BALKAN FamilyTree JS](https://balkan.app/FamilyTreeJS) — коммерческое решение |

## Деплой на GitHub Pages

1. Запушьте код в ветку `main`
2. Откройте **Settings → Pages → Build and deployment**
3. В поле **Source** выберите **GitHub Actions** (не «Deploy from a branch»)
4. Перезапустите workflow: **Actions → Deploy to GitHub Pages → Re-run all jobs**

> Ошибка `Failed to create deployment (status: 404)` означает, что Pages ещё не включён  
> или источник не установлен в **GitHub Actions**. После включения деплой пройдёт при повторном запуске.

## Стек

- React 18 + TypeScript + Vite
- React Router (HashRouter для совместимости с GitHub Pages)
- GitHub Actions для CI/CD

import React from 'react';

const RED_PATH = 'M1820 288L1777 342L1777 463L1771 478L1759 489L1748 493L1665 493L1625 545L1626 546L1644 550L1764 550L1784 545L1796 539L1806 532L1822 516L1834 495L1839 476L1840 336L1839 327L1833 308ZM1752 242L1625 242L1608 247L1595 254L1574 273L1566 285L1561 296L1556 319L1556 455L1559 469L1566 486L1613 426L1613 326L1620 312L1629 304L1647 298L1709 298ZM1808 195L1731 294L1706 329L1575 501L1609 537L1622 522L1809 276ZM1686 69L1672 72L1658 78L1639 93L1628 108L1622 121L1618 147L1621 165L1629 183L1648 204L1664 213L1675 217L1686 219L1702 219L1719 215L1734 208L1755 189L1761 180L1768 164L1771 140L1768 123L1761 106L1750 91L1741 83L1720 72L1707 69Z';
const BLACK_PATH = 'M1900 178L1824 178L1824 259Z';

export const DotzeroSignature: React.FC = () => (
  <a
    href="https://dotzero.ch"
    target="_blank"
    rel="noreferrer"
    aria-label="DOTZERO — Personal Research Lab"
    title="DOTZERO — Personal Research Lab"
    className="hidden md:inline-flex items-center gap-2 border-r border-[var(--atlas-border)] pr-2.5 mr-0.5 text-[var(--atlas-text)] opacity-60 transition-opacity hover:opacity-100 focus-visible:opacity-100"
  >
    <span className="hidden 2xl:flex flex-col items-end font-mono uppercase leading-[1.05]">
      <span className="text-[7px] tracking-[0.18em]">DOTZERO /</span>
      <span className="mt-0.5 text-[6px] tracking-[0.14em] text-[var(--atlas-text-muted)]">Personal Research Lab</span>
    </span>
    <svg
      viewBox="1545 55 370 510"
      className="h-[18px] w-auto shrink-0"
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d={RED_PATH} fill="#F70B0D" fillRule="evenodd" />
      <path d={BLACK_PATH} fill="currentColor" />
    </svg>
  </a>
);

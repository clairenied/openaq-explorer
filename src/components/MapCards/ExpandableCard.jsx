import { createSignal } from 'solid-js';
import { useStore } from '../../stores';
import {
  LowCostSensorMarker,
  NoRecentUpdateMarker,
  PoorCoverageMarker,
  ReferenceGradeMarker,
} from '../LocationMarker';
import Accordion from './Accordion';

export function ExpandableCard(props) {
  const [open, setOpen] = createSignal(props.open || false);
  const [store] = useStore();

  const toggleOpen = () => setOpen(!open());

  return (
    <div
      className={`expandable-card ${
        store.help.active || store.id
          ? 'expandable-card--translate'
          : ''
      }`}
    >
      <div className="expandable-card__header" onClick={toggleOpen}>
        <div style="display:flex; align-items:center;">
          <span class="material-symbols-outlined white">layers</span>
          <h3 className="type-heading3 text-white">
            {open() ? 'Overlay' : 'Overlay & Filters'}
          </h3>
        </div>
        <span class="material-symbols-outlined clickable-icon white">
          {open() ? 'expand_less' : 'expand_more'}
        </span>
      </div>
      <div
        className={
          open()
            ? 'expandable-card__body expandable-card__body--open'
            : 'expandable-card__body'
        }
      >
        {props.children}
      </div>
    </div>
  );
}

export default function FilterOverlayCard() {
  const [store, { loadParameter, toggleProviderList }] = useStore();

  return (
    <ExpandableCard open={true}>
      <div>
        <section>
          <Accordion />
        </section>
        <section className="filters-section">
          <header className="expandable-card__header">
            <div style="display:flex; align-items:center;">
              <span class="material-symbols-rounded white">
                filter_alt
              </span>
              <h3 className="type-heading3 text-white">Filters</h3>
            </div>
          </header>
          <div style="margin: 16px 15px;">
            <div style="width: 250px; display:grid; grid-template-columns: 1fr 4fr 1fr; grid-auto-rows: 1fr; row-gap: 8px; margin-bottom:12px;">
              <ReferenceGradeMarker />
              <label htmlFor="reference-grade">
                Reference grade locations
              </label>
              <div>
                <input
                  type="checkbox"
                  name="reference-grade"
                  id="reference-grade"
                  className="checkbox"
                  checked
                />
              </div>
              <LowCostSensorMarker />
              <label htmlFor="low-cost-sensor">
                {' '}
                Low-cost sensors locations
              </label>
              <div>
                <input
                  type="checkbox"
                  name="low-cost-sensor"
                  id="low-cost-sensor"
                  className="checkbox"
                  checked
                />
              </div>
              <NoRecentUpdateMarker />

              <label htmlFor="no-recent-updates">
                Show locations with no recent updates
              </label>
              <div>
                <input
                  type="checkbox"
                  name="no-recent-updates"
                  id="no-recent-updates"
                  className="checkbox"
                  checked
                />
              </div>
              <PoorCoverageMarker />
              <label htmlFor="poor-data-coverage">
                Show locations with Poor data coverage
              </label>
              <div>
                {' '}
                <input
                  type="checkbox"
                  name="poor-data-coverage"
                  id="poor-data-coverage"
                  className="checkbox"
                  checked
                />
              </div>
            </div>
          </div>
          <div className="expandable-card__footer">
            <div>
              <span>Showing data from {} providers</span>
            </div>
            <button
              className="btn btn-secondary icon-btn"
              onClick={() => toggleProviderList(true)}
            >
              Choose data providers
              <span class="material-symbols-outlined green">
                tune
              </span>
            </button>
          </div>
        </section>
      </div>
    </ExpandableCard>
  );
}

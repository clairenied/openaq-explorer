import { useStore } from '../../stores';

export default function MapLegend() {
  const [store, { toggleHelp, loadContent }] = useStore();

  const showHelp = (e) => {
    toggleHelp(true);
    loadContent('legend');
    e.stopPropagation();
  };

  return (
    <div className="map-legend">
      <div className="map-legend__body">
        <div className="legend-section">
          <div>
            <span>
              {store.parameter.parameterName} ({store.parameter.unit})
            </span>
            <span class="map-legend-title">
              Most recent measurements
            </span>
          </div>
          <div className="legend-bar">
            <div style="flex: 1; background-color: #CEC7FF;"></div>
            <div style="flex: 1; background-color: #A497FD;"></div>
            <div style="flex: 1; background-color: #8F81EE;"></div>
            <div style="flex: 1; background-color: #7867EB;"></div>
            <div style="flex: 1; background-color: #6A5CD8;"></div>
            <div style="flex: 1; background-color: #584DAE;"></div>
            <div style="flex: 1; background-color: #241050;"></div>
          </div>
          <div className="legend-bar-labels">
            <span>0</span>
            <span>50</span>
            <span>500</span>
          </div>
        </div>
        <div className="legend-help-section">
          <span
            class="material-symbols-outlined clickable-icon"
            onClick={(e) => showHelp(e)}
          >
            help
          </span>
          <span>Help</span>
        </div>
      </div>
    </div>
  );
}

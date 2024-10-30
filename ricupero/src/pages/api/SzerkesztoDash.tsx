import React from 'react';
import { GepparkItem, DemaszData,FuvarData, GepparkData, DashboardData, UtepitesData, UtseproData, KontenerData } from '../../components/types';



interface FormEditProps {
  sectionEditing: GepparkItem | null;
  setSectionEditing: (item: GepparkItem | null) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  cancelEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FormEdit: React.FC<FormEditProps> = ({
  sectionEditing,
  setSectionEditing,
  handleSubmit,
  cancelEdit,
}) => {
  if (!sectionEditing) return null;

  return (
    <form onSubmit={handleSubmit}>
      {sectionEditing.title && (
        <div className="mb-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Cím</label>
          <input
            type="text"
            name="title"
            value={sectionEditing.title || ''}
            onChange={(e) => setSectionEditing({ ...sectionEditing, title: e.target.value })}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>
      )}
      {sectionEditing.body && (
        <div className="mb-2">
          <label htmlFor="body" className="block text-sm font-medium text-gray-700">Törzs</label>
          <textarea
            name="body"
            value={sectionEditing.body || ''}
            onChange={(e) => setSectionEditing({ ...sectionEditing, body: e.target.value })}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>
      )}
      {sectionEditing.description && (
        <div className="mb-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Leírás</label>
          <input
            type="text"
            name="description"
            value={sectionEditing.description || ''}
            onChange={(e) => setSectionEditing({ ...sectionEditing, description: e.target.value })}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>
      )}
      {sectionEditing.prop1 && (
        <div className="mb-2">
          <label htmlFor="prop1" className="block text-sm font-medium text-gray-700">Tulajdonság 1</label>
          <input
            type="text"
            name="prop1"
            value={sectionEditing.prop1 || ''}
            onChange={(e) => setSectionEditing({ ...sectionEditing, prop1: e.target.value })}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>
      )}
      {sectionEditing.prop2 && (
        <div className="mb-2">
          <label htmlFor="prop2" className="block text-sm font-medium text-gray-700">Tulajdonság 2</label>
          <input
            type="text"
            name="prop2"
            value={sectionEditing.prop2 || ''}
            onChange={(e) => setSectionEditing({ ...sectionEditing, prop2: e.target.value })}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>
      )}
      {sectionEditing.prop3 && (
        <div className="mb-2">
          <label htmlFor="prop3" className="block text-sm font-medium text-gray-700">Tulajdonság 3</label>
          <input
            type="text"
            name="prop3"
            value={sectionEditing.prop3 || ''}
            onChange={(e) => setSectionEditing({ ...sectionEditing, prop3: e.target.value })}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>
      )}
      {sectionEditing.prop4 && (
        <div className="mb-2">
          <label htmlFor="prop4" className="block text-sm font-medium text-gray-700">Tulajdonság 4</label>
          <input
            type="text"
            name="prop4"
            value={sectionEditing.prop4 || ''}
            onChange={(e) => setSectionEditing({ ...sectionEditing, prop4: e.target.value })}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>
      )}
      <div className="flex flex-row justify-between mt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Mentés
        </button>
        <button
          type="button"
          onClick={cancelEdit}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Mégse
        </button>
      </div>
    </form>
  );
};

interface SzerkesztoDashProps {
  sectionName: keyof DemaszData;
  sectionTitle: string;
  data: DemaszData;
  editing: Record<string, any>;
  handleEdit: (item: GepparkItem | null, sectionName: keyof DemaszData) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, sectionName: keyof DemaszData) => void;
  cancelEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  highlightedSection: keyof DemaszData | null;
}

export const SzerkesztoDash: React.FC<SzerkesztoDashProps> = ({
  sectionName,
  sectionTitle,
  data,
  editing,
  handleEdit,
  handleSubmit,
  cancelEdit,
  highlightedSection,
}) => {
  const sectionEditing = editing[sectionName];

  const setSectionEditing = (item: GepparkItem | null) => {
    handleEdit(item, sectionName);
  };

  return (
    <div>
      <h1 className="pb-4 text-xl font-semibold text-white">{sectionTitle}</h1>
      {data[sectionName].map((item: GepparkItem) => (
        <div
          key={item.id}
          className={`mb-4 p-4 mr-2 md:mr-6 border rounded-md shadow-md hover:bg-gray-300 transition-background
            ${highlightedSection === sectionName ? 'bg-green-300' : 'bg-white'} ${highlightedSection === sectionName ? 'hover:bg-green-300' : 'hover:bg-300'}  text-black`}
         >
          {sectionEditing && sectionEditing.id === item.id ? (
            <FormEdit
              sectionEditing={sectionEditing}
              setSectionEditing={setSectionEditing}
              handleSubmit={(e) => handleSubmit(e, sectionName)}
              cancelEdit={cancelEdit}
            />
          ) : (
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>{item.body}</p>
                {item.description && <p>{item.description}</p>}
                {item.prop1 && <p>{item.prop1}</p>}
                {item.prop2 && <p>{item.prop2}</p>}
                {item.prop3 && <p>{item.prop3}</p>}
                {item.prop4 && <p>{item.prop4}</p>}
              </div>
              <button
                onClick={() => handleEdit(item, sectionName)}
                className="px-4 ml-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Szerkesztés
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

interface FuvarDataDashProps {
  sectionName: keyof FuvarData;
  sectionTitle: string;
  data: FuvarData;
  editing: Record<string, any>;
  handleEdit: (item: GepparkItem | null, sectionName: keyof FuvarData) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, sectionName: keyof FuvarData) => void;
  cancelEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  highlightedSection: keyof FuvarData | null;
}

export const FuvarDataDash: React.FC<FuvarDataDashProps> = ({
  sectionName,
  sectionTitle,
  data,
  editing,
  handleEdit,
  handleSubmit,
  cancelEdit,
  highlightedSection,
}) => {
  const sectionEditing = editing[sectionName];

  const setSectionEditing = (item: GepparkItem | null) => {
    handleEdit(item, sectionName);
  };

  return (
    <div>
      <h1 className="pb-4 text-xl font-semibold text-white">{sectionTitle}</h1>
      {data[sectionName].map((item: GepparkItem) => (
        <div
          key={item.id}
          className={`mb-4 p-4 mr-2 md:mr-6 border rounded-md shadow-md hover:bg-gray-300 transition-background
          ${highlightedSection === sectionName ? 'bg-green-300' : 'bg-white'} ${highlightedSection === sectionName ? 'hover:bg-green-300' : 'hover:bg-300'}  text-black`}
        >
          {sectionEditing && sectionEditing.id === item.id ? (
            <FormEdit
              sectionEditing={sectionEditing}
              setSectionEditing={setSectionEditing}
              handleSubmit={(e) => handleSubmit(e, sectionName)}
              cancelEdit={cancelEdit}
            />
          ) : (
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>{item.body}</p>
                {item.description && <p>{item.description}</p>}
                {item.prop1 && <p>{item.prop1}</p>}
                {item.prop2 && <p>{item.prop2}</p>}
                {item.prop3 && <p>{item.prop3}</p>}
                {item.prop4 && <p>{item.prop4}</p>}
              </div>
              <button
                onClick={() => handleEdit(item, sectionName)}
                className="px-4 ml-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Szerkesztés
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


interface GepparkDataDashProps {
  sectionName: keyof GepparkData;
  sectionTitle: string;
  data: GepparkData;
  editing: Record<string, any>;
  handleEdit: (item: GepparkItem | null, sectionName: keyof GepparkData) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, sectionName: keyof GepparkData) => void;
  cancelEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  highlightedSection: keyof GepparkData | null;
}

export const GepparkDataDash: React.FC<GepparkDataDashProps> = ({
  sectionName,
  sectionTitle,
  data,
  editing,
  handleEdit,
  handleSubmit,
  cancelEdit,
  highlightedSection,
}) => {
  const sectionEditing = editing[sectionName];

  const setSectionEditing = (item: GepparkItem | null) => {
    handleEdit(item, sectionName);
  };

  return (
    <div>
      <h1 className="pb-4 text-xl font-semibold text-white">{sectionTitle}</h1>
      {data[sectionName].map((item: GepparkItem) => (
        <div
          key={item.id}
          className={`mb-4 p-4 mr-2 md:mr-6 border rounded-md shadow-md hover:bg-gray-300 transition-background
            ${highlightedSection === sectionName ? 'bg-green-300' : 'bg-white'} ${highlightedSection === sectionName ? 'hover:bg-green-300' : 'hover:bg-300'}  text-black`}
        >
          {sectionEditing && sectionEditing.id === item.id ? (
            <FormEdit
              sectionEditing={sectionEditing}
              setSectionEditing={setSectionEditing}
              handleSubmit={(e) => handleSubmit(e, sectionName)}
              cancelEdit={cancelEdit}
            />
          ) : (
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>{item.body}</p>
                {item.description && <p>{item.description}</p>}
                {item.prop1 && <p>{item.prop1}</p>}
                {item.prop2 && <p>{item.prop2}</p>}
                {item.prop3 && <p>{item.prop3}</p>}
                {item.prop4 && <p>{item.prop4}</p>}
              </div>
              <button
                onClick={() => handleEdit(item, sectionName)}
                className="px-4 ml-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Szerkesztés
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

interface DashboardDataDashProps {
  sectionName: keyof DashboardData;
  sectionTitle: string;
  data: DashboardData;
  editing: Record<string, any>;
  handleEdit: (item: GepparkItem | null, sectionName: keyof DashboardData) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, sectionName: keyof DashboardData) => void;
  cancelEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  highlightedSection: keyof DashboardData | null;
}

export const DashboardDataDash: React.FC<DashboardDataDashProps> = ({
  sectionName,
  sectionTitle,
  data,
  editing,
  handleEdit,
  handleSubmit,
  cancelEdit,
  highlightedSection,
}) => {
  const sectionEditing = editing[sectionName];

  const setSectionEditing = (item: GepparkItem | null) => {
    handleEdit(item, sectionName);
  };

  return (
    <div>
      <h1 className="pb-4 text-xl font-semibold text-white">{sectionTitle}</h1>
      {data[sectionName].map((item: GepparkItem) => (
        <div
          key={item.id}
          className={`mb-4 p-4 mr-2 md:mr-6 border rounded-md shadow-md hover:bg-gray-300 transition-background
          ${highlightedSection === sectionName ? 'bg-green-300' : 'bg-white'} ${highlightedSection === sectionName ? 'hover:bg-green-300' : 'hover:bg-300'}  text-black`}
        >
          {sectionEditing && sectionEditing.id === item.id ? (
            <FormEdit
              sectionEditing={sectionEditing}
              setSectionEditing={setSectionEditing}
              handleSubmit={(e) => handleSubmit(e, sectionName)}
              cancelEdit={cancelEdit}
            />
          ) : (
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>{item.body}</p>
                {item.description && <p>{item.description}</p>}
                {item.prop1 && <p>{item.prop1}</p>}
                {item.prop2 && <p>{item.prop2}</p>}
                {item.prop3 && <p>{item.prop3}</p>}
                {item.prop4 && <p>{item.prop4}</p>}
              </div>
              <button
                onClick={() => handleEdit(item, sectionName)}
                className="px-4 ml-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Szerkesztés
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

interface UtepitesDataDashProps {
  sectionName: keyof UtepitesData;
  sectionTitle: string;
  data: UtepitesData;
  editing: Record<string, any>;
  handleEdit: (item: GepparkItem | null, sectionName: keyof UtepitesData) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, sectionName: keyof UtepitesData) => void;
  cancelEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  highlightedSection: keyof UtepitesData | null;
}

export const UtepitesDataDash: React.FC<UtepitesDataDashProps> = ({
  sectionName,
  sectionTitle,
  data,
  editing,
  handleEdit,
  handleSubmit,
  cancelEdit,
  highlightedSection,
}) => {
  const sectionEditing = editing[sectionName];

  const setSectionEditing = (item: GepparkItem | null) => {
    handleEdit(item, sectionName);
  };

  return (
    <div>
      <h1 className="pb-4 text-xl font-semibold text-white">{sectionTitle}</h1>
      {data[sectionName].map((item: GepparkItem) => (
        <div
          key={item.id}
          className={`mb-4 p-4 mr-2 md:mr-6 border rounded-md shadow-md hover:bg-gray-300 transition-background
          ${highlightedSection === sectionName ? 'bg-green-300' : 'bg-white'} ${highlightedSection === sectionName ? 'hover:bg-green-300' : 'hover:bg-300'}  text-black`}
          >
          {sectionEditing && sectionEditing.id === item.id ? (
            <FormEdit
              sectionEditing={sectionEditing}
              setSectionEditing={setSectionEditing}
              handleSubmit={(e) => handleSubmit(e, sectionName)}
              cancelEdit={cancelEdit}
            />
          ) : (
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>{item.body}</p>
                {item.description && <p>{item.description}</p>}
                {item.prop1 && <p>{item.prop1}</p>}
                {item.prop2 && <p>{item.prop2}</p>}
                {item.prop3 && <p>{item.prop3}</p>}
                {item.prop4 && <p>{item.prop4}</p>}
              </div>
              <button
                onClick={() => handleEdit(item, sectionName)}
                className="px-4 ml-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Szerkesztés
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

interface UtseproDataDashProps {
  sectionName: keyof UtseproData;
  sectionTitle: string;
  data: UtseproData;
  editing: Record<string, any>;
  handleEdit: (item: GepparkItem | null, sectionName: keyof UtseproData) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, sectionName: keyof UtseproData) => void;
  cancelEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  highlightedSection: keyof UtseproData | null;
}

export const UtseproDataDash: React.FC<UtseproDataDashProps> = ({
  sectionName,
  sectionTitle,
  data,
  editing,
  handleEdit,
  handleSubmit,
  cancelEdit,
  highlightedSection,
}) => {
  const sectionEditing = editing[sectionName];

  const setSectionEditing = (item: GepparkItem | null) => {
    handleEdit(item, sectionName);
  };

  return (
    <div>
      <h1 className="pb-4 text-xl font-semibold text-white">{sectionTitle}</h1>
      {data[sectionName].map((item: GepparkItem) => (
        <div
          key={item.id}
          className={`mb-4 p-4 mr-2 md:mr-6 border rounded-md shadow-md hover:bg-gray-300 transition-background
          ${highlightedSection === sectionName ? 'bg-green-300' : 'bg-white'} ${highlightedSection === sectionName ? 'hover:bg-green-300' : 'hover:bg-300'}  text-black`}
        >
          {sectionEditing && sectionEditing.id === item.id ? (
            <FormEdit
              sectionEditing={sectionEditing}
              setSectionEditing={setSectionEditing}
              handleSubmit={(e) => handleSubmit(e, sectionName)}
              cancelEdit={cancelEdit}
            />
          ) : (
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>{item.body}</p>
                {item.description && <p>{item.description}</p>}
                {item.prop1 && <p>{item.prop1}</p>}
                {item.prop2 && <p>{item.prop2}</p>}
                {item.prop3 && <p>{item.prop3}</p>}
                {item.prop4 && <p>{item.prop4}</p>}
              </div>
              <button
                onClick={() => handleEdit(item, sectionName)}
                className="px-4 ml-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Szerkesztés
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

interface KontenerDataDashProps {
  sectionName: keyof KontenerData;
  sectionTitle: string;
  data: KontenerData;
  editing: Record<string, any>;
  handleEdit: (item: GepparkItem | null, sectionName: keyof KontenerData) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, sectionName: keyof KontenerData) => void;
  cancelEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  highlightedSection: keyof KontenerData | null;
}

export const KontenerDataDash: React.FC<KontenerDataDashProps> = ({
  sectionName,
  sectionTitle,
  data,
  editing,
  handleEdit,
  handleSubmit,
  cancelEdit,
  highlightedSection,
}) => {
  const sectionEditing = editing[sectionName];

  const setSectionEditing = (item: GepparkItem | null) => {
    handleEdit(item, sectionName);
  };

  return (
    <div>
      <h1 className="pb-4 text-xl font-semibold text-white">{sectionTitle}</h1>
      {data[sectionName].map((item: GepparkItem) => (
        <div
          key={item.id}
          className={`mb-4 p-4 mr-2 md:mr-6 border rounded-md shadow-md hover:bg-gray-300 transition-background
          ${highlightedSection === sectionName ? 'bg-green-300' : 'bg-white'} ${highlightedSection === sectionName ? 'hover:bg-green-300' : 'hover:bg-300'}  text-black`}
          >
          {sectionEditing && sectionEditing.id === item.id ? (
            <FormEdit
              sectionEditing={sectionEditing}
              setSectionEditing={setSectionEditing}
              handleSubmit={(e) => handleSubmit(e, sectionName)}
              cancelEdit={cancelEdit}
            />
          ) : (
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>{item.body}</p>
                {item.description && <p>{item.description}</p>}
                {item.prop1 && <p>{item.prop1}</p>}
                {item.prop2 && <p>{item.prop2}</p>}
                {item.prop3 && <p>{item.prop3}</p>}
                {item.prop4 && <p>{item.prop4}</p>}
              </div>
              <button
                onClick={() => handleEdit(item, sectionName)}
                className="px-4 ml-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Szerkesztés
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
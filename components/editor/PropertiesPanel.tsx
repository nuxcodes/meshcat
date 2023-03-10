import React, { useCallback, useEffect, VFC } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';
import { useEditorStore } from './store';
import { Euler, Matrix4, Quaternion, Vector3 } from 'three';
import shallow from 'zustand/shallow';
import { MdRestore } from 'react-icons/md/';
import Button from '../ui/Button';
import editable from './editable';

interface Vector3InputProps {
  register: any;
  onBlur?: () => void;
  label: string;
  name: string;
}

const Vector3Input: VFC<Vector3InputProps> = ({
  register,
  onBlur,
  label,
  name,
}) => {
  return (
    <fieldset>
      {/* <Legend>{label}</Legend> */}
      <div className="flex gap-3">
        {/* <FormControl id={`${name}-x`}>
          <Input name={`${name}X`} ref={register} onBlur={onBlur} />
        </FormControl>
        <FormControl id={`${name}-y`}>
          <Input name={`${name}Y`} ref={register} onBlur={onBlur} />
        </FormControl>
        <FormControl id={`${name}-z`}>
          <Input name={`${name}Z`} ref={register} onBlur={onBlur} />
        </FormControl> */}
      </div>
    </fieldset>
  );
};

type Inputs = {
  positionX: string;
  positionY: string;
  positionZ: string;
  rotationX: string;
  rotationY: string;
  rotationZ: string;
  scaleX: string;
  scaleY: string;
  scaleZ: string;
};

const PropertiesPanel: VFC = () => {
  const [selected, setEditableTransform] = useEditorStore(
    (state) => [state.selected, state.setEditableTransform],
    shallow,
  );

  const getFormValuesFromEditable = useCallback(() => {
    if (!selected) {
      return;
    }

    const position = new Vector3();
    const rotation = new Quaternion();
    const scale = new Vector3();

    useEditorStore
      .getState()
      .editables[selected].properties.transform.decompose(
        position,
        rotation,
        scale,
      );

    const rotationEuler = new Euler();
    rotationEuler.setFromQuaternion(rotation);

    return {
      positionX: position.x.toFixed(2),
      positionY: position.y.toFixed(2),
      positionZ: position.z.toFixed(2),
      rotationX: rotationEuler.x.toFixed(2),
      rotationY: rotationEuler.y.toFixed(2),
      rotationZ: rotationEuler.z.toFixed(2),
      scaleX: scale.x.toFixed(2),
      scaleY: scale.y.toFixed(2),
      scaleZ: scale.z.toFixed(2),
    };
  }, [selected]);

  const { handleSubmit, register, setValue, reset } = useForm<Inputs>({
    defaultValues: getFormValuesFromEditable(),
  });

  useEffect(() => {
    if (!selected) {
      return;
    }

    const formValues = getFormValuesFromEditable();
    if (formValues) {
      Object.entries(formValues).forEach(([key, value]) => {
        // avoids rerenders, unlike reset
        setValue(key as any, value);
      });
    }

    const unsub = useEditorStore.subscribe(
      () => {
        const formValues = getFormValuesFromEditable();
        if (formValues) {
          Object.entries(formValues).forEach(([key, value]) => {
            // avoids rerenders, unlike reset
            setValue(key as any, value);
          });
        }
      },
      (state) => state.editables[selected],
    );

    return () => unsub();
  }, [getFormValuesFromEditable, selected, setValue]);

  return selected ? (
    <div className="w-full overflow-y-auto border-l bg-white p-5">
      <h1 className="mb-5 text-3xl">Properties</h1>
      <form
        onSubmit={handleSubmit((values) => {
          const position = new Vector3(
            Number(values.positionX),
            Number(values.positionY),
            Number(values.positionZ),
          );
          const rotation = new Quaternion().setFromEuler(
            new Euler(
              Number(values.rotationX),
              Number(values.rotationY),
              Number(values.rotationZ),
            ),
          );
          const scale = new Vector3(
            Number(values.scaleX),
            Number(values.scaleY),
            Number(values.scaleZ),
          );
          const transform = new Matrix4().compose(position, rotation, scale);
          setEditableTransform(selected, transform);
        })}
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-xl font-medium">
            <div>Transforms</div>
            <Button
              // @ts-ignore
              className="transform rounded-full transition-transform hover:scale-125 focus:outline-none focus:ring"
              onClick={() => {
                const editable = useEditorStore.getState().editables[selected];
                setEditableTransform(
                  selected,
                  editable.initialProperties.transform.clone(),
                );
              }}
            >
              <MdRestore />
            </Button>
          </div>
          <div className="flex w-full items-start justify-evenly">
            <span>{getFormValuesFromEditable()?.positionX}</span>
            <span>{getFormValuesFromEditable()?.positionY}</span>
            <span>{getFormValuesFromEditable()?.positionZ}</span>
          </div>
          <Vector3Input
            register={register}
            onBlur={() => reset(getFormValuesFromEditable())}
            label="Position"
            name="position"
          />
          <Vector3Input
            register={register}
            onBlur={() => reset(getFormValuesFromEditable())}
            label="Rotation"
            name="rotation"
          />
          <Vector3Input
            register={register}
            onBlur={() => reset(getFormValuesFromEditable())}
            label="Scale"
            name="scale"
          />
        </div>
        {/* so that submitting with enter works */}
        {/* <VisuallyHidden as="input" type="submit" /> */}
      </form>
    </div>
  ) : null;
};

export default PropertiesPanel;
